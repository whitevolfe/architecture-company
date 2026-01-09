import { useState } from "react";
import projectInterior from "@/assets/project-interior.jpg";
import projectExterior from "@/assets/project-exterior.jpg";
import project3D from "@/assets/project-3d.jpg";
import projectRenovation from "@/assets/project-renovation.jpg";

const categories = ["All", "Residential", "Commercial", "Interior", "3D Design"];

const projects = [
  {
    image: projectExterior,
    title: "Modern Villa - Colombo 7",
    category: "Residential",
    description: "Contemporary luxury villa with infinity pool",
  },
  {
    image: projectInterior,
    title: "Penthouse Interior - Rajagiriya",
    category: "Interior",
    description: "High-end penthouse interior design",
  },
  {
    image: project3D,
    title: "Commercial Complex - Negombo",
    category: "Commercial",
    description: "Mixed-use commercial development",
  },
  {
    image: projectRenovation,
    title: "Heritage Renovation - Galle",
    category: "Residential",
    description: "Colonial era building modernization",
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Our Portfolio
          </span>
          <h2 className="heading-lg text-foreground mb-4">Featured Projects</h2>
          <p className="body-base text-muted-foreground">
            Explore our collection of award-winning designs across Sri Lanka.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-display font-semibold text-off-white mb-1">
                  {project.title}
                </h3>
                <p className="text-off-white/80 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors">
            View All Projects
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;