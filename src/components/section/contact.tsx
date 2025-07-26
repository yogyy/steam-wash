import { Clock, MapPin, Phone } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { SimpleIconsWhatsapp } from "../icons/simple-icon";
import { cn } from "@/lib/utils";

export function ContactSection() {
  return (
    <section
      id="kontak"
      className="w-full scroll-mt-16 bg-blue-600 py-12 text-white md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Siap untuk Memulai?
            </h2>
            <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Pesan janji temu cuci steam Anda hari ini dan rasakan perbedaannya
            </p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <a
              href="tel:+62851-5661-7556"
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "bg-white text-blue-600 hover:bg-gray-100",
              )}
            >
              <Phone className="mr-2 h-4 w-4" />
              Tel +62 851-5661-7556
            </a>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-3 lg:gap-12">
          <a
            href="https://maps.app.goo.gl/wyWh3ihEaa3YEQfz9"
            target="_blank"
            className="hover:bg-foreground/20 flex flex-col items-center space-y-2 rounded-md p-2 text-center transition-colors"
          >
            <MapPin className="h-8 w-8 text-blue-200" />
            <h3 className="text-lg font-semibold">Lokasi</h3>
            <p className="text-blue-100">
              Sukamantri, Kec. Ps. Kemis, Kabupaten Tangerang, Banten 15560
            </p>
          </a>
          <div className="flex cursor-default flex-col items-center space-y-2 p-2 text-center">
            <Clock className="h-8 w-8 text-blue-200" />
            <h3 className="text-lg font-semibold">Jam Kerja</h3>
            <p className="text-blue-100">Setiap Hari 08:00 - 18:00</p>
          </div>
          <a
            href="https://wa.me/+6285156617556"
            target="_blank"
            className="hover:bg-foreground/20 flex flex-col items-center space-y-2 rounded-md p-2 text-center transition-colors"
          >
            <SimpleIconsWhatsapp className="h-8 w-8 text-blue-200" />
            <h3 className="text-lg font-semibold">WhatsApp</h3>
            <p className="text-blue-100">0851-5661-7556</p>
          </a>
        </div>
      </div>
    </section>
  );
}
