import Image from "next/image";
import type { Project } from "@/lib/projects-data";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
  image?: ImagePlaceholder;
};

export function ProjectCard({ project, image }: ProjectCardProps) {
  let width = 800;
  let height = 600;

  if (image) {
    try {
      const url = new URL(image.imageUrl);
      const parts = url.pathname.split('/');
      const w = parseInt(parts[parts.length - 2], 10);
      const h = parseInt(parts[parts.length - 1], 10);
      if (!isNaN(w)) width = w;
      if (!isNaN(h)) height = h;
    } catch (e) {
      // Keep default values if URL parsing fails
    }
  }

  const CardContent = () => (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1.5">
      {image ? (
        <Image
          src={image.imageUrl}
          alt={image.description}
          width={width}
          height={height}
          data-ai-hint={image.imageHint}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-secondary">
          <p className="text-muted-foreground">Image not found</p>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="transform transition-transform duration-300 ease-in-out group-hover:-translate-y-4">
          <h3 className="font-headline text-2xl font-bold text-white">
            {project.title}
          </h3>
          <p className="text-sm text-white/80">
            {project.category}
          </p>
        </div>
        <div className="absolute bottom-6 right-6 -translate-x-4 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
          <ArrowRight className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );

  if (project.githubLink && project.githubLink !== '#') {
    return (
      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
        <CardContent />
      </Link>
    )
  }

  return <CardContent />;
}
