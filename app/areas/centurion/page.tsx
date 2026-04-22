import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bulk Water Delivery Centurion | Fast Water Supply 24/7",
  description:
    "Bulk water delivery in Centurion for homes, estates and construction sites. Reliable JoJo tank filling, emergency water supply and pool filling services.",
}

export default function CenturionPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold text-primary">
        Bulk Water Delivery in Centurion
      </h1>

      <p className="mt-6 text-muted-foreground">
        We deliver bulk water across Centurion including residential estates,
        construction sites and commercial properties. Fast response and reliable service.
      </p>

      <div className="mt-8 flex gap-4">
        <a href="tel:+27682805455" className="bg-primary text-white px-6 py-3 rounded-xl">
          Call Now
        </a>
        <a href="https://wa.me/27682805455" className="bg-accent px-6 py-3 rounded-xl">
          WhatsApp
        </a>
      </div>
    </main>
  )
}