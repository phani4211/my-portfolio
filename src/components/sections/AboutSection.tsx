import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate data scientist leveraging machine learning, statistical analysis, and big data tools to solve real-world business problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a data scientist with over 4+ years of experience developing AI-driven solutions, predictive models, and analytics platforms. 
              My journey in data science has been driven by curiosity and a passion for turning data into actionable insights that drive impact.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I specialize in Python, R, SQL, and cloud tools such as AWS and Azure. 
              I've worked across domains like IoT, fintech, and healthcare, building scalable analytics solutions, dashboards, and ML pipelines using tools like PyTorch, TensorFlow, and Spark.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Machine Learning</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Deep Learning</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Cloud Deployment (AWS/Azure)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Data Storytelling & Visualization</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="tech-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Education</h3>
                    <p className="text-sm text-muted-foreground">Master's in Computer Science</p>
                    <p className="text-sm text-muted-foreground">University of Central Missouri</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="tech-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Graduation</h3>
                    <p className="text-sm text-muted-foreground">Expected: May 2025</p>
                    <p className="text-sm text-muted-foreground">University of Central Missouri</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="tech-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Experience</h3>
                    <p className="text-sm text-muted-foreground">3+ Years in Data Science</p>
                    <p className="text-sm text-muted-foreground">Garmin, Cognizant, UCM Research</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
