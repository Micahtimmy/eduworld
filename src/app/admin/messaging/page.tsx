'use client'
import Link from 'next/link'
import { useState } from 'react'

const T = {
  bg: '#f0f2f8', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#191c20',
  textMuted: '#424750', border: '#c2c6d2', error: '#ba1a1a',
  teal: '#0d9488', amber: '#d97706', success: '#059669',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
  sidebarBg: '#0d1b4b', sidebarText: '#c8d0e8', sidebarActive: '#1e3372',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Command Center', href: '/admin/dashboard' },
  { icon: 'campaign', label: 'Messaging & Alerts', href: '/admin/messaging', active: true },
  { icon: 'groups', label: 'Staff Management', href: '/admin/teacher-roster' },
  { icon: 'payments', label: 'Financial Oversight', href: '/admin/finance' },
  { icon: 'analytics', label: 'Academic Analytics', href: '/admin/analytics' },
  { icon: 'settings_applications', label: 'Institutional Ops', href: '/admin/infrastructure' },
]

const cohorts = [
  'All Year 10 Parents',
  'All STEM Faculty',
  'Sixth Form Students',
  'Campus Security Team',
]

const recentAlerts = [
  {
    icon: 'emergency_share',
    title: 'Emergency: Campus Entry Protocols',
    badge: 'DELIVERED 2h ago',
    badgeColor: '#059669',
    badgeBg: '#d1fae5',
    receipt: '92%',
    target: 'Global Faculty',
  },
  {
    icon: 'mail',
    title: 'Monthly STEM Newsletter',
    badge: 'SCHEDULED In 4h',
    badgeColor: '#d97706',
    badgeBg: '#fef3c7',
    receipt: '12,400+',
    target: 'Year 7–13 Parents',
    reach: true,
  },
  {
    icon: 'health_and_safety',
    title: 'Health Advisory Update',
    badge: 'ARCHIVED Yesterday',
    badgeColor: '#6b7280',
    badgeBg: '#f3f4f6',
    receipt: '64%',
    target: 'Staff & Students',
  },
]

