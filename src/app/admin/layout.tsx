import { DashboardLayout } from '@/components/shared/navigation/DashboardLayout'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout role="admin">{children}</DashboardLayout>
}
