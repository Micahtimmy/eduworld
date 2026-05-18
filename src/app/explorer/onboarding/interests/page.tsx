'use client'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CAREERS = [
  { icon: '🚀', title: 'Astronaut', desc: 'Explore the stars, understand gravity and the cosmos!' },
  { icon: '👨‍⚕️', title: 'Doctor', desc: 'Learn about the human body, medicine and helping people.' },
  { icon: '🎨', title: 'Artist', desc: 'Express yourself through colors, shapes and creativity.' },
  { icon: '⚙️', title: 'Engineer', desc: 'Design bridges, program robots and build the future.' },
  { icon: '👨‍🍳', title: 'Chef', desc: 'Master the science of cooking, flavors and nutrition.' },
]

export default function ExplorerInterestsPage() {
  return (
    <div className="min-h-screen bg-surface-low flex flex-col">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-4 w-4 text-ai" />
          <span className="font-bold text-on-surface">EduWorld</span>
        </div>
        <button className="text-sm text-on-surface-variant hover:text-on-surface">Skip</button>
      </div>

      <div className="flex-1 p-6 space-y-6">
        <div>
          <p className="text-xs text-on-surface-variant font-semibold">Step 3 of 5</p>
          <div className="flex gap-1 mt-1.5 mb-4">
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} className={`flex-1 h-1 rounded-full ${i <= 2 ? 'bg-primary' : 'bg-surface-high'}`} />
            ))}
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">What do you want to be when you grow up?</h1>
          <p className="text-sm text-on-surface-variant mt-2">Pick a few paths that spark your curiosity...</p>
        </div>

        {/* AI Insight */}
        <div className="bg-ai/5 border border-ai/20 rounded-xl p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <Sparkles className="h-3.5 w-3.5 text-ai" />
            <span className="text-xs font-semibold text-ai">Spark AI Insight</span>
          </div>
          <p className="text-xs text-on-surface-variant">Based on your love of Science and Building things, you might enjoy Engineering or Astronaut paths!</p>
        </div>

        {/* Career Cards */}
        <div className="grid grid-cols-1 gap-3">
          {CAREERS.map((c, i) => (
            <div key={c.title} className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-colors ${i === 0 || i === 3 ? 'border-primary bg-primary/5' : 'border-outline-variant bg-surface-lowest hover:border-primary/50'}`}>
              <span className="text-3xl shrink-0">{c.icon}</span>
              <div className="flex-1">
                <p className="font-semibold text-on-surface">{c.title}</p>
                <p className="text-xs text-on-surface-variant">{c.desc}</p>
              </div>
              {(i === 0 || i === 3) && <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs shrink-0">✓</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-2">
        <p className="text-xs text-center text-on-surface-variant">Select at least one path to continue</p>
        <Button className="w-full gap-2">Explore My Path <ArrowRight className="h-4 w-4" /></Button>
      </div>
    </div>
  )
}
