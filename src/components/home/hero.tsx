
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";
import { motion, useMotionValue, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function Hero() {
  const navItems = [
    { href: "/#work", label: "Work" },
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }
  };
  
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      // Values from 0 to 1 representing mouse position
      x.set((e.clientX - left) / width);
      y.set((e.clientY - top) / height);
    }
  };
  
  // Create parallax transformations for different layers
  const bgX = useParallax(x, 15);
  const bgY = useParallax(y, 15);
  const topLeftX = useParallax(x, 20);
  const topLeftY = useParallax(y, 20);
  const topRightX = useParallax(x, 25);
  const topRightY = useParallax(y, 25);
  const headlineX = useParallax(x, 50);
  const headlineY = useParallax(y, 50);
  const subHeadlineX = useParallax(x, 40);
  const subHeadlineY = useParallax(y, 40);
  const bottomRightX = useParallax(x, 30);
  const bottomRightY = useParallax(y, 30);

  return (
    <motion.div 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-dvh w-full fade-in"
    >
      <motion.div 
        className="absolute inset-0 z-0 background-grid"
        style={{ x: bgX, y: bgY }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-background via-transparent to-background" />
      <div className="container relative z-20 mx-auto grid h-dvh grid-cols-1 grid-rows-[auto_1fr_auto] gap-8 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:px-8">
        
        <motion.div 
          className="col-start-1 row-start-1 self-start"
          style={{ x: topLeftX, y: topLeftY }}
        >
          <Link
            href="/"
            onClick={(e) => handleScroll(e, "/")}
            className="font-headline text-2xl font-bold uppercase tracking-tighter transition-colors hover:text-muted-foreground"
          >
            KIRTAN
          </Link>
        </motion.div>

        <motion.div 
          className="col-start-1 row-start-2 -mt-20 flex flex-col items-start self-start text-left sm:col-start-2 sm:row-start-1 sm:mt-0 sm:items-end sm:text-right"
          style={{ x: topRightX, y: topRightY }}
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-muted-foreground">
              ■ Surat, Gujarat, India
            </span>
          </div>
          <nav className="mt-4 flex flex-col items-start space-y-1 text-sm font-medium md:flex-row md:items-center md:space-x-4 md:space-y-0">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={cn(
                  "transition-colors hover:text-foreground text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>

        <div className="col-span-2 row-start-3 self-end md:col-span-1">
          <motion.h1 
            className="font-headline text-5xl font-bold uppercase leading-none tracking-tighter md:text-7xl"
            style={{ x: headlineX, y: headlineY }}
          >
            KIRTAN KALATHIYA
          </motion.h1>
          <motion.h2 
            className="font-body text-lg text-muted-foreground"
            style={{ x: subHeadlineX, y: subHeadlineY }}
          >
            Web Designer & Developer
          </motion.h2>
        </div>

        <motion.div 
          className="col-start-1 row-start-2 self-end sm:col-start-2 sm:row-start-3 sm:flex sm:items-end sm:justify-end sm:text-right"
          style={{ x: bottomRightX, y: bottomRightY }}
        >
          <div className="max-w-sm">
            <p className="text-base text-muted-foreground">
              I craft brands & digital experiences that blend functionality with
              aesthetics.
            </p>
            <Link href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
              <Button size="lg" className="mt-4">
                Get in Touch <ArrowRight />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
