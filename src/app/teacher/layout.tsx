import { DashboardLayout } from '@/components/shared/navigation/DashboardLayout'

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout role="teacher">{children}</DashboardLayout>
}
