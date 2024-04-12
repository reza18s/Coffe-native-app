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
               200: "#252A32",
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
         boxShadow: {
            "light-100":
               "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px r",
            "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
            "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
            "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
            "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
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
