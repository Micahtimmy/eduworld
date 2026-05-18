import { anthropic, AI_MODEL } from '@/lib/ai/client'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return new Response('Unauthorised', { status: 401 })

  const { subject, topic, difficulty, questionCount = 10, type = 'multiple-choice' } = await req.json()

  const message = await anthropic.messages.create({
    model: AI_MODEL,
    max_tokens: 2048,
    messages: [{
      role: 'user',
      content: `Generate ${questionCount} ${type} quiz questions for:
Subject: ${subject}
Topic: ${topic}
Difficulty: ${difficulty}

Return a JSON array of questions. Each question: { id, question, options (array of 4), correct (index 0-3), explanation }.`,
    }],
    system: 'You are an expert educator creating assessment questions. Return only valid JSON array.',
  })

  const content = message.content[0].type === 'text' ? message.content[0].text : '[]'

  try {
    const questions = JSON.parse(content)
    return Response.json({ questions })
  } catch {
    return Response.json({ error: 'Failed to generate quiz' }, { status: 500 })
  }
}
