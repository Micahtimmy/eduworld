'use client'
import Link from 'next/link'

const T = {
  bg: '#f9f9ff', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#191c20',
  textMuted: '#424750', border: '#c2c6d2', error: '#ba1a1a',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/teacher/dashboard' },
  { icon: 'school', label: 'My Classes', href: '/teacher/classes' },
  { icon: 'assignment', label: 'Assignments', href: '/teacher/assignments' },
  { icon: 'analytics', label: 'Analytics', href: '/teacher/student-insights' },
  { icon: 'people', label: 'Students', href: '/teacher/student-groups' },
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar' },
  { icon: 'inbox', label: 'Inbox', href: '/teacher/inbox' },
]

const FOLDERS = [
  { name: '9th Grade Math', files: 142, icon: 'calculate', color: T.primary, updated: '2 days ago' },
  { name: 'AP Biology', files: 89, icon: 'biotech', color: T.ai, updated: 'Today' },
  { name: 'World History', files: 215, icon: 'public', color: T.xp, updated: '1 week ago' },
  { name: 'Physics Lab', files: 67, icon: 'science', color: '#7c3aed', updated: '3 days ago' },
]

const FILES = [
  { name: 'Q3 Review Packets', type: 'PDF', size: '4.2 MB', icon: 'picture_as_pdf', color: '#dc2626' },
  { name: 'Lab Safety Guidelines', type: 'PDF', size: '1.1 MB', icon: 'picture_as_pdf', color: '#dc2626' },
  { name: 'Cell Structure Intro', type: 'PPTX', size: '8.4 MB', icon: 'slideshow', color: '#ea580c' },
  { name: 'Calculus Module 4', type: 'PDF', size: '2.8 MB', icon: 'picture_as_pdf', color: '#dc2626' },
  { name: 'Ecosystem Video', type: 'MP4', size: '124 MB', icon: 'play_circle', color: '#0891b2' },
]

const POPULAR = [
  { name: 'Algebra I Midterm', type: 'PDF', rating: 4.8, uses: '1.2k', color: '#dc2626' },
  { name: 'WWI Presentation Deck', type: 'PPTX', rating: 4.9, uses: '850', color: '#ea580c' },
  { name: 'Photosynthesis Video', type: 'MP4', rating: 4.5, uses: '3.4k', color: '#0891b2' },
]

function Sidebar() {
  return (
    <aside style={{ width: 260, minHeight: '100vh', background: T.surface, borderRight: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary }}>EduWorld</div>
        <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600, color: T.primary, background: '#e8f0fe', borderRadius: 6, padding: '2px 8px' }}>Teacher</span>
      </div>
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, marginBottom: 2, background: 'transparent', borderLeft: '3px solid transparent', color: T.textMuted, fontFamily: T.fontBody, fontWeight: 400, fontSize: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default function TeacherResourcesPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Curriculum & Resources</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Your personal teaching resource library — lessons, worksheets, videos.</p>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 14, color: '#fff', cursor: 'pointer', fontWeight: 600 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>upload</span>Upload Files
          </button>
        </div>

        {/* AI Search */}
        <div style={{ background: T.ai + '10', border: `1px solid ${T.ai}30`, borderRadius: 14, padding: '14px 18px', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 18, color: T.ai }}>✦</span>
          <input placeholder="Search with AI — find lessons, worksheets, videos..." style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: T.fontBody, fontSize: 14, color: T.textPrimary,
          }} />
          <button style={{ padding: '8px 16px', background: T.ai, color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Search</button>
        </div>

        {/* Folders */}
        <div style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 14 }}>Curriculum Folders</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {FOLDERS.map(f => (
              <button key={f.name} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20, textAlign: 'left', cursor: 'pointer', transition: 'border-color 0.2s' }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: f.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: f.color }}>{f.icon}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>{f.name}</div>
                <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>{f.files} files · {f.updated}</div>
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24 }}>
          {/* Staff Drive */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Staff Drive</h2>
              <button style={{ fontSize: 13, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {FILES.map(f => (
                <div key={f.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', background: T.bg, borderRadius: 10 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: f.color }}>{f.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 13, color: T.textPrimary }}>{f.name}</div>
                    <div style={{ fontSize: 11, color: T.textMuted }}>{f.type} · {f.size}</div>
                  </div>
                  <button style={{ fontSize: 12, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Open</button>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Resources */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Popular Resources</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {POPULAR.map(r => (
                <div key={r.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: T.bg, borderRadius: 12 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: r.color }}>
                    {r.type === 'PDF' ? 'picture_as_pdf' : r.type === 'PPTX' ? 'slideshow' : 'play_circle'}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 13, color: T.textPrimary }}>{r.name}</div>
                    <div style={{ fontSize: 11, color: T.textMuted }}>★ {r.rating} · {r.uses} uses</div>
                  </div>
                  <button style={{ padding: '6px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.primary, fontWeight: 600, cursor: 'pointer' }}>Use</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
