"use client";

import { motion } from "framer-motion";
import { Camera, Shield, Smartphone, Fingerprint, Home, Building2 } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "HD Surveillance Systems",
    description: "4K cameras with AI-powered threat detection and night vision",
    color: "royal"
  },
  {
    icon: Shield,
    title: "24/7 Monitoring",
    description: "Professional monitoring center with guaranteed response times",
    color: "espresso"
  },
  {
    icon: Smartphone,
    title: "Smart Integration",
    description: "Seamless control from anywhere via our proprietary app",
    color: "royal"
  },
  {
    icon: Fingerprint,
    title: "Access Control",
    description: "Biometric and keyless entry systems for maximum security",
    color: "espresso"
  },
  {
    icon: Home,
    title: "Residential Protection",
    description: "Tailored solutions for luxury homes and estates",
    color: "royal"
  },
  {
    icon: Building2,
    title: "Commercial Security",
    description: "Enterprise-grade systems for businesses of all sizes",
    color: "espresso"
  }
];

export default function ServiceShowcase() {
  return (
    <section className="py-24 bg-platinum-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-display-md lg:text-display-lg text-royal-800 mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-xl text-platinum-600 max-w-3xl mx-auto">
            From consultation to installation and ongoing support, we provide end-to-end security services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const bgColor = service.color === "royal" ? "bg-royal-50" : "bg-espresso-50";
            const iconColor = service.color === "royal" ? "text-royal-600" : "text-espresso-600";
            const borderColor = service.color === "royal" ? "border-royal-100" : "border-espresso-100";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-luxury p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className={`w-14 h-14 ${bgColor} rounded-lg flex items-center justify-center mb-6 border ${borderColor}`}>
                  <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-platinum-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-platinum-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}