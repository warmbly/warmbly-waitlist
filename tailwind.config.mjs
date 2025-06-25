/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'ai-glow': '0 0 10px #f0f, 0 0 20px #0ff, 0 0 30px #f0f',
      },
    },
  },
  plugins: [],
};