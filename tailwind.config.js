module.exports = {
   content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontSize: {
            sm: "10px",
            base: "15px",
            xl: "20px",
         },
         colors: {
            primary: "#DC3535",
            secondary: "#D17842",
            white: "#0000000",
            dark: {
               100: "#000000",
               200: "#0C0F14",
               300: "#1f2632",
               400: "#32435a",
               500: "#394e6b",
               600: "#394e6b",
            },
            light: {
               900: "#FFFFFF",
               800: "#FDFDFD",
               850: "#dfdfdf",
               700: "#c8c8c8",
               500: "#AEAEAE",
               400: "#252A32",
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
