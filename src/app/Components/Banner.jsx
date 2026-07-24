'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ThunderboltFill, CircleCheckFill } from '@gravity-ui/icons';
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1570042707229-4d6935274533?q=80&w=2000&auto=format&fit=crop',
    title: 'Green Organic Pastures',
    location: 'Sirajganj & Bogura Farms',
    tag: 'Verified Farm View #01'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1546445317-29f4545f9d52?q=80&w=2000&auto=format&fit=crop',
    title: 'Shahiwal & Mirkadim Cattle',
    location: 'Munshiganj Premium Reserve',
    tag: 'Verified Farm View #02'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=2000&auto=format&fit=crop',
    title: 'Healthy Goats & Khashi',
    location: 'Kushtia & Rajshahi Farms',
    tag: 'Verified Farm View #03'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2000&auto=format&fit=crop',
    title: 'Nationwide Direct Farm Delivery',
    location: '100% Shariah Compliant',
    tag: 'Verified Logistics'
  }
];

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <section 
      className="relative w-full min-h-screen flex items-center text-white py-24 px-6 md:px-12 overflow-hidden bg-zinc-950"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Image Slider with Smooth Fade and Zoom */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1.0 }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slides[currentSlide].url}')` }}
          />
        </AnimatePresence>

        {/* Optimized Multi-layered Gradient Overlays for High Contrast & Clear Background Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/75 to-zinc-950/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-emerald-950/70" />

        {/* Background Animated Dots grid */}
        <motion.div 
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"
        />
      </div>

      {/* Vertical Middle Left Floating Nav Arrow */}
      <button 
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-zinc-900/80 hover:bg-amber-500 text-zinc-300 hover:text-zinc-950 border border-zinc-700/60 hover:border-amber-400 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer hidden sm:flex items-center justify-center group"
      >
        <FiChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>

      {/* Vertical Middle Right Floating Nav Arrow */}
      <button 
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-zinc-900/80 hover:bg-amber-500 text-zinc-300 hover:text-zinc-950 border border-zinc-700/60 hover:border-amber-400 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer hidden sm:flex items-center justify-center group"
      >
        <FiChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Left Column: Text & CTAs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <motion.div 
              variants={badgeVariants} 
              className="inline-flex items-center gap-2 bg-emerald-900/70 border border-emerald-700/80 text-emerald-300 px-5 py-2 rounded-full text-sm font-medium shadow-lg shadow-emerald-950/40 backdrop-blur-md"
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Official Online Haat 2026
            </motion.div>

            {/* Current Active Farm Tag */}
            <AnimatePresence mode="wait">
              <motion.span
                key={slides[currentSlide].id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="hidden sm:inline-flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-700/50 text-amber-300 text-xs px-3.5 py-1.5 rounded-full font-medium backdrop-blur-md"
              >
                📍 {slides[currentSlide].location}
              </motion.span>
            </AnimatePresence>
          </div>

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

        {/* Right Column: Featured Interactive Image Slider Card (Visible right in the middle of screen) */}
        <motion.div 
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.35 }}
          className="flex flex-col justify-center relative w-full"
        >
          {/* Soft backdrop glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.06, 1],
              opacity: [0.6, 0.85, 0.6],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-6 bg-gradient-to-tr from-amber-500/20 via-emerald-500/20 to-transparent rounded-[3rem] blur-2xl pointer-events-none"
          />

          {/* Glassmorphic Slide Card */}
          <div className="relative w-full max-w-lg mx-auto bg-zinc-900/80 border border-zinc-700/70 backdrop-blur-2xl rounded-3xl p-5 md:p-6 shadow-2xl overflow-hidden group">
            
            {/* Featured Image Canvas with AnimatePresence */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-inner bg-zinc-950">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slides[currentSlide].id}
                  src={slides[currentSlide].url}
                  alt={slides[currentSlide].title}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/25 to-transparent" />

              {/* Badges on Top of Image */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="bg-emerald-600/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-emerald-400/30 shadow-md">
                  {slides[currentSlide].tag}
                </span>
              </div>

              <div className="absolute top-3 right-3">
                <span className="bg-zinc-900/80 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full border border-zinc-700/60 shadow-md">
                  0{currentSlide + 1} / 0{slides.length}
                </span>
              </div>

              {/* Image Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slides[currentSlide].id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                  >
                    <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-md">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-xs text-amber-300 font-medium flex items-center gap-1.5 mt-1">
                      <span>📍</span> {slides[currentSlide].location}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Card Footer: Live Market Quick Stats */}
            <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <span className="text-amber-400 text-base"><ThunderboltFill /></span>
                <span className="font-semibold text-white">Live Market:</span>
                <span className="text-emerald-400 font-medium">42 Shahiwal Left</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <CircleCheckFill className="text-emerald-400 text-sm" />
                Vet Certified
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Centered Slider Controls & Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-auto">
        <div className="flex items-center gap-3 bg-zinc-900/85 border border-zinc-700/70 px-5 py-2.5 rounded-full shadow-2xl backdrop-blur-xl">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
            className="p-1.5 rounded-full text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer"
          >
            {isPlaying ? <FiPause size={16} /> : <FiPlay size={16} />}
          </button>

          <span className="h-4 w-px bg-zinc-700/80" />

          {/* Dots */}
          <div className="flex items-center gap-2 mx-1">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide 
                    ? 'w-8 bg-amber-400 shadow-md shadow-amber-400/30' 
                    : 'w-2 bg-zinc-600 hover:bg-zinc-400'
                }`}
              />
            ))}
          </div>

          <span className="h-4 w-px bg-zinc-700/80" />

          <div className="text-xs text-zinc-300 font-medium px-1">
            <span className="text-amber-400 font-bold">0{currentSlide + 1}</span>
            <span className="text-zinc-500">/</span>
            <span className="text-zinc-400">0{slides.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;