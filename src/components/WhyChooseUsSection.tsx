import { Award, Clock, Users, MapPin } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Award-Winning Designs",
    description:
      "Recognized for excellence in architectural design with multiple industry awards.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We respect your timeline. 95% of our projects are delivered on or before schedule.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Work with qualified architects and designers with international experience.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Deep understanding of Sri Lankan regulations, climate, and cultural context.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="heading-lg text-primary-foreground mb-6">
              Building Excellence Since 2009
            </h2>
            <p className="body-lg text-primary-foreground/80 mb-8">
              For over 15 years, we've been transforming Sri Lanka's architectural
              landscape. Our commitment to quality, innovation, and client
              satisfaction sets us apart.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="group">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-gold group-hover:text-charcoal transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-primary-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats/Image */}
          <div className="relative">
            <div className="bg-dark-green-light/50 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-background/10 rounded-2xl backdrop-blur-sm">
                  <div className="text-5xl lg:text-6xl font-display font-bold text-gold mb-2">
                    15+
                  </div>
                  <div className="text-primary-foreground/80">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-background/10 rounded-2xl backdrop-blur-sm">
                  <div className="text-5xl lg:text-6xl font-display font-bold text-gold mb-2">
                    500+
                  </div>
                  <div className="text-primary-foreground/80">Projects Delivered</div>
                </div>
                <div className="text-center p-6 bg-background/10 rounded-2xl backdrop-blur-sm">
                  <div className="text-5xl lg:text-6xl font-display font-bold text-gold mb-2">
                    50+
                  </div>
                  <div className="text-primary-foreground/80">Design Awards</div>
                </div>
                <div className="text-center p-6 bg-background/10 rounded-2xl backdrop-blur-sm">
                  <div className="text-5xl lg:text-6xl font-display font-bold text-gold mb-2">
                    98%
                  </div>
                  <div className="text-primary-foreground/80">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;