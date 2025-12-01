
import { default as CloudflareOutage } from '@/app/blog/posts/cloudflare-outage';
import { default as SeoBasics } from '@/app/blog/posts/seo-basics';

export type PostMetadata = {
  title: string;
  date: string;
  author: string;
  excerpt?: string;
  imageId: string;
};

export type Post = {
  slug: string;
  metadata: PostMetadata;
  component: React.ComponentType;
};

export const posts: Post[] = [
  {
    slug: 'cloudflare-outage',
    metadata: {
      title: "Major Cloudflare Outage Disrupts Key Internet Platforms, Investigation Underway",
      date: "2025-11-18",
      author: "kk",
      excerpt: "Earlier today, a widespread outage tied to Cloudflare caused significant disruption across the internet—impacting major platforms and essential online services worldwide.",
      imageId: "cloudflare-outage-hero",
    },
    component: CloudflareOutage,
  },
  {
    slug: 'seo-basics',
    metadata: {
      title: "SEO Basics: A Beginner's Guide to Ranking Higher",
      date: "2025-11-20",
      author: "kk",
      excerpt: "A foundational guide to Search Engine Optimization, covering the core principles of on-page, off-page, and technical SEO to help you improve your website's visibility.",
      imageId: "seo-basics-hero",
    },
    component: SeoBasics,
  },
];
