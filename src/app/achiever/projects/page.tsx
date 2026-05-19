'use client'
import { useState } from 'react'
import Link from 'next/link'

const TASKS = [
  { col: 'To Do', title: 'Research specific case studies on AI decision bias in healthcare systems', tag: 'High Priority', tagColor: '#EF4444', assignee: 'AM' },
  { col: 'To Do', title: 'Compile bibliography and citation list (Chicago format)', tag: 'Task', tagColor: '#475569', assignee: null },
  { col: 'In Progress', title: "Draft 'Introduction' and 'Methodology' sections", tag: 'Drafting', tagColor: '#3B82F6', assignee: 'SJ' },
  { col: 'Review', title: 'Outline structure of the final presentation deck.', tag: 'Needs Feedback', tagColor: '#F59E0B', assignee: 'DK' },
]

const DOCS = [
  { icon: 'description', name: 'Draft_v2_Main_Body.docx', status: 'Updated 2h ago by Alex', color: '#3B82F6' },
  { icon: 'picture_as_pdf', name: 'Healthcare_Guidelines_2024.pdf', status: 'Added yesterday', color: '#EF4444' },
  { icon: 'table_chart', name: 'Dataset_Analysis.xlsx', status: 'Updated 3 days ago', color: '#22C55E' },
]

const CHAT = [
  { initials: 'SJ', name: 'Sarah J.', time: '10:42 AM', msg: "Hey team, I've finished the draft for the methodology section.", mine: false },
  { initials: 'DK', name: 'David K.', time: '11:15 AM', msg: "Looks solid. I'll add the statistical analysis charts this afternoon.", mine: false },
  { initials: 'AJ', name: 'You', time: 'Just now', msg: "Great. I'll prep the slide deck once the charts are in.", mine: true },
]

const COLS = ['To Do', 'In Progress', 'Review']

