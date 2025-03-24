"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import Link from "next/link";

const programs = [
  {
    id: "GSOC",
    title: "Google Summer of Code",
    description:
      "A global program that matches students with open source, free software, and technology-related organizations to write code and get paid for it.",
    timeline: "March - September",
    stipend: "$1,500 - $3,300",
    icon: Code,
    link: "https://summerofcode.withgoogle.com/",
    tags: ["Students", "Coding", "Mentorship"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/GSoC_logo.svg/1200px-GSoC_logo.svg.png",
  },
  {
    id: "Outreachy",
    title: "Outreachy",
    description:
      "Provides internships in open source and open science to people subject to systemic bias and impacted by underrepresentation in the technical industry.",
    timeline: "December - March & May - August",
    stipend: "$7,000",
    icon: Heart,
    link: "https://www.outreachy.org/",
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
    link: "https://hacktoberfest.com/",
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
    link: "https://fellowship.mlh.io/",
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
    link: "https://mentorship.kde.org/sok/",
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
    link: "https://lfx.linuxfoundation.org/tools/mentorship/",
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
    link: "https://opensource.googleblog.com/2024/02/announcing-google-season-of-docs-2024.html",
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
    link: "https://fossi-foundation.org/gsoc",
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
    link: "https://code.google.com/",
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
    link: "https://railsgirlssummerofcode.org/",
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
    link: "https://lab.open-roberta.org/",
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
    link: "https://www.curriki.org/",
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
    link: "https://foundation.mozilla.org/en/initiatives/mozilla-open-leaders/",
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
    link: "https://processingfoundation.org/fellowships",
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
    link: "https://research.redhat.com/events/open-source-contest/",
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
    link: "https://training.linuxfoundation.org/blog/lift-2024/",
    tags: ["Linux", "Training"],
    logo: "https://lcom.static.linuxfound.org/sites/lcom/files/lift-001.png",
  },
  {
    id: "TOR",
    title: "TOR Summer of Privacy",
    description:
      "The Tor Project, in collaboration with The Electronic Frontier Foundation, has taken part in Google Summer of Code for 2007 through 2014, mentoring a total of 53 students.",
    timeline: "April - September",
    stipend: "$5,500",
    icon: Code,
    link: "https://gitlab.torproject.org/legacy/trac/-/wikis/org/TorSoP#tor-summer-of-privacy-2015----applications-due-april-17th",
    tags: ["Students", "Security", "Mentorship"],
    logo: "https://gitlab.torproject.org/uploads/-/system/appearance/header_logo/1/purple.svg",
  },
  {
    id: "DataOne",
    title: "Data One Summer Programme",
    description:
      "Undergraduates, graduates and recent postgraduates are invited to apply to work remotely with DataONE for nine weeks.",
    timeline: "May - July",
    stipend: "$5,000",
    icon: Code,
    link: "https://lternet.edu/opportunities/dataone-summer-internship-program/",
    tags: ["Graduate", "Post-Graduate", "Collabarative"],
    logo: "https://lternet.edu/wp-content/themes/ndic/library/images/logo.svg",
  },
  {
    id: "JULIA",
    title: "Julia Summer Of Code",
    description:
      "The Julia Seasons of Contributions (JSoC) are the seasonal programs for funding and/or mentoring developers to contribute to the open source ecosystem. Below are the current programs that the Julia Language is participating in.",
    timeline: "Annual",
    stipend: "$5,000 - $9,000",
    icon: Code,
    link: "https://julialang.org/jsoc/",
    tags: ["Graduate", "Post-Graduate", "Collabarative"],
    logo: "https://julialang.org/assets/infra/logo.svg",
  },
  {
    id: "SummerOfHaskell",
    title: "Summer Of Haskell",
    description:
      "The Summer of Haskell is an effort by Haskell.Org to reach out to students and encourage them to contribute to the Haskell community with the aid of experienced mentors.",
    timeline: "Annual",
    stipend: "$1.500 - $3,300",
    icon: Code,
    link: "https://summer.haskell.org/",
    tags: ["Students", "Collaborative", "Mentorship"],
    logo: "https://summer.haskell.org/images/haskell-logo.png",
  },
  {
    id: "OpenSOC",
    title: "Open Summer Of Code",
    description:
      "A 4-week summer programme in July, that provides Belgian based students the training, network and support necessary to transform open innovation projects into powerful real-world services.",
    timeline: "July - November",
    stipend: "$1.000 - $2,000",
    icon: Code,
    link: "https://osoc.be/",
    tags: ["Students", "Collaborative", "Mentorship"],
    logo: "https://osoc.be/img/logo/logo-osoc-color.svg",
  },
  {
    id: "RedoxSOC",
    title: "Redox OS Summer of Code",
    description:
      "A 8-week summer programme, that provides opportunity to contribute to Redox or to a Redox-adjacent project.",
    timeline: "Annual",
    stipend: "$1.000 - $2,000",
    icon: Code,
    link: "https://www.redox-os.org/rsoc/",
    tags: ["Experienced", "Rust", "Kernel"],
    logo: "https://www.redox-os.org/img/logo-dark.png",
  },
  {
    id: "GoogleSummerofEarthEngine",
    title: "Google Summer of Earth Engine",
    description:
      "Google Summer of Earth Engine is a research program for Indian university students & researchers to get a chance to work with leading research organizations in the country!",
    timeline: "May - July",
    stipend: "Rs. 1,20,000",
    icon: Code,
    link: "https://sites.google.com/view/summerofearthengine/home",
    tags: ["Students", "Research", "Mentorship"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTVFAk1QkvWLCPvUH5kwqBvD7CNk_GRKCzw&s",
  },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Open Source Programs
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-muted-foreground sm:mt-4">
            Discover opportunities to contribute, learn, and grow in the open
            source community
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Card
              key={program.title}
              className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 flex justify-center items-center">
                    <img
                      src={program.logo}
                      alt={program.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{program.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {program.description.slice(0, 100)}...
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{program.timeline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Gift className="h-4 w-4" />
                  <span>{program.stipend}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/programs/${program.id}`} className="mt-auto">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
