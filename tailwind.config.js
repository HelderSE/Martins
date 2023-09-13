/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-page": "url('../public/images/Martins.jpg')",
        "padaria-i": "url('../public/images/Padaria.jpg')",
        "caixa-i": "url('../public/images/Caixa.jpg')",
        "queijo-i": "url('../public/images/cheese.jpg')",
        "chourico-i": "url('../public/images/chourizo.jpg')",
        "chourico-e-queijo": "url('../public/images/chourico-e-queijo.jpg')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(-22%)" },
        },
      },
      animation: {
        "scroll-infinite": "marquee 35s linear infinite",
      },
      dropShadow: {
        strDrop: "2px 2px 2px rgba(0, 0, 0, .5)",
        smDrop: "1px 1px 1px rgba(0, 0, 0, .2)",
      },
    },
  },
  plugins: [],
};
