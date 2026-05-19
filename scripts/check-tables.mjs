import { createClient } from '@supabase/supabase-js'

const client = createClient(
  'https://uybyitnxhnmsxnczweqp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5YnlpdG54aG5tc3huY3p3ZXFwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE4MjAwMywiZXhwIjoyMDk0NzU4MDAzfQ.G_aFRb-H7HMA7va-iYAEb2kvXfkd8oZA7hUhCrI01Vc'
)

const TABLES = [
  'profiles', 'organizations', 'students', 'teachers', 'parent_children',
  'classrooms', 'classroom_enrollments', 'subjects', 'lessons', 'assignments',
  'submissions', 'quizzes', 'quiz_attempts', 'attendance', 'tutor_conversations',
  'learning_progress', 'ai_recommendations', 'notifications', 'fee_structures',
  'fee_invoices', 'districts', 'organization_districts',
]

const results = await Promise.all(
  TABLES.map(t =>
    client.from(t).select('count', { count: 'exact', head: true })
      .then(r => ({ t, exists: r.status !== 404, status: r.status }))
  )
)

const present = results.filter(r => r.exists).map(r => r.t)
const missing = results.filter(r => !r.exists).map(r => `${r.t} (${r.status})`)

console.log(`\nPresent (${present.length}/${TABLES.length}):`, present.join(', '))
if (missing.length) console.log(`\nMISSING (${missing.length}):`, missing.join(', '))
else console.log('\n✓ All tables exist')
