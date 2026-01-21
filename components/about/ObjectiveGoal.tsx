"use client";

import { motion } from "framer-motion";
import { Target, Globe } from "lucide-react";

export default function ObjectiveGoal() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ backgroundColor: '#111111' }}>
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-secondary/30 to-transparent rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Objective */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Our Objective
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our objective is to simplify the business setup process by delivering
              seamless, efficient, and result-driven solutions that empower entrepreneurs
              and organizations to succeed from day one. We focus on eliminating complexities,
              ensuring smooth procedures, and providing expert guidance so that businesses
              can confidently establish their presence and begin operating with ease and efficiency.
            </p>
          </motion.div>

          {/* Goal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-xl bg-secondary/20 border border-secondary/30 text-secondary-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Our Goal
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our goal is to become a trusted partner for businesses, empowering them
              to expand and succeed on a global scale through innovative, transparent,
              and customized solutions. We are committed to delivering value-driven
              support that helps organizations grow confidently and sustainably in an
              ever-evolving business landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
