import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains-mono': ['JetBrains Mono', 'Helvetica', 'Arial'],
        'juni-bold': ['Junicode Bold', 'Helvetica', 'Arial'],
        'juni-italic': ['Junicode Italic', 'Helvetica', 'Arial'],
        archivo: ['Archivo', 'Helvetica', 'Arial'],
        franklin: ['Franklin Gothic Medium', 'Helvetica', 'Arial'],
        mondwest: ['Mondwest', 'Helvetica', 'Arial'],
        silk: ['Silkscreen', 'Helvetica', 'Arial'],
      },
    },
  },
  plugins: [],
} satisfies Config;
