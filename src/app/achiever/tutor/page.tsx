'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

type Message = { role: 'ai' | 'user'; text: string; time: string }

const INITIAL_MESSAGES: Message[] = [
  { role: 'ai', text: "Hello Alex! I'm your Achiever AI Study Partner. I can help you with AP Calculus, Physics, Biology, Chemistry, and English Literature. What would you like to work on today?", time: '10:01 AM' },
  { role: 'user', text: "Can you explain integration by parts to me?", time: '10:02 AM' },
  { role: 'ai', text: "Integration by parts is based on the product rule of differentiation. The formula is:\n\n∫u dv = uv − ∫v du\n\nHere's how to apply it:\n1. Choose u and dv from your integral\n2. Differentiate u to get du\n3. Integrate dv to get v\n4. Substitute into the formula\n\nA good rule of thumb for choosing u: prefer Logarithms, Inverse trig, Algebraic, Trigonometric, Exponential (LIATE order).", time: '10:02 AM' },
]

const CHIPS = ['Explain this concept', 'Give me a practice problem', 'Create a study plan', 'Quiz me on this topic', 'Summarize key formulas']

export default function AchieverTutorPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [subject, setSubject] = useState('AP Calculus BC')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  function sendMessage(text: string) {
    if (!text.trim()) return
    const now = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    setMessages(prev => [...prev, { role: 'user', text, time: now }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { role: 'ai', text: "Great question! Let me work through that with you step by step. Based on your current performance in " + subject + ", I'd suggest focusing on the core concepts first before tackling practice problems. Would you like me to generate a targeted exercise for you?", time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }])
    }, 1800)
  }

  return (
    <div style={{ background: '#0D1117', minHeight: '100vh', fontFamily: '"Inter", system-ui, sans-serif', display: 'flex', flexDirection: 'column' as const }}>
      <style>{`@media(min-width:1024px){.ach-sb{display:flex!important}.ach-main{margin-left:260px!important}.ach-mnav{display:none!important}}`}</style>

      <aside className="ach-sb" style={{ display: 'none', width: '260px', minWidth: '260px', background: '#0A0E1A', height: '100vh', position: 'fixed' as const, left: 0, top: 0, flexDirection: 'column' as const, borderRight: '1px solid rgba(255,255,255,0.06)', zIndex: 40 }}>
        <div style={{ padding: '24px 20px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 800, color: '#FFFFFF', fontSize: '16px' }}>A</div>
            <div>
              <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '15px', margin: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>Achievers</p>
              <p style={{ color: '#94A3B8', fontSize: '11px', margin: 0 }}>Study Smarter</p>
            </div>
          </div>
        </div>
        <div style={{ padding: '0 16px 20px' }}>
          <Link href="/achiever/ai-study-partner" style={{ textDecoration: 'none' }}>
            <button style={{ width: '100%', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', border: 'none', borderRadius: '10px', padding: '10px 14px', color: '#FFFFFF', fontSize: '13px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '7px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>storm</span>Start AI Session
            </button>
          </Link>
        </div>
        <nav style={{ flex: 1, padding: '0 12px', display: 'flex', flexDirection: 'column' as const, gap: '2px' }}>
          {[
            { icon: 'dashboard', label: 'Dashboard', href: '/achiever/dashboard' },
            { icon: 'analytics', label: 'Exam Tracker', href: '/achiever/exam-tracker' },
            { icon: 'storm', label: 'AI Lab', href: '/achiever/ai-study-partner', active: true },
            { icon: 'shopping_cart', label: 'Shop', href: '/achiever/shop' },
            { icon: 'group', label: 'Community', href: '/achiever/leaderboard' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '10px', background: l.active ? 'rgba(6,182,212,0.12)' : 'transparent', cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ color: l.active ? '#06B6D4' : '#94A3B8', fontSize: '20px' }}>{l.icon}</span>
                <span style={{ color: l.active ? '#06B6D4' : '#94A3B8', fontSize: '14px', fontWeight: l.active ? 600 : 400 }}>{l.label}</span>
              </div>
            </Link>
          ))}
        </nav>
        <div style={{ padding: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {[{ icon: 'settings', label: 'Settings', href: '/settings' }, { icon: 'help', label: 'Help', href: '#' }].map(l => (
            <Link key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 12px', borderRadius: '10px', cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '20px' }}>{l.icon}</span>
                <span style={{ color: '#94A3B8', fontSize: '14px' }}>{l.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </aside>

      <div className="ach-main" style={{ marginLeft: 0, display: 'flex', flexDirection: 'column' as const, height: '100vh' }}>
        {/* Chat header */}
        <div style={{ height: '60px', background: '#0A0E1A', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '34px', height: '34px', background: 'linear-gradient(135deg, #10B981, #06B6D4)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ color: '#FFFFFF', fontSize: '18px', fontVariationSettings: '"FILL" 1' }}>storm</span>
            </div>
            <div>
              <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '14px', margin: 0 }}>✦ Achiever AI</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '6px', height: '6px', background: '#10B981', borderRadius: '50%' }} />
                <span style={{ color: '#10B981', fontSize: '11px' }}>Online</span>
              </div>
            </div>
          </div>
          <select
            value={subject}
            onChange={e => setSubject(e.target.value)}
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '6px 10px', color: '#CBD5E1', fontSize: '12px', cursor: 'pointer', outline: 'none' }}
          >
            {['AP Calculus BC', 'AP Physics C', 'AP Biology', 'English Literature', 'AP Chemistry'].map(s => (
              <option key={s} value={s} style={{ background: '#161D2F' }}>{s}</option>
            ))}
          </select>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto' as const, padding: '20px 24px', display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start', gap: '10px' }}>
              {msg.role === 'ai' && (
                <div style={{ width: '30px', height: '30px', background: 'linear-gradient(135deg, #10B981, #06B6D4)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <span className="material-symbols-outlined" style={{ color: '#FFFFFF', fontSize: '14px', fontVariationSettings: '"FILL" 1' }}>storm</span>
                </div>
              )}
              <div style={{ maxWidth: '70%' }}>
                <div style={{
                  background: msg.role === 'ai' ? '#161D2F' : '#06B6D4',
                  borderLeft: msg.role === 'ai' ? '3px solid #10B981' : 'none',
                  borderRadius: msg.role === 'ai' ? '4px 12px 12px 12px' : '12px 4px 12px 12px',
                  padding: '12px 14px',
                }}>
                  <p style={{ color: '#E2E8F0', fontSize: '13px', margin: 0, lineHeight: 1.6, whiteSpace: 'pre-wrap' as const }}>{msg.text}</p>
                </div>
                <p style={{ color: '#475569', fontSize: '10px', margin: '4px 6px 0', textAlign: msg.role === 'user' ? 'right' : 'left' }}>{msg.time}</p>
              </div>
            </div>
          ))}
          {typing && (
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <div style={{ width: '30px', height: '30px', background: 'linear-gradient(135deg, #10B981, #06B6D4)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span className="material-symbols-outlined" style={{ color: '#FFFFFF', fontSize: '14px', fontVariationSettings: '"FILL" 1' }}>storm</span>
              </div>
              <div style={{ background: '#161D2F', borderLeft: '3px solid #10B981', borderRadius: '4px 12px 12px 12px', padding: '12px 16px', display: 'flex', gap: '5px', alignItems: 'center' }}>
                {[0, 1, 2].map(d => (
                  <div key={d} style={{ width: '6px', height: '6px', background: '#10B981', borderRadius: '50%', animation: 'pulse 1.4s ease-in-out infinite', animationDelay: `${d * 0.2}s` }} />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick chips */}
        <div style={{ padding: '0 24px 10px', display: 'flex', gap: '8px', overflowX: 'auto' as const }}>
          {CHIPS.map(chip => (
            <button key={chip} onClick={() => sendMessage(chip)} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '6px 14px', color: '#CBD5E1', fontSize: '12px', whiteSpace: 'nowrap', cursor: 'pointer', flexShrink: 0 }}>{chip}</button>
          ))}
        </div>

        {/* Input */}
        <div style={{ padding: '12px 24px 24px', background: '#0A0E1A', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
            placeholder="Ask anything about your studies..."
            style={{ flex: 1, background: '#161D2F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px 16px', color: '#FFFFFF', fontSize: '14px', outline: 'none' }}
          />
          <button onClick={() => sendMessage(input)} style={{ background: 'linear-gradient(135deg, #10B981, #06B6D4)', border: 'none', borderRadius: '12px', width: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
            <span className="material-symbols-outlined" style={{ color: '#FFFFFF', fontSize: '20px', fontVariationSettings: '"FILL" 1' }}>send</span>
          </button>
        </div>
      </div>

      <div className="ach-mnav" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#0A0E1A', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', zIndex: 50, padding: '8px 0 12px' }}>
        {[{ icon: 'dashboard', label: 'Home', href: '/achiever/dashboard' }, { icon: 'analytics', label: 'Exams', href: '/achiever/exam-tracker' }, { icon: 'storm', label: 'AI', href: '/achiever/ai-study-partner', active: true }, { icon: 'group', label: 'Community', href: '/achiever/leaderboard' }].map(item => (
          <Link key={item.href} href={item.href} style={{ flex: 1, textDecoration: 'none', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '3px' }}>
            <span className="material-symbols-outlined" style={{ color: (item as { active?: boolean }).active ? '#06B6D4' : '#94A3B8', fontSize: '22px' }}>{item.icon}</span>
            <span style={{ color: (item as { active?: boolean }).active ? '#06B6D4' : '#94A3B8', fontSize: '10px', fontWeight: (item as { active?: boolean }).active ? 600 : 400 }}>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
