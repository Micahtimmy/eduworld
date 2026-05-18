'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { GraduationCap, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SignOutPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSignOut() {
    setLoading(true)
    // In a real implementation: call supabase.auth.signOut() here
    await new Promise(resolve => setTimeout(resolve, 800))
    router.push('/login')
  }

  function handleCancel() {
    router.back()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-surface flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-3">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Sign out of EduWorld?</h1>
          <p className="text-sm text-on-surface-variant mt-1 font-body text-center">
            Your progress is saved. You can always sign back in.
          </p>
        </div>

        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-6 shadow-sm text-center">
          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-surface-low mx-auto mb-5">
            <LogOut className="h-8 w-8 text-on-surface-variant" />
          </div>

          <p className="text-sm text-on-surface-variant font-body leading-relaxed">
            You&apos;ll be returned to the sign-in screen. Any unsaved changes may be lost.
          </p>

          <div className="mt-6 space-y-3">
            <Button
              className="w-full"
              onClick={handleSignOut}
              loading={loading}
            >
              Yes, sign out
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={handleCancel}
              disabled={loading}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
