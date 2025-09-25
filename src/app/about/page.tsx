import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about-portrait");
  
  let width = 800;
  let height = 1000;

  if (aboutImage?.imageUrl) {
    try {
      const url = new URL(aboutImage.imageUrl);
      const widthParam = url.searchParams.get("w");
      const heightParam = url.searchParams.get("h");

      if (widthParam && !isNaN(parseInt(widthParam))) {
        width = parseInt(widthParam, 10);
      }
      if (heightParam && !isNaN(parseInt(heightParam))) {
        height = parseInt(heightParam, 10);
      }
    } catch (e) {
      // Keep default values if URL parsing fails
    }
  }


  return (
    <div className="fade-in">
      <div className="container mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <section className="mb-16 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Driven by Creativity
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We are a collective of designers, developers, and dreamers who
            believe in the power of simplicity.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <h2 className="mb-6 font-headline text-3xl font-bold">
              Our Philosophy
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                At Noirfolio, we craft digital experiences that are not only
                beautiful but also intuitive and meaningful. Our design
                philosophy is rooted in minimalism, focusing on what truly
                matters to create clarity and impact. We strip away the noise to
                reveal the essential, allowing the content to shine.
              </p>
              <p>
                Our process is collaborative and iterative. We work closely with
                our clients to understand their vision and translate it into a
                digital reality. From initial concept to final launch, we are
                dedicated to achieving excellence and pushing the boundaries of
                creative expression.
              </p>
              <p>
                We believe that great design is about more than just aesthetics;
                it's about creating a connection. It's about telling a story,
                evoking emotion, and building a brand that resonates with its
                audience.
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            {aboutImage && (
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={width}
                  height={height}
                  data-ai-hint={aboutImage.imageHint}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
