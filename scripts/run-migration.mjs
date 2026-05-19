/**
 * Runs the SQL migration via Supabase Management API.
 * Requires SUPABASE_ACCESS_TOKEN env var.
 */
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const REF = 'uybyitnxhnmsxnczweqp'
const PAT = process.env.SUPABASE_ACCESS_TOKEN

if (!PAT) {
  console.error('Missing SUPABASE_ACCESS_TOKEN — get one at https://supabase.com/dashboard/account/tokens')
  process.exit(1)
}

const __dir = dirname(fileURLToPath(import.meta.url))
const sql = readFileSync(join(__dir, '../supabase/migrations/001_initial_schema.sql'), 'utf8')

console.log(`Running migration (${sql.length} chars)...`)

const res = await fetch(`https://api.supabase.com/v1/projects/${REF}/database/query`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${PAT}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query: sql }),
})

const text = await res.text()
if (!res.ok) {
  console.error('Migration failed:', text)
  process.exit(1)
}
console.log('✓ Migration complete')
console.log(text)
