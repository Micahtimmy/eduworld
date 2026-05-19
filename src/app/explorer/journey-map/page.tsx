'use client'

import Link from 'next/link'

const MAP_NODES = [
  {
    id: 1,
    label: 'Foundations Island',
    status: 'completed',
    icon: 'check_circle',
    color: '#22c55e',
    x: 8,
    y: 65,
  },
  {
    id: 2,
    label: 'Science World',
    status: 'active',
    icon: 'science',
    color: '#6c63ff',
    pct: 72,
    x: 38,
    y: 40,
    isPlayer: true,
  },
  {
    id: 3,
    label: 'Math Kingdom',
    status: 'locked',
    icon: 'lock',
    color: '#6b7280',
    x: 65,
    y: 60,
  },
  {
    id: 4,
    label: 'Language Arts',
    status: 'locked',
    icon: 'lock',
    color: '#6b7280',
    x: 85,
    y: 35,
  },
]

export default function ExplorerJourneyMapPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: '"Nunito", system-ui, sans-serif',
        background: 'linear-gradient(180deg, #0d1b4b 0%, #0a3d62 50%, #1a6b8a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <Link
          href="/explorer/dashboard"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 36,
            height: 36,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.15)',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_back</span>
        </Link>

        <div style={{ fontWeight: 800, fontSize: 16, color: '#fff' }}>Learning Journey</div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#facc15' }}>star</span>
          <span style={{ fontWeight: 700, fontSize: 13, color: '#fff' }}>1,250 XP</span>
        </div>
      </div>

      {/* Global Progress */}
      <div
        style={{
          margin: '0 20px 16px',
          backgroundColor: 'rgba(255,255,255,0.08)',
          borderRadius: 14,
          padding: '12px 16px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#FFD700' }}>flag</span>
            <span style={{ fontWeight: 700, fontSize: 13, color: '#fff' }}>Global Progress</span>
          </div>
          <span style={{ fontWeight: 800, fontSize: 14, color: '#FFD700' }}>64%</span>
        </div>
        <div style={{ height: 8, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 4, overflow: 'hidden' }}>
          <div style={{ width: '64%', height: '100%', background: 'linear-gradient(90deg, #FFD700, #f97316)', borderRadius: 4 }} />
        </div>
      </div>

      {/* Current Quest badge */}
      <div style={{ padding: '0 20px 8px', position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: 'rgba(108,99,255,0.2)',
            border: '1px solid rgba(108,99,255,0.4)',
            borderRadius: 20,
            padding: '8px 16px',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#FFD700' }}>star</span>
          <span style={{ fontWeight: 700, fontSize: 12, color: '#fff' }}>Current Quest: The Solar System</span>
        </div>
      </div>

      {/* Map area */}
      <div
        style={{
          position: 'relative',
          height: 380,
          margin: '8px 0',
          zIndex: 5,
        }}
      >
        {/* Ocean wave texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.08,
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(255,255,255,0.15) 28px, rgba(255,255,255,0.15) 30px)',
          }}
        />

        {/* SVG path connector */}
        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M10 67 Q22 50 40 42 Q52 52 67 62 Q76 48 87 37"
            fill="none"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.7"
            strokeDasharray="2 2"
          />
        </svg>

        {/* Map nodes */}
        {MAP_NODES.map((node) => (
          <div
            key={node.id}
            style={{
              position: 'absolute',
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <div
              style={{
                width: 'isPlayer' in node && node.isPlayer ? 70 : 56,
                height: 'isPlayer' in node && node.isPlayer ? 70 : 56,
                borderRadius: '50%',
                backgroundColor:
                  node.status === 'completed'
                    ? 'rgba(34,197,94,0.2)'
                    : node.status === 'active'
                    ? 'rgba(108,99,255,0.25)'
                    : 'rgba(107,114,128,0.12)',
                border: `2px solid ${node.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'isPlayer' in node && node.isPlayer ? '0 0 20px rgba(108,99,255,0.4)' : 'none',
                position: 'relative',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 'isPlayer' in node && node.isPlayer ? 28 : 22,
                  color: node.color,
                }}
              >
                {node.icon}
              </span>
              {'isPlayer' in node && node.isPlayer && (
                <div
                  style={{
                    position: 'absolute',
                    top: -14,
                    right: -6,
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
                    border: '2px solid #fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: 10,
                    color: '#fff',
                  }}
                >
                  E
                </div>
              )}
            </div>

            {'pct' in node && node.pct !== undefined && (
              <div
                style={{
                  backgroundColor: 'rgba(108,99,255,0.25)',
                  borderRadius: 20,
                  padding: '2px 8px',
                  fontWeight: 800,
                  fontSize: 10,
                  color: '#c4b5fd',
                }}
              >
                {node.pct}%
              </div>
            )}

            <div
              style={{
                backgroundColor: 'rgba(0,0,0,0.45)',
                borderRadius: 20,
                padding: '3px 10px',
                fontWeight: 700,
                fontSize: 10,
                color: '#fff',
                whiteSpace: 'nowrap',
                backdropFilter: 'blur(4px)',
              }}
            >
              {node.label}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom cards */}
      <div style={{ padding: '0 20px 32px', display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', zIndex: 10 }}>
        {/* Finish modules prompt */}
        <div
          style={{
            backgroundColor: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 14,
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#facc15' }}>trending_up</span>
          <span style={{ fontWeight: 600, fontSize: 13, color: '#e2e8f0' }}>
            Finish 2 more modules to level up!
          </span>
        </div>

        {/* Daily Quest card */}
        <div
          style={{
            backgroundColor: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 14,
            padding: '14px 16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#FFD700' }}>workspace_premium</span>
              <span style={{ fontWeight: 700, fontSize: 13, color: '#fff' }}>Daily Quest</span>
            </div>
            <span
              style={{
                backgroundColor: 'rgba(250,204,21,0.2)',
                color: '#FFD700',
                fontWeight: 800,
                fontSize: 11,
                padding: '2px 8px',
                borderRadius: 20,
              }}
            >
              +200 XP
            </span>
          </div>
          <div style={{ height: 6, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ width: '33%', height: '100%', background: 'linear-gradient(90deg, #6c63ff, #3b82f6)', borderRadius: 3 }} />
          </div>
          <div style={{ fontWeight: 500, fontSize: 11, color: '#8892a4', marginTop: 4 }}>Quiz: 1/3 completed</div>
        </div>

        {/* Continue button */}
        <Link
          href="/explorer/subjects/science/topics"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            padding: '14px',
            borderRadius: 50,
            background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
            color: '#fff',
            fontWeight: 800,
            fontSize: 15,
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(108,99,255,0.4)',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>play_arrow</span>
          Continue Journey
        </Link>
      </div>

      {/* Watermark */}
      <div
        style={{
          position: 'fixed',
          bottom: 12,
          right: 16,
          fontFamily: '"Nunito", system-ui, sans-serif',
          fontSize: 11,
          color: 'rgba(255,255,255,0.3)',
          zIndex: 10,
        }}
      >
        EWD-MAP
      </div>
    </div>
  )
}
