'use client'
import { Button } from '@/components/ui/button'

const CATEGORIES = [
  { icon: '📚', title: 'Syllabus & Curriculum', meta: '12 Files · Updated 2 days ago', alert: false },
  { icon: '🏥', title: 'Medical Records & Allergies', meta: '4 Files · Last accessed today', alert: false },
  { icon: '✅', title: 'Permission Slips', meta: '8 Files · 2 Actions Pending', alert: true },
  { icon: '📊', title: 'Termly Report Cards', meta: '6 Files · Year 8 Autumn Added', alert: false },
]

const DOCS = [
  { icon: '📄', title: 'Q3 Academic Progress Report — Alex Johnson', meta: 'PDF · 2.4 MB · Oct 12, 2023', action: null, alert: false },
  { icon: '📝', title: 'Science Fair Off-Campus Permission Slip', meta: null, action: 'Sign Now', alert: true },
  { icon: '📋', title: 'Updated Allergy & Diet Protocol 2023/24', meta: 'DOCX · 1.1 MB · Sep 28, 2023', action: null, alert: false },
]

export default function ParentDocumentsPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-start gap-3">
        <span className="text-xl shrink-0">🔒</span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-on-surface">Vault Security Active</p>
          <p className="text-xs text-on-surface-variant mt-0.5">All documents are end-to-end encrypted. Use digital signature tools for consent forms.</p>
        </div>
        <Button size="sm" variant="outline" className="shrink-0 gap-1">⬆ Upload</Button>
      </div>

      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex items-start gap-3">
        <span className="text-ai text-lg shrink-0">✦</span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-on-surface">EduWorld AI Action Needed</p>
          <p className="text-xs text-on-surface-variant mt-0.5">You have 2 pending permission slips for the upcoming St. Mary&apos;s Science Fair.</p>
        </div>
        <Button size="sm" className="bg-ai hover:bg-ai/90 text-white shrink-0 gap-1">✦ Sign Now</Button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {CATEGORIES.map(c => (
          <button key={c.title} className={`bg-surface-lowest rounded-2xl border p-4 text-left space-y-2 hover:border-primary/40 transition-colors ${c.alert ? 'border-amber-300' : 'border-outline-variant'}`}>
            <span className="text-2xl">{c.icon}</span>
            <p className="text-xs font-semibold text-on-surface leading-snug">{c.title}</p>
            <p className="text-[10px] text-on-surface-variant">{c.meta}</p>
            {c.alert && <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-semibold">Action Needed</span>}
          </button>
        ))}
      </div>

      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Recent Documents</h2>
          <button className="text-xs text-primary hover:underline">View All</button>
        </div>
        <div className="space-y-2">
          {DOCS.map(d => (
            <div key={d.title} className={`flex items-start gap-3 p-3 rounded-xl ${d.alert ? 'bg-amber-50 border border-amber-200' : 'bg-surface-low'}`}>
              <span className="text-xl shrink-0">{d.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-on-surface leading-snug">{d.title}</p>
                {d.meta && <p className="text-[10px] text-on-surface-variant mt-0.5">{d.meta}</p>}
                {d.alert && <p className="text-[10px] text-amber-700 font-semibold mt-0.5">Action Required: Digital Signature</p>}
              </div>
              {d.action ? (
                <Button size="sm" className="shrink-0 text-xs h-7">{d.action}</Button>
              ) : (
                <div className="flex gap-1.5 shrink-0 text-primary text-sm">
                  <button>⬇</button>
                  <button>👁</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Storage Overview</h2>
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="text-on-surface-variant">64% Used</span>
          <span className="text-on-surface-variant">1.2GB / 2GB</span>
        </div>
        <div className="h-2 bg-surface-high rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: '64%' }} />
        </div>
      </div>

      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 flex items-center gap-3">
        <span className="text-xl shrink-0">🔐</span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-on-surface">Secure Sharing</p>
          <p className="text-xs text-on-surface-variant">Share medical records with family or clinics securely.</p>
        </div>
        <Button size="sm" variant="outline" className="shrink-0">Manage</Button>
      </div>
    </div>
  )
}
