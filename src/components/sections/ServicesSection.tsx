import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, PieChart, ArrowRight } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Funding & Capital Advisory",
    description:
      "Navigate the complex landscape of capital acquisition with confidence. We connect you with the right funding sources, structure optimal financing solutions, and guide you through every stage of the capital raising process.",
    features: [
      "Capital Structure Optimization",
      "Investor Relations Management",
      "Debt & Equity Financing",
      "Grant & Alternative Funding Solutions",
    ],
  },
  {
    icon: Shield,
    title: "Risk Advisory",
    description:
      "Identify, assess, and mitigate financial and operational risks before they impact your bottom line. Our comprehensive risk advisory services help you build resilience, ensure compliance, and protect your organization's value.",
    features: [
      "Enterprise Risk Management",
      "Compliance & Regulatory Advisory",
      "Financial Risk Assessment",
      "Crisis Management Planning",
    ],
  },
  {
    icon: PieChart,
    title: "Portfolio & Asset Management",
    description:
      "Maximize returns while managing risk through strategic portfolio and asset management. We design customized investment strategies aligned with your goals, risk tolerance, and time horizon.",
    features: [
      "Investment Strategy Development",
      "Asset Allocation & Diversification",
      "Performance Monitoring & Reporting",
      "Wealth Preservation Planning",
    ],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-style mb-6">Our Services</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Comprehensive Solutions for Your Financial Success
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert Advisory Across Funding, Risk Management, and Asset Optimization
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/30"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-accent-foreground" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-primary mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
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
          <Button variant="navy" size="lg">
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
