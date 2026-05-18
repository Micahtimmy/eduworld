'use client'
import { Brain, Users, TrendingUp, Sparkles, Plus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { TutorChat } from '@/components/shared/ai/TutorChat'
import { useState } from 'react'

const AI_PROGRAMS = [
  { id: 'p1', name: 'Leadership Excellence', enrolled: 145, completion: 74, ai: true },
  { id: 'p2', name: 'Technical Skills 2025', enrolled: 280, completion: 61, ai: true },
  { id: 'p3', name: 'Compliance Training', enrolled: 412, completion: 88, ai: false },
]

export default function EnterpriseAITrainingPage() {
  const [showChat, setShowChat] = useState(false)

  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-6 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">AI Training Programs</h1>
          <p className="text-sm text-on-surface-variant">Personalised learning powered by Claude AI</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="secondary" onClick={() => setShowChat(v => !v)} className="gap-2">
            <Brain className="h-4 w-4" /> {showChat ? 'Close' : 'AI Assistant'}
          </Button>
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" /> New Program
          </Button>
        </div>
      </div>

      {showChat && (
        <TutorChat
          subjectContext="enterprise learning and development"
          onClose={() => setShowChat(false)}
          className="h-80"
        />
      )}

      {/* AI impact banner */}
      <div className="rounded-2xl bg-gradient-to-r from-ai/20 to-ai/5 border border-ai/20 p-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-ai/20 flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-ai" />
          </div>
          <div>
            <p className="font-label font-semibold text-on-surface">AI-Powered Personalisation</p>
            <p className="text-sm text-on-surface-variant">Claude adapts each program to the individual employee&apos;s role, skill level, and learning pace.</p>
          </div>
          <div className="ml-auto text-right">
            <p className="font-display font-bold text-2xl text-ai">+23%</p>
            <p className="text-xs font-label text-on-surface-variant">completion vs standard</p>
          </div>
        </div>
      </div>

      {/* Programs list */}
      <div className="space-y-3">
        {AI_PROGRAMS.map(program => (
          <Card key={program.id} interactive>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-ai/10 flex items-center justify-center shrink-0">
                  <Brain className="h-5 w-5 text-ai" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-label font-semibold text-on-surface">{program.name}</p>
                    {program.ai && <Badge variant="ai" size="sm">AI-Powered</Badge>}
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-3.5 w-3.5 text-on-surface-variant" />
                    <span className="text-xs text-on-surface-variant">{program.enrolled} enrolled</span>
                    <Progress value={program.completion} size="sm" className="w-24" />
                    <span className="text-xs font-label font-semibold text-on-surface">{program.completion}%</span>
                  </div>
                </div>
                <Button variant="secondary" size="sm">Manage</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
