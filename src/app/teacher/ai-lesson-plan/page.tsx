'use client'
import { useState } from 'react'
import Link from 'next/link'

const T = {
  bg: '#f4f6f9',
  surface: '#ffffff',
  primary: '#003f7a',
  primaryLight: '#e8f0fe',
  ai: '#10B981',
  aiLight: '#d1fae5',
  xp: '#F59E0B',
  purple: '#7c3aed',
  purpleLight: '#ede9fe',
  textPrimary: '#191c20',
  textMuted: '#6B7280',
  border: '#e2e5ea',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/teacher/dashboard' },
  { icon: 'school', label: 'My Classes', href: '/teacher/classes' },
  { icon: 'assignment', label: 'Assignments', href: '/teacher/assignments' },
  { icon: 'analytics', label: 'Analytics', href: '/teacher/student-insights' },
  { icon: 'people', label: 'Students', href: '/teacher/student-groups' },
  { icon: 'auto_awesome', label: 'AI Lesson Plan', href: '/teacher/ai-lesson-plan', active: true },
  { icon: 'psychology', label: 'AI Recommendations', href: '/teacher/ai-recommendations' },
  { icon: 'live_tv', label: 'Live Classroom', href: '/teacher/live-classroom' },
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar' },
  { icon: 'inbox', label: 'Inbox', href: '/teacher/inbox' },
]

const assets = [
  { icon: 'image', label: 'Diagram_01.png', type: 'Image' },
  { icon: 'movie', label: 'Cell_Video.mp4', type: 'Video' },
  { icon: 'description', label: 'Worksheet_A.pdf', type: 'Document' },
  { icon: 'image', label: 'Chloroplast_3D.png', type: 'Image' },
  { icon: 'description', label: 'Photosynthesis_Notes.pdf', type: 'Document' },
]

