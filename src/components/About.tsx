
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <p className="text-lg">
              I'm a Software Engineer with a passion for building robust and efficient web applications.
              I recently graduated with a Bachelor of Technology in Computer Science from Guru Gobind Singh Indraprastha University
              with a CGPA of 8.3.
            </p>
            <p className="text-lg">
              My journey in software development has taken me through full-stack development, 
              from MERN stack to ASP.NET, and I'm constantly expanding my skills to stay updated
              with the latest technologies and best practices.
            </p>
            <p className="text-lg">
              When I'm not coding, I enjoy solving algorithmic problems on LeetCode, 
              where I've solved more than 350 problems to sharpen my problem-solving abilities.
            </p>
          </div>
          <div>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold">B.Tech in Computer Science</h4>
                    <span className="text-sm text-muted-foreground">2019 - 2023</span>
                  </div>
                  <p className="text-muted-foreground">Guru Gobind Singh Indraprastha University</p>
                  <p className="mt-1">CGPA: 8.3/10</p>
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-6">Certifications</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Node.js Development - Coursera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>React Development - Coursera</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
