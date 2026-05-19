'use client'
import Link from 'next/link'

const T = {
  bg: '#F8F9FA', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#1C1C2E',
  textMuted: '#6B7280', border: '#E5E7EB', error: '#EF4444',
  indigo: '#5B6AF0', indigoLight: '#EEF2FF',
  green: '#22C55E', red: '#EF4444',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Overview', href: '/parent/dashboard' },
  { icon: 'security', label: 'Safety Alerts', href: '/parent/attendance' },
  { icon: 'insights', label: 'Academic Mastery', href: '/parent/performance' },
  { icon: 'payments', label: 'Fee Management', href: '/parent/billing' },
  { icon: 'forum', label: 'Teacher Chat', href: '/parent/messages' },
  { icon: 'settings', label: 'Settings', href: '/parent/settings', active: true },
]

const NOTIFICATION_PREFS = [
  { title: 'Emergency & Safety Alerts', desc: 'Real-time alerts for safety and transit events', channels: ['SMS', 'Push'] },
  { title: 'Academic Milestone Updates', desc: 'Weekly summaries and achievement notifications', channels: ['SMS', 'Email', 'Push'] },
  { title: 'Payment & Fee Reminders', desc: 'Due dates, receipts, and billing confirmations', channels: ['Email', 'Push'] },
]

const GUARDIAN_CARDS = [
  { name: 'David Johnson', role: 'Primary Parent', isYou: true },
  { name: 'Sarah Johnson', role: 'Secondary Guardian', isYou: false },
]

const EMERGENCY_CONTACTS = [
  { num: 1, name: 'Dr. Robert Miller', role: 'Family Pediatrician', phone: '+1 (555) 123-4567' },
  { num: 2, name: 'Grandma Evelyn', role: 'Grandparent', phone: '+1 (555) 987-6543' },
]

const PICKUP_AUTH = [
  { name: 'David Johnson', access: 'Full Access', color: T.green },
  { name: 'Sarah Johnson', access: 'Full Access', color: T.green },
  { name: 'Yellow Cab Service #442', access: 'Scheduled Only', color: T.xp },
]

function Toggle({ on }: { on: boolean }) {
  return (
    <div style={{ width: 44, height: 24, borderRadius: 12, background: on ? T.indigo : '#D1D5DB', padding: 2, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
      <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#fff', marginLeft: on ? 20 : 0, transition: 'margin 0.2s' }} />
    </div>
  )
}

function ChannelChip({ label, active }: { label: string; active: boolean }) {
  return (
    <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 12, background: active ? T.indigo : 'transparent', color: active ? '#fff' : T.textMuted, border: `1px solid ${active ? T.indigo : T.border}` }}>{label}</span>
  )
}

function Sidebar() {
  return (
    <aside style={{ width: 260, minHeight: '100vh', background: '#1A1F36', display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: '#fff' }}>EduWorld Parent</div>
      </div>
      {/* Guardian + Child Block */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <div style={{ width: 42, height: 42, borderRadius: '50%', background: T.indigo + '40', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#fff' }}>person</span>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#fff' }}>David Johnson</div>
            <div style={{ fontSize: 11, color: '#8899AA' }}>Primary Parent</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 4 }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: T.indigo + '30', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14, color: T.indigo }}>child_care</span>
          </div>
          <div style={{ fontSize: 12, color: '#8899AA' }}>Alex Johnson • Year 8 • St. Mary&apos;s</div>
        </div>
      </div>
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, marginBottom: 2, background: item.active ? T.indigo + '25' : 'transparent', borderLeft: item.active ? `3px solid ${T.indigo}` : '3px solid transparent', color: item.active ? '#fff' : '#8899AA', fontFamily: T.fontBody, fontWeight: item.active ? 600 : 400, fontSize: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
      <div style={{ padding: '16px' }}>
        <button style={{ width: '100%', fontSize: 12, color: T.indigo, background: 'none', border: 'none', cursor: 'pointer', padding: '6px 0', textAlign: 'center', fontWeight: 600 }}>Switch Child</button>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '10px 0' }} />
        <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#8899AA', textDecoration: 'none', padding: '6px 0' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>help</span> Help Center
        </Link>
        <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#8899AA', textDecoration: 'none', padding: '6px 0' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>logout</span> Log Out
        </Link>
      </div>
    </aside>
  )
}

