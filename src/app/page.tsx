import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, ArrowRight } from 'lucide-react';

export default function OvergroundHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const collections = [
    {
      title: "URBAN ESSENTIALS",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      description: "Core pieces for the streets"
    },
    {
      title: "AVANT GARDE",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      description: "Push boundaries, break rules"
    },
    {
      title: "UTILITY WEAR",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80",
      description: "Function meets form"
    }
  ];

  const featured = [
    {
      name: "Oversized Tech Jacket",
      price: "$189",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80"
    },
    {
      name: "Cargo Pants - Black",
      price: "$129",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80"
    },
    {
      name: "Graphic Tee Pack",
      price: "$79",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80"
    },
    {
      name: "Platform Sneakers",
      price: "$159",
      image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-black tracking-tighter">
              OVERGROUND
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-gray-300 transition">NEW IN</a>
              <a href="#" className="hover:text-gray-300 transition">COLLECTIONS</a>
              <a href="#" className="hover:text-gray-300 transition">SHOP</a>
              <a href="#" className="hover:text-gray-300 transition">ABOUT</a>
            </div>

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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block py-2 hover:text-gray-300 transition">NEW IN</a>
              <a href="#" className="block py-2 hover:text-gray-300 transition">COLLECTIONS</a>
              <a href="#" className="block py-2 hover:text-gray-300 transition">SHOP</a>
              <a href="#" className="block py-2 hover:text-gray-300 transition">ABOUT</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen mt-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558769132-cb1aea8f4bf5?w=1600&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 tracking-tighter">
              RISE ABOVE
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Streetwear for the ones who refuse to blend in
            </p>
            <button className="bg-white text-black px-8 py-4 font-bold hover:bg-gray-200 transition inline-flex items-center gap-2 group">
              EXPLORE COLLECTION
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-12 tracking-tighter">
          COLLECTIONS
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((collection, idx) => (
            <div 
              key={idx}
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img 
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                <p className="text-gray-300">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
            NEW DROPS
          </h2>
          <a href="#" className="hidden sm:flex items-center gap-2 hover:gap-3 transition-all">
            VIEW ALL <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((product, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-3 bg-gray-900">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <h3 className="font-bold mb-1">{product.name}</h3>
              <p className="text-gray-400">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tighter leading-tight">
            BUILT FOR THE UNDERGROUND.<br/>MADE FOR THOSE WHO RISE.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We don't follow trends. We create them from the streets up.
          </p>
          <button className="bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition">
            OUR STORY
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-xl mb-4 tracking-tighter">OVERGROUND</h3>
              <p className="text-gray-400 text-sm">
                Redefining streetwear culture, one piece at a time.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">SHOP</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition">Collections</a></li>
                <li><a href="#" className="hover:text-white transition">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">ABOUT</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">FOLLOW</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">TikTok</a></li>
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            © 2024 OVERGROUND. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}