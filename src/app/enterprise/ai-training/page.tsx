'use client'
import { useState } from 'react'
import Link from 'next/link'

const T = {
  bg: '#f4f4f8', surface: '#ffffff', textPrimary: '#0f0f1a',
  textMuted: '#6b7280', border: '#e5e7eb',
  purple: '#6366f1', purpleLight: '#818cf8', purpleDim: '#eef2ff',
  indigo: '#4f46e5', success: '#10b981', warning: '#f59e0b', error: '#ef4444',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
  sidebarBg: '#1e1e2e', sidebarText: '#a1a1c7', sidebarActive: '#2e2e4e',
}

const sidebarItems = [
  { icon: 'corporate_fare', label: 'Dashboard', href: '/enterprise/dashboard' },
  { icon: 'group', label: 'Employees', href: '/enterprise/employees' },
  { icon: 'school', label: 'Programs', href: '/enterprise/programs' },
  { icon: 'troubleshoot', label: 'Skills Gap', href: '/enterprise/skills-gap' },
  { icon: 'trending_up', label: 'Performance', href: '/enterprise/employee-performance' },
  { icon: 'analytics', label: 'ROI Analytics', href: '/enterprise/roi' },
  { icon: 'psychology', label: 'AI Training', href: '/enterprise/ai-training', active: true },
]

const AI_PROGRAMS = [
  { id: 'p1', name: 'Leadership Excellence', enrolled: 145, completion: 74, ai: true },
  { id: 'p2', name: 'Technical Skills 2025', enrolled: 280, completion: 61, ai: true },
  { id: 'p3', name: 'Compliance Training', enrolled: 412, completion: 88, ai: false },
]

type ChatMessage = { role: 'user' | 'ai'; text: string }

const INITIAL_MESSAGES: ChatMessage[] = [
  { role: 'ai', text: 'Hello! I\'m your AI training assistant. I can help you design programs, identify skill gaps, or recommend learning paths for your employees. What would you like to explore?' },
]

function Sidebar() {
  return (
    <aside style={{ width: 240, minHeight: '100vh', background: T.sidebarBg, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: '#ffffff' }}>EduWorld</div>
        <span style={{ display: 'inline-block', marginTop: 5, fontSize: 11, fontWeight: 600, color: T.purpleLight, background: 'rgba(129,140,248,0.15)', borderRadius: 6, padding: '2px 8px' }}>Enterprise</span>
      </div>
      <nav style={{ flex: 1, padding: '16px 10px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 8, marginBottom: 2, background: item.active ? T.sidebarActive : 'transparent', color: item.active ? '#ffffff' : T.sidebarText, fontFamily: T.fontBody, fontWeight: item.active ? 600 : 400, fontSize: 13 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default function EnterpriseAITrainingPage() {
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')

  function sendMessage() {
    if (!input.trim()) return
    const userMsg: ChatMessage = { role: 'user', text: input }
    const aiReply: ChatMessage = { role: 'ai', text: 'Great question! Based on your workforce data, I recommend focusing on the AI & Machine Learning track for your Engineering team first. Would you like me to generate a full program outline?' }
    setMessages(prev => [...prev, userMsg, aiReply])
    setInput('')
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>AI Training Programs</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Personalised learning powered by Claude AI</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={() => setShowChat(v => !v)}
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>psychology</span>
              {showChat ? 'Close' : 'AI Assistant'}
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 18px', background: T.purple, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>New Program
            </button>
          </div>
        </div>

        {/* AI Chat Panel */}
        {showChat && (
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, overflow: 'hidden', marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', borderBottom: `1px solid ${T.border}`, background: T.success + '08' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 14, color: T.success }}>✦</span>
                <div style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary }}>AI Training Assistant</div>
                <span style={{ fontSize: 10, fontWeight: 700, background: T.success + '20', color: T.success, padding: '2px 8px', borderRadius: 20 }}>Online</span>
              </div>
              <button onClick={() => setShowChat(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>close</span>
              </button>
            </div>
            <div style={{ height: 220, overflowY: 'auto', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{
                    maxWidth: '75%', padding: '10px 14px', borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: msg.role === 'user' ? T.purple : T.bg,
                    color: msg.role === 'user' ? '#fff' : T.textPrimary,
                    fontSize: 13, lineHeight: 1.5,
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10, padding: '12px 18px', borderTop: `1px solid ${T.border}` }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Ask about training programs, skills gaps, or employee development..."
                style={{ flex: 1, height: 38, padding: '0 14px', borderRadius: 10, border: `1px solid ${T.border}`, fontSize: 13, color: T.textPrimary, background: T.bg, outline: 'none', fontFamily: T.fontBody }}
              />
              <button onClick={sendMessage} style={{ padding: '0 16px', background: T.purple, border: 'none', borderRadius: 10, color: '#fff', cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, display: 'block' }}>send</span>
              </button>
            </div>
          </div>
        )}

        {/* AI Impact Banner */}
        <div style={{ background: `linear-gradient(135deg, ${T.success}20 0%, ${T.success}08 100%)`, border: `1px solid ${T.success}30`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: T.success + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 26, color: T.success }}>auto_awesome</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 15, color: T.textPrimary, marginBottom: 4 }}>AI-Powered Personalisation</div>
              <p style={{ fontSize: 13, color: T.textMuted }}>Claude adapts each program to the individual employee's role, skill level, and learning pace.</p>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 26, color: T.success }}>+23%</div>
              <div style={{ fontSize: 11, color: T.textMuted }}>completion vs standard</div>
            </div>
          </div>
        </div>

        {/* Programs List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {AI_PROGRAMS.map(program => (
            <div key={program.id} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: T.success + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.success }}>psychology</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary }}>{program.name}</div>
                  {program.ai && (
                    <span style={{ fontSize: 10, fontWeight: 700, background: T.success + '15', color: T.success, padding: '2px 8px', borderRadius: 20 }}>✦ AI-Powered</span>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: T.textMuted }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>group</span>
                    {program.enrolled} enrolled
                  </div>
                  <div style={{ width: 96, height: 5, background: T.border + '60', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${program.completion}%`, background: program.completion >= 80 ? T.success : T.purple, borderRadius: 3 }} />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary }}>{program.completion}%</span>
                </div>
              </div>
              <button style={{ padding: '8px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>Manage</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
