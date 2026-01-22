"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import SectionHeader from "@/components/ui/SectionHeader";

export default function GoogleReviews() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Google Reviews"
          title="Trusted by Businesses Worldwide"
          subtitle="See what our clients say about their experience with Star Link Business Solutions"
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          {/* Elfsight Google Reviews Widget */}
          <Script
            src="https://static.elfsight.com/platform/platform.js"
            strategy="lazyOnload"
          />
          <div
            className="elfsight-app-07791c65-9020-4d20-9de9-0f6e2c4d5e10"
            data-elfsight-app-lazy
          />
        </motion.div>
      </div>
    </section>
  );
}
