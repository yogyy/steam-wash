import { Bike, Car, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Placeholder from "@/assets/placeholder.svg";

export function ServiceSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-foreground text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Services
            </h2>
            <p className="text-foreground/60 max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Professional steam wash services tailored for motorcycles and cars
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Card className="relative overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <Bike className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-xl">Motorcycle Steam Wash</CardTitle>
              </div>
              <CardDescription>
                Specialized steam cleaning for motorcycles of all sizes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <img
                src={Placeholder}
                width={400}
                height={200}
                alt="Motorcycle being steam washed"
                className="h-48 w-full rounded-lg object-cover"
              />
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Engine bay cleaning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Chain and sprocket care</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Wheel and tire detailing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Paint protection</span>
                </li>
              </ul>
              <div className="pt-2">
                <span className="text-2xl font-bold text-blue-600">$25</span>
                <span className="text-secondary-foreground/60">
                  {" "}
                  starting from
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <Car className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-xl">Car Steam Wash</CardTitle>
              </div>
              <CardDescription>
                Complete steam wash service for cars and SUVs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <img
                src={Placeholder}
                width={400}
                height={200}
                alt="Car being steam washed"
                className="h-48 w-full rounded-lg object-cover"
              />
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Exterior steam cleaning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Interior sanitization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Engine compartment cleaning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Upholstery deep clean</span>
                </li>
              </ul>
              <div className="pt-2">
                <span className="text-2xl font-bold text-blue-600">$45</span>
                <span className="text-secondary-foreground/60">
                  {" "}
                  starting from
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
