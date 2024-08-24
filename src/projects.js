const ProjectList = [
  {
    name: "Groovy",
    description: "grovvy shbs adlhbs hs",
    imageUrl: "groovy.mp4",
    category: "Web Development",
    technologies: ["next", "openAI"],
    url: "https://groovy-sigma.vercel.app/",
  },

  {
    name: "Victoria's Shop",
    description: "e commersjdknf ksj ",
    imageUrl: "victorias-shop.mp4",
    category: "Web Development",
    technologies: ["react", "express"],
    url: "https://victoriashop.fun/",
  },

  {
    name: "Autonomous Email Deleter",
    description: "cron job ",
    imageUrl: "email.jpg",
    category: "Backend",
    technologies: ["imap", "node"],
    url: "https://github.com/victoriaraya/email_deleter",
  },
];

const getProject = (name) => {
  let project = ProjectList.find((project) => project.name === name);

  return project;
};

export { ProjectList, getProject };
