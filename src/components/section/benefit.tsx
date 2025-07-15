import { Clock, Leaf, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function BenefitSection() {
  return (
    <section
      id="benefits"
      className="bg-secondary text-secondary-foreground w-full scroll-mt-16 py-12 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Choose Steam Wash?
            </h2>
            <p className="text-secondary-foreground/70 max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the advantages of our advanced steam cleaning technology
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {benefits.map((item) => (
            <Card className="text-center" key={item.name}>
              <CardHeader>
                {item.icon}
                <CardTitle className="text-lg">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-foreground/60 text-sm">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: <Leaf className="mx-auto h-12 w-12 text-green-600" />,
    name: "Eco-Friendly",
    desc: "Uses 90% less water than traditional washing methods. No harmful chemicals.",
  },
  {
    icon: <Shield className="mx-auto h-12 w-12 text-blue-600" />,
    name: "Paint Safe",
    desc: "Gentle steam cleaning protects your vehicle's paint and finish.",
  },
  {
    icon: <Zap className="mx-auto h-12 w-12 text-yellow-600" />,
    name: "Deep Clean",
    desc: "High-temperature steam eliminates bacteria, germs, and stubborn dirt.",
  },
  {
    icon: <Clock className="mx-auto h-12 w-12 text-purple-600" />,
    name: "Quick Service",
    desc: "Faster drying time means you get your vehicle back sooner.",
  },
];
