import { PortfolioType, TimelineType, EducationType } from "../types/type";

export const portfolio: Array<PortfolioType> = [
  {
    name: "FitFinder",
    description:
      "FitFinder is a fitness-oriented application that connects users and trainers, offering a seamless interface for interaction and personal training needs. Built with NextJS, TailwindCSS, and Supabase as the backend, FitFinder is deployed with Vercel.",
    image: "./FitFinderreadme.png",
    link: "https://fitfinder.ca",
    github: "https://github.com/VinMeld/FitFinder",
    stack: [
      "NextJS",
      "TailwindCSS",
      "Supabase",
      "Vercel",
      "Typescript",
      "React.JS",
      "Hugging Face",
      "PostgreSQL",
    ],
  },
  {
    name: "Portfolio",
    description:
      "My portfolio showcases my projects, experiences, and a bit about who I am. Coded in Vite, React.JS and Typescript, this portfolio is deployed with Vercel.",
    image: "./FitFinderreadme.png",
    link: "https://portfolio.vinaycloud.ca",
    github: "https://github.com/VinMeld/Portfolio",
    stack: ["Vite", "React.JS", "Typescript", "Vercel"],
  },
  {
    name: "Music Web App",
    description:
      "Dive into a world of music and save your favorite moments. With the Music Web App, curate your collection, save favorites, and share them with the community.",
    image: "./music.png",
    link: "https://music.vinaycloud.ca",
    github: "https://github.com/VinMeld/Music-Webapp",
    stack: [
      "React.JS",
      "Javascript",
      "Redux",
      "Vultr",
      "Nginx",
      "Node.JS",
      "Express",
      "MongoDB",
    ],
  },
  {
    name: "Jumbler App",
    description:
      "Jumbler is an English word scrambler game built for Android with Kotlin, featuring user authentication for tracking and comparing high score records.",
    image: "./Jumbler.png",
    github: "https://github.com/VinMeld/Scrambler-Android-App",
    stack: ["Kotlin", "Android Studio", "Firebase"],
  },
];

export const timeline: Array<TimelineType> = [
  {
    company: "Nokia",
    location: "Ottawa, ON",
    year: "2023 May - August 2023",
    title: "R&D Software Engineer Intern",
    duration: "4 months",
    details: [
      "Currently leading the automation of the Nokia Service Platform (NSP) patch tool using Bash and Ansible, aiming to increase speed and accuracy of updates while minimizing downtime.",
      "Leveraged Docker and Kubernetes to configure the (NSP), leading to the development of a detailed wiki that expedites future deployments.",
    ],
  },
  {
    company: "Ericsson",
    location: "Ottawa, ON",
    year: "2022 May - December 2022",
    title: "Cloud Native Tools Scheduler Co-op",
    duration: "8 months",
    details: [
      "Created a framework to streamline the creation of dashboards that displayed errors within the Jenkins pipeline using Python for data collection and React as a graphic display. This framework aided efficiency to assess pipelines 5x, as it enabled the quick creation of a dashboard",
      "Maintained and created a new dashboard that contained performance metrics in PHP and React. This dashboard helped managers better comprehend the health of the code at a glance, thus decreasing time to identify issues by 10x.",
      "Created a Regex based tool to parse a provided Jenkins build and collect data on failing tests. This allowed the user to debug their failed tests much faster.",
    ],
  },
  {
    company: "Rockport Networks",
    location: "Ottawa, ON",
    year: "2021 May - August 2021",
    title: "QA Engineer Co-op",
    duration: "4 months",
    details: [
      "Refactored Python scripts to parameterized tests using the DRY principle in order to reduce the amount of repeated code by dozens of lines.",
      "Redesigned automated Python tests with Pytest to utilize a class based code design thus increasing testing code coverage.",
    ],
  },
  {
    company: "Nokia",
    location: "Ottawa, ON",
    year: "2019 July - August 2019",
    title: "Dev-ops Intern",
    duration: "2 months",
    details: [
      "Initiated a project to collect test status and display it on a Grafana dashboard, using a Rest API, Python and SQL. This enabled the team to view the projects pass rate visually.",
      "Collaborated within an Agile team of developers (in person) and participated in daily Scrum huddles describing work progress/ resolving impediments in order to keep work flowing.`",
    ],
  },
];

export const education: EducationType = {
  university: "University of Ottawa",
  degree: "Bachelor of Computer Science",
  year: "2018 - 2023",
  gpa: "11.4/12.0",
  details: [
    "Dean's Honour List",
    "Entrance Scholarship",
    "Member of the Carleton Computer Science Society (CCSS)",
    "Member of the Carleton Univeristy Hacking Community (CUHacking)",
    "Member of the Carleton Cyber Security Club (CCSC)",
    "Member of the Carleton Chess Club (CCC)",
    "Member of the Carleton A.I Club (CAIC)",
  ],
};
