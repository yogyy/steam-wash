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
    <section
      id="layanan"
      className="w-full scroll-mt-16 py-12 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-foreground text-3xl font-bold tracking-tighter sm:text-5xl">
              Layanan Kami
            </h2>
            <p className="text-foreground/60 max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Layanan cuci steam profesional yang dirancang khusus untuk motor
              dan mobil
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <LayananMotor />

          <LayananMobil />
        </div>
      </div>
    </section>
  );
}

function LayananMotor() {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <Bike className="h-6 w-6 text-blue-600" />
          <CardTitle className="text-xl">Cuci Steam Motor</CardTitle>
        </div>
        <CardDescription>
          Steam khusus untuk sepeda motor semua ukuran
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
            <span className="text-sm">Spakbor depan dan belakang</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm">Pembersihan Mesin</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm">Detailing velg dan ban</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm">Semir ban</span>
          </li>
        </ul>
        <div className="pt-2">
          <span className="text-secondary-foreground/60">mulai dari</span>
          <span className="text-2xl font-bold text-blue-600"> Rp10.000</span>
        </div>
      </CardContent>
    </Card>
  );
}

function LayananMobil() {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <Car className="h-6 w-6 text-blue-600" />
          <CardTitle className="text-xl">Cuci Steam Mobil</CardTitle>
        </div>
        <CardDescription>
          Layanan cuci steam lengkap untuk mobil
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
            <span className="text-sm">Pembersihan exterior</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm">Vakum debu interior</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm">Pembersihan kompartemen mesin</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm">Semir ban</span>
          </li>
        </ul>
        <div className="pt-2">
          <span className="text-secondary-foreground/60">Mulai dari</span>
          <span className="text-2xl font-bold text-blue-600"> Rp35.000</span>
        </div>
      </CardContent>
    </Card>
  );
}
