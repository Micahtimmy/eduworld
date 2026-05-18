'use client'
import { MapPin, Download, Search, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PAPERS = [
  { title: 'CS-101 Midterm', subject: 'Computer Science', term: 'Fall 2023' },
  { title: 'ENG-205 Final', subject: 'Literature', term: 'Spring 2023' },
  { title: 'MATH-301 Midterm', subject: 'Mathematics', term: 'Fall 2022' },
]

const MANUALS = [
  { title: 'Engineering Safety Protocol', format: 'PDF', updated: 'Aug 2024' },
  { title: 'Biology Lab Standards', format: 'PDF', updated: 'Jan 2024' },
  { title: 'Arts & Humanities Style Guide', format: 'WEB', updated: 'Sep 2023' },
  { title: 'CS Department Handbook', format: 'PDF', updated: 'Aug 2024' },
]

export default function ScholarResourcesPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Resource Center</h1>
        <p className="text-sm text-on-surface-variant mt-1">Access course packs, library materials, past papers, and departmental manuals.</p>
      </div>

      {/* Course Packs Banner */}
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 flex items-center gap-4">
        <ShoppingCart className="h-6 w-6 text-primary shrink-0" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Ordering Open</span>
          </div>
          <p className="font-semibold text-on-surface">Fall 2024 Course Packs</p>
          <p className="text-xs text-on-surface-variant mt-0.5">Professor-curated printed materials available with multiple delivery options.</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" className="h-8 text-xs">Order Materials</Button>
          <Button size="sm" variant="outline" className="h-8 text-xs">View Requirements</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Library Locator */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <h2 className="font-display font-semibold text-on-surface">Library Locator</h2>
          </div>
          <div className="bg-surface-low rounded-xl overflow-hidden">
            <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-4xl">📚</span>
            </div>
          </div>
          <div className="space-y-1.5 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-on-surface-variant" />
              <span className="font-semibold text-on-surface">Main Campus Library, Floor 3</span>
            </div>
            <p className="text-xs text-on-surface-variant ml-5">Reference Textbooks Aisle 12-B</p>
            <p className="text-xs text-on-surface-variant ml-5">Reserved Readings Desk 1</p>
          </div>
          <button className="text-xs text-primary hover:underline flex items-center gap-1">Open Floor Map ›</button>
        </div>

        {/* Past Papers */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Past Question Papers</h2>
            <button className="text-on-surface-variant hover:text-on-surface"><Search className="h-4 w-4" /></button>
          </div>
          <div className="space-y-2">
            {PAPERS.map(p => (
              <div key={p.title} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
                <span className="text-xl">📄</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-on-surface">{p.title}</p>
                  <p className="text-xs text-on-surface-variant">{p.subject} · {p.term}</p>
                </div>
                <button className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20">
                  <Download className="h-3.5 w-3.5 text-primary" />
                </button>
              </div>
            ))}
          </div>
          <button className="text-xs text-primary hover:underline">View All Papers Directory →</button>
        </div>
      </div>

      {/* Departmental Manuals */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Departmental Manuals</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
          <input className="w-full pl-9 pr-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none focus:border-primary placeholder:text-on-surface-variant" placeholder="Search manuals..." />
        </div>
        <div className="space-y-2">
          {MANUALS.map(m => (
            <div key={m.title} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
              <span className="text-xl">📚</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{m.title}</p>
                <p className="text-xs text-on-surface-variant">Updated {m.updated}</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${m.format === 'PDF' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>{m.format}</span>
              <button className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20">
                <Download className="h-3.5 w-3.5 text-primary" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
