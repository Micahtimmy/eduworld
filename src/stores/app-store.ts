import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Profile } from '@/types/app.types'

interface AppState {
  profile: Profile | null
  sidebarOpen: boolean
  commandPaletteOpen: boolean
  theme: 'light' | 'dark' | 'system'
  setProfile: (profile: Profile | null) => void
  setSidebarOpen: (open: boolean) => void
  toggleSidebar: () => void
  setCommandPaletteOpen: (open: boolean) => void
  setTheme: (theme: 'light' | 'dark' | 'system') => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      profile: null,
      sidebarOpen: true,
      commandPaletteOpen: false,
      theme: 'system',
      setProfile: (profile) => set({ profile }),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
      setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'eduworld-app',
      partialize: (state) => ({ theme: state.theme }),
    }
  )
)
