'use client'
import { Sparkles, TrendingUp, Award, DollarSign, Users } from 'lucide-react'
import { BarChart } from '@/components/shared/charts/BarChart'
import { cn } from '@/lib/utils'

const KPIS = [
  { label: 'Training ROI', value: '342%', change: '+28% YoY', positive: true, icon: DollarSign, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Completion Rate', value: '88.5%', change: '+4.2% vs target', positive: true, icon: Award, color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Avg Proficiency Gain', value: '+2.4 pts', change: 'Per completed course', positive: true, icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Efficiency Savings', value: '+$1.2M', change: 'This fiscal year', positive: true, icon: DollarSign, color: 'text-purple-600', bg: 'bg-purple-50' },
]

const SKILLS_GAP_DATA = [
  { name: 'Engineering', value: 72 },
  { name: 'Sales', value: 58 },
  { name: 'Operations', value: 84 },
  { name: 'Marketing', value: 65 },
  { name: 'Leadership', value: 79 },
]

const TRENDING_SKILLS = [
  { skill: 'AI & Machine Learning', growth: '+48%', employees: 234 },
  { skill: 'Cloud Architecture', growth: '+35%', employees: 189 },
  { skill: 'Data Analysis', growth: '+29%', employees: 312 },
  { skill: 'Cybersecurity', growth: '+22%', employees: 156 },
]

const DEPT_WINS = [
  { dept: 'Engineering', win: 'Achieved 100% AWS certification target', icon: '🏆' },
  { dept: 'Sales', win: '32% increase in product knowledge scores', icon: '📈' },
  { dept: 'Operations', win: 'Lean methodology rollout: 94% pass rate', icon: '✅' },
]

export default function EnterpriseROIPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Workforce ROI & Analytics</h1>
          <p className="text-sm text-on-surface-variant mt-1">Measure the business impact of your enterprise learning programs.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-on-surface-variant bg-surface-low px-3 py-1.5 rounded-xl">FY 2023–24</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {KPIS.map(k => (
          <div key={k.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center', k.bg)}>
              <k.icon className={cn('h-5 w-5', k.color)} />
            </div>
            <div>
              <p className="font-display font-bold text-2xl text-on-surface">{k.value}</p>
              <p className="text-xs text-on-surface-variant">{k.label}</p>
            </div>
            <p className={cn('text-xs font-semibold', k.positive ? 'text-green-600' : 'text-red-600')}>{k.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Skills Gap Chart */}
        <div className="lg:col-span-2 bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-semibold text-on-surface">Skills Gap by Department</h2>
              <p className="text-xs text-on-surface-variant">Proficiency vs. target (100%)</p>
            </div>
            <button className="text-xs text-primary hover:underline">Export</button>
          </div>
          <BarChart data={SKILLS_GAP_DATA} height={200} />
        </div>

        {/* Trending Skills */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="font-display font-semibold text-on-surface">Trending Skills</h2>
          </div>
          <div className="space-y-3">
            {TRENDING_SKILLS.map(s => (
              <div key={s.skill} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-on-surface">{s.skill}</p>
                  <span className="text-xs font-semibold text-green-600">{s.growth}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-surface-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${(s.employees / 350) * 100}%` }} />
                  </div>
                  <span className="text-xs text-on-surface-variant">{s.employees}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-on-surface-variant">
            <Users className="h-3.5 w-3.5" />
            <span>Employees actively enrolled</span>
          </div>
        </div>
      </div>

      {/* Department Wins */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Department Wins This Quarter</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DEPT_WINS.map(w => (
            <div key={w.dept} className="flex items-start gap-3 p-4 bg-surface-low rounded-xl">
              <span className="text-2xl">{w.icon}</span>
              <div>
                <p className="text-xs font-semibold text-primary">{w.dept}</p>
                <p className="text-sm text-on-surface mt-0.5">{w.win}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-ai" />
          <h2 className="font-display font-semibold text-on-surface">AI Strategic Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { insight: 'Sales department has a 42-point proficiency gap in "Consultative Selling". Recommend deploying the new module Q1 to address the $340K revenue risk.', urgency: 'High Priority' },
            { insight: 'At current completion rates, Engineering will hit 100% cloud certification by March. Consider early-access to advanced AWS specialty tracks.', urgency: 'Opportunity' },
          ].map((item, i) => (
            <div key={i} className="p-3 bg-surface-lowest rounded-xl border border-ai/10 space-y-2">
              <span className={cn('text-xs font-semibold px-2 py-0.5 rounded-full', i === 0 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700')}>{item.urgency}</span>
              <p className="text-xs text-on-surface-variant">{item.insight}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
