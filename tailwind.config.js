/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "rgba(71, 49, 211, 1)", // Kendi adınızı belirlediğiniz renk
        "custom-yellow": "rgba(255, 232, 110, 1)", // Switch düğmesinin açık durumunda kullanılan renk
        "custom-link": "rgba(55, 48, 163, 1)",
        "custom-isim": "rgba(67, 56, 202, 1)",
        "custom-daire": "rgba(123, 97, 255, 1)",
        "custom-navbartext": "rgba(107, 114, 128, 1)",
        "custom-toggletext": "rgba(119, 119, 119, 1)",
        "custom-headerdaire": "rgba(238, 235, 255, 1)",
      },
    },
  },
  plugins: [],
};
