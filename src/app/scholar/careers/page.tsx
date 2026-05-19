'use client'

import Link from 'next/link'

const sidebarStyle: React.CSSProperties = { width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }
const navItemStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500, cursor: 'pointer', marginBottom: 2, textDecoration: 'none' }
const cardStyle: React.CSSProperties = { background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', marginBottom: 20 }

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center' },
  { icon: 'school', label: 'Courses', href: '/scholar/course-registration' },
  { icon: 'science', label: 'Research', href: '/scholar/research-workspace' },
  { icon: 'menu_book', label: 'Library', href: '/scholar/library' },
  { icon: 'work', label: 'Careers', href: '/scholar/careers', active: true },
  { icon: 'people', label: 'Community', href: '/scholar/networking' },
]

const LISTINGS = [
  { role: 'Quantitative Research Analyst Intern', company: 'Citadel Securities', location: 'Chicago, IL', type: 'Summer Internship', match: 98, deadline: 'Nov 30, 2025', tags: ['Python', 'Stochastic Calculus', 'ML'], featured: true },
  { role: 'Data Science Intern', company: 'Meta', location: 'Menlo Park, CA (Hybrid)', type: '12-Week Internship', match: 92, deadline: 'Oct 15, 2025', tags: ['Python', 'SQL', 'Deep Learning'], featured: false },
  { role: 'Actuarial Summer Analyst', company: 'Prudential Financial', location: 'Newark, NJ', type: 'Summer Internship', match: 88, deadline: 'Nov 1, 2025', tags: ['Statistics', 'Excel', 'R'], featured: false },
  { role: 'Research Scientist (PhD Track)', company: 'DeepMind', location: 'London, UK (Remote eligible)', type: 'Full-time', match: 95, deadline: 'Dec 1, 2025', tags: ['ML', 'Python', 'Research'], featured: false },
]

const MENTORS = [
  { name: 'Dr. Elena Rostova', title: 'VP Data Science, JPMorgan Chase', initials: 'ER', year: "'12" },
  { name: 'Marcus Chen, PhD', title: 'Senior Researcher, DeepMind', initials: 'MC', year: "'18" },
  { name: 'Amara Williams', title: 'Quant Analyst, Goldman Sachs', initials: 'AW', year: "'20" },
]

export default function CareersPage() {
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
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Career Gateway & Internships</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Discover internships, connect with mentors, and track your applications.</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ background: '#fff', color: '#424750', border: '1px solid #c2c6d2', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Upload Resume</button>
            <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Filter Jobs</button>
          </div>
        </div>

        {/* Application Pipeline */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 28 }}>
          {[
            { stage: 'Applied', count: 12, icon: '📤', color: '#003f7a', bg: '#e8f0fe' },
            { stage: 'Under Review', count: 4, icon: '👁', color: '#F59E0B', bg: '#fef3c7' },
            { stage: 'Interviewing', count: 2, icon: '🎤', color: '#10B981', bg: '#d1fae5' },
            { stage: 'Offers', count: 1, icon: '🎉', color: '#8b5cf6', bg: '#ede9fe' },
          ].map(p => (
            <div key={p.stage} style={{ background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: '18px 20px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{p.icon}</div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 28, color: p.color }}>{p.count}</div>
              <div style={{ fontSize: 13, color: '#424750', marginTop: 2 }}>{p.stage}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          <div>
            {/* Featured Listing */}
            <div style={{ background: 'linear-gradient(135deg, #003f7a, #0060b9)', borderRadius: 14, padding: '24px 28px', marginBottom: 20, color: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: 700 }}>✦</span>
                <span style={{ fontSize: 12, opacity: 0.8 }}>Highest AI Fit Score</span>
              </div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20, marginBottom: 6 }}>Quantitative Research Analyst Intern</div>
              <div style={{ fontSize: 14, opacity: 0.85, marginBottom: 14 }}>Citadel Securities · Chicago, IL · Summer 2025</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                {['Python', 'Stochastic Calculus', 'Machine Learning'].map(t => (
                  <span key={t} style={{ background: 'rgba(255,255,255,0.2)', fontSize: 12, padding: '3px 10px', borderRadius: 99 }}>{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 700, fontSize: 15 }}>Fit Score: 98%</span>
                <button style={{ background: '#fff', color: '#003f7a', border: 'none', borderRadius: 8, padding: '9px 18px', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>Apply Now</button>
              </div>
            </div>

            {/* Job Listings */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Recommended for You</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {LISTINGS.filter(l => !l.featured).map(l => (
                  <div key={l.role} style={{ border: '1px solid #c2c6d2', borderRadius: 12, padding: 18 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20' }}>{l.role}</div>
                        <div style={{ fontSize: 13, color: '#424750', marginTop: 2 }}>{l.company} · {l.location}</div>
                        <div style={{ fontSize: 12, color: '#424750', marginTop: 2 }}>{l.type} · Deadline: {l.deadline}</div>
                      </div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span style={{ background: '#d1fae5', color: '#10B981', fontSize: 12, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>{l.match}% match</span>
                        <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#c2c6d2', cursor: 'pointer' }}>bookmark</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
                      {l.tags.map(t => (
                        <span key={t} style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 99 }}>{t}</span>
                      ))}
                    </div>
                    <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '8px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%' }}>Apply</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            {/* AI Career Counselor */}
            <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 20, marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
                <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 14, color: '#191c20' }}>AI Career Counselor</span>
              </div>
              <p style={{ fontSize: 13, color: '#191c20', lineHeight: 1.6, marginBottom: 12 }}>Based on your research in quantum computing, you&apos;re a strong candidate for research scientist roles at top AI labs. Update your CV to highlight your thesis work.</p>
              <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 14px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%' }}>Start Career Chat</button>
            </div>

            {/* Mentor Network */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20' }}>Mentor Network</div>
                <button style={{ color: '#003f7a', fontSize: 12, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Browse →</button>
              </div>
              {MENTORS.map((m, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 12, marginBottom: 12, borderBottom: i === MENTORS.length - 1 ? 'none' : '1px solid #eef0f4' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#003f7a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{m.initials}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20' }}>{m.name}</div>
                    <div style={{ fontSize: 11, color: '#424750', marginTop: 1 }}>{m.title}</div>
                  </div>
                  <span style={{ fontSize: 11, color: '#424750' }}>Alumni {m.year}</span>
                </div>
              ))}
              <button style={{ background: '#f9f9ff', border: '1px solid #c2c6d2', borderRadius: 8, padding: '8px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%', color: '#424750' }}>Connect with Mentor</button>
            </div>

            {/* Resume Strength */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>Resume Strength</div>
              <div style={{ textAlign: 'center', marginBottom: 14 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 36, color: '#003f7a' }}>78%</div>
                <div style={{ fontSize: 13, color: '#424750' }}>Strong Profile</div>
              </div>
              <div style={{ height: 8, borderRadius: 99, background: '#eef0f4', overflow: 'hidden', marginBottom: 12 }}>
                <div style={{ height: '100%', width: '78%', borderRadius: 99, background: '#003f7a' }} />
              </div>
              {[
                { item: 'Research Publications', done: true },
                { item: 'GitHub Portfolio', done: true },
                { item: 'Cover Letter Template', done: false },
                { item: 'LinkedIn Profile', done: false },
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: r.done ? '#10B981' : '#c2c6d2' }}>
                    {r.done ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                  <span style={{ fontSize: 13, color: '#191c20' }}>{r.item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
