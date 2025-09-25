import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "project-5");

  return (
    <div className="relative h-dvh flex items-center bg-gradient-to-r from-black via-background to-background">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8">
        <div className="text-left fade-in">
          <h1 className="font-headline text-8xl font-bold uppercase tracking-tighter sm:text-8xl md:text-9xl lg:text-[10rem] leading-none">
            Future <br />
            Three
          </h1>
          <p className="mt-4 text-2xl font-bold text-primary">Born to Create™</p>
          <p className="text-xl text-muted-foreground">
            Brand. Design. Development.
          </p>
          <p className="mt-6 max-w-md text-muted-foreground">
            As a multi-award-winning studio based in Wiesbaden, FUTURE THREE®
            sets international standards.
          </p>
        </div>

        <div className="relative h-[60vh] w-full flex items-center justify-center fade-in">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={600}
              height={800}
              data-ai-hint={heroImage.imageHint}
              className="object-contain h-full w-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
}
