
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SeoBasicsPost() {
  const newImageUrl = "https://images.unsplash.com/photo-1559523182-a284c3fb7cff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzZW8lMjBhbmFseXRpY3N8ZW58MHx8fHwxNzYxMjMwOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080";

  return (
    <>
      <div className="relative aspect-video mb-8">
        <Image 
            src={newImageUrl} 
            alt="SEO Analytics" 
            fill 
            className="rounded-lg object-cover"
            data-ai-hint="seo analytics"
        />
      </div>
      
      <p className="lead mb-8">Search Engine Optimization (SEO) is the practice of increasing the quantity and quality of traffic to your website through organic search engine results. Understanding the basics of SEO is crucial for anyone with a presence on the web.</p>
      
      <h2>Core Components of SEO</h2>
      <p>SEO can be broken down into three main categories: On-Page SEO, Off-Page SEO, and Technical SEO.</p>

      <h3>1. On-Page SEO</h3>
      <p>On-Page SEO involves optimizing the content and HTML source code of a page. Key elements include:</p>
      <ul>
        <li><strong>Keywords:</strong> Researching and using relevant keywords that your target audience is searching for.</li>
        <li><strong>Content Quality:</strong> Creating high-quality, original, and engaging content that provides value to the user.</li>
        <li><strong>Title Tags:</strong> Crafting descriptive and keyword-rich title tags for your pages.</li>
        <li><strong>Meta Descriptions:</strong> Writing compelling meta descriptions that encourage users to click on your link in the search results.</li>
        <li><strong>Header Tags:</strong> Using header tags (H1, H2, H3) to structure your content and make it more readable for both users and search engines.</li>
        <li><strong>Image Optimization:</strong> Compressing images and using descriptive alt text.</li>
      </ul>
      
      <Alert className="my-8">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Pro Tip</AlertTitle>
        <AlertDescription>
          Focus on creating content for your users, not just for search engines. Google's algorithms are smart enough to recognize and reward user-friendly content.
        </AlertDescription>
      </Alert>

      <h3>2. Off-Page SEO</h3>
      <p>Off-Page SEO refers to actions taken outside of your own website to impact your rankings within search engine results pages. This is largely driven by backlinks.</p>
      <ul>
        <li><strong>Backlinks:</strong> These are links from other websites to yours. High-quality backlinks from reputable sources act as a "vote of confidence" for your site, signaling to search engines that your content is valuable.</li>
        <li><strong>Social Media Marketing:</strong> While social media shares aren't a direct ranking factor, they can increase visibility and drive traffic, which can indirectly lead to more backlinks.</li>
        <li><strong>Guest Blogging:</strong> Writing articles for other reputable websites in your niche can be a great way to earn quality backlinks.</li>
      </ul>

      <h3>3. Technical SEO</h3>
      <p>Technical SEO focuses on improving the technical aspects of a website to help search engines crawl and index it more effectively.</p>
      <ul>
        <li><strong>Site Speed:</strong> A fast-loading website provides a better user experience and is favored by search engines.</li>
        <li><strong>Mobile-Friendliness:</strong> With the majority of searches now happening on mobile devices, having a responsive website is essential.</li>
        <li><strong>XML Sitemap:</strong> An XML sitemap is a file that lists all your website’s important pages, making it easier for search engines to find and crawl them.</li>
        <li><strong>Crawlability:</strong> Ensuring that search engine bots can easily access and understand your website's content without running into errors.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>SEO is an ongoing process, not a one-time task. By focusing on these core components—creating great content, building quality backlinks, and ensuring your site is technically sound—you can significantly improve your website's visibility in search engine results and attract more organic traffic.</p>
      
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Further Reading</h2>
        <ul className="list-decimal list-inside space-y-2">
          <li className="text-muted-foreground">
              <Link href="https://moz.com/beginners-guide-to-seo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Moz's Beginner's Guide to SEO <ExternalLink className="inline h-4 w-4 ml-1" />
              </Link>
            </li>
            <li className="text-muted-foreground">
              <Link href="https://backlinko.com/seo-this-year" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Backlinko's SEO in 2024 Guide <ExternalLink className="inline h-4 w-4 ml-1" />
              </Link>
            </li>
        </ul>
      </div>
    </>
  );
}
