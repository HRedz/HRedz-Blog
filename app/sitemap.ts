import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
        url: 'https://hredz.pages.dev',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
    },
    {
        url: 'https://hredz.pages.dev/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
        url: 'https://hredz.pages.dev/my-work',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: 'https://hredz.pages.dev/blog',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
    },
    {
        url: 'https://hredz.pages.dev/contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    },
  ]
}