import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand primaries (Intelligence Blue)
        primary: {
          DEFAULT: '#1e5799',
          dark: '#003f7a',
          container: '#1e5799',
          'on-container': '#b0ceff',
          fixed: '#d5e3ff',
          'fixed-dim': '#a6c8ff',
          'on-fixed': '#001c3b',
          'on-fixed-variant': '#004787',
          inverse: '#a6c8ff',
        },
        // Emerald AI accent
        ai: {
          DEFAULT: '#10b981',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          container: '#6cf8bb',
          'on-container': '#00714d',
          dark: '#006c49',
        },
        // Amber gamification
        xp: {
          DEFAULT: '#f59e0b',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          container: '#7a4c00',
          'on-container': '#ffc174',
          dark: '#5b3700',
        },
        // Secondary (green)
        secondary: {
          DEFAULT: '#006c49',
          container: '#6cf8bb',
          'on-container': '#00714d',
          fixed: '#6ffbbe',
          'fixed-dim': '#4edea3',
          'on-fixed': '#002113',
          'on-fixed-variant': '#005236',
        },
        // Surface system
        surface: {
          DEFAULT: '#f9f9ff',
          dim: '#d9dae0',
          bright: '#f9f9ff',
          lowest: '#ffffff',
          low: '#f3f3f9',
          mid: '#ededf4',
          high: '#e7e8ee',
          highest: '#e2e2e8',
          tint: '#295fa1',
          variant: '#e2e2e8',
        },
        // On-surface
        'on-surface': {
          DEFAULT: '#191c20',
          variant: '#424750',
        },
        // Inverse
        inverse: {
          surface: '#2e3035',
          'on-surface': '#f0f0f6',
          primary: '#a6c8ff',
        },
        // Borders
        outline: {
          DEFAULT: '#727781',
          variant: '#c2c6d2',
        },
        // Semantic
        error: {
          DEFAULT: '#ba1a1a',
          container: '#ffdad6',
          'on-container': '#93000a',
          'on-error': '#ffffff',
        },
        background: {
          DEFAULT: '#f9f9ff',
          'on-bg': '#191c20',
        },
        // Subject colors
        subject: {
          math: '#3b82f6',
          science: '#10b981',
          english: '#8b5cf6',
          history: '#f59e0b',
          art: '#ec4899',
          music: '#06b6d4',
          pe: '#f97316',
          tech: '#6366f1',
          geography: '#14b8a6',
          languages: '#a855f7',
        },
        // Grays (for neutral elements)
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        label: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg-mobile': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '20px', fontWeight: '600' }],
        'code-md': ['14px', { lineHeight: '20px', fontWeight: '450' }],
      },
      borderRadius: {
        sm: '0.25rem',    // 4px
        DEFAULT: '0.5rem', // 8px
        md: '0.75rem',    // 12px
        lg: '1rem',       // 16px
        xl: '1.5rem',     // 24px
        '2xl': '2rem',    // 32px
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(30, 87, 153, 0.05)',
        DEFAULT: '0 4px 8px -2px rgba(30, 87, 153, 0.08), 0 2px 4px -2px rgba(30, 87, 153, 0.04)',
        md: '0 8px 16px -4px rgba(30, 87, 153, 0.10), 0 4px 8px -4px rgba(30, 87, 153, 0.06)',
        lg: '0 24px 48px -8px rgba(30, 87, 153, 0.12), 0 8px 16px -8px rgba(30, 87, 153, 0.08)',
        xl: '0 48px 96px -16px rgba(30, 87, 153, 0.14), 0 16px 32px -16px rgba(30, 87, 153, 0.10)',
        'ai': '0 0 0 1px rgba(16, 185, 129, 0.3), 0 4px 16px rgba(16, 185, 129, 0.15)',
        'ai-lg': '0 0 0 2px rgba(16, 185, 129, 0.4), 0 8px 32px rgba(16, 185, 129, 0.2)',
        'inner-sm': 'inset 0 1px 2px 0 rgba(30, 87, 153, 0.05)',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        gutter: '24px',
        margin: '24px',
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'primary-gradient': 'linear-gradient(135deg, #1e5799 0%, #003f7a 100%)',
        'xp-gradient': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        'surface-gradient': 'linear-gradient(180deg, #ffffff 0%, #f3f3f9 100%)',
      },
      animation: {
        'xp-fill': 'xpFill 1s ease-out forwards',
        'pulse-ai': 'pulseAi 2s ease-in-out infinite',
        'streak-pop': 'streakPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'badge-unlock': 'badgeUnlock 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-in': 'fadeIn 0.2s ease-out',
        'skeleton': 'skeleton 1.5s ease-in-out infinite',
      },
      keyframes: {
        xpFill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--xp-percent)' },
        },
        pulseAi: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.4)' },
          '50%': { opacity: '0.85', boxShadow: '0 0 0 8px rgba(16, 185, 129, 0)' },
        },
        streakPop: {
          '0%': { transform: 'scale(0) rotate(-10deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        badgeUnlock: {
          '0%': { transform: 'scale(0.5) rotate(-5deg)', opacity: '0' },
          '60%': { transform: 'scale(1.1) rotate(2deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        skeleton: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}

export default config
