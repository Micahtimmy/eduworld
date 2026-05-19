'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center' },
  { icon: 'school', label: 'My Courses', href: '/scholar/course-registration' },
  { icon: 'biotech', label: 'Practicals', href: '/scholar/lab-tracking' },
  { icon: 'chat_bubble', label: 'Feedback', href: '/scholar/feedback-tracker' },
  { icon: 'calendar_month', label: 'Schedule', href: '/scholar/exam-schedule' },
  { icon: 'history_edu', label: 'Academic Records', href: '/scholar/grades' },
]

const PAPERS = [
  { icon: 'description', title: 'CS-101 Midterm', subject: 'Computer Science', semester: 'Fall 2023' },
  { icon: 'description', title: 'ENG-205 Final', subject: 'Literature', semester: 'Spring 2023' },
  { icon: 'description', title: 'MATH-301 Midterm', subject: 'Mathematics', semester: 'Fall 2022' },
  { icon: 'description', title: 'CS-301 Final Exam', subject: 'Computer Science', semester: 'Fall 2022' },
  { icon: 'description', title: 'PHYS-101 Midterm', subject: 'Physics', semester: 'Spring 2022' },
]

const MANUALS = [
  { icon: 'menu_book', badge: 'PDF', badgeColor: '#b91c1c', title: 'Engineering Safety Protocol', updated: 'Updated Aug 2024' },
  { icon: 'menu_book', badge: 'PDF', badgeColor: '#b91c1c', title: 'Biology Lab Standards', updated: 'Updated Jan 2024' },
  { icon: 'menu_book', badge: 'WEB', badgeColor: '#1d4ed8', title: 'Arts & Humanities Style Guide', updated: 'Updated Sep 2023' },
  { icon: 'menu_book', badge: 'PDF', badgeColor: '#b91c1c', title: 'CS Department Handbook', updated: 'Updated Aug 2024' },
]

const navItemBase: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 12,
  padding: '10px 12px', borderRadius: 8,
  color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500,
  cursor: 'pointer', marginBottom: 2, textDecoration: 'none',
}
const cardBase: React.CSSProperties = {
  background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2',
  padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', marginBottom: 20,
}

