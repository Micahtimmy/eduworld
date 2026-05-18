'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Bookmark, BookmarkCheck, Clock, Sparkles, Droplets, Sun, Cloud, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const LESSON = {
  id: 'water-cycle',
  subject: 'Science',
  title: 'The Water Cycle',
  emoji: '💧',
  readTime: '8 min read',
  progress: 40,
  content: [
    {
      type: 'paragraph',
      text: 'The water cycle, also known as the hydrological cycle, is the continuous movement of water through the Earth\'s systems — from the oceans and rivers, up into the atmosphere, and back down again as rain or snow. It is one of the most important natural processes on our planet, making life possible for every living thing.',
    },
    {
      type: 'key-concept',
      icon: '☀️',
      title: 'Evaporation',
      text: 'The sun heats water in oceans, lakes, and rivers, turning liquid water into water vapour that rises into the atmosphere.',
    },
    {
      type: 'paragraph',
      text: 'As water vapour rises into the cooler upper atmosphere, it begins to cool down and change back into tiny water droplets. This process is called condensation, and it is how clouds are formed. Millions of these tiny droplets cluster together to create the clouds we see in the sky every day.',
    },
    {
      type: 'fun-fact',
      text: 'Did you know? The water you drink today could be the same water a dinosaur drank 65 million years ago! Water keeps cycling through the Earth\'s systems forever.',
    },
    {
      type: 'image',
      caption: 'The Water Cycle Diagram',
    },
    {
      type: 'key-concept',
      icon: '🌧️',
      title: 'Precipitation',
      text: 'When clouds become heavy with water droplets, the water falls back to Earth as rain, snow, sleet, or hail — this is called precipitation.',
    },
    {
      type: 'paragraph',
      text: 'When rain hits the ground, some of it soaks into the soil — a process called infiltration — and becomes groundwater. The rest flows across the land as surface runoff, eventually making its way back into rivers and streams, which carry it back to the ocean. Then the whole cycle begins again!',
    },
    {
      type: 'key-concept',
      icon: '🌱',
      title: 'Transpiration',
      text: 'Plants also play a role! They absorb water through their roots and release water vapour through their leaves — a process called transpiration.',
    },
  ],
}

export default function ExplorerLessonPage() {
  const [bookmarked, setBookmarked] = useState(false)
  const [progress] = useState(LESSON.progress)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-outline-variant">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/explorer/subjects" className="flex items-center justify-center w-9 h-9 rounded-full bg-surface-low hover:bg-surface-high transition-colors">
            <ArrowLeft className="h-5 w-5 text-on-surface" />
          </Link>
          <span className="font-label font-semibold text-on-surface text-sm">{LESSON.subject}</span>
          <button
            onClick={() => setBookmarked(!bookmarked)}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-surface-low hover:bg-surface-high transition-colors"
          >
            {bookmarked ? (
              <BookmarkCheck className="h-5 w-5 text-primary" />
            ) : (
              <Bookmark className="h-5 w-5 text-on-surface-variant" />
            )}
          </button>
        </div>
        {/* Progress Bar */}
        <div className="h-1 bg-surface-high">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Lesson Content */}
      <div className="flex-1 px-5 py-6 pb-36 max-w-xl mx-auto w-full space-y-6">
        {/* Lesson Header */}
        <div className="text-center space-y-3 py-2">
          <div className="w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center mx-auto">
            <span className="text-5xl">{LESSON.emoji}</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-3.5 w-3.5 text-on-surface-variant" />
              <span className="text-xs text-on-surface-variant font-medium">{LESSON.readTime}</span>
            </div>
            <h1 className="font-display font-bold text-2xl text-on-surface leading-tight">{LESSON.title}</h1>
          </div>
        </div>

        {/* Content Blocks */}
        {LESSON.content.map((block, i) => {
          if (block.type === 'paragraph') {
            return (
              <p key={i} className="text-base text-on-surface leading-relaxed">
                {block.text}
              </p>
            )
          }

          if (block.type === 'key-concept') {
            return (
              <div key={i} className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <span className="text-xl">{block.icon}</span>
                </div>
                <div className="flex-1 space-y-1">
                  <p className="font-semibold text-amber-900 text-sm">Key Concept: {block.title}</p>
                  <p className="text-sm text-amber-800 leading-relaxed">{block.text}</p>
                </div>
              </div>
            )
          }

          if (block.type === 'fun-fact') {
            return (
              <div key={i} className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-white" />
                  <span className="text-white font-semibold text-sm">Did you know?</span>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">{block.text}</p>
              </div>
            )
          }

          if (block.type === 'image') {
            return (
              <div key={i} className="rounded-2xl bg-blue-50 h-48 flex flex-col items-center justify-center gap-3 border border-blue-100">
                <div className="flex items-center gap-2">
                  <Sun className="h-8 w-8 text-amber-400" />
                  <Cloud className="h-10 w-10 text-blue-300" />
                  <Droplets className="h-7 w-7 text-blue-500" />
                </div>
                <span className="text-4xl">💧</span>
                <p className="text-xs text-blue-400 font-medium">{block.caption}</p>
              </div>
            )
          }

          return null
        })}
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-sm border-t border-outline-variant px-5 py-4 space-y-3">
        <div className="flex items-center justify-between text-xs text-on-surface-variant px-1">
          <span>Lesson progress</span>
          <span className="font-bold text-primary">{progress}%</span>
        </div>
        <div className="flex gap-3">
          <Link href="/explorer/ai-tutor" className="flex-1">
            <Button variant="outline" className="w-full h-12 text-sm gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              Ask AI Tutor
            </Button>
          </Link>
          <Link href="/explorer/lesson-complete" className="flex-[2]">
            <Button className="w-full h-12 text-sm font-semibold">
              I understand this! →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
