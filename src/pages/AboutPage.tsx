import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Target, Award, Users, Lightbulb, TrendingUp, Shield, Heart } from "lucide-react";
import aboutTeamImage from "@/assets/about-team.jpg";
import heroImage from "@/assets/hero-image.jpg";
import { NavLink } from "@/components/NavLink";

const highlights = [
  { icon: Target, label: "Client-Centric Approach" },
  { icon: Award, label: "Proven Track Record" },
  { icon: Users, label: "Industry Expertise" },
  { icon: Lightbulb, label: "Innovative Solutions" },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Delivering exceptional results and exceeding expectations.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Building trust through transparency and ethical practices.",
  },
  {
    icon: Heart,
    title: "Client First",
    description: "Your success is our priority in every decision.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "New approaches for complex financial challenges.",
  },
];

const AboutPage = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative flex items-center overflow-hidden pt-24 md:pt-32 min-h-[70vh]">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="About Uruhu Solutions"
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
              About Uruhu Solutions
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5">
              Building Value. Managing Risk.
            </h1>
            <p className="text-xl sm:text-2xl text-teal mb-5 font-semibold">
              Your Trusted Partner in Financial Excellence
            </p>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
              Forward-thinking financial advisory empowering organizations across Nigeria with confidence.
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-teal/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={aboutTeamImage} 
                    alt="Uruhu Solutions Team" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal/20 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange/10 rounded-2xl -z-10" />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={storyInView ? { opacity: 1, scale: 1 } : {}}
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
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Story
              </h2>
              
              <p className="text-lg text-teal mb-6 font-semibold">
                Founded on Expertise. Built on Trust.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Uruhu Solutions was established to bridge the gap between complex financial challenges and actionable solutions. We combine deep market knowledge with strategic thinking to deliver results that matter.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of seasoned professionals brings decades of combined experience across financial services, risk management, and capital markets, providing insights that drive sustainable growth.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={storyInView ? { opacity: 1, y: 0 } : {}}
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

              <NavLink to="/services">
                <Button 
                  className="bg-orange hover:bg-orange-dark hover:shadow-orange-glow text-white font-semibold transition-all duration-300"
                  size="lg"
                >
                  Explore Our Services
                </Button>
              </NavLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal/10 text-teal border border-teal/20 mb-6">
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-orange/30 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-teal" />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
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
              Ready to Work Together?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let's discuss how we can help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/contact">
                <Button 
                  className="bg-orange hover:bg-orange-dark hover:shadow-orange-glow text-white font-semibold transition-all duration-300"
                  size="lg"
                >
                  Get in Touch
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

export default AboutPage;
