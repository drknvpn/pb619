import React, { useState, useEffect } from 'react';
import { ModDescription } from './ModDescription';
import { VideoSection } from './VideoSection';
import { FeaturesSection } from './FeaturesSection';
import { ScreenshotsSection } from './ScreenshotsSection';
import { DeveloperTeam } from './DeveloperTeam';
import { Footer } from './Footer';

export function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Noise overlay */}
      <div className="fixed inset-0 z-10 opacity-20 pointer-events-none noise-bg" />
      
      {/* Radiation particles */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-particle opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse radiation glow */}
      <div
        className="fixed w-32 h-32 bg-green-400 rounded-full opacity-10 blur-3xl pointer-events-none z-30 transition-all duration-100"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
        }}
      />

      {/* Content */}
      <div className="relative z-40">
        <ModDescription />
        <VideoSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <DeveloperTeam />
        <Footer />
      </div>
    </div>
  );
}
