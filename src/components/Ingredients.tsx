import { Card } from "./ui/card";
import { Droplets, Leaf, Sparkles } from "lucide-react";
import aloeImage from "@/assets/aloe-vera.jpg";
import teaTreeImage from "@/assets/tea-tree.jpg";
import neemImage from "@/assets/neem.jpg";
import formulationImage from "@/assets/formulation.jpg";

const Ingredients = () => {
  const ingredients = [
    {
      name: "Aloe Vera Gel",
      image: aloeImage,
      icon: Droplets,
      benefits: [
        "Anti-inflammatory properties",
        "Skin healing and moisturizing",
        "Soothes irritated skin",
        "Rich in vitamins and minerals",
      ],
      percentage: "40%",
    },
    {
      name: "Tea Tree Oil",
      image: teaTreeImage,
      icon: Leaf,
      benefits: [
        "Powerful antibacterial agent",
        "Reduces acne-causing bacteria",
        "Anti-inflammatory effects",
        "Natural antiseptic",
      ],
      percentage: "5%",
    },
    {
      name: "Neem Extract",
      image: neemImage,
      icon: Sparkles,
      benefits: [
        "Strong antimicrobial activity",
        "Treats acne and blemishes",
        "Purifies and detoxifies skin",
        "Traditional medicinal use",
      ],
      percentage: "3%",
    },
  ];

  const methodology = [
    {
      step: "1",
      title: "Ingredient Preparation",
      description:
        "Extract and purify natural ingredients. Measure precise quantities of each component.",
    },
    {
      step: "2",
      title: "Base Gel Formation",
      description:
        "Prepare the gel base using carbomer and neutralizing agents to achieve proper consistency.",
    },
    {
      step: "3",
      title: "Active Incorporation",
      description:
        "Gradually add herbal extracts and essential oils while maintaining optimal temperature.",
    },
    {
      step: "4",
      title: "Homogenization",
      description:
        "Mix thoroughly to ensure uniform distribution of all active ingredients.",
    },
    {
      step: "5",
      title: "Quality Testing",
      description:
        "Conduct pH testing, viscosity measurement, and stability assessment.",
    },
    {
      step: "6",
      title: "Packaging",
      description:
        "Store in airtight, sterile containers to maintain formulation integrity.",
    },
  ];

  return (
    <section id="ingredients" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Key Ingredients & Methodology
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 text-lg">
              Natural botanical ingredients backed by science
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {ingredients.map((ingredient, index) => {
              const Icon = ingredient.icon;
              return (
                <Card
                  key={index}
                  className="overflow-hidden card-hover bg-card"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={ingredient.image}
                      alt={ingredient.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {ingredient.percentage}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{ingredient.name}</h3>
                    </div>
                    <ul className="space-y-2">
                      {ingredient.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-0.5">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">
              Formulation Methodology
            </h3>
            <div
              className="rounded-2xl overflow-hidden mb-8"
              style={{ maxHeight: "400px" }}
            >
              <img
                src={formulationImage}
                alt="Laboratory formulation process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((item, index) => (
              <Card key={index} className="p-6 card-hover bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
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

export default Ingredients;
