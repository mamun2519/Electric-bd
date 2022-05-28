module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#37cdbe",
          secondary: "#f6d860",
          accent: "#37cdbe",
          ptext: "#282828",
          pread: "#444444",
          neutral: "#3d4451",
         
        

          "base-100": "#F3F4F6",
        },
      },
      // "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
