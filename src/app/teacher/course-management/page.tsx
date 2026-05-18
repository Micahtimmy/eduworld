'use client'
import { Eye, Sparkles, Plus, Edit, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PATHS = [
  { name: 'Fast-Track Elite', count: '8 Students' },
  { name: 'Standard Foundation', count: '24 Students' },
  { name: 'Remedial Support', count: '4 Students' },
]

const STUDENTS = [
  { initials: 'JD', name: 'Jameson, David', email: 'david.j@university.edu', path: 'Standard', m1: true, m2: false, lab: true },
  { initials: 'LM', name: 'Lee, Miranda', email: 'm.lee@university.edu', path: 'Fast-Track', m1: true, m2: true, lab: true },
]

export default function TeacherCourseManagementPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">✅ Advanced Physics & Quantum Mechanics</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Course Management</h1>
          <p className="text-sm text-on-surface-variant mt-1">Design, organize, and control the learning journey for your cohort.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Eye className="h-3.5 w-3.5" /> Preview as Student</Button>
          <Button size="sm">Publish Changes</Button>
        </div>
      </div>

      {/* Curriculum Structure */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-display font-semibold text-on-surface">Curriculum Structure</h2>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">4 Active Modules</span>
          </div>
          <button className="text-xs text-on-surface-variant hover:text-on-surface">⇅ Reorder Modules</button>
        </div>

        <div className="border border-outline-variant rounded-xl p-4 space-y-2">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl">⚛</span>
              <div>
                <p className="font-semibold text-sm text-on-surface">Module 1: Atomic Theory Foundations</p>
                <p className="text-xs text-on-surface-variant">Understanding Bohr models, electron shells, and quantum numbers.</p>
                <div className="flex gap-3 mt-1">
                  <span className="text-xs text-on-surface-variant">📄 12 Lessons</span>
                  <span className="text-xs text-on-surface-variant">⏱ 4.5 Hours</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Teacher Controlled</span>
              <div className="flex gap-1">
                <button className="p-1 rounded hover:bg-surface-high"><Edit className="h-3.5 w-3.5 text-on-surface-variant" /></button>
                <button className="p-1 rounded hover:bg-surface-high"><Eye className="h-3.5 w-3.5 text-on-surface-variant" /></button>
                <button className="p-1 rounded hover:bg-surface-high"><Trash2 className="h-3.5 w-3.5 text-on-surface-variant" /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-ai/20 bg-ai/5 rounded-xl p-4 space-y-2">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl">🧠</span>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm text-on-surface">Module 2: Quantum Entanglement</p>
                  <Sparkles className="h-3.5 w-3.5 text-ai" />
                </div>
                <p className="text-xs text-on-surface-variant">AI-optimized sequence covering Bell&apos;s Theorem and Spooky Action.</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex -space-x-1">
                    {['AB', 'CD'].map(i => <div key={i} className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary border border-white">{i[0]}</div>)}
                  </div>
                  <span className="text-xs text-on-surface-variant">+14</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">Admin Restricted</span>
            </div>
          </div>
          <p className="text-xs text-on-surface-variant">Managed via Adaptive Learning Path • <button className="text-primary hover:underline">Review AI Adjustments</button></p>
        </div>

        <button className="w-full flex items-center justify-center gap-2 p-3 border-2 border-dashed border-outline-variant rounded-xl text-sm text-on-surface-variant hover:border-primary/50 hover:text-primary">
          <Plus className="h-4 w-4" /> Add New Module to Curriculum
        </button>
      </div>

      {/* Learning Paths */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div>
          <h2 className="font-display font-semibold text-on-surface">Learning Paths</h2>
          <p className="text-xs text-on-surface-variant">Segment your classroom into focused paths based on performance and interest.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          {PATHS.map(p => (
            <div key={p.name} className="flex-1 min-w-32 bg-surface-low rounded-xl p-3 text-center">
              <p className="font-semibold text-sm text-on-surface">{p.name}</p>
              <p className="text-xs text-on-surface-variant">{p.count}</p>
            </div>
          ))}
        </div>
        <Button variant="outline" size="sm">Manage Cohorts</Button>
      </div>

      {/* Student Access Matrix */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Student Access Matrix</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-on-surface-variant border-b border-outline-variant">
                <th className="text-left pb-3 font-semibold">Student Name</th>
                <th className="text-left pb-3 font-semibold">Path</th>
                <th className="text-left pb-3 font-semibold">Module 1</th>
                <th className="text-left pb-3 font-semibold">Module 2</th>
                <th className="text-left pb-3 font-semibold">Lab Access</th>
                <th className="text-left pb-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {STUDENTS.map(s => (
                <tr key={s.initials} className="border-b border-outline-variant last:border-0">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{s.initials}</div>
                      <div>
                        <p className="font-medium text-xs text-on-surface">{s.name}</p>
                        <p className="text-xs text-on-surface-variant">{s.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-xs text-on-surface-variant">{s.path}</td>
                  <td className="py-3 text-center">{s.m1 ? '✅' : '⛔'}</td>
                  <td className="py-3 text-center">{s.m2 ? '✅' : '⛔'}</td>
                  <td className="py-3 text-center">{s.lab ? '✅' : '⛔'}</td>
                  <td className="py-3"><button className="text-xs text-primary hover:underline">Edit Individual Access</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-on-surface-variant">Showing 2 of 36 students</p>
      </div>
    </div>
  )
}
