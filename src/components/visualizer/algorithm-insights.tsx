
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Separator } from "@/components/ui/separator";
  
  export function AlgorithmInsights() {
    return (
      <div className="mt-8 w-full max-w-5xl mx-auto">
        <Card className="bg-secondary/30">
          <CardHeader>
            <CardTitle className="text-2xl font-headline tracking-tight text-center">
              Algorithm Performance Insights & Optimization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold text-green-500 font-mono">O(log n)</h3>
                <p className="font-semibold mt-1 text-foreground">Best Search Complexity</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Binary search achieves logarithmic time complexity for sorted data.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-500 font-mono">O(n²)</h3>
                <p className="font-semibold mt-1 text-foreground">Quadratic Algorithms</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Simple sorting algorithms with educational value but limited scalability.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-500 font-mono">O(n log n)</h3>
                <p className="font-semibold mt-1 text-foreground">Optimal Sorting</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Divide-and-conquer algorithms achieving near-optimal performance.
                </p>
              </div>
            </div>
  
            <Separator />
  
            <div>
              <h2 className="text-xl font-headline tracking-tight text-center mb-6">
                Algorithm Selection Guidelines
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Performance Considerations</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Choose algorithms based on data characteristics, performance requirements, and resource constraints. Consider both time and space complexity trade-offs.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    <li>Data size and growth expectations</li>
                    <li>Memory availability and constraints</li>
                    <li>Stability requirements for sorting</li>
                    <li>Worst-case performance guarantees</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Implementation Factors</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Practical implementation involves considering code complexity, maintainability, debugging ease, and integration with existing systems.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    <li>Implementation complexity and maintainability</li>
                    <li>Integration with existing codebase</li>
                    <li>Testing and validation requirements</li>
                    <li>Performance monitoring and optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  