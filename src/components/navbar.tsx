import { Droplets } from "lucide-react";

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <header className="container mx-auto flex h-16 items-center gap-6 px-4 lg:px-6">
        <a href="/" className="flex items-center justify-center">
          <Droplets className="h-8 w-8 text-blue-600" />
          <span className="ml-2 hidden text-xl font-bold text-gray-900 sm:block">
            SteamWash Pro
          </span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-sm font-medium capitalize transition-colors hover:text-blue-600"
            >
              {link}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
}

const links = ["services", "benefits", "pricing", "contact"];
