import React from 'react';

export function Footer() {
  return (
    <footer className="py-16 px-4 relative border-t border-green-400/20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main footer content */}
        <div className="relative bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-12 mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-green-400 font-mono mb-4 tracking-wider">
            © 2025 PHANTOM BULLET PROJECT
          </h3>
          
          <p className="text-xl text-gray-300 font-mono mb-6">
            Создано сталкерами для сталкеров
          </p>
          
          <div className="text-lg text-gray-400 font-mono">
            Сайт проекта:{" "}
            <a 
              href="https://pb619.ru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors duration-300 underline"
            >
              pb619.ru
            </a>
          </div>
          
          {/* Corner effects */}
          <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-green-400" />
          <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-green-400" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-green-400" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-green-400" />
        </div>
      </div>
      
      {/* Background radiation effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-green-500 rounded-full opacity-5 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-yellow-500 rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </footer>
  );
}
