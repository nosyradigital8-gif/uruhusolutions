import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Target, Award, Users, Lightbulb, Shield, Heart, TrendingUp } from "lucide-react";
import aboutTeamImage from "@/assets/about1-hero-image.jpg";
import heroImage from "@/assets/about2-hero-image.jpg";
import { NavLink } from "@/components/NavLink";

const highlights = [
  { icon: Target, label: "Practical Solutions" },
  { icon: Award, label: "Financial & Risk Expertise" },
  { icon: Users, label: "Client Focus" },
  { icon: Lightbulb, label: "Independent Thinking" },
];

const values = [
  { icon: Target, title: "Excellence", description: "We apply rigorous thinking and high professional standards to every engagement." },
  { icon: Shield, title: "Integrity", description: "We give objective advice grounded in transparency and accountability." },
  { icon: Heart, title: "Client First", description: "We start with each client’s goals, circumstances and operating environment." },
  { icon: TrendingUp, title: "Innovation", description: "We combine financial insight with practical thinking to address evolving challenges." },
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
      <section ref={heroRef} className="relative flex items-center overflow-hidden pt-24 md:pt-32 min-h-[100vh]">
        <div className="absolute inset-0">
          <img src={heroImage} alt="About Uruhu" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/85 to-navy/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange/20 via-transparent to-teal/20" />
        </div>
        <div className="container-narrow w-full px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="max-w-4xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange/20 text-white border border-orange/50 backdrop-blur-sm mb-6">About Uruhu</span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5">Building Value. Managing Risk.</h1>
            <p className="text-xl sm:text-2xl text-teal mb-5 font-semibold">Practical Advisory. Sustainable Value.</p>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">Uruhu is a boutique business and financial advisory firm helping businesses and individuals make informed decisions, strengthen financial performance, prepare for appropriate funding opportunities and manage risk.</p>
          </motion.div>
        </div>
      </section>

      <section ref={storyRef} className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={storyInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl"><img src={aboutTeamImage} alt="Uruhu team" className="w-full h-auto object-cover" /></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal/20 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange/10 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 bg-gradient-to-br from-orange to-orange-dark text-white px-5 py-4 rounded-xl shadow-orange-glow max-w-[190px]"><p className="text-sm leading-snug">Experience grounded in financial services, risk and regulation.</p></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={storyInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Built on Expertise. Focused on Practical Solutions.</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">Uruhu was established to help clients turn financial insight into practical action. We work with businesses and individuals to understand their position, identify opportunities and risks, and build a clear path toward their goals.</p>
              <p className="text-muted-foreground leading-relaxed mb-8">Our work brings together business advisory, financial analysis, funding preparation and risk management. Drawing on experience in financial services, regulatory oversight and business strategy, we tailor our recommendations to the realities of operating in Nigeria.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">{highlights.map((item, index) => <motion.div key={item.label} initial={{ opacity: 0, y: 10 }} animate={storyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }} className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0"><item.icon className="w-5 h-5 text-teal" /></div><span className="font-medium text-primary text-sm">{item.label}</span></motion.div>)}</div>
              <NavLink to="/services"><Button className="bg-orange hover:bg-orange-dark hover:shadow-orange-glow text-white font-semibold" size="lg">Explore Our Services</Button></NavLink>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16"><span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal/10 text-teal border border-teal/20 mb-6">Our Values</span><h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">What Drives Us</h2><p className="text-lg text-muted-foreground">The principles that guide every engagement</p></motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{values.map((value, index) => <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all border border-border text-center"><div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mx-auto mb-4"><value.icon className="w-7 h-7 text-teal" /></div><h3 className="font-heading text-lg font-bold text-primary mb-3">{value.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p></motion.div>)}</div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-navy via-slate to-navy text-white"><div className="container-narrow text-center"><div className="max-w-3xl mx-auto"><h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Let’s Build What’s Next.</h2><p className="text-lg text-white/80 mb-8">Whether you are strengthening a business, preparing for funding or managing risk, Uruhu can help you develop a structured path forward.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><NavLink to="/contact"><Button className="bg-orange hover:bg-orange-dark text-white font-semibold" size="lg">Discuss Your Needs</Button></NavLink><NavLink to="/services"><Button className="border-2 border-teal text-teal bg-transparent hover:bg-teal hover:text-white font-semibold" size="lg">Explore Our Services</Button></NavLink></div></div></div></section>
    </div>
  );
};

export default AboutPage;
