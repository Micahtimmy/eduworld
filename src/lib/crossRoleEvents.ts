import { useNotificationStore } from '@/stores/notificationStore'

// Teacher assigns homework → student + parent notified
export function notifyAssignmentCreated(opts: {
  assignmentTitle: string
  dueDate: string
  subject: string
  studentRole?: 'explorer' | 'achiever' | 'scholar'
}) {
  const { addNotification } = useNotificationStore.getState()
  const role = opts.studentRole ?? 'achiever'

  addNotification({
    recipientRole: role,
    type: 'assignment_assigned',
    title: `New assignment: ${opts.assignmentTitle}`,
    body: `${opts.subject} — due ${opts.dueDate}. Open the app to start.`,
    data: { assignmentTitle: opts.assignmentTitle, dueDate: opts.dueDate, subject: opts.subject },
  })

  addNotification({
    recipientRole: 'parent',
    type: 'assignment_assigned',
    title: `New homework assigned`,
    body: `Your child has a new ${opts.subject} assignment due ${opts.dueDate}.`,
    data: { assignmentTitle: opts.assignmentTitle, dueDate: opts.dueDate },
  })
}

// Teacher grades submission → student + parent notified
export function notifyAssignmentGraded(opts: {
  assignmentTitle: string
  score: number
  maxScore: number
  feedback?: string
  studentRole?: 'explorer' | 'achiever' | 'scholar'
}) {
  const { addNotification } = useNotificationStore.getState()
  const role = opts.studentRole ?? 'achiever'
  const pct = Math.round((opts.score / opts.maxScore) * 100)

  addNotification({
    recipientRole: role,
    type: 'assignment_graded',
    title: `Assignment graded: ${opts.assignmentTitle}`,
    body: `You scored ${opts.score}/${opts.maxScore} (${pct}%). ${opts.feedback ?? ''}`.trim(),
    data: { score: opts.score, maxScore: opts.maxScore, pct },
  })

  addNotification({
    recipientRole: 'parent',
    type: 'assignment_graded',
    title: `Assignment graded`,
    body: `Your child scored ${opts.score}/${opts.maxScore} on "${opts.assignmentTitle}".`,
    data: { score: opts.score, maxScore: opts.maxScore, assignmentTitle: opts.assignmentTitle },
  })
}

// AI detects at-risk student → teacher notified
export function notifyAIRiskFlag(opts: {
  studentName: string
  subject: string
  reason: string
}) {
  const { addNotification } = useNotificationStore.getState()
  addNotification({
    recipientRole: 'teacher',
    type: 'ai_risk_flag',
    title: `AI Alert: ${opts.studentName} may need support`,
    body: `${opts.subject}: ${opts.reason}`,
    data: { studentName: opts.studentName, subject: opts.subject, reason: opts.reason },
  })
}

// Admin creates fee → parent notified
export function notifyFeeInvoice(opts: {
  amount: number
  currency: string
  dueDate: string
  description: string
}) {
  const { addNotification } = useNotificationStore.getState()
  addNotification({
    recipientRole: 'parent',
    type: 'fee_invoice',
    title: `New school fee invoice`,
    body: `${opts.description} — ${opts.currency}${opts.amount.toLocaleString()} due ${opts.dueDate}.`,
    data: { amount: opts.amount, currency: opts.currency, dueDate: opts.dueDate },
  })
}

// Student earns XP milestone — student + parent notified
export function notifyXPMilestone(opts: {
  xpEarned: number
  totalXP: number
  reason: string
  studentRole?: 'explorer' | 'achiever' | 'scholar'
}) {
  const { addNotification } = useNotificationStore.getState()
  const role = opts.studentRole ?? 'explorer'
  addNotification({
    recipientRole: role,
    type: 'achievement_earned',
    title: `+${opts.xpEarned} XP earned!`,
    body: opts.reason,
    data: { xpEarned: opts.xpEarned, totalXP: opts.totalXP },
  })
}

// Send weekly AI report to parent
export function notifyParentWeeklyReport(opts: {
  childName: string
  summaryPoints: string[]
}) {
  const { addNotification } = useNotificationStore.getState()
  addNotification({
    recipientRole: 'parent',
    type: 'parent_weekly_report',
    title: `Weekly report: ${opts.childName}`,
    body: opts.summaryPoints[0] ?? 'Your child had a great week!',
    data: { summaryPoints: opts.summaryPoints },
  })
}
