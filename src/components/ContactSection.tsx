
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { AtSign, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h3>
          <p className="text-foreground/70">
            Have a project in mind or want to collaborate? Feel free to reach out and let's discuss how we can work together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <AtSign className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-foreground/70 text-sm mb-2">Feel free to email me</p>
                  <a href="mailto:remontomany@gmail.com" className="text-primary hover:underline">
                    remontomany@gmail.com
                  </a>
                </div>
              </div>
            </Card>
            
            {/* Phone Card */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-foreground/70 text-sm mb-2">Call me during business hours</p>
                  <a href="tel:+963949191847" className="text-primary hover:underline">
                    +963 949191847
                  </a>
                </div>
              </div>
            </Card>
            
            {/* Location Card */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-foreground/70 text-sm mb-2">Based in</p>
                  <span className="text-primary">Damascus, Syria</span>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="bg-secondary/50 border-secondary" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-secondary/50 border-secondary" 
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Project Inquiry / Collaboration" 
                    className="bg-secondary/50 border-secondary" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or inquiry..." 
                    className="bg-secondary/50 border-secondary min-h-[150px]" 
                    required
                  />
                </div>
                
                <Button type="submit" className="btn-gradient w-full">
                  <span className="relative z-10">Send Message</span>
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl" />
    </section>
  );
}
