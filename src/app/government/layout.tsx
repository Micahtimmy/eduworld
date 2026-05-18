import { DashboardLayout } from '@/components/shared/navigation/DashboardLayout'

export default function GovernmentLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout role="government">{children}</DashboardLayout>
}
