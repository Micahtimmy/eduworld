'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { Send, Sparkles, RotateCcw, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const QUICK_ACTIONS = [
  'Explain this concept',
  'Give me an example',
  'Quiz me on this',
  'Simplify this',
]

interface TutorChatProps {
  subjectContext?: string
  lessonContext?: string
  onClose?: () => void
  className?: string
}

export function TutorChat({ subjectContext, lessonContext, onClose, className }: TutorChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'assistant',
      content: `Hi! I'm your AI tutor. ${subjectContext ? `I can see you're studying ${subjectContext}.` : ''} Ask me anything — I'm here to help!`,
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const send = useCallback(async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || isTyping) return

    setError(null)
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: trimmed,
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    const assistantId = (Date.now() + 1).toString()
    setMessages(prev => [...prev, { id: assistantId, role: 'assistant', content: '', timestamp: new Date() }])

    try {
      abortRef.current = new AbortController()
      const res = await fetch('/api/ai/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })),
          context: { subject: subjectContext, lesson: lessonContext },
        }),
        signal: abortRef.current.signal,
      })

      if (!res.ok) throw new Error('Failed to get response')
      if (!res.body) throw new Error('No response body')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        // Parse SSE
        const lines = chunk.split('\n')
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6)
            if (data === '[DONE]') continue
            try {
              const parsed = JSON.parse(data)
              const text = parsed.delta?.text ?? parsed.text ?? ''
              accumulated += text
              setMessages(prev =>
                prev.map(m => m.id === assistantId ? { ...m, content: accumulated } : m)
              )
            } catch {
              accumulated += data
              setMessages(prev =>
                prev.map(m => m.id === assistantId ? { ...m, content: accumulated } : m)
              )
            }
          }
        }
      }
    } catch (e: unknown) {
      if ((e as Error).name === 'AbortError') return
      setError('Failed to get a response. Please try again.')
      setMessages(prev => prev.filter(m => m.id !== assistantId))
    } finally {
      setIsTyping(false)
    }
  }, [isTyping, messages, subjectContext, lessonContext])

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  function handleReset() {
    abortRef.current?.abort()
    setMessages([{
      id: '0',
      role: 'assistant',
      content: 'Hi! I\'m your AI tutor. Ask me anything!',
      timestamp: new Date(),
    }])
    setIsTyping(false)
    setError(null)
  }

  return (
    <div className={cn('flex flex-col bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden', className)}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-outline-variant bg-ai/5">
        <div className="w-8 h-8 rounded-full bg-ai/20 flex items-center justify-center">
          <Sparkles className="h-4 w-4 text-ai" />
        </div>
        <div className="flex-1">
          <p className="font-label font-semibold text-sm text-on-surface">AI Tutor</p>
          <p className="text-xs text-on-surface-variant">Powered by Claude</p>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={handleReset} className="p-1.5 rounded-lg hover:bg-surface-high text-on-surface-variant" title="Reset chat">
            <RotateCcw className="h-4 w-4" />
          </button>
          {onClose && (
            <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-surface-high text-on-surface-variant">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        {messages.map(msg => (
          msg.role === 'assistant' ? (
            <AIMessage key={msg.id} content={msg.content} isEmpty={msg.content === '' && isTyping} />
          ) : (
            <UserMessage key={msg.id} content={msg.content} />
          )
        ))}
        {isTyping && messages[messages.length - 1]?.content === '' && (
          <TypingIndicator />
        )}
        {error && (
          <p className="text-sm text-error text-center py-2">{error}</p>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick actions */}
      <div className="flex gap-2 px-4 pb-2 overflow-x-auto scrollbar-thin">
        {QUICK_ACTIONS.map(action => (
          <button
            key={action}
            onClick={() => send(action)}
            disabled={isTyping}
            className="whitespace-nowrap text-xs font-label font-semibold px-3 py-1.5 rounded-full bg-ai/10 text-ai-dark hover:bg-ai/20 transition-colors disabled:opacity-50 shrink-0"
          >
            {action}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="px-4 pb-4">
        <div className="flex gap-2 items-end border border-outline-variant rounded-xl bg-surface-lowest focus-within:border-ai focus-within:ring-2 focus-within:ring-ai/20 transition-all">
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            rows={1}
            disabled={isTyping}
            className="flex-1 resize-none bg-transparent px-3 py-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none max-h-32 font-body"
            style={{ fieldSizing: 'content' } as React.CSSProperties}
          />
          <Button
            onClick={() => send(input)}
            disabled={!input.trim() || isTyping}
            size="icon-sm"
            variant="ai"
            className="m-1.5 shrink-0"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

function AIMessage({ content, isEmpty }: { content: string; isEmpty?: boolean }) {
  return (
    <div className="flex gap-2.5 items-start">
      <div className="w-7 h-7 rounded-full bg-ai/20 flex items-center justify-center shrink-0 mt-0.5">
        <Sparkles className="h-3.5 w-3.5 text-ai" />
      </div>
      <div className="flex-1 bg-surface-high rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%]">
        {isEmpty ? (
          <TypingDots />
        ) : (
          <p className="text-sm text-on-surface font-body whitespace-pre-wrap leading-relaxed">{content}</p>
        )}
      </div>
    </div>
  )
}

function UserMessage({ content }: { content: string }) {
  return (
    <div className="flex justify-end">
      <div className="bg-primary text-white rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[85%]">
        <p className="text-sm font-body whitespace-pre-wrap leading-relaxed">{content}</p>
      </div>
    </div>
  )
}

function TypingIndicator() {
  return (
    <div className="flex gap-2.5 items-start">
      <div className="w-7 h-7 rounded-full bg-ai/20 flex items-center justify-center shrink-0">
        <Sparkles className="h-3.5 w-3.5 text-ai" />
      </div>
      <div className="bg-surface-high rounded-2xl rounded-tl-sm px-3.5 py-3">
        <TypingDots />
      </div>
    </div>
  )
}

function TypingDots() {
  return (
    <div className="flex gap-1 items-center h-4">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-ai animate-pulse"
          style={{ animationDelay: `${i * 150}ms` }}
        />
      ))}
    </div>
  )
}
