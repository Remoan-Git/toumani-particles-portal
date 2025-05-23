
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function AboutSection() {
  const achievements = [
    "5+ Years of Experience",
    "30+ Projects Completed",
    "20+ Happy Clients",
    "Multiple Award Winner"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-400/20 p-1">
                <div className="w-full h-full rounded-xl overflow-hidden bg-secondary/50">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                    alt="Toumani Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Experience Box */}
              <div className="absolute -bottom-6 -left-6 bg-background/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-border animate-float">
                <div className="text-center">
                  <h3 className="text-5xl font-bold text-primary">5+</h3>
                  <p className="text-sm text-foreground/70">Years of Experience</p>
                </div>
              </div>
              
              {/* Floating Projects Box */}
              <div className="absolute -top-6 -right-6 bg-background/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-border animate-float animation-delay-300">
                <div className="text-center">
                  <h3 className="text-5xl font-bold text-cyan-400">30+</h3>
                  <p className="text-sm text-foreground/70">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Front-End Developer Passionate About Creating Exceptional Digital Experiences</h3>
            
            <p className="text-foreground/70 mb-6">
              I'm a passionate front-end developer with 5+ years of experience crafting modern, 
              responsive web applications. My journey started with a curiosity about how websites work, 
              which evolved into a full-time career creating beautiful digital experiences.
            </p>
            
            <p className="text-foreground/70 mb-8">
              I specialize in React, TypeScript, and modern CSS frameworks like Tailwind. I'm deeply 
              committed to writing clean, maintainable code and creating intuitive user experiences that 
              delight users and meet business goals.
            </p>
            
            <Separator className="my-6 bg-border/30" />
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    <CheckIcon className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{achievement}</span>
                </div>
              ))}
            </div>
            
            <Button className="btn-gradient">
              <span className="relative z-10">Download CV</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
    </section>
  );
}
