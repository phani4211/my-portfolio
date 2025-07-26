import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";

import {
  SiPython, SiR, SiMysql, SiScikitlearn, SiTensorflow, SiPytorch, SiKeras,
  SiApachehadoop, SiApachespark, SiApachekafka, SiMongodb, SiLinux, SiDocker,
  SiKubernetes, SiOracle, SiTableau, SiGooglecloud
} from "react-icons/si";

import {
  FaJava, FaAws, FaMicrosoft, FaGitAlt
} from "react-icons/fa";

import {
  DiScala, DiPostgresql
} from "react-icons/di";

import { IconType } from "react-icons";

type SkillItem = {
  name: string;
  icon: IconType;
};

const skills: { category: string; items: SkillItem[] }[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "R", icon: SiR },
      { name: "SQL (MySQL)", icon: SiMysql },
      { name: "Java", icon: FaJava },
      { name: "Scala", icon: DiScala },
      { name: "Linux/Unix", icon: SiLinux }
    ]
  },
  {
    category: "Machine Learning & AI",
    items: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Keras", icon: SiKeras },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Scikit-learn", icon: SiScikitlearn }
    ]
  },
  {
    category: "Data Engineering & Big Data",
    items: [
      { name: "Apache Spark", icon: SiApachespark },
      { name: "Apache Kafka", icon: SiApachekafka },
      { name: "Apache Hadoop", icon: SiApachehadoop },
      { name: "MongoDB", icon: SiMongodb }
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: FaAws },
      { name: "Azure", icon: FaMicrosoft },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes }
    ]
  },
  {
    category: "Database & Tools",
    items: [
      { name: "Oracle", icon: SiOracle },
      { name: "PostgreSQL", icon: DiPostgresql },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Git", icon: FaGitAlt }
    ]
  },
  {
    category: "Visualization & BI",
    items: [
      { name: "Tableau", icon: SiTableau }
    ]
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skillCategory, index) => (
            <Card key={index} className="tech-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {skillCategory.items.map(({ name, icon: Icon }, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="relative group w-16 h-16 flex items-center justify-center cursor-pointer"
                    >
                      <Icon className="text-5xl" />
                      <div className="absolute inset-0 bg-black bg-opacity-70 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md text-center px-2">
                        {name}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
