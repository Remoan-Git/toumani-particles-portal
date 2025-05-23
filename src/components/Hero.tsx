
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { ArrowDownIcon, ArrowRightIcon } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Particles Background */}
      <ParticlesBackground className="absolute inset-0 z-0" />
      
      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <div className="mb-6 inline-block animate-float">
            <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm">
              <span className="text-primary">Front-End Developer</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="text-gradient animate-text-gradient">Toumani</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground/90">
            Creating <span className="underline decoration-wavy decoration-primary underline-offset-8">digital experiences</span> for the modern web.
          </h2>
          
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto md:mx-0">
            I specialize in building exceptional digital experiences through modern front-end
            technologies. Transforming ideas into elegant, responsive and performant web 
            applications is what I do best.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Button className="btn-gradient text-lg px-8 py-6">
              <span className="relative z-10">View My Work</span>
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" className="bg-secondary/50 border-secondary text-lg px-8 py-6">
              <span>Contact Me</span>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center md:justify-start space-x-4">
            <span className="text-sm text-foreground/50">Follow me:</span>
            <a href="#" className="hover:text-primary transition-colors">
              <GitHubLogoIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <LinkedInLogoIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <TwitterLogoIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm font-medium mb-2 text-foreground/50">Scroll Down</span>
        <ArrowDownIcon className="h-5 w-5 text-foreground/50" />
      </div>
    </section>
  );
}
