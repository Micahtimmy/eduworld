'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ScholarRoot() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/scholar/command-center')
  }, [router])

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9f9ff', alignItems: 'center', justifyContent: 'center', fontFamily: '"Inter", system-ui, sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#003f7a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <span style={{ color: '#fff', fontSize: 20, fontWeight: 700 }}>S</span>
        </div>
        <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 18, color: '#191c20', marginBottom: 6 }}>Scholar Portal</div>
        <div style={{ fontSize: 13, color: '#424750' }}>Loading your dashboard...</div>
      </div>
    </div>
  )
}
