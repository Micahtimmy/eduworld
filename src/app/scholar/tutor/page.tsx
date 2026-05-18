'use client'
import { TutorChat } from '@/components/shared/ai/TutorChat'

export default function ScholarTutorPage() {
  return (
    <div className="max-w-3xl mx-auto h-[calc(100vh-4rem)] flex flex-col px-4 py-4">
      <h1 className="font-display font-bold text-xl text-on-surface mb-4">AI Research Assistant</h1>
      <TutorChat
        subjectContext="university-level studies and research"
        className="flex-1"
      />
    </div>
  )
}
