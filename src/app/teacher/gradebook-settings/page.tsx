'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/teacher/dashboard' },
  { icon: 'school', label: 'Classrooms', href: '/teacher/classes' },
  { icon: 'menu_book', label: 'Lesson Plans', href: '/teacher/lesson-archive' },
  { icon: 'grade', label: 'Grading', href: '/teacher/gradebook', active: true },
  { icon: 'forum', label: 'Communications', href: '/teacher/student-comms' },
]

const TABLE_ROWS = [
  { icon: 'quiz', category: 'Quizzes & Unit Tests', source: 'Department Head', subWeight: 40, status: 'LOCKED', statusColor: '#b91c1c', statusBg: '#fee2e2' },
  { icon: 'assignment', category: 'Homework & Labs', source: 'Teacher Configured', subWeight: 30, status: 'EDITABLE', statusColor: '#065f46', statusBg: '#d1fae5' },
  { icon: 'groups', category: 'Participation & Projects', source: 'Teacher Configured', subWeight: 30, status: 'EDITABLE', statusColor: '#065f46', statusBg: '#d1fae5' },
]

const navItemBase: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 12,
  padding: '10px 12px', borderRadius: 8,
  color: '#424750', fontSize: 14, fontWeight: 500,
  cursor: 'pointer', marginBottom: 2, textDecoration: 'none',
}
const cardBase: React.CSSProperties = {
  background: '#fff', borderRadius: 14, border: '1px solid #e2e8f0',
  padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', marginBottom: 20,
}

