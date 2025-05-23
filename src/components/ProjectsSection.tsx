
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  link: string;
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  
  // Example projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      description: "A full-featured e-commerce platform built with React, TypeScript and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      category: "web",
      link: "#"
    },
    {
      id: 2,
      title: "Personal Finance Dashboard",
      description: "Interactive dashboard for personal finance tracking with data visualization.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
      tags: ["React", "Chart.js", "Firebase"],
      category: "web",
      link: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Kanban-style task management application with drag-and-drop functionality.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
      tags: ["React", "Redux", "Styled Components"],
      category: "app",
      link: "#"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "Real-time weather forecast application with location detection and 7-day predictions.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      tags: ["JavaScript", "API Integration", "CSS3"],
      category: "app",
      link: "#"
    },
    {
      id: 5,
      title: "Photography Portfolio",
      description: "Minimalist portfolio website with gallery features for a professional photographer.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
      tags: ["HTML5", "CSS3", "JavaScript", "Lightbox"],
      category: "website",
      link: "#"
    },
    {
      id: 6,
      title: "Restaurant Booking System",
      description: "Online reservation system with real-time availability checking and calendar integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      category: "web",
      link: "#"
    }
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);
    
  const categories = ["all", ...new Set(projects.map(project => project.category))];

  return (
    <section id="projects" className="py-24 bg-grid relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h3>
          <p className="text-foreground/70">
            Explore my recent work and projects that showcase my skills and expertise in front-end development.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={filter === category ? "default" : "outline"}
              className={cn(
                filter === category && "bg-primary", 
                "capitalize"
              )}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <a 
              href={project.link} 
              key={project.id} 
              className="project-card group block transform transition-all duration-300 hover:-translate-y-2"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border overflow-hidden">
                <div className="aspect-video w-full overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ArrowUpRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <h4 className="text-xl font-bold">{project.title}</h4>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-foreground/70 text-sm">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-secondary/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <Button className="btn-gradient">
            <span className="relative z-10">View All Projects</span>
          </Button>
        </div>
      </div>
      
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl" />
    </section>
  );
}
