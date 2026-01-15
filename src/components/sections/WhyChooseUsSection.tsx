import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Settings, BarChart3, Handshake, Sparkles, Globe } from "lucide-react";

const advantages = [
  {
    icon: GraduationCap,
    title: "Deep Industry Expertise",
    description:
      "Our team brings decades of combined experience across financial services, risk management, and capital markets, providing insights that drive results.",
  },
  {
    icon: Settings,
    title: "Tailored Solutions",
    description:
      "We recognize that every client is unique. Our solutions are customized to your specific needs, goals, and circumstances—never one-size-fits-all.",
  },
  {
    icon: BarChart3,
    title: "Proven Results",
    description:
      "Our track record speaks for itself. We've helped numerous clients achieve their financial objectives through strategic planning and expert execution.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "We're not just advisors—we're partners invested in your success. We build lasting relationships based on trust, transparency, and mutual growth.",
  },
  {
    icon: Sparkles,
    title: "Innovative Approach",
    description:
      "We combine traditional financial wisdom with cutting-edge tools and methodologies to deliver solutions that meet today's challenges and tomorrow's opportunities.",
  },
  {
    icon: Globe,
    title: "Flexible Delivery",
    description:
      "Whether you prefer online consultations or in-person meetings, we adapt to your preferences, ensuring accessible and convenient service delivery.",
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
          <span className="badge-style mb-6">Why Us</span>
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
              <div className="p-8 rounded-2xl border border-border bg-card hover:border-accent/40 hover:shadow-card-hover transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mb-5 group-hover:bg-navy/20 transition-colors">
                  <advantage.icon className="w-7 h-7 text-navy" />
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
              <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-bold flex items-center justify-center">
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