function Sidebar() {
  return (
    <aside style={{ width: 240, minHeight: '100vh', background: T.sidebarBg, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: '#ffffff' }}>EduWorld</div>
        <span style={{ fontSize: 11, color: '#6b7db3', display: 'block', marginTop: 2 }}>London Central Academy</span>
        <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600, color: '#93c5fd', background: 'rgba(147,197,253,0.15)', borderRadius: 6, padding: '2px 8px' }}>Admin</span>
      </div>
      <nav style={{ flex: 1, padding: '16px 10px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 8, marginBottom: 2, background: item.active ? T.sidebarActive : 'transparent', color: item.active ? '#ffffff' : T.sidebarText, fontFamily: T.fontBody, fontWeight: item.active ? 600 : 400, fontSize: 13 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
      <div style={{ padding: '16px 10px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '9px 12px', borderRadius: 8, background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.3)', color: '#c4b5fd', fontSize: 12, fontWeight: 700, cursor: 'pointer', marginBottom: 6 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
          Launch Intelligence AI
        </button>
        <Link href="/admin/roles" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 12px', borderRadius: 8, color: T.sidebarText, fontSize: 12 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>admin_panel_settings</span>Security
          </div>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 12px', borderRadius: 8, color: T.sidebarText, fontSize: 12, cursor: 'pointer' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>help_outline</span>Support
        </div>
      </div>
    </aside>
  )
}

export default function AdminMessagingPage() {
  const [selectedCohorts, setSelectedCohorts] = useState<string[]>(['All Year 10 Parents', 'All STEM Faculty'])
  const [alertTab, setAlertTab] = useState<'all' | 'history' | 'active'>('all')
  const [showSuccess, setShowSuccess] = useState(false)
  const [messageBody, setMessageBody] = useState('Dear Parents and Guardians, please find the revised schedule attached for the upcoming Winter Assessment period. All sessions will proceed as planned.')

  const toggleCohort = (c: string) => {
    setSelectedCohorts(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c])
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />

      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>

        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Messaging &amp; Alerts</h1>
            <p style={{ fontSize: 13, color: T.textMuted, marginTop: 5, maxWidth: 500 }}>Coordinate communications across the entire institution — parents, faculty, students, and staff.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, padding: '7px 14px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.textMuted }}>search</span>
              <input placeholder="Search messages…" style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: 13, color: T.textPrimary, width: 180 }} />
            </div>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.textMuted, cursor: 'pointer' }}>notifications_active</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.xp, cursor: 'pointer' }}>auto_awesome</span>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: T.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>DH</div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#ffffff', fontWeight: 600, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>emergency_share</span>
              Broadcast Message
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24 }}>

          {/* Left: Draft + Preview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Draft New Alert */}
            <div style={{ background: T.surface, borderRadius: 16, border: `1px solid ${T.border}`, overflow: 'hidden' }}>
              <div style={{ padding: '14px 20px', borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary }}>Draft New Alert</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#f0fdf4', borderRadius: 20, padding: '3px 10px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 12, color: T.ai }}>auto_awesome</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: T.ai, letterSpacing: '0.04em' }}>EDUWORLD AI ASSIST ACTIVE</span>
                </div>
              </div>
              <div style={{ padding: '20px 20px' }}>

                {/* Recipient Cohorts */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 8 }}>Recipient Cohorts</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cohorts.map(c => {
                      const selected = selectedCohorts.includes(c)
                      return (
                        <button key={c} onClick={() => toggleCohort(c)} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 12px', borderRadius: 20, fontSize: 12, fontWeight: 500, cursor: 'pointer', background: selected ? T.teal + '15' : '#f8f9fb', border: `1px solid ${selected ? T.teal : T.border}`, color: selected ? T.teal : T.textMuted, transition: 'all 0.15s' }}>
                          {selected && <span className="material-symbols-outlined" style={{ fontSize: 12 }}>check_circle</span>}
                          {c}
                        </button>
                      )
                    })}
                    <button style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 12px', borderRadius: 20, fontSize: 12, fontWeight: 500, cursor: 'pointer', background: '#f8f9fb', border: `1px dashed ${T.border}`, color: T.textMuted }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 14 }}>add</span>Custom Group
                    </button>
                  </div>
                </div>

                {/* Subject */}
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 5 }}>Subject Heading</div>
                  <input
                    defaultValue="Winter Assessment Schedule — Important Update"
                    style={{ width: '100%', padding: '9px 12px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textPrimary, outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Message body */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 5 }}>Message Content</div>
                  <textarea
                    value={messageBody}
                    onChange={e => setMessageBody(e.target.value)}
                    rows={5}
                    style={{ width: '100%', padding: '10px 12px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textPrimary, outline: 'none', resize: 'vertical', fontFamily: T.fontBody, boxSizing: 'border-box' }}
                  />
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <button style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '7px 14px', background: '#f8f9fb', border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, fontWeight: 500, cursor: 'pointer' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>attach_file</span>Attach PDF
                  </button>
                  <button style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '7px 14px', background: '#f8f9fb', border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, fontWeight: 500, cursor: 'pointer' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>calendar_today</span>Schedule Post
                  </button>
                  <button style={{ padding: '7px 14px', background: 'transparent', border: 'none', fontSize: 12, color: T.textMuted, cursor: 'pointer' }}>Discard</button>
                  <button
                    onClick={() => setShowSuccess(true)}
                    style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, padding: '8px 18px', background: T.teal, border: 'none', borderRadius: 8, fontSize: 13, color: '#ffffff', fontWeight: 700, cursor: 'pointer' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 15 }}>send</span>Send Now
                  </button>
                </div>
              </div>
            </div>

            {/* Live Preview — Multi-Channel Visualizer */}
            <div style={{ background: T.surface, borderRadius: 16, border: `1px solid ${T.border}`, overflow: 'hidden' }}>
              <div style={{ padding: '14px 20px', borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary }}>Multi-Channel Visualizer</div>
                <div style={{ display: 'flex', gap: 12 }}>
                  {['smartphone', 'laptop', 'mail'].map(icon => (
                    <span key={icon} className="material-symbols-outlined" style={{ fontSize: 20, color: T.textMuted, cursor: 'pointer' }}>{icon}</span>
                  ))}
                </div>
              </div>
              <div style={{ padding: '20px 20px', display: 'flex', gap: 16 }}>

                {/* Push notification mockup */}
                <div style={{ flex: 1, background: '#1c1c1e', borderRadius: 12, padding: '12px 14px' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#8ba3cc', letterSpacing: '0.06em', marginBottom: 6 }}>PUSH NOTIFICATION</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: T.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#fff' }}>school</span>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#ffffff' }}>EDUWORLD GLOBAL Now</div>
                      <div style={{ fontSize: 10, color: '#8ba3cc' }}>Academic Term Update</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 11, color: '#c8d0e8', lineHeight: 1.5 }}>{messageBody.slice(0, 80)}…</div>
                </div>

                {/* Email preview */}
                <div style={{ flex: 1, background: T.bg, borderRadius: 12, padding: '12px 14px', border: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: T.textMuted, letterSpacing: '0.06em', marginBottom: 6 }}>EMAIL PREVIEW</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary, marginBottom: 4 }}>Winter Assessment Schedule</div>
                  <div style={{ fontSize: 11, color: T.textMuted, marginBottom: 10, lineHeight: 1.5 }}>{messageBody.slice(0, 70)}…</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 10px', background: T.surface, borderRadius: 8, border: `1px solid ${T.border}`, cursor: 'pointer' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14, color: T.primary }}>picture_as_pdf</span>
                    <span style={{ fontSize: 11, color: T.primary, fontWeight: 600 }}>PDF Attachment</span>
                    <span className="material-symbols-outlined" style={{ fontSize: 14, color: T.textMuted, marginLeft: 'auto' }}>download</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Recent Alerts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Success Banner */}
            {showSuccess && (
              <div style={{ background: '#f0fdf4', border: `1px solid #bbf7d0`, borderRadius: 12, padding: '16px 16px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.success, flexShrink: 0 }}>check_circle</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>Message Dispatched Successfully</div>
                  <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>Sent to 14,202 recipients across all integrated platforms.</div>
                </div>
                <button onClick={() => setShowSuccess(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.textMuted }}>close</span>
                </button>
              </div>
            )}

            {/* Recent Alerts & Insights */}
            <div style={{ background: T.surface, borderRadius: 16, border: `1px solid ${T.border}`, overflow: 'hidden', flex: 1 }}>
              <div style={{ padding: '14px 16px', borderBottom: `1px solid ${T.border}` }}>
                <div style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 10 }}>Recent Alerts &amp; Insights</div>
                <div style={{ display: 'flex', gap: 4, background: T.bg, borderRadius: 8, padding: 3 }}>
                  {(['all', 'history', 'active'] as const).map(tab => (
                    <button key={tab} onClick={() => setAlertTab(tab)} style={{ flex: 1, padding: '5px 0', fontSize: 11, fontWeight: 600, color: alertTab === tab ? '#ffffff' : T.textMuted, background: alertTab === tab ? T.primary : 'transparent', border: 'none', borderRadius: 6, cursor: 'pointer', textTransform: 'capitalize' }}>{tab === 'all' ? 'All' : tab === 'history' ? 'History' : 'Active Now'}</button>
                  ))}
                </div>
              </div>
              <div style={{ padding: '12px 16px' }}>
                {recentAlerts.map((alert, i) => (
                  <div key={i} style={{ padding: '14px 0', borderBottom: i < recentAlerts.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 8, background: '#f0f2f8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary }}>{alert.icon}</span>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary, marginBottom: 4 }}>{alert.title}</div>
                        <span style={{ fontSize: 10, fontWeight: 700, color: alert.badgeColor, background: alert.badgeBg, borderRadius: 8, padding: '2px 8px', letterSpacing: '0.04em' }}>{alert.badge}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 46 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 12, color: T.textMuted, verticalAlign: 'middle' }}>{alert.reach ? 'group' : 'mark_email_read'}</span>
                        <span style={{ fontSize: 11, color: T.textMuted }}>{alert.reach ? `Reach: ${alert.receipt}` : `Read: ${alert.receipt}`}</span>
                      </div>
                      <span style={{ fontSize: 11, color: T.textMuted }}>{alert.target}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div style={{ background: T.surface, borderRadius: 16, border: `1px solid ${T.border}`, padding: '16px 16px' }}>
              <div style={{ fontFamily: T.fontHead, fontSize: 14, fontWeight: 700, color: T.textPrimary, marginBottom: 12 }}>Channel Reach Summary</div>
              {[
                { label: 'Parent Notifications', icon: 'family_restroom', count: '8,420', color: T.primary },
                { label: 'Staff Emails', icon: 'mail', count: '1,204', color: T.teal },
                { label: 'Student Push', icon: 'notifications', count: '4,578', color: T.xp },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: `1px solid ${T.border}` }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: row.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: row.color }}>{row.icon}</span>
                  </div>
                  <span style={{ flex: 1, fontSize: 13, color: T.textPrimary }}>{row.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>{row.count}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
