'use client'
import { useEffect, useRef, useState } from 'react'

interface AnimatedXPProps {
  value: number
  duration?: number
  className?: string
}

export function AnimatedXP({ value, duration = 600, className }: AnimatedXPProps) {
  const [displayValue, setDisplayValue] = useState(value)
  const prevValue = useRef(value)

  useEffect(() => {
    const start = prevValue.current
    const end = value
    if (start === end) return

    const startTime = performance.now()
    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.round(start + (end - start) * eased))
      if (progress < 1) requestAnimationFrame(animate)
      else prevValue.current = end
    }
    requestAnimationFrame(animate)
  }, [value, duration])

  return <span className={className}>{displayValue.toLocaleString()}</span>
}
