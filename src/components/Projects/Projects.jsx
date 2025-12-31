import React from "react";
import ProjectCard from "./ProjectCard";
import img1 from "../../../src/assets/warmpose.PNG";
import img2 from "../../../src/assets/contestverse.PNG";
import img3 from "../../../src/assets/pawmart.PNG";

const projects = [
  {
    id: 1,
    title: "WarmPaws - Pet Care in Winter",
    description: "A cozy winter companion platform for pet owners providing winter care services.",
    image: img1,
    longDescription: "WarmPaws is a dedicated SPA (Single Page Application) designed to help pet owners navigate the cold season. It offers a curated list of winter services like coat fitting and paw grooming, expert vet tips, and a seamless booking system with Firebase authentication.",
    challenges: [
      "Implementing persistent authentication state to prevent redirects on page reloads.",
      "Securing sensitive Firebase configuration using environment variables in a client-side environment.",
      "Ensuring a minimalist yet functional UI that remains fully responsive across all screen sizes."
    ],
    solutions: [
      "Used Firebase's onAuthStateChanged observer and local storage to manage session persistence.",
      "Integrated .env files and utilized VITE_ prefixes (if using Vite) to mask API keys.",
      "Applied a mobile-first approach with Tailwind CSS and DaisyUI for consistent layouts."
    ],
    learning: [
      "Mastered React Router's protected route patterns and navigation state.",
      "Deep understanding of modern UI libraries like Framer Motion for subtle winter-themed animations.",
      "Improved skills in handling JSON-based dynamic data rendering."
    ],
    technologies: ["React", "React-Router", "Axios", "JWT", "Local-Storage", "Sweet-alert",  "Firebase", "Tailwind CSS", "DaisyUI", "React Hot Toast"],
    live: "https://warmpaws-rose.netlify.app/",
    code: "https://github.com/mehedihasanshohan/warmpaws-rose",
  },
  {
    id: 2,
    title: "ContestHub - Full Stack Platform",
    description: "A professional contest management system with secure payment and role-based access.",
    image: img2,
    longDescription: "ContestHub is a production-ready MERN stack application featuring Admin, Contest Creator, and Normal User roles. The platform manages everything from contest creation and admin approval to Stripe payment integration and dynamic winner declaration.",
    challenges: [
      "Implementing complex Role-Based Access Control (RBAC) across different dashboards.",
      "Managing high-concurrency data fetching and synchronization with server state.",
      "Securing the API endpoints to prevent unauthorized actions like deleting others' contests."
    ],
    solutions: [
      "Developed custom hooks and Axios interceptors for JWT-based authentication and role verification.",
      "Utilized TanStack Query (React Query) for caching and efficient data invalidation.",
      "Implemented MongoDB aggregation pipelines to generate a real-time leaderboard."
    ],
    learning: [
      "Professional integration of Stripe API for secure financial transactions.",
      "Architecting a scalable dashboard system for multiple user types.",
      "Advanced state management using TanStack Query and JWT security patterns."
    ],
    technologies: ["React", "React-Router", "Tailwindcss", "Daisyui", "React-Hook-Form", "TanStack Query", "Axios", "JWT", "Sweet Alert", "Local Storage", "Node.js", "MongoDB", "TanStack Query", "Stripe", "JWT", "Express"],
    live: " https://contestverse-shohan.netlify.app/",
    code: "https://github.com/mehedihasanshohan/contestverse",
  },
  {
    id: 3,
    title: "PawMart - Pet Adoption & Supply Portal",
    description: "A community-driven marketplace for pet adoption and pet-related products.",
    image: img3,
    longDescription: "PawMart connects pet lovers for adoption and shopping. It features a complete listing management system where users can add pets/products, manage their own listings, and place orders through a clean, tabular interface.",
    challenges: [
      "Creating a dynamic filtering system that works seamlessly with MongoDB data.",
      "Generating on-the-fly PDF reports for user orders for better record-keeping.",
      "Managing complex modal forms for ordering with auto-filled user information."
    ],
    solutions: [
      "Built a robust backend query system to filter listings by category and search terms.",
      "Integrated jsPDF and jsPDF-AutoTable to convert HTML tables into downloadable PDF documents.",
      "Used React Hook Form to manage form validation and auto-populated fields from Firebase Auth."
    ],
    learning: [
      "Gained expertise in full CRUD operations and database relationship handling (Users vs Listings).",
      "Learned how to implement Dark/Light mode toggle that persists in LocalStorage.",
      "Improved efficiency in handling image uploads and dynamic image rendering."
    ],
    technologies: ["React", "React-Router", "Tailwind CSS", "DaisyUI", "React Hook Form", "Firebase", "MongoDB", "Node.js", "jsPDF", "Expessjs", "React Hot Toast", "JWT", "Axios", "Local Storage"],
    live: "https://pawmart-fullstack.netlify.app/",
    code: " https://github.com/mehedihasanshohan/pawmart-client",
  }
];
const Projects = () => {
  return (
    <section className="py-20 bg-[#0f172a] text-white px-6" id="projects">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400 mb-12">Some of my latest work</p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;