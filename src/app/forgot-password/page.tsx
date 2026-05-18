'use client'
import { useState } from 'react'
import Link from 'next/link'
import { GraduationCap, ArrowLeft } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { createBrowserClient } from '@/lib/supabase/client'
import { toast } from 'sonner'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const supabase = createBrowserClient()
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    if (error) {
      toast.error(error.message)
    } else {
      setSent(true)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-surface flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-3">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Reset password</h1>
          <p className="text-sm text-on-surface-variant mt-1 font-body text-center">
            {sent ? 'Check your inbox for a reset link.' : "We'll send a reset link to your email."}
          </p>
        </div>

        {!sent ? (
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full" loading={loading}>
                Send reset link
              </Button>
            </form>
          </div>
        ) : (
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-6 text-center">
            <div className="text-4xl mb-3">📧</div>
            <p className="font-label font-semibold text-on-surface">Email sent!</p>
            <p className="text-sm text-on-surface-variant mt-1 font-body">
              A password reset link has been sent to <strong>{email}</strong>.
            </p>
          </div>
        )}

        <Link href="/login" className="flex items-center justify-center gap-1.5 mt-6 text-sm font-label font-semibold text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Back to sign in
        </Link>
      </div>
    </div>
  )
}
