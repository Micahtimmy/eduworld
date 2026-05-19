'use client'
import Link from 'next/link'

const T = {
  bg: '#f4f6f9', surface: '#ffffff', primary: '#003f7a',
  teal: '#00BCD4', ai: '#10B981', xp: '#F59E0B',
  textPrimary: '#1a2035', textMuted: '#607d8b',
  border: '#e0e6ed', amber: '#F57C00', red: '#D32F2F',
  purple: '#7C4DFF', purpleLight: '#EDE7F6',
  green: '#43A047', gold: '#FFD700', blue: '#1E88E5',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Overview', href: '/parent/dashboard' },
  { icon: 'security', label: 'Safety Alerts', href: '/parent/attendance' },
  { icon: 'favorite', label: 'Health & Wellness', href: '/parent/health', active: true },
  { icon: 'insights', label: 'Academic Mastery', href: '/parent/performance' },
  { icon: 'payments', label: 'Fee Management', href: '/parent/billing' },
  { icon: 'forum', label: 'Teacher Chat', href: '/parent/messages' },
  { icon: 'menu_book', label: 'Resources', href: '/parent/documents' },
]

function Sidebar() {
  return (
    <aside style={{ width: 260, minHeight: '100vh', background: T.surface, borderRight: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary }}>EduWorld</div>
        <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600, color: T.primary, background: '#e8f0fe', borderRadius: 6, padding: '2px 8px' }}>Parent</span>
      </div>
      {/* Child Profile */}
      <div style={{ padding: '16px 20px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: T.teal + '20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.teal }}>child_care</span>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>Alex Johnson</div>
            <div style={{ fontSize: 12, color: T.textMuted }}>Year 8 • St. Mary&apos;s Academy</div>
          </div>
        </div>
        <button style={{ marginTop: 10, fontSize: 12, color: T.teal, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontWeight: 600 }}>Switch Child</button>
      </div>
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, marginBottom: 2, background: item.active ? T.teal + '15' : 'transparent', borderLeft: item.active ? `3px solid ${T.teal}` : '3px solid transparent', color: item.active ? T.teal : T.textMuted, fontFamily: T.fontBody, fontWeight: item.active ? 600 : 400, fontSize: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
      <div style={{ padding: '16px' }}>
        <div style={{ background: T.primary + '08', borderRadius: 10, padding: '10px 12px' }}>
          <div style={{ fontSize: 11, color: T.textMuted, marginBottom: 2 }}>Need help?</div>
          <button style={{ fontSize: 12, color: T.primary, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontWeight: 600 }}>Help Center</button>
        </div>
      </div>
    </aside>
  )
}

export default function ParentHealthPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 28, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Health &amp; Wellbeing</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 6 }}>Real-time vitals, counselor insights, and physical activity tracking for Alex.</p>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', background: T.teal, color: '#fff', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>medical_services</span>
            Contact School Nurse
          </button>
        </div>

        {/* Health Alerts */}
        <div style={{ background: '#FFF3E0', border: `1px solid ${T.amber}`, borderLeft: `4px solid ${T.amber}`, borderRadius: 12, padding: '16px 18px', marginBottom: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#E65100', marginBottom: 10 }}>Active Health Alerts</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.amber }}>notification_important</span>
              <div>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#BF360C' }}>Medication Due: 12:30 PM</span>
                <span style={{ fontSize: 13, color: '#7C4700', marginLeft: 8 }}>Inhaler (2 puffs) — Administered by Nurse Sarah.</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.red }}>warning</span>
              <div>
                <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, color: '#fff', background: T.red, padding: '2px 8px', borderRadius: 10, marginRight: 8 }}>Allergy Info</span>
                <span style={{ fontSize: 13, color: T.red, fontWeight: 600 }}>Severe Peanut Allergy • Epipen in main office.</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 20 }}>
          {/* Daily Vitals */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Daily Vitals</h2>
              <span style={{ fontSize: 11, color: T.textMuted }}>Updated 10m ago</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px', background: T.teal + '10', borderRadius: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: T.teal + '20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.teal }}>thermostat</span>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: T.textMuted }}>Body Temp</div>
                  <div style={{ fontFamily: T.fontHead, fontSize: 22, fontWeight: 800, color: T.textPrimary }}>98.6°F</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px', background: '#FEE2E2', borderRadius: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#FCA5A5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#DC2626' }}>favorite</span>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: T.textMuted }}>Avg. Heart Rate</div>
                  <div style={{ fontFamily: T.fontHead, fontSize: 22, fontWeight: 800, color: T.textPrimary }}>72 BPM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Wellness Insights */}
          <div style={{ background: T.purpleLight, border: '1px solid #CE93D8', borderRadius: 16, padding: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.purple }}>psychology</span>
              <span style={{ fontFamily: T.fontHead, fontSize: 14, fontWeight: 700, color: T.textPrimary }}>✦ Wellness Insights</span>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', background: T.purple, padding: '2px 7px', borderRadius: 10 }}>AI Powered</span>
            </div>
            <blockquote style={{ fontStyle: 'italic', fontSize: 13, color: '#4A148C', margin: '0 0 16px', lineHeight: 1.6 }}>
              &ldquo;Alex shows high engagement in group activities this week. However, there&apos;s a slight increase in stress markers noted by the counselor during morning sessions.&rdquo;
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: T.purple + '20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.purple }}>person</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>Dr. Elena Vance</div>
                <div style={{ fontSize: 11, color: T.textMuted }}>Lead School Counselor</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: T.fontHead, fontSize: 22, fontWeight: 800, color: T.teal }}>92%</div>
                <div style={{ fontSize: 11, color: T.textMuted }}>Mental Well-being</div>
              </div>
            </div>
          </div>

          {/* Activity & PE */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 22 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Activity &amp; PE Performance</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
              {[
                { color: T.gold, label: 'Cardio (PE) Gold Medal Pace', detail: 'Top 10% of Year 8 cohort.' },
                { color: T.green, label: 'Daily Steps Active', detail: '8,432 / 12,000 steps today.' },
                { color: T.blue, label: 'Social Participation High', detail: 'Lead role in Football trials.' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: item.color, marginTop: 4, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary }}>{item.label}</div>
                    <div style={{ fontSize: 11, color: T.textMuted }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            {[
              { icon: 'sports_soccer', name: 'Football Practice', status: 'Completed', statusColor: T.green, meta: '90 mins • High Intensity' },
              { icon: 'pool', name: 'Swimming Trials', status: 'Scheduled', statusColor: T.blue, meta: 'Tomorrow 3:00 PM' },
            ].map(act => (
              <div key={act.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px', background: '#F9FAFB', borderRadius: 10, marginBottom: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: act.statusColor }}>{act.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{act.name}</div>
                  <div style={{ fontSize: 11, color: T.textMuted }}>{act.meta}</div>
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: act.statusColor, background: act.statusColor + '15', padding: '2px 8px', borderRadius: 10 }}>{act.status}</span>
                <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.textMuted }}>chevron_right</span>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { label: 'Attendance', value: '98.5%', icon: 'event_available', color: T.green },
            { label: 'Sleep Score', value: '84/100', icon: 'bedtime', color: T.blue },
            { label: 'Nutrition', value: 'Balanced', icon: 'restaurant', color: T.teal },
            { label: 'Vibe Check', value: 'Joyful ✨', icon: 'sentiment_very_satisfied', color: T.gold },
          ].map(s => (
            <div key={s.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: s.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: s.color }}>{s.icon}</span>
              </div>
              <div>
                <div style={{ fontSize: 12, color: T.textMuted }}>{s.label}</div>
                <div style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary }}>{s.value}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
