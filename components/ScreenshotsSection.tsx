import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function ScreenshotsSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Three main screenshots
  const screenshots = [
    "https://pb619.ru/static/media/screenshot_1.jpg",
    "https://pb619.ru/static/media/screenshot_2.jpg",
    "https://pb619.ru/static/media/screenshot_3.jpg",
  ];

  const openScreenshot = (index: number) => {
    setSelectedIndex(index);
  };

  const closeScreenshot = () => {
    setSelectedIndex(null);
  };

  const nextScreenshot = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % screenshots.length);
    }
  };

  const prevScreenshot = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? screenshots.length - 1 : selectedIndex - 1);
    }
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 font-mono mb-4 tracking-wider">
            СКРИНШОТЫ ИГРЫ
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-yellow-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 font-mono">
            Визуальная документация из Зоны
          </p>
        </div>

        {/* Screenshots grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="group relative aspect-video bg-gray-900 border border-green-400/30 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openScreenshot(index)}
            >
              <img
                src={screenshot}
                alt={`Zone Screenshot ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              
              {/* Fallback content */}
              <div className="hidden absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900/20 to-black flex items-center justify-center">
                <div className="text-center text-green-400 font-mono">
                  <div className="text-4xl mb-2">🖼️</div>
                  <div className="text-lg">СКРИНШОТ {index + 1}</div>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Radiation effect overlay */}
              <div className="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Screenshot number */}
              <div className="absolute bottom-4 left-4 text-green-400 font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                СКРИНШОТ-{String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Expand indicator */}
              <div className="absolute top-4 right-4 w-6 h-6 border border-green-400 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-green-400" />
              </div>
              
              {/* Corner markers */}
              <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen gallery modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-6xl max-h-full flex items-center justify-center">
            {/* Main image */}
            <img
              src={screenshots[selectedIndex]}
              alt={`Zone Screenshot ${selectedIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Navigation buttons */}
            <button
              onClick={prevScreenshot}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextScreenshot}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Close button */}
            <button
              onClick={closeScreenshot}
              className="absolute top-4 right-4 p-2 bg-black/50 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300"
            >
              <X size={24} />
            </button>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-green-400 font-mono text-sm bg-black/50 px-3 py-1 border border-green-400/30">
              {selectedIndex + 1} / {screenshots.length}
            </div>
            
            {/* Frame corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-green-400" />
            <div className="absolute top-4 right-16 w-8 h-8 border-r-2 border-t-2 border-green-400" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-green-400" />
            <div className="absolute bottom-16 right-4 w-8 h-8 border-r-2 border-b-2 border-green-400" />
          </div>
        </div>
      )}
    </section>
  );
}
