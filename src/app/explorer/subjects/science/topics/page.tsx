'use client'

import Link from 'next/link'

const UNITS = [
  {
    icon: 'public',
    title: "Earth's Layers",
    unitNum: 1,
    status: 'completed',
    detail: null,
    pct: null,
    accentColor: '#00897B',
  },
  {
    icon: 'rocket',
    title: 'The Solar System',
    unitNum: 2,
    status: 'active',
    detail: 'Lesson 3 of 5',
    pct: 60,
    accentColor: '#f97316',
  },
  {
    icon: 'science',
    title: 'Chemistry Basics',
    unitNum: 3,
    status: 'locked',
    detail: 'Finish Unit 2 First',
    pct: null,
    accentColor: '#6b7280',
  },
  {
    icon: 'forest',
    title: 'Ecosystems',
    unitNum: 4,
    status: 'locked',
    detail: 'Locked',
    pct: null,
    accentColor: '#6b7280',
  },
]

export default function ExplorerScienceTopicsPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: '"Nunito", system-ui, sans-serif',
        backgroundColor: '#0d1b2a',
        padding: '0 0 40px 0',
      }}
    >
      {/* Subject banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1a3a5c 0%, #0d1b2a 100%)',
          padding: '28px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Back button */}
        <Link
          href="/explorer/subjects/science"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            color: '#8892a4',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 13,
            marginBottom: 20,
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
          Science World
        </Link>

        {/* Subject icon + title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              backgroundColor: 'rgba(0,188,212,0.12)',
              border: '1px solid rgba(0,188,212,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 28, color: '#00BCD4' }}>science</span>
          </div>
          <div>
            <div style={{ fontWeight: 500, fontSize: 12, color: '#8892a4', marginBottom: 2 }}>Subject Mastery</div>
            <h1 style={{ fontWeight: 800, fontSize: 24, color: '#fff', margin: 0 }}>Science Adventures</h1>
          </div>
        </div>

        <p style={{ fontWeight: 500, fontSize: 13, color: '#8892a4', margin: '0 0 16px 0' }}>
          Explore the universe, from tiny atoms to massive galaxies.
        </p>

        {/* Level + XP bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#facc15' }}>military_tech</span>
            <span style={{ fontWeight: 700, fontSize: 13, color: '#fff' }}>Level 4 Scholar</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontWeight: 500, fontSize: 11, color: '#8892a4' }}>XP Progress</span>
              <span style={{ fontWeight: 700, fontSize: 11, color: '#facc15' }}>450 / 600 XP</span>
            </div>
            <div style={{ height: 6, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ width: '75%', height: '100%', backgroundColor: '#facc15', borderRadius: 3 }} />
            </div>
          </div>
        </div>
      </div>

      {/* Units list */}
      <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {UNITS.map((unit) => (
          <div
            key={unit.unitNum}
            style={{
              backgroundColor: '#1a2a3a',
              borderRadius: 16,
              padding: '16px 18px',
              border: `1px solid ${
                unit.status === 'completed'
                  ? 'rgba(0,137,123,0.3)'
                  : unit.status === 'active'
                  ? 'rgba(249,115,22,0.3)'
                  : 'rgba(255,255,255,0.06)'
              }`,
              opacity: unit.status === 'locked' ? 0.55 : 1,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor:
                    unit.status === 'completed'
                      ? 'rgba(0,137,123,0.15)'
                      : unit.status === 'active'
                      ? 'rgba(249,115,22,0.15)'
                      : 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: 24,
                    color: unit.accentColor,
                  }}
                >
                  {unit.icon}
                </span>
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                  <span style={{ fontWeight: 700, fontSize: 14, color: '#fff' }}>
                    Unit {unit.unitNum}: {unit.title}
                  </span>
                  {unit.status === 'completed' && (
                    <span style={{ fontWeight: 700, fontSize: 11, color: '#00897B' }}>✓ Completed</span>
                  )}
                  {unit.status === 'locked' && (
                    <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#6b7280' }}>lock</span>
                  )}
                </div>
                {unit.detail && unit.status === 'active' && (
                  <div style={{ fontWeight: 500, fontSize: 12, color: '#8892a4' }}>{unit.detail}</div>
                )}
                {unit.detail && unit.status === 'locked' && (
                  <div style={{ fontWeight: 500, fontSize: 12, color: '#6b7280' }}>{unit.detail}</div>
                )}
                {unit.pct !== null && unit.pct !== undefined && (
                  <div style={{ marginTop: 8, height: 5, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 3, overflow: 'hidden' }}>
                    <div
                      style={{
                        width: `${unit.pct}%`,
                        height: '100%',
                        backgroundColor: '#1976D2',
                        borderRadius: 3,
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Action button */}
              {unit.status === 'completed' && (
                <button
                  style={{
                    padding: '6px 14px',
                    borderRadius: 20,
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(0,137,123,0.5)',
                    color: '#00897B',
                    fontWeight: 700,
                    fontSize: 12,
                    cursor: 'pointer',
                    fontFamily: '"Nunito", system-ui, sans-serif',
                    flexShrink: 0,
                  }}
                >
                  Review
                </button>
              )}
              {unit.status === 'active' && (
                <Link
                  href="/explorer/lessons/solar-system"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '6px 14px',
                    borderRadius: 20,
                    backgroundColor: '#f97316',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 12,
                    textDecoration: 'none',
                    flexShrink: 0,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>play_arrow</span>
                  Continue
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
