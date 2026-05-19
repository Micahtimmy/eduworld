'use client'

import Link from 'next/link'

const sidebarStyle: React.CSSProperties = { width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }
const navItemStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500, cursor: 'pointer', marginBottom: 2, textDecoration: 'none' }
const cardStyle: React.CSSProperties = { background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', marginBottom: 20 }

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center' },
  { icon: 'school', label: 'Courses', href: '/scholar/course-registration' },
  { icon: 'science', label: 'Research', href: '/scholar/research-workspace', active: true },
  { icon: 'menu_book', label: 'Library', href: '/scholar/library' },
  { icon: 'work', label: 'Careers', href: '/scholar/careers' },
  { icon: 'people', label: 'Community', href: '/scholar/networking' },
]

const CHAPTERS = [
  { num: 1, title: 'Introduction & Literature Review', words: 4820, target: 5000, status: 'complete' },
  { num: 2, title: 'Theoretical Framework', words: 3200, target: 4000, status: 'complete' },
  { num: 3, title: 'Methodology', words: 2100, target: 3500, status: 'active' },
  { num: 4, title: 'Results & Analysis', words: 800, target: 4000, status: 'draft' },
  { num: 5, title: 'Discussion & Conclusion', words: 0, target: 3000, status: 'pending' },
]

const ADVISOR_NOTES = [
  { name: 'Dr. Aris Thorne', initials: 'AT', time: '2h ago', note: 'Chapter 3 methodology section needs a more rigorous justification for your sample selection criteria. Reference prior art more explicitly.' },
  { name: 'Dr. Maya Chen', initials: 'MC', time: 'Yesterday', note: 'Results in Chapter 2 look promising. The statistical analysis in Section 2.4 is especially compelling.' },
]

