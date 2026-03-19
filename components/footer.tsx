import Image from "next/image"
import { Phone, Mail, Facebook, MessageCircle } from "lucide-react"

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const phoneNumber = "+27682805455"  
  const email = "24hrbulkwaterdelivery@gmail.com"
  const facebookUrl = "https://www.facebook.com/share/1B1fmaaApv/"  

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="24HR Bulk Water Delivery logo"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <span className="font-sans text-lg font-bold leading-tight">
                24HR Bulk Water
                <span className="block text-xs font-semibold tracking-widest text-secondary">DELIVERY</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs font-(family-name:--font-body) text-sm leading-relaxed text-primary-foreground/70">
              Proudly Gauteng-based, women-owned & operated. Delivering pure, quality bulk water across the province with care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-(family-name:--font-body) text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-(family-name:--font-body) text-sm text-primary-foreground/70 hover:text-secondary transition-colors hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="font-(family-name:--font-body) text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Contact Us
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a
                  href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                  className="font-(family-name:--font-body) text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  {phoneNumber}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a
                  href={`mailto:${email}`}
                  className="font-(family-name:--font-body) text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  {email}
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-5">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent("Hi! I'd like a bulk water quote please 💧")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="font-(family-name:--font-body) text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} 24HR Bulk Water Delivery. All rights reserved. Proudly Gauteng-based • Women-owned & operated • Serving Johannesburg, Pretoria & surrounds 24/7.
          </p>
        </div>
      </div>
    </footer>
  )
}