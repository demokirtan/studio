import { default as CloudflareOutage } from '@/app/blog/posts/cloudflare-outage';

export type PostMetadata = {
  title: string;
  date: string;
  author: string;
  excerpt?: string;
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
    },
    component: CloudflareOutage,
  },
];
