import { DashboardLayout } from '@/components/shared/navigation/DashboardLayout'

export default function ParentLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout role="parent" noTopBar>
      {children}
    </DashboardLayout>
  )
}
