"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroPremium() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-radial-light">
      {/* Subtle Platinum Texture Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 brushed-metal" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-espresso-50 rounded-full border border-espresso-200 mb-8"
            >
              <Award className="w-4 h-4 text-accent-gold" />
              <span className="text-sm font-medium text-espresso-700">
                Trusted Since 2024 • Licensed & Insured
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="font-display text-display-lg lg:text-display-xl text-royal-800 mb-6">
              Uncompromising Security.
              <span className="block text-espresso-600">
                Unmatched Service.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-platinum-600 mb-8 leading-relaxed">
              Premium security solutions tailored for discerning businesses and residences. 
              We protect what matters most with cutting-edge technology and white-glove service.
            </p>

            {/* Value Props */}
            <div className="space-y-3 mb-10">
              {[
                "1-2 Hour Response Guarantee",
                "24/7 Professional Monitoring",
                "Cutting-Edge Network Technology"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-royal-600 flex-shrink-0" />
                  <span className="text-platinum-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/consultation">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-royal-600 text-white font-semibold rounded-luxury shadow-luxury hover:bg-royal-700 hover:shadow-luxury-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              
              <Link href="/solutions">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-royal-600 font-semibold rounded-luxury border-2 border-royal-600 hover:bg-royal-50 transition-all duration-300"
                >
                  View Solutions
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-white rounded-luxury shadow-luxury p-8 relative">
              {/* Platinum accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-royal-600 via-platinum-400 to-espresso-500 rounded-t-luxury" />
              
              <div className="text-center mb-8">
                <Shield className="w-16 h-16 text-royal-600 mx-auto mb-4" />
                <h3 className="font-display text-2xl text-platinum-800 mb-2">
                  Your Security Partner
                </h3>
                <p className="text-platinum-600">
                  Protecting homes and businesses with excellence
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-platinum-50 rounded-lg">
                  <div className="font-display text-3xl text-royal-600 mb-1">99.97%</div>
                  <div className="text-sm text-platinum-600">Uptime</div>
                </div>
                <div className="text-center p-4 bg-espresso-50 rounded-lg">
                  <div className="font-display text-3xl text-espresso-600 mb-1">500+</div>
                  <div className="text-sm text-platinum-600">Protected</div>
                </div>
                <div className="text-center p-4 bg-royal-50 rounded-lg">
                  <div className="font-display text-3xl text-royal-600 mb-1">1-2h</div>
                  <div className="text-sm text-platinum-600">Response</div>
                </div>
                <div className="text-center p-4 bg-platinum-50 rounded-lg">
                  <div className="font-display text-3xl text-espresso-600 mb-1">24/7</div>
                  <div className="text-sm text-platinum-600">Monitoring</div>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-8 pt-8 border-t border-platinum-200">
                <p className="text-xs text-platinum-500 text-center mb-4">TECHNOLOGY & STANDARDS</p>
                <div className="flex justify-center gap-6">
                  {["UL Listed Equipment", "Advanced Encryption", "Network Security"].map((cert) => (
                    <div key={cert} className="text-xs font-mono text-platinum-600">
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 bg-espresso-600 text-white px-4 py-2 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Live Support Available</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}