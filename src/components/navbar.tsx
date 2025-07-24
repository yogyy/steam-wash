import { Droplets } from "lucide-react";

export function Navbar() {
  return (
    <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <header className="container mx-auto flex h-16 items-center gap-6 px-4 lg:px-6">
        <a href="/" className="flex items-center justify-center">
          <Droplets className="h-8 w-8 text-blue-600" />
          <span className="text-foreground ml-2 hidden text-xl font-bold sm:block">
            Binar-Binar
          </span>
        </a>
        <nav className="ml-auto hidden gap-4 min-[360px]:flex sm:gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-foreground text-sm font-medium capitalize transition-colors hover:text-blue-600"
            >
              {link}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
}

const links = ["layanan", "keuntungan", "harga", "kontak"];
