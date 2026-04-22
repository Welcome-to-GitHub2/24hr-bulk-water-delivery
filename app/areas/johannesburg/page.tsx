import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Bulk Water Delivery Johannesburg | 24/7 Water Tanker Services",
  description:
    "Reliable bulk water delivery in Johannesburg for homes, estates, construction sites and businesses. Fast emergency supply, JoJo tank filling and pool filling across Johannesburg.",
  keywords: [
    "bulk water delivery Johannesburg",
    "water tanker Johannesburg",
    "JoJo tank filling Johannesburg",
    "emergency water Johannesburg",
    "pool filling Johannesburg",
  ],
}

export default function JohannesburgPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
      <h1 className="text-4xl font-bold text-primary">
        Bulk Water Delivery in Johannesburg
      </h1>

      <p className="mt-6 text-lg text-muted-foreground">
        We provide fast and reliable bulk water delivery across Johannesburg,
        including Sandton, Randburg, Roodepoort, Fourways and surrounding areas.
        Whether you need emergency water, JoJo tank filling or pool filling,
        we are available 24/7.
      </p>

      <div className="mt-8 flex gap-4">
        <a href="tel:+27682805455" className="bg-primary text-white px-6 py-3 rounded-xl">
          Call Now
        </a>
        <a href="https://wa.me/27682805455" className="bg-accent px-6 py-3 rounded-xl">
          WhatsApp
        </a>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold">Services in Johannesburg</h2>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li>Emergency water delivery</li>
          <li>JoJo tank filling</li>
          <li>Swimming pool filling</li>
          <li>Construction water supply</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold">Related Pages</h2>
        <div className="flex flex-wrap gap-4 mt-4">
          <Link href="/areas/pretoria" className="underline">Pretoria</Link>
          <Link href="/areas/centurion" className="underline">Centurion</Link>
          <Link href="/services/emergency-water-delivery" className="underline">Emergency Water</Link>
        </div>
      </div>
    </main>
  )
}