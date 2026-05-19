'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const MESSAGES = [
  {
    sender: 'Mrs. Sarah',
    text: "Hi Explorer! 👋 I saw you were working on the Fractions Quest. How's it going?",
    time: '10:40 AM',
    isMe: false,
  },
  {
    sender: 'Me',
    text: "I'm stuck on problem #4! I don't know how to add 1/2 and 1/4 together.",
    time: '10:41 AM',
    isMe: true,
  },
  {
    sender: 'Mrs. Sarah',
    text: 'Great question! Think of it like pizza slices 🍕 If you have half a pizza and a quarter of a pizza, how many pieces is that out of 4?',
    time: '10:42 AM',
    isMe: false,
    attachment: { name: 'Pizza_Fractions.png', size: '1.2 MB', type: 'Image' },
  },
  {
    sender: 'Me',
    text: 'Oh! So it would be 3/4? Because 2 pieces plus 1 piece = 3 pieces out of 4?',
    time: '10:43 AM',
    isMe: true,
  },
  {
    sender: 'Mrs. Sarah',
    text: "Exactly right! 🌟 You've got it! The key is finding a common denominator. Want to try the next problem?",
    time: '10:44 AM',
    isMe: false,
  },
]

export default function ExplorerMessagesPage() {
  const router = useRouter()
  const [message, setMessage] = useState('')

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        fontFamily: '"Nunito", system-ui, sans-serif',
        backgroundColor: '#f0f4ff',
      }}
    >
      {/* Top header bar */}
      <div
        style={{
          backgroundColor: '#fff',
          borderBottom: '1px solid #e5e7eb',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            onClick={() => router.push('/explorer/dashboard')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              color: '#6b7280',
              padding: 0,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 22 }}>arrow_back</span>
          </button>
          <span style={{ fontWeight: 800, fontSize: 18, color: '#1a1a2e' }}>EduWorld</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#f97316' }}>local_fire_department</span>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              backgroundColor: '#ede9fe',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: 14,
              color: '#7c3aed',
            }}
          >
            E
          </div>
          <button
            style={{
              padding: '6px 14px',
              borderRadius: 20,
              background: 'linear-gradient(90deg, #eab308, #f59e0b)',
              color: '#1a1a2e',
              fontWeight: 800,
              fontSize: 12,
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"Nunito", system-ui, sans-serif',
            }}
          >
            GO PREMIUM
          </button>
        </div>
      </div>

      {/* Content area */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left panel: tutor card */}
        <div
          style={{
            width: 280,
            flexShrink: 0,
            padding: '20px 16px',
            borderRight: '1px solid #e5e7eb',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            overflowY: 'auto',
          }}
          className="hidden md:flex"
        >
          <div style={{ fontWeight: 800, fontSize: 15, color: '#1a1a2e', marginBottom: 4 }}>Messages</div>

          {/* Tutor card */}
          <div
            style={{
              backgroundColor: '#f0f4ff',
              borderRadius: 16,
              padding: '16px',
              border: '2px solid #6c63ff',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: 16,
                    color: '#fff',
                  }}
                >
                  MS
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#1a1a2e' }}>Mrs. Sarah</div>
                  <div style={{ fontWeight: 500, fontSize: 12, color: '#6b7280' }}>Your Math Guide</div>
                </div>
              </div>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>more_vert</span>
              </button>
            </div>
            <div
              style={{
                padding: '2px 8px',
                borderRadius: 20,
                backgroundColor: '#dcfce7',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#16a34a' }} />
              <span style={{ fontWeight: 600, fontSize: 11, color: '#16a34a' }}>Online</span>
            </div>
            <p style={{ fontWeight: 500, fontSize: 12, color: '#6b7280', marginTop: 8, lineHeight: 1.4 }}>
              How&apos;s it going? Saw you in Fractions Quest 👋
            </p>
          </div>
        </div>

        {/* Chat area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Chat header */}
          <div
            style={{
              backgroundColor: '#fff',
              borderBottom: '1px solid #e5e7eb',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: 15,
                color: '#fff',
              }}
            >
              MS
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#1a1a2e' }}>Mrs. Sarah</div>
              <div style={{ fontWeight: 500, fontSize: 12, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 4 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>school</span>
                Your Math Guide
              </div>
            </div>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22 }}>more_vert</span>
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {/* Date separator */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span
                style={{
                  padding: '4px 14px',
                  borderRadius: 20,
                  backgroundColor: '#e5e7eb',
                  color: '#6b7280',
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                Today
              </span>
            </div>

            {MESSAGES.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: msg.isMe ? 'row-reverse' : 'row',
                  gap: 10,
                  alignItems: 'flex-end',
                }}
              >
                {/* Avatar */}
                {!msg.isMe && (
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: 12,
                      color: '#fff',
                      flexShrink: 0,
                    }}
                  >
                    MS
                  </div>
                )}
                <div
                  style={{
                    maxWidth: '65%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    alignItems: msg.isMe ? 'flex-end' : 'flex-start',
                  }}
                >
                  <div
                    style={{
                      padding: '10px 16px',
                      borderRadius: msg.isMe ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                      backgroundColor: msg.isMe ? '#6c63ff' : '#fff',
                      color: msg.isMe ? '#fff' : '#1a1a2e',
                      border: msg.isMe ? 'none' : '1px solid #e5e7eb',
                      fontSize: 14,
                      fontWeight: 500,
                      lineHeight: 1.5,
                      boxShadow: msg.isMe ? '0 2px 8px rgba(108,99,255,0.25)' : '0 1px 4px rgba(0,0,0,0.06)',
                    }}
                  >
                    {msg.text}
                  </div>
                  {msg.attachment && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '10px 14px',
                        backgroundColor: '#fff',
                        border: '1px solid #e5e7eb',
                        borderRadius: 12,
                        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                      }}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 8,
                          backgroundColor: '#f0f4ff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#6c63ff' }}>image</span>
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 12, color: '#1a1a2e' }}>{msg.attachment.name}</div>
                        <div style={{ fontWeight: 500, fontSize: 11, color: '#9ca3af' }}>
                          {msg.attachment.type} · {msg.attachment.size}
                        </div>
                      </div>
                    </div>
                  )}
                  <span style={{ fontSize: 11, color: '#9ca3af', fontWeight: 500 }}>{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Input bar */}
          <div
            style={{
              backgroundColor: '#fff',
              borderTop: '1px solid #e5e7eb',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              flexShrink: 0,
            }}
          >
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', display: 'flex', alignItems: 'center' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 22 }}>attach_file</span>
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: '10px 16px',
                borderRadius: 24,
                border: '1.5px solid #e5e7eb',
                backgroundColor: '#f9fafb',
                fontFamily: '"Nunito", system-ui, sans-serif',
                fontSize: 14,
                fontWeight: 500,
                color: '#1a1a2e',
                outline: 'none',
              }}
              onFocus={(e) => { e.target.style.borderColor = '#6c63ff' }}
              onBlur={(e) => { e.target.style.borderColor = '#e5e7eb' }}
            />
            <button
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
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
      </div>
    </div>
  )
}
