'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const BOTTOM_NAV = [
  { icon: 'home', label: 'Home', href: '/explorer/dashboard' },
  { icon: 'school', label: 'Lessons', href: '/explorer/lessons' },
  { icon: 'workspace_premium', label: 'Quests', href: '/explorer/daily-quest' },
  { icon: 'shopping_bag', label: 'Shop', href: '/explorer/shop', active: true },
  { icon: 'person', label: 'Profile', href: '/explorer/profile' },
]

const ACCESSORIES = [
  {
    icon: 'headphones',
    iconColor: '#7c3aed',
    iconBg: '#f5f3ff',
    name: 'Gamer Headset',
    desc: 'Epic sound vibes',
    price: 150,
    status: 'available',
  },
  {
    icon: 'visibility',
    iconColor: '#2563eb',
    iconBg: '#eff6ff',
    name: 'Nerd Glasses',
    desc: '+10 to Reading',
    price: 100,
    status: 'available',
  },
  {
    icon: 'skateboarding',
    iconColor: '#16a34a',
    iconBg: '#f0fdf4',
    name: 'Hoverboard',
    desc: 'Zoom past levels',
    price: 500,
    status: 'owned',
  },
  {
    icon: 'cruelty_free',
    iconColor: '#f43f5e',
    iconBg: '#fff1f2',
    name: 'Bunny Ears',
    desc: 'Hoppy learning',
    price: 0,
    status: 'equipped',
  },
]

