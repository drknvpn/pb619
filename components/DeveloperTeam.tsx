import React from 'react';
import { Users, Code, Palette, Settings } from 'lucide-react';

export function DeveloperTeam() {
  const developers = [
    {
      name: "Павел \"Radik619\" Родионов",
      role: "основатель, администратор, конфигер, маппер",
      icon: Users,
      color: "text-green-400",
      borderColor: "border-green-400",
      bgColor: "bg-green-400"
    },
    {
      name: "Максим \"Pes\" Макаров",
      role: "заместитель администратора, 3д-моделлер, 3д-аниматор",
      icon: Palette,
      color: "text-blue-400",
      borderColor: "border-blue-400",
      bgColor: "bg-blue-400"
    },
    {
      name: "Кирилл \"Age\" Косенко",
      role: "программист, lua-скриптер, конфигер",
      icon: Code,
      color: "text-yellow-400",
      borderColor: "border-yellow-400",
      bgColor: "bg-yellow-400"
    },
    {
      name: "Егор \"Chirdak\" Лосев",
      role: "ui-дизайнер, конфигер",
      icon: Settings,
      color: "text-purple-400",
      borderColor: "border-purple-400",
      bgColor: "bg-purple-400"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 font-mono mb-4 tracking-wider">
            КОМАНДА РАЗРАБОТЧИКОВ МОДИФИКАЦИИ
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-yellow-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 font-mono">
            Создатели мира Phantom Bullet
          </p>
        </div>

        {/* Developers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {developers.map((dev, index) => {
            const Icon = dev.icon;
            return (
              <div
                key={index}
                className={`group relative bg-black/70 backdrop-blur-sm border-2 ${dev.borderColor}/30 rounded-lg p-8 hover:${dev.borderColor}/60 transition-all duration-500 hover:scale-105`}
              >
                {/* Background radiation effect */}
                <div className={`absolute inset-0 ${dev.bgColor}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`} />
                
                {/* Icon */}
                <div className={`flex justify-center mb-6`}>
                  <div className={`relative p-4 border-2 ${dev.borderColor} rounded-full ${dev.color} group-hover:${dev.bgColor} group-hover:text-black transition-all duration-300`}>
                    <Icon size={48} />
                    
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 ${dev.bgColor} rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
                  </div>
                </div>

                {/* Developer info */}
                <div className="text-center relative z-10">
                  <h3 className={`text-xl md:text-2xl font-bold ${dev.color} font-mono mb-4 tracking-wider`}>
                    {dev.name}
                  </h3>
                  <p className="text-gray-300 font-mono text-lg leading-relaxed">
                    {dev.role}
                  </p>
                </div>

                {/* Corner effects */}
                <div className={`absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 ${dev.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 ${dev.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 ${dev.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 ${dev.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Scanning line effect */}
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-${dev.color}/10 to-transparent animate-scan opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-lg`} />
                
                {/* Particle effects */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 ${dev.bgColor} rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-particle transition-opacity duration-300`}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 20}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '3s',
                      }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
