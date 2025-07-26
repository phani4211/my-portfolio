import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import phaniImage from "./phani111.png";
import awsBadge from "./aws-badge.png";
import azureBadge from "./azure-badge.svg";

export function HeroSection() {
  const navigate = useNavigate();

  const goToContactPage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              {/* 🔰 Vertical layout: badges above green title */}
              <div className="flex flex-col items-start space-y-2 ml-4">
                <div className="flex space-x-4">
                  {/* Azure badge link */}
                  <a
                    href="https://learn.microsoft.com/api/credentials/share/en-us/PhanindraNidamanuri-6379/30D66EA9720C9533?sharingId=7A42217347E31B92"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Microsoft Certified: Azure Data Scientist Associate"
                  >
                    <img
                      src={azureBadge}
                      alt="Azure Badge"
                      className="w-16 h-16 rounded-md shadow-lg hover:opacity-90 transition"
                    />
                  </a>

                  {/* AWS badge link */}
                  <a
                    href="https://www.credly.com/badges/08363994-bd09-48ff-8fe5-e98f19982752/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="AWS Certified: Machine Learning – Specialty"
                  >
                    <img
                      src={awsBadge}
                      alt="AWS Badge"
                      className="w-16 h-16 rounded-md shadow-lg hover:opacity-90 transition"
                    />
                  </a>
                </div>

                {/* ✅ Green enlarged title */}
                <p className="text-xl text-green-600 font-semibold tracking-wide uppercase">
                  Senior Data Scientist
                </p>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hello I'm <span className="gradient-text block">Phanindra</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                I specialize in developing scalable, high-performance data science solutions using Python, R, machine learning algorithms, and big data technologies.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={goToContactPage}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base group"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <a
                href="/Phanindra Nidamanuri - Data Scientist updates1.docx"
                download
                className="inline-flex items-center justify-center rounded-full px-8 py-6 text-base border border-input bg-background text-foreground hover:bg-primary/10 transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CSV
              </a>
            </div>

            {/* Experience metrics */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          {/* Right profile image */}
          <div className="flex justify-center">
            <img
              src={phaniImage}
              alt="Phanindra"
              className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              style={{ width: "500px", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
