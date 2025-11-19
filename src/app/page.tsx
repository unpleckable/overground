'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function OvergroundHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef(null);
  const currentYear = new Date().getFullYear();

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll setup
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Parallax effect for hero
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const collections = [
    { title: "URBAN ESSENTIALS", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80", description: "Core pieces for the streets" },
    { title: "AVANT GARDE", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80", description: "Push boundaries, break rules" },
    { title: "UTILITY WEAR", image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80", description: "Function meets form" },
  ];

  const featured = [
    { name: "Oversized Tech Jacket", price: "$189", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80" },
    { name: "Cargo Pants - Black", price: "$129", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80" },
    { name: "Graphic Tee Pack", price: "$79", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80" },
    { name: "Platform Sneakers", price: "$159", image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80" },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-[100] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-6xl sm:text-8xl font-black tracking-tighter"
                initial={{ letterSpacing: "0.5em" }}
                animate={{ letterSpacing: "-0.05em" }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                OVERGROUND
              </motion.h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Single Custom Cursor */}
      <motion.div
        className="hidden lg:block fixed w-4 h-4 bg-white mix-blend-difference rounded-full pointer-events-none z-50"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

     {/* Navigation */}
<motion.nav 
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-white/10"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="text-2xl font-black tracking-tighter">
        OVERGROUND
      </div>

      {/* Desktop Menu */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="hidden md:flex space-x-8"
      >
        {[
          { label: 'NEW IN', href: '/shop' },
          { label: 'COLLECTIONS', href: '/shop' },
          { label: 'SHOP', href: '/shop' },
          { label: 'ABOUT', href: '/about' },
        ].map((item, idx) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
            whileHover={{ y: -2 }}
            className="hover:text-gray-300 transition"
          >
            {item.label}
          </motion.a>
        ))}
      </motion.div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5 cursor-pointer hover:text-gray-300 transition hidden sm:block" />
        <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu with Animation */}
  <AnimatePresence>
    {mobileMenuOpen && (
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden border-t border-white/10 overflow-hidden"
      >
        <div className="px-4 py-4 space-y-3">
          {[
            { label: 'NEW IN', href: '/shop' },
            { label: 'COLLECTIONS', href: '/shop' },
            { label: 'SHOP', href: '/shop' },
            { label: 'ABOUT', href: '/about' },
          ].map((item, idx) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="block py-2 hover:text-gray-300 transition"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</motion.nav>


      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen mt-16 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <video
            autoPlay loop muted playsInline
            className="w-full h-full object-cover scale-110"
          >
            <source src="https://cdn.coverr.co/videos/coverr-stylish-woman-standing-in-front-of-graffiti-7916/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <motion.div style={{ opacity }} className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 tracking-tighter">RISE ABOVE</motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">Streetwear for the ones who refuse to blend in</motion.p>
            <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-black px-8 py-4 font-bold hover:bg-gray-200 transition inline-flex items-center gap-2 group">
              EXPLORE COLLECTION
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl sm:text-5xl font-black mb-12 tracking-tighter">COLLECTIONS</motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((collection, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="group relative overflow-hidden aspect-[3/4] cursor-pointer">
              <img src={collection.image} alt={collection.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 + 0.3 }} className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                <p className="text-gray-300">{collection.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl sm:text-5xl font-black tracking-tighter">NEW DROPS</motion.h2>
          <motion.a href="#" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} whileHover={{ x: 5 }} className="hidden sm:flex items-center gap-2 transition-all">VIEW ALL <ArrowRight className="w-5 h-5"/></motion.a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((product, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} whileHover={{ y: -8 }} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-3 bg-gray-900">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"/>
              </div>
              <h3 className="font-bold mb-1">{product.name}</h3>
              <p className="text-gray-400">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl sm:text-6xl font-black mb-6 tracking-tighter leading-tight">
            BUILT FOR THE UNDERGROUND.<br/>MADE FOR THOSE WHO RISE.
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl text-gray-600 mb-8">
            We don't follow trends. We create them from the streets up.
          </motion.p>
          <motion.button initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition">
            OUR STORY
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="font-bold text-xl mb-4 tracking-tighter">OVERGROUND</h3>
              <p className="text-gray-400 text-sm">Redefining streetwear culture, one piece at a time.</p>
            </motion.div>
            {[
              { title: 'SHOP', links: ['New Arrivals', 'Collections', 'Sale'] },
              { title: 'ABOUT', links: ['Our Story', 'Sustainability', 'Contact'] },
              { title: 'FOLLOW', links: ['Instagram', 'TikTok', 'Twitter'] }
            ].map((section, idx) => (
              <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <h4 className="font-bold mb-4">{section.title}</h4>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map(link => (
                    <li key={link}><a href="#" className="hover:text-white transition">{link}</a></li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">© {currentYear} OVERGROUND. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
