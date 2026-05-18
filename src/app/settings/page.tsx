'use client'
import Link from 'next/link'
import {
  User, Lock, Mail, Link2, Sun, Globe, Bell, BellOff, Shield, Download, Trash2,
  HelpCircle, MessageSquare, AlertOctagon, FileText, ChevronRight, Moon, Monitor,
} from 'lucide-react'
import { useState } from 'react'

type ThemeOption = 'light' | 'dark' | 'system'

const THEME_OPTIONS: { value: ThemeOption; label: string; icon: React.ReactNode }[] = [
  { value: 'light', label: 'Light', icon: <Sun className="h-3.5 w-3.5" /> },
  { value: 'dark', label: 'Dark', icon: <Moon className="h-3.5 w-3.5" /> },
  { value: 'system', label: 'System', icon: <Monitor className="h-3.5 w-3.5" /> },
]

interface SettingsRow {
  icon: React.ReactNode
  label: string
  sub?: string
  href?: string
  danger?: boolean
  toggle?: { value: boolean; key: string }
  rightContent?: React.ReactNode
}

export default function SettingsPage() {
  const [theme, setTheme] = useState<ThemeOption>('light')
  const [pushEnabled, setPushEnabled] = useState(true)
  const [emailDigest, setEmailDigest] = useState(false)

  const Toggle = ({ value, onToggle }: { value: boolean; onToggle: () => void }) => (
    <button
      onClick={onToggle}
      className={`relative w-10 h-6 rounded-full transition-colors ${value ? 'bg-primary' : 'bg-surface-high'}`}
    >
      <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${value ? 'translate-x-5' : 'translate-x-1'}`} />
    </button>
  )

  const Section = ({ title, rows }: { title: string; rows: SettingsRow[] }) => (
    <div className="space-y-0.5">
      <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider px-1 mb-2">{title}</p>
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden divide-y divide-outline-variant">
        {rows.map((row, i) => {
          const inner = (
            <div key={i} className={`flex items-center gap-3 px-4 py-3.5 ${row.href ? 'hover:bg-surface-low transition-colors cursor-pointer' : ''} ${row.danger ? 'text-red-600' : ''}`}>
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${row.danger ? 'bg-red-100 text-red-600' : 'bg-surface-low text-on-surface-variant'}`}>
                {row.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${row.danger ? 'text-red-600' : 'text-on-surface'}`}>{row.label}</p>
                {row.sub && <p className="text-xs text-on-surface-variant mt-0.5">{row.sub}</p>}
              </div>
              {row.toggle ? (
                <Toggle value={row.toggle.value} onToggle={() => {
                  if (row.toggle?.key === 'push') setPushEnabled(v => !v)
                  if (row.toggle?.key === 'email') setEmailDigest(v => !v)
                }} />
              ) : row.rightContent ? row.rightContent : (
                row.href && <ChevronRight className="h-4 w-4 text-on-surface-variant shrink-0" />
              )}
            </div>
          )

          return row.href ? (
            <Link href={row.href} key={i}>{inner}</Link>
          ) : (
            <div key={i}>{inner}</div>
          )
        })}
      </div>
    </div>
  )

  return (
    <div className="p-6 space-y-6 max-w-xl mx-auto">
      <h1 className="font-display font-bold text-2xl text-on-surface">Settings</h1>

      {/* ACCOUNT */}
      <Section
        title="Account"
        rows={[
          { icon: <User className="h-4 w-4" />, label: 'Edit Profile', sub: 'Name, photo, bio', href: '/settings/profile' },
          { icon: <Lock className="h-4 w-4" />, label: 'Change Password', href: '/settings/password' },
          { icon: <Mail className="h-4 w-4" />, label: 'Email Preferences', sub: 'sarah.thompson@email.com', href: '/settings/email' },
          { icon: <Link2 className="h-4 w-4" />, label: 'Linked Accounts', sub: 'Google, Apple', href: '/settings/linked' },
        ]}
      />

      {/* APPEARANCE */}
      <div className="space-y-0.5">
        <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider px-1 mb-2">Appearance</p>
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden divide-y divide-outline-variant">
          <div className="flex items-center gap-3 px-4 py-3.5">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 bg-surface-low text-on-surface-variant">
              <Sun className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-on-surface">Theme</p>
            </div>
            <div className="flex gap-1 bg-surface-low rounded-xl p-1">
              {THEME_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setTheme(opt.value)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    theme === opt.value ? 'bg-white dark:bg-surface-mid text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {opt.icon} {opt.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3.5 hover:bg-surface-low transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 bg-surface-low text-on-surface-variant">
              <Globe className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-on-surface">Language</p>
              <p className="text-xs text-on-surface-variant">English (UK)</p>
            </div>
            <ChevronRight className="h-4 w-4 text-on-surface-variant" />
          </div>
        </div>
      </div>

      {/* NOTIFICATIONS */}
      <Section
        title="Notifications"
        rows={[
          {
            icon: <Bell className="h-4 w-4" />,
            label: 'Push notifications',
            sub: pushEnabled ? 'On — all activity' : 'Off',
            toggle: { value: pushEnabled, key: 'push' },
          },
          {
            icon: <BellOff className="h-4 w-4" />,
            label: 'Daily email digest',
            sub: emailDigest ? 'On — sent at 8 AM' : 'Off',
            toggle: { value: emailDigest, key: 'email' },
          },
        ]}
      />

      {/* PRIVACY */}
      <Section
        title="Privacy"
        rows={[
          { icon: <Shield className="h-4 w-4" />, label: 'Data usage', sub: 'How EduWorld uses your data', href: '/settings/privacy' },
          { icon: <Download className="h-4 w-4" />, label: 'Download my data', sub: 'Export all your data as a ZIP', href: '/settings/export' },
          { icon: <Trash2 className="h-4 w-4" />, label: 'Delete account', sub: 'Permanently remove your account', danger: true, href: '/settings/delete' },
        ]}
      />

      {/* SUPPORT */}
      <Section
        title="Support"
        rows={[
          { icon: <HelpCircle className="h-4 w-4" />, label: 'Help centre', href: '/support' },
          { icon: <MessageSquare className="h-4 w-4" />, label: 'Contact support', href: '/support#contact' },
          { icon: <AlertOctagon className="h-4 w-4" />, label: 'Report a bug', href: '/support#bug' },
        ]}
      />

      {/* LEGAL */}
      <Section
        title="Legal"
        rows={[
          { icon: <FileText className="h-4 w-4" />, label: 'Terms of service', href: '/legal/terms' },
          { icon: <FileText className="h-4 w-4" />, label: 'Privacy policy', href: '/legal/privacy' },
        ]}
      />

      {/* Version */}
      <p className="text-center text-xs text-on-surface-variant pb-4">EduWorld v1.0.0</p>
    </div>
  )
}