export default function ExplorerShopPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('Shop')

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#1a1040',
        fontFamily: '"Nunito", system-ui, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 80,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 20px 16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#f97316' }}>local_fire_department</span>
          <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#eab308' }}>auto_awesome</span>
          <span style={{ fontWeight: 800, fontSize: 20, color: '#fff', marginLeft: 4 }}>EduSpark</span>
        </div>
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: 16,
            color: '#fff',
            border: '2px solid rgba(255,255,255,0.3)',
          }}
        >
          E
        </div>
      </div>

      {/* Profile section */}
      <div style={{ textAlign: 'center', padding: '16px 20px 24px' }}>
        {/* Mascot placeholder */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.1)',
            margin: '0 auto 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255,255,255,0.2)',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 44, color: '#6DBF67' }}>smart_toy</span>
        </div>
        <div style={{ fontWeight: 800, fontSize: 22, color: '#fff', marginBottom: 4 }}>Welcome, Explorer!</div>
        <div style={{ fontWeight: 500, fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 14 }}>Level 12 Wizard</div>
        <button
          style={{
            padding: '10px 28px',
            borderRadius: 50,
            backgroundColor: '#0891b2',
            color: '#fff',
            fontWeight: 700,
            fontSize: 14,
            border: 'none',
            cursor: 'pointer',
            fontFamily: '"Nunito", system-ui, sans-serif',
          }}
        >
          Start Learning
        </button>
      </div>

      {/* Nav tabs */}
      <div
        style={{
          display: 'flex',
          gap: 6,
          padding: '0 20px',
          marginBottom: 24,
          overflowX: 'auto',
        }}
      >
        {BOTTOM_NAV.map((tab) => (
          <Link
            key={tab.label}
            href={tab.href}
            style={{
              padding: '8px 16px',
              borderRadius: 50,
              backgroundColor: tab.active ? '#fff' : 'rgba(255,255,255,0.1)',
              color: tab.active ? '#1a1040' : 'rgba(255,255,255,0.75)',
              fontWeight: tab.active ? 800 : 600,
              fontSize: 13,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{tab.icon}</span>
            {tab.label}
          </Link>
        ))}
      </div>

      {/* Shop content */}
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* Heading + balance */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ fontWeight: 800, fontSize: 24, color: '#fff', margin: 0 }}>Explorer Shop</h1>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: 20,
              padding: '6px 14px',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#eab308' }}>star</span>
            <span style={{ fontWeight: 700, fontSize: 14, color: '#fff' }}>2,450 Stars</span>
          </div>
        </div>

        {/* Featured card */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(108,99,255,0.4) 0%, rgba(59,130,246,0.25) 100%)',
            borderRadius: 20,
            padding: '20px',
            border: '1px solid rgba(108,99,255,0.5)',
          }}
        >
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 14 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                backgroundColor: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 40, color: '#60a5fa' }}>rocket_launch</span>
            </div>
            <div>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: 20,
                  backgroundColor: '#0891b2',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 11,
                  display: 'inline-block',
                  marginBottom: 6,
                }}
              >
                Featured
              </span>
              <div style={{ fontWeight: 800, fontSize: 18, color: '#fff', marginBottom: 4 }}>Cosmic Jetpack</div>
              <div style={{ fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>
                Blast through math quests and fractions at warp speed!
              </div>
            </div>
          </div>
          <button
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: 50,
              backgroundColor: '#eab308',
              color: '#1a1a2e',
              fontWeight: 800,
              fontSize: 15,
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"Nunito", system-ui, sans-serif',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>star</span>
            Buy for 800 Stars
          </button>
        </div>

        {/* Daily Deal */}
        <div
          style={{
            backgroundColor: 'rgba(255,255,255,0.06)',
            borderRadius: 20,
            padding: '20px',
            border: '1px solid rgba(255,165,0,0.4)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span
              style={{
                padding: '3px 10px',
                borderRadius: 20,
                backgroundColor: '#f97316',
                color: '#fff',
                fontWeight: 700,
                fontSize: 11,
              }}
            >
              Daily Deal
            </span>
            <span style={{ fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Ends in 4h 22m</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                backgroundColor: 'rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 34, color: '#a78bfa' }}>auto_fix_high</span>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 4 }}>Wizard Hat</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>450 Stars</span>
                <span style={{ fontWeight: 800, fontSize: 14, color: '#eab308' }}>200 Stars</span>
              </div>
            </div>
          </div>
          <button
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: 50,
              backgroundColor: '#0891b2',
              color: '#fff',
              fontWeight: 800,
              fontSize: 15,
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"Nunito", system-ui, sans-serif',
            }}
          >
            Claim Deal
          </button>
        </div>

        {/* Avatar Accessories */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <span style={{ fontWeight: 800, fontSize: 16, color: '#fff' }}>Avatar Accessories</span>
            <button style={{ background: 'none', border: 'none', color: '#60a5fa', fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: '"Nunito", system-ui, sans-serif' }}>
              View All
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {ACCESSORIES.map((item) => (
              <div
                key={item.name}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  borderRadius: 16,
                  padding: '16px',
                  border: item.status === 'equipped' ? '2px solid #0891b2' : '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: item.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 10,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 26, color: item.iconColor }}>{item.icon}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 13, color: '#fff', marginBottom: 2 }}>{item.name}</div>
                <div style={{ fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.55)', marginBottom: 8 }}>{item.desc}</div>
                {item.status === 'available' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#eab308' }}>star</span>
                    <span style={{ fontWeight: 700, fontSize: 12, color: '#eab308' }}>{item.price}</span>
                  </div>
                )}
                {item.status === 'owned' && (
                  <span
                    style={{
                      padding: '3px 10px',
                      borderRadius: 20,
                      backgroundColor: 'rgba(22,163,74,0.2)',
                      color: '#4ade80',
                      fontWeight: 700,
                      fontSize: 11,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 3,
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 13 }}>check</span>
                    Owned
                  </span>
                )}
                {item.status === 'equipped' && (
                  <span
                    style={{
                      padding: '3px 10px',
                      borderRadius: 20,
                      backgroundColor: 'rgba(8,145,178,0.25)',
                      color: '#22d3ee',
                      fontWeight: 700,
                      fontSize: 11,
                    }}
                  >
                    Equipped
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <nav
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#130c32',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-around',
          padding: '10px 0 14px',
          zIndex: 50,
        }}
      >
        {BOTTOM_NAV.map((tab) => (
          <Link
            key={tab.label}
            href={tab.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              color: tab.active ? '#0891b2' : 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              fontSize: 10,
              fontWeight: tab.active ? 700 : 600,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{tab.icon}</span>
            {tab.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
