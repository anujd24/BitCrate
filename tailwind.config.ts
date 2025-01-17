import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize, FluidThemeConfig} from "fluid-tailwind";

export default {
  content: {files:[
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  extract
},
  theme: {
    fluid: (({ theme }) => ({
      defaultScreens: ["20rem", theme("screens.lg")],
    })) satisfies FluidThemeConfig,
    screens, 
    fontSize,
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        roboto: ['var(--font-roboto)', ],
      },
      colors:{
        "Dark-Charcoal" : "#121212",
        "Vibrant-Purple" : "#3A0CA3",
        "Hot-Pink"  : "#F72585"
      }
    },
  },
  plugins: [fluid],
} satisfies Config;
