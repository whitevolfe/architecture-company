import {
  Building2,
  Hammer,
  Paintbrush,
  Trees,
  Box,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "New Building Design",
    description:
      "From concept to construction-ready plans. We design modern homes, commercial buildings, and mixed-use developments tailored to your vision.",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description:
      "Transform existing spaces with thoughtful renovations. We modernize while respecting architectural heritage and maximizing functionality.",
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description:
      "Create stunning interiors that reflect your personality. Our designers craft spaces that are beautiful, functional, and timeless.",
  },
  {
    icon: Trees,
    title: "Exterior & Landscape",
    description:
      "Design outdoor spaces that complement your architecture. From gardens to driveways, we create cohesive exterior environments.",
  },
  {
    icon: Box,
    title: "3D Visualization",
    description:
      "See your project before it's built. Our photorealistic 3D renders and walkthroughs bring your vision to life.",
  },
  {
    icon: FileText,
    title: "Planning & Approvals",
    description:
      "Navigate Sri Lankan building regulations with ease. We handle all documentation and approval processes for you.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Comprehensive Architecture & Design Solutions
          </h2>
          <p className="body-base text-muted-foreground">
            From initial concept to final delivery, we provide end-to-end
            architectural services tailored to the Sri Lankan context.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-accent/30 hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="heading-sm text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;