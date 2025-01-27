export const navLinks = [
    { id: 'about', href: '#about', name: 'About' },
    { id: 'projects', href: '#projects', name: 'Projects' },
    { id: 'contact', href: '#contact', name: 'Contact' },
];

export const myProjects = [
    {
      title: 'Particle System - Fire Simulation',
      desc: 'This project is a particle system that simulates fire using Pygame. It allows you to control the size and number of particles using sliders and spawn fire particles by clicking on the screen.',
      href: 'https://github.com/Davidsundberg97/Particles',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      image: '/assets/Fire_sim.PNG', // Ensure this path is correct
    },
    {
      title: 'Flask and SQL project for managing data',
      desc: 'This project is a web application that allows you to manage data using Flask and SQL. It includes features such as adding, updating, and deleting data, as well as searching for data using filters.',
      href: 'https://github.com/Davidsundberg97/Flask_project',
      texture: '/textures/project/project2.mp4',  
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#1B1C1E',
        border: '0.2px solid #2C2D30',
        boxShadow: '0px 0px 60px 0px #3D3E41',
      },
      spotlight: '/assets/spotlight2.png',
      image: '/assets/Flask_project.PNG', // Ensure this path is correct
    }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
];