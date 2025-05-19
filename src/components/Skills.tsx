
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const skillsCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "ASP.NET", "C#", "REST API", "GraphQL", "JWT"],
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL", "SQL Server", "Firebase"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "CI/CD", "AWS", "Agile"],
    },
    {
      category: "Machine Learning",
      skills: ["Python", "TensorFlow", "PyTorch", "CNN", "RNN", "Computer Vision", "NLP"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skillsCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-background rounded-full text-sm border border-border/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl">
            <span className="font-semibold gradient-text">350+</span> Problems Solved on LeetCode
          </p>
        </div>
      </div>
    </section>
  );
}
