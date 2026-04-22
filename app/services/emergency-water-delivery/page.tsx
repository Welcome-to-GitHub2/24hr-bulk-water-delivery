import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Emergency Water Delivery Gauteng | 24/7 Bulk Water Supply",
  description:
    "24/7 emergency water delivery across Gauteng for homes, estates, businesses, schools, hospitals and construction sites. Fast response and reliable bulk water supply.",
}

export default function EmergencyWaterDeliveryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary-foreground">
        Emergency Water Supply
      </p>

      <h1 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
        24/7 Emergency Water Delivery in Gauteng
      </h1>

      <p className="mt-6 max-w-4xl text-lg leading-8 text-muted-foreground">
        When water outages disrupt homes, estates, businesses or sites, 24HR Bulk
        Water Delivery provides fast emergency supply across Gauteng. We assist with
        urgent potable water delivery, scheduled backup supply and rapid response for
        short-notice water needs.
      </p>
    </main>
  )
}