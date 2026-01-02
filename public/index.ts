import { PortfolioType, TimelineType, EducationType } from "../types/type";

export const about = `
I'm a Software Engineer II at Cisco. With a passion for software engineering, I seamlessly blend academic insights with practical expertise to create impactful digital solutions, from tools to applications.`;

export const portfolio: Array<PortfolioType> = [
  {
    name: "Go-Send",
    description:
      "A simple, secure file-sharing application written in Go. Features end-to-end encryption (E2EE) using X25519 and XSalsa20-Poly1305, ephemeral keys for every transfer, and optional auto-delete. Supports local and AWS S3 storage with a CLI client for easy management.",
    image: "./GoSend.png",
    github: "https://github.com/VinMeld/Go-Send",
    stack: [
      "Go",
      "sqlite3",
      "AWS S3",
      "Docker",
      "GitHub Actions",
      "X25519",
      "XSalsa20-Poly1305",
      "log/slog",
    ],
  },
  {
    name: "FitFinder",
    description:
      "FitFinder is a fitness-oriented application that connects users and trainers, offering a seamless interface for interaction and personal training needs. Built with NextJS, TailwindCSS, and Supabase as the backend, FitFinder is deployed with Vercel.",
    image: "./FitFinderreadme.png",
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
    image: "./portfolio.png",
    imageLight: "./portfoliolight.png",
    link: "https://portfolio.vinaymeldrum.ca",
    github: "https://github.com/VinMeld/Portfolio",
    stack: ["Vite", "React.JS", "Typescript", "Vercel"],
  },
  {
    name: "Music Web App",
    description:
      "Dive into a world of music and save your favorite moments. With the Music Web App, curate your collection, save favorites, and share them with the community.",
    image: "./music.png",
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
  {
    name: "Sound Analysis",
    link: "https://sound.vinaymeldrum.ca",
    description:
      "This project uses the ESP32 microcontroller paired with the MAX9814 microphone to detect and monitor sound levels. Detected sound data is sent via MQTT to the AWS IoT broker and stored in DynamoDB. A Next.js frontend application visualizes this data in real-time.",
    image: "./sound.png",
    imageLight: "./soundlight.png",
    github: "https://github.com/VinMeld/Sound-Analysis-App",
    stack: ["AWS IOT", "DynamoDB", "C++", "MQTT", "Next.JS", "React.JS", "Typescript"],
  },
];

export const timeline: Array<TimelineType> = [
  {
    company: "Cisco",
    location: "Ottawa, ON, Canada",
    year: "January 2024 - Present",
    title: "Software Engineer",
    duration: "2 years",
    details: [
      "Tech-led a critical runtime feature for a top cloud services provider, improving failover in high-availability deployments through direct coordination with the wireless team.",
      "Improved system stability by resolving a 6+ month long concurrency crash affecting customer deployments by resolving hardware-specific memory ordering issues.",
      "Developed a <strong>C-based CLI</strong> to inspect live runtime state, reducing customer issue resolution time by 35% and lowering support escalations.",
      "Implemented internal <strong>YANG telemetry models</strong> to expose internal log data, enabling structured introspection and improving automation coverage by 30%.",
    ],
  },
  {
    company: "Nokia",
    location: "Ottawa, ON, Canada",
    year: "May 2023 - December 2023",
    title: "DevOps Engineer",
    duration: "8 months",
    details: [
      "Built and streamlined <strong>GitLab CI/CD</strong> pipelines to automate build, test, and deployment workflows for 5+ Python and React services, improving developer productivity and release reliability for a growing platform.",
      "Led the automation of the Nokia Service Platform (NSP) patch tool using <strong>Bash</strong> and <strong>Ansible</strong>, increasing speed and accuracy of customer updates while eliminating downtime.",
    ],
  },
  {
    company: "Ericsson",
    location: "Ottawa, ON, Canada",
    year: "May 2022 - December 2022",
    title: "Cloud Tools Developer Intern",
    duration: "8 months",
    details: [
      "Developed a <strong>Python/React</strong> framework to visualize <strong>Jenkins</strong> pipeline errors, resulting in a 5x increase in pipeline assessment efficiency.",
    ],
  },
  {
    company: "Rockport Networks",
    location: "Ottawa, ON, Canada",
    year: "May 2021 - August 2021",
    title: "QA Engineer Intern",
    duration: "4 months",
    details: [
      "Redesigned and refactored automated Python tests with <strong>Pytest</strong> to utilize a class based code design, increasing testing code coverage.",
    ],
  },
  {
    company: "Nokia",
    location: "Ottawa, ON, Canada",
    year: "July 2019 - August 2019",
    title: "DevOps Intern",
    duration: "2 months",
    details: [
      "Initiated a project to collect test status and display it on a <strong>Grafana</strong> dashboard using a <strong>Rest API</strong>, <strong>Python and SQL</strong>. This enabled the team to view the projects pass rate visually.",
    ],
  },
];


export const education: EducationType = {
  university: "Carleton University",
  degree: "Bachelor of Computer Science",
  year: "2020 Sept - Dec 2023",
  gpa: "11.26/12.0",
  details: [
    "Dean's Honour List",
    "Entrance Scholarship",
    "Member of the Carleton Computer Science Society (CCSS)",
    "Member of the Carleton Univeristy Hacking Community (CUHacking)",
    "Member of the Carleton Cyber Security Club (CCSC)",
    "Member of the Carleton Chess Club (CCC)",
    "Member of the Carleton A.I. Club (CAIC)",
  ],
};