export default function AchieverProjectsPage() {
  const [chatInput, setChatInput] = useState('')
  const [messages, setMessages] = useState(CHAT)

  function sendMsg() {
    if (!chatInput.trim()) return
    const now = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    setMessages(prev => [...prev, { initials: 'AJ', name: 'You', time: now, msg: chatInput, mine: true }])
    setChatInput('')
  }

  return (
    <div style={{ background: '#0D1117', minHeight: '100vh', fontFamily: '"Inter", system-ui, sans-serif' }}>
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
            { icon: 'storm', label: 'AI Lab', href: '/achiever/ai-study-partner' },
            { icon: 'shopping_cart', label: 'Shop', href: '/achiever/shop' },
            { icon: 'group', label: 'Community', href: '/achiever/leaderboard' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '10px', background: 'transparent', cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '20px' }}>{l.icon}</span>
                <span style={{ color: '#94A3B8', fontSize: '14px' }}>{l.label}</span>
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

      <div className="ach-main" style={{ marginLeft: 0 }}>
        <div style={{ height: '60px', background: '#0D1117', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', position: 'sticky' as const, top: 0, zIndex: 30 }}>
          <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '18px', margin: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>Welcome back, Alex</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '100px', padding: '5px 12px' }}>
              <span className="material-symbols-outlined" style={{ color: '#F59E0B', fontSize: '14px', fontVariationSettings: '"FILL" 1' }}>military_tech</span>
              <span style={{ color: '#F59E0B', fontWeight: 700, fontSize: '12px' }}>2,450 XP</span>
            </div>
          </div>
        </div>

        <div style={{ padding: '28px' }}>
          {/* Project header */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ background: 'rgba(245,158,11,0.15)', color: '#F59E0B', borderRadius: '100px', padding: '3px 10px', fontSize: '12px', fontWeight: 600 }}>Drafting Phase</span>
              <span style={{ background: 'rgba(239,68,68,0.12)', color: '#EF4444', borderRadius: '100px', padding: '3px 10px', fontSize: '12px', fontWeight: 600 }}>Due in 4 days</span>
            </div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '24px', margin: '0 0 6px' }}>Advanced Machine Learning Ethics</h1>
            <p style={{ color: '#94A3B8', fontSize: '14px', margin: '0 0 10px' }}>Final group paper exploring the ethical implications of autonomous decision-making systems.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {['AM', 'SJ', 'DK'].map((m, i) => (
                <div key={m} style={{ width: '28px', height: '28px', background: `rgba(6,182,212,0.2)`, border: '2px solid #0D1117', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, color: '#06B6D4', fontSize: '10px', marginLeft: i > 0 ? '-8px' : '0' }}>{m}</div>
              ))}
              <span style={{ color: '#94A3B8', fontSize: '12px', marginLeft: '4px' }}>+2 members</span>
            </div>
          </div>

          {/* Task Board */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: 0 }}>Task Board</h2>
              <button style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: '8px', padding: '6px 12px', color: '#06B6D4', fontSize: '12px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>add</span>
                Add Task
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
              {COLS.map(col => (
                <div key={col} style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', padding: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <p style={{ color: '#64748B', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: 0 }}>{col}</p>
                    <span style={{ background: 'rgba(255,255,255,0.08)', color: '#94A3B8', borderRadius: '100px', padding: '2px 7px', fontSize: '11px', fontWeight: 600 }}>{TASKS.filter(t => t.col === col).length}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '8px' }}>
                    {TASKS.filter(t => t.col === col).map(task => (
                      <div key={task.title} style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '12px' }}>
                        <p style={{ color: '#CBD5E1', fontSize: '12px', fontWeight: 500, margin: '0 0 8px', lineHeight: 1.5 }}>{task.title}</p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ background: `${task.tagColor}15`, color: task.tagColor, borderRadius: '4px', padding: '2px 8px', fontSize: '10px', fontWeight: 600 }}>{task.tag}</span>
                          {task.assignee && (
                            <div style={{ width: '22px', height: '22px', background: 'rgba(6,182,212,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, color: '#06B6D4', fontSize: '9px' }}>{task.assignee}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insight */}
          <div style={{ background: 'rgba(16,185,129,0.04)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '14px', padding: '16px 18px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '20px' }}>auto_awesome</span>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#10B981', fontWeight: 700, fontSize: '13px', margin: '0 0 3px' }}>EduWorld AI Insight</p>
              <p style={{ color: '#CBD5E1', fontSize: '13px', margin: 0 }}>Consider adding a section on the &ldquo;Black Box&rdquo; problem in medical diagnostics — high-impact for your thesis argument.</p>
            </div>
            <button style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '7px 14px', color: '#10B981', fontSize: '12px', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>Generate Outline</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* Documents */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '15px', margin: 0 }}>Documents</h2>
                <button style={{ background: 'rgba(255,255,255,0.06)', border: 'none', borderRadius: '8px', padding: '6px 12px', color: '#CBD5E1', fontSize: '12px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>upload</span>
                  Upload
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '8px' }}>
                {DOCS.map(d => (
                  <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', cursor: 'pointer' }}>
                    <span className="material-symbols-outlined" style={{ color: d.color, fontSize: '22px', fontVariationSettings: '"FILL" 1', flexShrink: 0 }}>{d.icon}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ color: '#FFFFFF', fontWeight: 500, fontSize: '13px', margin: '0 0 2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{d.name}</p>
                      <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>{d.status}</p>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: '#475569', fontSize: '16px' }}>download</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: '10px', padding: '10px 14px', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#06B6D4', fontSize: '18px' }}>videocam</span>
                <div style={{ flex: 1 }}>
                  <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '13px', margin: '0 0 2px' }}>Quick Huddle</p>
                  <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>Start instant meeting with group</p>
                </div>
                <button style={{ background: '#06B6D4', border: 'none', borderRadius: '8px', padding: '6px 12px', color: '#FFFFFF', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>Join</button>
              </div>
            </div>

            {/* Project Chat */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '15px', margin: 0 }}>Project Chat</h2>
              </div>
              <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column' as const, gap: '12px', minHeight: '180px' }}>
                {messages.map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', justifyContent: c.mine ? 'flex-end' : 'flex-start' }}>
                    {!c.mine && (
                      <div style={{ width: '26px', height: '26px', background: 'rgba(6,182,212,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, color: '#06B6D4', fontSize: '9px', flexShrink: 0, marginTop: '2px' }}>{c.initials}</div>
                    )}
                    <div style={{ maxWidth: '75%' }}>
                      <div style={{ background: c.mine ? '#06B6D4' : 'rgba(255,255,255,0.06)', borderRadius: c.mine ? '12px 4px 12px 12px' : '4px 12px 12px 12px', padding: '10px 12px' }}>
                        <p style={{ color: '#94A3B8', fontSize: '10px', margin: '0 0 3px', fontWeight: 600 }}>{c.name}</p>
                        <p style={{ color: c.mine ? '#FFFFFF' : '#CBD5E1', fontSize: '12px', margin: 0, lineHeight: 1.5 }}>{c.msg}</p>
                      </div>
                      <p style={{ color: '#475569', fontSize: '10px', margin: '3px 4px 0', textAlign: c.mine ? 'right' as const : 'left' as const }}>{c.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: '12px 14px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  value={chatInput}
                  onChange={e => setChatInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendMsg()}
                  placeholder="Type a message..."
                  style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '9px 12px', color: '#FFFFFF', fontSize: '13px', outline: 'none' }}
                />
                <button onClick={sendMsg} style={{ background: '#06B6D4', border: 'none', borderRadius: '10px', width: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <span className="material-symbols-outlined" style={{ color: '#FFFFFF', fontSize: '18px', fontVariationSettings: '"FILL" 1' }}>send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ach-mnav" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#0A0E1A', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', zIndex: 50, padding: '8px 0 12px' }}>
        {[{ icon: 'dashboard', label: 'Home', href: '/achiever/dashboard' }, { icon: 'analytics', label: 'Exams', href: '/achiever/exam-tracker' }, { icon: 'storm', label: 'AI', href: '/achiever/ai-study-partner' }, { icon: 'group', label: 'Community', href: '/achiever/leaderboard' }].map(item => (
          <Link key={item.href} href={item.href} style={{ flex: 1, textDecoration: 'none', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '3px' }}>
            <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '22px' }}>{item.icon}</span>
            <span style={{ color: '#94A3B8', fontSize: '10px' }}>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
