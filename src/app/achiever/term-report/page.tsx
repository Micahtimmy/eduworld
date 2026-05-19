'use client'
import Link from 'next/link'

const GRADES = [
  { subject: 'AP Calculus BC', teacher: 'Mr. Henderson', q1: 'A', q2: 'A', q3: 'A-', final: 'A', score: 94, color: '#7C3AED' },
  { subject: 'AP Physics C', teacher: 'Ms. Martinez', q1: 'B+', q2: 'B+', q3: 'A-', final: 'B+', score: 88, color: '#F59E0B' },
  { subject: 'AP Biology', teacher: 'Dr. Patel', q1: 'A-', q2: 'A', q3: 'A', final: 'A', score: 92, color: '#10B981' },
  { subject: 'English Literature', teacher: 'Dr. Chen', q1: 'A', q2: 'A', q3: 'A+', final: 'A+', score: 97, color: '#3B82F6' },
  { subject: 'AP Chemistry', teacher: 'Mr. Wilson', q1: 'B', q2: 'B+', q3: 'A-', final: 'B+', score: 87, color: '#22C55E' },
]

const COMMENTS = [
  { teacher: 'Mr. Henderson', subject: 'AP Calculus', comment: 'Alex demonstrates exceptional analytical skills. Consistently produces accurate and detailed solutions. Ready for AP exam.' },
  { teacher: 'Dr. Chen', subject: 'English Lit', comment: 'Outstanding literary analysis. Alex\'s essays show sophisticated interpretation and strong command of voice and structure.' },
]

export default function AchieverTermReportPage() {
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '7px 14px', color: '#CBD5E1', fontSize: '13px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>download</span>
              Download PDF
            </button>
            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#FFFFFF', fontSize: '14px', cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>A</div>
          </div>
        </div>

        <div style={{ padding: '28px', maxWidth: '900px' }}>
          {/* Report Header */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '24px', marginBottom: '24px', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginBottom: '14px' }}>
              <span className="material-symbols-outlined" style={{ color: '#06B6D4', fontSize: '22px' }}>account_balance</span>
              <p style={{ color: '#06B6D4', fontWeight: 700, fontSize: '14px', margin: 0, letterSpacing: '0.05em', textTransform: 'uppercase' }}>St. Peter&apos;s Academy — Official Term Report</p>
            </div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '26px', margin: '0 0 6px' }}>Alexander Johnson</h1>
            <p style={{ color: '#94A3B8', fontSize: '14px', margin: '0 0 16px' }}>Grade 11 · Achiever Tier · Spring Term 2025</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '24px', margin: 0 }}>3.8</p>
                <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>Term GPA</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#22C55E', fontWeight: 700, fontSize: '24px', margin: 0 }}>Top 8%</p>
                <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>Class Rank</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#F59E0B', fontWeight: 700, fontSize: '24px', margin: 0 }}>94%</p>
                <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>Attendance</p>
              </div>
            </div>
          </div>

          {/* Grades Table */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 16px' }}>Subject Grades</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1fr 1fr 1fr', gap: '0', marginBottom: '8px' }}>
              {['Subject', 'Teacher', 'Q1', 'Q2', 'Q3', 'Final'].map(h => (
                <div key={h} style={{ padding: '8px 12px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <p style={{ color: '#64748B', fontSize: '11px', fontWeight: 600, margin: 0 }}>{h}</p>
                </div>
              ))}
            </div>
            {GRADES.map((row, i) => (
              <div key={row.subject} style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1fr 1fr 1fr', borderBottom: i < GRADES.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                <div style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '6px', height: '6px', background: row.color, borderRadius: '50%', flexShrink: 0 }} />
                  <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '13px', margin: 0 }}>{row.subject}</p>
                </div>
                <div style={{ padding: '12px' }}>
                  <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>{row.teacher}</p>
                </div>
                {[row.q1, row.q2, row.q3].map((g, gi) => (
                  <div key={gi} style={{ padding: '12px' }}>
                    <p style={{ color: '#CBD5E1', fontSize: '13px', margin: 0, textAlign: 'center' }}>{g}</p>
                  </div>
                ))}
                <div style={{ padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{
                    background: row.final === 'A+' || row.final === 'A' ? 'rgba(34,197,94,0.15)' : 'rgba(6,182,212,0.15)',
                    color: row.final === 'A+' || row.final === 'A' ? '#22C55E' : '#06B6D4',
                    borderRadius: '6px', padding: '3px 10px',
                    fontSize: '13px', fontWeight: 700,
                  }}>{row.final}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Teacher Comments */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 16px' }}>Teacher Comments</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {COMMENTS.map(c => (
                <div key={c.teacher} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '14px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '13px', margin: 0 }}>{c.teacher}</p>
                    <span style={{ color: '#64748B', fontSize: '12px' }}>· {c.subject}</span>
                  </div>
                  <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0, lineHeight: 1.6, fontStyle: 'italic' }}>&ldquo;{c.comment}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="ach-mnav" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#0A0E1A', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', zIndex: 50, padding: '8px 0 12px' }}>
        {[{ icon: 'dashboard', label: 'Home', href: '/achiever/dashboard' }, { icon: 'analytics', label: 'Exams', href: '/achiever/exam-tracker' }, { icon: 'storm', label: 'AI', href: '/achiever/ai-study-partner' }, { icon: 'group', label: 'Community', href: '/achiever/leaderboard' }].map(item => (
          <Link key={item.href} href={item.href} style={{ flex: 1, textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
            <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '22px' }}>{item.icon}</span>
            <span style={{ color: '#94A3B8', fontSize: '10px' }}>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
