import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Download, CheckCircle, Lightbulb, Target } from "lucide-react";

const Discussion = () => {
  const keyFindings = [
    "Successfully formulated a stable natural anti-acne gel with optimal physicochemical properties",
    "Demonstrated significant antimicrobial activity against acne-causing bacteria",
    "Achieved pH levels suitable for topical skin application without irritation",
    "Maintained stability under various storage conditions for 90 days",
    "Natural ingredients showed synergistic effects in combating acne",
  ];

  const benefits = [
    {
      title: "Natural & Safe",
      description:
        "Free from harsh synthetic chemicals, suitable for sensitive skin",
      icon: CheckCircle,
    },
    {
      title: "Cost-Effective",
      description:
        "Utilizes readily available herbal ingredients at lower production costs",
      icon: Target,
    },
    {
      title: "Sustainable",
      description:
        "Environmentally friendly formulation with biodegradable components",
      icon: Lightbulb,
    },
  ];

  return (
    <section id="discussion" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Discussion & Conclusion
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <Card className="p-8 mb-8 bg-card">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Key Findings
            </h3>
            <div className="space-y-4">
              {keyFindings.map((finding, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground leading-relaxed">{finding}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 text-center card-hover bg-card">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 mb-8 bg-card">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Conclusion
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              This research successfully demonstrates the development of an
              effective natural anti-acne gel formulation using herbal
              ingredients. The formulated gel exhibited excellent physicochemical
              properties, maintained stability under various conditions, and
              showed significant antimicrobial activity against acne-causing
              bacteria.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The combination of aloe vera, tea tree oil, and neem extract proved
              to be highly effective, leveraging the individual therapeutic
              properties of each ingredient while creating a synergistic effect.
              The formulation's pH, viscosity, and spreadability were all within
              acceptable pharmaceutical ranges, ensuring safety and efficacy for
              topical application.
            </p>
            <p className="text-foreground leading-relaxed">
              This natural alternative to synthetic acne treatments offers a
              promising solution for individuals seeking effective, safe, and
              sustainable skincare options. Further clinical trials and long-term
              studies are recommended to fully establish the formulation's
              therapeutic efficacy in diverse patient populations.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">
                Download Complete Project Report
              </h3>
              <p className="text-muted-foreground mb-6">
                Access the full documentation including detailed methodology,
                results, and references
              </p>
              <Button size="lg" className="group">
                <Download className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Download PDF Report
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Discussion;
