'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { GraduationCap, Eye, EyeOff } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { createBrowserClient } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { ROLE_LABELS, ROLE_DESCRIPTIONS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const ROLES = [
  { id: 'explorer', emoji: '🌟', age: 'Ages 6–11' },
  { id: 'achiever', emoji: '🚀', age: 'Ages 12–18' },
  { id: 'scholar', emoji: '🎓', age: 'University' },
  { id: 'teacher', emoji: '📚', age: 'Educators' },
  { id: 'parent', emoji: '👨‍👩‍👧', age: 'Parents' },
  { id: 'admin', emoji: '🏫', age: 'Schools' },
] as const

type RoleId = typeof ROLES[number]['id']

export default function SignupPage() {
  const [step, setStep] = useState<'role' | 'details'>('role')
  const [selectedRole, setSelectedRole] = useState<RoleId | null>(null)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedRole) return
    setLoading(true)

    const supabase = createBrowserClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, role: selectedRole },
      },
    })

    if (error) {
      toast.error(error.message)
      setLoading(false)
    } else {
      toast.success('Account created! Check your email to confirm.')
      router.push('/onboarding')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-surface flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-3">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">
            {step === 'role' ? 'Who are you?' : 'Create your account'}
          </h1>
          <p className="text-sm text-on-surface-variant mt-1 font-body">
            {step === 'role' ? 'Choose the role that describes you best' : `Signing up as ${selectedRole ? ROLE_LABELS[selectedRole] : ''}`}
          </p>
        </div>

        {step === 'role' ? (
          <div className="grid grid-cols-2 gap-3">
            {ROLES.map(role => (
              <button
                key={role.id}
                onClick={() => { setSelectedRole(role.id); setStep('details') }}
                className={cn(
                  'bg-surface-lowest rounded-2xl p-4 border-2 text-left transition-all hover:border-primary hover:shadow-sm',
                  selectedRole === role.id ? 'border-primary bg-primary/5' : 'border-outline-variant'
                )}
              >
                <span className="text-2xl block mb-2">{role.emoji}</span>
                <p className="font-label font-semibold text-sm text-on-surface">{ROLE_LABELS[role.id]}</p>
                <p className="text-xs text-on-surface-variant mt-0.5">{role.age}</p>
              </button>
            ))}
          </div>
        ) : (
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Full name"
                type="text"
                placeholder="Your name"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                required
                autoComplete="name"
              />
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="At least 8 characters"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoComplete="new-password"
                hint="Minimum 8 characters"
                rightIcon={
                  <button type="button" onClick={() => setShowPassword(v => !v)}>
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                }
              />
              <Button type="submit" className="w-full" loading={loading}>
                Create account
              </Button>
              <button
                type="button"
                onClick={() => setStep('role')}
                className="w-full text-sm font-label text-on-surface-variant hover:text-on-surface"
              >
                ← Change role
              </button>
            </form>
          </div>
        )}

        <p className="text-center text-sm text-on-surface-variant mt-6 font-body">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-primary hover:underline">Sign in</Link>
        </p>

        <p className="text-center text-xs text-on-surface-variant mt-4 font-body">
          By signing up, you agree to our{' '}
          <Link href="/terms" className="underline">Terms</Link> and{' '}
          <Link href="/privacy" className="underline">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  )
}
