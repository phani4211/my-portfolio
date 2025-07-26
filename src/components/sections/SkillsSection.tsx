import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "SQL", "Java"]
  },
  {
    title: "ML & Data Science Tools",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy"]
  },
  {
    title: "Cloud & Big Data",
    skills: ["AWS", "Azure", "Databricks", "Apache Spark"]
  },
  {
    title: "Visualization & BI Tools",
    skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise in data science, cloud, and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="tech-card h-full">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div key={i} className="text-sm text-muted-foreground">
                    • {skill}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
