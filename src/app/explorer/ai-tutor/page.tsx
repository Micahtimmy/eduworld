'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { icon: 'school', label: 'Learn', href: '/explorer/lessons' },
  { icon: 'auto_stories', label: 'Practice', href: '/explorer/daily-quest' },
  { icon: 'military_tech', label: 'Leaderboard', href: '/explorer/achievements' },
  { icon: 'shopping_bag', label: 'Shop', href: '/explorer/shop' },
  { icon: 'settings', label: 'Settings', href: '/explorer/profile' },
]

const INITIAL_MESSAGES = [
  {
    sender: 'ai',
    text: "Hi! 👋 I saw you were working on the Fractions Quest. Ready to blast off? Today we're going to explore Mars — the Red Planet! What do you want to know?",
  },
  { sender: 'user', text: 'Why is Mars red?' },
  {
    sender: 'ai',
    text: "Great question! Mars is red because of iron oxide — that's rust! — on its surface. The dust is so fine it even colors the sky pink!",
    fact: 'Iron oxide dust on Mars is so fine it floats in the atmosphere, giving the sky a pinkish hue!',
  },
]

const CHIPS = [
  { icon: 'thermostat', label: 'How hot is it?' },
  { icon: 'public', label: 'Is there water?' },
  { icon: 'rocket', label: 'Can we visit?' },
]

export default function ExplorerAiTutorPage() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(INITIAL_MESSAGES)

  function sendMessage() {
    if (!input.trim()) return
    setMessages((prev) => [...prev, { sender: 'user', text: input }])
    setInput('')
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        fontFamily: '"Nunito", system-ui, sans-serif',
        backgroundColor: '#0f1117',
        overflow: 'hidden',
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: 220,
          minHeight: '100vh',
          backgroundColor: '#1a1f2e',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 16px',
          flexShrink: 0,
        }}
        className="hidden md:flex"
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#FFD700' }}>bolt</span>
          <span style={{ fontWeight: 800, fontSize: 16, color: '#fff' }}>Spark Chat</span>
        </div>

        {/* Mascot avatar */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            backgroundColor: 'rgba(0,188,212,0.15)',
            border: '2px solid rgba(0,188,212,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginBottom: 12,
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 40, color: '#00BCD4' }}>smart_toy</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontWeight: 800, fontSize: 15, color: '#fff' }}>Spark Academy</div>
          <div style={{ fontWeight: 500, fontSize: 12, color: '#8892a4' }}>Level 12 Explorer</div>
        </div>

        {/* Nav */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '9px 12px',
                borderRadius: 10,
                color: '#8892a4',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: 13,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Quest Card */}
        <div
          style={{
            backgroundColor: '#252d3d',
            borderRadius: 12,
            padding: '12px 14px',
            marginTop: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#FFD700' }}>swords</span>
            <span style={{ fontWeight: 700, fontSize: 11, color: '#FFD700' }}>Daily Quest</span>
          </div>
          <div style={{ fontWeight: 600, fontSize: 12, color: '#fff', marginBottom: 4 }}>Science Explorer</div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              backgroundColor: 'rgba(255,87,34,0.2)',
              borderRadius: 20,
              padding: '3px 8px',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 12, color: '#FF5722' }}>rocket</span>
            <span style={{ fontWeight: 700, fontSize: 10, color: '#FF5722' }}>Mission Active</span>
          </div>
        </div>
      </aside>

      {/* Chat area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#1e2330', overflow: 'hidden' }}>
        {/* Chat header */}
        <div
          style={{
            padding: '16px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontWeight: 500, fontSize: 11, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Science Explorer
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontWeight: 700, fontSize: 15, color: '#fff' }}>Journey to Mars</span>
              <span
                style={{
                  backgroundColor: 'rgba(255,87,34,0.2)',
                  color: '#FF5722',
                  fontSize: 10,
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: 20,
                }}
              >
                🚀 Mission Active
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#FFD700' }}>star</span>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#f97316' }}>local_fire_department</span>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                backgroundColor: 'rgba(108,99,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: 13,
                color: '#fff',
              }}
            >
              E
            </div>
          </div>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row', alignItems: 'flex-start', gap: 10 }}>
              {msg.sender === 'ai' && (
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,188,212,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#00BCD4' }}>smart_toy</span>
                </div>
              )}
              <div style={{ maxWidth: '72%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div
                  style={{
                    backgroundColor: msg.sender === 'ai' ? '#252d3d' : '#2a3560',
                    borderRadius: msg.sender === 'ai' ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
                    padding: '10px 14px',
                    color: '#e8eaf0',
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: 1.55,
                  }}
                >
                  {msg.text}
                </div>
                {'fact' in msg && msg.fact && (
                  <div
                    style={{
                      backgroundColor: 'rgba(0,188,212,0.08)',
                      borderLeft: '3px solid #00BCD4',
                      borderRadius: '0 10px 10px 0',
                      padding: '8px 12px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 8,
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#00BCD4', flexShrink: 0, marginTop: 1 }}>science</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 11, color: '#00BCD4', marginBottom: 2 }}>Science Fact</div>
                      <div style={{ fontWeight: 500, fontSize: 12, color: '#8892a4', lineHeight: 1.5 }}>{msg.fact}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick chips */}
        <div style={{ padding: '8px 20px', display: 'flex', gap: 8, overflowX: 'auto' }}>
          {CHIPS.map((chip) => (
            <button
              key={chip.label}
              onClick={() => setInput(chip.label)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 14px',
                backgroundColor: '#252d3d',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 20,
                color: '#c8cdd8',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                fontFamily: '"Nunito", system-ui, sans-serif',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>{chip.icon}</span>
              {chip.label}
            </button>
          ))}
        </div>

        {/* Input bar */}
        <div
          style={{
            padding: '12px 20px 20px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            gap: 10,
            alignItems: 'center',
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') sendMessage() }}
            placeholder="Ask Spark anything..."
            style={{
              flex: 1,
              backgroundColor: '#2a3245',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 14,
              padding: '11px 16px',
              color: '#e8eaf0',
              fontSize: 14,
              fontFamily: '"Nunito", system-ui, sans-serif',
              outline: 'none',
            }}
          />
          <button
            onClick={sendMessage}
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              backgroundColor: '#00BCD4',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#fff' }}>send</span>
          </button>
        </div>
      </div>

      {/* Watermark */}
      <div
        style={{
          position: 'fixed',
          bottom: 12,
          right: 16,
          fontFamily: '"Nunito", system-ui, sans-serif',
          fontSize: 11,
          color: '#4b5563',
          zIndex: 10,
        }}
      >
        EWD-018
      </div>
    </div>
  )
}
