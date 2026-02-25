import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import WhatsAppFloating from "@/components/WhatsAppFloating"  // ← Add this import
import "./globals.css"

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const _lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "24HR Bulk Water Delivery | Bulk Water Supply Gauteng",
  description:
    "Reliable 24HR bulk water delivery across Gauteng, South Africa. Potable drinking water, construction site supply, event water solutions & emergency delivery. Serving Johannesburg, Pretoria & all of Gauteng around the clock.",
  keywords: [
    "bulk water supply Gauteng",
    "water delivery Johannesburg",
    "potable bulk water Pretoria",
    "bulk water delivery South Africa",
    "construction water supply",
    "event water delivery",
    "emergency water Gauteng",
    "24hr bulk water delivery",
  ],
  openGraph: {
    title: "24HR Bulk Water Delivery | Bulk Water Supply Gauteng",
    description:
      "24HR Bulk Water Delivery - Pure bulk water delivered with care across Gauteng. Reliable, fast 24/7 delivery for homes, construction, events & businesses.",
    type: "website",
    locale: "en_ZA",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-(family-name:--font-body) antialiased">
        {children}
        <Toaster richColors position="top-right" />
        <Analytics />
        <WhatsAppFloating />  {/* ← Add this line */}
      </body>
    </html>
  )
}