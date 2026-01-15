import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Building2, Layers } from "lucide-react";

const deliveryOptions = [
  {
    icon: Video,
    title: "Online Advisory",
    description:
      "Connect with our experts from anywhere in Nigeria or globally through secure video consultations, email correspondence, and digital collaboration tools. Perfect for busy professionals and remote engagements.",
  },
  {
    icon: Building2,
    title: "In-Person Consultation",
    description:
      "Experience face-to-face advisory services with our team. Schedule on-site meetings for in-depth strategic planning, detailed presentations, and personalized consultation sessions.",
  },
  {
    icon: Layers,
    title: "Hybrid Engagement",
    description:
      "Enjoy the best of both worlds with a flexible combination of online and in-person interactions, tailored to your preferences and project requirements.",
  },
];

const ServiceDeliverySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-style mb-6">How We Serve</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Advisory Services Designed Around Your Needs
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the Engagement Model That Works Best for You
          </p>
        </motion.div>

        {/* Delivery Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {deliveryOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group text-center"
            >
              <div className="bg-secondary rounded-2xl p-8 h-full border border-border hover:border-accent/30 hover:shadow-card-hover transition-all duration-300">
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <option.icon className="w-10 h-10 text-accent" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-primary mb-4">
                  {option.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto"
        >
          Regardless of your chosen delivery method, you'll receive the same high-quality expertise, 
          personalized attention, and commitment to your success.
        </motion.p>
      </div>
    </section>
  );
};

export default ServiceDeliverySection;
