/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(260, 100%, 60%)",
        accent: "hsl(340, 95%, 60%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(220, 10%, 10%)",
        muted: "hsl(210, 10%, 95%)",
        "muted-foreground": "hsl(210, 10%, 30%)",
      },
      boxShadow: {
        "glow": "0 0 10px rgba(82, 0, 255, 0.4), 0 0 20px rgba(82, 0, 255, 0.2)"
      }
    }
  },
  plugins: [],
};
