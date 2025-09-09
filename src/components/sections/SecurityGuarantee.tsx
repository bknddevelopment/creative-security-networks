"use client";

import { motion } from "framer-motion";
import { Shield, Award, Clock, Zap, CheckCircle, Lock } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const guarantees = [
  {
    icon: Clock,
    title: "99.99% Uptime",
    description: "Guaranteed system availability with redundant infrastructure",
    badge: "SLA BACKED"
  },
  {
    icon: Zap,
    title: "< 1ms Response",
    description: "Lightning-fast threat detection and neutralization",
    badge: "REAL-TIME"
  },
  {
    icon: Shield,
    title: "Zero Breaches",
    description: "100% protection guarantee or your money back",
    badge: "GUARANTEED"
  },
  {
    icon: Lock,
    title: "Military Grade",
    description: "NSA-approved encryption standards",
    badge: "CERTIFIED"
  }
];

export default function SecurityGuarantee() {
  return (
    <section className="py-24 bg-midnight-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass-white backdrop-blur-md border border-security-safe/30 mb-6">
            <Award className="w-4 h-4 text-security-safe" />
            <span className="text-security-safe text-sm font-mono">INDUSTRY LEADING</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-security-safe to-cyber">
              Ironclad Promise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Not just claims—contractual guarantees backed by our track record
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover className="p-6 h-full relative">
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-[10px] font-bold text-cyber bg-cyber/10 rounded">
                      {guarantee.badge}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyber/20 to-neon-blue/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cyber" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {guarantee.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {guarantee.description}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-security-safe" />
                    <span className="text-xs text-security-safe">Verified</span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-6">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["ISO 27001", "SOC 2", "GDPR", "HIPAA", "PCI DSS"].map((cert) => (
              <div key={cert} className="px-4 py-2 bg-glass-white backdrop-blur-sm border border-gray-700 rounded-lg">
                <span className="text-gray-400 font-mono text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}