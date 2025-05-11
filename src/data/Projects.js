export const projects = [
  // Tailwind Projects
  {
    id: 1,
    category: "tailwind",
    title: "Tailwind Portfolio",
    image: "/images/portfolio.png",
    description: "A modern portfolio site built with Tailwind CSS.",
    tech: ["HTML", "Tailwind CSS"],
    live: "https://example.com/portfolio",
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
    image: "/images/agency.png",
    description: "Landing page for digital agency using Tailwind.",
    tech: ["HTML", "Tailwind CSS"],
    live: "https://example.com/agency",
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
    title: "Startup Hero",
    image: "/images/startup.png",
    description: "A startup-focused hero section design.",
    tech: ["HTML", "Tailwind CSS"],
    live: "https://example.com/startup",
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
    title: "Image Editor App",
    image: "/images/editor.png",
    description: "Edit images with filters, rotate, and download.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://example.com/editor",
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
    title: "Weather App",
    image: "/images/weather.png",
    description: "Simple weather app using OpenWeather API.",
    tech: ["JavaScript", "HTML", "CSS"],
    live: "https://example.com/weather",
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
    image: "/images/cart.png",
    description: "Add/remove items and calculate total price.",
    tech: ["JavaScript", "HTML", "CSS"],
    live: "https://example.com/cart",
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
    title: "CV Builder App",
    image: "/images/cv-builder.png",
    description: "Create a CV live with real-time input preview.",
    tech: ["React", "Tailwind CSS"],
    live: "https://example.com/cv",
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
    image: "/images/gallery.png",
    description: "Filterable and responsive image gallery.",
    tech: ["React", "CSS"],
    live: "https://example.com/gallery",
    github: "https://github.com/user/image-gallery",
    details: {
      screenshots: ["/images/gallery-1.png"],
      problem: "Images were overlapping on grid.",
      solution: "Used CSS Grid with proper breakpoints."
    }
  },
  {
    id: 9,
    category: "react",
    title: "Bus Ticket Booking",
    image: "/images/bus.png",
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
