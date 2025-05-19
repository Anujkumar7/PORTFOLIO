
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-4 animate-fade-in">
          <p className="text-accent font-medium">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Anuj Kumar
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground">
            Software Engineer
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground mt-4">
            I specialize in building modern web applications with MERN stack and ASP.NET.
            Recent computer science graduate passionate about creating efficient, 
            user-friendly software solutions.
          </p>
          <div className="flex gap-4 mt-6">
            <Button asChild className="rounded-md">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" className="rounded-md">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-auto pb-8 pt-12 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}
