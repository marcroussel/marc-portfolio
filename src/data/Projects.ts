export interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "pizzamamma",
    title: "Pizzamamma",
    description: "Site de commande PHP pour une pizzeria réalisé en équipe.",
    techs: ["PHP", "HTML", "CSS", "SQL"],
    githubUrl: "https://github.com/moncompte/pizzamamma",
  },
  {
    id: "efroyable",
    title: "EFRoyable",
    description:
      "Site interactif de révision du permis de conduire via flashcards.",
    techs: ["React", "TypeScript", "Firebase"],
  },
];