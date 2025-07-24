import { Clock, Leaf, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function BenefitSection() {
  return (
    <section
      id="keuntungan"
      className="bg-secondary text-secondary-foreground w-full scroll-mt-16 py-12 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Kenapa Milih Cuci Steam?
            </h2>
            <p className="text-secondary-foreground/70 max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Temukan keunggulan teknologi cuci steam kami
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {benefits.map((item) => (
            <Card className="h-full text-center" key={item.name}>
              <CardHeader>
                {item.icon}
                <CardTitle className="text-md">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-foreground/60 text-sm text-balance">
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
    desc: "Menggunakan 90% lebih sedikit air dibandingkan metode pencucian tradisional. Tanpa bahan kimia berbahaya.",
  },
  {
    icon: <Shield className="mx-auto h-12 w-12 text-blue-600" />,
    name: "Paint Safe",
    desc: "Pembersihan steam yang lembut melindungi cat dan lapisan kendaraan Anda.",
  },
  {
    icon: <Zap className="mx-auto h-12 w-12 text-yellow-600" />,
    name: "Deep Clean",
    desc: "Steam bersuhu tinggi menghilangkan bakteri, kuman, dan kotoran membandel.",
  },
  {
    icon: <Clock className="mx-auto h-12 w-12 text-purple-600" />,
    name: "Quick Service",
    desc: "Waktu pengeringan yang lebih cepat berarti Anda mendapatkan kendaraan Anda kembali lebih cepat.",
  },
];
