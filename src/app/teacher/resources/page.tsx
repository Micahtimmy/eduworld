'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const FOLDERS = [
  { name: '9th Grade Math', files: 142, icon: '📐', updated: '2 days ago' },
  { name: 'AP Biology', files: 89, icon: '🔬', updated: 'Today' },
  { name: 'World History', files: 215, icon: '🌍', updated: '1 week ago' },
]

const STAFF_DRIVE = [
  { name: 'Q3 Review Packets', type: 'PDF', size: '4.2MB', icon: '📄' },
  { name: 'Lab Safety Guidelines', type: 'PDF', size: '1.1MB', icon: '📋' },
  { name: 'Cell Structure Intro', type: 'PPTX', size: '8.4MB', icon: '📊' },
]

const RESOURCES = [
  { name: 'Algebra I Midterm', type: 'PDF', rating: '4.8', uses: '1.2k', icon: '📄' },
  { name: 'WWI Presentation Deck', type: 'PPTX', rating: '4.9', uses: '850', icon: '📊' },
  { name: 'Photosynthesis Video', type: 'MP4', rating: '4.5', uses: '3.4k', icon: '🎥' },
]

export default function TeacherResourcesPage() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="font-display font-bold text-2xl text-on-surface">Teaching Resources</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1.5">Filter</Button>
          <Button size="sm" className="gap-1.5">⬆ Upload Files</Button>
        </div>
      </div>

      {/* AI Smart Search */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex items-center gap-3">
        <Sparkles className="h-4 w-4 text-ai shrink-0" />
        <input
          type="text"
          placeholder="Search with AI — find lessons, worksheets, videos..."
          className="flex-1 bg-transparent text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none"
        />
        <Button size="sm" className="bg-ai hover:bg-ai/90 text-white shrink-0 gap-1">
          <Sparkles className="h-3 w-3" /> Search
        </Button>
      </div>

      {/* Curriculum Folders */}
      <div className="space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Curriculum Folders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {FOLDERS.map(f => (
            <button key={f.name} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 text-left hover:border-primary/40 transition-colors space-y-2">
              <span className="text-2xl">{f.icon}</span>
              <p className="text-sm font-semibold text-on-surface">{f.name}</p>
              <p className="text-xs text-on-surface-variant">{f.files} files · Updated {f.updated}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Staff Drive */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Staff Drive</h2>
          <button className="text-xs text-primary hover:underline">View All</button>
        </div>
        <div className="space-y-2">
          {STAFF_DRIVE.map(f => (
            <div key={f.name} className="flex items-center gap-3 p-2.5 bg-surface-low rounded-xl">
              <span className="text-lg shrink-0">{f.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-on-surface">{f.name}</p>
                <p className="text-xs text-on-surface-variant">{f.type} · {f.size}</p>
              </div>
              <button className="text-xs text-primary hover:underline shrink-0">Open</button>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Table */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Popular Resources</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left pb-2 text-on-surface-variant font-semibold">Resource</th>
                <th className="text-left pb-2 text-on-surface-variant font-semibold">Type</th>
                <th className="text-left pb-2 text-on-surface-variant font-semibold">Rating</th>
                <th className="text-left pb-2 text-on-surface-variant font-semibold">Uses</th>
                <th className="pb-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {RESOURCES.map(r => (
                <tr key={r.name}>
                  <td className="py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{r.icon}</span>
                      <span className="font-medium text-on-surface">{r.name}</span>
                    </div>
                  </td>
                  <td className="py-2.5 text-on-surface-variant">{r.type}</td>
                  <td className="py-2.5 text-amber-500 font-semibold">★ {r.rating}</td>
                  <td className="py-2.5 text-on-surface-variant">{r.uses}</td>
                  <td className="py-2.5">
                    <Button size="sm" variant="outline" className="h-6 text-xs">Use</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
