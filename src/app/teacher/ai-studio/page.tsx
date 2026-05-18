'use client'
import { Sparkles, GripVertical, FileImage, FileVideo, FileText, ChevronRight, Save, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ASSETS = [
  { icon: FileImage, name: 'Diagram_01.png', type: 'Image', size: '2.4 MB' },
  { icon: FileVideo, name: 'Cell_Video.mp4', type: 'Video', size: '18.7 MB' },
  { icon: FileText, name: 'Worksheet_A.pdf', type: 'PDF', size: '340 KB' },
]

const GRADE_LEVELS = ['Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']
const VIEWS = ['Explorer', 'Achiever', 'Scholar']

export default function TeacherAiStudioPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">AI Lesson Plan Creator</h1>
        <p className="text-sm text-on-surface-variant mt-1">Generate, refine, and publish AI-assisted lesson content.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Generate + Asset Library */}
        <div className="space-y-4">
          {/* Generate Workspace */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <h2 className="font-display font-semibold text-on-surface">Generate Workspace</h2>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-on-surface-variant">Topic</label>
                <input defaultValue="Photosynthesis" className="w-full mt-1 px-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none focus:border-primary" />
              </div>
              <div>
                <label className="text-xs font-semibold text-on-surface-variant">Grade Level</label>
                <select defaultValue="Grade 10" className="w-full mt-1 px-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none">
                  {GRADE_LEVELS.map(g => <option key={g}>{g}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-on-surface-variant">Curriculum Standard</label>
                <input defaultValue="NGSS HS-LS1-5" className="w-full mt-1 px-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none focus:border-primary" />
              </div>
              <Button className="w-full gap-2 bg-ai hover:bg-ai/90 text-white">
                <Sparkles className="h-4 w-4" /> Refine Prompts with AI
              </Button>
            </div>
          </div>

          {/* Asset Library */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <h2 className="font-display font-semibold text-on-surface">Asset Library</h2>
            <div className="space-y-2">
              {ASSETS.map(a => (
                <div key={a.name} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
                  <GripVertical className="h-4 w-4 text-on-surface-variant cursor-grab" />
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <a.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-on-surface">{a.name}</p>
                    <p className="text-xs text-on-surface-variant">{a.type} · {a.size}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-on-surface-variant" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Lesson Preview */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Lesson Preview</h2>
            <div className="flex gap-1 p-1 bg-surface-low rounded-xl">
              {VIEWS.map((v, i) => (
                <button key={v} className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${i === 1 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-high'}`}>{v}</button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {/* Phase 1 */}
            <div className="bg-surface-low rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Phase 1 · Hook</span>
              </div>
              <p className="text-sm text-on-surface">Imagine you're a plant on a sunny day. What do you need to survive? How do you make your own food?</p>
              <div className="bg-gray-900 rounded-xl p-3 font-mono text-xs text-green-400">
                6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂
              </div>
              {/* Drop zone */}
              <div className="border-2 border-dashed border-outline-variant rounded-xl p-4 text-center">
                <p className="text-xs text-on-surface-variant">Drop asset here or click to add media</p>
              </div>
              {/* AI Suggestion */}
              <div className="bg-ai/5 border border-ai/20 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <Sparkles className="h-3 w-3 text-ai" />
                  <span className="text-xs font-semibold text-ai">AI Suggestion</span>
                </div>
                <p className="text-xs text-on-surface-variant">Apply Scaffolding — break the equation into 3 guided steps for Achiever-level students.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <Button variant="outline" size="sm" className="gap-1.5 flex-1"><Save className="h-3.5 w-3.5" /> Save to Drafts</Button>
            <Button size="sm" className="gap-1.5 flex-1"><Send className="h-3.5 w-3.5" /> Assign to Class</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
