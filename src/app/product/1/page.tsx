'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  
  const product = {
    name: 'Oversized Tech Jacket',
    price: 189,
    description: 'Premium water-resistant nylon shell with utility pockets. Features adjustable drawstrings and reflective details. Perfect for urban exploration.',
    details: [
      'Water-resistant nylon fabric',
      'Multiple utility pockets',
      'Adjustable drawstrings',
      'Reflective logo details',
      'Relaxed oversized fit',
      'Unisex design'
    ],
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
      'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=800&q=80'
    ]
  };

  const [selectedImage, setSelectedImage] = useState(0);

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
      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/shop" className="inline-flex items-center gap-2 hover:text-gray-300 transition">
            <ArrowLeft className="w-5 h-5" />
            BACK TO SHOP
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="aspect-[3/4] mb-4 bg-gray-900 overflow-hidden">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  whileHover={{ scale: 1.05 }}
                  className={`aspect-square overflow-hidden ${
                    selectedImage === idx ? 'ring-2 ring-white' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl font-black mb-4 tracking-tighter">
              {product.name}
            </h1>
            <p className="text-3xl font-bold mb-6">${product.price}</p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="font-bold mb-4">SELECT SIZE</h3>
              <div className="grid grid-cols-6 gap-2">
                {sizes.map(size => (
                  <motion.button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`py-3 font-bold transition ${
                      selectedSize === size
                        ? 'bg-white text-black'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-bold mb-4">QUANTITY</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 transition font-bold"
                >
                  -
                </button>
                <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 transition font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-white text-black py-4 font-bold hover:bg-gray-200 transition flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                ADD TO CART
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
              >
                <Heart className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Product Details */}
            <div className="border-t border-white/10 pt-8">
              <h3 className="font-bold mb-4">PRODUCT DETAILS</h3>
              <ul className="space-y-2 text-gray-300">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}