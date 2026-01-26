import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const slides = [
  {
    badge: "Welcome to Uruhu Solutions",
    title: "Building Value. Managing Risk",
    subtitle: "Your Strategic Partner in Financial Growth and Risk Management",
    description:
      "Uruhu Solutions is a forward-thinking financial and risk advisory firm delivering clarity, structure, and sustainable growth for individuals and organisations across Nigeria and beyond.",
    cta1: "Get Started",
    cta2: "Learn More",
  },
  {
    badge: "Who We Are",
    title: "Turning Financial Complexity into Clarity",
    subtitle: "Expert Advisors. Tailored Solutions. Measurable Results.",
    description:
      "With deep expertise in funding, risk management, and asset optimization, we empower our clients to make informed decisions that drive sustainable growth and protect their financial futures.",
    cta1: "Our Story",
    cta2: "Meet Our Team",
  },
  {
    badge: "What We Do",
    title: "Financial & Risk Advisory Services",
    subtitle: "Tailored Solutions for Every Stage of Your Financial Journey",
    description:
      "From capital acquisition to portfolio management and risk mitigation, we provide integrated advisory services designed to maximize value and minimize uncertainty in today's dynamic market.",
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
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-teal/60" />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange/20 via-transparent to-teal/20 animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      {/* Content */}
      <div className="container-narrow w-full px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.span 
              className="inline-flex px-4 py-2 text-xs sm:text-sm rounded-full bg-gradient-to-r from-orange/30 to-teal/30 text-white border border-orange/40 backdrop-blur-sm mb-4 shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {slides[currentSlide].badge}
            </motion.span>

            {/* Title */}
            <motion.h1 
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-orange-200 mb-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            {/* Description */}
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* CTA */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-orange to-orange-dark hover:shadow-orange-glow transition-all duration-300 border-0 text-white font-semibold px-8"
              >
                {slides[currentSlide].cta1}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-2 border-teal bg-teal/10 text-white hover:bg-teal hover:shadow-teal-glow transition-all duration-300 backdrop-blur-sm font-semibold px-8"
              >
                {slides[currentSlide].cta2}
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-8 left-4 right-4 flex items-center justify-between md:justify-start md:gap-8 md:left-10">
          {/* Dots */}
          <div className="flex gap-2.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === i
                    ? "bg-gradient-to-r from-orange to-teal w-8 shadow-lg"
                    : "bg-white/40 w-2.5 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? slides.length - 1 : prev - 1
                )
              }
              className="p-2.5 rounded-full border-2 border-white/40 text-white/80 hover:bg-orange/20 hover:border-orange hover:text-white transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % slides.length)
              }
              className="p-2.5 rounded-full border-2 border-white/40 text-white/80 hover:bg-teal/20 hover:border-teal hover:text-white transition-all duration-300 backdrop-blur-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-teal/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
    </section>
  );
};

export default HeroSection;
