
"use client";

import React, { useMemo } from 'react';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';

type VisualizerDisplayProps = {
    displayArray: number[];
    barColors: string[];
    numberOfBars: number;
    isSorting: boolean;
    statusText: { step: string; description: string; } | null;
};

export function VisualizerDisplay({
    displayArray,
    barColors,
    numberOfBars,
    isSorting,
    statusText,
}: VisualizerDisplayProps) {
    const barWidth = useMemo(() => Math.max(800 / numberOfBars, 2), [numberOfBars]);

    return (
        <Card className="w-full max-w-5xl h-[600px] p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex-grow flex items-end justify-center gap-1">
                {displayArray.map((value, idx) => (
                    <div
                        className="array-bar group relative rounded-t-sm transition-colors duration-150"
                        key={idx}
                        style={{
                            backgroundColor: barColors[idx] || 'hsl(var(--primary))',
                            height: `${value}px`,
                            width: `${barWidth}px`,
                        }}>
                            {numberOfBars <= 50 && (
                                <span className={cn(
                                    "absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-muted-foreground",
                                    barColors[idx] !== 'hsl(var(--primary))' && "text-foreground font-bold"
                                )}>
                                    {value}
                                </span>
                            )}
                    </div>
                ))}
            </div>
            {isSorting && statusText && (
                <div className="mt-4 pt-4 border-t text-center">
                    <p className="text-sm text-muted-foreground">{statusText.step}</p>
                    <p className="mt-1 font-medium text-foreground">{statusText.description}</p>

                </div>
            )}
        </Card>
    );
}