export default function ParentSettingsPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32, maxWidth: 860 }}>
        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontFamily: T.fontHead, fontSize: 28, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Settings &amp; Profile</h1>
          <p style={{ fontSize: 14, color: T.textMuted, marginTop: 6 }}>Manage your parental controls, household security, and child authorizations.</p>
        </div>

        {/* Section 1 — Notification Preferences */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 26, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.indigo }}>notifications_active</span>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Notification Preferences</h2>
            <span style={{ fontSize: 11, fontWeight: 700, color: T.indigo, background: T.indigoLight, padding: '2px 9px', borderRadius: 10 }}>✦ AI Smart Filtering On</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {NOTIFICATION_PREFS.map((pref, i) => (
              <div key={pref.title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: i < NOTIFICATION_PREFS.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: T.textPrimary }}>{pref.title}</div>
                  <div style={{ fontSize: 12, color: T.textMuted, marginTop: 3 }}>{pref.desc}</div>
                  <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                    {['SMS', 'Email', 'Push'].map(ch => (
                      <ChannelChip key={ch} label={ch} active={pref.channels.includes(ch)} />
                    ))}
                  </div>
                </div>
                <Toggle on={true} />
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 — Security */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 26, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.indigo }}>verified_user</span>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Security</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { label: 'Biometric Login', desc: 'Use FaceID or Fingerprint for quick access', right: <Toggle on={true} /> },
              {
                label: 'Multi-Factor Authentication (MFA)',
                desc: '',
                right: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 14, color: T.green }}>check_circle</span>
                      <span style={{ fontSize: 12, color: T.textPrimary }}>Verified: +1 (555) ••• 90</span>
                    </div>
                    <button style={{ fontSize: 12, color: T.indigo, background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Edit Phone</button>
                  </div>
                )
              },
              {
                label: 'Password',
                desc: 'Last changed Oct 1, 2023',
                right: (
                  <button style={{ padding: '7px 16px', background: 'transparent', border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textPrimary, cursor: 'pointer', fontWeight: 600 }}>Update Password</button>
                )
              },
            ].map((row, i) => (
              <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: i < 2 ? `1px solid ${T.border}` : 'none' }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: T.textPrimary }}>{row.label}</div>
                  {row.desc && <div style={{ fontSize: 12, color: T.textMuted, marginTop: 3 }}>{row.desc}</div>}
                </div>
                {row.right}
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 — Household Members */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 26, marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.indigo }}>groups</span>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Household Members</h2>
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '7px 14px', background: T.indigoLight, border: 'none', borderRadius: 8, fontSize: 13, color: T.indigo, fontWeight: 600, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>person_add</span>
              Link Guardian
            </button>
          </div>
          <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
            {GUARDIAN_CARDS.map(g => (
              <div key={g.name} style={{ flex: 1, padding: '16px', background: '#F9FAFB', border: `1px solid ${T.border}`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: T.indigo + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: T.indigo }}>person</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary }}>{g.name}</div>
                  <div style={{ fontSize: 12, color: T.textMuted }}>{g.role}</div>
                </div>
                {g.isYou ? (
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', background: T.indigo, padding: '2px 9px', borderRadius: 10 }}>YOU</span>
                ) : (
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>edit</span>
                  </button>
                )}
              </div>
            ))}
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '12px 16px', background: 'transparent', border: `2px dashed ${T.border}`, borderRadius: 12, fontSize: 13, color: T.textMuted, cursor: 'pointer', justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add_circle</span>
            Add Childcare Provider
          </button>
        </div>

        {/* Section 4 — Emergency Contacts */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 26, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.indigo }}>medical_services</span>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Emergency Contacts</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {EMERGENCY_CONTACTS.map(c => (
              <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px', background: '#F9FAFB', borderRadius: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: T.red + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: T.fontHead, fontWeight: 800, fontSize: 13, color: T.red }}>{c.num}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: T.textMuted }}>{c.role}</div>
                </div>
                <div style={{ fontSize: 13, color: T.textPrimary, fontFamily: 'monospace' }}>{c.phone}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5 — Pick-up Authorizations */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 26, marginBottom: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.indigo }}>directions_car</span>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Pick-up Authorizations</h2>
            </div>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>more_vert</span>
            </button>
          </div>
          <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 10, padding: '12px 14px', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#1D4ED8', marginTop: 1 }}>info</span>
              <div>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#1D4ED8' }}>Active Policy</span>
                <p style={{ fontSize: 12, color: '#1E40AF', margin: '4px 0 0' }}>Only authorized members with valid ID-scan cards are permitted for pick-up after 3:30 PM.</p>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {PICKUP_AUTH.map(a => (
              <div key={a.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#F9FAFB', borderRadius: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: a.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: a.color }}>person</span>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: T.textPrimary }}>{a.name}</span>
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: a.color, background: a.color + '15', padding: '3px 10px', borderRadius: 10 }}>{a.access}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div>
          <div style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
            <button style={{ padding: '11px 32px', background: T.indigo, color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>Save All Changes</button>
            <button style={{ padding: '11px 24px', background: 'transparent', color: T.textPrimary, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>Discard</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14, color: T.textMuted }}>history</span>
            <span style={{ fontSize: 12, color: T.textMuted }}>Last changed: Oct 24, 2023 at 10:14 AM</span>
          </div>
        </div>
      </main>
    </div>
  )
}
