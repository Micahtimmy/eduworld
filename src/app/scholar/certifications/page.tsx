'use client'

import Link from 'next/link'

const sidebarStyle: React.CSSProperties = { width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }
const navItemStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500, cursor: 'pointer', marginBottom: 2, textDecoration: 'none' }
const cardStyle: React.CSSProperties = { background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', marginBottom: 20 }

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center' },
  { icon: 'school', label: 'Courses', href: '/scholar/course-registration', active: true },
  { icon: 'science', label: 'Research', href: '/scholar/research-workspace' },
  { icon: 'menu_book', label: 'Library', href: '/scholar/library' },
  { icon: 'work', label: 'Careers', href: '/scholar/careers' },
  { icon: 'people', label: 'Community', href: '/scholar/networking' },
]

const COMPETENCIES = [
  { skill: 'Advanced Predictive Analytics', issuer: 'Oxford AI Institute', level: 'Expert', pct: 94 },
  { skill: 'Lean Supply Chain Mgmt.', issuer: 'Peer-endorsed & Exam', level: 'Advanced', pct: 88 },
  { skill: 'Cross-Border Compliance', issuer: 'Mandarin/English trade law', level: 'Bilingual', pct: 92 },
  { skill: 'Strategic Negotiation', issuer: 'Harvard case simulations', level: 'Intermediate', pct: 76 },
  { skill: 'Quantum Computing Fundamentals', issuer: 'MIT OpenCourseWare', level: 'Advanced', pct: 85 },
]

const CREDENTIALS = [
  { title: 'Google Data Pro', issuer: 'Google', date: 'Aug 2023', status: 'Active', expiry: 'Aug 2026' },
  { title: 'Lean Six Sigma', issuer: 'IASSC', date: 'Sep 2023', status: 'Active', expiry: 'Sep 2026' },
  { title: 'Global Trade Law', issuer: 'WTO Institute', date: 'Oct 2023', status: 'Active', expiry: 'Oct 2026' },
  { title: 'AWS Cloud Practitioner', issuer: 'Amazon', date: '70% Complete', status: 'In Progress', expiry: null },
]

const ROADMAP = [
  { title: 'Advanced Python for Supply Chain', priority: 'High Priority', timeline: 'Q1 2025', match: '92%' },
  { title: 'IATA Global Logistics Professional', priority: 'Prerequisite Required', timeline: 'Q3 2025', match: '88%' },
  { title: 'Certified Supply Chain Professional (CSCP)', priority: 'Recommended', timeline: 'Q4 2025', match: '85%' },
]

export default function CertificationsPage() {
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
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Professional Competency & Certifications</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Sarah Robertson · MSc Quantum Physics · Advanced Research Tier</p>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{ background: '#d1fae5', color: '#10B981', fontSize: 12, fontWeight: 700, padding: '5px 12px', borderRadius: 99 }}>⭐ Top 5% Globally</span>
            <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Connect Recruiter</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24, marginBottom: 0 }}>
          {/* Verified Competencies */}
          <div style={cardStyle}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Verified Competencies</div>
            {COMPETENCIES.map((c, i) => (
              <div key={i} style={{ background: '#f9f9ff', borderRadius: 12, padding: 16, marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20' }}>{c.skill}</div>
                    <div style={{ fontSize: 12, color: '#424750', marginTop: 2 }}>{c.issuer}</div>
                  </div>
                  <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>{c.level}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#424750', marginBottom: 6 }}>
                  <span>Proficiency</span>
                  <span style={{ fontWeight: 700, color: '#191c20' }}>{c.pct}%</span>
                </div>
                <div style={{ height: 8, borderRadius: 99, background: '#eef0f4', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${c.pct}%`, borderRadius: 99, background: '#003f7a' }} />
                </div>
              </div>
            ))}
          </div>

          {/* Right Panel */}
          <div>
            {/* AI Career Path */}
            <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 20, marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: '#191c20' }}>AI Career Path</span>
              </div>
              <p style={{ fontSize: 13, color: '#424750', lineHeight: 1.6, marginBottom: 12 }}>You are aligned for <strong style={{ color: '#191c20' }}>Quantum Computing Research</strong> and Deep Tech pathways. An AWS certification would increase your visibility by <strong style={{ color: '#191c20' }}>40%</strong>.</p>
              <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '9px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%' }}>
                ✦ Optimize Profile
              </button>
            </div>

            {/* Integration Status */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>Integration Status</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, color: '#003f7a' }}>in</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20' }}>LinkedIn Sync</div>
                  <div style={{ fontSize: 11, color: '#10B981', marginTop: 1 }}>Last synced 2h ago</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>📤</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20' }}>Public Portfolio</div>
                  <div style={{ fontSize: 11, color: '#d97706', marginTop: 1 }}>Pending Review</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credential Showcase */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Credential Showcase</div>
            <button style={{ color: '#003f7a', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All Credentials →</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
            {CREDENTIALS.map((c, i) => (
              <div key={i} style={{ border: '1px solid #c2c6d2', borderRadius: 12, padding: 16, textAlign: 'center', opacity: c.status === 'In Progress' ? 0.7 : 1 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, margin: '0 auto 10px' }}>🏅</div>
                <div style={{ fontWeight: 700, fontSize: 13, color: '#191c20', marginBottom: 4 }}>{c.title}</div>
                <div style={{ fontSize: 11, color: '#424750', marginBottom: 6 }}>{c.issuer}</div>
                <span style={{ background: c.status === 'Active' ? '#d1fae5' : '#fef3c7', color: c.status === 'Active' ? '#10B981' : '#d97706', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>
                  {c.status === 'Active' ? `Active · ${c.date}` : c.date}
                </span>
              </div>
            ))}
          </div>
          <button style={{ color: '#003f7a', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', marginTop: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span> Add Certificate
          </button>
        </div>

        {/* Certification Roadmap */}
        <div style={cardStyle}>
          <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>AI-Recommended Certification Roadmap</div>
          {ROADMAP.map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderRadius: 12, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#003f7a' }}>workspace_premium</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20' }}>{r.title}</div>
                <div style={{ fontSize: 12, color: '#424750', marginTop: 2 }}>{r.priority}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ background: '#d1fae5', color: '#10B981', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99, display: 'block', marginBottom: 4 }}>{r.match} Match</span>
                <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>{r.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
