import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bulk Water Delivery Midrand | Emergency Water Supply 24/7",
  description:
    "Reliable bulk water delivery in Midrand. Emergency water, JoJo tank filling and construction water supply available 24/7.",
}

export default function MidrandPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold text-primary">
        Bulk Water Delivery in Midrand
      </h1>

      <p className="mt-6 text-muted-foreground">
        We provide 24/7 bulk water delivery across Midrand for homes,
        construction sites and businesses.
      </p>
    </main>
  )
}