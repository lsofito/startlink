"use client";

import { motion } from "framer-motion";
import {
  Globe,
  FileCheck,
  Banknote,
  Building2,
  ShoppingBag,
  Lightbulb,
  Shield
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const benefits = [
  {
    icon: Globe,
    title: "Geographical Connectivity",
    description: "The UAE's central location makes it an international trading hub, linking key global markets across Asia, Europe, and Africa.",
    color: "primary",
  },
  {
    icon: FileCheck,
    title: "Ease of Doing Business",
    description: "With 100% foreign ownership, simple registration processes, and efficient governance, setting up a business is smooth and fast.",
    color: "secondary",
  },
  {
    icon: Banknote,
    title: "Tax Benefits",
    description: "The absence of personal income tax, low VAT, and a favorable corporate tax regime make the UAE a tax-efficient jurisdiction.",
    color: "primary",
  },
  {
    icon: Building2,
    title: "Robust Infrastructure",
    description: "Modern ports, logistics, and digital infrastructure essential for both traditional and tech-driven businesses.",
    color: "secondary",
  },
  {
    icon: ShoppingBag,
    title: "High Consumer Spending",
    description: "The local market consists of a wealthy, diverse population with strong demand for goods and services.",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Government Incentives",
    description: "Continuous government initiatives to promote entrepreneurship, innovation, and diversification attract global investors.",
    color: "secondary",
  },
  {
    icon: Shield,
    title: "Stable & Safe Environment",
    description: "Political and economic stability combined with high living standards make the UAE ideal for business owners and families.",
    color: "primary",
  },
];

export default function WhyUAE() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ backgroundColor: '#0F0F1A' }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4"
          >
            Why Choose UAE
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            The Gateway to <span className="text-primary">Global Business</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            The United Arab Emirates presents a highly attractive environment for business establishment and growth,
            driven by its strategic geographic location, world-class infrastructure, and investor-friendly policies.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center ${
                  benefit.color === "primary"
                    ? "bg-primary/20 text-primary"
                    : "bg-secondary/20 text-secondary-light"
                } group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "#1", label: "Ease of Business in MENA" },
            { value: "0%", label: "Personal Income Tax" },
            { value: "100%", label: "Foreign Ownership" },
            { value: "50+", label: "Free Trade Zones" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
