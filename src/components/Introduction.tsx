import { Card } from "./ui/card";
import { Leaf, Microscope, FlaskConical } from "lucide-react";

const Introduction = () => {
  return (
    <section id="introduction" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Introduction & Abstract
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center card-hover bg-card">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Scientific Research</h3>
              <p className="text-muted-foreground text-sm">
                Evidence-based formulation approach
              </p>
            </Card>

            <Card className="p-6 text-center card-hover bg-card">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Natural Ingredients</h3>
              <p className="text-muted-foreground text-sm">
                Herbal extracts with proven efficacy
              </p>
            </Card>

            <Card className="p-6 text-center card-hover bg-card">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Lab-Tested Formula</h3>
              <p className="text-muted-foreground text-sm">
                Rigorous evaluation and testing
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-card">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Understanding Acne
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              Acne vulgaris is a common skin condition affecting millions
              worldwide, characterized by inflammatory lesions, blackheads, and
              whiteheads. While conventional treatments exist, many contain
              synthetic chemicals that can cause side effects such as skin
              irritation, dryness, and long-term health concerns.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-primary">
              The Need for Herbal Alternatives
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              There is growing interest in herbal and natural remedies due to
              their perceived safety, minimal side effects, and sustainable
              sourcing. Traditional medicine has long used botanical ingredients
              like aloe vera, tea tree oil, and neem for their antibacterial,
              anti-inflammatory, and skin-healing properties.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Project Aim
            </h3>
            <p className="text-foreground leading-relaxed">
              This project aims to develop and evaluate a natural anti-acne gel
              formulation using scientifically proven herbal ingredients. The
              formulation will be assessed for stability, pH, spreadability, and
              antimicrobial efficacy to ensure it meets pharmaceutical standards
              while providing an effective, natural alternative to synthetic
              acne treatments.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
