'use client'
import { CheckCircle, LayoutDashboard, UserPlus, Printer } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AdminEnrollmentSuccessPage() {
  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant w-full max-w-md p-8 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Student Successfully Enrolled</h1>
          <div className="space-y-1.5">
            <p className="text-sm text-on-surface-variant">
              <strong className="text-on-surface">Jane Doe</strong> has been added to the registry.
            </p>
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full">
              <span className="text-xs font-bold">Student ID:</span>
              <span className="text-xs font-mono font-bold">STU-2024-8992</span>
            </div>
            <p className="text-sm text-on-surface-variant">Class assignment: <strong className="text-on-surface">Grade 5A</strong></p>
            <p className="text-xs text-on-surface-variant">An invitation has been dispatched to <strong className="text-on-surface">John Doe</strong>.</p>
          </div>
        </div>
        <div className="space-y-2">
          <Button className="w-full gap-2"><LayoutDashboard className="h-4 w-4" /> Go to Dashboard</Button>
          <Button variant="outline" className="w-full gap-2"><UserPlus className="h-4 w-4" /> Add Another Student</Button>
          <Button variant="outline" className="w-full gap-2"><Printer className="h-4 w-4" /> Print ID Card</Button>
        </div>
      </div>
    </div>
  )
}
