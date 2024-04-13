module.exports = {
   content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontSize: {
            sm: "0.8rem",
            base: "1rem",
            xl: "1.25rem",
            "2xl": "1.563rem",
            "3xl": "1.953rem",
            "4xl": "2.441rem",
            "5xl": "3.052rem",
         },
         colors: {
            primary: "#DC3535",
            secondary: "#D17842",
            dark: {
               100: "#000000",
               200: "#0C0F14",
               300: "#52555A",
               400: "#212734",
               500: "#0C0F14",
            },
            light: {
               900: "#FFFFFF",
               800: "#AEAEAE",
               850: "#FDFDFD",
               700: "#DCE3F1",
               500: "#7B8EC8",
               400: "#858EAD",
            },
         },
         backgroundImage: {
            "auth-dark": "url('/assets/images/auth-dark.png')",
            "auth-light": "url('/assets/images/auth-light.png')",
         },
      },
   },
   plugins: [],
};
// babel.config.js
