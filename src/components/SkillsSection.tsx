
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Skill {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

export default function SkillsSection() {
  // Frontend Skills
  const frontendSkills: Skill[] = [
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 92 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Next.js", level: 80 }
  ];
  
  // Tools & Other Skills
  const toolsSkills: Skill[] = [
    { name: "Git & GitHub", level: 90 },
    { name: "Figma", level: 75 },
    { name: "Webpack", level: 80 },
    { name: "Jest", level: 78 },
    { name: "RESTful APIs", level: 88 },
    { name: "GraphQL", level: 70 }
  ];

  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">My Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h3>
          <p className="text-foreground/70">
            I've developed a diverse set of skills over the years, focusing on frontend development technologies 
            and tools that enable me to build modern, efficient web applications.
          </p>
        </div>
        
        {/* Skills Content */}
        <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="frontend">Frontend Development</TabsTrigger>
            <TabsTrigger value="tools">Tools & Others</TabsTrigger>
          </TabsList>
          
          <TabsContent value="frontend" className="animate-fade-in">
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-6">
                  {frontendSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-foreground/70">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tools" className="animate-fade-in">
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-6">
                  {toolsSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-foreground/70">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Experience & Education */}
        <div className="mt-24 grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h4 className="text-2xl font-bold mb-8 flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-primary/20 text-primary text-center mr-3 flex-shrink-0">
                W
              </span>
              Work Experience
            </h4>
            
            <div className="space-y-8">
              {/* Experience Item 1 - Senior Frontend Developer at CLOUDEV */}
              <div className="relative pl-8 border-l border-border">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary/30 border-2 border-primary transform -translate-x-2"></div>
                <div className="mb-1 text-primary font-medium">Aug 2024 - Present</div>
                <h5 className="text-xl font-bold mb-2">Senior Frontend Developer</h5>
                <p className="text-muted-foreground mb-2">CLOUDEV · Full-time</p>
                <p className="text-sm text-foreground/70">
                  Damascus, Damascus Governorate, Syria · On-site
                </p>
              </div>
              
              {/* Experience Item 2 - Frontend Engineer at Netwitcher UG */}
              <div className="relative pl-8 border-l border-border">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary/30 border-2 border-primary transform -translate-x-2"></div>
                <div className="mb-1 text-primary font-medium">Jun 2024 - Present</div>
                <h5 className="text-xl font-bold mb-2">Frontend Engineer</h5>
                <p className="text-muted-foreground mb-2">Netwitcher UG · Freelance</p>
                <p className="text-sm text-foreground/70">
                  Germany · Remote
                </p>
              </div>

              {/* Experience Item 3 - Odoo Devops at ITOS Solutions for Life */}
              <div className="relative pl-8 border-l border-border">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary/30 border-2 border-primary transform -translate-x-2"></div>
                <div className="mb-1 text-primary font-medium">Feb 2022 - Aug 2024</div>
                <h5 className="text-xl font-bold mb-2">Odoo Devops</h5>
                <p className="text-muted-foreground mb-2">ITOS Solutions for Life · Full-time</p>
                <p className="text-sm text-foreground/70">
                  Damascus, Damascus Governorate, Syria · On-site
                </p>
              </div>

              {/* Experience Item 4 - Frontend Developer at ASTUDIO */}
              <div className="relative pl-8 border-l border-border">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary/30 border-2 border-primary transform -translate-x-2"></div>
                <div className="mb-1 text-primary font-medium">Apr 2023 - May 2024</div>
                <h5 className="text-xl font-bold mb-2">Frontend Developer</h5>
                <p className="text-muted-foreground mb-2">ASTUDIO</p>
                <p className="text-sm text-foreground/70">
                  Dubai, United Arab Emirates · Remote
                </p>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h4 className="text-2xl font-bold mb-8 flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-primary/20 text-primary text-center mr-3 flex-shrink-0">
                E
              </span>
              Education
            </h4>
            
            <div className="space-y-8">
              {/* Education Item 1 */}
              <div className="relative pl-8 border-l border-border">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary/30 border-2 border-primary transform -translate-x-2"></div>
                <div className="mb-1 text-primary font-medium">2014 - 2018</div>
                <h5 className="text-xl font-bold mb-2">BSc in Computer Science</h5>
                <p className="text-muted-foreground mb-2">Tech University</p>
                <p className="text-sm text-foreground/70">
                  Specialized in web development and user interface design. Graduated with honors.
                </p>
              </div>
              
              {/* Education Item 2 */}
              <div className="relative pl-8 border-l border-border">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary/30 border-2 border-primary transform -translate-x-2"></div>
                <div className="mb-1 text-primary font-medium">2019</div>
                <h5 className="text-xl font-bold mb-2">Advanced JavaScript Certification</h5>
                <p className="text-muted-foreground mb-2">Frontend Masters</p>
                <p className="text-sm text-foreground/70">
                  Completed advanced courses in modern JavaScript, React, and state management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
