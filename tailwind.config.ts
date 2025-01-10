import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@my-company/tailwind-components/**/*.{ts,js,tsx,jsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
        "16/9": "16 / 9",
      },
      backgroundImage: {
        "bar-gradient": `linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.85) 28%,
          white 100%
        )`,
      },
      backdropBrightness: {
        68: ".68",
      },
      screens: {
        xxs: "376px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1366px",
        "2xl": "1440px",
        "3xl": "1600px",
      },
      fontFamily: {
        anton: ["Anton"],
      },
      colors: {
        // ! Legacy Colors
        baseBlack: "#2A3439",
        primary: "#3eb368",
        primaryDark: "#37a05d",
        primaryLight: "#5dc783",
        blue: "#1C98F7",
        blueDark: "#088CF1",
        textGray: "#909090",
        red: "#DE2D2D",
        lightRed: "#F26F55",
        orange: "#FFAB53",
        yellow: "#FEBB02",

        // ! Legacy social networks colors
        facebook: "#3B5998",
        google: "#DD4B39",
        twitter: "#55ACEE",
        pinterest: "#CC2127",
        instagram: "#8A3AB9",

        // * Standardized color

        transparent: "transparent",
        translucent: "rgba(255, 255, 255, 0.24)",

        // * Primary
        "primary-clicked": "#256b3e",
        "primary-hover": "#328f53",
        "primary-default": "#3eb368",
        "primary-light": "#b2e1c3",
        "primary-lighter": "#d8f0e1",
        "primary-lightest": "#ecf8f0",

        // * Secondary
        "secondary-clicked": "#115b94",
        "secondary-hover": "#167ac6",
        "secondary-default": "#1c98f7",

        // * Neutral
        "neutral-black": "#111928",
        "neutral-base": "#374151",
        "neutral-sub-text-alt": "#4B5563",
        "neutral-sub-text": "#6B7280",
        "neutral-disabled": "#D1D5DB",
        "neutral-light": "#E5E7EB",
        "neutral-lighter": "#F3F4F6",
        "neutral-lightest": "#F9FAFB",
        "pure-white": "#ffffff",
        "pure-black": "#000000",

        // * Special
        "accent-orange": "#FFAB53",
        "accent-orange-darker": "#ff9220",
        "accent-red-base": "#E02424",
        "accent-red-light": "#F05252",
        "accent-red-lighter": "#FBD5D5",
        "accent-red-lightest": "#FDF2F2",

        // non-standard color
        "yellow-base": "#ffce1f",
      },
      textStroke: {
        1: "1px",
        2: "2px",
        3: "3px",
      },
      fontSize: {
        // * title

        "title-1": [
          "3rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "title-2": [
          "2.5rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "title-3": [
          "2.25rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "title-4": [
          "2rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "title-5": [
          "1.5rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],

        // * body

        "body-big-bold": [
          "1.25rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "body-big": [
          "1.25rem",
          {
            fontWeight: 400,
            lineHeight: "1.5",
          },
        ],
        "body-base-bold": [
          "1rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "body-base-medium": [
          "1rem",
          {
            fontWeight: 500,
            lineHeight: "1.5",
          },
        ],
        "body-base": [
          "1rem",
          {
            fontWeight: 400,
            lineHeight: "1.5",
          },
        ],
        "body-base-italic": [
          "1rem",
          {
            fontWeight: 400,
            lineHeight: "1.5",
          },
        ],
        "body-small-bold": [
          "0.875rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "body-small-medium": [
          ".875rem",
          {
            fontWeight: 500,
            lineHeight: "1.5",
          },
        ],
        "body-small": [
          "0.875rem",
          {
            fontWeight: 400,
            lineHeight: "1.5",
          },
        ],
        "body-small-italic": [
          "0.875rem",
          {
            fontWeight: 400,
            lineHeight: "1.5",
          },
        ],
        "body-small-strikethrough": [
          "0.875rem",
          {
            fontWeight: 500,
            lineHeight: "1.5",
          },
        ],
        "body-tiny-bold": [
          "0.75rem",
          {
            fontWeight: 700,
            lineHeight: "1.5",
          },
        ],
        "body-tiny-medium": [
          "0.75rem",
          {
            fontWeight: 500,
            lineHeight: "1.5",
          },
        ],
        "body-tiny": [
          "0.75rem",
          {
            fontWeight: 400,
            lineHeight: "1.5",
          },
        ],

        // * button

        "button-base": [
          "1rem",
          {
            fontWeight: 500,
            lineHeight: "1.5",
          },
        ],
        "button-small": [
          "0.875rem",
          {
            fontWeight: 500,
            lineHeight: "1.5",
          },
        ],
      },
      spacing: {
        93: "23.25rem",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        base: "0 6px 16px 0 rgba(0, 0, 0, 0.16)",
        light: "0 6px 24px 0 rgba(0, 0, 0, 0.12)",
        lighter: "0 6px 24px 0 rgba(0, 0, 0, 0.08)",
        lightest: "0 6px 24px 0 rgba(0, 0, 0, 0.04)",
      },
      dropShadow: {
        base: "0 6px 16px rgba(0, 0, 0, 0.16)",
        light: "0 6px 24px rgba(0, 0, 0, 0.12)",
        lighter: "0 6px 24px rgba(0, 0, 0, 0.08)",
        lightest: "0 6px 24px rgba(0, 0, 0, 0.04)",
      },
    },
    keyframes: {
      show: {
        from: {
          height: "0",
        },
        to: {
          height: "100%",
        },
      },
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },

      "slide-in": {
        "0%": {
          transform: "translateY(100%)",
          opacity: "0",
        },
        "100%": {
          transform: "translateY(0%)",
          opacity: "1",
        },
      },

      "slide-right-to-left": {
        "0%": {
          transform: "translateX(100%)",
          opacity: "0",
        },
        "100%": {
          transform: "translateX(0%)",
          opacity: "1",
        },
      },
      "slide-left-to-right": {
        "0%": {
          transform: "translateX(0%)",
          opacity: "0",
        },
        "100%": {
          transform: "translateX(100%)",
          opacity: "1",
        },
      },
      blinker: {
        "0%": {
          opacity: "1",
        },
        "50%": {
          opacity: "0",
        },

        "100%": {
          opacity: "1",
        },
      },

      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },

      "non-spin": {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(-360deg)" },
      },
      "scale-in": {
        "0%": {
          transform: "scale(0)",
          opacity: "0",
        },
        "100%": {
          transform: "scale(1)",
          opacity: "1",
        },
      },

      "scale-out": {
        "0%": {
          transform: "translateY(-100%)",
          opacity: "0",
        },
        "100%": {
          transform: "translateY(0)",
          opacity: "1",
        },
      },

      shakeX: {
        "0%, 100%": { transform: "translate3d(0, 0, 0)" },
        "10%, 30%, 50%, 70%, 90%": { transform: "translate3d(-10px, 0, 0)" },
        "20%, 40%, 60%, 80%": { transform: "translate3d(10px, 0, 0)" },
      },

      "slide-up": {
        from: {
          transform: "translateY(200%)",
          opacity: "0",
        },
        to: {
          transform: "translateY(0)",
          opacity: "1",
        },
      },
    },

    animation: {
      "slide-up": "slide-up 0.7s forwards",
      spin: "spin 1s linear infinite",
      "non-spin": "non-spin 1s linear infinite",
      blink: "blinker 1s linear infinite",
      "slide-in": "slide-in 500ms ease-in;",
      "slide-right-to-left": "slide-right-to-left 150ms ease-in",
      "slide-left-to-right": "slide-left-to-right 150ms ease-in",
      "scale-in": "scale-in 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      "scale-out": "scale-out 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      "shake-x": "shakeX 1s ease-in-out",
      show: "show 0.4s ease-in-out",
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugin(({ addComponents }: { addComponents: any }) => {
      addComponents({
        ".container": {
          "@apply mx-auto max-w-[1180px] px-4 md:px-5 lg:px-6": {},
        },
        ".c-container": {
          "@apply mx-auto max-w-[1376px] px-4 sm:px-6 xl:px-20 3xl:px-0": {},
        },
        ".container-fluid": {
          "@apply max-w-full w-full lg:px-5": {},
        },
      });
    }),

    plugin(({ addUtilities }) => {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",
          /* Firefox */
          "scrollbar-width": "none",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-light": {
          "&::-webkit-scrollbar": {
            width: "5px",
            marginTop: "10px",
            height: "6px",
            background: "#E4E5E5",
            border: "4px solid transparent",
            borderRadius: "8px",
            cursor: "pointer",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#3eb368",
            border: "4px solid transparent",
            borderRadius: "8px",
            backgroundClip: "paddingBox",
          },
        },
        ".text-stroke": {
          color: "transparent",
          WebkitTextStroke: "1px #525252",  // Stroke color
          "-webkit-background-clip": "text",
        },
        ".group:hover .text-stroke": {
          WebkitTextStroke: "1px #000",  // Black stroke when hovered
          color: "black",  // Text color when hovered
        },
      });
    }),
  ],
};
export default config;