export default function PastPapersPage() {
  const [search, setSearch] = useState('')

  const filtered = MANUALS.filter(m => m.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9f9ff', fontFamily: '"Inter", system-ui, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }}>
        <div style={{ padding: '24px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ color: '#fff', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20 }}>EduWorld</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 2 }}>Scholar Portal</div>
        </div>
        <div style={{ padding: '12px 20px 10px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, color: '#fff', flexShrink: 0 }}>AS</div>
            <div>
              <div style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>Amara Suleiman</div>
              <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 11 }}>GPA: 3.85 · Year 3</div>
            </div>
          </div>
        </div>
        <nav style={{ flex: 1, padding: '12px 12px', overflowY: 'auto' }}>
          {NAV.map(item => (
            <Link key={item.href} href={item.href} style={navItemBase}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
          <div style={{ marginTop: 12, padding: '0 0 4px' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', borderRadius: 8, padding: '10px 12px', color: '#10B981', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
              <span style={{ fontSize: 16 }}>✦</span> View AI Insights
            </button>
          </div>
        </nav>
        <div style={{ padding: '12px 12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Link href="/settings" style={navItemBase}><span className="material-symbols-outlined" style={{ fontSize: 20 }}>settings</span>Settings</Link>
          <Link href="/support" style={navItemBase}><span className="material-symbols-outlined" style={{ fontSize: 20 }}>help</span>Support</Link>
        </div>
      </aside>

      {/* Main */}
      <main style={{ marginLeft: 260, flex: 1, padding: 32, maxWidth: 1100 }}>
        {/* Topbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, background: '#fff', borderRadius: 12, padding: '12px 20px', border: '1px solid #c2c6d2', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#424750' }}>search</span>
            <input placeholder="Search resources…" style={{ border: 'none', outline: 'none', fontSize: 14, color: '#191c20', background: 'transparent', width: 180 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ background: '#f0fdf4', color: '#10B981', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>GPA: 3.85</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#424750', cursor: 'pointer' }}>notifications</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#424750', cursor: 'pointer' }}>account_balance_wallet</span>
          </div>
        </div>

        {/* Page Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 28, color: '#191c20', margin: 0 }}>Resource Center</h1>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#d1fae5', color: '#065f46', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>local_shipping</span>
              Ordering Open
            </span>
          </div>
          <p style={{ color: '#424750', fontSize: 14, margin: 0, maxWidth: 640 }}>
            Access departmental catalogs, locate physical textbooks in the library, and order your upcoming course packs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24 }}>
          <div>
            {/* Course Packs Panel */}
            <div style={cardBase}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 17, color: '#191c20', marginBottom: 8 }}>Fall 2024 Course Packs</div>
              <p style={{ color: '#424750', fontSize: 14, lineHeight: 1.6, marginBottom: 6 }}>
                Required printed materials curated by your professors. Order now to ensure delivery before the start of the semester.
              </p>
              <p style={{ color: '#424750', fontSize: 13, marginBottom: 18 }}>Available for pickup or dorm delivery.</p>
              <div style={{ display: 'flex', gap: 10 }}>
                <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 20px', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Order Materials</button>
                <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '10px 20px', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>View Requirements</button>
              </div>
            </div>

            {/* Past Question Papers */}
            <div style={cardBase}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 17, color: '#191c20' }}>Past Question Papers</div>
                <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#f5f5f5', border: 'none', borderRadius: 8, padding: '6px 12px', color: '#424750', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>filter_list</span>
                  Filter
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {PAPERS.map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 24, color: '#003f7a', flexShrink: 0 }}>{p.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 14, color: '#191c20' }}>{p.title}</div>
                      <div style={{ fontSize: 12, color: '#424750' }}>{p.subject} · {p.semester}</div>
                    </div>
                    <button style={{ display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>download</span>
                    </button>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid #eef0f4' }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: '#003f7a', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                  View All Papers Directory
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Departmental Manuals */}
            <div style={cardBase}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 17, color: '#191c20' }}>Departmental Manuals</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#f5f5f5', border: '1px solid #c2c6d2', borderRadius: 8, padding: '6px 10px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#424750' }}>search</span>
                  <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search manuals…" style={{ border: 'none', outline: 'none', fontSize: 13, background: 'transparent', color: '#191c20', width: 140 }} />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {filtered.map((m, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#003f7a', flexShrink: 0 }}>{m.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 14, color: '#191c20' }}>{m.title}</div>
                      <div style={{ fontSize: 11, color: '#424750', marginTop: 2 }}>{m.updated}</div>
                    </div>
                    <span style={{ background: m.badgeColor, color: '#fff', fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 4, letterSpacing: '0.5px' }}>{m.badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Library Locator */}
            <div style={cardBase}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>location_on</span>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#191c20' }}>Library Locator</div>
              </div>
              {/* Library image placeholder */}
              <div style={{ width: '100%', height: 140, borderRadius: 10, background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #e0f0ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, overflow: 'hidden', position: 'relative' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 48, color: '#0369a1', opacity: 0.4 }}>library_books</span>
                <div style={{ position: 'absolute', bottom: 8, left: 10, background: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 6 }}>Main Campus Library</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
                {[
                  { label: 'Main Campus Library, Floor 3', detail: '' },
                  { label: 'Reference Textbooks', detail: 'Aisle 12-B' },
                  { label: 'Reserved Readings', detail: 'Desk 1' },
                ].map((loc, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderRadius: 8, background: '#f9f9ff', border: '1px solid #eef0f4' }}>
                    <span style={{ fontSize: 13, color: '#191c20', fontWeight: 500 }}>{loc.label}</span>
                    {loc.detail && <span style={{ fontSize: 12, color: '#003f7a', fontWeight: 600 }}>{loc.detail}</span>}
                  </div>
                ))}
              </div>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: '#003f7a', fontSize: 13, fontWeight: 600, cursor: 'pointer', padding: 0 }}>
                Open Floor Map
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 20, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 15, color: '#191c20', marginBottom: 14 }}>Academic Session 2024</div>
              {[
                { label: 'Course Packs Available', value: '6', color: '#003f7a' },
                { label: 'Past Papers', value: '48', color: '#7c3aed' },
                { label: 'Manuals & Guides', value: '12', color: '#10B981' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 2 ? '1px solid #eef0f4' : 'none' }}>
                  <span style={{ fontSize: 13, color: '#424750' }}>{s.label}</span>
                  <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20, color: s.color }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
