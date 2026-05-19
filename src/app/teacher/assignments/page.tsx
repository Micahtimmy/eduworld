'use client'
import { useState } from 'react'
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
  { icon: 'assignment', label: 'Assignments', href: '/teacher/assignments', active: true },
  { icon: 'analytics', label: 'Analytics', href: '/teacher/student-insights' },
  { icon: 'people', label: 'Students', href: '/teacher/student-groups' },
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar' },
  { icon: 'inbox', label: 'Inbox', href: '/teacher/inbox' },
]

const ASSIGNMENTS = [
  { id: 'a1', title: 'Newton\'s Laws — Problem Set 3', class: 'AP Physics 9A', due: 'Nov 22, 2025', submissions: 18, total: 24, status: 'active', type: 'Problem Set' },
  { id: 'a2', title: 'Electromagnetic Induction Lab Report', class: 'AP Physics 10A', due: 'Nov 25, 2025', submissions: 12, total: 22, status: 'active', type: 'Lab Report' },
  { id: 'a3', title: 'Wave Mechanics Essay', class: 'AP Physics 9B', due: 'Nov 18, 2025', submissions: 26, total: 26, status: 'grading', type: 'Essay' },
  { id: 'a4', title: 'Quantum Theory Quiz', class: 'AP Physics 11A', due: 'Nov 10, 2025', submissions: 30, total: 30, status: 'graded', type: 'Quiz' },
]

const TYPE_COLORS: Record<string, string> = {
  'Problem Set': '#0891b2',
  'Lab Report': '#7c3aed',
  'Essay': T.ai,
  'Quiz': T.xp,
}

const STATUS_COLOR: Record<string, { bg: string; text: string }> = {
  active: { bg: T.ai + '20', text: T.ai },
  grading: { bg: T.xp + '20', text: T.xp },
  graded: { bg: T.primary + '20', text: T.primary },
}

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

