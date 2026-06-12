import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-06-12";
  const baseUrl = "https://infinitive.cc/";
  return [
    {
      url: baseUrl,
      lastModified,
      priority: 1,
    },
    {
      url: `${baseUrl}about/`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${baseUrl}blog/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}hardware/`,
      lastModified,
      priority: 0.1,
    },
    {
      url: `${baseUrl}projects/`,
      lastModified,
      priority: 0.5,
    },
  ];
}
