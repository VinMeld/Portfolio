import { PortfolioType, TimelineType, EducationType } from "../types/type";

export const about = `
I'm a 4th-year Computer Science student at Carleton University in Ottawa. With a passion for software engineering, I seamlessly blend academic insights with practical expertise to create impactful digital solutions, from tools to applications.`;

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
    image: "./portfolio.png",
    imageLight: "./portfoliolight.png",
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
  {
    name: "Sound Analysis",
    link: "https://sound.vinaycloud.ca",
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
    company: "Nokia",
    location: "Ottawa, ON, Canada",
    year: "May 2023 - August 2023",
    title: "R&D Software Engineer Intern",
    duration: "4 months",
    details: [
      "Spearheaded the automation of the Nokia Service Platform (NSP) patch tool using <strong>Bash</strong> and <strong>Ansible</strong> to enhance update efficiency and mitigate downtime.",
      "Utilized <strong>Docker</strong> and <strong>Kubernetes</strong> for NSP configurations, yielding a detailed wiki that streamlines future deployments."
    ],
  },
  {
    company: "Ericsson",
    location: "Ottawa, ON, Canada",
    year: "May 2022 - December 2022",
    title: "Cloud Native Tools Scheduler Co-op",
    duration: "8 months",
    details: [
      "Devised a framework in <strong>Python</strong> and <strong>React</strong> to swiftly generate dashboards that spotlight <strong>Jenkins</strong> pipeline errors, enhancing pipeline analysis efficiency by five times.",
      "Formulated and maintained performance metric dashboards in <strong>PHP</strong> and <strong>React</strong>, empowering managers to rapidly assess code health and reducing issue identification time tenfold.",
      "Crafted a <strong>Regex</strong> utility to scrutinize <strong>Jenkins</strong> builds, facilitating quicker identification of failing tests."
    ],
  },
  {
    company: "Rockport Networks",
    location: "Ottawa, ON, Canada",
    year: "May 2021 - August 2021",
    title: "QA Engineer Co-op",
    duration: "4 months",
    details: [
      "Refactored <strong>Python</strong> scripts, implementing parameterized tests and the DRY principle, trimming redundant code significantly.",
      "Restructured automated <strong>Python</strong> tests using <strong>Pytest</strong> for class-based design, amplifying test coverage."
    ],
  },
  {
    company: "Nokia",
    location: "Ottawa, ON, Canada",
    year: "July 2019 - August 2019",
    title: "Dev-ops Intern",
    duration: "2 months",
    details: [
      "Pioneered a project to visually represent test statuses on a Grafana dashboard using a Rest API, <strong>Python</strong>, and <strong>SQL</strong>, enhancing team insights into project success rates.",
      "Actively collaborated in an <strong>Agile</strong> team, partaking in daily Scrum discussions to streamline progress and address challenges."
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
