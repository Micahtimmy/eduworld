'use client'

const ROLE_CARDS = [
  { icon: 'explore',      title: 'Explorer',  tag: 'Onboarding Orientation',    links: [{ label: 'Setup Guide', href: '/explorer/onboarding/name' }, { label: 'FAQ', href: '#faq' }] },
  { icon: 'emoji_events', title: 'Achiever',  tag: 'Certificates & Milestones', links: [{ label: 'Claim Badges', href: '/achiever/dashboard' }, { label: 'Submissions', href: '/achiever/dashboard' }] },
  { icon: 'history_edu',  title: 'Scholar',   tag: 'Research Integrations',     links: [{ label: 'Library', href: '/scholar/command-center' }, { label: 'API Docs', href: '#api' }] },
  { icon: 'co_present',   title: 'Teacher',   tag: 'Lesson & Grading',          links: [{ label: 'Lesson Builder', href: '/teacher/dashboard' }, { label: 'Gradebook', href: '/teacher/dashboard' }] },
  { icon: 'family_home',  title: 'Parent',    tag: 'Progress & Payments',       links: [{ label: 'Progress', href: '/parent/dashboard' }, { label: 'Invoices', href: '/parent/dashboard' }] },
  { icon: 'admin_panel_settings', title: 'Admin', tag: 'School Management',    links: [{ label: 'Enrolment', href: '/admin/dashboard' }, { label: 'Reports', href: '/admin/dashboard' }] },
]

const DOC_SECTIONS = [
  { icon: 'payments',  label: 'Billing & Subscriptions' },
  { icon: 'security',  label: 'Privacy & Security' },
  { icon: 'hub',       label: 'API & Integrations' },
  { icon: 'groups',    label: 'Community Rules' },
]

const QUERIES = [
  'How do I reset my password?',
  'How do I link a child account?',
  'Where can I view invoices?',
  'How do I change my email?',
]

