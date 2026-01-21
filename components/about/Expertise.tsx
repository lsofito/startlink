"use client";

import { motion } from "framer-motion";
import { Building2, Scale, Calculator, FileCheck, Compass, RefreshCw, Globe } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const expertiseAreas = [
  {
    number: "01",
    icon: Building2,
    title: "Company Formation & Registration",
    description: "We provide expert support in incorporating and registering your business. Whether launching locally or expanding internationally, we guide you through the legal requirements, help select the ideal business structure (LLC, sole proprietorship, free zone, offshore, etc.), and secure all necessary registrations and licenses.",
  },
  {
    number: "02",
    icon: Scale,
    title: "Legal & Regulatory Compliance",
    description: "Entering a new market comes with complex legal requirements. Our experienced team helps you navigate local laws and regulations—covering tax compliance, licensing, labor laws, and corporate governance—so your business stays fully compliant and risk-free.",
  },
  {
    number: "03",
    icon: Calculator,
    title: "Taxation & Financial Structuring",
    description: "We provide expert guidance on tax planning, financial structuring, and compliance to help your business run efficiently. Our services cover tax registration, VAT advisory, financial reporting, and establishing robust financial processes that are both compliant and growth-oriented.",
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Business Licensing & Permits",
    description: "Obtaining the right licenses and permits is essential for business success. We assist you in identifying and securing all necessary approvals—whether for commercial, professional, or industrial ventures—ensuring full compliance with local authorities and regulatory requirements.",
  },
  {
    number: "05",
    icon: Compass,
    title: "Business Advisory & Strategic Planning",
    description: "Beyond business setup, we provide continuous advisory services to help you optimize your strategy, evaluate market opportunities, and mitigate risks. Our expert insights empower your business for sustained growth and long-term success.",
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Ongoing Compliance & Support",
    description: "We go beyond business setup by offering continuous support to keep your business compliant with changing regulations. This includes license renewals, annual audits, and updates to corporate records.",
  },
  {
    number: "07",
    icon: Globe,
    title: "International Expansion & Market Entry",
    description: "For businesses aiming to grow globally, Starlink provides expert guidance on market entry strategies, supporting your setup in foreign markets with legal, financial, and logistical assistance to ensure seamless international expansion.",
  },
];

export default function Expertise() {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Our Expertise"
          title="Comprehensive Business Knowledge"
          subtitle="Guiding you through the complexities of establishing and growing your business"
          centered
        />

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-3xl mx-auto mt-6 mb-12"
        >
          At Starlink Business Solution, with extensive experience and in-depth knowledge
          of the business setup landscape, we guide you through the complexities of
          establishing and growing your business. Our comprehensive expertise covers a
          broad spectrum of services, ensuring your operations run smoothly and comply
          fully with both local and international regulations.
        </motion.p>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              {/* Number Badge & Icon */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-bold text-primary/20 font-display">
                  {area.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <area.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
