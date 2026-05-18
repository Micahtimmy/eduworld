'use client'
import {
  LineChart as ReLineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts'
import { cn } from '@/lib/utils'

interface DataSeries {
  key: string
  label: string
  color?: string
}

interface LineChartProps {
  data: Record<string, unknown>[]
  series?: DataSeries[]
  /** @deprecated use series */
  lines?: DataSeries[]
  xKey?: string
  height?: number
  className?: string
  showGrid?: boolean
  showLegend?: boolean
}

const DEFAULT_COLORS = ['#1e5799', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']

export function LineChart({
  data, series, lines, xKey = 'name', height = 220, className, showGrid = true, showLegend
}: LineChartProps) {
  const resolvedSeries = series ?? lines ?? [{ key: 'value', label: 'Value' }]
  return (
    <div className={cn('w-full', className)}>
      <ResponsiveContainer width="100%" height={height}>
        <ReLineChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 4 }}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="var(--color-outline-variant)" />}
          <XAxis
            dataKey={xKey}
            tick={{ fontSize: 11, fill: 'var(--color-on-surface-variant)', fontFamily: 'var(--font-label)' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: 'var(--color-on-surface-variant)', fontFamily: 'var(--font-label)' }}
            axisLine={false}
            tickLine={false}
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
          {showLegend && <Legend wrapperStyle={{ fontSize: 12, fontFamily: 'var(--font-label)' }} />}
          {resolvedSeries.map((s, i) => (
            <Line
              key={s.key}
              type="monotone"
              dataKey={s.key}
              name={s.label}
              stroke={s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          ))}
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  )
}
