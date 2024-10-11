import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        clarendon: ['Clarendon', 'Helvetica', 'Arial'],
        cheyenne: ['Cheyenne', 'Helvetica', 'Arial'],
        'jetbrains-mono': ['JetBrains Mono', 'Helvetica', 'Arial'],
        'juni-bold': ['Junicode Bold', 'Helvetica', 'Arial'],
        'juni-italic': ['Junicode Italic', 'Helvetica', 'Arial'],
        archivo: ['Archivo', 'Helvetica', 'Arial'],
        franklin: ['Franklin Gothic Medium', 'Helvetica', 'Arial'],
        mondwest: ['Mondwest', 'Helvetica', 'Arial'],
        silk: ['Silkscreen', 'Helvetica', 'Arial'],
      },
      spacing: {
        500: '31.25rem',
        560: '35rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
