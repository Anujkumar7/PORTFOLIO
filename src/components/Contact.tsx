
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, Code } from "lucide-react";

export default function Contact() {
  const contactLinks = [
    {
      name: "GitHub",
      url: "https://github.com/anujkumar",
      icon: Github,
      color: "hover:text-gray-800 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/anujkumar",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/anujkumar",
      icon: Code,
      color: "hover:text-yellow-500",
    },
    {
      name: "Email",
      url: "mailto:anujkumar@example.com",
      icon: Mail,
      color: "hover:text-red-500",
    },
    {
      name: "Resume",
      url: "#",
      icon: FileText,
      color: "hover:text-green-500",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Contact</h2>
        
        <Card className="mt-8 max-w-2xl mx-auto">
          <CardContent className="p-6">
            <p className="text-center mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 transition-transform hover:-translate-y-1"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className={`rounded-full h-12 w-12 ${link.color}`}
                  >
                    <link.icon className="h-5 w-5" />
                  </Button>
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button asChild>
                <a href="mailto:anujkumar@example.com">
                  Send Email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
