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
  { icon: 'dashboard', label: 'Dashboard', href: '/parent/dashboard' },
  { icon: 'people', label: 'My Children', href: '/parent/multi-child' },
  { icon: 'calendar_month', label: 'Calendar', href: '/parent/calendar' },
  { icon: 'folder', label: 'Documents', href: '/parent/documents', active: true },
  { icon: 'sports_soccer', label: 'Extracurricular', href: '/parent/extracurricular' },
  { icon: 'chat', label: 'Messages', href: '/parent/messages' },
  { icon: 'payments', label: 'Tuition & Fees', href: '/parent/tuition' },
]

const CATEGORIES = [
  { icon: 'menu_book', title: 'Syllabus & Curriculum', meta: '12 Files · Updated 2 days ago', alert: false, color: '#0891b2' },
  { icon: 'medical_services', title: 'Medical Records', meta: '4 Files · Last accessed today', alert: false, color: T.ai },
  { icon: 'check_circle', title: 'Permission Slips', meta: '8 Files · 2 Actions Pending', alert: true, color: T.xp },
  { icon: 'bar_chart', title: 'Termly Report Cards', meta: '6 Files · Autumn Added', alert: false, color: T.primary },
]

const DOCS = [
  { icon: 'description', title: 'Q3 Academic Progress Report — Alex Johnson', meta: 'PDF · 2.4 MB · Oct 12, 2025', action: null, alert: false, color: T.error },
  { icon: 'edit_document', title: 'Science Fair Off-Campus Permission Slip', meta: 'Awaiting your digital signature', action: 'Sign Now', alert: true, color: T.xp },
  { icon: 'medical_information', title: 'Updated Allergy & Diet Protocol 2025/26', meta: 'DOCX · 1.1 MB · Sep 28, 2025', action: null, alert: false, color: T.ai },
  { icon: 'verified', title: 'Enrolment Certificate — St. Xavier High', meta: 'PDF · 0.8 MB · Aug 15, 2025', action: null, alert: false, color: T.primary },
]

function Sidebar() {
  return (
    <aside style={{ width: 260, minHeight: '100vh', background: T.surface, borderRight: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary }}>EduWorld</div>
        <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600, color: T.primary, background: '#e8f0fe', borderRadius: 6, padding: '2px 8px' }}>Parent</span>
      </div>
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, marginBottom: 2, background: item.active ? '#f3f3f9' : 'transparent', borderLeft: item.active ? `3px solid ${T.primary}` : '3px solid transparent', color: item.active ? T.primary : T.textMuted, fontFamily: T.fontBody, fontWeight: item.active ? 600 : 400, fontSize: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default function ParentDocumentsPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32, maxWidth: 900 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Document Vault</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>All official documents, reports, and consent forms for Alex Johnson.</p>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', cursor: 'pointer', fontWeight: 600 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>upload</span>Upload Document
          </button>
        </div>

        {/* Security Banner */}
        <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 14, padding: '14px 18px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.ai }}>lock</span>
          <div style={{ flex: 1 }}>
            <span style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>Vault Security Active</span>
            <span style={{ fontSize: 12, color: T.textMuted, marginLeft: 8 }}>All documents are end-to-end encrypted.</span>
          </div>
        </div>

        {/* AI Action Banner */}
        <div style={{ background: T.xp + '08', border: `1px solid ${T.xp}30`, borderRadius: 14, padding: '14px 18px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 14, color: T.xp }}>✦</span>
          <div style={{ flex: 1 }}>
            <span style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>Action Required: </span>
            <span style={{ fontSize: 13, color: T.textMuted }}>2 pending permission slips for the upcoming Science Fair need your signature.</span>
          </div>
          <button style={{ padding: '7px 14px', background: T.xp, color: '#fff', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>Sign Now</button>
        </div>

        {/* Category Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 28 }}>
          {CATEGORIES.map(c => (
            <button key={c.title} style={{ background: T.surface, border: `2px solid ${c.alert ? T.xp + '60' : T.border}`, borderRadius: 14, padding: '18px 16px', textAlign: 'left', cursor: 'pointer' }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: c.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: c.color }}>{c.icon}</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 13, color: T.textPrimary, marginBottom: 4 }}>{c.title}</div>
              <div style={{ fontSize: 11, color: T.textMuted }}>{c.meta}</div>
              {c.alert && (
                <span style={{ display: 'inline-block', marginTop: 6, fontSize: 10, fontWeight: 700, background: T.xp + '20', color: T.xp, padding: '2px 8px', borderRadius: 10 }}>Action Needed</span>
              )}
            </button>
          ))}
        </div>

        {/* Recent Documents */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Recent Documents</h2>
            <button style={{ fontSize: 13, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {DOCS.map(d => (
              <div key={d.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 14px', background: d.alert ? T.xp + '08' : T.bg, borderRadius: 12, border: d.alert ? `1px solid ${T.xp}40` : '1px solid transparent' }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: d.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: d.color }}>{d.icon}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: T.textPrimary }}>{d.title}</div>
                  <div style={{ fontSize: 11, color: d.alert ? T.xp : T.textMuted, fontWeight: d.alert ? 600 : 400, marginTop: 2 }}>{d.meta}</div>
                </div>
                {d.action ? (
                  <button style={{ padding: '6px 14px', background: T.primary, color: '#fff', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', flexShrink: 0 }}>{d.action}</button>
                ) : (
                  <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                    <button style={{ padding: '6px 10px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, cursor: 'pointer' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>
                    </button>
                    <button style={{ padding: '6px 10px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, cursor: 'pointer' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>visibility</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Storage + Sharing */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 22 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 12 }}>Storage Overview</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: T.textMuted, marginBottom: 6 }}>
              <span>64% Used</span>
              <span>1.2 GB / 2 GB</span>
            </div>
            <div style={{ height: 8, background: T.border + '60', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '64%', background: T.primary, borderRadius: 4 }} />
            </div>
          </div>
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 22, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: T.primary + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.primary }}>share</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>Secure Sharing</div>
              <div style={{ fontSize: 12, color: T.textMuted }}>Share medical records with family or clinics securely.</div>
            </div>
            <button style={{ padding: '8px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.primary, fontWeight: 600, cursor: 'pointer', flexShrink: 0 }}>Manage</button>
          </div>
        </div>
      </main>
    </div>
  )
}
