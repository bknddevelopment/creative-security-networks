"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Globe, AlertTriangle, Shield } from "lucide-react";

export default function LiveThreatMap() {
  const [threats, setThreats] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [blockedCount, setBlockedCount] = useState(4827);

  useEffect(() => {
    const interval = setInterval(() => {
      // Add random threat
      setThreats(prev => {
        const newThreat = {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100
        };
        return [...prev.slice(-10), newThreat];
      });
      setBlockedCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-midnight-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass-white backdrop-blur-md border border-security-alert/30 mb-6">
            <Activity className="w-4 h-4 text-security-alert animate-pulse" />
            <span className="text-security-alert text-sm font-mono">LIVE MONITORING</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Global </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-security-alert to-security-warning">
              Threat Intelligence
            </span>
          </h2>
        </motion.div>

        {/* Map Container */}
        <div className="relative h-[500px] bg-glass-white backdrop-blur-md rounded-2xl border border-glass-border overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-10" />
          
          {/* World Map Outline */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe className="w-96 h-96 text-midnight-700/20" />
          </div>

          {/* Threat Points */}
          {threats.map((threat) => (
            <motion.div
              key={threat.id}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: [1, 2, 3], opacity: [1, 0.5, 0] }}
              transition={{ duration: 2 }}
              className="absolute w-2 h-2"
              style={{
                left: `${threat.x}%`,
                top: `${threat.y}%`,
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-security-alert rounded-full animate-ping" />
                <div className="relative w-2 h-2 bg-security-alert rounded-full" />
              </div>
            </motion.div>
          ))}

          {/* Stats Overlay */}
          <div className="absolute top-6 left-6 space-y-4">
            <div className="bg-midnight-950/80 backdrop-blur-sm rounded-lg p-4 border border-cyber/30">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-security-alert" />
                <div>
                  <div className="text-2xl font-bold text-white font-mono">
                    {blockedCount.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-400">Threats Blocked</div>
                </div>
              </div>
            </div>
            
            <div className="bg-midnight-950/80 backdrop-blur-sm rounded-lg p-4 border border-cyber/30">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-security-safe" />
                <div>
                  <div className="text-2xl font-bold text-white font-mono">
                    523
                  </div>
                  <div className="text-xs text-gray-400">Protected Sites</div>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="absolute bottom-6 right-6 bg-midnight-950/80 backdrop-blur-sm rounded-lg p-4 border border-cyber/30">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-security-alert rounded-full" />
                <span className="text-xs text-gray-400">Active Threat</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-security-safe rounded-full" />
                <span className="text-xs text-gray-400">Protected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Join our global security network and protect your assets
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-security-alert to-security-warning text-white font-bold rounded-lg shadow-neon hover:shadow-glow-lg transition-all duration-300"
          >
            ACTIVATE PROTECTION NOW
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}