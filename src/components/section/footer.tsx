import { ModeToggle } from "../mode-toggle";

export function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-3 sm:flex-row md:px-6">
      <p className="text-foreground/80 text-xs">
        © 2025 Binar-Binar. All rights reserved.
      </p>
      <nav className="flex items-center gap-4 sm:ml-auto sm:gap-6">
        <a
          href="#toc"
          className="text-foreground/70 text-xs underline-offset-4 hover:underline"
        >
          Terms of Service
        </a>
        <a
          href="#pp"
          className="text-foreground/70 text-xs underline-offset-4 hover:underline"
        >
          Privacy Policy
        </a>

        <ModeToggle />
      </nav>
    </footer>
  );
}
