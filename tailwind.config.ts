import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '1.5rem',
        lg: '2.5rem',
        xl: '3rem',
        '2xl': '3rem',
      },
      screens: {
        '2xl': '1440px'
      }
    },
    extend: {
      fontFamily: {
        // Headlines — Inter Tight, bold and tight
        display: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        // Body — Roboto
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif'],
        // Labels, numerals, metadata
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        // Rare emphasis
        accent: ['Fraunces', 'Georgia', 'serif'],
        // Legacy aliases retained so existing components keep rendering
        'serif-accent': ['Fraunces', 'Georgia', 'serif'],
        founders: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        null: ['Roboto', 'system-ui', 'sans-serif'],
      },

      colors: {
        // ENOVA brand palette
        brand: {
          deep: '#281C0B',      // deep brown
          gold: '#F6D3A2',      // warm gold
          cream: '#FDEED8',     // soft cream
          ivory: '#FFF9F1',     // soft ivory
          rich: '#3A2915',      // rich brown
          muted: '#6E5940',     // muted brown
          stone: '#C8B59C',     // warm stone
          black: '#15110C',     // near black
          copper: '#A56735',    // burnished copper accent
          olive: '#6A6B46',     // muted olive accent
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        neonGreen: '#F6D3A2',
        darkTeal: '#281C0B',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up':   { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'reveal-up':      { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        'rule-in':        { from: { transform: 'scaleX(0)' }, to: { transform: 'scaleX(1)' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
        'reveal-up':      'reveal-up 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        'rule-in':        'rule-in 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
