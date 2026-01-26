import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/uruhu-logo.jpg";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Why Us", to: "/why-us" },
  { label: "Process", to: "/process" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-narrow px-4 md:px-8 lg:px-16">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center group">
              <img 
                src={logoImage} 
                alt="Uruhu Solutions" 
                className={`transition-all duration-300 object-contain group-hover:scale-105 ${
                  isScrolled ? "h-12 md:h-14" : "h-14 md:h-16"
                }`}
              />
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={`text-sm font-medium transition-all duration-300 hover:text-orange relative group ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                  activeClassName="text-orange font-semibold"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange to-teal transition-all duration-300 group-hover:w-full" />
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                className={`transition-all duration-300 font-semibold ${
                  isScrolled 
                    ? "bg-gradient-to-r from-orange to-orange-dark hover:shadow-orange-glow text-white" 
                    : "bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-orange hover:border-white"
                }`}
                size="default"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "text-foreground hover:bg-orange/10 hover:text-orange"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 bg-background/98 backdrop-blur-lg shadow-xl lg:hidden border-b border-orange/20"
          >
            <div className="container px-4 py-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-foreground font-medium py-3 px-4 hover:bg-gradient-to-r hover:from-orange/10 hover:to-teal/10 hover:text-orange transition-all duration-300 rounded-lg border border-transparent hover:border-orange/20"
                      activeClassName="bg-gradient-to-r from-orange/10 to-teal/10 text-orange border-orange/20"
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <Button 
                    className="w-full mt-4 bg-gradient-to-r from-orange to-orange-dark hover:shadow-orange-glow text-white font-semibold"
                    size="lg"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
