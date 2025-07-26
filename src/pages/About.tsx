import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Passionate about creating innovative solutions and building scalable applications
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I’m an experienced data scientist passionate about leveraging advanced machine learning, big data analytics, and statistical modeling to deliver scalable, data-driven solutions that drive business impact and innovation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With 4+ years of hands-on experience in data science, I excel at applying machine learning and big data analytics to solve complex business problems.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {["Problem Solving", "Team Collaboration", "Critical Thinking", "Clean Code"].map((skill) => (
                <div key={skill} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Education Card */}
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

            {/* Experience Card */}
            <Card className="tech-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Experience</h3>
                    <p className="text-sm text-muted-foreground">4+ Years in Data Science</p>
                    <p className="text-sm text-muted-foreground">Machine Learning & Data Analytics</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications Card */}
            <Card className="tech-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Certifications</h3>
                    <p className="text-sm text-muted-foreground">Verified Industry Credentials</p>
                  </div>
                </div>

                {/* Certification Title Links */}
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <a
                      href="https://learn.microsoft.com/api/credentials/share/en-us/PhanindraNidamanuri-6379/30D66EA9720C9533?sharingId=7A42217347E31B92"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Microsoft Certified: Azure Data Scientist Associate
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.credly.com/badges/08363994-bd09-48ff-8fe5-e98f19982752/public_url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      AWS Certified: Machine Learning – Specialty
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
