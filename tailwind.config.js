/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundImage: "url('/assets/myImage.png')",
      },
      fonts: {
        primary: [],
      },
      backgroundColor: {
        primary: "#ff6000",
        secondary: "#3D3F3C",
        cream: "#F6F6F6",
      },
      borderColor: {
        primary: "#ff6000",
        secondary: "#3D3F3C",
      },
      textColor: {
        primary: "#ff6000",
        secondary: "#3D3F3C",
      },
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "960px",
          xl: "1024px",
          "2xl": "1280px",
          "3xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};
