'use client'
import {
  RadarChart as ReRadarChart, Radar, PolarGrid,
  PolarAngleAxis, ResponsiveContainer, Tooltip
} from 'recharts'
import { cn } from '@/lib/utils'

interface RadarChartProps {
  data: { subject: string; value: number; fullMark?: number }[]
  height?: number
  color?: string
  className?: string
}

export function RadarChart({ data, height = 200, color = '#1e5799', className }: RadarChartProps) {
  return (
    <div className={cn('w-full', className)}>
      <ResponsiveContainer width="100%" height={height}>
        <ReRadarChart data={data}>
          <PolarGrid stroke="var(--color-outline-variant)" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fontSize: 11, fill: 'var(--color-on-surface-variant)', fontFamily: 'var(--font-label)' }}
          />
          <Radar
            dataKey="value"
            stroke={color}
            fill={color}
            fillOpacity={0.2}
            strokeWidth={2}
          />
          <Tooltip
            contentStyle={{
              background: 'var(--color-surface-lowest)',
              border: '1px solid var(--color-outline-variant)',
              borderRadius: '8px',
              fontSize: 12,
              fontFamily: 'var(--font-label)',
            }}
          />
        </ReRadarChart>
      </ResponsiveContainer>
    </div>
  )
}
