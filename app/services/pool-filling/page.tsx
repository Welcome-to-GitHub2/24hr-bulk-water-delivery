import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Swimming Pool Filling Gauteng | Bulk Water Delivery",
  description:
    "Professional pool filling services across Gauteng. Fast, clean and reliable water delivery for residential and commercial pools.",
}

export default function PoolPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold text-primary">
        Swimming Pool Filling Services
      </h1>

      <p className="mt-6 text-muted-foreground">
        Fast pool filling services across Gauteng with reliable
        bulk water delivery.
      </p>
    </main>
  )
}