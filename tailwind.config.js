/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(30 20% 98%)',
        foreground: 'hsl(222 20% 14%)',
        card: 'hsl(0 0% 100%)',
        'card-foreground': 'hsl(222 20% 14%)',
        primary: {
          DEFAULT: 'hsl(16 85% 58%)',
          foreground: 'hsl(0 0% 100%)',
        },
        secondary: {
          DEFAULT: 'hsl(20 40% 96%)',
          foreground: 'hsl(222 20% 14%)',
        },
        muted: {
          DEFAULT: 'hsl(20 40% 96%)',
          foreground: 'hsl(215 15% 47%)',
        },
        accent: {
          DEFAULT: 'hsl(20 40% 96%)',
          foreground: 'hsl(222 20% 14%)',
        },
        border: 'hsl(20 15% 90%)',
        input: 'hsl(20 15% 90%)',
        ring: 'hsl(16 85% 58%)',
        destructive: {
          DEFAULT: 'hsl(0 84% 60%)',
          foreground: 'hsl(0 0% 100%)',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.25s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
