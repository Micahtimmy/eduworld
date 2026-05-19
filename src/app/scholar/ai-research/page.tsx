'use client'

import { useState } from 'react'
import Link from 'next/link'

const sidebarStyle: React.CSSProperties = { width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }
const navItemStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500, cursor: 'pointer', marginBottom: 2, textDecoration: 'none' }

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center' },
  { icon: 'school', label: 'Courses', href: '/scholar/course-registration' },
  { icon: 'science', label: 'Research', href: '/scholar/research-workspace', active: true },
  { icon: 'menu_book', label: 'Library', href: '/scholar/library' },
  { icon: 'work', label: 'Careers', href: '/scholar/careers' },
  { icon: 'people', label: 'Community', href: '/scholar/networking' },
]

const MESSAGES = [
  { role: 'ai', text: 'Welcome to AI Research Assistant. I can help you find academic papers, generate citations, analyze your research gaps, and assist with your thesis. What are you working on today?' },
  { role: 'user', text: 'I\'m researching quantum neural networks and need recent papers on decoherence mitigation.' },
  { role: 'ai', text: 'I found 6 highly relevant papers. Here are the top 3:\n\n1. Chen, W. et al. (2024). "Adaptive Decoherence Mitigation in Hybrid Quantum-Classical Neural Networks." Nature Physics, 20, 445–452.\n\n2. Preskill, J. & Kim, S. (2023). "Error-Resilient Quantum Machine Learning." Quantum, 7, 891.\n\n3. Santos, M. et al. (2023). "Topological Protection in Quantum Neural Architectures." Physical Review Letters, 131, 180501.\n\nShall I generate APA citations for all three?' },
  { role: 'user', text: 'Yes, APA citations please, and check if any of them contradict my claim in Section 2.3 about decoherence thresholds.' },
]

const CHIPS = ['Search ArXiv', 'Generate Citation', 'Summarize Paper', 'Check Plagiarism', 'Find Related Work', 'Analyze Gaps']

