"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Thabang Melefa",
    role: "Construction Manager, Sandton",
    stars: 5,
    quote:
      "24HR Bulk Water has been our go-to water supplier for three major builds in Johannesburg. Always on time, always professional. I wouldn't trust anyone else.",
  },
  {
    name: "Leratong Mokosi",
    role: "Event Planner, Centurion",
    stars: 5,
    quote:
      "We needed 20,000 litres for a weekend festival and they delivered flawlessly. The team was friendly and the water quality was excellent.",
  },
  {
    name: "Kariene van der Mei",
    role: "Homeowner, Midrand",
    stars: 5,
    quote:
      "When our area had a water outage for three days, 24HR Bulk Water saved us. They responded within hours and the price was very fair.",
  },
  {
    name: "Siphokazi Mabena",
    role: "Site Foreman, Pretoria East",
    stars: 4,
    quote:
      "Reliable, consistent, and the driver is always courteous. Our site runs smoothly because of their dependable deliveries.",
  },
  {
    name: "Banele Mbethe",
    role: "Restaurant Owner, Rosebank",
    stars: 5,
    quote:
      "Knowing that a woman-owned business is behind our water supply makes it even more special. Exceptional service, highly recommend!",
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count
              ? "fill-accent text-accent"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-(family-name:--font-body) text-sm font-medium uppercase tracking-widest text-secondary-foreground">
            Trusted Across Gauteng
          </p>
          <h2 className="mt-2 font-sans text-3xl font-bold text-balance text-primary md:text-4xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14"
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            className="mx-auto max-w-5xl"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t) => (
                <CarouselItem
                  key={t.name}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full border-border/60 bg-card shadow-sm">
                    <CardContent className="flex h-full flex-col gap-4 p-6">
                      <StarRating count={t.stars} />
                      <p className="flex-1 font-(family-name:--font-body) text-sm leading-relaxed text-muted-foreground italic">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div>
                        <p className="font-(family-name:--font-body) text-sm font-semibold text-card-foreground">
                          {t.name}
                        </p>
                        <p className="font-(family-name:--font-body) text-xs text-muted-foreground">
                          {t.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-center gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