export default function ThesisPage() {
  const totalWords = CHAPTERS.reduce((s, c) => s + c.words, 0)
  const totalTarget = CHAPTERS.reduce((s, c) => s + c.target, 0)
  const defenseDate = new Date('2025-11-15')
  const today = new Date('2025-05-18')
  const daysLeft = Math.round((defenseDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

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
          <Link href="/help" style={navItemStyle}><span className="material-symbols-outlined" style={{ fontSize: 20 }}>help</span>Help</Link>
        </div>
      </aside>

      <main style={{ marginLeft: 260, flex: 1, padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <div style={{ fontSize: 12, color: '#424750', marginBottom: 4 }}>Dissertation Workspace</div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Thesis & Dissertation Command</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Quantum Neural Network Architectures for Decoherence Modeling</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Export PDF</button>
            <Link href="/scholar/ai-research" style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 15 }}>✦</span> AI Assistant
            </Link>
          </div>
        </div>

        {/* Defense Countdown */}
        <div style={{ background: daysLeft < 60 ? 'linear-gradient(135deg, #dc2626, #ef4444)' : 'linear-gradient(135deg, #003f7a, #0060b9)', borderRadius: 14, padding: '20px 28px', marginBottom: 24, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 4 }}>DEFENSE DATE</div>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 28 }}>November 15, 2025</div>
            <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>Committee Review Room B · Dr. Aris Thorne, Chair</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 800, fontSize: 48 }}>{daysLeft}</div>
            <div style={{ fontSize: 14, opacity: 0.8 }}>days remaining</div>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 24 }}>{Math.round((totalWords / totalTarget) * 100)}%</div>
              <div style={{ fontSize: 12, opacity: 0.75 }}>Written</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 24 }}>{totalWords.toLocaleString()}</div>
              <div style={{ fontSize: 12, opacity: 0.75 }}>Words</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          <div>
            {/* Chapter Progress */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Chapter Completion</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {CHAPTERS.map(ch => (
                  <div key={ch.num} style={{ border: `1px solid ${ch.status === 'active' ? '#003f7a' : '#c2c6d2'}`, borderRadius: 12, padding: '14px 18px', background: ch.status === 'active' ? '#f0f4ff' : '#f9f9ff' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 28, height: 28, borderRadius: '50%', background: ch.status === 'complete' ? '#d1fae5' : (ch.status === 'active' ? '#003f7a' : '#eef0f4'), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: ch.status === 'complete' ? '#10B981' : (ch.status === 'active' ? '#fff' : '#424750'), flexShrink: 0 }}>
                          {ch.status === 'complete' ? '✓' : ch.num}
                        </div>
                        <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20' }}>Chapter {ch.num}: {ch.title}</div>
                      </div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span style={{ fontSize: 12, color: '#424750' }}>{ch.words.toLocaleString()} / {ch.target.toLocaleString()} words</span>
                        <span style={{
                          fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99,
                          background: ch.status === 'complete' ? '#d1fae5' : ch.status === 'active' ? '#e8f0fe' : ch.status === 'draft' ? '#fef3c7' : '#f9f9ff',
                          color: ch.status === 'complete' ? '#10B981' : ch.status === 'active' ? '#003f7a' : ch.status === 'draft' ? '#d97706' : '#c2c6d2',
                        }}>
                          {ch.status === 'complete' ? 'Complete' : ch.status === 'active' ? 'In Progress' : ch.status === 'draft' ? 'Draft' : 'Pending'}
                        </span>
                      </div>
                    </div>
                    <div style={{ height: 6, borderRadius: 99, background: '#eef0f4', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${Math.min((ch.words / ch.target) * 100, 100)}%`, borderRadius: 99, background: ch.status === 'complete' ? '#10B981' : '#003f7a' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advisor Feedback */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Supervisor Feedback</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {ADVISOR_NOTES.map((n, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, paddingBottom: i === ADVISOR_NOTES.length - 1 ? 0 : 14, borderBottom: i === ADVISOR_NOTES.length - 1 ? 'none' : '1px solid #eef0f4' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#003f7a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{n.initials}</div>
                    <div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span style={{ fontWeight: 700, fontSize: 13, color: '#191c20' }}>{n.name}</span>
                        <span style={{ fontSize: 12, color: '#424750' }}>{n.time}</span>
                      </div>
                      <p style={{ fontSize: 13, color: '#424750', lineHeight: 1.6, marginTop: 6, fontStyle: 'italic' }}>&quot;{n.note}&quot;</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
                <input placeholder="Reply to supervisor..." style={{ flex: 1, padding: '9px 12px', borderRadius: 8, border: '1px solid #c2c6d2', fontSize: 13, outline: 'none' }} />
                <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Send</button>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            {/* AI Analysis */}
            <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 20, marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
                <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 14, color: '#191c20' }}>AI Structural Analysis</span>
              </div>
              <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', borderRadius: 8, padding: 12, marginBottom: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#dc2626', marginBottom: 4 }}>Current Draft</div>
                <p style={{ fontSize: 12, color: '#424750' }}>Informal language, vague phrasing detected in Ch.3</p>
              </div>
              <div style={{ background: '#d1fae5', border: '1px solid #6ee7b7', borderRadius: 8, padding: 12, marginBottom: 12 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#10B981', marginBottom: 4 }}>Suggested Revision</div>
                <p style={{ fontSize: 12, color: '#424750' }}>Replace vague phrasing with statistical precision</p>
              </div>
              <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 14px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%' }}>
                Apply AI Revisions
              </button>
            </div>

            {/* Committee */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>Defense Committee</div>
              {[
                { initials: 'AT', name: 'Dr. Aris Thorne', role: 'Chair · Physics Dept' },
                { initials: 'MC', name: 'Dr. Maya Chen', role: 'Reader · CS Dept' },
                { initials: '?', name: 'External Reviewer', role: 'Pending Assignment' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 10, marginBottom: 10, borderBottom: i === 2 ? 'none' : '1px solid #eef0f4' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: c.initials === '?' ? 'transparent' : '#003f7a', border: c.initials === '?' ? '2px dashed #c2c6d2' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: c.initials === '?' ? '#c2c6d2' : '#fff', flexShrink: 0 }}>{c.initials}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20' }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: '#424750' }}>{c.role}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Milestones */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>Defense Milestones</div>
              {[
                { title: 'Lit Review Submitted', status: 'Completed Oct 1', done: true },
                { title: 'Draft v2 Integration', status: '65% complete', done: false },
                { title: 'Mock Defense Panel', status: 'Scheduled Nov 5', done: false },
                { title: 'Final Oral Defense', status: 'Nov 15, 2025', done: false },
              ].map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, paddingBottom: 10, marginBottom: 10, borderBottom: i === 3 ? 'none' : '1px solid #eef0f4' }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: m.done ? '#d1fae5' : '#f9f9ff', border: `2px solid ${m.done ? '#10B981' : '#c2c6d2'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    {m.done && <span style={{ color: '#10B981', fontSize: 11, fontWeight: 700 }}>✓</span>}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20' }}>{m.title}</div>
                    <div style={{ fontSize: 12, color: m.done ? '#10B981' : '#424750', marginTop: 1 }}>{m.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
