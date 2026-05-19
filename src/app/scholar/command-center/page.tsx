'use client'

import { useState } from 'react'
import Link from 'next/link'

const S = {
  page: { display: 'flex', minHeight: '100vh', background: '#f9f9ff', fontFamily: '"Inter", system-ui, sans-serif' } as React.CSSProperties,
  sidebar: { width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed' as const, top: 0, left: 0, display: 'flex', flexDirection: 'column' as const, zIndex: 40 },
  logo: { padding: '24px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)' },
  logoText: { color: '#fff', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20 },
  logoSub: { color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 2 },
  nav: { flex: 1, padding: '12px 12px', overflowY: 'auto' as const },
  navItem: { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500, cursor: 'pointer', marginBottom: 2, textDecoration: 'none' },
  navItemActive: { background: 'rgba(255,255,255,0.15)', borderLeft: '3px solid #fff', paddingLeft: 9, color: '#fff' },
  navBottom: { padding: '12px 12px', borderTop: '1px solid rgba(255,255,255,0.1)' },
  main: { marginLeft: 260, flex: 1, padding: 32, minHeight: '100vh' },
  topBar: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 },
  greeting: { fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20' },
  greetingSub: { color: '#424750', fontSize: 14, marginTop: 4 },
  topActions: { display: 'flex', alignItems: 'center', gap: 12 },
  notifBtn: { width: 40, height: 40, borderRadius: 10, border: '1px solid #c2c6d2', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },
  avatar: { width: 40, height: 40, borderRadius: '50%', background: '#003f7a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15, cursor: 'pointer' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 },
  statCard: { background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: '20px 20px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' },
  statValue: { fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 28, color: '#191c20', marginBottom: 4 },
  statLabel: { color: '#424750', fontSize: 13 },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 360px', gap: 24 },
  card: { background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', marginBottom: 20 },
  cardTitle: { fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 17, color: '#191c20', marginBottom: 16 },
  sectionTitle: { fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 12 },
  courseRow: { display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderRadius: 10, border: '1px solid #c2c6d2', marginBottom: 10, cursor: 'pointer', background: '#fff', textDecoration: 'none' },
  progressBar: { height: 6, borderRadius: 99, background: '#eef0f4', overflow: 'hidden', marginTop: 6, marginBottom: 2 },
  progressFill: (pct: number, color?: string) => ({ height: '100%', width: `${pct}%`, borderRadius: 99, background: color ?? '#003f7a' }),
  aiCard: { background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 20, marginBottom: 16 },
  aiHeader: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 },
  aiDot: { color: '#10B981', fontSize: 18, fontWeight: 700 },
  aiLabel: { color: '#10B981', fontWeight: 700, fontSize: 13 },
  aiText: { color: '#191c20', fontSize: 14, lineHeight: 1.5, marginBottom: 12 },
  btnPrimary: { background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 18px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 },
  btnOutline: { background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '9px 18px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 },
  btnAI: { background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 18px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 },
  deadlineRow: { display: 'flex', alignItems: 'flex-start', gap: 10, paddingBottom: 10, borderBottom: '1px solid #eef0f4', marginBottom: 10 },
  badge: (color: string, bg: string) => ({ background: bg, color, fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }),
  gpaCard: { background: 'linear-gradient(135deg, #003f7a 0%, #0060b9 100%)', borderRadius: 14, padding: '24px 28px', color: '#fff', marginBottom: 20 },
  gpaValue: { fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 800, fontSize: 48, color: '#fff' },
}

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center', active: true },
  { icon: 'school', label: 'Courses', href: '/scholar/course-registration' },
  { icon: 'science', label: 'Research', href: '/scholar/research-workspace' },
  { icon: 'menu_book', label: 'Library', href: '/scholar/library' },
  { icon: 'work', label: 'Careers', href: '/scholar/careers' },
  { icon: 'people', label: 'Community', href: '/scholar/networking' },
]

const COURSES = [
  { name: 'Quantum Mechanics', code: 'PHYS401', progress: 72, lecturer: 'Dr. Chen Wei', credits: 4 },
  { name: 'Organic Chemistry III', code: 'CHEM350', progress: 58, lecturer: 'Prof. Adaeze Okafor', credits: 3 },
  { name: 'Advanced Algorithms', code: 'CS501', progress: 85, lecturer: 'Dr. James Ridley', credits: 4 },
  { name: 'Linear Algebra', code: 'MATH301', progress: 40, lecturer: 'Dr. Sofia Reyes', credits: 3 },
]

const DEADLINES = [
  { title: 'PHYS401 Lab Report #3', due: 'Tomorrow, 11:59 PM', urgent: true },
  { title: 'CS501 Algorithm Analysis Essay', due: 'Fri 23 May', urgent: true },
  { title: 'CHEM350 Mid-Term Exam', due: 'Mon 26 May', urgent: false },
  { title: 'MATH301 Problem Set 6', due: 'Wed 28 May', urgent: false },
  { title: 'Research Paper Draft v2', due: 'Fri 30 May', urgent: false },
]

export default function ScholarCommandCenterPage() {
  const [activeNav] = useState('dashboard')

  return (
    <div style={S.page}>
      {/* Sidebar */}
      <aside style={S.sidebar}>
        <div style={S.logo}>
          <div style={S.logoText}>EduWorld</div>
          <div style={S.logoSub}>Scholar Portal</div>
        </div>
        <nav style={S.nav}>
          {NAV.map(item => (
            <Link
              key={item.href}
              href={item.href}
              style={{ ...S.navItem, ...(item.active ? S.navItemActive : {}) }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div style={S.navBottom}>
          <Link href="/scholar/settings" style={S.navItem}>
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>settings</span>
            Settings
          </Link>
          <Link href="/help" style={S.navItem}>
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>help</span>
            Help
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={S.main}>
        {/* Top Bar */}
        <div style={S.topBar}>
          <div>
            <div style={S.greeting}>Good morning, Sarah</div>
            <div style={S.greetingSub}>Academic Command Center · Spring Semester 2025</div>
          </div>
          <div style={S.topActions}>
            <div style={S.notifBtn}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#424750' }}>notifications</span>
            </div>
            <div style={S.avatar}>SA</div>
          </div>
        </div>

        {/* GPA Hero */}
        <div style={S.gpaCard}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 4 }}>CUMULATIVE GPA</div>
              <div style={S.gpaValue}>3.9</div>
              <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>Spring 2025 · Dean&apos;s List Eligible</div>
            </div>
            <div style={{ display: 'flex', gap: 32 }}>
              {[
                { label: 'Credits Earned', value: '68/120' },
                { label: 'Courses Active', value: '4' },
                { label: 'Study Hours/Week', value: '22h' },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff' }}>{s.value}</div>
                  <div style={{ fontSize: 12, opacity: 0.7, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div style={S.statsGrid}>
          {[
            { label: 'GPA This Semester', value: '3.9', sub: '+0.2 vs last', color: '#003f7a' },
            { label: 'Research Papers', value: '3', sub: 'In progress', color: '#10B981' },
            { label: 'Assignments Due', value: '5', sub: 'This week', color: '#F59E0B' },
            { label: 'Study Streak', value: '14 days', sub: 'Personal best!', color: '#ef4444' },
          ].map(s => (
            <div key={s.label} style={S.statCard}>
              <div style={{ ...S.statValue, color: s.color }}>{s.value}</div>
              <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20', marginBottom: 2 }}>{s.label}</div>
              <div style={S.statLabel}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div style={S.grid2}>
          {/* Left Column */}
          <div>
            {/* Course Tiles */}
            <div style={S.card}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={S.sectionTitle}>Active Courses</div>
                <Link href="/scholar/course-registration" style={{ color: '#003f7a', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>View all →</Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {COURSES.map(c => (
                  <Link key={c.code} href={`/scholar/modules/${c.code.toLowerCase()}`} style={{ ...S.courseRow, flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: '#191c20' }}>{c.name}</span>
                      <span style={S.badge('#003f7a', '#e8f0fe')}>{c.credits} cr</span>
                    </div>
                    <div style={{ fontSize: 12, color: '#424750' }}>{c.code} · {c.lecturer}</div>
                    <div style={{ width: '100%' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#424750', marginBottom: 4 }}>
                        <span>Progress</span><span>{c.progress}%</span>
                      </div>
                      <div style={S.progressBar}><div style={S.progressFill(c.progress)} /></div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* AI Research Card */}
            <div style={S.aiCard}>
              <div style={S.aiHeader}>
                <span style={S.aiDot}>✦</span>
                <span style={S.aiLabel}>AI Research Assistant</span>
                <span style={S.badge('#10B981', '#d1fae5')}>3 new papers found</span>
              </div>
              <div style={S.aiText}>
                Your AI found <strong>3 new papers</strong> for your thesis on Quantum Neural Networks. One paper by Chen et al. (2024) directly addresses your research gap on decoherence modeling.
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <Link href="/scholar/ai-research" style={S.btnAI}>
                  <span style={{ fontSize: 15 }}>✦</span> Open Research Assistant
                </Link>
                <button style={S.btnOutline}>View Papers</button>
              </div>
            </div>

            {/* Research Workspace Quick Access */}
            <div style={S.card}>
              <div style={S.sectionTitle}>Research Workspace</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                {[
                  { icon: 'science', label: 'Active Projects', value: '2', href: '/scholar/research-workspace', color: '#003f7a' },
                  { icon: 'menu_book', label: 'Saved Papers', value: '47', href: '/scholar/library', color: '#10B981' },
                  { icon: 'edit_note', label: 'Thesis Draft', value: 'Ch. 3/5', href: '/scholar/thesis', color: '#F59E0B' },
                ].map(w => (
                  <Link key={w.label} href={w.href} style={{ background: '#f9f9ff', border: '1px solid #c2c6d2', borderRadius: 10, padding: '14px 16px', textDecoration: 'none', display: 'block' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: w.color, marginBottom: 8, display: 'block' }}>{w.icon}</span>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 18, color: '#191c20' }}>{w.value}</div>
                    <div style={{ fontSize: 12, color: '#424750', marginTop: 2 }}>{w.label}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Upcoming Deadlines */}
            <div style={S.card}>
              <div style={S.sectionTitle}>Upcoming Deadlines</div>
              {DEADLINES.map((d, i) => (
                <div key={i} style={{ ...S.deadlineRow, borderBottom: i === DEADLINES.length - 1 ? 'none' : '1px solid #eef0f4' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: d.urgent ? '#ef4444' : '#c2c6d2', marginTop: 5, flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#191c20' }}>{d.title}</div>
                    <div style={{ fontSize: 12, color: d.urgent ? '#ef4444' : '#424750', fontWeight: d.urgent ? 600 : 400, marginTop: 2 }}>{d.due}</div>
                  </div>
                </div>
              ))}
              <Link href="/scholar/exam-schedule" style={{ ...S.btnOutline, width: '100%', justifyContent: 'center', marginTop: 8, boxSizing: 'border-box' as const }}>View Full Calendar</Link>
            </div>

            {/* Notifications */}
            <div style={S.card}>
              <div style={S.sectionTitle}>Recent Activity</div>
              {[
                { icon: 'check_circle', text: 'PHYS401 Quiz graded: 87/100', time: '2h ago', color: '#10B981' },
                { icon: 'info', text: 'Dr. Chen replied to your email', time: '4h ago', color: '#003f7a' },
                { icon: 'star', text: 'Achievement unlocked: Research Pioneer', time: '1d ago', color: '#F59E0B' },
              ].map((n, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, paddingBottom: 10, marginBottom: 10, borderBottom: i === 2 ? 'none' : '1px solid #eef0f4' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: n.color, flexShrink: 0 }}>{n.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: '#191c20', lineHeight: 1.4 }}>{n.text}</div>
                    <div style={{ fontSize: 11, color: '#424750', marginTop: 2 }}>{n.time}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div style={S.card}>
              <div style={S.sectionTitle}>Quick Access</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { label: 'Degree Audit', href: '/scholar/degree-audit', icon: 'school' },
                  { label: 'Exam Schedule', href: '/scholar/exam-schedule', icon: 'event' },
                  { label: 'Financial Aid', href: '/scholar/financial-aid', icon: 'payments' },
                  { label: 'Wellness Center', href: '/scholar/wellness', icon: 'favorite' },
                ].map(l => (
                  <Link key={l.href} href={l.href} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 8, background: '#f9f9ff', border: '1px solid #c2c6d2', textDecoration: 'none', color: '#191c20', fontSize: 13, fontWeight: 600 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#003f7a' }}>{l.icon}</span>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
