'use client'
import {
  BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend, Cell
} from 'recharts'
import { cn } from '@/lib/utils'

interface BarChartProps {
  data: Record<string, unknown>[]
  dataKey?: string
  xKey?: string
  color?: string
  height?: number
  className?: string
  showGrid?: boolean
  colorByValue?: boolean
  maxColor?: string
}

export function BarChart({
  data, dataKey = 'value', xKey = 'name', color = '#1e5799', height = 200,
  className, showGrid = false, colorByValue, maxColor = '#10b981'
}: BarChartProps) {
  const values = data.map(d => d[dataKey] as number)
  const max = Math.max(...values)

  return (
    <div className={cn('w-full', className)}>
      <ResponsiveContainer width="100%" height={height}>
        <ReBarChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 4 }}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="var(--color-outline-variant)" vertical={false} />}
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
            cursor={{ fill: 'var(--color-surface-high)' }}
          />
          <Bar dataKey={dataKey} radius={[4, 4, 0, 0]}>
            {colorByValue
              ? data.map((entry, i) => (
                  <Cell
                    key={i}
                    fill={(entry[dataKey] as number) === max ? maxColor : color}
                    fillOpacity={0.85}
                  />
                ))
              : data.map((_, i) => <Cell key={i} fill={color} fillOpacity={0.85} />)
            }
          </Bar>
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  )
}
