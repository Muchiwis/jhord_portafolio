/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        customBounce: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-10%)" },
        },
      },
      animation: {
        "bounce-custom": "customBounce 2s infinite",
      },
    },
  },
  plugins: [],
};
