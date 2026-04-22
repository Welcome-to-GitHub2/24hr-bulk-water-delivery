import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://24hrbulkwaterdelivery.co.za"

  const routes = [
    "",
    "/areas/johannesburg",
    "/areas/pretoria",
    "/areas/centurion",
    "/areas/midrand",
    "/areas/sandton",
    "/areas/east-rand",
    "/areas/west-rand",
    "/services/emergency-water-delivery",
    "/services/jojo-tank-filling",
    "/services/pool-filling",
    "/services/construction-water-supply",
    "/services/event-water-supply",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }))
}