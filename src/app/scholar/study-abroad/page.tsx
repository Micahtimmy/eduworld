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

const INSTITUTIONS = [
  { name: 'University of Oxford', dept: 'Department of Quantum Information · Trinity Term', match: 98, label: 'Research Alignment', probability: 'High Probability', deadline: 'Jun 15' },
  { name: 'ETH Zurich', dept: 'Institute for Theoretical Physics · Spring Semester', match: 94, label: 'Faculty Sponsor', probability: 'Moderate', deadline: 'Jul 1' },
]

const LOGISTICS = [
  {
    title: 'Tier 4 (General) Student Visa — UK',
    status: 'In Progress',
    items: [
      { label: 'CAS Number Issued', done: true },
      { label: 'Financial Proof Verified', done: true },
      { label: 'Biometrics Appointment (Pending)', done: false },
    ],
  },
  {
    title: 'National Visa D — Switzerland',
    status: 'Draft',
    items: [
      { label: 'Letter of Acceptance', done: false },
      { label: 'Proof of Accommodation', done: false },
      { label: 'Health Insurance Coverage', done: false },
    ],
  },
]

const COMMUNITY = [
  { initials: 'ER', name: 'Dr. Elena Rostova', affiliation: 'Oxford · Q-Computing', msg: 'The new lab access protocols for visiting researchers have been streamlined. You can now register within 48 hours of arrival.' },
  { initials: 'MC', name: 'Markus Chen', affiliation: 'ETH Zurich · Physics', msg: 'Just secured housing in Kreis 6. Be warned: the cantonal registration process requires original wet-ink signatures — no digital copies accepted.' },
]

const FINANCIALS = [
  { label: 'Housing', oxford: 3200, zurich: 3800 },
  { label: 'Subsistence', oxford: 1800, zurich: 2400 },
  { label: 'Lab Fees', oxford: 3500, zurich: 5800 },
]

