import type { MetadataRoute } from "next";

const LAST_REVIEWED = new Date("2025-01-15T00:00:00.000Z");

const routes = [
  { path: "/", lastModified: LAST_REVIEWED },
  { path: "/support", lastModified: LAST_REVIEWED },
  { path: "/privacy", lastModified: LAST_REVIEWED },
  { path: "/terms", lastModified: LAST_REVIEWED },
  { path: "/press", lastModified: LAST_REVIEWED },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://top4game.com${route.path}`,
    lastModified: route.lastModified,
  }));
}
