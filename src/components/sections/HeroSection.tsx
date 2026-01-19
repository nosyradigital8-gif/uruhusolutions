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
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/60" />
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
            <span className="inline-flex px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/20 text-white border border-white/30 mb-4">
              {slides[currentSlide].badge}
            </span>

            {/* Title */}
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
              {slides[currentSlide].title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/90 mb-4">
              {slides[currentSlide].subtitle}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 max-w-xl">
              {slides[currentSlide].description}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                {slides[currentSlide].cta1}
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                {slides[currentSlide].cta2}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-6 left-4 right-4 flex items-center justify-between md:justify-start md:gap-6 md:left-8">
          {/* Dots */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 rounded-full transition-all ${
                  currentSlide === i
                    ? "bg-accent w-6"
                    : "bg-white/40 w-2.5"
                }`}
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
              className="p-2 rounded-full border border-white/30 text-white/70"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % slides.length)
              }
              className="p-2 rounded-full border border-white/30 text-white/70"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
