'use client'
import { Sparkles, Bell, Shield, Users, Heart, Car, Save, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NOTIFICATIONS = [
  { label: 'Emergency & Safety Alerts', desc: 'Real-time alerts', channels: ['SMS', 'Push'] },
  { label: 'Academic Milestone Updates', desc: 'Weekly summaries', channels: ['SMS', 'Email', 'Push'] },
  { label: 'Payment & Fee Reminders', desc: 'Due dates/receipts', channels: ['Email', 'Push'] },
]

const MEMBERS = [
  { name: 'David Johnson', role: 'Primary Parent', isYou: true },
  { name: 'Sarah Johnson', role: 'Secondary Guardian', isYou: false },
]

const EMERGENCY = [
  { name: 'Dr. Robert Miller', role: 'Family Pediatrician', phone: '+1 (555) 123-4567' },
  { name: 'Grandma Evelyn', role: 'Grandparent', phone: '+1 (555) 987-6543' },
]

const PICKUPS = [
  { name: 'David Johnson', access: 'Full Access' },
  { name: 'Sarah Johnson', access: 'Full Access' },
  { name: 'Yellow Cab Service #442', access: 'Scheduled Only' },
]

export default function ParentSettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Settings & Profile</h1>
        <p className="text-sm text-on-surface-variant mt-1">Manage parental controls, household security, and child authorizations.</p>
      </div>

      {/* Notification Preferences */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          <h2 className="font-display font-semibold text-on-surface">Notification Preferences</h2>
          <span className="ml-auto text-xs bg-ai/10 text-ai px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
            <Sparkles className="h-3 w-3" /> AI Smart Filtering On
          </span>
        </div>
        <div className="space-y-3">
          {NOTIFICATIONS.map(n => (
            <div key={n.label} className="flex items-center justify-between p-3 bg-surface-low rounded-xl">
              <div>
                <p className="text-sm font-semibold text-on-surface">{n.label}</p>
                <p className="text-xs text-on-surface-variant">{n.desc}</p>
              </div>
              <div className="flex gap-1">
                {n.channels.map(c => (
                  <span key={c} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <h2 className="font-display font-semibold text-on-surface">Security</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-surface-low rounded-xl">
            <div>
              <p className="text-sm font-semibold text-on-surface">Biometric Login</p>
              <p className="text-xs text-on-surface-variant">Use FaceID or Fingerprint for quick access</p>
            </div>
            <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-surface-low rounded-xl">
            <div>
              <p className="text-sm font-semibold text-on-surface">Two-Factor Authentication</p>
              <p className="text-xs text-green-600 font-semibold">✓ Verified: +1 (555) ••• 90</p>
            </div>
            <button className="text-xs text-primary hover:underline">Edit Phone</button>
          </div>
          <Button variant="outline" size="sm">Update Password</Button>
        </div>
      </div>

      {/* Household Members */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="font-display font-semibold text-on-surface">Household Members</h2>
          </div>
          <Button size="sm" variant="outline" className="gap-1 text-xs h-8">+ Link Guardian</Button>
        </div>
        <div className="space-y-2">
          {MEMBERS.map(m => (
            <div key={m.name} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                {m.name.split(' ').map((n: string) => n[0]).join('')}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{m.name}</p>
                <p className="text-xs text-on-surface-variant">{m.role}</p>
              </div>
              {m.isYou && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">YOU</span>}
            </div>
          ))}
          <button className="w-full text-sm text-primary hover:underline text-left px-3 py-2">+ Add Childcare Provider</button>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-red-500" />
          <h2 className="font-display font-semibold text-on-surface">Emergency Contacts</h2>
        </div>
        <div className="space-y-2">
          {EMERGENCY.map((e, i) => (
            <div key={e.name} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
              <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">{i + 1}</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{e.name}</p>
                <p className="text-xs text-on-surface-variant">{e.role} · {e.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pickup Authorizations */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Car className="h-5 w-5 text-primary" />
          <h2 className="font-display font-semibold text-on-surface">Pick-up Authorizations</h2>
        </div>
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
          <p className="text-xs font-semibold text-amber-700">ℹ Active Policy</p>
          <p className="text-xs text-on-surface-variant mt-0.5">Pickup restricted after 3:30 PM with ID-scan requirement.</p>
        </div>
        <div className="space-y-2">
          {PICKUPS.map(p => (
            <div key={p.name} className="flex items-center justify-between p-3 bg-surface-low rounded-xl">
              <p className="text-sm font-semibold text-on-surface">{p.name}</p>
              <span className="text-xs bg-surface-high text-on-surface-variant px-2 py-0.5 rounded-full">{p.access}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3">
        <Button className="flex-1 gap-2"><Save className="h-4 w-4" /> Save All Changes</Button>
        <Button variant="outline" className="flex-1">Discard</Button>
      </div>
      <p className="text-xs text-on-surface-variant flex items-center gap-1">
        <Clock className="h-3 w-3" /> Last changed: Oct 24, 2023 at 10:14 AM
      </p>
    </div>
  )
}
