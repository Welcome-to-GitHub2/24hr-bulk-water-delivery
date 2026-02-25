"use client"

import { motion } from "framer-motion"
import { Droplets, Truck, PartyPopper, Siren } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
  {
    icon: Droplets,
    title: "Potable Drinking Water",
    description:
      "Safe, quality-tested bulk drinking water delivered to your home, office, or community across Gauteng.",
  },
  {
    icon: Truck,
    title: "Construction & Site Supply",
    description:
      "Reliable, on-time water supply for building sites, civil works, and industrial projects throughout Gauteng.",
  },
  {
    icon: PartyPopper,
    title: "Event & Temporary Solutions",
    description:
      "Clean water for festivals, weddings, corporate events, and temporary setups. We keep your guests refreshed.",
  },
  {
    icon: Siren,
    title: "Emergency Bulk Water",
    description:
      "Urgent water delivery when you need it most. Fast-response service for outages, droughts, and emergencies.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
}

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-(family-name:--font-body) text-sm font-medium uppercase tracking-widest text-secondary-foreground">
            What We Offer
          </p>
          <h2 className="mt-2 font-sans text-3xl font-bold text-balance text-primary md:text-4xl">
            Our Water Delivery Services
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-(family-name:--font-body) text-muted-foreground leading-relaxed">
            From everyday needs to urgent supply, we deliver pure bulk water
            across Johannesburg, Pretoria, and all of Gauteng with care and
            reliability.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Card className="group h-full border-border/60 bg-card shadow-sm hover:shadow-md transition-shadow hover:border-secondary/60 cursor-default">
                <CardHeader className="items-center text-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/30 text-secondary-foreground group-hover:bg-secondary/50 transition-colors">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="font-sans text-lg text-card-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="font-(family-name:--font-body) leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
