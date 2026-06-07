import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Epilogue', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#f7f4ef',
          2: '#f0ece4',
          3: '#e8e2d8',
        },
        ink: {
          DEFAULT: '#1a1814',
          2: '#3d3a34',
        },
        muted: '#8c8680',
        gold: {
          DEFAULT: '#b8962e',
          dim: 'rgba(184,150,46,0.12)',
          border: 'rgba(184,150,46,0.3)',
        },
      },
    },
  },
  plugins: [],
}

export default config
