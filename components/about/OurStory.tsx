"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Rocket } from "lucide-react";

const highlights = [
  { icon: Users, text: "Expert guidance for startups and expansions" },
  { icon: Award, text: "Compliance and market insights you can trust" },
  { icon: Rocket, text: "Strategic solutions for business success" },
];

export default function OurStory() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-50">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20"
            >
              About ABT Business & Financial Services
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-4xl font-bold text-dark mb-6"
            >
              Seamless Business Setup <span className="text-primary">Solutions</span>
            </motion.h2>

            <div className="space-y-4 text-gray-600">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                At ABT Business Setup, we simplify business registration and management
                in the UAE, offering tailored solutions to meet your unique goals.
                Empowering growth through excellence and innovation.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                We (ABT BUSINESS & FINANCIAL SERVICES LLC) are a team of expert business
                setup consultants dedicated to empowering businesses to reach their full
                potential. Our seasoned professionals deliver exceptional consultancy
                services, assisting clients in successfully establishing and growing
                their businesses in UAE's competitive market.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                With in-depth knowledge of local laws, regulations, and business practices,
                we provide valuable insights and practical solutions tailored to your needs.
                Backed by years of experience, we have helped numerous businesses, especially
                startups and SMEs, establish a strong presence in the UAE.
              </motion.p>
            </div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 space-y-3"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-8 text-lg font-medium text-dark"
            >
              Let's make your entrepreneurial dreams a reality in the UAE's dynamic market.
            </motion.p>
          </motion.div>

          {/* Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                  alt="ABT Business Team"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -left-8 bg-white border border-gray-100 rounded-xl shadow-2xl p-6"
              >
                <h4 className="font-display text-lg font-bold text-dark mb-4">
                  Trusted Partner
                </h4>
                <div className="space-y-3">
                  {[
                    { value: "20+", label: "Years Experience" },
                    { value: "5000+", label: "Businesses Formed" },
                    { value: "98%", label: "Client Satisfaction" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-dark font-bold text-sm">
                        {stat.value}
                      </div>
                      <span className="text-gray-600 text-sm">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-primary text-dark px-4 py-2 rounded-full font-bold text-sm shadow-lg"
              >
                Trusted Partner
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
