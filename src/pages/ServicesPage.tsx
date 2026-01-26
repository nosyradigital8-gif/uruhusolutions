import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Shield, 
  PieChart, 
  Check,
  ArrowRight,
  Target,
  Users,
  LineChart
} from "lucide-react";
import { NavLink } from "@/components/NavLink";

const services = [
  {
    icon: TrendingUp,
    title: "Funding & Capital Advisory",
    tagline: "Strategic Capital Solutions for Growth",
    description:
      "Connect with the right funding sources and structure optimal financing solutions for your capital needs.",
    features: [
      "Capital Structure Optimization",
      "Investor Relations Management",
      "Debt & Equity Financing",
      "Alternative Funding Solutions",
      "Financial Modeling & Projections",
      "Pitch Deck Development",
    ],
    benefits: [
      "Access to diverse funding sources",
      "Optimized capital structure",
      "Reduced cost of capital",
      "Accelerated growth trajectory",
    ],
  },
  {
    icon: Shield,
    title: "Risk Advisory",
    tagline: "Comprehensive Risk Management",
    description:
      "Identify and mitigate financial risks before they impact your bottom line. Build resilience and ensure compliance.",
    features: [
      "Enterprise Risk Management",
      "Compliance & Regulatory Advisory",
      "Financial Risk Assessment",
      "Crisis Management Planning",
      "Internal Controls Review",
      "Risk Reporting & Analytics",
    ],
    benefits: [
      "Enhanced operational resilience",
      "Regulatory compliance assurance",
      "Reduced exposure to financial risks",
      "Improved decision-making framework",
    ],
  },
  {
    icon: PieChart,
    title: "Portfolio & Asset Management",
    tagline: "Strategic Wealth Growth",
    description:
      "Maximize returns through strategic portfolio management aligned with your goals and risk tolerance.",
    features: [
      "Investment Strategy Development",
      "Asset Allocation & Diversification",
      "Performance Monitoring & Reporting",
      "Wealth Preservation Planning",
      "Market Analysis & Research",
      "Portfolio Rebalancing",
    ],
    benefits: [
      "Optimized risk-return profile",
      "Diversified investment portfolio",
      "Regular performance tracking",
      "Long-term wealth preservation",
    ],
  },
];

const processSteps = [
  {
    icon: Target,
    title: "Discovery",
    description: "Understanding your unique needs and objectives",
  },
  {
    icon: LineChart,
    title: "Strategy",
    description: "Developing customized solutions for your goals",
  },
  {
    icon: Users,
    title: "Execution",
    description: "Implementing solutions with expert guidance",
  },
  {
    icon: TrendingUp,
    title: "Optimization",
    description: "Continuous monitoring and improvement",
  },
];

const ServicesPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 bg-gradient-to-br from-orange/10 via-background to-teal/10">
        <div className="container-narrow px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal/10 text-teal border border-teal/20 mb-6">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Comprehensive Financial Solutions
            </h1>
            <p className="text-xl text-teal font-semibold mb-6">
              Expert Advisory Across Funding, Risk Management, and Asset Optimization
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tailored financial advisory services designed to maximize value and minimize uncertainty in today's dynamic market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section ref={servicesRef} className="section-padding bg-background">
        <div className="container-narrow">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-teal flex items-center justify-center mb-6 shadow-teal-glow">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-teal font-semibold mb-4">
                    {service.tagline}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <NavLink to="/contact">
                    <Button 
                      className="bg-orange hover:bg-orange-dark hover:shadow-orange-glow text-white font-semibold transition-all duration-300"
                      size="lg"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </NavLink>
                </div>

                {/* Features & Benefits Side */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-secondary rounded-2xl p-8 border border-border">
                    {/* Features */}
                    <h3 className="font-heading text-xl font-bold text-primary mb-4">
                      What We Offer
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-orange" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Benefits */}
                    <h3 className="font-heading text-xl font-bold text-primary mb-4 pt-6 border-t border-border">
                      Key Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-teal" />
                          </div>
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange/10 text-orange border border-orange/20 mb-6">
              Our Process
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              How We Work With You
            </h2>
            <p className="text-lg text-muted-foreground">
              A structured, transparent approach to delivering results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="relative text-center"
              >
                <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-orange/30">
                  <div className="w-14 h-14 rounded-full bg-orange flex items-center justify-center mx-auto mb-4 shadow-orange-glow">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-teal/30 -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-navy via-slate to-navy text-white">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Schedule a consultation to discuss how our services can help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/contact">
                <Button 
                  className="bg-orange hover:bg-orange-dark hover:shadow-orange-glow text-white font-semibold transition-all duration-300"
                  size="lg"
                >
                  Schedule Consultation
                </Button>
              </NavLink>
              <NavLink to="/why-us">
                <Button 
                  className="border-2 border-teal text-teal bg-transparent hover:bg-teal hover:text-white hover:shadow-teal-glow font-semibold transition-all duration-300"
                  size="lg"
                >
                  Why Choose Us
                </Button>
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
