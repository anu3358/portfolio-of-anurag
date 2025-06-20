import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Anurag Saini - AI/ML Enthusiast & Engineering Student",
  description:
    "Portfolio of Anurag Saini, a passionate first-year engineering student specializing in AI/ML, showcasing projects, skills, and innovative solutions.",
  keywords:
    "Anurag Saini, AI, ML, Machine Learning, Engineering Student, Portfolio, Python, JavaScript, Arduino, Programming",
  authors: [{ name: "Anurag Saini" }],
  creator: "Anurag Saini",
  openGraph: {
    title: "Anurag Saini - AI/ML Enthusiast & Engineering Student",
    description: "Passionate about solving real-world problems through innovative engineering solutions.",
    url: "https://anuragsaini.dev",
    siteName: "Anurag Saini Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag Saini - AI/ML Enthusiast",
    description: "Engineering student passionate about AI/ML and innovative solutions.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
