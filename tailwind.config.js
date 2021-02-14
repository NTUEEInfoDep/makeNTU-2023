module.exports = {
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
    options: {
      whitelist: [],
    },
  },
  theme: {
    fontFamily: {
      body: ["Roboto", "sans-serif"],
      display: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0081A8",
        secondary: "#CC0049",
        tertiary: "#333333",
        error: "#FF6363",
        white: "#FFFFFF",
        lightGray: "#F9F9F9",
        gray: "#F3F3F3",
        transparent: "transparent",
      },
    },
  },
  variants: {},
  plugins: [],
};
