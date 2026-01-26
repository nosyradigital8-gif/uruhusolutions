import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Target, Award, Users, Lightbulb } from "lucide-react";
import aboutTeamImage from "@/assets/about-team.jpg";

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={aboutTeamImage} 
                  alt="Uruhu Solutions Team" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange/10 rounded-2xl -z-10" />
              
              {/* Stats Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 bg-gradient-to-br from-orange to-orange-dark text-white px-6 py-4 rounded-xl shadow-orange-glow"
              >
                <p className="text-3xl font-bold font-heading">10+</p>
                <p className="text-sm text-white/90">Years of Excellence</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange/10 text-orange border border-orange/20 mb-6">
              About Us
            </span>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Your Trusted Partner in Financial Excellence
            </h2>
            
            <p className="text-lg text-teal mb-6 font-semibold">
              Delivering Clarity, Structure, and Sustainable Growth
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Uruhu Solutions is a forward-thinking financial and risk advisory firm empowering individuals 
              and organizations across Nigeria to achieve their financial objectives with confidence through 
              strategic thinking and personalized service.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-teal" />
                  </div>
                  <span className="font-medium text-primary text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <Button 
              className="bg-orange hover:bg-orange-dark hover:shadow-orange-glow text-white font-semibold transition-all duration-300"
              size="lg"
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
