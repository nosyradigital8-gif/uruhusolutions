import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Target, Award, Users, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Target, label: "Client-Centric Approach" },
  { icon: Award, label: "Proven Track Record" },
  { icon: Users, label: "Industry Expertise" },
  { icon: Lightbulb, label: "Innovative Solutions" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-style mb-6">About Us</span>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Your Trusted Partner in Financial Excellence
            </h2>
            
            <p className="text-lg text-accent mb-6 font-medium">
              Delivering Clarity, Structure, and Sustainable Growth
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Uruhu Solutions stands at the intersection of innovation and expertise. We are a forward-thinking 
              financial and risk advisory firm committed to empowering individuals and organizations across Nigeria 
              to achieve their financial objectives with confidence.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our approach combines deep market knowledge, strategic thinking, and personalized service to deliver 
              solutions that are both practical and transformative. Whether you're seeking capital, managing risk, 
              or optimizing your portfolio, we provide the clarity and structure needed to navigate complexity and 
              unlock sustainable growth.
            </p>

            <Button variant="teal" size="lg">
              Learn More About Us
            </Button>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-secondary hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/30"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-primary text-lg">
                  {item.label}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
