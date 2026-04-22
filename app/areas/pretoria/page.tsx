import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Bulk Water Delivery Pretoria | 24/7 Emergency Water Supply",
  description:
    "Reliable bulk water delivery in Pretoria for homes, estates, construction sites, schools and businesses. Fast emergency water supply, JoJo tank filling and pool filling across Pretoria.",
}

export default function PretoriaPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
        <h1 className="text-4xl font-bold text-primary">
          Bulk Water Delivery in Pretoria
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">
          We provide fast and reliable bulk water delivery in Pretoria for homes,
          construction sites, estates and businesses.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
        <h2 className="text-2xl font-bold text-primary">
          Services in Pretoria
        </h2>

        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li>Emergency water delivery</li>
          <li>JoJo tank filling</li>
          <li>Swimming pool filling</li>
          <li>Construction water supply</li>
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 lg:px-8">
        <Link href="/" className="text-primary underline">
          Back to Home
        </Link>
      </section>
    </main>
  )
}