export default function SupportPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: '"Inter", system-ui, sans-serif' }}>

      {/* Nav bar */}
      <nav style={{
        backgroundColor: '#191c20',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        padding: '0 32px',
        gap: 24,
      }}>
        <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20, color: '#ffffff', letterSpacing: '-0.01em' }}>
          EduWorld
        </span>

        {/* Search */}
        <div style={{ flex: 1, maxWidth: 480, position: 'relative' }}>
          <span
            className="material-symbols-outlined"
            style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 20, color: 'rgba(255,255,255,0.5)', pointerEvents: 'none' }}
          >
            search
          </span>
          <input
            placeholder="Search the knowledge base..."
            style={{
              width: '100%',
              padding: '8px 16px 8px 40px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 999,
              color: '#ffffff',
              fontSize: 14,
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          {['notifications', 'auto_awesome', 'account_circle'].map(icon => (
            <button key={icon} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{icon}</span>
            </button>
          ))}
        </div>
      </nav>

      <div style={{ display: 'flex' }}>

        {/* Sidebar */}
        <aside style={{
          width: 240,
          minHeight: 'calc(100vh - 64px)',
          backgroundColor: '#f8f9fa',
          borderRight: '1px solid #e5e7eb',
          padding: '24px 0',
          flexShrink: 0,
        }}>
          {[
            { icon: 'help',      label: 'Help Center',  active: true },
            { icon: 'dashboard', label: 'Dashboard',    active: false },
            { icon: 'school',    label: 'Learning Hub', active: false },
            { icon: 'analytics', label: 'Analytics',    active: false },
            { icon: 'settings',  label: 'Settings',     active: false },
          ].map(item => (
            <button
              key={item.icon}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                width: '100%',
                padding: '10px 20px',
                background: item.active ? '#e8edf5' : 'none',
                border: 'none',
                cursor: 'pointer',
                color: item.active ? '#003f7a' : '#424750',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: 14,
                fontWeight: item.active ? 600 : 400,
                textAlign: 'left',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, padding: '48px 64px', maxWidth: 1100 }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 40, color: '#6b7280', fontSize: 13 }}>
            <span>Home</span>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chevron_right</span>
            <span style={{ color: '#111827', fontWeight: 500 }}>Support & Knowledge Hub</span>
          </div>

          {/* Hero */}
          <div style={{ marginBottom: 56, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, backgroundColor: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 999, padding: '4px 12px', width: 'fit-content' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#6c63ff' }}>auto_awesome</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#6c63ff', letterSpacing: '0.05em', textTransform: 'uppercase' }}>EduWorld Support 2.0</span>
            </div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 700, color: '#111827', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              How can we help you today?
            </h1>
            <p style={{ fontSize: 16, color: '#6b7280', margin: 0, maxWidth: 540, lineHeight: 1.6 }}>
              Explore our knowledge base, get instant AI answers, or connect with our global community of educators and learners.
            </p>
          </div>

          {/* Role cards — 3 columns */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontSize: 20, fontWeight: 700, color: '#111827', margin: '0 0 24px 0' }}>
              Knowledge for Every Role
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {ROLE_CARDS.map(card => (
                <div
                  key={card.title}
                  style={{
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #e5e7eb',
                    borderRadius: 16,
                    padding: 24,
                    cursor: 'pointer',
                    transition: 'box-shadow 150ms, transform 150ms',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(0,0,0,0.12)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: 'rgba(0,63,122,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#003f7a' }}>{card.icon}</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#111827', margin: '0 0 4px 0' }}>{card.title}</p>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6b7280', backgroundColor: '#e5e7eb', padding: '2px 8px', borderRadius: 999 }}>{card.tag}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {card.links.map(link => (
                      <a
                        key={link.label}
                        href={link.href}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 14, color: '#374151', textDecoration: 'none', padding: '4px 0' }}
                        onMouseEnter={e => { e.currentTarget.style.color = '#003f7a' }}
                        onMouseLeave={e => { e.currentTarget.style.color = '#374151' }}
                      >
                        {link.label}
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_outward</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Access — 2 columns */}
          <section style={{ marginBottom: 56 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

              {/* AI Assistant card */}
              <div style={{ backgroundColor: '#f8f9fa', border: '1px solid #e5e7eb', borderRadius: 16, padding: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: '#6c63ff' }}>auto_awesome</span>
                  <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 18, color: '#111827', margin: 0 }}>AI Assistant</p>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6c63ff', backgroundColor: 'rgba(108,99,255,0.1)', padding: '2px 8px', borderRadius: 999 }}>AI STATUS: ACTIVE</span>
                </div>
                <p style={{ fontSize: 14, color: '#6b7280', margin: '0 0 20px 0', lineHeight: 1.6 }}>
                  Get instant answers to any EduWorld question powered by our AI knowledge base.
                </p>
                <button
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '10px 20px',
                    backgroundColor: '#6c63ff',
                    color: '#ffffff',
                    border: 'none', borderRadius: 999,
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    fontWeight: 600, fontSize: 14,
                    cursor: 'pointer',
                    transition: 'background-color 150ms',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#5a54e0' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#6c63ff' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>smart_toy</span>
                  Ask AI
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                </button>
              </div>

              {/* System Health card */}
              <div style={{ backgroundColor: '#f8f9fa', border: '1px solid #e5e7eb', borderRadius: 16, padding: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: '#f59e0b' }}>bolt</span>
                  <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 18, color: '#111827', margin: 0 }}>System Health</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600, color: '#16a34a', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', padding: '2px 10px', borderRadius: 999 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} />
                    Operational
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <p style={{ fontSize: 13, color: '#6b7280', margin: '0 0 8px 0' }}>Common queries:</p>
                  {QUERIES.map(q => (
                    <a
                      key={q}
                      href="#"
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 14, color: '#374151', textDecoration: 'none' }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#003f7a' }}
                      onMouseLeave={e => { e.currentTarget.style.color = '#374151' }}
                    >
                      {q}
                      <span className="material-symbols-outlined" style={{ fontSize: 16, flexShrink: 0 }}>arrow_forward</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Tutorial Banner */}
          <section style={{ marginBottom: 56 }}>
            <div style={{
              backgroundColor: '#f8f9fa',
              border: '1px solid #e5e7eb',
              borderRadius: 16,
              padding: 32,
              display: 'flex',
              alignItems: 'center',
              gap: 32,
            }}>
              <div style={{ width: 80, height: 80, borderRadius: 16, backgroundColor: '#e8edf5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 36, color: '#003f7a' }}>play_circle</span>
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6c63ff', backgroundColor: 'rgba(108,99,255,0.08)', padding: '3px 10px', borderRadius: 999, marginBottom: 8, display: 'inline-block' }}>NEW TUTORIAL</span>
                <h3 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20, color: '#111827', margin: '8px 0 8px 0' }}>
                  Maximising AI Tutoring for Better Results
                </h3>
                <p style={{ fontSize: 14, color: '#6b7280', margin: '0 0 16px 0', lineHeight: 1.5 }}>
                  Learn how to use EduWorld's adaptive AI tutor to close knowledge gaps and get personalised feedback in real time.
                </p>
                <button
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    padding: '10px 20px',
                    backgroundColor: '#003f7a',
                    color: '#ffffff',
                    border: 'none', borderRadius: 999,
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    fontWeight: 600, fontSize: 14,
                    cursor: 'pointer',
                    transition: 'background-color 150ms',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1e5799' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#003f7a' }}
                >
                  Watch Now
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>schedule</span>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>12 mins</span>
                </button>
              </div>
            </div>
          </section>

          {/* Browse Documentation — 4 column icon grid */}
          <section style={{ marginBottom: 64 }}>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontSize: 20, fontWeight: 700, color: '#111827', margin: '0 0 24px 0' }}>
              Browse Documentation
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
              {DOC_SECTIONS.map(s => (
                <button
                  key={s.icon}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
                    padding: 24,
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #e5e7eb',
                    borderRadius: 16,
                    cursor: 'pointer',
                    transition: 'box-shadow 150ms, transform 150ms',
                    fontFamily: '"Inter", system-ui, sans-serif',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(0,0,0,0.10)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 28, color: '#003f7a' }}>{s.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#374151', textAlign: 'center', lineHeight: 1.4 }}>{s.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* CTA Banner */}
          <section style={{ marginBottom: 32 }}>
            <div style={{
              backgroundColor: '#191c20',
              borderRadius: 20,
              padding: 48,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 24,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Avatar row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: -8 }}>
                {['#6c63ff', '#003f7a', '#10b981', '#f59e0b'].map((color, i) => (
                  <div
                    key={i}
                    style={{
                      width: 44, height: 44, borderRadius: '50%',
                      backgroundColor: color,
                      border: '3px solid #191c20',
                      marginLeft: i === 0 ? 0 : -12,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#ffffff' }}>person</span>
                  </div>
                ))}
              </div>

              <div>
                <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontSize: 28, fontWeight: 700, color: '#ffffff', margin: '0 0 8px 0' }}>
                  Can't find what you're looking for?
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                  Our community and support team are here to help you.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  style={{
                    padding: '12px 28px',
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                    border: '2px solid rgba(255,255,255,0.4)',
                    borderRadius: 999,
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    fontWeight: 600, fontSize: 14,
                    cursor: 'pointer',
                    transition: 'border-color 150ms, background-color 150ms',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#ffffff'
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  Join Community
                </button>
                <button
                  style={{
                    padding: '12px 28px',
                    backgroundColor: '#ffffff',
                    color: '#191c20',
                    border: 'none',
                    borderRadius: 999,
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    fontWeight: 700, fontSize: 14,
                    cursor: 'pointer',
                    transition: 'background-color 150ms',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#f0f0f0' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#ffffff' }}
                >
                  Contact Support
                </button>
              </div>

              {/* Decorative spark */}
              <span
                className="material-symbols-outlined"
                style={{ position: 'absolute', bottom: 16, right: 24, fontSize: 32, color: 'rgba(255,255,255,0.08)' }}
              >
                auto_awesome
              </span>
            </div>
          </section>

        </main>
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#191c20',
        padding: '20px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{ fontFamily: '"Inter", system-ui, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
          EduWorld Hub | © 2025 EduWorld Global Infrastructure
        </span>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(link => (
            <a
              key={link}
              href="#"
              style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 150ms' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.9)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
            >
              {link}
            </a>
          ))}
        </div>
        <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'rgba(255,255,255,0.2)' }}>auto_awesome</span>
      </footer>

    </div>
  )
}
