import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Settings, BarChart3, Handshake, Sparkles, Globe } from "lucide-react";

const advantages = [
  {
    icon: GraduationCap,
    title: "Deep Industry Expertise",
    description:
      "Decades of combined experience delivering insights that drive results.",
  },
  {
    icon: Settings,
    title: "Tailored Solutions",
    description:
      "Customized strategies for your specific needs and goals—never one-size-fits-all.",
  },
  {
    icon: BarChart3,
    title: "Proven Results",
    description:
      "Track record of helping clients achieve financial objectives through expert execution.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "Lasting relationships built on trust, transparency, and mutual growth.",
  },
  {
    icon: Sparkles,
    title: "Innovative Approach",
    description:
      "Traditional wisdom meets cutting-edge tools for modern financial challenges.",
  },
  {
    icon: Globe,
    title: "Flexible Delivery",
    description:
      "Online or in-person consultations adapted to your preferences.",
  },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange/10 text-orange border border-orange/20 mb-6">
            Why Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            The Uruhu Advantage
          </h2>
          <p className="text-lg text-muted-foreground">
            What Sets Us Apart in Nigeria's Financial Advisory Landscape
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative"
            >
              <div className="p-8 rounded-2xl border border-border bg-card hover:border-orange/40 hover:shadow-card-hover transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-5 group-hover:bg-teal/20 transition-colors">
                  <advantage.icon className="w-7 h-7 text-teal" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  {advantage.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>

              {/* Decorative number */}
              <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange/20 text-orange text-sm font-bold flex items-center justify-center border border-orange/30">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
