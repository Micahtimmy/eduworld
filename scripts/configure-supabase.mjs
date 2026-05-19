/**
 * Configures Supabase auth settings via Management API.
 * Requires SUPABASE_ACCESS_TOKEN env var (personal access token).
 * Get one at: https://supabase.com/dashboard/account/tokens
 */

const REF = 'uybyitnxhnmsxnczweqp'
const PAT = process.env.SUPABASE_ACCESS_TOKEN

if (!PAT) {
  console.error('Missing SUPABASE_ACCESS_TOKEN env var')
  console.error('Get one at: https://supabase.com/dashboard/account/tokens')
  process.exit(1)
}

const base = `https://api.supabase.com/v1/projects/${REF}`
const headers = {
  Authorization: `Bearer ${PAT}`,
  'Content-Type': 'application/json',
}

async function api(method, path, body) {
  const res = await fetch(`${base}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })
  const text = await res.text()
  if (!res.ok) throw new Error(`${res.status} ${path}: ${text}`)
  return text ? JSON.parse(text) : null
}

// 1. Update auth config: site URL + redirect URLs + enable Google
console.log('Configuring auth settings...')
await api('PATCH', '/config/auth', {
  site_url: 'https://eduworld-seven.vercel.app',
  additional_redirect_urls: [
    'https://eduworld-seven.vercel.app/auth/callback',
    'http://localhost:3000/auth/callback',
    'http://localhost:3002/auth/callback',
  ],
  external_google_enabled: true,
  external_google_client_id: process.env.GOOGLE_CLIENT_ID,
  external_google_secret: process.env.GOOGLE_CLIENT_SECRET,
  mailer_autoconfirm: false,         // require email confirmation
  enable_signup: true,
})
console.log('✓ Auth config updated')

// 2. Verify
const config = await api('GET', '/config/auth')
console.log('\nVerified config:')
console.log('  site_url:', config.site_url)
console.log('  redirect_urls:', config.additional_redirect_urls)
console.log('  google_enabled:', config.external_google_enabled)
console.log('  signup_enabled:', config.enable_signup)
