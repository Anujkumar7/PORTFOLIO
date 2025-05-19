
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Work Experience</h2>
        
        {/* First experience - EDILINK Solutions */}
        <Card className="mt-8 card-hover">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="flex gap-3 items-center">
                <div className="bg-accent/10 p-2 rounded-md">
                  <Briefcase className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Software Developer Intern</h3>
              </div>
              <div className="text-muted-foreground">EDILINK Solutions</div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">May 2022 - August 2022</p>
            
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Built a multi-page internal web portal using ASP.NET, C#, JavaScript, HTML, and CSS that streamlined internal processes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Optimized backend SQL queries resulting in 40% improvement in database query performance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Collaborated with a team of 5 developers using Agile methodologies to deliver projects on schedule</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Participated in code reviews and implemented feedback to improve code quality and maintainability</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">ASP.NET</span>
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">C#</span>
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">JavaScript</span>
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">SQL</span>
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">HTML/CSS</span>
            </div>
          </CardContent>
        </Card>
        
        {/* New experience - BESSALANI */}
        <Card className="mt-8 card-hover">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="flex gap-3 items-center">
                <div className="bg-accent/10 p-2 rounded-md">
                  <Briefcase className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Full Stack Developer Intern</h3>
              </div>
              <div className="text-muted-foreground">BESSALANI</div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">July 2022 - September 2022, Bangalore, India</p>
            
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Implemented the application using MERN stack which includes MongoDB, Express.js, React.js, Node.js</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Used various frontend and backend libraries and modules such as Nodemailer, Multer, Socket.io, Chart.js, Tailwind, react-redux toolkit, react-carousel, react-calendar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Designed and implemented the chat section between seller and buyer using Socket.io</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Overall internship helped me gain experience in Javascript and improve my teamwork and communication skills</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">MongoDB</span>
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">Express.js</span>
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">React.js</span>
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">Socket.io</span>
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">Tailwind</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
