import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle2, TrendingUp, Activity } from "lucide-react";

const Results = () => {
  const physicochemicalTests = [
    {
      parameter: "pH Value",
      result: "5.8 - 6.2",
      standard: "5.5 - 7.0",
      status: "pass",
      interpretation: "Suitable for skin application",
    },
    {
      parameter: "Viscosity",
      result: "15,000 - 18,000 cps",
      standard: "10,000 - 20,000 cps",
      status: "pass",
      interpretation: "Good gel consistency",
    },
    {
      parameter: "Spreadability",
      result: "6.2 - 6.8 cm",
      standard: "> 5.0 cm",
      status: "pass",
      interpretation: "Excellent spread on skin",
    },
    {
      parameter: "Appearance",
      result: "Transparent green gel",
      standard: "Homogeneous",
      status: "pass",
      interpretation: "Visually appealing",
    },
  ];

  const stabilityTests = [
    {
      condition: "Room Temperature (25°C)",
      duration: "90 days",
      result: "Stable",
      changes: "No phase separation or color change",
    },
    {
      condition: "Refrigerated (4°C)",
      duration: "90 days",
      result: "Stable",
      changes: "Maintained consistency and properties",
    },
    {
      condition: "Elevated Temperature (40°C)",
      duration: "90 days",
      result: "Stable",
      changes: "Slight viscosity decrease, pH stable",
    },
  ];

  const antimicrobialData = [
    { bacteria: "Propionibacterium acnes", inhibition: "92%" },
    { bacteria: "Staphylococcus aureus", inhibition: "88%" },
    { bacteria: "Staphylococcus epidermidis", inhibition: "85%" },
  ];

  return (
    <section id="results" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Formulation & Evaluation Results
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 text-lg">
              Comprehensive testing and analysis
            </p>
          </div>

          <div className="mb-12">
            <Card className="p-8 bg-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">
                  Physicochemical Properties
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">
                        Parameter
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Result
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Standard Range
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Interpretation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {physicochemicalTests.map((test, index) => (
                      <tr
                        key={index}
                        className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                      >
                        <td className="py-4 px-4 font-medium">
                          {test.parameter}
                        </td>
                        <td className="py-4 px-4 text-primary font-semibold">
                          {test.result}
                        </td>
                        <td className="py-4 px-4 text-muted-foreground">
                          {test.standard}
                        </td>
                        <td className="py-4 px-4">
                          <Badge className="bg-primary/10 text-primary border-0 hover:bg-primary/20">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Pass
                          </Badge>
                        </td>
                        <td className="py-4 px-4 text-sm text-muted-foreground">
                          {test.interpretation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Stability Testing</h3>
              </div>

              <div className="space-y-4">
                {stabilityTests.map((test, index) => (
                  <div
                    key={index}
                    className="p-4 bg-muted/30 rounded-lg border border-border"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">
                        {test.condition}
                      </h4>
                      <Badge className="bg-primary/10 text-primary border-0">
                        {test.result}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Duration: {test.duration}
                    </p>
                    <p className="text-sm text-foreground">{test.changes}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Antimicrobial Efficacy</h3>
              </div>

              <p className="text-muted-foreground mb-6">
                Zone of inhibition testing against acne-causing bacteria
              </p>

              <div className="space-y-4">
                {antimicrobialData.map((data, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {data.bacteria}
                      </span>
                      <span className="text-sm font-bold text-primary">
                        {data.inhibition}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                        style={{ width: data.inhibition }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <strong className="text-primary">Note:</strong> High inhibition
                rates demonstrate strong antibacterial activity against
                acne-causing microorganisms.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
