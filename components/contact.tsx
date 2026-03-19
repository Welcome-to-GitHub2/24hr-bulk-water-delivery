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
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Submission failed")
      }

      toast.success("Quote request sent successfully!", {
        description: `Thank you ${data.name}. We are dispatch-ready.`,
      })

      // OPTIONAL: Redirect to WhatsApp with pre-filled message
      const whatsappMessage = `
New Water Delivery Request:

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Location: ${data.location}
Volume: ${data.volume}
Message: ${data.message || "N/A"}
      `

      const encodedMessage = encodeURIComponent(whatsappMessage.trim())

      setTimeout(() => {
        window.open(
          `https://wa.me/27682805455?text=${encodedMessage}`,
          "_blank"
        )
      }, 1500)

      reset()
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("Something went wrong", {
        description:
          "Please try again or contact us directly via WhatsApp/phone.",
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
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-secondary-foreground">
            24/7 Emergency Supply
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
            Request a Free Quote
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Tell us what you need and our team will respond quickly with a
            competitive quote.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/30 text-secondary-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">Phone / WhatsApp</p>
                <a
                  href="tel:+27682805455"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +27 (68) 280 5455
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/30 text-secondary-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">Email</p>
                <a
                  href="mailto:24hrbulkwaterdelivery@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  24hrbulkwaterdelivery@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/30 text-secondary-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">Service Area</p>
                <p className="text-sm text-muted-foreground">
                  All of Gauteng — Johannesburg, Pretoria, Midrand,
                  Centurion, Sandton & surrounds
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl bg-card p-6 shadow-sm lg:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Input placeholder="Full Name" {...register("name")} />
                <Input placeholder="Phone Number" {...register("phone")} />
                <Input
                  type="email"
                  placeholder="Email Address"
                  {...register("email")}
                />
                <Input
                  placeholder="Delivery Location"
                  {...register("location")}
                />

                <div className="sm:col-span-2">
                  <Select
                  onValueChange={(val) => setValue("volume", val, { shouldValidate: true })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select volume..." />
                    </SelectTrigger>
                    <SelectContent>
                      {volumes.map((v) => (
                        <SelectItem key={v} value={v}>
                          {v}
                        </SelectItem>
                      ))}
                    </SelectContent>
                    


                  </Select>

                  <input type="hidden" {...register("volume")} />
                </div>

                <Textarea
                  rows={4}
                  placeholder="Additional details..."
                  {...register("message")}
                  className="sm:col-span-2"
                />
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