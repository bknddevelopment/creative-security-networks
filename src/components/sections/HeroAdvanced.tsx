"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, AlertTriangle, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HeroAdvanced() {
  const [threatsBlocked, setThreatsBlocked] = useState(127489);
  const [systemsProtected, setSystemsProtected] = useState(523);
  const [uptime, setUptime] = useState(99.97);

  useEffect(() => {
    const interval = setInterval(() => {
      setThreatsBlocked(prev => prev + Math.floor(Math.random() * 5));
      setSystemsProtected(prev => prev + (Math.random() > 0.95 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-midnight-950">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-20" />
      
      {/* Scanning Line Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyber to-transparent animate-scan" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyber rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              boxShadow: "0 0 10px #00ffff"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Security Status Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass-white backdrop-blur-md border border-cyber/30 mb-8"
          >
            <div className="w-2 h-2 bg-security-safe rounded-full animate-pulse" />
            <span className="text-cyber text-sm font-mono">SYSTEMS OPERATIONAL</span>
          </motion.div>

          {/* Main Heading with Glitch Effect */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber via-neon-blue to-neon-purple">
              NEXT-GEN
            </span>
            <br />
            <span className="text-white">SECURITY</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-cyber to-neon-blue animate-pulse">
              MATRIX
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light">
            Military-grade encryption meets AI-powered threat detection. 
            Your digital fortress in the cyber battlefield.
          </p>

          {/* Live Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-glass-white backdrop-blur-md border border-cyber/30 rounded-xl p-6"
            >
              <AlertTriangle className="w-8 h-8 text-security-alert mx-auto mb-2" />
              <div className="text-3xl font-bold text-white font-mono">
                {threatsBlocked.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Threats Blocked Today</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-glass-white backdrop-blur-md border border-cyber/30 rounded-xl p-6"
            >
              <Shield className="w-8 h-8 text-cyber mx-auto mb-2" />
              <div className="text-3xl font-bold text-white font-mono">
                {systemsProtected}
              </div>
              <div className="text-sm text-gray-400">Systems Protected</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-glass-white backdrop-blur-md border border-cyber/30 rounded-xl p-6"
            >
              <Eye className="w-8 h-8 text-security-safe mx-auto mb-2" />
              <div className="text-3xl font-bold text-white font-mono">
                {uptime}%
              </div>
              <div className="text-sm text-gray-400">Uptime Guarantee</div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyber to-neon-blue text-midnight-950 font-bold rounded-lg shadow-neon hover:shadow-glow-lg transition-all duration-300"
              >
                START SECURITY ASSESSMENT
              </motion.button>
            </Link>
            
            <Link href="/demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-glass-white backdrop-blur-md border-2 border-cyber text-cyber font-bold rounded-lg hover:bg-cyber/10 transition-all duration-300"
              >
                WATCH LIVE DEMO
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-cyber/50" />
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyber/30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-cyber/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-cyber/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-cyber/30" />
    </section>
  );
}