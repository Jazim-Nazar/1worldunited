import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: 'var(--color-brand-blue)',
          red: 'var(--color-brand-red)',
          black: 'var(--color-brand-black)',
        },
        surface: {
          page: 'var(--color-surface-page)',
          muted: 'var(--color-surface-muted)',
          card: 'var(--color-surface-card)',
          dark: 'var(--color-brand-black)',
        },
        ink: {
          DEFAULT: 'var(--color-ink)',
          soft: 'var(--color-ink-soft)',
          muted: 'var(--color-ink-muted)',
          inverse: 'var(--color-ink-inverse)',
        },
        line: {
          DEFAULT: 'var(--color-line)',
          strong: 'var(--color-line-strong)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Bebas Neue', 'Impact', 'sans-serif'],
        body: ['var(--font-body)', 'Hanken Grotesk', 'Arial', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(3.5rem, 10vw, 7.5rem)', { lineHeight: '0.92', letterSpacing: '0' }],
        section: ['clamp(2.35rem, 5vw, 4rem)', { lineHeight: '0.95', letterSpacing: '0' }],
        stat: ['clamp(3.4rem, 6vw, 5rem)', { lineHeight: '0.9', letterSpacing: '0' }],
        label: ['0.625rem', { lineHeight: '0.75rem', letterSpacing: '0.12em' }],
      },
      spacing: {
        container: '1440px',
        section: '7.5rem',
        'section-sm': '5rem',
      },
      borderRadius: {
        industrial: 'var(--radius-industrial)',
      },
      boxShadow: {
        hard: '0 0 0 1px rgba(10,10,10,0.08)',
      },
    },
  },
  plugins: [],
}

export default config
