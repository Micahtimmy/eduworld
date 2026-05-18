import { DashboardLayout } from '@/components/shared/navigation/DashboardLayout'

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout role="enterprise">{children}</DashboardLayout>
}
