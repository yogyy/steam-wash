import { Bike, Car, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export function PricingSection() {
  return (
    <section id="harga" className="w-full scroll-mt-16 py-12 md:py-24 lg:py-32">
      <div className="max-w- container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-primary text-3xl font-bold tracking-tighter sm:text-5xl">
              Detail Harga
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Harga transparan tanpa biaya tersembunyi
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl items-center gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <Card className="relative">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Motorcycle Package</CardTitle>
                <Bike className="h-6 w-6 text-blue-600" />
              </div>
              <CardDescription>
                Cocok untuk sepeda lisrik, motor kecil dan motor besar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <span className="text-4xl font-bold text-blue-600">
                  Rp7.000
                </span>
                <span className="text-gray-600"> - Rp15.000</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Complete exterior steam wash</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Engine bay cleaning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Chain lubrication</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Semir ban</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Book Motorcycle Wash
              </Button>
            </CardContent>
          </Card>

          <Card className="relative">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Car Package</CardTitle>
                <Car className="h-6 w-6 text-blue-600" />
              </div>
              <CardDescription>
                Comprehensive cleaning for cars and SUVs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <span className="text-4xl font-bold text-blue-600">
                  Rp35.000
                </span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Full exterior steam wash</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Interior sanitization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Dashboard & console cleaning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Window cleaning</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Book Car Wash
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
