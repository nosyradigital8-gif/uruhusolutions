import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Play, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We understand your business or financial position, goals and challenges.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Assessment",
    description:
      "We assess the financial, operational and risk considerations that matter to your decision.",
  },
  {
    number: "03",
    icon: Play,
    title: "Implementation",
    description:
      "We support agreed next steps and coordinate with relevant stakeholders.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Review",
    description:
      "We review progress and refine the approach where needed.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-gradient-to-br from-navy via-navy/95 to-slate text-white" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal/20 text-teal border border-teal/30 mb-6">
            Our Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            A Structured Path Forward
          </h2>
          <p className="text-lg text-white/80">
            A Structured, Transparent Approach to Practical Advice
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full hover:bg-white/10 hover:border-teal/30 transition-all duration-300">
                {/* Number Badge */}
                <div className="w-16 h-16 rounded-full bg-orange flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-orange-glow">
                  <span className="font-heading text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex justify-center lg:justify-start mb-4">
                  <step.icon className="w-6 h-6 text-teal" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold mb-3 text-center lg:text-left text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed text-center lg:text-left">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button 
            className="bg-orange hover:bg-orange-dark hover:shadow-orange-glow text-white font-semibold transition-all duration-300 border-0"
            size="lg"
          >
            Discuss Your Needs
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
