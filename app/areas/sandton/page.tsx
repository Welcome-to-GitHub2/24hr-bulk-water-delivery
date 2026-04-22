import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bulk Water Delivery Sandton | Premium Water Tanker Services",
  description:
    "Fast and reliable bulk water delivery in Sandton for estates, hotels and businesses. Emergency water supply and JoJo tank filling available.",
}

export default function SandtonPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold text-primary">
        Bulk Water Delivery in Sandton
      </h1>

      <p className="mt-6 text-muted-foreground">
        Serving Sandton with reliable bulk water supply for homes,
        businesses, hotels and construction projects.
      </p>
    </main>
  )
}