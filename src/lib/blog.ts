import { posts as allPosts, type Post } from './blog-posts';

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): Post[] {
  // Sort posts by date in descending order
  return allPosts.sort((post1, post2) => {
    return new Date(post2.metadata.date) > new Date(post1.metadata.date) ? 1 : -1;
  });
}
