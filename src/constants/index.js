import {
    mobile, backend, creator, web,
    javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git,
    figma, docker, python, flask, mysql, nextjs, sqlalchemy, threejs, oracle,
    meta, starbucks, baobab_systems_company_logo, jan_bridhi, thedownballot, tesla, shopify,
    carrent,
    jobit,
    tripguide,
    gpt,
    gallery
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Web Development",
      icon: web,
      description: "Building responsive and interactive websites tailored to your needs."
    },
    {
      title: "Front-End Development",
      icon: mobile,
      description: "Creating engaging and dynamic user interfaces using React.js, Next.js, and modern front-end technologies."
    },
    {
      title: "Single-Page Applications (SPAs)",
      icon: backend,
      description: "Developing seamless and fast single-page applications that enhance user experience."
    },
    {
      title: "Custom Web Components",
      icon: creator,
      description: "Designing and implementing reusable and custom web components to fit specific requirements."
    },
    {
      title: "Integration with APIs",
      icon: web,
      description: "Connecting and integrating third-party APIs for enhanced functionality and data exchange."
    },
    {
      title: "Back-End Development",
      icon: mobile,
      description: "Developing robust server-side applications and RESTful APIs using Python, Flask, and MySQL."
    },
    {
      title: "Database Design and Management",
      icon: backend,
      description: "Designing and managing databases with MySQL, including schema design, query optimization, and data security."
    },
    {
      title: "Full-Stack Development",
      icon: web,
      description: "Delivering end-to-end solutions, combining front-end and back-end expertise to build complete web applications."
    },
    {
      title: "Performance Optimization",
      icon: mobile,
      description: "Improving website and application performance through optimization techniques and best practices."
    },
    {
      title: "Deployment and DevOps",
      icon: backend,
      description: "Handling deployment processes, server management, and continuous integration/continuous deployment (CI/CD) pipelines."
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Redux",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "SQLAlchemy",
      icon: sqlalchemy,
    },
    {
      name: "MYSQL",
      icon: mysql,
    },
    {
      name: "Oracle Database",
      icon: oracle,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Front-End Developer (Volunteer)",
      company_name: "Jan Bridhi",
      icon: jan_bridhi, 
      iconBg: "#383E56",
      date: "Dec 2023 - Dec 2023",
      points: [
        "Redesigned the website focusing on the design and implementation using HTML, CSS, and JavaScript.",
        "Collaborated with the team to enhance the user interface and user experience.",
        "Ensured the website's responsiveness and cross-browser compatibility.",
        "Participated in design reviews and provided feedback for improvements."
      ],
    },
    {
      title: "Front-End Developer (Volunteer)",
      company_name: "theDownBallot",
      icon: thedownballot, 
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Worked on the website development using React.js and TypeScript.",
        "Integrated APIs to enhance functionality and improve user experience.",
        "Collaborated with the team to implement features and address issues.",
        "Ensured code quality and participated in code reviews."
      ],
    },
    {
      title: "Software Developer Intern (Full Stack)",
      company_name: "Baobab Systems",
      icon: baobab_systems_company_logo,
      iconBg: "#383E56",
      date: "June 2024",
      points: [
        "Actively develop and maintain web applications using Python (Flask) and related technologies.",
        "Ensure the performance, quality, and responsiveness of applications.",
        "Identify and fix bugs and performance issues.",
        "Write clean, maintainable, and efficient code.",
        "Research and brainstorm solutions and tools for emerging challenges."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Maggy proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Maggy does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Maggy optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI ChatGPT App",
      description:
         "This application is built using AI's newest machine learning model, leveraging the power of the advanced GPT-3 model API from OpenAI. With an elegant user interface that resembles a chat-based communication, this application is designed to assist you with various programming language queries and much more.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gpt,
      source_code_link: "https://github.com/maggywairigu/AI-ChatGP-app.git",
    },
    {
      name: "Responsive Image gallery",
      description:
        "Introducing an engaging and user-friendly image gallery that I designed and implemented using HTML, CSS, and JavaScript. This responsive gallery allows users to click on image thumbnails, instantly popping up the selected image in the center of the screen. Clicking on the popped-up image seamlessly navigates to the next image in the gallery, providing an immersive and enjoyable browsing experience.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gallery,
      source_code_link: "https://github.com/maggywairigu/responsive-image-gallery.git",
    },
    {
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