function Sidebar() {
  return (
    <aside style={{
      width: 260, minHeight: '100vh', background: T.surface,
      borderRight: `1px solid ${T.border}`, display: 'flex',
      flexDirection: 'column', padding: '24px 0', flexShrink: 0,
    }}>
      <div style={{ padding: '0 20px 24px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary }}>EduWorld</div>
        <span style={{
          display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600,
          color: T.primary, background: T.primaryLight, borderRadius: 6, padding: '2px 8px',
        }}>Teacher</span>
      </div>
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px',
              borderRadius: 8, marginBottom: 2, cursor: 'pointer',
              background: item.active ? '#f3f3f9' : 'transparent',
              borderLeft: item.active ? `3px solid ${T.primary}` : '3px solid transparent',
              color: item.active ? T.primary : T.textMuted,
              fontFamily: T.fontBody, fontWeight: item.active ? 600 : 400, fontSize: 14,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
      <div style={{ padding: '0 12px' }}>
        <Link href="/settings" style={{ textDecoration: 'none' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px',
            borderRadius: 8, color: T.textMuted, fontFamily: T.fontBody, fontSize: 14,
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>settings</span>
            Settings
          </div>
        </Link>
      </div>
    </aside>
  )
}

export default function AILessonPlanPage() {
  const [topic, setTopic] = useState('Photosynthesis & Cellular Energy')
  const [grade, setGrade] = useState('Grade 8 Science / High School Biology')
  const [curriculum, setCurriculum] = useState('NGSS HS-LS1-5 — Matter and Energy in Organisms')
  const [activeTab, setActiveTab] = useState('Achiever')
  const [showAISuggestion, setShowAISuggestion] = useState(true)

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />

      {/* Main Workspace */}
      <main style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>

        {/* Top Header Bar */}
        <div style={{
          background: T.surface, borderBottom: `1px solid ${T.border}`,
          padding: '14px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.textMuted }}>search</span>
            <input placeholder="Search lessons, topics…" style={{
              border: 'none', outline: 'none', fontSize: 14, color: T.textPrimary,
              fontFamily: T.fontBody, width: 220, background: 'transparent',
            }} />
          </div>
          <div style={{
            fontFamily: T.fontHead, fontWeight: 700, fontSize: 17, color: T.textPrimary,
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <span style={{ color: T.xp }}>✦</span> AI Lesson Generator
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.textMuted, cursor: 'pointer' }}>notifications</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.textMuted, cursor: 'pointer' }}>help</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.textMuted, cursor: 'pointer' }}>settings</span>
            <div style={{
              width: 36, height: 36, borderRadius: '50%', background: T.primary,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 700, fontSize: 14, fontFamily: T.fontHead,
            }}>MJ</div>
          </div>
        </div>

        <div style={{ display: 'flex', flex: 1 }}>
          {/* Central Workspace */}
          <div style={{ flex: 1, padding: 28 }}>

            {/* Section Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
              <h2 style={{
                fontFamily: T.fontHead, fontWeight: 800, fontSize: 22, color: T.textPrimary, margin: 0,
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{ color: T.xp }}>✦</span> Generate Workspace
              </h2>
              <div style={{ display: 'flex', gap: 10 }}>
                <button style={{
                  padding: '9px 18px', background: T.surface, border: `1px solid ${T.border}`,
                  borderRadius: 8, fontSize: 13, color: T.textPrimary, cursor: 'pointer',
                  fontFamily: T.fontBody, fontWeight: 500,
                }}>Save to Drafts</button>
                <button style={{
                  padding: '9px 18px', background: T.primary, border: 'none',
                  borderRadius: 8, fontSize: 13, color: '#fff', cursor: 'pointer',
                  fontFamily: T.fontBody, fontWeight: 600,
                }}>Assign to Class</button>
              </div>
            </div>

            {/* Input Fields */}
            <div style={{
              background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14,
              padding: 24, marginBottom: 20,
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: T.textMuted, display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Topic</label>
                  <input
                    value={topic}
                    onChange={e => setTopic(e.target.value)}
                    style={{
                      width: '100%', padding: '10px 12px', border: `1px solid ${T.border}`,
                      borderRadius: 8, fontSize: 14, color: T.textPrimary, fontFamily: T.fontBody,
                      outline: 'none', boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: T.textMuted, display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Grade Level</label>
                  <select
                    value={grade}
                    onChange={e => setGrade(e.target.value)}
                    style={{
                      width: '100%', padding: '10px 12px', border: `1px solid ${T.border}`,
                      borderRadius: 8, fontSize: 14, color: T.textPrimary, fontFamily: T.fontBody,
                      outline: 'none', background: T.surface, boxSizing: 'border-box',
                    }}
                  >
                    <option>Grade 8 Science / High School Biology</option>
                    <option>Grade 9 / High School Chemistry</option>
                    <option>Grade 10 / Advanced Biology</option>
                    <option>Grade 11 / AP Biology</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: T.textMuted, display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Curriculum Standard</label>
                  <input
                    value={curriculum}
                    onChange={e => setCurriculum(e.target.value)}
                    style={{
                      width: '100%', padding: '10px 12px', border: `1px solid ${T.border}`,
                      borderRadius: 8, fontSize: 14, color: T.textPrimary, fontFamily: T.fontBody,
                      outline: 'none', boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>
              <button style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px',
                background: T.primaryLight, border: `1px solid ${T.primary}40`,
                borderRadius: 8, fontSize: 13, color: T.primary, cursor: 'pointer',
                fontFamily: T.fontBody, fontWeight: 600,
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>auto_fix_high</span>
                Refine Prompts
              </button>
            </div>

            {/* View Tabs */}
            <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
              {['Explorer', 'Achiever', 'Scholar'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '8px 20px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                    cursor: 'pointer', fontFamily: T.fontBody,
                    border: activeTab === tab ? 'none' : `1px solid ${T.border}`,
                    background: activeTab === tab ? T.primary : T.surface,
                    color: activeTab === tab ? '#fff' : T.textMuted,
                  }}
                >{tab}</button>
              ))}
            </div>

            {/* Lesson Phase Card */}
            <div style={{
              background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14,
              padding: 24, marginBottom: 20,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, background: T.xp + '20',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.xp }}>flare</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 15, color: T.textPrimary }}>Phase 1: Introduction & Hook</div>
                    <div style={{ fontSize: 12, color: T.textMuted }}>Estimated time: 10 minutes</div>
                  </div>
                </div>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.textMuted, cursor: 'pointer' }}>more_horiz</span>
              </div>
              <p style={{ fontSize: 14, color: T.textPrimary, lineHeight: 1.65, marginBottom: 16 }}>
                Imagine a world without sunlight — no food, no oxygen, no life as we know it. Today we explore the extraordinary process that converts light energy into the fuel that powers nearly every living thing on Earth: <strong>photosynthesis</strong>. Through the lens of a single leaf, we'll uncover one of biology's most elegant equations.
              </p>
              <div style={{
                background: T.bg, borderRadius: 10, padding: '14px 18px', marginBottom: 16,
                border: `1px solid ${T.border}`,
              }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: T.textMuted, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Core Concept: The Equation</div>
                <div style={{
                  fontFamily: 'monospace', fontSize: 15, color: T.textPrimary,
                  background: T.primaryLight, borderRadius: 8, padding: '10px 14px',
                  border: `1px solid ${T.primary}30`,
                }}>
                  6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂
                </div>
                <p style={{ fontSize: 13, color: T.textMuted, marginTop: 10, lineHeight: 1.5 }}>
                  Carbon dioxide + water + sunlight → glucose + oxygen. Plants are solar-powered sugar factories, and every bite of food you eat traces back to this reaction.
                </p>
              </div>
              {/* Drop Zone */}
              <div style={{
                border: `2px dashed ${T.border}`, borderRadius: 10, padding: '20px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                color: T.textMuted, cursor: 'pointer',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 30, color: T.border }}>add_photo_alternate</span>
                <div style={{ fontSize: 13 }}>Drop Hook Image or Video Here</div>
                <div style={{ fontSize: 12, color: T.border }}>PNG, JPG, MP4 — up to 50MB</div>
              </div>
            </div>

            {/* Phase 2 Card */}
            <div style={{
              background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14,
              padding: 24, marginBottom: 20,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, background: T.ai + '20',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.ai }}>science</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 15, color: T.textPrimary }}>Phase 2: Core Instruction</div>
                    <div style={{ fontSize: 12, color: T.textMuted }}>Estimated time: 20 minutes</div>
                  </div>
                </div>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.textMuted, cursor: 'pointer' }}>more_horiz</span>
              </div>
              <p style={{ fontSize: 14, color: T.textPrimary, lineHeight: 1.65 }}>
                Dive deep into the two stages of photosynthesis: the <strong>Light-Dependent Reactions</strong> (occurring in the thylakoid membranes) and the <strong>Calvin Cycle</strong> (occurring in the stroma). Students will trace the flow of electrons, understand ATP and NADPH production, and map carbon fixation through the cycle.
              </p>
            </div>

            {/* AI Suggestion Box */}
            {showAISuggestion && (
              <div style={{
                background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)',
                border: `1px solid ${T.ai}40`, borderRadius: 14, padding: 20, marginBottom: 20,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: T.ai, fontSize: 16 }}>✦</span>
                    <span style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 14, color: T.ai }}>AI Suggestion</span>
                    <span style={{
                      background: T.ai, color: '#fff', fontSize: 11, fontWeight: 700,
                      borderRadius: 4, padding: '2px 6px',
                    }}>DIFFERENTIATION</span>
                  </div>
                  <button
                    onClick={() => setShowAISuggestion(false)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>close</span>
                  </button>
                </div>
                <p style={{ fontSize: 14, color: T.textPrimary, lineHeight: 1.6, marginBottom: 14 }}>
                  For Explorer-level students, consider adding a visual analogy card comparing the chloroplast to a "solar panel factory." This reduces cognitive load and builds bridging connections before introducing the molecular equations.
                </p>
                <button style={{
                  display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px',
                  background: T.ai, border: 'none', borderRadius: 8,
                  fontSize: 13, color: '#fff', cursor: 'pointer', fontFamily: T.fontBody, fontWeight: 600,
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>check</span>
                  Apply Scaffolding
                </button>
              </div>
            )}

          </div>

          {/* Right Panel — Asset Library */}
          <div style={{
            width: 280, background: T.surface, borderLeft: `1px solid ${T.border}`,
            padding: '24px 20px', flexShrink: 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 15, color: T.textPrimary }}>Asset Library</div>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.textMuted, cursor: 'pointer' }}>filter_list</span>
            </div>

            <div style={{ marginBottom: 16 }}>
              <input placeholder="Search assets…" style={{
                width: '100%', padding: '9px 12px', border: `1px solid ${T.border}`,
                borderRadius: 8, fontSize: 13, color: T.textPrimary, fontFamily: T.fontBody,
                outline: 'none', boxSizing: 'border-box',
              }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {assets.map((asset, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px',
                  background: T.bg, borderRadius: 10, border: `1px solid ${T.border}`, cursor: 'pointer',
                }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 8, background: T.primary + '15',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary }}>{asset.icon}</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: T.textPrimary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{asset.label}</div>
                    <div style={{ fontSize: 11, color: T.textMuted }}>{asset.type}</div>
                  </div>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.textMuted, cursor: 'pointer' }}>add_circle</span>
                </div>
              ))}
            </div>

            <button style={{
              width: '100%', marginTop: 14, padding: '10px', background: T.primaryLight,
              border: `1px dashed ${T.primary}40`, borderRadius: 10, fontSize: 13,
              color: T.primary, fontWeight: 600, cursor: 'pointer', fontFamily: T.fontBody,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>upload</span>
              Upload Asset
            </button>

            {/* Lesson Settings */}
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${T.border}` }}>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 14, color: T.textPrimary, marginBottom: 14 }}>Lesson Settings</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { label: 'Duration', value: '45 min', icon: 'timer' },
                  { label: 'Difficulty', value: 'Intermediate', icon: 'signal_cellular_alt' },
                  { label: 'Format', value: 'Interactive', icon: 'touch_app' },
                ].map(s => (
                  <div key={s.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: T.textMuted }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{s.icon}</span>
                      {s.label}
                    </div>
                    <div style={{
                      fontSize: 12, fontWeight: 600, color: T.primary,
                      background: T.primaryLight, borderRadius: 6, padding: '3px 8px',
                    }}>{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
