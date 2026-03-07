"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/hero-water.jpg"
        alt="Crystal clear water with gentle waves"
        fill
        className="object-cover"
        priority
        quality={75}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-(family-name:--font-body) text-sm font-medium uppercase tracking-widest text-secondary"
        >
          24HR Bulk Water Delivery &middot; Serving All of Gauteng
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-sans text-4xl font-bold leading-tight text-balance text-white md:text-5xl lg:text-6xl"
        >
          Pure Bulk Water Delivered with Care Across Gauteng
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl font-(family-name:--font-body) text-base leading-relaxed text-pretty text-white/90 md:text-lg"
        >
          Reliable, fast bulk water supply for homes, construction, events &amp;
          businesses in Johannesburg, Pretoria, and all of Gauteng.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/80 text-base font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <a href="#contact">Get a Quote Today</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-white/10 text-white hover:bg-white/20 backdrop-blur text-base font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <a href="tel:+27682805455">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Bottom curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80V30C240 0 480 0 720 30C960 60 1200 60 1440 30V80H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
