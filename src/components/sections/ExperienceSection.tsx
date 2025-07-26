import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building } from "lucide-react";

const technologies = [
  "Python", "R", "SQL", "TensorFlow", "Scikit-learn", "Apache Spark", 
  "Tableau", "Power BI", "Azure ML", "AWS", "Kafka", "Databricks", 
  "Docker", "Kubernetes", "NLP", "Pandas", "NumPy", "PyTorch"
];

const responsibilities = [
  "Developed and deployed machine learning models for prediction, recommendation, and anomaly detection using Python, R, and TensorFlow",
  "Designed ETL pipelines and automated data processing workflows using Apache Spark, SQL, and PySpark",
  "Built interactive dashboards and visualizations using Tableau, Power BI, and R Shiny to support business intelligence",
  "Leveraged cloud platforms (Azure, AWS, GCP) to train, evaluate, and deploy scalable AI models in production environments",
  "Applied feature engineering, dimensionality reduction, and cross-validation techniques to improve model performance",
  "Utilized NLP techniques for sentiment analysis and developed APIs for customer behavior prediction",
  "Handled large-scale structured and unstructured datasets using big data technologies like Hadoop, Kafka, and Databricks",
  "Collaborated with cross-functional teams in Agile settings, contributing to sprint planning, model reviews, and CI/CD integration for ML projects"
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey and key contributions in Data Science & Machine Learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="tech-card">
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div>
                  <CardTitle className="text-xl mb-2">Senior Data Scientist</CardTitle>
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Building className="h-4 w-4" />
                      <span>Garmin</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>Olathe, Kansas, USA</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">Sep 2024 – Present</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground italic">
                  "Led multiple machine learning and data analytics initiatives across industries, 
                  driving insights and performance through scalable, cloud-based AI solutions and real-time intelligence."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
