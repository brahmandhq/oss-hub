"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BookOpen,
  Code,
  Gift,
  Github,
  Heart,
  Search,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl py-5 font-bold tracking-tight text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text animate-gradient">
              Open Source Programs Guide
            </h1>

            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Your comprehensive resource for discovering, contributing, and
              growing in the world of open source programs and initiatives.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <Link href="/guide">
                <Button size="lg">
                  <Search className="mr-2 h-5 w-5" />
                  Explore Programs
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Separator />
      {/* Featured Programs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
              <Card
                key={program.title}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <program.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{program.title}</h3>
                </div>
                <div className="mb-4">
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={400}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </div>
                <p className="text-muted-foreground mb-4">
                  {program.description}
                </p>
                <div className="flex justify-between items-center">
                  <Link href={`/guide/${program.id}`} className="mt-auto">
                    <Button className="w-full">Learn More</Button>
                  </Link>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="h-4 w-4" />
                    <span>{program.stars}k</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const featuredPrograms = [
  {
    id: "GSOC",
    title: "Google Summer of Code",
    description:
      "A global program that matches students with open source, free software, and technology-related organizations to write code and get paid for it.",
    timeline: "March - September",
    stipend: "$1,500 - $3,300",
    icon: Code,
    image:
      "https://miro.medium.com/v2/resize:fit:1200/1*D2meRIye7myra_xB30wk6Q.png",
    tags: ["Students", "Coding", "Mentorship"],
    stars: 12,
  },
  {
    id: "Hacktoberfest",
    title: "Hacktoberfest",
    description:
      "A month-long celebration of open source software run by DigitalOcean, encouraging meaningful contributions to open source projects.",
    timeline: "October",
    stipend: "Swag rewards",
    icon: Gift,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJmpaTyrQjThhpSr2Xf3GirHN7gs63bLcNg&s",
    tags: ["Beginners", "Open Source", "Swag"],
    stars: 8,
  },
  {
    id: "MLHFellowship",
    title: "MLH Fellowship",
    description:
      "A remote internship alternative for aspiring software engineers, working with open source maintainers to build and maintain their projects.",
    timeline: "Year-round (12-week sessions)",
    stipend: "$5,000",
    icon: Users,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNte3XIUtWi9bAgbaSCSA5IC43YJHarh2fDNZZtrya24SfO6vjLnDK5SJQ3T6F_2CgaO4&usqp=CAU",
    tags: ["Students", "Remote", "Fellowship"],
    stars: 6,
  },
];
