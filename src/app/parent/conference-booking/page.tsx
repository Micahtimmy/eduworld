'use client'
import Link from 'next/link'

const T = {
  bg: '#F8F9FA', surface: '#ffffff', primary: '#1A73E8',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#202124',
  textMuted: '#5F6368', border: '#E8EAED', green: '#34A853',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

export default function ParentConferenceBookingPage() {
  return (
    <div style={{ minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      {/* Top Nav */}
      <nav style={{ background: T.surface, borderBottom: `1px solid ${T.border}`, padding: '0 40px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary }}>EduWorld</div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['Dashboard', 'Reports', 'Messages', 'Payments'].map(link => (
              <Link key={link} href="#" style={{ padding: '6px 14px', fontSize: 14, color: T.textMuted, textDecoration: 'none', borderRadius: 8, fontWeight: 500 }}>{link}</Link>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}>
            <span className="material-symbols-outlined" style={{ fontSize: 22 }}>notifications</span>
          </button>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}>
            <span className="material-symbols-outlined" style={{ fontSize: 22 }}>settings</span>
          </button>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary }}>person</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ maxWidth: 760, margin: '0 auto', padding: '40px 20px' }}>
        {/* Success Banner */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: T.green + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 36, color: T.green }}>check_circle</span>
          </div>
          <h1 style={{ fontFamily: T.fontHead, fontSize: 28, fontWeight: 800, color: T.textPrimary, margin: '0 0 10px' }}>You&apos;re all set!</h1>
          <p style={{ fontSize: 15, color: T.textMuted, maxWidth: 480, margin: '0 auto' }}>A confirmation has been sent to your email. Ms. Simmons has been notified and will be ready at the scheduled time.</p>
        </div>

        {/* Teacher Profile Card */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', background: T.primary + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 30, color: T.primary }}>person</span>
            </div>
            <div>
              <div style={{ fontFamily: T.fontHead, fontSize: 18, fontWeight: 700, color: T.textPrimary }}>Ms. Julia Simmons</div>
              <div style={{ fontSize: 13, color: T.textMuted, marginTop: 4 }}>Lead Educator, Year 4</div>
            </div>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 18px', background: 'transparent', border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer', fontWeight: 600 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>mail</span>
            Message Teacher
          </button>
        </div>

        {/* Meeting Details */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <div style={{ display: 'flex', gap: 0, marginBottom: 20 }}>
            {[
              { icon: 'calendar_today', label: 'Date', value: 'Sept 24, 2024' },
              { icon: 'schedule', label: 'Time', value: '4:15 PM' },
              { icon: 'location_on', label: 'Location', value: 'Virtual Classroom 4B' },
            ].map((d, i) => (
              <div key={d.label} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12, borderRight: i < 2 ? `1px solid ${T.border}` : 'none', paddingRight: i < 2 ? 24 : 0, paddingLeft: i > 0 ? 24 : 0 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: T.primary + '10', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.primary }}>{d.icon}</span>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>{d.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary, marginTop: 2 }}>{d.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 20px', background: 'transparent', border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer', fontWeight: 600 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>event</span>
              Add to Calendar
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 20px', background: T.primary, color: '#fff', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>videocam</span>
              Join Test Meeting
            </button>
          </div>
        </div>

        {/* Meeting Agenda */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary }}>notes</span>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Meeting Agenda</h2>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 600, color: T.ai, background: T.ai + '15', padding: '3px 10px', borderRadius: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 12 }}>auto_awesome</span>
              AI Suggested
            </span>
          </div>
          <textarea
            defaultValue="1. Review Q3 progress report and grade trends&#10;2. Discuss geometric reasoning improvement (up 15%)&#10;3. Address upcoming end-of-term assessments&#10;4. Set goals for Q4 performance"
            rows={5}
            style={{ width: '100%', padding: '12px', border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, background: '#FAFAFA', outline: 'none', resize: 'vertical', fontFamily: T.fontBody, boxSizing: 'border-box', lineHeight: 1.7 }}
            placeholder="Share discussion topics with the teacher..."
          />
          <button style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 6, padding: '10px 20px', background: T.primary, color: '#fff', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>save</span>
            Save Agenda Notes
          </button>
        </div>

        {/* Related Materials */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary }}>folder_open</span>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Related Materials</h2>
          </div>
          {[
            { icon: 'picture_as_pdf', name: 'Term 3 Progress Report.pdf', meta: 'Updated 2 days ago', action: 'download', actionIcon: 'download' },
            { icon: 'analytics', name: 'Behaviour & Engagement Dashboard', meta: 'Interactive Link', action: 'open', actionIcon: 'open_in_new' },
          ].map(item => (
            <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: item.name.includes('pdf') ? `1px solid ${T.border}` : 'none' }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: T.primary + '10', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary }}>{item.icon}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{item.name}</div>
                <div style={{ fontSize: 11, color: T.textMuted }}>{item.meta}</div>
              </div>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.primary }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{item.actionIcon}</span>
              </button>
            </div>
          ))}
        </div>

        {/* AI Insight Banner */}
        <div style={{ background: `linear-gradient(135deg, ${T.primary}08, ${T.ai}08)`, border: `1px solid ${T.primary}20`, borderRadius: 16, padding: 22, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: T.primary + '10', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary }}>rocket_launch</span>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>AI Personalized Insight</span>
                <span style={{ color: T.primary }}>✦</span>
              </div>
              <p style={{ fontSize: 13, color: T.textMuted, margin: 0 }}>Alex has shown a 15% improvement in geometric reasoning this term. Consider discussing how to build on this momentum and replicate the approach across other STEM subjects.</p>
            </div>
          </div>
        </div>

        {/* Pro Tip */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 22 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: T.xp + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.xp }}>school</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary, marginBottom: 6 }}>Pro Tip</div>
              <p style={{ fontSize: 13, color: T.textMuted, margin: 0 }}>Review the &quot;Teacher&apos;s Goals&quot; section before your meeting for a more productive conversation about Alex&apos;s learning targets.</p>
            </div>
            <Link href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 600, color: T.primary, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              View Handbook <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '24px', fontSize: 12, color: T.textMuted, borderTop: `1px solid ${T.border}` }}>
        EduWorld © 2024 • Secured by Global Institutional Standards • Need help?{' '}
        <Link href="#" style={{ color: T.primary, textDecoration: 'none', fontWeight: 600 }}>Contact Support</Link>
      </footer>
    </div>
  )
}
