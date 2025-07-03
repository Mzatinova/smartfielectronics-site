import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Next-Gen Electronics
            <span className="block text-yellow-300">That Define Tomorrow</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Discover cutting-edge technology with unbeatable prices and lightning-fast delivery
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 rounded-full transition-all duration-300">
              Explore Categories
            </Button>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
                <Zap className="h-8 w-8 text-yellow-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-blue-100">Same-day delivery available</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
                <Shield className="h-8 w-8 text-green-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Shopping</h3>
              <p className="text-blue-100">100% secure transactions</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
                <Truck className="h-8 w-8 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-blue-100">On orders over $99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;