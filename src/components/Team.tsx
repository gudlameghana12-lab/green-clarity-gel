import { Card } from "./ui/card";
import { Mail, GraduationCap, UserCircle } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Student Name 1",
      role: "Lead Researcher",
      department: "Pharmaceutical Sciences",
      email: "student1@university.edu",
    },
    {
      name: "Student Name 2",
      role: "Research Assistant",
      department: "Pharmaceutical Sciences",
      email: "student2@university.edu",
    },
    {
      name: "Student Name 3",
      role: "Laboratory Analyst",
      department: "Pharmaceutical Sciences",
      email: "student3@university.edu",
    },
  ];

  const guide = {
    name: "Dr. Guide Name",
    title: "Professor & Project Guide",
    department: "Department of Pharmaceutical Sciences",
    institution: "University Name",
    email: "guide@university.edu",
  };

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Project Team
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 text-lg">
              Meet the researchers behind this project
            </p>
          </div>

          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-1 text-foreground">
                  {guide.name}
                </h3>
                <p className="text-primary font-semibold mb-2">{guide.title}</p>
                <p className="text-muted-foreground mb-1">{guide.department}</p>
                <p className="text-muted-foreground mb-3">{guide.institution}</p>
                <a
                  href={`mailto:${guide.email}`}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  {guide.email}
                </a>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 card-hover bg-card">
                <div className="text-center">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserCircle className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.department}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    Contact
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 mt-8 bg-muted/30 border-dashed">
            <p className="text-center text-muted-foreground text-sm">
              <strong>Note:</strong> This is a template. Please update team
              member names, roles, and contact information with actual project
              details.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
