/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "donker-grijs-tekst": "#303030",
        "groen": "#06D6A0",
        "donker-blauw": "#24272C",
        "licht-grijs-tekst": "#9A9898",
        "licht-grijs": "#F1F1F1",
      }
    },
  },
  plugins: [],
}

