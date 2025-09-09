import React from 'react';
import { Download, Users, MessageCircle } from 'lucide-react';

export function ModDescription() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Mod title and description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-green-400 font-mono mb-6 tracking-wider">
            [619 MOD] "PHANTOM BULLET"
          </h2>
          
          <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-8 relative">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-mono">
              Phantom bullet - мультиплеерная модификация для игры S.T.A.L.K.E.R.: Тень Чернобыля, 
              основанная на движке TSMP, в которую входят такие нововведения как: большой арсенал 
              оружия и экипировки, новые режимы, локации, группировки, голосовой чат, механики из 
              одиночной игры, симуляция жизни и многое другое.
            </p>
            
            {/* Corner effects */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-green-400" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-green-400" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-green-400" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-green-400" />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="https://pb619.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 font-mono text-lg font-bold tracking-wider hover:bg-green-400 hover:text-black transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Download size={24} />
              СКАЧАТЬ ЛАУНЧЕР
            </span>
            <div className="absolute inset-0 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          
          <a 
            href="https://vk.com/pb619"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 font-mono text-lg font-bold tracking-wider hover:bg-blue-400 hover:text-black transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Users size={24} />
              НАША ГРУППА
            </span>
            <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          
          <a 
            href="https://discord.com/invite/AQYaXzrbYT"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-mono text-lg font-bold tracking-wider hover:bg-purple-400 hover:text-black transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle size={24} />
              НАШ ДИСКОРД
            </span>
            <div className="absolute inset-0 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </div>
      </div>
    </section>
  );
}
