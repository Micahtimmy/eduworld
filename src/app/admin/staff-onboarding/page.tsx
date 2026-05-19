'use client'
import Link from 'next/link'
import { useState } from 'react'

const T = {
  bg: '#f0f2f8', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#191c20',
  textMuted: '#424750', border: '#c2c6d2', error: '#ba1a1a',
  warning: '#d97706', success: '#059669', gold: '#d97706',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
  sidebarBg: '#0d1b4b', sidebarText: '#c8d0e8', sidebarActive: '#1e3372',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/admin/dashboard' },
  { icon: 'person_add', label: 'Student Intake', href: '/admin/student-intake' },
  { icon: 'groups', label: 'Students', href: '/admin/students' },
  { icon: 'school', label: 'Teachers', href: '/admin/teacher-roster' },
  { icon: 'event_available', label: 'Faculty Scheduling', href: '/admin/faculty-scheduling' },
  { icon: 'person_search', label: 'Staff Onboarding', href: '/admin/staff-onboarding', active: true },
  { icon: 'campaign', label: 'Messaging', href: '/admin/messaging' },
  { icon: 'analytics', label: 'Analytics', href: '/admin/analytics' },
  { icon: 'payments', label: 'Finance', href: '/admin/finance' },
  { icon: 'policy', label: 'Roles & Permissions', href: '/admin/roles' },
]

const weeklyData = [28, 45, 60, 42]

type Candidate = {
  initials: string
  color: string
  name: string
  role: string
  match: number
  dbs: 'pending' | 'required' | 'verified' | 'in_progress'
  tags: string[]
  excerpt: string
  stage?: number
  stageTotal?: number
  ref?: string
  checklist?: { label: string; done: boolean }[]
  interview?: string
}

const columns: { id: string; label: string; count: number; candidates: Candidate[] }[] = [
  {
    id: 'applied',
    label: 'Applied',
    count: 4,
    candidates: [
      {
        initials: 'ER', color: '#4f46e5', name: 'Dr. Elena Rostova', role: 'Physics Professor', match: 94,
        dbs: 'pending', tags: ['STEM', 'PHD'],
        excerpt: 'Extensive research in quantum mechanics with 12+ years of Ivy League teaching experience.',
      },
      {
        initials: 'MT', color: '#0891b2', name: 'Marcus Thorne', role: 'Digital Arts Lead', match: 88,
        dbs: 'required', tags: ['ART'],
        excerpt: 'Expert in immersive VR education and industry-standard creative suite instruction.',
      },
    ],
  },
  {
    id: 'interviewing',
    label: 'Interviewing',
    count: 2,
    candidates: [
      {
        initials: 'SJ', color: '#059669', name: 'Sarah Jenkins', role: 'History & Humanities', match: 98,
        dbs: 'verified', tags: ['HIST', 'HUM'],
        excerpt: 'Award-winning lecturer specialising in 20th-century global history and critical thinking.',
        stage: 3, stageTotal: 4, interview: 'TODAY, 14:00',
      },
    ],
  },
  {
    id: 'verification',
    label: 'Verification',
    count: 3,
    candidates: [
      {
        initials: 'LG', color: '#d97706', name: 'Prof. Liam Gallagher', role: 'Head of Mathematics', match: 92,
        dbs: 'in_progress', tags: ['MATH', 'STEM'],
        excerpt: 'Former department chair with experience leading national curriculum reform initiatives.',
        ref: 'REF: EW-4492-X',
        checklist: [
          { label: 'Global Background Check', done: true },
          { label: 'DBS Enhanced Disclosure', done: false },
        ],
      },
    ],
  },
  {
    id: 'contracted',
    label: 'Contracted',
    count: 8,
    candidates: [],
  },
]

