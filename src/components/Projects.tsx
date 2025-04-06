
import React from 'react';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const Projects = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const projects = [
    {
      title: "Ferrari SF90",
      description: "Desain website simple untuk memberi informasi mengenai mobil terbaru Ferrari (Tugas ORBIT divisi Website Developer)",
      image: "/Ferrari_website.png",
      tags: ["HTML", "CSS"],
      link: "https://dzabs7.github.io/Ferrari_SF90_pr_orbit_Diaz/Diaz.html"
    },
    {
      title: "Kalkulator Sederhana",
      description: "Tugas Mapel DPLG membuat website kalkulator sederhana",
      image: "/kalkulator_ss.png",
      tags: ["PHP", "CSS"],
      link: "#"
    },
    {
      title: "ROCOOK",
      description: "Proyek website untuk lomba Web Design INVENTION Udayana 2023",
      image: "/Mockups_Design_Helio.png",
      tags: ["HTML", "CSS", "JavaScript", "Figma"],
      link: "#"
    },
    {
      title: "School Booster",
      description: "UI/UX Design, proyek STEAM COMPETITION 2024 kategori Engineering",
      image: "/School_Booster_Mockups.png",
      tags: ["Figma", "Illustrator"],
      link: "https://www.figma.com/design/qLs7w3ILk2GzJyPx2jHSl0/School-Booster?node-id=0-1&p=f&t=VmQ7zNeV0eUtlkcD-0"
    },
    {
      title: "Simple Login Page",
      description: "Proyek mandiri untuk meningkatkan kemampuan pengembangan website (Tugas Mapel DPLG)",
      image: "/Simple_Login_Page.png",
      tags: ["HTML", "CSS"],
      link: "#"
    },
    {
      title: "Super Fruit (Mini Game)",
      description: "Tugas MPRPL membuat game sederhana. Berperan sebagai Programming, UI/UX Designer, Game Mechanic, Mapping",
      image: "/Minigame_Super_Fruit(1).png",
      tags: ["Godot"],
      link: "https://drive.google.com/drive/folders/1qLJDedEG-ohgBZsaGYIjzpnHMU4g0X0g?usp=sharing"
    }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link === "#") {
      e.preventDefault();
      toast({
        variant: "destructive",
        title: "Link is currently not available!",
        description: "This project link will be updated soon.",
        duration: 2000,
      });
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden glass-card hover:bg-white/10 transition-all duration-300">
              <div className="relative aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">{project.title}</h3>
                  <a 
                    href={project.link} 
                    className={`${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity text-white`}
                    onClick={(e) => handleLinkClick(e, project.link)}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
