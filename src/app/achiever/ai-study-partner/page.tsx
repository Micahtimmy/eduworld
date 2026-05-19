'use client'
import { useState } from 'react'
import Link from 'next/link'

const MESSAGES = [
  { role: 'ai', text: 'Hey Alex! I see you\'re preparing for AP Calculus BC. What topic would you like to start with today?', time: '10:40 AM' },
  { role: 'user', text: 'Can you explain integration by parts? I keep getting confused about when to use it.', time: '10:41 AM' },
  { role: 'ai', text: 'Great question! Integration by parts uses the formula below. The key is choosing u and dv wisely — pick u as the function that simplifies when differentiated.', time: '10:42 AM', formula: '∫u dv = uv − ∫v du' },
  { role: 'user', text: 'Can you show me an example with ∫x·eˣ dx?', time: '10:43 AM' },
  { role: 'ai', text: 'Perfect example! Let u = x (so du = dx) and dv = eˣ dx (so v = eˣ). Then: ∫x·eˣ dx = x·eˣ − ∫eˣ dx = x·eˣ − eˣ + C = eˣ(x − 1) + C', time: '10:44 AM' },
]

const LINKS = [
  { icon: 'dashboard', label: 'Dashboard', href: '/achiever/dashboard' },
  { icon: 'analytics', label: 'Exam Tracker', href: '/achiever/exam-tracker' },
  { icon: 'storm', label: 'AI Lab', href: '/achiever/ai-study-partner', active: true },
  { icon: 'shopping_cart', label: 'Shop', href: '/achiever/shop' },
  { icon: 'group', label: 'Community', href: '/achiever/leaderboard' },
]

const QUICK_CHIPS = ['Explain this concept', 'Show example', 'Practice quiz', 'Simplify this', 'Check my answer']

