/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        forest: {
        
          "primary": "#2a303c",
                  
          "secondary":  "#1f232c",
                  
          "accent": "#1FB2A6",
                  
          "neutral": "#c4cfde",
                  
          "base-100": "#2A303C",
                      
          "success": "#36D399",
                  
          "warning": "#ff014f",
                  
          
        },
      },
       "dark",
      "luxury",
      "black",
      "night",
      "light",
      "forest"
    ],

    // themes: [
    //   {
    //     mytheme: {
    //       primary: "#212428",
    //       secondary: "#202327",
    //       accent: "#37cdbe",
    //       neutral: "#c4cfde",
    //       danger:"#ff014f",

    //       "base-100": "#ffffff",
    //     },
    //   },
    //   "dark",
    //   "luxury",
    //   "black",
    //   "night",
    //   "light",
    // ],
  },

 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
