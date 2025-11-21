import { Card } from "./ui/card";
import { BookOpen, ExternalLink } from "lucide-react";

const References = () => {
  const references = [
    {
      authors: "Smith, J. et al.",
      year: "2022",
      title:
        "Efficacy of Aloe Vera in Treatment of Acne Vulgaris: A Systematic Review",
      journal: "Journal of Dermatological Science",
      volume: "45(2)",
      pages: "123-134",
    },
    {
      authors: "Johnson, R. & Lee, S.",
      year: "2021",
      title:
        "Antibacterial Properties of Tea Tree Oil Against Propionibacterium Acnes",
      journal: "International Journal of Cosmetic Science",
      volume: "38(4)",
      pages: "289-297",
    },
    {
      authors: "Kumar, A. et al.",
      year: "2023",
      title: "Neem Extract in Modern Dermatology: Applications and Benefits",
      journal: "Pharmaceutical Biology",
      volume: "51(3)",
      pages: "445-452",
    },
    {
      authors: "Williams, M. & Brown, K.",
      year: "2022",
      title:
        "Formulation and Evaluation of Herbal Anti-Acne Gel: A Comprehensive Study",
      journal: "Asian Journal of Pharmaceutics",
      volume: "12(1)",
      pages: "67-78",
    },
    {
      authors: "Garcia, L. et al.",
      year: "2021",
      title: "Natural Alternatives in Acne Treatment: A Review",
      journal: "Journal of Clinical and Aesthetic Dermatology",
      volume: "14(5)",
      pages: "34-42",
    },
    {
      authors: "Patel, S. & Singh, R.",
      year: "2023",
      title:
        "Stability Studies of Herbal Gel Formulations: Methods and Parameters",
      journal: "Indian Journal of Pharmaceutical Sciences",
      volume: "85(2)",
      pages: "156-165",
    },
  ];

  const webResources = [
    {
      title: "WHO Guidelines on Herbal Medicines",
      url: "https://www.who.int/",
    },
    {
      title: "National Center for Biotechnology Information (NCBI)",
      url: "https://www.ncbi.nlm.nih.gov/",
    },
    {
      title: "International Journal of Cosmetic Science",
      url: "https://onlinelibrary.wiley.com/",
    },
  ];

  return (
    <section id="references" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">References</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 text-lg">
              Scientific literature and research sources
            </p>
          </div>

          <Card className="p-8 mb-8 bg-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Research Papers & Journals</h3>
            </div>

            <div className="space-y-6">
              {references.map((ref, index) => (
                <div
                  key={index}
                  className="pl-8 border-l-2 border-primary/20 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-sm font-bold text-primary">
                      [{index + 1}]
                    </span>
                    <div>
                      <p className="text-foreground font-medium mb-1">
                        {ref.authors} ({ref.year})
                      </p>
                      <p className="text-foreground italic mb-2">{ref.title}</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">{ref.journal}</span>,{" "}
                        {ref.volume}, pp. {ref.pages}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-card">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-primary" />
              Online Resources
            </h3>
            <div className="space-y-4">
              {webResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {resource.title}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </Card>

          <Card className="p-6 mt-8 bg-muted/30 border-dashed">
            <p className="text-center text-muted-foreground text-sm">
              <strong>Note:</strong> These are example references. Please
              replace with actual sources used in your research project.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default References;
