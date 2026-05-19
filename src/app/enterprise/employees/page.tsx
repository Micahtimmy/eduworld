'use client'
import { useState } from 'react'
import Link from 'next/link'

const T = {
  bg: '#f4f4f8', surface: '#ffffff', textPrimary: '#0f0f1a',
  textMuted: '#6b7280', border: '#e5e7eb',
  purple: '#6366f1', purpleLight: '#818cf8', purpleDim: '#eef2ff',
  indigo: '#4f46e5', success: '#10b981', warning: '#f59e0b', error: '#ef4444',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
  sidebarBg: '#1e1e2e', sidebarText: '#a1a1c7', sidebarActive: '#2e2e4e',
}

const sidebarItems = [
  { icon: 'corporate_fare', label: 'Dashboard', href: '/enterprise/dashboard' },
  { icon: 'group', label: 'Employees', href: '/enterprise/employees', active: true },
  { icon: 'school', label: 'Programs', href: '/enterprise/programs' },
  { icon: 'troubleshoot', label: 'Skills Gap', href: '/enterprise/skills-gap' },
  { icon: 'trending_up', label: 'Performance', href: '/enterprise/employee-performance' },
  { icon: 'analytics', label: 'ROI Analytics', href: '/enterprise/roi' },
  { icon: 'psychology', label: 'AI Training', href: '/enterprise/ai-training' },
]

const EMPLOYEES = [
  { id: 'e1', initials: 'SK', name: 'Sarah Kim', department: 'Engineering', completion: 95, courses: 12, status: 'active' },
  { id: 'e2', initials: 'JO', name: 'James Okafor', department: 'Product', completion: 91, courses: 10, status: 'active' },
  { id: 'e3', initials: 'MP', name: 'Maya Patel', department: 'Design', completion: 88, courses: 9, status: 'active' },
  { id: 'e4', initials: 'TC', name: 'Tom Chen', department: 'Engineering', completion: 82, courses: 8, status: 'active' },
  { id: 'e5', initials: 'LM', name: 'Lisa Müller', department: 'HR', completion: 76, courses: 7, status: 'active' },
  { id: 'e6', initials: 'DO', name: 'David Osei', department: 'Sales', completion: 71, courses: 6, status: 'inactive' },
  { id: 'e7', initials: 'AK', name: 'Anna Kowalski', department: 'Product', completion: 84, courses: 9, status: 'active' },
  { id: 'e8', initials: 'MR', name: 'Marco Rossi', department: 'Engineering', completion: 69, courses: 6, status: 'active' },
  { id: 'e9', initials: 'FA', name: 'Fatima Al-Hassan', department: 'Compliance', completion: 93, courses: 11, status: 'active' },
  { id: 'e10', initials: 'JT', name: 'Jake Thompson', department: 'Design', completion: 60, courses: 5, status: 'active' },
]

function Sidebar() {
  return (
    <aside style={{ width: 240, minHeight: '100vh', background: T.sidebarBg, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: '#ffffff' }}>EduWorld</div>
        <span style={{ display: 'inline-block', marginTop: 5, fontSize: 11, fontWeight: 600, color: T.purpleLight, background: 'rgba(129,140,248,0.15)', borderRadius: 6, padding: '2px 8px' }}>Enterprise</span>
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
    </aside>
  )
}

export default function EnterpriseEmployeesPage() {
  const [search, setSearch] = useState('')
  const filtered = EMPLOYEES.filter(e => e.name.toLowerCase().includes(search.toLowerCase()) || e.department.toLowerCase().includes(search.toLowerCase()))

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Employees</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>{EMPLOYEES.length} enrolled in L&D programs</p>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 18px', background: T.purple, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>person_add</span>Invite Employee
          </button>
        </div>

        {/* Search */}
        <div style={{ position: 'relative', marginBottom: 20 }}>
          <span className="material-symbols-outlined" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 18, color: T.textMuted }}>search</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search employees..."
            style={{ width: '100%', height: 42, paddingLeft: 40, paddingRight: 16, borderRadius: 10, border: `1px solid ${T.border}`, background: T.surface, fontSize: 13, color: T.textPrimary, outline: 'none', boxSizing: 'border-box', fontFamily: T.fontBody }}
          />
        </div>

        {/* Employee List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {filtered.map(emp => (
            <Link key={emp.id} href={`/enterprise/employees/${emp.id}`} style={{ textDecoration: 'none' }}>
              <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: T.purple + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, color: T.purple, flexShrink: 0 }}>{emp.initials}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: T.textPrimary }}>{emp.name}</div>
                  <div style={{ fontSize: 12, color: T.textMuted }}>{emp.department} · {emp.courses} courses</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                    <div style={{ width: 120, height: 5, background: T.border + '80', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${emp.completion}%`, background: emp.completion >= 80 ? T.success : T.purple, borderRadius: 3 }} />
                    </div>
                    <span style={{ fontSize: 11, color: T.textMuted }}>{emp.completion}%</span>
                  </div>
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: emp.status === 'active' ? '#f0fdf4' : T.bg, color: emp.status === 'active' ? T.success : T.textMuted }}>
                  {emp.status}
                </span>
              </div>
            </Link>
          ))}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 0', color: T.textMuted, fontSize: 14 }}>No employees found</div>
          )}
        </div>
      </main>
    </div>
  )
}
