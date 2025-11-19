'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      title: 'AUTHENTICITY',
      description: 'We stay true to street culture. No compromises, no following trends blindly.',
    },
    {
      title: 'QUALITY',
      description: 'Premium materials and construction. Built to last through whatever the streets throw at you.',
    },
    {
      title: 'COMMUNITY',
      description: 'Created by the underground, for the underground. This is about all of us.',
    },
    {
      title: 'SUSTAINABILITY',
      description: 'Conscious production, ethical sourcing. Fashion that respects the planet.',
    },
  ];

  const team = [
    {
      name: 'Alex Rivera',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
    {
      name: 'Sam Chen',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    },
    {
      name: 'Jordan Blake',
      role: 'Operations',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    },
  ];

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

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl font-black mb-6 tracking-tighter"
          >
            BORN FROM<br/>THE STREETS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            OVERGROUND started in 2023 as a passion project between three friends who were tired of 
            seeing street culture watered down by mainstream fashion. We believe style should be a 
            statement, not a compromise.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tighter">
              OUR STORY
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              What started as custom pieces for ourselves and close friends quickly grew into something 
              bigger. People started asking where we got our gear. The underground noticed.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're not trying to be the next big brand. We're building a movement for people who 
              refuse to blend in, who understand that fashion is more than clothes—it's identity, 
              it's culture, it's rebellion.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea8f4bf5?w=800&q=80"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black mb-12 tracking-tighter text-center"
          >
            WHAT WE STAND FOR
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/5 p-8 border border-white/10"
              >
                <h3 className="text-2xl font-black mb-4 tracking-tighter">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black mb-12 tracking-tighter text-center"
          >
            THE TEAM
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <div className="aspect-square mb-4 overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black mb-6 tracking-tighter"
          >
            JOIN THE MOVEMENT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Ready to rise above the ordinary?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/shop"
              className="inline-block bg-white text-black px-12 py-4 font-bold hover:bg-gray-200 transition"
            >
              SHOP NOW
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}