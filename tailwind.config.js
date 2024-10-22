/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "rgba(71, 49, 211, 1)",
        "custom-yellow": "rgba(255, 232, 110, 1)",
        "custom-link": "rgba(55, 48, 163, 1)",
        "custom-isim": "rgba(67, 56, 202, 1)",
        "custom-daire": "rgba(123, 97, 255, 1)",
        "custom-navbartext": "rgba(107, 114, 128, 1)",
        "custom-toggletext": "rgba(119, 119, 119, 1)",
        "custom-headerdaire": "rgba(238, 235, 255, 1)",
        "custom-mail": "rgba(175, 12, 72, 1)",
        "custom-footer": "rgba(249, 249, 249, 1)",
        "custom-metin": "rgba(107, 114, 128, 1)",
        "custom-github": "rgba(0, 171, 107, 1)",
        "custom-linkedin": "rgba(0, 119, 181, 1)",
        "custom-personal": "rgba(10, 10, 20, 1)",

        "custom-darkmode": "rgba(37, 33, 40, 1)",
        "custom-dark-h3": "rgba(183, 170, 255, 1)",
        "custom-title": "rgba(174, 188, 207, 1)",
        "custom-paragraf": "rgba(255, 255, 255, 1)",
        "custom-dark-footer": "rgba(0, 0, 0, 1)",
        "custom-dark-email": "rgba(186, 178, 231, 1)",
        "custom-dark-personal": "rgba(225, 225, 255, 1)",
        "custom-dark-github": "rgba(23, 209, 139, 1)",
        "custom-dark-linkedin": "rgba(11, 166, 246, 1)",
        "custom-dark-heroButton": "rgba(56, 56, 56, 1)",
        "custom-dark-projeTitle": "rgba(207, 203, 255, 1)",
        "custom-dark-projeTechno": "rgba(143, 136, 255, 1)",
        "custom-dark-daire": "rgba(71, 49, 211, 1)",
        "custom-dark-daireText": "rgba(143, 136, 255, 1)",
        "custom-dark-toggleSwitch": "rgba(217, 217, 217, 1)",
        "custom-dark-toggleDeActive": "rgba(58, 58, 58, 1)",
      },

      backgroundImage: {
        "half-moon":
          "radial-gradient(circle at -25% 50%, transparent 75%, rgba(58, 58, 58, 1) 50%)",
      },

      screens: {
        sm: "300px",
        md: "600px",
      },
    },
  },
  plugins: [],
};
