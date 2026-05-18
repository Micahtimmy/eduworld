import { anthropic, AI_MODEL } from '@/lib/ai/client'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return new Response('Unauthorised', { status: 401 })

  const { messages, studentContext, subjectContext } = await req.json()

  const stream = await anthropic.messages.stream({
    model: AI_MODEL,
    max_tokens: 1024,
    system: buildTutorPrompt(studentContext, subjectContext),
    messages,
  })

  return new Response(stream.toReadableStream(), {
    headers: { 'Content-Type': 'text/event-stream' },
  })
}

function buildTutorPrompt(student: Record<string, unknown>, subject: Record<string, unknown>) {
  return `You are EduWorld AI — an intelligent, encouraging, and deeply knowledgeable learning companion.

Student: ${student?.name ?? 'Student'}, ${student?.gradeLevel ?? 'K-12'}
Subject: ${subject?.name ?? 'General'}
Weak areas: ${(subject?.weakTopics as string[])?.join(', ') ?? 'none identified yet'}

Be warm, clear, and age-appropriate. Break down complex ideas. Ask follow-up questions to check understanding. Be encouraging without being patronising. Keep responses concise for mobile reading — 100 to 200 words unless depth is genuinely needed.`
}
