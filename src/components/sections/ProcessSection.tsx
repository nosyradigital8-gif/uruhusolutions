import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Play, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Assessment",
    description:
      "We begin by understanding your unique situation, goals, and challenges through comprehensive consultation and analysis.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Strategic Planning",
    description:
      "Our experts develop customized strategies aligned with your objectives, risk profile, and market opportunities.",
  },
  {
    number: "03",
    icon: Play,
    title: "Implementation",
    description:
      "We guide you through execution with hands-on support, ensuring smooth implementation of recommended solutions.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Monitoring & Optimization",
    description:
      "Continuous performance tracking and strategic adjustments keep you on course toward achieving your financial goals.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-gradient-navy text-navy-foreground" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-accent/20 text-accent border border-accent/30 mb-6">
            Our Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Your Journey to Financial Success
          </h2>
          <p className="text-lg text-navy-foreground/80">
            A Structured, Transparent Approach to Advisory Excellence
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-navy-foreground/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                <div className="bg-navy-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-navy-foreground/10 h-full hover:bg-navy-foreground/10 transition-colors">
                  {/* Number Badge */}
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-lg">
                    <span className="font-heading text-2xl font-bold text-accent-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center lg:justify-start mb-4">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold mb-3 text-center lg:text-left">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-navy-foreground/70 text-sm leading-relaxed text-center lg:text-left">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg">
            Start Your Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
