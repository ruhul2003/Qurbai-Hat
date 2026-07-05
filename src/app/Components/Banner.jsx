'use client';
import React from 'react';
import Link from 'next/link';
import { ThunderboltFill , CircleCheckFill} from '@gravity-ui/icons';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 14,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const Banner = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-zinc-950 text-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Background Animated Dots grid */}
      <motion.div 
        animate={{ opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Left Column: Text & CTAs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div 
            variants={badgeVariants} 
            className="inline-flex items-center gap-2 bg-emerald-900/60 border border-emerald-700/80 text-emerald-300 px-5 py-2 rounded-full text-sm font-medium shadow-lg shadow-emerald-950/40"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            Official Online Haat 2026
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05]"
          >
            Qurbani Animals,<br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
              Delivered with Trust
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-xl text-zinc-300 max-w-lg leading-relaxed"
          >
            Connect directly with verified farms. Choose healthy, Shariah-compliant, 
            and vet-certified animals with transparent pricing and nationwide delivery.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link 
                href="/animals" 
                className="group bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold px-8 py-4 rounded-2xl transition-all duration-305 flex items-center gap-3 text-lg shadow-xl shadow-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/35 active:scale-[0.985]"
              >
                Browse Livestock
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link 
                href="#how-it-works" 
                className="border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 font-medium px-8 py-4 rounded-2xl transition-all duration-300 text-lg block"
              >
                How It Works
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-zinc-400 pt-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05, color: '#34d399' }}
              className="flex items-center gap-2 cursor-default transition-colors select-none"
            >
              <span className="text-emerald-400 font-bold">✓</span>
              Vet Certified
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, color: '#34d399' }}
              className="flex items-center gap-2 cursor-default transition-colors select-none"
            >
              <span className="text-emerald-400 font-bold">✓</span>
              Nationwide Delivery
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, color: '#34d399' }}
              className="flex items-center gap-2 cursor-default transition-colors select-none"
            >
              <span className="text-emerald-400 font-bold">✓</span>
              100% Transparent
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column: Live Update Card */}
        <motion.div 
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.35 }}
          className="hidden lg:flex justify-center relative w-full"
        >
          {/* Breathing soft backdrop glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.06, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -inset-10 bg-gradient-to-tr from-amber-400/10 via-emerald-400/10 to-transparent rounded-[4rem] blur-3xl pointer-events-none"
          />
          
          <div className="relative w-full max-w-md bg-zinc-900/70 border border-zinc-700/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-amber-400 font-semibold flex items-center gap-2 text-lg">
                <span className="text-xl"><ThunderboltFill /></span>
                Live Market Update
              </h3>
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-semibold tracking-wider">
                UPDATED JUST NOW
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-zinc-400 text-sm mb-3">
                  High demand today:
                </p>
                <motion.div 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(63, 63, 70, 0.85)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="flex justify-between items-center bg-zinc-800/80 border border-zinc-700/30 rounded-2xl p-4 cursor-pointer shadow-md"
                >
                  <div>
                    <p className="font-semibold text-white">Pure Shahiwal Bulls</p>
                    <p className="text-sm text-emerald-400 font-medium">42 animals left</p>
                  </div>
                  <div className="text-right">
                    <p className="text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-lg">Selling Fast</p>
                  </div>
                </motion.div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2.5">
                  <span className="text-zinc-400">Delivery Slots for Eid</span>
                  <span className="font-semibold text-emerald-400">81% Booked</span>
                </div>
                <div className="h-2.5 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700/20">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "81%" }}
                    transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1], delay: 0.7 }}
                    className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400 h-full rounded-full"
                  />
                </div>
                <p className="text-xs text-zinc-500 mt-2">
                  Limited slots remaining for June 30 - July 10
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800 text-xs text-zinc-400 flex items-center gap-2.5">
              <span><CircleCheckFill className="text-emerald-400 text-base" /></span>
              All animals are pre-screened by licensed veterinarians
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;