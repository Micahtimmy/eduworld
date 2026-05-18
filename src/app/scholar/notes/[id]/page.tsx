'use client'
import Link from 'next/link'
import { ArrowLeft, Edit, BookOpen, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NOTE = {
  id: '1',
  title: 'Neural Network Backpropagation — Deep Dive',
  course: 'CS-701',
  courseName: 'Machine Learning',
  lastEdited: 'Oct 22, 2024',
  linkedLesson: {
    title: 'Week 8 — Backpropagation Algorithms',
    href: '/scholar/courses/cs701/lessons/week8',
  },
  content: [
    {
      type: 'paragraph',
      text: 'Backpropagation is the cornerstone algorithm for training deep neural networks. It works by computing the gradient of the loss function with respect to each weight using the chain rule of calculus, then using these gradients to update the weights via gradient descent.',
    },
    {
      type: 'heading',
      text: 'The Chain Rule in Action',
    },
    {
      type: 'paragraph',
      text: 'For a network with layers L, the gradient at layer l depends on the gradient at layer l+1. This creates a chain of multiplications moving backwards through the network — hence the name "backpropagation".',
    },
    {
      type: 'code',
      text: 'dL/dW[l] = dL/dA[l] * dA[l]/dZ[l] * dZ[l]/dW[l]',
    },
    {
      type: 'paragraph',
      text: 'Here, A represents the activation output and Z represents the pre-activation (weighted sum). The critical insight is that we only need to compute each partial derivative once and can reuse it at multiple layers.',
    },
    {
      type: 'quote',
      text: 'Vanishing gradient problem: When activation functions like sigmoid or tanh are used, gradients can become exponentially small as they propagate through many layers, making early layers very slow to learn.',
    },
    {
      type: 'heading',
      text: 'Common Optimisers',
    },
    {
      type: 'paragraph',
      text: 'Standard SGD applies the update rule: W = W - α * dL/dW where α is the learning rate. Adam (Adaptive Moment Estimation) improves on this by maintaining per-parameter learning rates and momentum estimates. RMSprop adapts the learning rate by dividing by an exponentially decaying average of squared gradients.',
    },
    {
      type: 'code',
      text: '# Adam update rule (simplified)\nm = β1 * m + (1 - β1) * grad\nv = β2 * v + (1 - β2) * grad**2\nW = W - α * m / (sqrt(v) + ε)',
    },
    {
      type: 'paragraph',
      text: 'Key hyperparameters to tune: learning rate α (most sensitive), batch size, β1 (momentum decay, default 0.9), β2 (RMS decay, default 0.999), and epsilon for numerical stability.',
    },
  ],
  relatedNotes: [
    { id: '5', title: 'Convolutional Neural Networks — Architecture Notes', course: 'CS-701' },
    { id: '2', title: 'Fourier Transform Applications', course: 'MATH-620' },
  ],
}

export default function NoteDetailPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {/* Top Bar */}
      <div className="flex items-center gap-3">
        <Link href="/scholar/notes">
          <button className="flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-on-surface transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to notes
          </button>
        </Link>
        <div className="ml-auto">
          <Button size="sm" variant="outline" className="gap-2">
            <Edit className="h-3.5 w-3.5" /> Edit
          </Button>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-blue-100 text-blue-700">{NOTE.course} · {NOTE.courseName}</span>
        <span className="text-xs text-on-surface-variant">Last edited {NOTE.lastEdited}</span>
      </div>

      {/* Title */}
      <h1 className="font-display font-bold text-2xl text-on-surface">{NOTE.title}</h1>

      {/* Linked Lesson Card */}
      {NOTE.linkedLesson && (
        <div className="flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-xl p-3">
          <BookOpen className="h-4 w-4 text-primary shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-xs text-on-surface-variant">Linked lesson</p>
            <p className="text-sm font-medium text-on-surface truncate">{NOTE.linkedLesson.title}</p>
          </div>
          <Link href={NOTE.linkedLesson.href}>
            <ExternalLink className="h-4 w-4 text-primary" />
          </Link>
        </div>
      )}

      {/* Content */}
      <div className="space-y-4">
        {NOTE.content.map((block, i) => {
          if (block.type === 'heading') {
            return (
              <h2 key={i} className="font-display font-semibold text-lg text-on-surface mt-6 first:mt-0">{block.text}</h2>
            )
          }
          if (block.type === 'code') {
            return (
              <pre key={i} className="bg-surface-low rounded-xl p-4 text-sm font-mono text-on-surface overflow-x-auto border border-outline-variant">
                {block.text}
              </pre>
            )
          }
          if (block.type === 'quote') {
            return (
              <blockquote key={i} className="border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-950/20 rounded-r-xl pl-4 pr-3 py-3">
                <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">{block.text}</p>
              </blockquote>
            )
          }
          return (
            <p key={i} className="text-sm text-on-surface leading-relaxed">{block.text}</p>
          )
        })}
      </div>

      {/* Related Notes */}
      <div className="border-t border-outline-variant pt-6 space-y-3">
        <h3 className="font-semibold text-sm text-on-surface">Related Notes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {NOTE.relatedNotes.map(n => (
            <Link key={n.id} href={`/scholar/notes/${n.id}`}>
              <div className="bg-surface-lowest border border-outline-variant rounded-xl p-3 hover:border-primary/40 transition-all cursor-pointer">
                <p className="text-sm font-medium text-on-surface line-clamp-2">{n.title}</p>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-blue-100 text-blue-700 mt-1.5 inline-block">{n.course}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