const dbsConfig: Record<Candidate['dbs'], { icon: string; label: string; color: string; bg: string }> = {
  pending:     { icon: 'verified_user', label: 'DBS: PENDING',     color: '#92400e', bg: '#fef3c7' },
  required:    { icon: 'gpp_maybe',    label: 'DBS: REQUIRED',    color: '#9a3412', bg: '#ffedd5' },
  verified:    { icon: 'verified',     label: 'DBS: VERIFIED',    color: '#065f46', bg: '#d1fae5' },
  in_progress: { icon: 'hourglass_top',label: 'DBS: IN PROGRESS', color: '#1e40af', bg: '#dbeafe' },
}

function Sidebar() {
  return (
    <aside style={{ width: 240, minHeight: '100vh', background: T.sidebarBg, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: '#ffffff' }}>EduWorld</div>
        <span style={{ fontSize: 11, fontWeight: 600, color: '#6b7db3', display: 'block', marginTop: 2 }}>London Central Academy</span>
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
        <button style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '9px 12px', borderRadius: 8, background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.3)', color: '#fbbf24', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
          Launch Intelligence AI
        </button>
      </div>
    </aside>
  )
}

function CandidateCard({ c }: { c: Candidate }) {
  const dbs = dbsConfig[c.dbs]
  return (
    <div style={{ background: '#1e2a4a', borderRadius: 12, padding: '14px 14px', marginBottom: 10, border: '1px solid rgba(255,255,255,0.08)', cursor: 'grab' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{c.initials}</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#ffffff' }}>{c.name}</div>
            <div style={{ fontSize: 11, color: '#8ba3cc' }}>{c.role}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(251,191,36,0.15)', borderRadius: 20, padding: '3px 8px' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 12, color: '#fbbf24' }}>auto_awesome</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#fbbf24' }}>{c.match}% MATCH</span>
        </div>
      </div>

      {c.stage && c.stageTotal && (
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#60a5fa', letterSpacing: '0.05em', marginBottom: 4 }}>
            INTERVIEW PROGRESS STAGE {c.stage} OF {c.stageTotal}
          </div>
          <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${(c.stage / c.stageTotal) * 100}%`, background: '#60a5fa', borderRadius: 2 }} />
          </div>
        </div>
      )}

      {c.interview && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'rgba(96,165,250,0.15)', borderRadius: 6, padding: '4px 8px', marginBottom: 8 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 12, color: '#60a5fa' }}>calendar_today</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#60a5fa' }}>{c.interview}</span>
        </div>
      )}

      {c.checklist && (
        <div style={{ marginBottom: 8 }}>
          {c.checklist.map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14, color: item.done ? '#34d399' : '#fbbf24' }}>{item.done ? 'check_circle' : 'hourglass_top'}</span>
              <span style={{ fontSize: 11, color: item.done ? '#34d399' : '#fbbf24' }}>{item.label}</span>
            </div>
          ))}
          {c.ref && <div style={{ fontSize: 10, color: '#8ba3cc', marginTop: 4 }}>{c.ref}</div>}
        </div>
      )}

      {!c.stage && !c.checklist && (
        <p style={{ fontSize: 11, color: '#8ba3cc', marginBottom: 8, lineHeight: 1.5 }}>{c.excerpt}</p>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: dbs.bg + '30', borderRadius: 6, padding: '3px 8px' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 12, color: dbs.color.replace('#', '#') === dbs.color ? dbs.color : dbs.color }}>{dbs.icon}</span>
          <span style={{ fontSize: 10, fontWeight: 700, color: dbs.color }}>{dbs.label}</span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {c.tags.map(tag => (
            <span key={tag} style={{ fontSize: 9, fontWeight: 700, color: '#8ba3cc', background: 'rgba(139,163,204,0.15)', borderRadius: 4, padding: '2px 6px', letterSpacing: '0.05em' }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function StaffOnboardingPage() {
  const [showModal, setShowModal] = useState(false)
  const [period, setPeriod] = useState<'30d' | 'quarter'>('30d')

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#111827', fontFamily: T.fontBody }}>
      <Sidebar />

      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <div>
            <div style={{ fontSize: 12, color: '#8ba3cc', marginBottom: 4 }}>Recruitment › Educator Pipeline</div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: '#ffffff', margin: 0 }}>Staff Onboarding &amp; Recruitment</h1>
            <p style={{ fontSize: 13, color: '#8ba3cc', marginTop: 6, maxWidth: 520 }}>Manage global talent acquisition with EduWorld AI Match Intelligence.</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '10px 18px', background: '#fbbf24', border: 'none', borderRadius: 10, fontSize: 13, color: '#111827', fontWeight: 700, cursor: 'pointer' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>person_add</span>
            Invite New Educator
          </button>
        </div>

        {/* Top search bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, background: '#1e2a4a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '8px 14px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#8ba3cc' }}>search</span>
            <input placeholder="Search candidates, roles, departments…" style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: 13, color: '#ffffff' }} />
          </div>
          {(['Staff', 'Finance', 'Analytics'] as const).map(tab => (
            <button key={tab} style={{ padding: '8px 14px', background: tab === 'Staff' ? '#003f7a' : '#1e2a4a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontSize: 12, color: tab === 'Staff' ? '#ffffff' : '#8ba3cc', fontWeight: 500, cursor: 'pointer' }}>{tab}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20 }}>
          {/* Kanban Board */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
            {columns.map(col => (
              <div key={col.id}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#ffffff' }}>{col.label}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#8ba3cc', background: 'rgba(139,163,204,0.15)', borderRadius: 10, padding: '1px 8px' }}>{col.count}</span>
                  </div>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#8ba3cc', cursor: 'pointer' }}>more_horiz</span>
                </div>
                <div style={{ minHeight: 200 }}>
                  {col.candidates.map(c => <CandidateCard key={c.name} c={c} />)}
                  {col.id === 'contracted' && (
                    <div style={{ border: '2px dashed rgba(255,255,255,0.15)', borderRadius: 12, padding: '28px 16px', textAlign: 'center' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 28, color: '#8ba3cc', display: 'block', marginBottom: 8 }}>move_down</span>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#8ba3cc', letterSpacing: '0.04em' }}>DRAG COMPLETED ONBOARDING HERE</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar Panels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Recruitment Velocity */}
            <div style={{ background: '#1e2a4a', borderRadius: 14, padding: '18px 18px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontFamily: T.fontHead, fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>Recruitment Velocity</div>
              <div style={{ display: 'flex', gap: 4, marginBottom: 14, background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: 3 }}>
                {([['30d', 'Last 30 Days'], ['quarter', 'Last Quarter']] as const).map(([id, label]) => (
                  <button key={id} onClick={() => setPeriod(id)} style={{ flex: 1, padding: '5px 0', fontSize: 11, fontWeight: 600, color: period === id ? '#111827' : '#8ba3cc', background: period === id ? '#fbbf24' : 'transparent', border: 'none', borderRadius: 6, cursor: 'pointer' }}>{label}</button>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                <div style={{ flex: 1, background: 'rgba(251,191,36,0.1)', borderRadius: 8, padding: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: '#fbbf24' }}>{period === '30d' ? 12 : 18}</div>
                  <div style={{ fontSize: 10, color: '#8ba3cc' }}>Applied</div>
                </div>
                <div style={{ flex: 1, background: 'rgba(96,165,250,0.1)', borderRadius: 8, padding: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: '#60a5fa' }}>{period === '30d' ? 3 : 5}</div>
                  <div style={{ fontSize: 10, color: '#8ba3cc' }}>Contracted</div>
                </div>
              </div>
              {/* Mini bar chart */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 60 }}>
                {weeklyData.map((v, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: '100%', background: '#fbbf24', borderRadius: '3px 3px 0 0', height: `${(v / 60) * 50}px`, opacity: 0.8 }} />
                    <span style={{ fontSize: 9, color: '#8ba3cc' }}>W{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Status */}
            <div style={{ background: '#1e2a4a', borderRadius: 14, padding: '18px 18px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#34d399' }}>verified_user</span>
                <span style={{ fontFamily: T.fontHead, fontSize: 14, fontWeight: 700, color: '#ffffff' }}>Global Security</span>
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#8ba3cc', letterSpacing: '0.06em', marginBottom: 8 }}>COMPLIANCE STATUS</div>
              <div style={{ fontSize: 38, fontWeight: 800, color: '#34d399', fontFamily: T.fontHead, lineHeight: 1 }}>98.2%</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(52,211,153,0.15)', borderRadius: 20, padding: '3px 10px', marginTop: 6, marginBottom: 10 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 12, color: '#34d399' }}>trending_up</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#34d399' }}>+2.4% from last month</span>
              </div>
              <p style={{ fontSize: 11, color: '#8ba3cc', lineHeight: 1.5 }}>All active recruitments currently meet the London Central Academy Tier-1 Safety Standards.</p>
            </div>

          </div>
        </div>
      </main>

      {/* Invite Modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
          <div style={{ background: '#1e2a4a', borderRadius: 16, padding: '28px 28px', width: 480, border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 24px 60px rgba(0,0,0,0.5)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 6 }}>
              <div>
                <div style={{ fontFamily: T.fontHead, fontSize: 18, fontWeight: 800, color: '#ffffff' }}>Invite New Educator</div>
                <div style={{ fontSize: 12, color: '#8ba3cc', marginTop: 3 }}>Trigger AI candidate matching and background initialization.</div>
              </div>
              <button onClick={() => setShowModal(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 4 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#8ba3cc' }}>close</span>
              </button>
            </div>

            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[['Full Legal Name', 'text', 'e.g. Dr. Jane Smith'], ['Professional Email', 'email', 'e.g. jane@university.edu']].map(([label, type, placeholder]) => (
                <div key={label}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#c8d0e8', display: 'block', marginBottom: 5 }}>{label}</label>
                  <input type={type} placeholder={placeholder} style={{ width: '100%', padding: '9px 12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, fontSize: 13, color: '#ffffff', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              ))}

              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#c8d0e8', display: 'block', marginBottom: 5 }}>Open Position Assignment</label>
                <div style={{ position: 'relative' }}>
                  <select style={{ width: '100%', padding: '9px 12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, fontSize: 13, color: '#ffffff', outline: 'none', appearance: 'none' }}>
                    <option value="">Select a position…</option>
                    <option>Senior Lecturer — Computational Mathematics</option>
                    <option>Head of Creative Arts</option>
                    <option>Research Fellow — Global Economics</option>
                    <option>Primary Years Lead — STEM</option>
                  </select>
                  <span className="material-symbols-outlined" style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', fontSize: 16, color: '#8ba3cc', pointerEvents: 'none' }}>expand_more</span>
                </div>
              </div>

              {/* AI Intelligence Matching */}
              <div style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: 10, padding: '14px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#fbbf24' }}>auto_awesome</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#fbbf24' }}>AI Intelligence Matching</span>
                </div>
                <div style={{ fontSize: 12, color: '#8ba3cc', marginBottom: 10 }}>
                  Would you like EduWorld AI to scan the candidate&apos;s LinkedIn or ResearchGate profile before sending the invite?
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {['Full Comprehensive Scan', 'Privacy Focused (No Scan)'].map((opt, i) => (
                    <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                      <input type="radio" name="scan" defaultChecked={i === 0} style={{ accentColor: '#fbbf24' }} />
                      <span style={{ fontSize: 12, color: '#c8d0e8' }}>{opt}</span>
                    </label>
                  ))}
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4, cursor: 'pointer' }}>
                    <input type="checkbox" style={{ accentColor: '#fbbf24' }} />
                    <span style={{ fontSize: 12, color: '#c8d0e8' }}>Auto-start DBS Verification</span>
                  </label>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 4 }}>
                <button onClick={() => setShowModal(false)} style={{ padding: '9px 18px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, fontSize: 13, color: '#c8d0e8', fontWeight: 500, cursor: 'pointer' }}>Cancel</button>
                <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 18px', background: '#fbbf24', border: 'none', borderRadius: 8, fontSize: 13, color: '#111827', fontWeight: 700, cursor: 'pointer' }}>
                  Send Invitation
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
