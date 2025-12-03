
'use client';

import { SortingVisualizer } from "@/components/visualizer/sorting-visualizer";
import { AlgorithmInsights } from "@/components/visualizer/algorithm-insights";
import { useReducer } from "react";
import { initialStateFactory, reducer } from "@/components/visualizer/visualizer-state";
import { Breadcrumb } from "@/components/shared/breadcrumb";

export default function VisualizerPage() {
  const [state, dispatch] = useReducer(reducer, initialStateFactory(15));

  return (
    <div className="container mx-auto px-4 py-8">
       <Breadcrumb
          className="mb-8"
          items={[
            { label: "Home", href: "/" },
            { label: "Visualizer" },
          ]}
        />
      <header className="text-center mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Sorting Algorithm Visualizer
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Watch sorting algorithms in action. An interactive tool to understand data structures and algorithms.
        </p>
      </header>
      <SortingVisualizer state={state} dispatch={dispatch} />
      <AlgorithmInsights algorithm={state.algorithm} />
    </div>
  );
}
