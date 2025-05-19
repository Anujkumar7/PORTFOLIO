
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Study-Notion",
      description: "A MERN stack EdTech platform with comprehensive course management system and JWT authentication for secure user sessions.",
      tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Redux"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Sign Language Classifier",
      description: "A CNN-based application that translates sign language gestures into text in real-time, helping bridge communication barriers.",
      tags: ["Python", "TensorFlow", "OpenCV", "CNN", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      github: "#",
      demo: "#"
    },
    {
      title: "Senti-Vision",
      description: "An innovative application that performs sentiment analysis on automatically generated captions from images using RNNs and CNNs.",
      tags: ["Python", "PyTorch", "NLP", "Computer Vision", "RNN", "CNN"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover border border-border/50">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="bg-secondary px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="bg-secondary px-3 py-1 rounded-full text-xs">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </Button>
                <Button size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>Demo</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
