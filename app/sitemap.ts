import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://infinitive.cc",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://infinitive.cc/about",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://infinitive.cc/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://infinitive.cc/hardware",
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: "https://infinitive.cc/projects",
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}
