import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      colors: {
        white: '#ffffff',
        background: '#050505',
        darkGray: '#121212',
        gray: '#2D2D2D',
        lightGray: '#999999',
        accent: '#8F60FC',
        icon: '#E4E4E4',
      },
  },
  plugins: [],
} satisfies Config;
