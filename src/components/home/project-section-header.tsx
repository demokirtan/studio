"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ProjectSectionHeader() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const yBlurred = useTransform(scrollYProgress, [0, 1], [-100, 200]);

  return (
    <section ref={targetRef} className="relative mb-16 text-center fade-in overflow-hidden h-64 flex flex-col justify-center">
        <motion.div style={{ y: yBlurred }} className="absolute inset-0 flex flex-col items-center justify-center filter blur-lg opacity-30">
             <h2 
                className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
            >
                Projects We Love
            </h2>
            <p
                className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
            >
                A collection of projects showcasing my passion for design and
                technology.
            </p>
        </motion.div>
        <motion.div style={{ y }} className="relative z-10">
            <h2 
                className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
            >
                Projects We Love
            </h2>
            <p 
                className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
            >
                A collection of projects showcasing my passion for design and
                technology.
            </p>
        </motion.div>
    </section>
  );
}
