import { Geist, JetBrains_Mono } from "next/font/google"

const display = Geist({
  subsets: ["latin"],
  variable: "--font-display",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontsVariables = [
  sans.variable,
  display.variable,
  mono.variable,
].join(" ")
