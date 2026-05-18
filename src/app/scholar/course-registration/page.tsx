'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const COURSES = [
  { code: 'CS301', title: 'Data Structures & Algorithms', instructor: 'Prof. Alan Turing', schedule: 'MWF 10:00 AM', credits: 4.0, seats: '12/40', action: 'Add', actionStyle: 'outline' },
  { code: 'CS350', title: 'Operating Systems Design', instructor: 'Prof. Grace Hopper', schedule: 'TTh 1:00 PM', credits: 4.0, seats: '40/40 (WL: 3)', action: 'Waitlist', actionStyle: 'muted' },
  { code: 'CS420', title: 'Artificial Intelligence Core', instructor: 'Dr. Yann LeCun', schedule: 'MW 2:30 PM', credits: 3.0, seats: '28/35', action: 'Add', actionStyle: 'outline', aiTrack: true },
  { code: 'CS315', title: 'Database Management Systems', instructor: 'Prof. E.F. Codd', schedule: 'TTh 10:00 AM', credits: 3.0, seats: '15/50', action: 'Added', actionStyle: 'success' },
]

export default function ScholarCourseRegistrationPage() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Registration &amp; Planning</h1>
          <p className="text-sm text-on-surface-variant mt-1">Fall Semester 2024 · Computer Science Dept.</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm">Saved Plans</Button>
          <Button size="sm" className="gap-1.5">✓ Finalize Registration</Button>
        </div>
      </div>

      {/* Departmental Catalog */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-outline-variant">
          <h2 className="font-display font-semibold text-on-surface">Departmental Catalog</h2>
          <div className="flex gap-2">
            <button className="text-xs text-on-surface-variant">Filter</button>
            <button className="text-xs text-on-surface-variant">Sort</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-low">
                <th className="text-left p-3 text-on-surface-variant font-semibold">Code</th>
                <th className="text-left p-3 text-on-surface-variant font-semibold">Course Title</th>
                <th className="text-left p-3 text-on-surface-variant font-semibold">Credits</th>
                <th className="text-left p-3 text-on-surface-variant font-semibold">Seats</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {COURSES.map(c => (
                <tr key={c.code}>
                  <td className="p-3 font-bold text-on-surface">{c.code}</td>
                  <td className="p-3">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-on-surface">{c.title}</span>
                        {c.aiTrack && (
                          <span className="inline-flex items-center gap-0.5 text-[10px] bg-ai/10 text-ai px-1.5 py-0.5 rounded font-bold">
                            <Sparkles className="h-2 w-2" /> AI Track
                          </span>
                        )}
                      </div>
                      <p className="text-on-surface-variant">{c.instructor} · {c.schedule}</p>
                    </div>
                  </td>
                  <td className="p-3 text-on-surface">{c.credits}</td>
                  <td className="p-3 text-on-surface-variant">{c.seats}</td>
                  <td className="p-3">
                    <button className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                      c.actionStyle === 'success' ? 'bg-green-100 text-green-700' :
                      c.actionStyle === 'muted' ? 'bg-surface-high text-on-surface-variant' :
                      'border border-outline-variant text-on-surface hover:bg-surface-low'
                    }`}>{c.action === 'Added' ? '✓ Added' : c.action}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Credit Load */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Credit Load</h2>
          <span className="text-xs text-on-surface-variant">Max: 18.0</span>
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-surface-high rounded-full overflow-hidden relative">
            <div className="h-full bg-primary rounded-full" style={{ width: `${(14 / 18) * 100}%` }} />
          </div>
          <p className="text-lg font-bold text-on-surface text-center">14.0 Credits Selected</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex items-start gap-2">
          <span className="text-blue-500 shrink-0">ℹ</span>
          <p className="text-xs text-blue-700">You&apos;re at full-time status. Adding one more 3-credit course would be optimal for your degree plan.</p>
        </div>
      </div>

      {/* Conflict Checker */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Conflict Checker</h2>
          <button className="text-xs text-primary hover:underline">↻ Refresh</button>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
          <span className="text-amber-500 shrink-0 text-lg">⚠</span>
          <div>
            <p className="text-sm font-semibold text-on-surface">1 Time Conflict Detected</p>
            <p className="text-xs text-on-surface-variant">CS315 and MAT202 overlap on Tuesdays at 10:00 AM</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr>
                <th className="text-left pb-1 text-on-surface-variant font-semibold">Time</th>
                {['M', 'T', 'W', 'Th', 'F'].map(d => (
                  <th key={d} className="text-center pb-1 text-on-surface-variant font-semibold px-1">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {['10:00 AM', '1:00 PM', '2:30 PM'].map(t => (
                <tr key={t} className="border-t border-outline-variant">
                  <td className="py-1.5 text-on-surface-variant pr-2 whitespace-nowrap">{t}</td>
                  {['M', 'T', 'W', 'Th', 'F'].map(d => (
                    <td key={d} className="text-center px-1 py-1.5">
                      {t === '10:00 AM' && (d === 'M' || d === 'W' || d === 'F') && <div className="bg-primary/20 rounded text-primary px-1">CS301</div>}
                      {t === '10:00 AM' && (d === 'T' || d === 'Th') && <div className="bg-red-200 rounded text-red-700 px-1">Conflict</div>}
                      {t === '1:00 PM' && (d === 'T' || d === 'Th') && <div className="bg-surface-high rounded text-on-surface-variant px-1">CS350</div>}
                      {t === '2:30 PM' && (d === 'M' || d === 'W') && <div className="bg-ai/20 rounded text-ai px-1">CS420</div>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
