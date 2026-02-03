"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "Services",
    items: [
      {
        question: "What financial advisory services does Uruhu Solutions offer?",
        answer:
          "We provide a comprehensive suite of financial advisory services including personal financial planning, corporate risk assessment, investment strategy, tax advisory, and wealth management — all tailored to your specific goals and risk profile.",
      },
      {
        question: "Do you work with individuals or only businesses?",
        answer:
          "We serve both. Our team is experienced in working with high-net-worth individuals, startups, SMEs, and large enterprises. Every engagement begins with a deep understanding of your unique situation.",
      },
      {
        question: "What industries do you specialize in?",
        answer:
          "Our expertise spans fintech, banking, insurance, real estate, and emerging markets across Nigeria. However, our frameworks are adaptable — we regularly work with clients outside these verticals.",
      },
    ],
  },
  {
    category: "Getting Started",
    items: [
      {
        question: "How do I begin working with Uruhu Solutions?",
        answer:
          "Simply reach out through our contact page or give us a call. We'll schedule a complimentary discovery session to understand your financial landscape, and from there, we'll craft a tailored plan of action.",
      },
      {
        question: "Is there a minimum engagement or contract requirement?",
        answer:
          "No rigid minimums. We believe in flexible, outcome-driven partnerships. Whether you need a one-off consultation or an ongoing advisory relationship, we structure engagements to fit your needs and budget.",
      },
    ],
  },
  {
    category: "Trust & Track Record",
    items: [
      {
        question: "What makes Uruhu Solutions different from other advisory firms?",
        answer:
          "With over 10 years of proven excellence, we combine deep market knowledge with a genuinely client-centric approach. We don't just advise — we partner with you, offering transparency, accountability, and long-term thinking at every step.",
      },
      {
        question: "Are my financial details kept confidential?",
        answer:
          "Absolutely. Client confidentiality is a cornerstone of how we operate. All engagements are governed by strict privacy protocols and, where applicable, regulatory compliance standards.",
      },
      {
        question: "Can I see case studies or testimonials from past clients?",
        answer:
          "Yes — we're happy to share relevant success stories and references (with client permission) during the onboarding process. Our track record speaks for itself, and we welcome you to experience it firsthand.",
      },
    ],
  },
];

/* ─── Animated Accordion Item ─── */
const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
  index,
  isInView,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  isInView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
    className="border border-border/40 rounded-xl overflow-hidden group"
  >
    <button
      onClick={onToggle}
      className="w-full flex items-start gap-4 px-6 py-5 text-left bg-background/60 hover:bg-teal/5 transition-colors duration-300 focus:outline-none"
    >
      {/* Number Badge */}
      <span className="flex-shrink-0 w-7 h-7 mt-0.5 rounded-lg bg-orange/10 border border-orange/20 flex items-center justify-center text-orange text-xs font-bold font-heading">
        {String(index + 1).padStart(2, "0")}
      </span>

      <span className="flex-1 font-semibold text-primary text-base leading-snug group-hover:text-teal transition-colors duration-300">
        {question}
      </span>

      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-shrink-0 mt-0.5"
      >
        <ChevronDown className="w-5 h-5 text-teal" />
      </ChevronDown>
    </button>

    {/* Animated Panel */}
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="overflow-hidden"
    >
      <div className="px-6 pb-5 pl-[3.75rem]">
        <p className="text-muted-foreground leading-relaxed text-sm">
          {answer}
        </p>
      </div>
    </motion.div>
  </motion.div>
);

/* ─── Main FAQ Section ─── */
const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }));

  let globalIndex = 0;

  return (
    <section id="faq" className="section-padding bg-background" ref={ref}>
      {/* Decorative blobs (mirroring About's style) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-orange/8 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          {/* Label badge — same style as About */}
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange/10 text-orange border border-orange/20 mb-6">
            FAQ
          </span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-lg text-teal mb-2 font-semibold">
            Everything You Need to Know
          </p>

          <p className="text-muted-foreground leading-relaxed">
            We've compiled answers to the most common questions we receive. If
            you don't find what you're looking for, don't hesitate to reach out.
          </p>
        </motion.div>

        {/* ── Accordion Groups ── */}
        <div className="max-w-3xl mx-auto space-y-10">
          {faqs.map((group) => (
            <div key={group.category}>
              {/* Category Label */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center">
                  <HelpCircle className="w-4 h-4 text-teal" />
                </div>
                <h3 className="font-heading text-sm font-bold text-teal uppercase tracking-widest">
                  {group.category}
                </h3>
                {/* decorative line */}
                <div className="flex-1 h-px bg-gradient-to-r from-teal/30 to-transparent" />
              </motion.div>

              {/* Items */}
              <div className="space-y-3">
                {group.items.map((item) => {
                  const key = `${group.category}-${globalIndex}`;
                  const idx = globalIndex;
                  globalIndex++;
                  return (
                    <AccordionItem
                      key={key}
                      question={item.question}
                      answer={item.answer}
                      isOpen={!!openMap[key]}
                      onToggle={() => toggle(key)}
                      index={idx}
                      isInView={isInView}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="mt-16 relative max-w-3xl mx-auto"
        >
          {/* Decorative offset shapes — mirrors About's style */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange/10 rounded-2xl -z-10" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal/10 rounded-2xl -z-10" />

          <div className="bg-gradient-to-br from-background to-background/80 border border-border/40 rounded-2xl shadow-xl px-8 py-10 text-center">
            <p className="text-lg text-primary font-semibold font-heading mb-2">
              Still have questions?
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our advisory team is always happy to help. Reach out and we'll get
              back to you within 24 hours.
            </p>

            <button className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark hover:shadow-orange-glow text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
