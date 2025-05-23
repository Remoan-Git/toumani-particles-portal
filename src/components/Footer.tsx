
import { Github, Linkedin, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-12 pb-6 bg-secondary/30">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                R
              </div>
              <span className="font-bold tracking-tight text-xl">Remoan Toumani</span>
            </a>
            <p className="text-foreground/70 text-sm mb-4 max-w-md">
              Creating exceptional digital experiences through modern front-end development. 
              Specializing in responsive design, interactive UI, and performance optimization.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h5 className="font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-foreground/70 text-sm hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 text-sm hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-foreground/70 text-sm hover:text-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/70 text-sm hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 text-sm hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h5 className="font-bold mb-4">Contact</h5>
            <ul className="space-y-2">
              <li className="flex items-start text-sm text-foreground/70">
                <span className="mr-2">📧</span>
                <a href="mailto:remontomany@gmail.com" className="hover:text-primary transition-colors">
                  remontomany@gmail.com
                </a>
              </li>
              <li className="flex items-start text-sm text-foreground/70">
                <span className="mr-2">📱</span>
                <a href="tel:+963949191847" className="hover:text-primary transition-colors">
                  +963 949191847
                </a>
              </li>
              <li className="flex items-start text-sm text-foreground/70">
                <span className="mr-2">📍</span>
                <span>Damascus, Syria</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6 bg-border/30" />
        
        {/* Copyright */}
        <div className="text-center text-sm text-foreground/50">
          <p>&copy; {currentYear} Remoan Toumani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
