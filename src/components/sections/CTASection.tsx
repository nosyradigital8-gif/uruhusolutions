import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-navy-foreground rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-accent/20 text-accent border border-accent/30 mb-6">
            <Sparkles className="w-4 h-4" />
            Get Started Today
          </span>

          {/* Title */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy-foreground mb-4">
            Ready to Transform Your Financial Future?
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-accent mb-6 font-medium">
            Schedule Your Complimentary Consultation
          </p>

          {/* Description */}
          <p className="text-navy-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Take the first step toward financial clarity and sustainable growth. Our team is ready to 
            understand your needs and develop a customized strategy that delivers results. Whether you're 
            seeking funding, managing risk, or optimizing your portfolio, Uruhu Solutions is your trusted 
            partner for success.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="xl" className="group">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Contact Us Now
            </Button>
          </div>

          {/* Free Consultation Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-foreground/10 text-navy-foreground/90 text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Free initial consultation for new clients
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
