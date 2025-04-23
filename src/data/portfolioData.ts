import { Project, Certificate, Achievement, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with product catalog, shopping cart, user authentication, and payment integration.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
    liveUrl: "https://example.com/project1",
    githubUrl: "https://github.com/username/project1"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
    image: "https://images.pexels.com/photos/6956463/pexels-photo-6956463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://example.com/project2",
    githubUrl: "https://github.com/username/project2"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered application that generates content based on user prompts using OpenAI's GPT model.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Next.js", "OpenAI API", "Vercel", "Tailwind CSS"],
    liveUrl: "https://example.com/project3",
    githubUrl: "https://github.com/username/project3"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather application that provides current weather data and forecasts for locations worldwide.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Weather API", "Chart.js", "Styled Components"],
    liveUrl: "https://example.com/project4",
    githubUrl: "https://github.com/username/project4"
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "June 2023",
    credentialId: "AWS-12345",
    url: "https://aws.amazon.com/certification/"
  },
  {
    id: 2,
    name: "Full Stack Web Development",
    issuer: "Udacity",
    date: "March 2023",
    credentialId: "UD-67890",
    url: "https://www.udacity.com/"
  },
  {
    id: 3,
    name: "React Native Specialization",
    issuer: "Coursera",
    date: "December 2022",
    credentialId: "CS-13579",
    url: "https://www.coursera.org/"
  },
  {
    id: 4,
    name: "Machine Learning Engineer",
    issuer: "DataCamp",
    date: "October 2022",
    credentialId: "DC-24680",
    url: "https://www.datacamp.com/"
  }
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Hackathon Winner",
    description: "First place at the International Developers Hackathon for creating an innovative healthcare solution.",
    date: "May 2023"
  },
  {
    id: 2,
    title: "Open Source Contributor",
    description: "Significant contributions to several open-source projects, with over 500 commits and 20 pull requests merged.",
    date: "2022 - Present"
  },
  {
    id: 3,
    title: "Tech Conference Speaker",
    description: "Presented on 'Modern Frontend Architecture' at the Web Development Summit.",
    date: "November 2022"
  },
  {
    id: 4,
    title: "Published Article",
    description: "Featured article in Tech Magazine about best practices in progressive web applications.",
    date: "August 2022"
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    platform: "GitHub",
    url: "https://github.com/username",
    icon: "Github"
  },
  {
    id: 2,
    platform: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: "Linkedin"
  },
  {
    id: 3,
    platform: "Twitter",
    url: "https://twitter.com/username",
    icon: "Twitter"
  },
  {
    id: 4,
    platform: "Email",
    url: "mailto:email@example.com",
    icon: "Mail"
  }
];

export const aboutMe = {
  name: "John Doe",
  title: "Full Stack Developer",
  introduction: "I'm a passionate full-stack developer specializing in building exceptional digital experiences. With a focus on creating responsive, user-friendly applications, I strive to write clean, efficient code and continuously improve my skills.",
  details: "With over 5 years of experience in web development, I've worked on a variety of projects from e-commerce platforms to data visualization dashboards. I'm proficient in modern JavaScript frameworks like React and Vue, as well as backend technologies including Node.js and Python. I enjoy solving complex problems and learning new technologies.",
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