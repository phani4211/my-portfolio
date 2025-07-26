import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, Database, Cloud, LineChart, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";

const services = [
  {
    icon: Brain,
    title: "Machine Learning & AI Solutions",
    description: "Designing, training, and deploying ML models for predictions, recommendations, and NLP tasks.",
    features: [
      "Predictive Modeling",
      "NLP & Text Analytics",
      "Anomaly Detection",
      "Deep Learning with TensorFlow & PyTorch"
    ]
  },
  {
    icon: Database,
    title: "Data Engineering & Pipelines",
    description: "Building scalable pipelines for data extraction, transformation, and loading (ETL).",
    features: [
      "ETL Pipeline Development",
      "Big Data Processing (Spark, Hadoop)",
      "SQL & NoSQL Integration",
      "Real-time Streaming with Kafka"
    ]
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Visualization",
    description: "Transforming raw data into actionable insights using modern BI tools and dashboards.",
    features: [
      "Dashboard Development (Tableau, Power BI)",
      "KPI Tracking & Visualization",
      "Storytelling with Data",
      "Interactive Reporting"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & MLOps",
    description: "Deploying and monitoring scalable AI solutions on cloud platforms using CI/CD practices.",
    features: [
      "Azure ML, AWS, GCP Deployment",
      "Docker & Kubernetes",
      "Model Versioning & Monitoring",
      "CI/CD for ML Models"
    ]
  },
  {
    icon: LineChart,
    title: "Advanced Analytics & Forecasting",
    description: "Leveraging time series, clustering, and statistical modeling for business optimization.",
    features: [
      "Time Series Forecasting",
      "Segmentation & Clustering",
      "A/B Testing & Hypothesis Testing",
      "Feature Engineering"
    ]
  },
  {
    icon: Layers,
    title: "AI Strategy & Consulting",
    description: "Helping organizations define and implement AI-driven transformation strategies.",
    features: [
      "Use Case Identification",
      "AI Readiness Assessment",
      "Custom Solution Design",
      "Cross-functional Collaboration"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Services <span className="gradient-text">Offered</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Data-driven services to transform your business with AI and analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="tech-card h-full">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;