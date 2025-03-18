import { notFound } from "next/navigation";
import {
  Calendar,
  Globe,
  Heart,
  Users,
  Code,
  Gift,
  BookOpen,
  Trophy,
  Rocket,
  Bot,
  Book,
  Paintbrush,
  ChefHat,
  Laptop,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  return programs.map((program) => ({
    id: program.id,
  }));
}
const programs = [
  {
    id: "GSOC",
    title: "Google Summer of Code",
    description:
      "A global program that matches students with open source, free software, and technology-related organizations to write code and get paid for it.",
    timeline: "March - September",
    stipend: "$1,500 - $3,300",
    icon: Code,
    link: "/programs/gsoc",
    tags: ["Students", "Coding", "Mentorship"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/GSoC_logo.svg/1200px-GSoC_logo.svg.png",
  },
  {
    id: "Outreachy",
    title: "Outreachy",
    description:
      "Provides internships in open source and open science to people subject to systemic bias and impacted by underrepresentation in the technical industry.",
    timeline: "December - March & May - August",
    stipend: "$6,000",
    icon: Heart,
    link: "/programs/outreachy",
    tags: ["Diversity", "Internship", "Remote"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Outreachy-bot-avatar.svg/1646px-Outreachy-bot-avatar.svg.png",
  },
  {
    id: "Hacktoberfest",
    title: "Hacktoberfest",
    description:
      "A month-long celebration of open source software run by DigitalOcean, encouraging meaningful contributions to open source projects.",
    timeline: "October",
    stipend: "Swag rewards",
    icon: Gift,
    link: "/programs/hacktoberfest",
    tags: ["Beginners", "Open Source", "Swag"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZlh8NgUoArqNKUxE-vtN4jKXQZpuG3L_zw&s",
  },
  {
    id: "MLHFellowship",
    title: "MLH Fellowship",
    description:
      "A remote internship alternative for aspiring software engineers, working with open source maintainers to build and maintain their projects.",
    timeline: "Year-round (12-week sessions)",
    stipend: "$5,000",
    icon: Users,
    link: "/programs/mlh-fellowship",
    tags: ["Students", "Remote", "Fellowship"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWneh8QgboyXva8BcK3b5uH8u1X5cUxUD4gA&s",
  },
  {
    id: "SeasonOfKDE",
    title: "Season of KDE",
    description:
      "Annual program offering students the opportunity to contribute to KDE community projects.",
    timeline: "January - March",
    stipend: "Certificate",
    icon: Globe,
    link: "/programs/season-of-kde",
    tags: ["KDE", "Open Source", "Students"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIiyFPo1YwW5tIYfFN1aivCLUV3A2CyAO6EA&s",
  },
  {
    id: "LFXMentorship",
    title: "LFX Mentorship",
    description:
      "Linux Foundation mentorship program connecting experienced open source developers with mentees.",
    timeline: "Year-round",
    stipend: "$3,000 - $6,600",
    icon: BookOpen,
    link: "/programs/lfx-mentorship",
    tags: ["Linux", "Mentorship", "Open Source"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQD0pUBzhqaGKqZMbpzQZI0X-N6kCekFPj2Q&s",
  },
  {
    id: "SeasonOfDocs",
    title: "Google Season of Docs",
    description:
      "Program connecting open source projects with technical writers to improve documentation.",
    timeline: "March - November",
    stipend: "Project-based",
    icon: Trophy,
    link: "/programs/season-of-docs",
    tags: ["Documentation", "Technical Writing"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2zg1DzIUfrz5hPALFQ8aMVmA84Ofj0cMnw&s",
  },
  {
    id: "FOSSASIA",
    title: "GSOC of FOSSASIA",
    description:
      "Mentorship program focused on introducing new developers to FOSS projects in Asia.",
    timeline: "June - August",
    stipend: "$1,500",
    icon: Rocket,
    link: "/programs/fossasia",
    tags: ["FOSS", "Asia", "Students"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0GGkpd-Xtao-2NlFCur92Y5ht-7n3To4uwQ&s",
  },
  {
    id: "GoogleCodeIn",
    title: "Google Code-in",
    description:
      "A global, online contest introducing pre-university students (ages 13-17) to open source software development.",
    timeline: "November - January",
    stipend: "Certificates and prizes",
    icon: Code,
    link: "/programs/google-code-in",
    tags: ["Pre-university", "Coding", "Contest"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkscszxS71BsoyQ_4e2NY79LvFkJlAmzdlWw&s",
  },
  {
    id: "RailsGirlsSummerOfCode",
    title: "Rails Girls Summer of Code",
    description:
      "A global fellowship program aimed at bringing more diversity into Open Source, focusing on women and non-binary individuals.",
    timeline: "July - September",
    stipend: "€1,500 per month",
    icon: Heart,
    link: "/programs/rails-girls-summer-of-code",
    tags: ["Diversity", "Ruby on Rails", "Fellowship"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr5IhCF5wIlDGEL6_nOKL7hiihRfFumHSJA&s",
  },
  {
    id: "OpenRoberta",
    title: "Open Roberta",
    description:
      "An initiative encouraging children to code by using robots such as Lego Mindstorms and other programmable hardware systems.",
    timeline: "Year-round",
    stipend: "N/A",
    icon: Bot,
    link: "/programs/open-roberta",
    tags: ["Education", "Robotics", "Children"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTocdHak55os6MVnzeAAdtaS_aZIcIWyLYg_A&s",
  },
  {
    id: "Curriki",
    title: "Curriki",
    description:
      "An online platform providing free and open educational resources primarily in support of K-12 education.",
    timeline: "Year-round",
    stipend: "N/A",
    icon: Book,
    link: "/programs/curriki",
    tags: ["Education", "K-12", "Open Educational Resources"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHC59DHdCre8JMpBdGXWdFxC1N2ahcy5X6sQ&s",
  },
  {
    id: "MozillaOpenLeaders",
    title: "Mozilla Open Leaders",
    description:
      "A program that mentors open project leaders to help them build sustainable communities around their work.",
    timeline: "Twice a year",
    stipend: "N/A",
    icon: Users,
    link: "/programs/mozilla-open-leaders",
    tags: ["Leadership", "Open Source", "Mentorship"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWTKWsLIo1o6luOxFS7m3n504y_dVYyLjhug&s",
  },
  {
    id: "ProcessingFoundationFellowships",
    title: "Processing Foundation Fellowships",
    description:
      "Supports artists, coders, and educators to develop projects that expand the reach and impact of the Processing software.",
    timeline: "Varies",
    stipend: "$1,000 - $3,000",
    icon: Paintbrush,
    link: "/programs/processing-foundation-fellowships",
    tags: ["Art", "Coding", "Education"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4IDeecXbBT_jMcrlAy-IQg_jrbXHCoeeFtQ&s",
  },
  {
    id: "RedHatOpenSourceContest",
    title: "Red Hat Open Source Contest",
    description:
      "Encourages students to contribute to open source projects, with mentorship and rewards for successful contributions.",
    timeline: "Annual",
    stipend: "Varies",
    icon: ChefHat,
    link: "/programs/red-hat-open-source-contest",
    tags: ["Students", "Open Source", "Mentorship"],
    logo: "https://miro.medium.com/v2/resize:fit:928/0*tp9JdbF_30AQYnTY.png",
  },
  {
    id: "LinuxFoundationTrainingScholarships",
    title: "The Linux Foundation Training (LiFT) Scholarships",
    description:
      "Provides training scholarships to individuals who show interest in Linux and open source but do not have the means to afford training.",
    timeline: "Annual",
    stipend: "Training courses",
    icon: Laptop,
    link: "/programs/linux-foundation-training-scholarships",
    tags: ["Linux", "Training"],
    logo: "https://lcom.static.linuxfound.org/sites/lcom/files/lift-001.png",
  },
];

export default function GuideDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const program = programs.find((p) => p.id === params.id);

  if (!program) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background py-16 px-8 flex justify-center">
      <div className="max-w-5xl w-full">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-12">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={program.logo}
                alt={program.title}
                width={80}
                height={80}
                className="rounded-lg shadow-md"
              />
              {/* <program.icon className="h-8 w-8 text-primary" /> */}
              <h1 className="text-3xl font-bold">{program.title}</h1>
            </div>

            <p className="text-muted-foreground mb-4">{program.description}</p>

            <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
              <Calendar className="h-5 w-5" />
              <span>{program.timeline}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Gift className="h-5 w-5 text-primary" />
              <span>{program.stipend}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {program.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full transition-colors hover:bg-primary hover:text-black"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link href="/guide">
              <Button variant="outline" className="w-full">
                Back to Guide
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
