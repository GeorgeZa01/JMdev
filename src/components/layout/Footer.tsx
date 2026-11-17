import { Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1">
            <span className="text-xl font-display font-bold text-foreground">
              JM
            </span>
            <span className="text-xl font-display font-bold text-primary">
              dev
            </span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} JMdev. PC Repairs • Console Repairs • Web & App Development
          </p>

          <nav aria-label="Service pages" className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <a href="/console-repairs-cape-town" className="transition-colors hover:text-foreground">PS4 & PS5 Repairs</a>
            <a href="/laptop-pc-repairs-cape-town" className="transition-colors hover:text-foreground">Laptop & PC Repairs</a>
            <a href="/small-business-websites-cape-town" className="transition-colors hover:text-foreground">Small Business Websites</a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/georgeza01/"
              aria-label="JMdev on GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jemaile-mohamed/"
              aria-label="Jemaile Mohamed on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/jmdev.co.za/"
              aria-label="JMdev on Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
