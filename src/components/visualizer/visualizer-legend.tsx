
"use client";

import { Card } from "@/components/ui/card";

export function VisualizerLegend() {
    const legendItems = [
        { color: 'hsl(var(--primary))', label: 'Unsorted' },
        { color: 'hsl(var(--chart-2))', label: 'Comparing' },
        { color: 'hsl(var(--destructive))', label: 'Swapping' },
        { color: 'hsl(var(--chart-1))', label: 'Sorted' },
    ];

    return (
        <Card className="w-full max-w-5xl p-2">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
                {legendItems.map(item => (
                    <div key={item.label} className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded" style={{backgroundColor: item.color}}></div>
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </Card>
    );
}
