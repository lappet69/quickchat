/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      colors: {
        headingColor: "#2e2e2e",
        textColor: "#4F4F4F",
        divider: "#828282",
        primary: "#2F80ED",
        seacrhBg: "#4f4f4f",
        chatInbox: "#262626",
        cardBg: "#ebf2e8",
        homeBg: "#eaeaea",
      },
    },
  },
  plugins: [],
};
