import { Project, Certificate, Achievement, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Expression Evalulator",
    description: "Developed a command-line calculator application in C++ that efficiently interprets and executes mathematical expressions, supporting basic arithmetic operations, trigonometric functions, and mathematical constants through a custom parser and virtual machine.",
    image: "/assets/projects/cal.png",
    technologies: ["C", "C++", "Make", "Parsing", "Recursive desent"],
    liveUrl: "https://example.com/project1",
    githubUrl: "https://github.com/vanam-chandra-shekar/expr"
  },
  {
    id: 2,
    title: "Tcp-chat-server",
    description: "Implemented a client-server application using C++ and Winsock API to facilitate TCP/IP communication. The project includes a client that connects to a server, sends messages, and receives responses, demonstrating proficiency in network programming and socket management.",
    image: "/assets/projects/tcp.png",
    technologies: ["C", "C++", "Socket Programming"],
    liveUrl: "https://example.com/project2",
    githubUrl: "https://github.com/vanam-chandra-shekar/Tcp-chat-server"
  },
  {
    id: 3,
    title: "Url shortner",
    description: "Engineered a URL shortening service using Go, Docker, and Jenkins, featuring a microservices architecture with PostgreSQL for data storage. The project includes automated CI/CD pipelines for building, testing, and deploying the application, showcasing expertise in containerization, orchestration, and continuous integration practices.",
    image: "/assets/projects/short.png",
    technologies: ["Go", "Docker", "PostgreSQL", "Jenkins", "Microservices"],
    liveUrl: "https://github.com/vanam-chandra-shekar/shortUrl.git",
    githubUrl: "https://github.com/vanam-chandra-shekar/shortUrl.git"
  },
  {
    id: 4,
    title: "Mlpkg",
    description: "Created a Python machine learning library from scratch, named mlpkg, featuring a custom automatic differentiation engine for constructing and visualizing computational graphs. The project highlights expertise in Python programming and foundational machine learning principles, emphasizing the development of reusable and efficient code for gradient-based optimization tasks.",
    image: "/assets/projects/mlpkg.png",
    technologies: ["Python", "Machine Learning", "NumPy", "Auto Diff", "Matplotlib"],
    liveUrl: "https://github.com/vanam-chandra-shekar/MLpkg.git",
    githubUrl: "https://github.com/vanam-chandra-shekar/MLpkg.git"
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "Data Structures and Algorithms",
    issuer: "Programming Pathshala",
    date: "September 2024",
    credentialId: "DSA",
    url: "https://certificates.programmingpathshala.com/docs/8478419de7cd008f1cb1b82be21654f68f56afbebc87d6643629a43b7c6cd1c2",
    image: "/assets/certs//dsa.png"
  },
  {
    id: 2,
    name: "MondoDb Introduction for Students",
    issuer: "MongoDb",
    date: "December 2024",
    credentialId: "MongoDb-student",
    url: "",
    image: "/assets/certs/mongodb.png"
  },
  {
    id: 3,
    name: "Software engineering and DevOps",
    issuer: "Coursera | IBM",
    date: "December 2024",
    credentialId: "CICD",
    url: "https://www.coursera.org/",
    image: "/assets/certs//devops.png"
  },
  {
    id: 4,
    name: "Linear Algebra for Machine Learning",
    issuer: "Coursera",
    date: "April 2025",
    credentialId: "DC-24680",
    url: "https://www.datacamp.com/",
    image: "/assets/certs/linaeral.png"
  }
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Top 10% in University",
    description: "Achieved recognition in the top 10% of my university cohort for academic excellence, demonstrating strong problem-solving abilities, dedication, and consistent performance across diverse disciplines.",
    date: "Since 2024",
    image: "/assets/achivements/top10.png"
  },
  {
    id: 2,
    title: "50 Days Leet code",
    description: "Earned the prestigious 50-Day Badge on LeetCode in 2024, consistently solving challenges and ranking among the top 6% of coders worldwide.",
    date: "2024",
    image: "/assets/achivements/leet.png"
  },
  {
    id: 3,
    title: "Leet Code",
    description: "Solved 99 coding problems on LeetCode, enhancing data structures and algorithm skills.",
    date: "January 2025",
    image: "/assets/achivements/leet99.png"
  },
  {
    id: 4,
    title: "Volunteer Internship - Bhumi NGO (Ignite Shelters Program)",
    description: "Completed a 44-hour volunteer internship with Bhumi NGO, contributing to the Kanini project under the Ignite Shelters Program.",
    date: "2024",
    image: "/assets/achivements/bhumi.png"
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    platform: "GitHub",
    url: "https://github.com/vanam-chandra-shekar",
    icon: "Github"
  },
  {
    id: 2,
    platform: "LinkedIn",
    url: "https://linkedin.com/in/vanamchandrashekar",
    icon: "Linkedin"
  },
  {
    id: 3,
    platform: "Twitter",
    url: "https://twitter.com/vanamchandra23",
    icon: "Twitter"
  },
  {
    id: 4,
    platform: "Email",
    url: "mailto:vanamchandrashekar@outlook.com",
    icon: "Mail"
  }
];

export const aboutMe = {
  name: "Chandra Shekar",
  title: "Software Developer | Machine Learning Developer",
  introduction: "I'm a passionate software and machine learning developer focused on building smart, scalable solutions. I love turning complex problems into clean, efficient code.",
  details: "I'm a passionate student developer exploring software and machine learning. I enjoy building projects and learning by solving real-world problems with code.",
  profileImage: "/assets/profile.png",
  skills: [
    "JavaScript/TypeScript", 
    "React/Next.js", 
    "Node.js/Express", 
    "Python/Django", 
    "MongoDB/PostgreSQL", 
    "AWS/GCP", 
    "Docker/Kubernetes", 
    "CI/CD"
  ],
  resumeUrl: "/resume.pdf"
};