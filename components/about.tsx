"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ShieldCheck, Clock, MapPin, Leaf } from "lucide-react"

const highlights = [
  { icon: MapPin, label: "Gauteng-Only Service" },
  { icon: ShieldCheck, label: "Quality Assured" },
  { icon: Clock, label: "Fast Response" },
  { icon: Leaf, label: "Eco-Conscious" },
]

export function About() {
  return (
    <section id="about" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl shadow-lg brand-image-wrap"
          >
            <Image
              src="/images/about-team.jpg"
              alt="Founder of 24HR Bulk Water Delivery standing proudly near a water delivery truck"
              width={640}
              height={480}
              className="h-auto w-full object-cover brand-image"
              quality={85}
            />

            {/* Existing border ring (kept) */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-border/20 ring-inset" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="font-(family-name:--font-body) text-sm font-medium uppercase tracking-widest text-secondary-foreground">
              About Us
            </p>

            <h2 className="mt-2 font-sans text-3xl font-bold text-balance text-primary md:text-4xl">
              Delivering More Than Just Water
            </h2>

            <p className="mt-6 font-(family-name:--font-body) text-base leading-relaxed text-muted-foreground">
              Founded and proudly run by a passionate Gauteng entrepreneur, we
              deliver more than just water &mdash; we deliver reliability, care
              and peace of mind. Every load is quality-tested and transported
              with the utmost professionalism, because your trust matters to us.
            </p>

            <p className="mt-4 font-(family-name:--font-body) text-base leading-relaxed text-muted-foreground">
              As a women-owned business, we bring a personal touch to every
              delivery. We understand the importance of clean water for your
              family, your project, or your event, and we treat every order with
              the same level of care.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 shadow-sm"
                >
                  <h.icon className="h-5 w-5 shrink-0 text-secondary-foreground" />
                  <span className="font-(family-name:--font-body) text-sm font-medium text-card-foreground">
                    {h.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}