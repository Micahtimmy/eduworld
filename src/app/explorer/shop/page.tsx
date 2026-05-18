'use client'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ACCESSORIES = [
  { icon: '🎧', name: 'Gamer Headset', desc: 'Epic sound vibes', price: 150, status: 'available' },
  { icon: '🤓', name: 'Nerd Glasses', desc: '+10 to Reading', price: 100, status: 'available' },
  { icon: '🛹', name: 'Hoverboard', desc: 'Zoom past levels', price: 500, status: 'owned' },
  { icon: '🐰', name: 'Bunny Ears', desc: 'Hoppy learning', price: 0, status: 'equipped' },
]

export default function ExplorerShopPage() {
  return (
    <div className="min-h-screen bg-surface-low flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 bg-surface-lowest border-b border-outline-variant">
        <span className="font-bold text-on-surface">EduWorld</span>
        <div className="flex items-center gap-2">
          <span className="text-lg">🔥</span>
          <span className="text-lg">✦</span>
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">E</div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-5 pb-24">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Explorer Shop</h1>
          <p className="text-sm text-on-surface-variant mt-1">Spend your stars on awesome gear and avatar upgrades!</p>
        </div>

        {/* Balance */}
        <div className="flex items-center gap-2 bg-surface-lowest rounded-2xl border border-outline-variant px-4 py-3">
          <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          <span className="text-sm text-on-surface-variant">Current Balance</span>
          <span className="font-display font-bold text-xl text-on-surface ml-auto">2,450 Stars</span>
        </div>

        {/* Featured */}
        <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/30 p-4 space-y-3">
          <div className="flex items-start gap-4">
            <span className="text-5xl">🚀</span>
            <div className="flex-1">
              <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full font-semibold">FEATURED</span>
              <h2 className="font-display font-bold text-lg text-on-surface mt-2">Cosmic Jetpack</h2>
              <p className="text-xs text-on-surface-variant mt-1">Blast through math quests and fractions at warp speed!</p>
            </div>
          </div>
          <Button className="w-full gap-1.5"><Star className="h-4 w-4 text-yellow-300 fill-yellow-300" /> Buy for 800 Stars</Button>
        </div>

        {/* Daily Deal */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full font-bold">DAILY DEAL</span>
            <span className="text-xs text-on-surface-variant">Ends in 4h 22m</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🧙</span>
            <div className="flex-1">
              <p className="font-semibold text-on-surface">Starry Wizard Hat</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm line-through text-on-surface-variant">450 ⭐</span>
                <span className="font-bold text-amber-700">200 Stars</span>
              </div>
            </div>
          </div>
          <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">Claim Deal</Button>
        </div>

        {/* Avatar Accessories */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-on-surface">👗 Avatar Accessories</h2>
            <button className="text-xs text-primary hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {ACCESSORIES.map(a => (
              <div key={a.name} className={`bg-surface-lowest rounded-2xl border p-3 space-y-2 ${a.status === 'equipped' ? 'border-primary' : 'border-outline-variant'}`}>
                <span className="text-3xl">{a.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-on-surface">{a.name}</p>
                  <p className="text-xs text-on-surface-variant">{a.desc}</p>
                </div>
                {a.status === 'available' && (
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-on-surface">{a.price}</span>
                  </div>
                )}
                {a.status === 'owned' && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">✓ Owned</span>}
                {a.status === 'equipped' && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Equipped</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface-lowest border-t border-outline-variant flex justify-around py-2 px-4">
        {[{ icon: '🏠', label: 'Home' }, { icon: '📚', label: 'Lessons' }, { icon: '⭐', label: 'Shop', active: true }, { icon: '👤', label: 'Profile' }].map(t => (
          <button key={t.label} className={`flex flex-col items-center gap-0.5 px-3 py-1 ${t.active ? 'text-primary' : 'text-on-surface-variant'}`}>
            <span>{t.icon}</span>
            <span className="text-xs">{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
