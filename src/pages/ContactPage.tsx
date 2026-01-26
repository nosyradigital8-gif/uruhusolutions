import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Calendar,
  Linkedin,
  Send,
  Users
} from "lucide-react";
import heroImage from "@/assets/contact-hero-image.jpg";
import { NavLink } from "@/components/NavLink";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a message anytime",
    info: "sbm@uruhusolutions.com",
    action: "mailto:sbm@uruhusolutions.com",
    color: "orange"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    info: "Available during business hours",
    action: null,
    color: "teal"
  },
  {
    icon: MapPin,
    title: "Service Area",
    description: "We serve clients across",
    info: "Nigeria & Beyond",
    action: null,
    color: "orange"
  },
  {
    icon: Calendar,
    title: "Schedule a Meeting",
    description: "Book a consultation",
    info: "Available for appointments",
    action: null,
    color: "teal"
  },
  {
    icon: Linkedin,
    title: "Connect on LinkedIn",
    description: "Follow our updates",
    info: "Uruhu Solutions",
    action: "https://linkedin.com",
    color: "orange"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Quick questions? Chat with us",
    info: "Available during business hours",
    action: null,
    color: "teal"
  },
];

const offices = [
  {
    icon: MapPin,
    title: "Service Area",
    location: "Nigeria & Beyond",
    details: [
      "Serving clients across Nigeria",
      "International partnerships available",
      "Flexible meeting locations",
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    location: "Monday - Friday",
    details: [
      "9:00 AM - 5:00 PM WAT",
      "Email response: Within 24 hours",
      "Emergency support available",
    ],
  },
  {
    icon: Users,
    title: "Our Commitment",
    location: "Building Value. Managing Risk.",
    details: [
      "Personalized attention to every client",
      "Prompt and professional responses",
      "Strategic financial advisory",
    ],
  },
];

const ContactPage = () => {
  const heroRef = useRef(null);
  const methodsRef = useRef(null);
  const officesRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const methodsInView = useInView(methodsRef, { once: true, margin: "-100px" });
  const officesInView = useInView(officesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative flex items-center overflow-hidden pt-24 md:pt-32 min-h-[100vh]">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Contact Uruhu Solutions"
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
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5">
              Let's Start a Conversation
            </h1>
            <p className="text-xl sm:text-2xl text-teal mb-5 font-semibold">
              We're Here to Help
            </p>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
              Reach out to discuss how we can support your financial goals and bring your vision to life.
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-teal/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
      </section>

      {/* Contact Methods Section */}
      <section ref={methodsRef} className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={methodsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange/10 text-orange border border-orange/20 mb-6">
              Ways to Connect
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Choose Your Preferred Channel
            </h2>
            <p className="text-lg text-muted-foreground">
              Multiple ways to reach us—pick what works best for you
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={methodsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group relative"
              >
                <div className="p-8 rounded-2xl border border-border bg-card hover:border-orange/40 hover:shadow-card-hover transition-all duration-300 h-full">
                  <div className={`w-14 h-14 rounded-xl ${method.color === 'orange' ? 'bg-orange/10' : 'bg-teal/10'} flex items-center justify-center mb-5 group-hover:${method.color === 'orange' ? 'bg-orange/20' : 'bg-teal/20'} transition-colors`}>
                    <method.icon className={`w-7 h-7 ${method.color === 'orange' ? 'text-orange' : 'text-teal'}`} />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-primary mb-2">
                    {method.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {method.description}
                  </p>

                  {method.action ? (
                    <a 
                      href={method.action}
                      className={`text-sm font-semibold ${method.color === 'orange' ? 'text-orange hover:text-orange-dark' : 'text-teal hover:text-teal-dark'} transition-colors inline-flex items-center gap-2`}
                    >
                      {method.info}
                      <Send className="w-4 h-4" />
                    </a>
                  ) : (
                    <p className={`text-sm font-semibold ${method.color === 'orange' ? 'text-orange' : 'text-teal'}`}>
                      {method.info}
                    </p>
                  )}
                </div>

                <span className={`absolute -top-3 -right-3 w-8 h-8 rounded-full ${method.color === 'orange' ? 'bg-orange/20 text-orange border-orange/30' : 'bg-teal/20 text-teal border-teal/30'} text-sm font-bold flex items-center justify-center border`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Info Section */}
      <section ref={officesRef} className="section-padding bg-secondary">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={officesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal/10 text-teal border border-teal/20 mb-6">
              Our Location & Hours
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Visit Us or Reach Out
            </h2>
            <p className="text-lg text-muted-foreground">
              Find us at our office or connect with us during business hours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.title}
                initial={{ opacity: 0, y: 30 }}
                animate={officesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange flex items-center justify-center mb-6 shadow-orange-glow">
                  <office.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  {office.title}
                </h3>

                <p className="text-teal font-semibold mb-6">
                  {office.location}
                </p>

                <ul className="space-y-3">
                  {office.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0 mt-2" />
                      <span className="text-muted-foreground text-sm">{detail}</span>
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
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let's discuss how Uruhu Solutions can help you achieve your financial objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:sbm@uruhusolutions.com">
                <Button 
                  className="bg-orange hover:bg-orange-dark hover:shadow-orange-glow text-white font-semibold transition-all duration-300"
                  size="lg"
                >
                  Send Us an Email
                </Button>
              </a>
              <NavLink to="/services">
                <Button 
                  className="border-2 border-teal text-teal bg-transparent hover:bg-teal hover:text-white hover:shadow-teal-glow font-semibold transition-all duration-300"
                  size="lg"
                >
                  Explore Our Services
                </Button>
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
