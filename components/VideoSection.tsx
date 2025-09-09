import React from 'react';

export function VideoSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Video container */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-yellow-400/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
          
          <div className="relative bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg overflow-hidden">
            <div className="aspect-video relative">
              {/* YouTube video embed */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/aoQ8fGFeh9A"
                title="Phantom Bullet Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              
              {/* Overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none" />
              
              {/* Corner markers */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-green-400 pointer-events-none" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-green-400 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-green-400 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-green-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
