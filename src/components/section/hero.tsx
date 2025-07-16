import { Phone, Star, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Placeholder from "@/assets/placeholder.svg";
import NumberFlow from "@number-flow/react";

export function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-cyan-50 py-12 md:py-24 lg:py-32 dark:from-blue-800 dark:to-cyan-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="secondary" className="w-fit -rotate-6">
                <Zap className="mr-1 h-3 w-3" />
                Eco-Friendly Steam
              </Badge>
              <h1 className="text-foreground text-3xl font-bold tracking-tighter text-balance sm:text-5xl xl:text-6xl/none">
                Premium Steam Wash for Your{" "}
                <span className="dark:text-background text-blue-600">
                  Motorcycle
                </span>{" "}
                &{" "}
                <span className="dark:text-background text-blue-600">Car</span>
              </h1>
              <p className="text-foreground/70 max-w-[600px] md:text-xl">
                Discover advanced cleaning for your vehicle. It's safe,
                effective, and eco-friendly, delivering a superior clean every
                time.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="dark:text-foreground cursor-pointer bg-blue-600 hover:bg-blue-700"
              >
                <Phone className="mr-2 h-4 w-4" />
                Book Now
              </Button>
            </div>
            <div className="text-foreground/80 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.9/5</span>
              </div>
              <span>•</span>
              <span>
                <NumberFlow value={265} />+ Happy Customers
              </span>
              <span>•</span>
              <span>Same Day Service</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={Placeholder}
              width={600}
              height={400}
              alt="Steam washing a motorcycle and car"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
