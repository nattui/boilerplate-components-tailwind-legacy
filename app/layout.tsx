import type { Metadata } from "next"
import type { PropsWithChildren } from "react"
import { fontsVariables } from "@/app/fonts"
import Topbar from "@/components/web/topbar"
import "@/styles/global.css"

export const metadata: Metadata = {
  description: "Boilerplate Components",
  title: "Boilerplate Components",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${fontsVariables} antialiased`}>
        <Topbar />
        <div className="flex flex-col items-center gap-16 overflow-y-auto py-128">
          {children}
        </div>
      </body>
    </html>
  )
}
