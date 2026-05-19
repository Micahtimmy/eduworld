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

const CITATIONS_TREND = [40, 80, 140, 180, 240, 320, 428]
const CITATION_YEARS = ['2018', '2019', '2020', '2021', '2022', '2023', '2024']

const ALUMNI = [
  { initials: 'ER', name: 'Dr. Elena Rostova', title: 'Director of AI Ethics, MIT', connected: false },
  { initials: 'ML', name: 'Prof. Marcus Lin', title: 'Lead Quantum Physics, CERN', connected: true },
  { initials: 'SJ', name: 'Sarah Jenkins, PhD', title: 'Senior Fellow, Brookings Inst.', connected: false },
]

const VAULT_ITEMS = [
  { title: 'Quantum Neural Network Architectures — Chapter 3 Draft', type: 'Thesis', size: '4.2 MB', date: 'May 10, 2025', status: 'Archived' },
  { title: 'Decoherence Patterns Dataset — Raw HDF5', type: 'Dataset', size: '128 MB', date: 'Apr 22, 2025', status: 'Archived' },
  { title: 'Bell Inequality Experimental Results', type: 'Paper', size: '2.8 MB', date: 'Mar 15, 2025', status: 'Published' },
]

export default function ResearchArchivePage() {
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
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Research Archive & Legacy Vault</h1>
          <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Manage long-term research storage, track published works, and analyze the enduring impact of your academic contributions.</p>
        </div>

        {/* Impact Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 24 }}>
          {[
            { label: 'Total Citations', value: '428', icon: 'format_quote', color: '#003f7a' },
            { label: 'h-index', value: '12', icon: 'analytics', color: '#10B981' },
            { label: 'Publications', value: '7', icon: 'article', color: '#F59E0B' },
            { label: 'Archive Size', value: '2.4 GB', icon: 'storage', color: '#003f7a' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: '18px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 24, color: s.color, marginBottom: 8, display: 'block' }}>{s.icon}</span>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 24, color: '#191c20' }}>{s.value}</div>
              <div style={{ fontSize: 12, color: '#424750', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          <div>
            {/* Citations Over Time */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Citations Over Time</div>
                <div style={{ display: 'flex', gap: 4 }}>
                  {['1Y', 'ALL'].map((t, i) => (
                    <button key={t} style={{ padding: '4px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: 'pointer', background: i === 1 ? '#003f7a' : '#f9f9ff', color: i === 1 ? '#fff' : '#424750', border: i === 1 ? 'none' : '1px solid #c2c6d2' }}>{t}</button>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 120, marginBottom: 10 }}>
                {CITATIONS_TREND.map((val, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: '100%', borderRadius: '4px 4px 0 0', background: i === CITATIONS_TREND.length - 1 ? '#003f7a' : '#e8f0fe', height: `${(val / 428) * 100}%` }} />
                    <span style={{ fontSize: 9, color: '#424750' }}>{CITATION_YEARS[i]}</span>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 22, color: '#191c20' }}>428</span>
                <span style={{ fontSize: 12, color: '#424750', marginLeft: 6 }}>peak citations (2024)</span>
              </div>
            </div>

            {/* Legacy Analyzer */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{ color: '#10B981', fontSize: 16, fontWeight: 700 }}>✦</span>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Legacy Analyzer</div>
              </div>
              <div style={{ fontSize: 12, color: '#424750', marginBottom: 16 }}>AI-driven impact tracking across multi-disciplinary fields.</div>
              {[
                { label: 'Field Dominance (Quantum Physics)', pct: 92, color: '#003f7a' },
                { label: 'Global Reach Index', value: '8.4 / 10', pct: 84, color: '#10B981' },
              ].map((m, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#424750', marginBottom: 6 }}>
                    <span>{m.label}</span>
                    <span style={{ fontWeight: 700, color: '#191c20' }}>{m.value ?? `${m.pct}%`}</span>
                  </div>
                  <div style={{ height: 10, borderRadius: 99, background: '#eef0f4', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${m.pct}%`, borderRadius: 99, background: m.color }} />
                  </div>
                </div>
              ))}
              <p style={{ fontSize: 12, color: '#424750', fontStyle: 'italic', lineHeight: 1.6 }}>Your recent paper on synaptic plasticity has triggered a 14% increase in cross-disciplinary citations from neurotechnology and quantum biology journals.</p>
            </div>

            {/* Vault Files */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Institutional Repository</div>
                <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '7px 14px', fontWeight: 600, fontSize: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>upload</span> Upload to Vault
                </button>
              </div>
              {VAULT_ITEMS.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#003f7a', flexShrink: 0 }}>description</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20', marginBottom: 2 }}>{f.title}</div>
                    <div style={{ fontSize: 11, color: '#424750' }}>{f.type} · {f.size} · {f.date}</div>
                  </div>
                  <span style={{ background: f.status === 'Published' ? '#d1fae5' : '#e8f0fe', color: f.status === 'Published' ? '#10B981' : '#003f7a', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99, flexShrink: 0 }}>{f.status}</span>
                </div>
              ))}
              <div style={{ border: '2px dashed #c2c6d2', borderRadius: 12, padding: '24px', textAlign: 'center', marginTop: 10 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 32, color: '#424750', marginBottom: 8, display: 'block' }}>upload</span>
                <div style={{ fontWeight: 600, fontSize: 14, color: '#191c20', marginBottom: 4 }}>Drag and drop vault archives</div>
                <div style={{ fontSize: 12, color: '#424750' }}>Supports .pdf, .csv, .hdf5 — up to 50GB</div>
              </div>
            </div>
          </div>

          {/* Distinguished Alumni */}
          <div>
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20' }}>Distinguished Alumni Connections</div>
                <button style={{ color: '#003f7a', fontSize: 12, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All →</button>
              </div>
              {ALUMNI.map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 8 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#003f7a', flexShrink: 0 }}>{a.initials}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: '#191c20' }}>{a.name}</div>
                    <div style={{ fontSize: 11, color: '#424750', marginTop: 1 }}>{a.title}</div>
                  </div>
                  <button style={{ background: a.connected ? '#d1fae5' : '#003f7a', color: a.connected ? '#10B981' : '#fff', border: 'none', borderRadius: 6, padding: '5px 10px', fontSize: 11, fontWeight: 700, cursor: 'pointer', flexShrink: 0 }}>
                    {a.connected ? '✓ Connected' : 'Connect'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
