"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Send, Loader2, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[0-9+\-() ]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  location: z.string().min(2, "Delivery location is required"),
  volume: z.string().min(1, "Please select a volume"),
  message: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const volumes = [
  "5,000 Litres",
  "10,000 Litres",
  "20,000 Litres",
  "30,000+ Litres",
]

// ← PASTE YOUR REAL FORM BOLD ENDPOINT HERE
const FORM_ENDPOINT = "https://formbold.com/s/35ObE"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      location: "",
      volume: "",
      message: "",
    },
  })

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      // Convert object to FormData (FormBold expects this for POST)
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value as string)
        }
      })

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        // No need for headers: FormBold handles multipart/form-data automatically
      })

      if (response.ok) {
        toast.success("Quote request sent! We'll be in touch shortly.", {
          description: `Thank you, ${data.name}. We received your request for ${data.volume}.`,
        })
        reset()
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("Something went wrong", {
        description: "Please try again or contact us directly via WhatsApp/phone.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-(family-name:--font-body) text-sm font-medium uppercase tracking-widest text-secondary-foreground">
            Get In Touch
          </p>
          <h2 className="mt-2 font-sans text-3xl font-bold text-balance text-primary md:text-4xl">
            Request a Free Quote
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-(family-name:--font-body) text-muted-foreground leading-relaxed">
            Tell us what you need and we will get back to you with a
            competitive quote. No obligation, no hassle.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          {/* Contact info - unchanged */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/30 text-secondary-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-(family-name:--font-body) text-sm font-semibold text-foreground">
                  Phone / WhatsApp
                </p>
                <a
                  href="tel:+27000000000"
                  className="font-(family-name:--font-body) text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +27 (0) 00 000 0000
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/30 text-secondary-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-(family-name:--font-body) text-sm font-semibold text-foreground">
                  Email
                </p>
                <a
                  href="mailto:info@24hrbulkwater.co.za"
                  className="font-(family-name:--font-body) text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@24hrbulkwater.co.za
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/30 text-secondary-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-(family-name:--font-body) text-sm font-semibold text-foreground">
                  Service Area
                </p>
                <p className="font-(family-name:--font-body) text-sm text-muted-foreground">
                  All of Gauteng &mdash; Johannesburg, Pretoria, Midrand,
                  Centurion, Sandton &amp; surrounds
                </p>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="mt-2 overflow-hidden rounded-xl shadow-sm">
              <iframe
                title="24HR Bulk Water Delivery service area - Gauteng, South Africa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459370.6648842608!2d27.747544!3d-26.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sGauteng%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form - upgraded submit handling */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl bg-card p-6 shadow-sm lg:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="name"
                    className="font-(family-name:--font-body) text-sm font-medium text-card-foreground"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="e.g. Thandi Nkosi"
                    {...register("name")}
                    className="font-(family-name:--font-body)"
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="phone"
                    className="font-(family-name:--font-body) text-sm font-medium text-card-foreground"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+27 00 000 0000"
                    {...register("phone")}
                    className="font-(family-name:--font-body)"
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="email"
                    className="font-(family-name:--font-body) text-sm font-medium text-card-foreground"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.co.za"
                    {...register("email")}
                    className="font-(family-name:--font-body)"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Location */}
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="location"
                    className="font-(family-name:--font-body) text-sm font-medium text-card-foreground"
                  >
                    Delivery Location
                  </Label>
                  <Input
                    id="location"
                    placeholder="e.g. Sandton, Johannesburg"
                    {...register("location")}
                    className="font-(family-name:--font-body)"
                  />
                  {errors.location && (
                    <p className="text-xs text-destructive">
                      {errors.location.message}
                    </p>
                  )}
                </div>

                {/* Volume */}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <Label className="font-(family-name:--font-body) text-sm font-medium text-card-foreground">
                    Volume Needed
                  </Label>
                  <Select
                    onValueChange={(val) => setValue("volume", val)}
                  >
                    <SelectTrigger className="font-(family-name:--font-body)">
                      <SelectValue placeholder="Select volume..." />
                    </SelectTrigger>
                    <SelectContent>
                      {volumes.map((v) => (
                        <SelectItem key={v} value={v} className="font-(family-name:--font-body)">
                          {v}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.volume && (
                    <p className="text-xs text-destructive">
                      {errors.volume.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <Label
                    htmlFor="message"
                    className="font-(family-name:--font-body) text-sm font-medium text-card-foreground"
                  >
                    Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Any additional details about your delivery needs..."
                    rows={4}
                    {...register("message")}
                    className="font-(family-name:--font-body)"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/80 text-base font-semibold rounded-xl"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Quote Request
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}