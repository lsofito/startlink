"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Award,
  Lock,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct our business with honesty, transparency, and the highest ethical standards, ensuring our clients' trust is always earned and maintained.",
    gradient: "from-primary to-primary-dark",
  },
  {
    icon: Heart,
    title: "Client-Centric Approach",
    description: "Our clients are at the heart of everything we do. We deliver tailored solutions and build long-term relationships.",
    gradient: "from-secondary to-secondary-dark",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description: "We maintain the highest level of professional standards, providing accurate, timely, and insightful advisory services.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Lock,
    title: "Confidentiality & Trust",
    description: "We respect the sensitivity of every client's information and uphold strict confidentiality at every stage.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Adaptability",
    description: "We embrace innovation and continuously adapt to the evolving financial and regulatory landscape.",
    gradient: "from-primary to-primary-dark",
  },
  {
    icon: Target,
    title: "Accountability",
    description: "We take full ownership of our actions and decisions, ensuring we deliver on our promises and exceed expectations.",
    gradient: "from-secondary to-secondary-dark",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    description: "We promote responsible business practices ensuring compliance with legal, financial, and ethical standards.",
    gradient: "from-primary to-secondary",
  },
];

export default function CoreValues() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

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
            className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4"
          >
            Our Core Values
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6">
            Values That <span className="text-primary">Define Us</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            At Star Link Business Solutions FZE LLC, our values guide every decision we make
            and every service we deliver to our clients.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="h-full bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                {/* Animated gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
