import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /**
         * Luxury blue identity.
         * midnight -> navy -> royal -> electric accent, with silver/white contrast.
         */
        midnight: {
          DEFAULT: '#05070f',
          50: '#0a0e1c',
          100: '#0c1226',
        },
        navy: {
          DEFAULT: '#0b1b3a',
          light: '#102449',
          dark: '#071230',
        },
        royal: {
          DEFAULT: '#1d4ed8',
          light: '#2f6bf0',
          dark: '#1538a6',
        },
        electric: {
          DEFAULT: '#3da9fc',
          light: '#6cc4ff',
          dark: '#1f8fe6',
        },
        silver: {
          DEFAULT: '#c9d4e8',
          light: '#eef3fb',
          muted: '#8a99b8',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(61, 169, 252, 0.18), 0 18px 60px -20px rgba(29, 78, 216, 0.55)',
        'glow-strong': '0 0 40px -6px rgba(61, 169, 252, 0.55), 0 30px 80px -24px rgba(29, 78, 216, 0.6)',
        'inset-edge': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.07)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(61,169,252,0.18), transparent 60%)',
        'blue-grain': 'linear-gradient(165deg, #0b1b3a 0%, #05070f 55%, #071230 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        'slow-pan': {
          '0%': { transform: 'scale(1.08) translate3d(0,0,0)' },
          '100%': { transform: 'scale(1.16) translate3d(-1.5%, -1.5%, 0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.9s ease both',
        'scale-in': 'scale-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'glow-pulse': 'glow-pulse 6s ease-in-out infinite',
        'slow-pan': 'slow-pan 18s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};

export default config;