export default function TeacherAssignmentsPage() {
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [selectedClass, setSelectedClass] = useState('AP Physics 9A')
  const [assignType, setAssignType] = useState('Problem Set')
  const [points, setPoints] = useState('100')
  const [dueDate, setDueDate] = useState('')
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? ASSIGNMENTS : ASSIGNMENTS.filter(a => a.status === filter.toLowerCase())

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Assignments</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Create, distribute and track assignments across all your classes.</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', cursor: 'pointer', fontWeight: 600 }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{showForm ? 'close' : 'add'}</span>
            {showForm ? 'Cancel' : 'New Assignment'}
          </button>
        </div>

        {/* Creation Form */}
        {showForm && (
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 28, marginBottom: 28 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 17, fontWeight: 700, color: T.textPrimary, marginBottom: 20 }}>Create New Assignment</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Assignment Title</label>
                <input
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="e.g. Newton's Laws — Problem Set 4"
                  style={{ width: '100%', padding: '10px 14px', border: `1px solid ${T.border}`, borderRadius: 10, fontFamily: T.fontBody, fontSize: 14, color: T.textPrimary, background: T.bg, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Class</label>
                <select
                  value={selectedClass}
                  onChange={e => setSelectedClass(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', border: `1px solid ${T.border}`, borderRadius: 10, fontFamily: T.fontBody, fontSize: 14, color: T.textPrimary, background: T.surface, outline: 'none' }}
                >
                  {['AP Physics 9A', 'AP Physics 9B', 'AP Physics 10A', 'AP Physics 11A'].map(c => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Assignment Type</label>
                <select
                  value={assignType}
                  onChange={e => setAssignType(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', border: `1px solid ${T.border}`, borderRadius: 10, fontFamily: T.fontBody, fontSize: 14, color: T.textPrimary, background: T.surface, outline: 'none' }}
                >
                  {['Problem Set', 'Lab Report', 'Essay', 'Quiz', 'Project', 'Presentation'].map(t => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Point Value</label>
                <input
                  value={points}
                  onChange={e => setPoints(e.target.value)}
                  type="number"
                  style={{ width: '100%', padding: '10px 14px', border: `1px solid ${T.border}`, borderRadius: 10, fontFamily: T.fontBody, fontSize: 14, color: T.textPrimary, background: T.bg, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Due Date</label>
                <input
                  value={dueDate}
                  onChange={e => setDueDate(e.target.value)}
                  type="date"
                  style={{ width: '100%', padding: '10px 14px', border: `1px solid ${T.border}`, borderRadius: 10, fontFamily: T.fontBody, fontSize: 14, color: T.textPrimary, background: T.bg, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
            </div>

            {/* Rich Text Editor Placeholder */}
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Instructions</label>
              <div style={{ border: `1px solid ${T.border}`, borderRadius: 10, overflow: 'hidden' }}>
                <div style={{ display: 'flex', gap: 4, padding: '8px 12px', borderBottom: `1px solid ${T.border}`, background: T.bg }}>
                  {['format_bold', 'format_italic', 'format_underlined', 'format_list_bulleted', 'attach_file', 'image', 'link'].map(icon => (
                    <button key={icon} style={{ padding: 4, borderRadius: 4, border: 'none', background: 'transparent', cursor: 'pointer', color: T.textMuted }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{icon}</span>
                    </button>
                  ))}
                </div>
                <textarea
                  value={desc}
                  onChange={e => setDesc(e.target.value)}
                  placeholder="Add assignment instructions, rubric details, or attach files..."
                  style={{ width: '100%', minHeight: 120, padding: '12px 14px', border: 'none', outline: 'none', fontFamily: T.fontBody, fontSize: 14, color: T.textPrimary, resize: 'vertical', background: T.surface, boxSizing: 'border-box' }}
                />
              </div>
            </div>

            {/* AI Generator */}
            <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 10, padding: '12px 16px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 14, color: T.ai }}>✦</span>
              <span style={{ fontSize: 13, color: T.textMuted, flex: 1 }}>Let EduWorld AI generate rubric and instructions based on your topic.</span>
              <button style={{ padding: '7px 14px', background: T.ai, color: '#fff', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Generate with AI</button>
            </div>

            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <button onClick={() => setShowForm(false)} style={{ padding: '9px 18px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textMuted, cursor: 'pointer' }}>Cancel</button>
              <button style={{ padding: '9px 18px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', cursor: 'pointer', fontWeight: 600 }}>Publish Assignment</button>
            </div>
          </div>
        )}

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
          {[
            { label: 'Active', value: '2', color: T.ai },
            { label: 'Pending Grading', value: '1', color: T.xp },
            { label: 'Fully Graded', value: '1', color: T.primary },
            { label: 'Total Submissions', value: '86', color: '#0891b2' },
          ].map(s => (
            <div key={s.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '18px 16px', textAlign: 'center' }}>
              <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 28, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          {['All', 'Active', 'Grading', 'Graded'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{ padding: '7px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: 'pointer', background: filter === f ? T.primary : 'transparent', color: filter === f ? '#fff' : T.textMuted, border: filter === f ? 'none' : `1px solid ${T.border}` }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Assignment List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filtered.map(a => {
            const pct = Math.round((a.submissions / a.total) * 100)
            const sc = STATUS_COLOR[a.status]
            return (
              <div key={a.id} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: TYPE_COLORS[a.type] + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: TYPE_COLORS[a.type] }}>assignment</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontWeight: 700, fontSize: 15, color: T.textPrimary }}>{a.title}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 10, background: sc.bg, color: sc.text }}>
                      {a.status.charAt(0).toUpperCase() + a.status.slice(1)}
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 10, background: TYPE_COLORS[a.type] + '20', color: TYPE_COLORS[a.type] }}>
                      {a.type}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 8 }}>{a.class} · Due {a.due}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ flex: 1, maxWidth: 200, height: 6, background: T.border + '60', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${pct}%`, background: pct === 100 ? T.ai : T.primary, borderRadius: 3 }} />
                    </div>
                    <span style={{ fontSize: 12, color: T.textMuted }}>{a.submissions}/{a.total} submitted</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                  {a.status === 'grading' && (
                    <button style={{ padding: '7px 14px', background: T.primary, color: '#fff', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Grade</button>
                  )}
                  <button style={{ padding: '7px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, cursor: 'pointer' }}>View</button>
                  <button style={{ padding: '7px 10px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, cursor: 'pointer' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>more_vert</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