export default function AIResearchPage() {
  const [input, setInput] = useState('')

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9f9ff', fontFamily: '"Inter", system-ui, sans-serif' }}>
      <aside style={sidebarStyle}>
        <div style={{ padding: '24px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ color: '#fff', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20 }}>EduWorld</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 2 }}>Scholar Portal</div>
        </div>
        <nav style={{ flex: 1, padding: '12px 12px', overflowY: 'auto' }}>
          {NAV.map(item => (
            <Link key={item.href} href={item.href} style={{ ...navItemStyle, ...(item.active ? { background: 'rgba(255,255,255,0.15)', borderLeft: '3px solid #fff', paddingLeft: 9, color: '#fff' } : {}) }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div style={{ padding: '12px 12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Link href="/settings" style={navItemStyle}><span className="material-symbols-outlined" style={{ fontSize: 20 }}>settings</span>Settings</Link>
        </div>
      </aside>

      <main style={{ marginLeft: 260, flex: 1, display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Header */}
        <div style={{ padding: '20px 32px', borderBottom: '1px solid #c2c6d2', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: '#f0fdf4', border: '1px solid #a7f3d0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#10B981', fontSize: 20, fontWeight: 700 }}>✦</span>
            </div>
            <div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 17, color: '#191c20' }}>AI Research Assistant</div>
              <div style={{ fontSize: 12, color: '#10B981', fontWeight: 600 }}>● Online · Research Mode</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ background: '#f9f9ff', border: '1px solid #c2c6d2', borderRadius: 8, padding: '7px 14px', fontSize: 13, fontWeight: 600, cursor: 'pointer', color: '#424750' }}>New Session</button>
            <button style={{ background: '#f9f9ff', border: '1px solid #c2c6d2', borderRadius: 8, padding: '7px 14px', fontSize: 13, fontWeight: 600, cursor: 'pointer', color: '#424750' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, verticalAlign: 'middle' }}>history</span>
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px 32px', display: 'flex', gap: 24 }}>
          {/* Messages */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 700 }}>
              {MESSAGES.map((msg, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  {msg.role === 'ai' && (
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#f0fdf4', border: '1px solid #a7f3d0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 10, flexShrink: 0, marginTop: 4 }}>
                      <span style={{ color: '#10B981', fontSize: 14, fontWeight: 700 }}>✦</span>
                    </div>
                  )}
                  <div style={{
                    maxWidth: '78%',
                    background: msg.role === 'user' ? '#003f7a' : '#fff',
                    color: msg.role === 'user' ? '#fff' : '#191c20',
                    border: msg.role === 'ai' ? '1px solid #c2c6d2' : 'none',
                    borderRadius: 12,
                    padding: '12px 16px',
                    fontSize: 14,
                    lineHeight: 1.6,
                    whiteSpace: 'pre-wrap',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                  }}>
                    {msg.text}
                    {msg.role === 'ai' && i === MESSAGES.length - 1 && (
                      <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
                        <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 6, padding: '5px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Generate APA Citations</button>
                        <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 6, padding: '5px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Analyze Section 2.3</button>
                        <button style={{ background: '#fff', color: '#424750', border: '1px solid #c2c6d2', borderRadius: 6, padding: '5px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Save to Library</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#f0fdf4', border: '1px solid #a7f3d0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: '#10B981', fontSize: 14, fontWeight: 700 }}>✦</span>
                </div>
                <div style={{ background: '#fff', border: '1px solid #c2c6d2', borderRadius: 12, padding: '12px 16px' }}>
                  <div style={{ display: 'flex', gap: 5 }}>
                    {[0, 1, 2].map(i => (
                      <div key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981', opacity: 0.4 + i * 0.2 }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div style={{ width: 280, flexShrink: 0 }}>
            {/* Session Stats */}
            <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 18, marginBottom: 16 }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 14, color: '#191c20', marginBottom: 12 }}>Session Stats</div>
              {[
                { label: 'Papers Found', value: '6' },
                { label: 'Citations Generated', value: '3' },
                { label: 'Session Time', value: '12 min' },
                { label: 'Tokens Used', value: '2,840' },
              ].map(s => (
                <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 8, marginBottom: 8, borderBottom: '1px solid #eef0f4' }}>
                  <span style={{ fontSize: 13, color: '#424750' }}>{s.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#191c20' }}>{s.value}</span>
                </div>
              ))}
            </div>

            {/* Citation Generator */}
            <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 18, marginBottom: 16 }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 14, color: '#191c20', marginBottom: 10 }}>Citation Format</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
                {['APA 7', 'MLA 9', 'Chicago', 'IEEE'].map((f, i) => (
                  <button key={f} style={{ background: i === 0 ? '#003f7a' : '#f9f9ff', color: i === 0 ? '#fff' : '#424750', border: '1px solid #c2c6d2', borderRadius: 99, padding: '4px 10px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>{f}</button>
                ))}
              </div>
              <div style={{ background: '#f9f9ff', borderRadius: 8, padding: 10, fontSize: 12, color: '#191c20', fontFamily: '"Courier Prime", monospace', lineHeight: 1.5 }}>
                Chen, W., Kim, J., & Park, S. (2024). Adaptive decoherence mitigation in hybrid quantum-classical neural networks. <em>Nature Physics</em>, 20, 445–452. https://doi.org/10.1038/...
              </div>
              <button style={{ marginTop: 10, background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 6, padding: '6px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer', width: '100%' }}>📋 Copy Citation</button>
            </div>

            {/* Related Papers */}
            <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 18 }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 14, color: '#191c20', marginBottom: 12 }}>Found Papers</div>
              {[
                { title: 'Adaptive Decoherence Mitigation...', venue: 'Nature Physics 2024', match: '98%' },
                { title: 'Error-Resilient Quantum ML', venue: 'Quantum 2023', match: '91%' },
                { title: 'Topological Protection in QNN', venue: 'PRL 2023', match: '87%' },
              ].map((p, i) => (
                <div key={i} style={{ borderBottom: i === 2 ? 'none' : '1px solid #eef0f4', paddingBottom: 10, marginBottom: 10 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#191c20', marginBottom: 3 }}>{p.title}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: '#424750' }}>{p.venue}</span>
                    <span style={{ background: '#d1fae5', color: '#10B981', fontSize: 11, fontWeight: 700, padding: '1px 6px', borderRadius: 99 }}>{p.match}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div style={{ padding: '16px 32px', borderTop: '1px solid #c2c6d2', background: '#fff' }}>
          <div style={{ overflowX: 'auto', display: 'flex', gap: 8, marginBottom: 12, paddingBottom: 2 }}>
            {CHIPS.map(c => (
              <button key={c} style={{ background: '#f0fdf4', color: '#10B981', border: '1px solid #a7f3d0', borderRadius: 99, padding: '5px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>{c}</button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about research, request citations, search papers..."
              style={{ flex: 1, padding: '12px 16px', borderRadius: 10, border: '1px solid #c2c6d2', fontSize: 14, outline: 'none', fontFamily: '"Inter", system-ui, sans-serif' }}
            />
            <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 10, padding: '12px 18px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600, fontSize: 13 }}>
              <span style={{ fontSize: 15 }}>✦</span> Send
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
