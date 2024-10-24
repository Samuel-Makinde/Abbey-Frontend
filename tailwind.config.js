/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: ['motion-safe'],
      darkMode: 'class',
      colors: {
        primary1: "#FFFFFF",
        primary2: "#000000",
        primary3: "#9F68FE",
        primary4: "#2D1C4D",
        primary5: "#7D7C81",
        primary6: "#E7E6EA",
        primary7: "#0AAA10",
        primary8: "#8A8A8B",
        primary9: "#FCFCFCE5",
        primary10:"#9979D1",
        sec1: "#F4F1FF",
        sec2: "#D1D1D6",
        sec3: "#222020",
        sec4: "#F2F2F2",
        sec5: "#FFD700",
        sec6: "#C8C8D0",
        sec7: "#EDECEF",
        sec8: "#F60002",
        sec9: "#FFE4AD",
        sec10: "#F8B116",
        ter1: "#f3f4f6",
        ter2: "#374151",
        ter3: "#1f2937",
        ter4: "#6b7280",
        grad12: "#005EFF",
        grad22: "#BB3CFF"
      },
      fontFamily: {
        'body': ['Poppins', 'sans-serif'],
        'sans': ['Outfit', 'sans'],
      }
    },
  },
  plugins: [],
}

