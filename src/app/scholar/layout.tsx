import { DashboardLayout } from '@/components/shared/navigation/DashboardLayout'

export default function ScholarLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout role="scholar">{children}</DashboardLayout>
}
