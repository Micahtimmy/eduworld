import { TutorChat } from '@/components/shared/ai/TutorChat'

export default function AchieverTutorPage() {
  return (
    <div className="h-[100dvh] flex flex-col">
      <TutorChat
        subjectContext="your secondary school subjects"
        className="flex-1 rounded-none border-0"
      />
    </div>
  )
}
