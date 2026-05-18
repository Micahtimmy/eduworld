import { anthropic, AI_MODEL } from '@/lib/ai/client'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return new Response('Unauthorised', { status: 401 })

  const { submission, rubric, maxScore, subject } = await req.json()

  const message = await anthropic.messages.create({
    model: AI_MODEL,
    max_tokens: 1024,
    messages: [{
      role: 'user',
      content: `Grade this student submission:

Subject: ${subject}
Rubric: ${JSON.stringify(rubric)}
Max Score: ${maxScore}
Submission: ${submission}

Return JSON: { score, percentage, grade, strengths (array), improvements (array), feedback (string) }`,
    }],
    system: 'You are an expert educator providing constructive, encouraging feedback. Be specific and actionable. Return only valid JSON.',
  })

  const content = message.content[0].type === 'text' ? message.content[0].text : '{}'

  try {
    const result = JSON.parse(content)
    return Response.json({ result })
  } catch {
    return Response.json({ error: 'Failed to grade submission' }, { status: 500 })
  }
}
