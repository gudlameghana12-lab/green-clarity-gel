import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Objectives from "@/components/Objectives";
import Ingredients from "@/components/Ingredients";
import Results from "@/components/Results";
import Discussion from "@/components/Discussion";
import Team from "@/components/Team";
import References from "@/components/References";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Introduction />
      <Objectives />
      <Ingredients />
      <Results />
      <Discussion />
      <Team />
      <References />
      
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 Natural Anti-Acne Gel Research Project. All rights reserved.
          </p>
          <p className="text-xs mt-2 opacity-80">
            Developed for academic purposes
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
