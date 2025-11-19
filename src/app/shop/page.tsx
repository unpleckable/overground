'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import Link from 'next/link';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categories = ['ALL', 'TOPS', 'BOTTOMS', 'OUTERWEAR', 'ACCESSORIES'];
  
  const products = [
    { id: 1, name: 'Oversized Tech Jacket', price: 189, category: 'OUTERWEAR', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80' },
    { id: 2, name: 'Cargo Pants - Black', price: 129, category: 'BOTTOMS', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80' },
    { id: 3, name: 'Graphic Tee Pack', price: 79, category: 'TOPS', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80' },
    { id: 4, name: 'Platform Sneakers', price: 159, category: 'ACCESSORIES', image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80' },
    { id: 5, name: 'Utility Vest', price: 149, category: 'OUTERWEAR', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=600&q=80' },
    { id: 6, name: 'Wide Leg Jeans', price: 139, category: 'BOTTOMS', image: 'https://images.unsplash.com/photo-1542272454315-7f6d6064f522?w=600&q=80' },
    { id: 7, name: 'Crop Hoodie', price: 89, category: 'TOPS', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80' },
    { id: 8, name: 'Chain Necklace', price: 49, category: 'ACCESSORIES', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80' },
    { id: 9, name: 'Bomber Jacket', price: 199, category: 'OUTERWEAR', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80' },
    { id: 10, name: 'Track Pants', price: 99, category: 'BOTTOMS', image: 'https://images.unsplash.com/photo-1623120389902-6c846c80f4c8?w=600&q=80' },
    { id: 11, name: 'Oversized Tee', price: 59, category: 'TOPS', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80' },
    { id: 12, name: 'Crossbody Bag', price: 79, category: 'ACCESSORIES', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80' },
  ];

  const filteredProducts = selectedCategory === 'ALL' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-black text-white min-h-screen cursor-none">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-2xl font-black tracking-tighter hover:text-gray-300 transition">
            OVERGROUND
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl sm:text-7xl font-black mb-4 tracking-tighter">SHOP ALL</h1>
          <p className="text-xl text-gray-400">Curated pieces for the streets</p>
        </motion.div>

        {/* Filter Bar */}
        <div className="mb-8 flex items-center justify-between">
          {/* Desktop Categories */}
          <div className="hidden md:flex gap-4">
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                whileHover={{ y: -2 }}
                className={`px-6 py-2 font-bold transition ${
                  selectedCategory === cat 
                    ? 'bg-white text-black' 
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Mobile Filter Button */}
          <button 
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 transition"
          >
            <Filter className="w-4 h-4" />
            FILTER
          </button>

          <p className="text-gray-400">{filteredProducts.length} items</p>
        </div>

        {/* Mobile Filter Menu */}
        {mobileFilterOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="md:hidden mb-8 bg-white/5 p-4 rounded"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">CATEGORIES</h3>
              <button onClick={() => setMobileFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setMobileFilterOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 transition ${
                    selectedCategory === cat 
                      ? 'bg-white text-black font-bold' 
                      : 'hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-20"
        >
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              whileHover={{ y: -8 }}
            >
              <Link href={`/product/${product.id}`} className="group block">
                <div className="relative overflow-hidden aspect-[3/4] mb-3 bg-gray-900">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <h3 className="font-bold mb-1">{product.name}</h3>
                <p className="text-gray-400">${product.price}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}