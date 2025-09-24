"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Custom404() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with inline styles */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, #BE7D72 0%, #553732 20%, #7A2011 40%, #FFFFFF 50%, #553732 60%, #7A2011 70%, #FFFFFF 80%, #CB2D2D 90%, #890B0B 100%)'
        }}
      />

      {/* Animated background effects */}
      <div className="absolute inset-0">
        {/* Subtle red glow effects */}
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-60 h-60 bg-red-500/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header with logo */}
        <header className="p-8 md:p-12">
          <div className="flex items-start">
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold tracking-wider font-mono">
                ZER<span className="relative inline-block">
                  <span className="relative">O</span>
                  <span className="absolute inset-0 flex items-center justify-center text-red-500 font-bold text-3xl md:text-4xl">/</span>
                </span> DAY
              </div>
              <div className="text-xs md:text-sm text-gray-400 tracking-[0.3em] mt-1 ml-1">
                alliance
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <div className="flex-1 flex items-center justify-between px-8 md:px-12 lg:px-20">
          {/* Left side content */}
          <div className="flex-1 max-w-3xl">
            {/* Main heading */}
            <div className="mb-10">
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight">
                <span className="text-white block font-mono">Hide &</span>
                <span className="text-red-500 block font-mono">Seek Time!</span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-gray-300 text-xl md:text-2xl lg:text-3xl mb-16 max-w-2xl leading-relaxed font-light">
              Even we can't find this page. Come back later while we<br />
              keep searching for it.
            </p>

            {/* CTA Button */}
            <Link href="/">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-gray-700 to-gray-800
                               border border-gray-600 rounded-lg text-white font-semibold text-xl
                               hover:from-gray-600 hover:to-gray-700 hover:border-gray-500
                               transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25
                               transform hover:scale-105 tracking-wide">
                <span className="relative z-10">GO BACK TO HOME</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0
                              rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>

          {/* Right side - Warped text */}
          <div className="hidden lg:flex flex-1 justify-end items-center pr-8">
            <div className="text-5xl font-bold text-gray-600 leading-tight font-mono transform rotate-12">
              <div>PAGE</div>
              <div className="text-white">NOT</div>
              <div>FOUND</div>
              <div className="text-white">PAGE</div>
              <div>NOT</div>
              <div className="text-white">FOUND</div>
            </div>
          </div>

          {/* Mobile warped text */}
          <div className="lg:hidden absolute top-1/2 right-4 transform -translate-y-1/2 rotate-12 opacity-15">
            <div className="text-5xl font-bold text-gray-600 leading-tight font-mono">
              <div>PAGE</div>
              <div className="text-white">NOT</div>
              <div>FOUND</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
