import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart4,
  BrainCircuit,
  Database,
  Cloud,
  Layers3,
  MonitorCheck
} from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "Machine Learning & AI",
    description: "Developing predictive models using Python, R, and frameworks like Scikit-learn, TensorFlow, and PyTorch."
  },
  {
    icon: BarChart4,
    title: "Data Analysis & Visualization",
    description: "Transforming raw data into insights using tools like Power BI, Tableau, and Python/R visualization libraries."
  },
  {
    icon: Database,
    title: "Data Engineering & ETL",
    description: "Building efficient data pipelines, cleaning large datasets, and integrating multiple sources using SQL and cloud tools."
  },
  {
    icon: Cloud,
    title: "Cloud & Big Data",
    description: "Deploying machine learning models and solutions using AWS, Azure, and big data tools like Spark and Databricks."
  },
  {
    icon: Layers3,
    title: "Deep Learning & NLP",
    description: "Designing neural networks for classification, time-series, and natural language processing applications."
  },
  {
    icon: MonitorCheck,
    title: "Model Evaluation & Deployment",
    description: "End-to-end model lifecycle management: validation, monitoring, and deployment into production environments."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services <span className="gradient-text">Offered</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empowering data-driven decisions through analytics, modeling, and cloud solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="tech-card h-full">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto tech-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Drive Insights from Your Data?</h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate to build intelligent, scalable, and impactful data solutions tailored to your business.
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full transition-colors"
                >
                  Get Started
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