function Sidebar() {
  return (
    <aside style={{ width: '260px', minWidth: '260px', background: '#0A0E1A', height: '100vh', position: 'fixed' as const, left: 0, top: 0, display: 'flex', flexDirection: 'column' as const, borderRight: '1px solid rgba(255,255,255,0.06)', zIndex: 40 }}>
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
        <button style={{ width: '100%', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', border: 'none', borderRadius: '10px', padding: '10px 14px', color: '#FFFFFF', fontSize: '13px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '7px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>storm</span>Start AI Session
        </button>
      </div>
      <nav style={{ flex: 1, padding: '0 12px', display: 'flex', flexDirection: 'column' as const, gap: '2px' }}>
        {LINKS.map(l => (
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
  )
}

export default function AchieverAIStudyPartnerPage() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div style={{ background: '#0D1117', minHeight: '100vh', fontFamily: '"Inter", system-ui, sans-serif' }}>
      <style>{`@media(min-width:1024px){.ach-sb{display:flex!important}.ach-main{margin-left:260px!important}.ach-mnav{display:none!important}}`}</style>
      <div className="ach-sb" style={{ display: 'none' }}><Sidebar /></div>

      <div className="ach-main" style={{ marginLeft: 0, display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Chat header */}
        <div style={{ height: '64px', background: '#0D1117', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', padding: '0 20px', gap: '14px', flexShrink: 0 }}>
          <div style={{ width: '38px', height: '38px', background: 'rgba(16,185,129,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '20px' }}>auto_awesome</span>
          </div>
          <div>
            <p style={{ margin: 0, color: '#FFFFFF', fontWeight: 700, fontSize: '15px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
              <span style={{ color: '#F59E0B' }}>✦</span> Achiever AI
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '6px', height: '6px', background: '#22C55E', borderRadius: '50%' }} />
              <span style={{ color: '#22C55E', fontSize: '11px', fontWeight: 500 }}>Online</span>
            </div>
          </div>
          {/* Subject selector */}
          <div style={{ marginLeft: '16px' }}>
            <select style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '6px 12px', color: '#CBD5E1', fontSize: '13px', cursor: 'pointer', outline: 'none' }}>
              <option>AP Calculus BC</option>
              <option>AP Physics C</option>
              <option>AP Biology</option>
              <option>English Literature</option>
            </select>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
            <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '22px', cursor: 'pointer' }}>notifications</span>
            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#FFFFFF', fontSize: '14px', cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>A</div>
          </div>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {MESSAGES.map((msg, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row', gap: '10px', alignItems: 'flex-start' }}>
              {msg.role === 'ai' && (
                <div style={{ width: '32px', height: '32px', background: 'rgba(16,185,129,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '16px' }}>auto_awesome</span>
                </div>
              )}
              <div style={{ maxWidth: '68%', display: 'flex', flexDirection: 'column', gap: '6px', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  background: msg.role === 'ai' ? '#161D2F' : '#06B6D4',
                  borderLeft: msg.role === 'ai' ? '3px solid #10B981' : 'none',
                  borderRadius: msg.role === 'ai' ? '0 14px 14px 14px' : '14px 14px 0 14px',
                  padding: '12px 14px',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  lineHeight: 1.6,
                }}>
                  {msg.text}
                </div>
                {msg.formula && (
                  <div style={{
                    background: '#0D1117',
                    border: '1px solid rgba(6,182,212,0.3)',
                    borderRadius: '10px',
                    padding: '10px 14px',
                    fontFamily: '"JetBrains Mono", "Courier New", monospace',
                    fontSize: '15px',
                    color: '#06B6D4',
                    fontWeight: 600,
                  }}>
                    {msg.formula}
                  </div>
                )}
                <span style={{ color: '#475569', fontSize: '11px' }}>{msg.time}</span>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', background: 'rgba(16,185,129,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '16px' }}>auto_awesome</span>
            </div>
            <div style={{ display: 'flex', gap: '4px', background: '#161D2F', padding: '10px 14px', borderRadius: '0 14px 14px 14px', border: '1px solid rgba(255,255,255,0.06)' }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{ width: '6px', height: '6px', background: '#10B981', borderRadius: '50%', opacity: 0.7 }} />
              ))}
            </div>
          </div>
        </div>

        {/* Quick chips */}
        <div style={{ padding: '0 20px 12px', display: 'flex', gap: '8px', overflowX: 'auto' }}>
          {QUICK_CHIPS.map(chip => (
            <button key={chip} style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '100px',
              padding: '7px 14px',
              color: '#CBD5E1',
              fontSize: '13px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              fontFamily: '"Inter", system-ui, sans-serif',
            }}>{chip}</button>
          ))}
        </div>

        {/* Input bar */}
        <div style={{ padding: '0 20px 16px', flexShrink: 0 }}>
          <div style={{
            background: '#161D2F',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '14px',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <input
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder="Ask anything about your subjects..."
              style={{
                flex: 1,
                background: 'none',
                border: 'none',
                outline: 'none',
                color: '#FFFFFF',
                fontSize: '14px',
                fontFamily: '"Inter", system-ui, sans-serif',
              }}
            />
            <button style={{
              width: '36px',
              height: '36px',
              background: '#06B6D4',
              border: 'none',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}>
              <span className="material-symbols-outlined" style={{ color: '#FFFFFF', fontSize: '18px' }}>send</span>
            </button>
          </div>
          <p style={{ color: '#475569', fontSize: '11px', marginTop: '6px', textAlign: 'center' }}>EWD-028 · AI Study Partner can make mistakes. Verify important information.</p>
        </div>
      </div>

      <div className="ach-mnav" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#0A0E1A', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', zIndex: 50, padding: '8px 0 12px' }}>
        {[{ icon: 'dashboard', label: 'Home', href: '/achiever/dashboard' }, { icon: 'analytics', label: 'Exams', href: '/achiever/exam-tracker' }, { icon: 'storm', label: 'AI', href: '/achiever/ai-study-partner', active: true }, { icon: 'group', label: 'Community', href: '/achiever/leaderboard' }].map(item => (
          <Link key={item.href} href={item.href} style={{ flex: 1, textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
            <span className="material-symbols-outlined" style={{ color: item.active ? '#06B6D4' : '#94A3B8', fontSize: '22px' }}>{item.icon}</span>
            <span style={{ color: item.active ? '#06B6D4' : '#94A3B8', fontSize: '10px', fontWeight: item.active ? 600 : 400 }}>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
