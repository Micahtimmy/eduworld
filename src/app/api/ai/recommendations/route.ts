import { anthropic, AI_MODEL } from '@/lib/ai/client'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return new Response('Unauthorised', { status: 401 })

  const { studentProfile, recentActivity, weakAreas, goals } = await req.json()

  const message = await anthropic.messages.create({
    model: AI_MODEL,
    max_tokens: 1024,
    messages: [{
      role: 'user',
      content: `Generate personalised learning recommendations for:
Student: ${JSON.stringify(studentProfile)}
Recent Activity: ${JSON.stringify(recentActivity)}
Weak Areas: ${weakAreas?.join(', ')}
Goals: ${goals?.join(', ')}

Return JSON: { nextLessons (array of {title, subject, reason, priority}), studyPlan (array of {day, tasks}), tips (array of strings) }`,
    }],
    system: 'You are an AI learning advisor. Provide personalised, actionable recommendations. Return only valid JSON.',
  })

  const content = message.content[0].type === 'text' ? message.content[0].text : '{}'

  try {
    const recommendations = JSON.parse(content)
    return Response.json({ recommendations })
  } catch {
    return Response.json({ error: 'Failed to generate recommendations' }, { status: 500 })
  }
}
