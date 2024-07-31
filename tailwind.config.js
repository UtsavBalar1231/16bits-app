/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        "10xl": "10rem",
      },
      lineHeight: {
        "10xl": "1.5",
      },
      fontFamily: {
        minecraft: ["Minecraft", "monospace"],
        "minecraft-bold": ["MinecraftBold", "monospace"],
        "press-start-2p": ["Press Start 2P", "monospace"],
        "tiny-5": ["Tiny5", "monospace"],
      },
      colors: {
        black: "#1d2021",
        white: "#ddc7a1",
        "black-absolute": "#141617",
        "white-absolute": "#f9f5d7",
        "contrast-alpha-normal": "#1d2021",
        "contrast-alpha-shadow": "#99999933",
        "default-normal": "#ddc7a1",
        "default-hover": "#d5be98",
        "default-shadow": "#a89984",
        "disabled-normal": "#32302f",
        "disabled-shadow": "#adafbc",
        "primary-normal": "#7daea3",
        "primary-hover": "#73a197",
        "primary-shadow": "#45707a",
        "success-normal": "#a9b665",
        "success-hover": "#98a35d",
        "success-shadow": "#6c782e",
        "warning-normal": "#d8a657",
        "warning-hover": "#c99b50",
        "warning-shadow": "#b47107",
        "error-normal": "#ea6962",
        "error-hover": "#df645e",
        "error-shadow": "#c14a4a",
        base: "#1d2021",
        background: "#ddc7a1",
        "code-00": "#504945",
        "code-01": "#282828",
        "code-02": "#3c3836",
        "code-03": "#32302f",
        "code-04": "#9d0006",
        "code-05": "#cc241d",
        "code-06": "#fb4934",
        "code-07": "#b16139",
        "code-08": "#d75f00",
        "code-09": "#f78c6c",
        "code-0A": "#af3a03",
        "code-0B": "#f4bc87",
        "code-0C": "#e7c547",
        "code-0D": "#79740e",
        "code-0E": "#b5bd68",
        "code-0F": "#f0f075",
        "code-10": "#076678",
        "code-11": "#83a598",
        "code-12": "#8ec07c",
        "code-13": "#204a87",
        "code-14": "#b7b1c4",
        "code-15": "#d3869b",
        "code-16": "#98971a",
      },
    },
    spacing: {
      0.25: "0.0625rem",
      7.5: "1.875rem",
      15: "3.75rem",
    },
    opacity: {
      15: ".15",
    },
    transitionDuration: {
      DEFAULT: "250ms",
    },
    transitionTimingFunction: {
      DEFAULT: "linear",
    },
    zIndex: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
    },
    borderWidth: {
      DEFAULT: "0.0625rem",
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto xl:max-w-[87.5rem]": {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
  important: true,
};
