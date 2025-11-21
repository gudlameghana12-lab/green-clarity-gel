import { Card } from "./ui/card";
import { CheckCircle2 } from "lucide-react";

const Objectives = () => {
  const objectives = [
    "To formulate a natural anti-acne gel using herbal ingredients with proven antibacterial and anti-inflammatory properties",
    "To evaluate the physicochemical properties of the formulated gel including pH, viscosity, spreadability, and consistency",
    "To assess the stability of the gel formulation under various storage conditions",
    "To test the antimicrobial efficacy against acne-causing bacteria (Propionibacterium acnes)",
    "To ensure the formulation is safe, non-irritating, and suitable for topical application",
    "To provide a cost-effective and sustainable alternative to synthetic acne treatments",
  ];

  return (
    <section id="objectives" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Project Objectives
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 text-lg">
              Our research goals and intended outcomes
            </p>
          </div>

          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <Card
                key={index}
                className="p-6 card-hover bg-card"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="text-foreground leading-relaxed">
                      {objective}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
