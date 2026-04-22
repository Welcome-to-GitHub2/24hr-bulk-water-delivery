import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "JoJo Tank Filling Gauteng | Bulk Water Supply",
  description:
    "Professional JoJo tank filling services across Gauteng. Fast and reliable bulk water delivery for homes, estates and businesses.",
}

export default function JojoPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold text-primary">
        JoJo Tank Filling Services
      </h1>

      <p className="mt-6 text-muted-foreground">
        We provide fast JoJo tank filling across Gauteng with clean,
        potable water for homes, estates and businesses.
      </p>
    </main>
  )
}