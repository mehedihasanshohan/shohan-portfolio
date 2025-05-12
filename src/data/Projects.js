import jsimg1 from "../../src/assets/cv-js.PNG"

export const projects = [
  // Tailwind Projects
  {
    id: 1,
    category: "tailwind",
    title: "Tailwind Portfolio",
    image: jsimg1,
    description: "A modern portfolio site built with Tailwind CSS.",
    tech: ["HTML", "Tailwind CSS"],
    live: "https://lws-state-react-assignment.netlify.app/",
    github: "https://github.com/user/portfolio",
    details: {
      screenshots: ["/images/portfolio-1.png", "/images/portfolio-2.png"],
      problem: "Responsive layout broke on tablets.",
      solution: "Used Tailwind's responsive classes for layout fixes."
    }
  },
  {
    id: 2,
    category: "tailwind",
    title: "Agency Landing",
    image: jsimg1,
    description: "Landing page for digital agency using Tailwind.",
    tech: ["HTML", "Tailwind CSS"],
    live: "https://lws-state-react-assignment.netlify.app/",
    github: "https://github.com/user/agency-landing",
    details: {
      screenshots: ["/images/agency-1.png"],
      problem: "Header overlap issue on mobile.",
      solution: "Adjusted z-index and padding classes."
    }
  },
  {
    id: 3,
    category: "tailwind",
    title: "Rinterio",
    image: jsimg1,
    description: "A startup-focused hero section design.",
    tech: ["HTML", "Tailwind CSS"],
    live: "https://landingpage2-tailwind.netlify.app/",
    github: "https://github.com/user/startup-hero",
    details: {
      screenshots: ["/images/startup-1.png"],
      problem: "Hero text wasn't centering.",
      solution: "Used flexbox and justify-center properly."
    }
  },

  // Vanilla JS Projects
  {
    id: 4,
    category: "vanilla",
    title: "To-Do App",
    image: jsimg1,
    description: "Edit images with filters, rotate, and download.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://todo-23-javascript.netlify.app/",
    github: "https://github.com/user/image-editor",
    details: {
      screenshots: ["/images/editor-1.png"],
      problem: "Filter values not syncing in real-time.",
      solution: "Used canvas and input event listeners correctly."
    }
  },
  {
    id: 5,
    category: "vanilla",
    title: "CV Builder App",
    image: jsimg1,
    description: "Simple weather app using OpenWeather API.",
    tech: ["JavaScript", "HTML", "CSS"],
    live: "https://cv-builder-js.netlify.app/",
    github: "https://github.com/user/weather-app",
    details: {
      screenshots: ["/images/weather-1.png"],
      problem: "City search was lagging.",
      solution: "Added debouncing to search input."
    }
  },
  {
    id: 6,
    category: "vanilla",
    title: "Shopping Cart",
    image: jsimg1,
    description: "Add/remove items and calculate total price.",
    tech: ["JavaScript", "HTML", "CSS"],
    live: "https://do-shopping-23.netlify.app/",
    github: "https://github.com/user/shopping-cart",
    details: {
      screenshots: ["/images/cart-1.png"],
      problem: "Price not updating properly.",
      solution: "Fixed DOM updates inside loop."
    }
  },

  // React Projects
  {
    id: 7,
    category: "react",
    title: "Weather App",
    image: jsimg1,
    description: "Create a CV live with real-time input preview.",
    tech: ["React", "Tailwind CSS"],
    live: "https://react-weather-app-23-81gcd45.netlify.app/",
    github: "https://github.com/user/cv-builder",
    details: {
      screenshots: ["/images/cv-1.png"],
      problem: "Live preview had sync issues.",
      solution: "Used `useState` and `onChange` properly."
    }
  },
  {
    id: 8,
    category: "react",
    title: "Image Gallery",
    image: jsimg1,
    description: "Filterable and responsive image gallery.",
    tech: ["React", "CSS"],
    live: "https://example.com/gallery",
    github: "https://github.com/user/image-gallery",
    details: {
      screenshots: [jsimg1],
      problem: "Images were overlapping on grid.",
      solution: "Used CSS Grid with proper breakpoints."
    }
  },
  {
    id: 9,
    category: "react",
    title: "Bus Ticket Booking",
    image: jsimg1,
    description: "Select seats, calculate total price, show summary.",
    tech: ["React", "Tailwind"],
    live: "https://example.com/bus",
    github: "https://github.com/user/bus-booking",
    details: {
      screenshots: ["/images/bus-1.png"],
      problem: "Double seat booking issue.",
      solution: "Used state check to disable already booked seats."
    }
  }
];
