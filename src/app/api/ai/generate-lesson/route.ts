import { anthropic, AI_MODEL } from '@/lib/ai/client'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return new Response('Unauthorised', { status: 401 })

  const { subject, topic, gradeLevel, duration, learningObjectives } = await req.json()

  const message = await anthropic.messages.create({
    model: AI_MODEL,
    max_tokens: 2048,
    messages: [{
      role: 'user',
      content: `Create a detailed lesson plan for:
Subject: ${subject}
Topic: ${topic}
Grade Level: ${gradeLevel}
Duration: ${duration} minutes
Learning Objectives: ${learningObjectives?.join(', ') ?? 'standard curriculum'}

Return a JSON object with: title, objectives (array), introduction (string), mainContent (array of sections with heading and content), activities (array), assessment (string), resources (array).`,
    }],
    system: 'You are an expert curriculum designer. Return only valid JSON with no markdown formatting.',
  })

  const content = message.content[0].type === 'text' ? message.content[0].text : ''

  try {
    const lessonPlan = JSON.parse(content)
    return Response.json({ lessonPlan })
  } catch {
    return Response.json({ error: 'Failed to parse lesson plan', raw: content }, { status: 500 })
  }
}
