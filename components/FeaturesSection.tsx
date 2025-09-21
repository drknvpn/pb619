import React from 'react';

export function FeaturesSection() {
  const featuresLeft = [
    "Большой арсенал нового оружия",
    "Новые режимы игры: фриплей, захват контрольных точек, хард-матч, гонки и прочие",
    "Новые команды в стандартных режимах игры: \"Долг\" и \"Монолит\"",
    "Новые броня и экипировка соответствующие командам",
    "Переработана погода, звуки и графическая часть в пользу атмосферы",
    "Новые разнообразные локации"
  ];

  const featuresRight = [
    "Новые предметы: медикаменты, артефакты, мины, музыкальные инструменты, еда и прочее",
    "Работает симуляция жизни: нпс и мутанты с которыми можно взаимодействовать",
    "Голосовой чат работающий на близкой дистанции",
    "Работают механники одиночной игры: ремонт, торговля, обыск, тайники и прочее",
    "х64 бит версии сервера и клиента",
    "Новый интерфейс: меню закупки, выбор скина, инвентарь, худ и прочее"
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 font-mono mb-4 tracking-wider">
            ОСОБЕННОСТИ
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-yellow-400 mx-auto mb-6" />
        </div>

        {/* First features section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Features list */}
          <div className="space-y-6">
            {featuresLeft.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0 group-hover:shadow-lg group-hover:shadow-green-400/50 transition-all duration-300" />
                  <p className="text-gray-300 font-mono text-lg leading-relaxed">{feature}</p>
                </div>
                
                {/* Corner effects */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-green-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-green-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-green-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-green-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Weapons image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-yellow-400/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg overflow-hidden">
              <img
                src="https://pb619.ru/static/media/weapons.png"
                alt="Weapons Arsenal"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              
              {/* Fallback content */}
              <div className="hidden absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900/20 to-black flex items-center justify-center min-h-[400px]">
                <div className="text-center text-green-400 font-mono">
                  <div className="text-6xl mb-4">🔫</div>
                  <div className="text-xl">АРСЕНАЛ ОРУЖИЯ</div>
                  <div className="text-sm mt-2 opacity-60">weapons.png</div>
                </div>
              </div>
              
              {/* Corner markers */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-green-400" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-green-400" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-green-400" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-green-400" />
            </div>
          </div>
        </div>

        {/* Second features section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Items image */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-yellow-400/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg overflow-hidden">
              <img
                src="https://pb619.ru/static/media/items.png"
                alt="Items Collection"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              
              {/* Fallback content */}
              <div className="hidden absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900/20 to-black flex items-center justify-center min-h-[400px]">
                <div className="text-center text-green-400 font-mono">
                  <div className="text-6xl mb-4">🎒</div>
                  <div className="text-xl">ПРЕДМЕТЫ И АРТЕФАКТЫ</div>
                  <div className="text-sm mt-2 opacity-60">items.png</div>
                </div>
              </div>
              
              {/* Corner markers */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-green-400" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-green-400" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-green-400" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-green-400" />
            </div>
          </div>

          {/* Features list */}
          <div className="space-y-6 order-1 lg:order-2">
            {featuresRight.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0 group-hover:shadow-lg group-hover:shadow-green-400/50 transition-all duration-300" />
                  <p className="text-gray-300 font-mono text-lg leading-relaxed">{feature}</p>
                </div>
                
                {/* Corner effects */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-green-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-green-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-green-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-green-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
