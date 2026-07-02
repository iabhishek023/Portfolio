import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://your-domain.vercel.app", // TODO: update after deployment
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
