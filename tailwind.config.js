const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "rgba(255,255,255,0.87)",
        black: "#1a1a1a",
        neonblue: "#75b6b5",
        grey: "#5d657f",
        orange: "#f4706b",
        pink: "#da616d",
        purple: "#815691",
        lightpurple: "#e4cbf2",
        green: "#162929",
        darkgreen: "#101e1e",
        lightgreen: "#3b4949",
        verylightgreen: "#718b8b",
        neongreen: "#0be291",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
        title: ["var(--font-orbitron)", ...fontFamily.sans],
        mono: "monospace",
      },
      typography: ({ theme }) => ({
        normal: {
          css: {
            "--tw-prose-body": theme("colors.black"),
            "--tw-prose-headings": theme("colors.black"),
            "--tw-prose-lead": theme("colors.black"),
            "--tw-prose-links": theme("colors.black"),
            "--tw-prose-bold": theme("colors.black"),
            "--tw-prose-bullets": theme("colors.grey"),
            "--tw-prose-captions": theme("colors.black"),
            "--tw-prose-code": theme("colors.neonblue"),
            "--tw-prose-pre-code": theme("colors.neonblue"),
            "--tw-prose-pre-bg": theme("colors.green"),
            "--tw-prose-invert-body": theme("colors.white"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.white"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-bullets": theme("colors.verylightgreen"),
            "--tw-prose-invert-captions": theme("colors.white"),
            "--tw-prose-invert-code": theme("colors.neonblue"),
            "--tw-prose-invert-pre-code": theme("colors.neonblue"),
            "--tw-prose-invert-pre-bg": theme("colors.green"),
          },
        },
      }),
      animation: {
        scroll: "scroll 60s linear infinite",
        blur: "blur 1s ease-out",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - 100vw))" },
        },
        blur: {
          "0%": { filter: "blur(5px)", opacity: 0 },
          "100%": { filter: "blur(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
