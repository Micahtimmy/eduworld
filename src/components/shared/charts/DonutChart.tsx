'use client'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { cn } from '@/lib/utils'

interface DonutSegment {
  name: string
  value: number
  color?: string
}

interface DonutChartProps {
  data: DonutSegment[]
  height?: number
  innerRadius?: number
  outerRadius?: number
  className?: string
  showLegend?: boolean
  centerLabel?: string
  centerValue?: string
}

const DEFAULT_COLORS = ['#1e5799', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']

export function DonutChart({
  data, height = 200, innerRadius = 55, outerRadius = 80,
  className, showLegend, centerLabel, centerValue
}: DonutChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0)

  return (
    <div className={cn('w-full relative', className)}>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={3}
            dataKey="value"
            strokeWidth={0}
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: 'var(--color-surface-lowest)',
              border: '1px solid var(--color-outline-variant)',
              borderRadius: '8px',
              fontSize: 12,
              fontFamily: 'var(--font-label)',
            }}
            formatter={(value) => [`${(((value as number) / total) * 100).toFixed(1)}%`, '']}
          />
          {showLegend && (
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 12, fontFamily: 'var(--font-label)' }}
            />
          )}
        </PieChart>
      </ResponsiveContainer>
      {/* Center text */}
      {(centerLabel || centerValue) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {centerValue && (
            <span className="font-display font-bold text-xl text-on-surface">{centerValue}</span>
          )}
          {centerLabel && (
            <span className="text-xs font-label text-on-surface-variant">{centerLabel}</span>
          )}
        </div>
      )}
    </div>
  )
}