export default function StudyAbroadPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9f9ff', fontFamily: '"Inter", system-ui, sans-serif' }}>
      <aside style={sidebarStyle}>
        <div style={{ padding: '24px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ color: '#fff', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20 }}>EduWorld</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 2 }}>Scholar Portal</div>
        </div>
        <nav style={{ flex: 1, padding: '12px 12px', overflowY: 'auto' }}>
          {NAV.map(item => (
            <Link key={item.href} href={item.href} style={{ ...navItemStyle, ...(item.active ? { background: 'rgba(255,255,255,0.15)', borderLeft: '3px solid #fff', paddingLeft: 9, color: '#fff' } : {}) as React.CSSProperties }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div style={{ padding: '12px 12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Link href="/settings" style={navItemStyle}><span className="material-symbols-outlined" style={{ fontSize: 20 }}>settings</span>Settings</Link>
        </div>
      </aside>

      <main style={{ marginLeft: 260, flex: 1, padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Global Exchange & Study Abroad Hub</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Coordinate international research terms, align institutional requirements, and model financial trajectories.</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span> Export Dossier
            </button>
            <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span> Start Application
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>
          <div>
            {/* Institutional Matching */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Institutional Matching</div>
                <span style={{ background: '#f0fdf4', color: '#10B981', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>✦ Algorithm Active</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {INSTITUTIONS.map((inst, i) => (
                  <div key={i} style={{ border: '1px solid #c2c6d2', borderRadius: 12, padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15, color: '#191c20', marginBottom: 2 }}>{inst.name}</div>
                        <div style={{ fontSize: 12, color: '#424750' }}>{inst.dept}</div>
                      </div>
                      <span style={{ background: inst.probability === 'High Probability' ? '#d1fae5' : '#fef3c7', color: inst.probability === 'High Probability' ? '#10B981' : '#d97706', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99, flexShrink: 0 }}>{inst.probability}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#424750', marginBottom: 5 }}>
                          <span>{inst.label}</span>
                          <span style={{ fontWeight: 700, color: '#003f7a' }}>{inst.match}%</span>
                        </div>
                        <div style={{ height: 6, borderRadius: 99, background: '#eef0f4', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${inst.match}%`, borderRadius: 99, background: '#003f7a' }} />
                        </div>
                      </div>
                      <span style={{ background: '#fee2e2', color: '#dc2626', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99, flexShrink: 0 }}>Deadline: {inst.deadline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Logistics & Clearances */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Logistics & Clearances</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {LOGISTICS.map((l, i) => (
                  <div key={i} style={{ border: '1px solid #c2c6d2', borderRadius: 12, padding: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                      <div style={{ fontWeight: 700, fontSize: 13, color: '#191c20', lineHeight: 1.3 }}>{l.title}</div>
                      <span style={{ background: l.status === 'In Progress' ? '#e8f0fe' : '#f9f9ff', color: l.status === 'In Progress' ? '#003f7a' : '#424750', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99, border: l.status !== 'In Progress' ? '1px solid #c2c6d2' : 'none', flexShrink: 0, marginLeft: 8 }}>{l.status}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {l.items.map((item, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ color: item.done ? '#10B981' : '#c2c6d2', fontSize: 16, flexShrink: 0 }}>{item.done ? '✓' : '○'}</span>
                          <span style={{ fontSize: 12, color: item.done ? '#191c20' : '#424750' }}>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Trajectory */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 6 }}>Financial Trajectory</div>
              <div style={{ fontSize: 12, color: '#424750', marginBottom: 16 }}>Estimated costs for Oxford vs. Zurich (per term)</div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 12, height: 12, borderRadius: 2, background: '#2563eb' }} />
                  <span style={{ fontSize: 12, color: '#424750' }}>Oxford (£)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 12, height: 12, borderRadius: 2, background: '#ef4444' }} />
                  <span style={{ fontSize: 12, color: '#424750' }}>Zurich (CHF)</span>
                </div>
              </div>
              {FINANCIALS.map((r, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
                    <span style={{ fontWeight: 600, color: '#191c20' }}>{r.label}</span>
                    <div style={{ display: 'flex', gap: 16 }}>
                      <span style={{ color: '#2563eb', fontWeight: 600 }}>£{r.oxford.toLocaleString()}</span>
                      <span style={{ color: '#ef4444', fontWeight: 600 }}>CHF {r.zurich.toLocaleString()}</span>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                    <div style={{ height: 8, borderRadius: 99, background: '#dbeafe', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${(r.oxford / 6000) * 100}%`, borderRadius: 99, background: '#2563eb' }} />
                    </div>
                    <div style={{ height: 8, borderRadius: 99, background: '#fee2e2', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${(r.zurich / 6000) * 100}%`, borderRadius: 99, background: '#ef4444' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Global Scholars Community */}
          <div>
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>🌍 Global Scholars</div>
              {COMMUNITY.map((c, i) => (
                <div key={i} style={{ paddingBottom: 14, marginBottom: 14, borderBottom: i < COMMUNITY.length - 1 ? '1px solid #eef0f4' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#003f7a', flexShrink: 0 }}>{c.initials}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13, color: '#191c20' }}>{c.name}</div>
                      <div style={{ fontSize: 11, color: '#424750' }}>{c.affiliation}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 12, color: '#424750', lineHeight: 1.5 }}>{c.msg}</p>
                </div>
              ))}
              <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '9px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%' }}>
                View All Scholars
              </button>
            </div>

            {/* AI Exchange Advisor */}
            <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: '#191c20' }}>AI Exchange Advisor</span>
              </div>
              <p style={{ fontSize: 13, color: '#424750', lineHeight: 1.6, marginBottom: 12 }}>Based on your quantum neural network research, Oxford&apos;s Q-Computing lab is a <strong style={{ color: '#191c20' }}>98% match</strong>. Apply by June 15 to secure Trinity Term placement.</p>
              <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '9px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%' }}>
                Apply to Oxford Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