export default function GradebookSettingsPage() {
  const [teacherWeight, setTeacherWeight] = useState(60)
  const adminWeight = 100 - teacherWeight

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f0f4f8', fontFamily: '"Inter", system-ui, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: 260, minWidth: 260, background: '#fff', borderRight: '1px solid #e2e8f0', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }}>
        <div style={{ padding: '24px 20px 16px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ color: '#003f7a', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 800, fontSize: 20 }}>EduWorld</div>
          <div style={{ color: '#64748b', fontSize: 12, marginTop: 2 }}>Educator Portal</div>
        </div>
        <div style={{ padding: '12px 20px 10px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#94a3b8' }}>search</span>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: '#10B981', fontSize: 13, fontWeight: 600, cursor: 'pointer', padding: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>auto_awesome</span>
              ✦ AI Lesson Generator
            </button>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#94a3b8', marginLeft: 'auto' }}>notifications</span>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#94a3b8' }}>settings</span>
          </div>
        </div>
        <div style={{ padding: '8px 12px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.8px', padding: '6px 12px 4px' }}>Educator Portal</div>
        </div>
        <nav style={{ flex: 1, padding: '8px 12px', overflowY: 'auto' }}>
          {NAV.map(item => (
            <Link key={item.href} href={item.href} style={{ ...navItemBase, ...(item.active ? { background: '#e8f0fe', color: '#003f7a', fontWeight: 700 } : {}) }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: item.active ? '#003f7a' : '#94a3b8' }}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
          <div style={{ margin: '12px 0 8px' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', background: '#e8f0fe', border: '1px dashed #93c5fd', borderRadius: 8, padding: '9px 12px', color: '#003f7a', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add</span>
              + Create New Class
            </button>
          </div>
        </nav>
        <div style={{ padding: '12px 12px', borderTop: '1px solid #e2e8f0' }}>
          <Link href="/resources" style={navItemBase}><span className="material-symbols-outlined" style={{ fontSize: 20, color: '#94a3b8' }}>library_books</span>Resources</Link>
          <Link href="/support" style={navItemBase}><span className="material-symbols-outlined" style={{ fontSize: 20, color: '#94a3b8' }}>contact_support</span>Support</Link>
        </div>
      </aside>

      {/* Main */}
      <main style={{ marginLeft: 260, flex: 1, padding: 32 }}>
        {/* Page Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 28, color: '#1f2937', margin: '0 0 6px' }}>Grading Configuration</h1>
            <p style={{ color: '#6b7280', fontSize: 14, margin: 0 }}>Define how teacher assessments and administrative benchmarks reconcile for final grades.</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ background: '#fff', color: '#1f2937', border: '1px solid #e2e8f0', borderRadius: 9, padding: '10px 18px', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
              Revert to Global Defaults
            </button>
            <button style={{ background: '#1a73e8', color: '#fff', border: 'none', borderRadius: 9, padding: '10px 18px', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
              Save Configuration
            </button>
          </div>
        </div>

        {/* Weightage Reconciliation */}
        <div style={cardBase}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#003f7a' }}>balance</span>
              <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 18, color: '#1f2937' }}>Weightage Reconciliation</span>
              <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>ACTIVE SEMESTER 2</span>
            </div>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#94a3b8' }}>edit_note</span>
            </button>
          </div>

          {/* Weight Items */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
            <div style={{ flex: 1, padding: '16px', borderRadius: 12, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#1a73e8' }}>edit_note</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#1f2937' }}>Teacher-Graded Assignments</div>
                  <div style={{ fontSize: 11, color: '#6b7280' }}>Quizzes, homework, and participation</div>
                </div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 24, color: '#1a73e8' }}>{teacherWeight}%</div>
              </div>
              <input
                type="range"
                min={30}
                max={70}
                value={teacherWeight}
                onChange={e => setTeacherWeight(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#1a73e8', cursor: 'pointer' }}
              />
            </div>
            <div style={{ flex: 1, padding: '16px', borderRadius: 12, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#7c3aed' }}>verified_user</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#1f2937' }}>Admin-Set Benchmarks</div>
                  <div style={{ fontSize: 11, color: '#6b7280' }}>Standardized midterms and final exams</div>
                </div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 24, color: '#7c3aed' }}>{adminWeight}%</div>
              </div>
              {/* Static bar visual */}
              <div style={{ height: 8, borderRadius: 99, background: '#e2e8f0', overflow: 'hidden', marginTop: 8 }}>
                <div style={{ height: '100%', width: `${adminWeight}%`, borderRadius: 99, background: '#7c3aed' }} />
              </div>
            </div>
          </div>

          {/* Combined bar */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 12, fontWeight: 600, color: '#6b7280' }}>
              <span>Teacher ({teacherWeight}%)</span>
              <span>Admin ({adminWeight}%)</span>
            </div>
            <div style={{ height: 12, borderRadius: 99, background: '#e2e8f0', overflow: 'hidden', display: 'flex' }}>
              <div style={{ height: '100%', width: `${teacherWeight}%`, background: '#1a73e8', borderRadius: '99px 0 0 99px', transition: 'width 0.2s' }} />
              <div style={{ height: '100%', flex: 1, background: '#7c3aed' }} />
            </div>
          </div>

          {/* AI Suggestion */}
          <div style={{ background: '#e8f0fe', borderRadius: 12, padding: '16px 18px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#1a73e8', flexShrink: 0, marginTop: 2 }}>auto_awesome</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <span style={{ fontWeight: 700, fontSize: 14, color: '#1e3a5f' }}>EduWorld AI Suggestion</span>
                <span style={{ fontSize: 14, color: '#1a73e8' }}>✦</span>
              </div>
              <p style={{ fontSize: 13, color: '#1e3a5f', lineHeight: 1.55, margin: '0 0 12px' }}>
                Based on last semester&apos;s performance data, a 65/35 split reduces the impact of grading variance between departments. Predicted 4% increase in standardized score alignment.
              </p>
              <button style={{ background: '#1a73e8', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>
                Apply Optimized Split
              </button>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
          {/* Mandatory Benchmarks */}
          <div style={cardBase}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 17, color: '#1f2937', marginBottom: 16 }}>Mandatory Benchmarks</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>
              {[
                { icon: 'emoji_events', label: 'Final Exam', weight: '25%' },
                { icon: 'history_edu', label: 'Midterm Assessment', weight: '15%' },
              ].map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 10, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#7c3aed' }}>{b.icon}</span>
                  <span style={{ flex: 1, fontWeight: 600, fontSize: 14, color: '#1f2937' }}>{b.label}</span>
                  <span style={{ background: '#ede9fe', color: '#7c3aed', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4 }}>ADMIN SET</span>
                  <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 18, color: '#7c3aed', minWidth: 40, textAlign: 'right' }}>{b.weight}</span>
                </div>
              ))}
            </div>
            <button style={{ background: 'none', border: 'none', color: '#1a73e8', fontSize: 13, fontWeight: 600, cursor: 'pointer', padding: 0, textDecoration: 'underline' }}>View Benchmark Policy</button>
          </div>

          {/* Total Assigned Weight */}
          <div style={{ ...cardBase, background: '#f0fdf4', border: '1px solid #a7f3d0' }}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 17, color: '#065f46', marginBottom: 12 }}>Total Assigned Weight</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 28, color: '#10B981' }}>task_alt</span>
              </div>
              <div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 40, color: '#065f46', lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: 13, color: '#065f46', marginTop: 4 }}>Allocation valid for final grade calculation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Teacher Assignment Types Table */}
        <div style={cardBase}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 17, color: '#1f2937' }}>Teacher Assignment Types</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '8px 14px', color: '#1f2937', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>filter_list</span>
                Filter
              </button>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#003f7a', border: 'none', borderRadius: 8, padding: '8px 14px', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                + Add Category
              </button>
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderRadius: 8 }}>
                  {['Category', 'Source', 'Sub-Weight', 'Status', 'Actions'].map(h => (
                    <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', border: 'none' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < TABLE_ROWS.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                    <td style={{ padding: '14px', whiteSpace: 'nowrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 34, height: 34, borderRadius: 8, background: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#003f7a' }}>{row.icon}</span>
                        </div>
                        <span style={{ fontWeight: 600, fontSize: 14, color: '#1f2937' }}>{row.category}</span>
                      </div>
                    </td>
                    <td style={{ padding: '14px', fontSize: 13, color: '#6b7280' }}>{row.source}</td>
                    <td style={{ padding: '14px' }}>
                      <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 18, color: '#1a73e8' }}>{row.subWeight}%</span>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <span style={{ background: row.statusBg, color: row.statusColor, fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4, letterSpacing: '0.5px' }}>{row.status}</span>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#94a3b8' }}>more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* EduWorld Grading Logic */}
        <div style={cardBase}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 17, color: '#1f2937', marginBottom: 10 }}>The EduWorld Grading Logic</div>
              <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, marginBottom: 14 }}>
                A hybrid gradebook balancing educator flexibility with academic rigor. Final scores blend continuous classroom assessment with terminal benchmarks for a complete picture of student achievement.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 18 }}>
                {[
                  'Automatic reconciliation of late penalties',
                  'Standardized benchmark normalization',
                  'AI-powered outlier detection for anomalous grades',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#10B981' }}>check_circle</span>
                    <span style={{ fontSize: 13, color: '#374151' }}>{item}</span>
                  </div>
                ))}
              </div>
              <button style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#003f7a', color: '#fff', border: 'none', borderRadius: 9, padding: '10px 18px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>play_circle</span>
                View Logic Demonstration
              </button>
            </div>
            {/* Illustration placeholder */}
            <div style={{ width: 180, height: 130, borderRadius: 14, background: 'linear-gradient(135deg, #e8f0fe 0%, #ddd6fe 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 56, color: '#7c3aed', opacity: 0.4 }}>analytics</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
