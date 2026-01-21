"use client";

import { motion } from "framer-motion";
import { CheckCircle, Lightbulb, Zap, Settings, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const featurePoints = [
  "Complete business registration solutions",
  "Thorough market research and analysis",
  "Professional compliance advisory",
  "Strategic operational support for business efficiency",
];

export default function Features() {
  return (
    <section className="section-padding bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-50">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Our Features"
          title="Empowering Business Growth"
          subtitle="Essential, high-impact capabilities designed to drive your success"
          centered
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Main Feature Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-6">
                <Settings className="w-7 h-7" />
              </div>

              <h3 className="font-display text-2xl font-bold text-dark mb-4">
                Customized Solutions for Your Business
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Driven by a client-centric approach, we provide customized services that
                simplify business operations while promoting sustainable growth and
                regulatory compliance.
              </p>

              <div className="space-y-4">
                {featurePoints.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-dark font-medium"
              >
                Discover and seize new avenues for business growth. Our offerings, from
                strategic market positioning to operational efficiency, are crafted to
                drive exceptional business success.
              </motion.p>
            </div>
          </motion.div>

          {/* Right - Highlight Cards */}
          <div className="space-y-6">
            {/* Innovation Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-dark mb-2">
                    Strategies Fueled by Innovation
                  </h4>
                  <p className="text-gray-600">
                    Delivering forward-looking solutions that empower your business
                    to stay ahead in a competitive marketplace.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Execution Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 border border-secondary/20 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-dark mb-2">
                    Flawless Execution
                  </h4>
                  <p className="text-gray-600">
                    Streamlining processes to ensure efficiency and sustainable
                    growth at every stage of your business journey.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Growth Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-2xl p-8 border border-green-500/20 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-dark mb-2">
                    Sustainable Growth
                  </h4>
                  <p className="text-gray-600">
                    Building long-term success through strategic planning and
                    continuous support for your evolving business needs.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
