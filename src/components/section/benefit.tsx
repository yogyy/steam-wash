import { Clock, Leaf, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function BenefitSection() {
  return (
    <section
      id="benefits"
      className="w-full bg-gray-50 py-12 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Choose Steam Wash?
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the advantages of our advanced steam cleaning technology
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <Card className="text-center">
            <CardHeader>
              <Leaf className="mx-auto h-12 w-12 text-green-600" />
              <CardTitle className="text-lg">Eco-Friendly</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Uses 90% less water than traditional washing methods. No harmful
                chemicals.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Shield className="mx-auto h-12 w-12 text-blue-600" />
              <CardTitle className="text-lg">Paint Safe</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Gentle steam cleaning protects your vehicle's paint and finish.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="mx-auto h-12 w-12 text-yellow-600" />
              <CardTitle className="text-lg">Deep Clean</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                High-temperature steam eliminates bacteria, germs, and stubborn
                dirt.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Clock className="mx-auto h-12 w-12 text-purple-600" />
              <CardTitle className="text-lg">Quick Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Faster drying time means you get your vehicle back sooner.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
