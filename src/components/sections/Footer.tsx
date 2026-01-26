import { motion } from "framer-motion";
import { Mail, Clock, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logoImage from "@/assets/uruhu-logo.jpg";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail("");
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-navy via-slate to-navy text-white">
      {/* Main Footer */}
      <div className="section-padding pb-8">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand & Contact */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img 
                  src={logoImage} 
                  alt="Uruhu Solutions" 
                  className="h-16 mb-4"
                  style={{
                    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
                  }}
                />
                <p className="text-teal font-medium mb-8">Building Value. Managing Risk.</p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Email Us</p>
                      <a href="mailto:sbm@uruhusolutions.com" className="hover:text-orange transition-colors">
                        sbm@uruhusolutions.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Business Hours</p>
                      <p>Monday - Friday: 9:00 AM - 5:00 PM WAT</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Service Area</p>
                      <p>Nigeria & Beyond</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/80 hover:text-teal transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Newsletter */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="font-heading font-semibold text-lg mb-6">Stay Informed</h4>
                <p className="text-white/80 text-sm mb-4">
                  Subscribe for financial insights and market updates.
                </p>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-teal transition-colors"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-orange hover:bg-orange-dark hover:shadow-orange-glow text-white font-semibold transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
              <p>© 2025 Uruhu Solutions. All Rights Reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
