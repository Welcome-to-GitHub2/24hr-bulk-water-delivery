"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="24HR Bulk Water Delivery logo"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <span className="font-sans text-lg font-bold leading-tight tracking-tight text-primary">
            24HR Bulk Water
            <span className="block text-xs font-semibold tracking-widest text-accent">DELIVERY</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-(family-name:--font-body) text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-secondary text-secondary-foreground hover:bg-secondary/20"
          >
            <a href="tel:+27682805455">
              <Phone className="mr-1.5 h-4 w-4" />
              Call Now
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/80"
          >
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <ul className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-(family-name:--font-body) text-base text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="flex flex-col gap-2 pt-2">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-secondary text-secondary-foreground"
                >
                  <a href="tel:+27682805455">
                    <Phone className="mr-1.5 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/80"
                >
                  <a href="#contact" onClick={() => setMobileOpen(false)}>
                    Get a Quote
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
