import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const experiences = [
  {
    title: "Senior Data Scientist",
    company: "Garmin",
    location: "Olathe, Kansas, USA",
    duration: "Sep 2024 - Present",
    description:
      "Developed AI-driven forecasting and anomaly detection systems using Python, R, and Spark; leveraged AWS and GCP to deliver scalable machine learning solutions that improved operational efficiency and customer experience at Garmin.",
  },
  {
    title: "Senior Data Scientist",
    company: "Seaboard Corporation",
    location: "Merriam, Kansas, USA",
    duration: "Nov 2023 - Aug 2024",
    description:
      "Developed and deployed ML models using Python and TensorFlow at Seaboard Corporation to optimize predictive analytics and healthcare outcomes, leveraging SQL, Spark, and Databricks for real-time data insights.",
  },
  {
    title: "Data Scientist",
    company: "Bank of America",
    location: "Bangalore, India",
    duration: "Sep 2022 - Jul 2023",
    description:
      "Built financial prediction models at Bank of America using Python, R, and ML algorithms, leveraging Hadoop, Spark, SQL, and AWS to optimize processes and enhance data-driven decision-making.",
  },
  {
    title: "Data Analyst",
    company: "Skechers",
    location: "Bangalore, India",
    duration: "Mar 2021 - Aug 2022",
    description:
      "Analyzed large datasets at Skechers using databases, visualization tools, and statistical techniques to uncover trends, support strategic planning, and deliver actionable insights for business process improvement.",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Professional journey in data science and technology
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-6 justify-center">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 px-6 mb-8"
                style={{ minWidth: 0 }}
              >
                <Card className="tech-card h-full">
                  <CardContent className="p-6 h-full">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                        <div className="flex items-center space-x-4 text-muted-foreground mb-2">
                          <div className="flex items-center space-x-2">
                            <Building className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-primary font-medium">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Description only */}
                    <div className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
