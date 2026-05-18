'use client'
import { Shield, Mail, Smartphone, MessageSquare, Key, Monitor, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SecuritySettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Shield className="h-4 w-4 text-green-600" />
            <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">Verified Identity</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Unified Identity</h1>
          <p className="text-sm text-on-surface-variant mt-1">Manage your cross-experience profile, privacy, and preferences from a single central hub.</p>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">DS</div>
          <div className="flex-1">
            <p className="font-display font-semibold text-lg text-on-surface">Dr. Julian Sterling</p>
            <p className="text-sm text-on-surface-variant">julian.sterling@eduworld.com</p>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">🎓 Educator</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-semibold">👨‍👩‍👧 Parent</span>
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">⚙️ Admin</span>
            </div>
          </div>
          <Button variant="outline" size="sm">Edit Master Profile</Button>
        </div>
        <div className="mt-4 pt-4 border-t border-outline-variant">
          <p className="text-xs text-on-surface-variant mb-2">Active View</p>
          <p className="text-sm font-bold text-on-surface">Enterprise Manager</p>
          <div className="flex gap-4 mt-2">
            <button className="text-xs text-primary hover:underline">Switch to Parent Portal →</button>
            <button className="text-xs text-primary hover:underline">Switch to Faculty Dashboard →</button>
          </div>
        </div>
      </div>

      {/* Data Privacy & AI */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-primary" />
          <h2 className="font-display font-semibold text-on-surface">Data Privacy & AI</h2>
        </div>
        <div className="bg-ai/5 border border-ai/20 rounded-xl p-3">
          <p className="text-xs font-semibold text-ai mb-1">✦ AI Experience Optimization</p>
          <p className="text-xs text-on-surface-variant">Allow AI to synthesize your activity across Educator and Parent roles for personalised recommendations and unified insights.</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-on-surface-variant">Cross-role AI synthesis</span>
            <div className="w-10 h-5 bg-primary rounded-full flex items-center justify-end pr-0.5 cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="text-xs text-primary hover:underline">Data Export & Portability ›</button>
          <button className="text-xs text-primary hover:underline">Manage Third-Party Integrations ›</button>
        </div>
      </div>

      {/* Global Notifications */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <h2 className="font-display font-semibold text-on-surface">Global Notifications</h2>
          </div>
          <Button variant="outline" size="sm" className="h-7 text-xs">Bulk Action</Button>
        </div>
        {[
          { icon: Mail, label: 'Email Digests', desc: 'Weekly summaries of all role activity', selected: 'Weekly' },
          { icon: Smartphone, label: 'Mobile Push', desc: 'Urgent alerts and AI notifications', selected: 'On' },
          { icon: MessageSquare, label: 'SMS Alerts', desc: 'Emergency campus updates only', selected: 'On' },
        ].map(n => (
          <div key={n.label} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
            <n.icon className="h-5 w-5 text-on-surface-variant shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-on-surface">{n.label}</p>
              <p className="text-xs text-on-surface-variant">{n.desc}</p>
            </div>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{n.selected}</span>
          </div>
        ))}
      </div>

      {/* Security Health */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-green-600" />
            <h2 className="font-display font-semibold text-on-surface">Security Health</h2>
          </div>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">✓ 100% Secure</span>
        </div>
        <p className="text-xs text-on-surface-variant">Protected by multi-factor authentication and global encryption standards. <span className="text-on-surface-variant">Last checked: 2h ago</span></p>
        <div className="grid grid-cols-3 gap-2">
          <button className="flex items-center gap-2 p-3 bg-surface-low rounded-xl hover:bg-surface-high text-left">
            <Lock className="h-4 w-4 text-primary shrink-0" />
            <span className="text-xs font-semibold text-on-surface">Change Password</span>
          </button>
          <button className="flex items-center gap-2 p-3 bg-surface-low rounded-xl hover:bg-surface-high text-left">
            <Monitor className="h-4 w-4 text-primary shrink-0" />
            <span className="text-xs font-semibold text-on-surface">Active Sessions (4)</span>
          </button>
          <button className="flex items-center gap-2 p-3 bg-surface-low rounded-xl hover:bg-surface-high text-left">
            <Key className="h-4 w-4 text-primary shrink-0" />
            <span className="text-xs font-semibold text-on-surface">2FA Methods</span>
          </button>
        </div>
      </div>

      {/* Support */}
      <div className="bg-surface-low border border-outline-variant rounded-2xl p-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">🎧</div>
          <div className="flex-1">
            <p className="font-semibold text-sm text-on-surface">Need help with your Global ID?</p>
            <p className="text-xs text-on-surface-variant">Consolidate accounts or resolve permission conflicts across roles.</p>
          </div>
          <Button size="sm">Contact Specialist</Button>
        </div>
      </div>
    </div>
  )
}
