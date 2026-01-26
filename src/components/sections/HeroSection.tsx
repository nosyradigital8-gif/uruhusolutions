import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const slides = [
  {
    badge: "Welcome to Uruhu Solutions",
    title: "Building Value. Managing Risk",
    subtitle: "Strategic Financial Growth & Risk Management",
    description:
      "Forward-thinking financial advisory delivering clarity and sustainable growth across Nigeria and beyond.",
    cta1: "Get Started",
    cta2: "Learn More",
  },
  {
    badge: "Who We Are",
    title: "Turning Complexity into Clarity",
    subtitle: "Expert Advisors. Tailored Solutions.",
    description:
      "Deep expertise in funding, risk management, and asset optimization to drive sustainable growth.",
    cta1: "Our Story",
    cta2: "Meet Our Team",
  },
  {
    badge: "What We Do",
    title: "Financial & Risk Advisory",
    subtitle: "Solutions for Every Stage",
    description:
      "Integrated advisory services from capital acquisition to portfolio management and risk mitigation.",
    cta1: "Explore Services",
    cta2: "Schedule Consultation",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex items-center overflow-hidden pt-24 md:pt-32 min-h-[90vh] md:min-h-screen">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Uruhu Solutions"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay at top for logo visibility, gradient to vibrant colors below */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/70 to-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange/25 to-teal/30" />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange/15 via-transparent to-teal/15 animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      {/* Content */}
      <div className="container-narrow w-full px-4 sm:px-6 md:px-10 lg:px-16 relative z-10 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.span 
              className="inline-flex px-4 py-2 text-xs sm:text-sm rounded-full bg-orange/20 text-white border border-orange/50 backdrop-blur-sm mb-6 font-medium"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {slides[currentSlide].badge}
            </motion.span>

            {/* Title */}
            <motion.h1 
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-teal mb-5 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            {/* Description */}
            <motion.p 
              className="text-base sm:text-lg text-white/90 leading-relaxed mb-10 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* CTA */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-orange hover:bg-orange-dark hover:shadow-orange-glow transition-all duration-300 border-0 text-white font-semibold px-8 py-6 text-base"
              >
                {slides[currentSlide].cta1}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-2 border-teal bg-transparent text-white hover:bg-teal hover:shadow-teal-glow transition-all duration-300 backdrop-blur-sm font-semibold px-8 py-6 text-base"
              >
                {slides[currentSlide].cta2}
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center">
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === i
                    ? "bg-orange w-10 shadow-lg"
                    : "bg-white/50 w-3 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-teal/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
    </section>
  );
};

export default HeroSection;
