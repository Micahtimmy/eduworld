import { DashboardLayout } from '@/components/shared/navigation/DashboardLayout'

export default function ExplorerLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout role="explorer" noTopBar>
      {children}
    </DashboardLayout>
  )
}
