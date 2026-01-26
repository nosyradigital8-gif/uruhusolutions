import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Strategic guidance that helped us secure funding and accelerate growth by 300% in 18 months.",
    author: "Chief Financial Officer",
    company: "Lagos-based Tech Startup",
    rating: 5,
  },
  {
    quote:
      "The risk advisory framework gave us clarity and confidence to make data-driven decisions.",
    author: "Managing Director",
    company: "Manufacturing Company",
    rating: 5,
  },
  {
    quote:
      "Professional, knowledgeable, and genuinely invested in our success. True long-term partners.",
    author: "Individual Investor",
    company: "Entrepreneur",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal/10 text-teal border border-teal/20 mb-6">
            Success Stories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Trusted by Leading Organizations and Individuals
          </h2>
          <p className="text-lg text-muted-foreground">
            Real Results. Real Impact. Real Growth.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-orange/30 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center shadow-orange-glow">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange text-orange" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-heading font-semibold text-primary">
                  — {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button 
            className="border-2 border-teal text-teal bg-transparent hover:bg-teal hover:text-white hover:shadow-teal-glow font-semibold transition-all duration-300"
            size="lg"
          >
            Read More Success Stories
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
