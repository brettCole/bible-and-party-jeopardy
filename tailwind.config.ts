import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'jeopardyYellow': '#FFCC00'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        gyparody: ['var(--font-gyparody']
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'synthwave',
      'aqua'
    ],
    darkTheme: 'synthwave',
    base: true
  },
};
export default config;
