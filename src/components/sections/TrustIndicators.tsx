"use client";

import { motion } from "framer-motion";
import { Award, Shield, Clock, Users, CheckCircle } from "lucide-react";

export default function TrustIndicators() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-display-md lg:text-display-lg text-royal-800 mb-4">
            Why Choose Creative Security Networks
          </h2>
          <p className="text-xl text-platinum-600 max-w-3xl mx-auto">
            Industry-leading security technology backed by proven practices and unwavering commitment
          </p>
        </motion.div>

        {/* Main Trust Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: Shield, label: "Licensed & Insured", value: "Full Coverage" },
            { icon: Clock, label: "Response Time", value: "1-2 Hours" },
            { icon: Award, label: "Industry Certified", value: "UL Listed" },
            { icon: Users, label: "Expert Technicians", value: "15+ Years Exp" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-royal-50 to-espresso-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-platinum-200">
                  <Icon className="w-10 h-10 text-royal-600" />
                </div>
                <div className="font-display text-2xl text-espresso-700 mb-1">{item.value}</div>
                <div className="text-platinum-600">{item.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Certification Section */}
        <div className="bg-gradient-platinum rounded-luxury p-12">
          <h3 className="font-heading text-2xl text-center text-platinum-800 mb-8">
            Our Security Standards
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              "End-to-End Encryption",
              "24/7 Monitoring",
              "UL Listed Equipment",
              "Privacy First Design",
              "Regular Security Audits"
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg p-4 text-center shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-accent-success mx-auto mb-2" />
                <div className="text-sm font-medium text-platinum-700">{cert}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-luxury rounded-luxury p-8 text-center text-white"
        >
          <h3 className="font-display text-3xl mb-4">Our 100% Satisfaction Guarantee</h3>
          <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            We stand behind our work with an industry-leading guarantee. 
            If you're not completely satisfied, we'll make it right or refund your investment.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-white text-royal-600 font-semibold rounded-luxury hover:bg-platinum-50 transition-all duration-300"
          >
            Learn More About Our Guarantee
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}