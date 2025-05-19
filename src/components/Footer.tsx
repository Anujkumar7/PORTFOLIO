
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {currentYear} Anuj Kumar. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Back to top"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
