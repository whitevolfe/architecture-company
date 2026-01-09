import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajitha Perera",
    role: "Homeowner, Colombo",
    content:
      "ArchStudio transformed our dream home into reality. Their attention to detail and understanding of modern Sri Lankan living is exceptional. The 3D visualization helped us see exactly what we were getting.",
    rating: 5,
  },
  {
    name: "Nimali Fernando",
    role: "Business Owner, Kandy",
    content:
      "We hired them for our boutique hotel renovation. The team delivered a stunning design that respects the heritage while adding modern comforts. Highly professional and always on schedule.",
    rating: 5,
  },
  {
    name: "Ashan De Silva",
    role: "Property Developer, Galle",
    content:
      "Working with ArchStudio on multiple projects has been a pleasure. Their designs are innovative, practical, and always within budget. They truly understand the Sri Lankan market.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="body-base text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card p-8 rounded-2xl border border-border hover:border-accent/30 hover:shadow-elegant-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-accent" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-medium">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;