import { DashboardLayout } from '@/components/shared/navigation/DashboardLayout'

export default function AchieverLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout role="achiever" noTopBar darkDefault>
      {children}
    </DashboardLayout>
  )
}
