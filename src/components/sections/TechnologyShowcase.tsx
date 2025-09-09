"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Wifi, 
  Shield, 
  Brain, 
  Lock, 
  Zap,
  ChevronRight,
  Activity
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const technologies = [
  {
    id: "ai",
    icon: Brain,
    title: "AI Threat Detection",
    description: "Machine learning algorithms analyze patterns 24/7",
    features: [
      "Behavioral analysis",
      "Anomaly detection",
      "Predictive threats",
      "Zero-day protection"
    ],
    stats: { accuracy: "99.9%", speed: "< 0.01ms", threats: "1M+" },
    color: "from-neon-purple to-neon-pink"
  },
  {
    id: "quantum",
    icon: Cpu,
    title: "Quantum Encryption",
    description: "Unbreakable encryption using quantum mechanics",
    features: [
      "256-bit AES encryption",
      "Quantum key distribution",
      "End-to-end protection",
      "Future-proof security"
    ],
    stats: { strength: "Military", keys: "∞", crack: "Never" },
    color: "from-cyber to-neon-blue"
  },
  {
    id: "mesh",
    icon: Wifi,
    title: "Neural Mesh Network",
    description: "Self-healing network with redundant pathways",
    features: [
      "Auto-routing",
      "Zero downtime",
      "Distributed intelligence",
      "Edge computing"
    ],
    stats: { nodes: "10K+", latency: "1ms", uptime: "100%" },
    color: "from-neon-blue to-security-info"
  },
  {
    id: "shield",
    icon: Shield,
    title: "Active Defense Matrix",
    description: "Proactive threat neutralization system",
    features: [
      "Real-time response",
      "Automated countermeasures",
      "Threat isolation",
      "System hardening"
    ],
    stats: { response: "Instant", blocked: "500K/day", false: "0%" },
    color: "from-security-safe to-cyber"
  }
];

export default function TechnologyShowcase() {
  const [selectedTech, setSelectedTech] = useState(technologies[0]);
  const [isHovering, setIsHovering] = useState<string | null>(null);

  return (
    <section className="py-24 bg-midnight-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass-white backdrop-blur-md border border-cyber/30 mb-6">
            <Zap className="w-4 h-4 text-cyber" />
            <span className="text-cyber text-sm font-mono">POWERED BY ADVANCED AI</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Technology </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber to-neon-purple">
              Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Military-grade security infrastructure that evolves faster than threats
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <div className="space-y-4">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setIsHovering(tech.id)}
                  onMouseLeave={() => setIsHovering(null)}
                  onClick={() => setSelectedTech(tech)}
                  className="cursor-pointer"
                >
                  <GlassCard 
                    hover 
                    neon={selectedTech.id === tech.id}
                    className={`p-6 transition-all duration-300 ${
                      selectedTech.id === tech.id ? 'border-cyber' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${tech.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                          <p className="text-gray-400 text-sm">{tech.description}</p>
                        </div>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform ${
                        selectedTech.id === tech.id ? 'rotate-90 text-cyber' : 'text-gray-600'
                      }`} />
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          {/* Technology Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTech.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="p-8 h-full" neon>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${selectedTech.color}`}>
                    <selectedTech.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedTech.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Activity className="w-4 h-4 text-security-safe" />
                      <span className="text-security-safe text-sm">Active</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {selectedTech.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-cyber rounded-full" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(selectedTech.stats).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-3 rounded-lg bg-midnight-950/50"
                    >
                      <div className="text-2xl font-bold text-cyber font-mono">{value}</div>
                      <div className="text-xs text-gray-500 uppercase">{key}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-cyber to-neon-blue text-midnight-950 font-bold rounded-lg shadow-neon hover:shadow-glow-lg transition-all duration-300"
                >
                  LEARN MORE
                </motion.button>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}