import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const TickerItem = ({
  label,
  title,
  category,
}: {
  label: string;
  title: string;
  category: string;
}) => (
  <div className="flex items-center gap-12 text-lg">
    <span className="text-muted-foreground">{label}</span>
    <span className="font-bold">{title}</span>
    <span className="text-muted-foreground">{category}</span>
    <Link href="/#work">
      <Button variant="outline" size="sm" className="rounded-full">
        View <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  </div>
);

export function Ticker() {
  const items = [
    {
      label: "Our Latest Work",
      title: "More Nutrition",
      category: "Design, Development",
    },
    {
      label: "Our Latest Work",
      title: "Ethereal Visions",
      category: "Branding",
    },
    {
      label: "Our Latest Work",
      title: "Zenith Workspace",
      category: "Web Design",
    },
     {
      label: "Our Latest Work",
      title: "More Nutrition",
      category: "Design, Development",
    },
    {
      label: "Our Latest Work",
      title: "Ethereal Visions",
      category: "Branding",
    },
    {
      label: "Our Latest Work",
      title: "Zenith Workspace",
      category: "Web Design",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-secondary py-4">
      <div className="flex animate-ticker">
        <div className="flex flex-shrink-0 items-center justify-around space-x-12">
          {items.map((item, index) => (
            <TickerItem
              key={index}
              label={item.label}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>
         <div className="flex flex-shrink-0 items-center justify-around space-x-12" aria-hidden="true">
          {items.map((item, index) => (
            <TickerItem
              key={index + items.length}
              label={item.label}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
