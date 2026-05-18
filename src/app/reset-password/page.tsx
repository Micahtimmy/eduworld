'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { GraduationCap, Eye, EyeOff, ArrowLeft, Check } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type StrengthLevel = 'weak' | 'fair' | 'good' | 'strong'

interface PasswordStrength {
  level: StrengthLevel
  score: number // 0–4
  label: string
  color: string
  barColor: string
}

interface Requirement {
  label: string
  met: boolean
}

function getStrength(password: string): PasswordStrength {
  const hasMinLength = password.length >= 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSymbol = /[^A-Za-z0-9]/.test(password)

  const score = [hasMinLength, hasUppercase, hasNumber, hasSymbol].filter(Boolean).length

  if (score <= 1) return { level: 'weak', score, label: 'Weak', color: 'text-red-500', barColor: 'bg-red-500' }
  if (score === 2) return { level: 'fair', score, label: 'Fair', color: 'text-amber-500', barColor: 'bg-amber-500' }
  if (score === 3) return { level: 'good', score, label: 'Good', color: 'text-blue-500', barColor: 'bg-blue-500' }
  return { level: 'strong', score, label: 'Strong', color: 'text-green-600', barColor: 'bg-green-500' }
}

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)

  const strength = useMemo(() => getStrength(password), [password])

  const requirements: Requirement[] = useMemo(() => [
    { label: 'At least 8 characters', met: password.length >= 8 },
    { label: 'One uppercase letter', met: /[A-Z]/.test(password) },
    { label: 'One number', met: /[0-9]/.test(password) },
    { label: 'One symbol (!@#$…)', met: /[^A-Za-z0-9]/.test(password) },
  ], [password])

  const isMatching = password.length > 0 && confirmPassword.length > 0 && password === confirmPassword
  const canSubmit = strength.level === 'strong' && isMatching

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    setLoading(true)
    // Simulate API call — real logic would call Supabase updateUser
    await new Promise(resolve => setTimeout(resolve, 1200))
    setLoading(false)
    // On success, redirect to /password-reset-success
    window.location.href = '/password-reset-success'
  }

  const strengthSegments = [1, 2, 3, 4]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-surface flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-3">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Choose a new password</h1>
          <p className="text-sm text-on-surface-variant mt-1 font-body text-center">
            Make it strong — you won&apos;t need to change it often.
          </p>
        </div>

        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="New password"
              type={showPassword ? 'text' : 'password'}
              placeholder="New password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              rightIcon={
                <button type="button" onClick={() => setShowPassword(v => !v)}>
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              }
            />

            {/* Strength bar */}
            {password.length > 0 && (
              <div className="space-y-1.5">
                <div className="flex gap-1.5">
                  {strengthSegments.map(seg => (
                    <div
                      key={seg}
                      className={cn(
                        'h-1.5 flex-1 rounded-full transition-all duration-300',
                        seg <= strength.score ? strength.barColor : 'bg-outline-variant'
                      )}
                    />
                  ))}
                </div>
                <p className={cn('text-xs font-label font-semibold', strength.color)}>
                  {strength.label}
                </p>
              </div>
            )}

            {/* Requirements checklist */}
            {password.length > 0 && (
              <ul className="space-y-1.5">
                {requirements.map(req => (
                  <li key={req.label} className="flex items-center gap-2">
                    <span
                      className={cn(
                        'flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-200',
                        req.met ? 'bg-green-500' : 'bg-outline-variant'
                      )}
                    >
                      {req.met && <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />}
                    </span>
                    <span className={cn(
                      'text-xs font-body transition-colors duration-200',
                      req.met ? 'text-green-600' : 'text-on-surface-variant'
                    )}>
                      {req.label}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <Input
              label="Confirm new password"
              type={showConfirm ? 'text' : 'password'}
              placeholder="Repeat your password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
              hint={
                confirmPassword.length > 0
                  ? isMatching
                    ? 'Passwords match ✓'
                    : 'Passwords do not match'
                  : undefined
              }
              rightIcon={
                <button type="button" onClick={() => setShowConfirm(v => !v)}>
                  {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              }
            />

            <Button
              type="submit"
              className="w-full"
              disabled={!canSubmit}
              loading={loading}
            >
              Set new password
            </Button>
          </form>
        </div>

        <Link
          href="/login"
          className="flex items-center justify-center gap-1.5 mt-6 text-sm font-label font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to sign in
        </Link>
      </div>
    </div>
  )
}
