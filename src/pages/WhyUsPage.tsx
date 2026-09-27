import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Settings, 
  BarChart3, 
  Handshake, 
  Sparkles, 
  Globe,
  CheckCircle,
  Award,
  Target
} from "lucide-react";
import heroImage from "@/assets/why-hero-image.jpg";
import { NavLink } from "@/components/NavLink";

const advantages = [
  {
    icon: GraduationCap,
    title: "Deep Industry Expertise",
    description: "Decades of combined experience delivering insights that drive results.",
  },
  {
    icon: Settings,
    title: "Tailored Solutions",
    description: "Customized strategies for your specific needs never one-size-fits-all.",
  },
  {
    icon: BarChart3,
    title: "Practical Perspective",
    description: "Clear, structured advice designed around each client’s objectives and circumstances.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description: "Lasting relationships built on trust and mutual growth.",
  },
  {
    icon: Sparkles,
    title: "Innovative Approach",
    description: "Traditional wisdom meets cutting-edge tools for modern challenges.",
  },
  {
    icon: Globe,
    title: "Flexible Delivery",
    description: "Online or in-person consultations adapted to your preferences.",
  },
];

const differentiators = [
  {
    icon: Target,
    title: "Client-Centric Focus",
    points: [
      "Your goals drive every recommendation",
      "Transparent communication at all stages",
      "Personalized attention from experienced advisors",
    ],
  },
  {
    icon: Award,
    title: "Excellence in Execution",
    points: [
      "Rigorous analysis and due diligence",
      "Strategic implementation support",
      "Continuous monitoring and optimization",
    ],
  },
  {
    icon: CheckCircle,
    title: "Structured Methodology",
    points: [
      "Structured approach to advisory",
      "Data-driven decision making",
      "Results-oriented solutions",
    ],
  },
];

const WhyUsPage = () => {
  const heroRef = useRef(null);
  const advantagesRef = useRef(null);
  const diffRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const advantagesInView = useInView(advantagesRef, { once: true, margin: "-100px" });
  const diffInView = useInView(diffRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative flex items-center overflow-hidden pt-24 md:pt-32 min-h-[100vh]">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Why Choose Uruhu Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/85 to-navy/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange/20 via-transparent to-teal/20" />
        </div>

        {/* Content */}
        <div className="container-narrow w-full px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange/20 text-white border border-orange/50 backdrop-blur-sm mb-6">
              Why Choose Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5">
              The Uruhu Advantage
            </h1>
            <p className="text-xl sm:text-2xl text-teal mb-5 font-semibold">
              What Sets Us Apart
            </p>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
              Expertise, innovation, and unwavering commitment to your financial success.
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-teal/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
      </section>

      {/* Advantages Section */}
      <section ref={advantagesRef} className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={advantagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange/10 text-orange border border-orange/20 mb-6">
              Our Strengths
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Why Clients Trust Us
            </h2>
            <p className="text-lg text-muted-foreground">
              The key advantages that make us your ideal financial advisory partner
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                animate={advantagesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group relative"
              >
                <div className="p-8 rounded-2xl border border-border bg-card hover:border-orange/40 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-5 group-hover:bg-teal/20 transition-colors">
                    <advantage.icon className="w-7 h-7 text-teal" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-primary mb-3">
                    {advantage.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>

                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange/20 text-orange text-sm font-bold flex items-center justify-center border border-orange/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section ref={diffRef} className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={diffInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal/10 text-teal border border-teal/20 mb-6">
              Our Commitment
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              How We Deliver Value
            </h2>
            <p className="text-lg text-muted-foreground">
              Our approach to ensuring your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 30 }}
                animate={diffInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange flex items-center justify-center mb-6 shadow-orange-glow">
                  <diff.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-heading text-xl font-bold text-primary mb-6">
                  {diff.title}
                </h3>

                <ul className="space-y-4">
                  {diff.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-teal" />
                      </div>
                      <span className="text-muted-foreground text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
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
              Experience the Uruhu Difference
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Partner with us to achieve your financial goals with confidence and clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/contact">
                <Button 
                  className="bg-orange hover:bg-orange-dark hover:shadow-orange-glow text-white font-semibold transition-all duration-300"
                  size="lg"
                >
                  Get Started Today
                </Button>
              </NavLink>
              <NavLink to="/services">
                <Button 
                  className="border-2 border-teal text-teal bg-transparent hover:bg-teal hover:text-white hover:shadow-teal-glow font-semibold transition-all duration-300"
                  size="lg"
                >
                  View Our Services
                </Button>
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyUsPage;
