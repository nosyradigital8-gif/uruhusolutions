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

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 md:pt-32 lg:pt-36">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Uruhu Solutions Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/60" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy rounded-full blur-3xl" />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container-narrow w-full px-4 md:px-8 lg:px-16 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30 mb-6"
            >
              {slides[currentSlide].badge}
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-white/90 font-medium mb-6"
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-white/80 mb-10 max-w-2xl leading-relaxed"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-20"
            >
              <Button variant="hero" size="xl">
                {slides[currentSlide].cta1}
              </Button>
              <Button variant="heroOutline" size="xl">
                {slides[currentSlide].cta2}
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute bottom-8 left-4 md:left-8 lg:left-16 flex items-center gap-4 z-20">
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-accent w-8"
                    : "bg-white/30 w-3 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2 ml-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-white/30 text-white/70 hover:bg-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-white/30 text-white/70 hover:bg-white/10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-sm tracking-wider rotate-90 translate-y-8">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
