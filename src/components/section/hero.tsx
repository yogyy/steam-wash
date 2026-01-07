import { Bitcoin, Star } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { Badge } from "../ui/badge";
import Placeholder from "@/assets/placeholder.svg";
import NumberFlow from "@number-flow/react";
import { SimpleIconsWhatsapp } from "../icons/simple-icon";
import { useQuery } from "@tanstack/react-query";
import { cn, phoneNumber } from "@/lib/utils";
import { fetchTotalCustomer } from "@/lib/fetch";

export function HeroSection() {
  const { data } = useQuery({
    queryKey: ["total-customer"],
    queryFn: fetchTotalCustomer,
  });

  return (
    <section className="w-full overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 py-12 md:py-24 lg:py-32 dark:from-blue-800 dark:to-cyan-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="relative flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="secondary" className="w-fit -rotate-6">
                <Bitcoin className="mr-1 h-3 w-3" />
                Steam Ramah Kantong
              </Badge>
              <h1 className="text-foreground text-3xl font-bold tracking-tighter text-balance sm:text-5xl xl:text-6xl/none">
                Cuci Steam Bersahabat untuk{" "}
                <span className="dark:text-background text-blue-600">
                  Motor
                </span>{" "}
                &{" "}
                <span className="dark:text-background text-blue-600">
                  Mobil
                </span>
              </h1>
              <p className="text-foreground/70 max-w-[600px] text-wrap md:text-xl">
                Dapatkan layanan pembersihan untuk kendaraan Anda. Aman,
                efektif, dan ramah lingkungan, memberikan hasil bersih terbaik
                setiap saat.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href={`https://wa.me/${phoneNumber}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "cursor-pointer bg-[#25D366] hover:bg-[#25D366]/70",
                )}
              >
                <SimpleIconsWhatsapp className="mr-2 h-4 w-4" />
                Pesan Sekarang
              </a>
            </div>
            <div className="text-foreground/80 flex cursor-default items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.9/5</span>
              </div>
              <span>•</span>

              <span className="text-nowrap">
                <NumberFlow value={data?.total ? data.total : 2121} />+
                Pelanggan
              </span>
              <span className="hidden sm:block">•</span>
              <span className="hidden text-nowrap sm:block">
                Layanan Hari yang Sama
              </span>
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
