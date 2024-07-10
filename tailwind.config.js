/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "rgba(71, 49, 211, 1)", // Kendi adınızı belirlediğiniz renk
        "custom-yellow": "rgba(255, 232, 110, 1)", // Switch düğmesinin açık durumunda kullanılan renk
      },
    },
  },
  plugins: [],
};
