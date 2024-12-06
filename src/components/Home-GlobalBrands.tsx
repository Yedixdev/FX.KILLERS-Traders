import React from 'react';
import Marquee from './ui/marquee';
import LogoDiscord from '../assets/img/logo-discord.png';
import LogoTradingView from '../assets/img/logo-TradingView.png';
import LogoBinance from '../assets/img/logo-binance.png';
import LogoCTrader from '../assets/img/logo-ctrader.webp';
import LogoFtmo from '../assets/img/logo-ftmo.png';
import LogoStripe from '../assets/img/logo-stripe.png';
import LogoTradezella from '../assets/img/logo-tradezella.png';
import LogoTrustpilot from '../assets/img/logo-trustpilot.png';

interface LogoItem {
  src: string;
  alt: string;
}

const GlobalBrands: React.FC = () => {
  const LogoItems: LogoItem[] = [
    { src: LogoDiscord, alt: 'Discord' },
    { src: LogoTradingView, alt: 'TradingView' },
    { src: LogoBinance, alt: 'Binance' },
    { src: LogoCTrader, alt: 'CTrader' },
    { src: LogoFtmo, alt: 'FTMO' },
    { src: LogoStripe, alt: 'Stripe' },
    { src: LogoTradezella, alt: 'Tradezella' },
    { src: LogoTrustpilot, alt: 'Trustpilot' },
  ];

  return (
    <div className="w-2xl bg-gradient-green h-auto m-4 rounded-xl flex justify-center items-center flex-col relative z-10 p-4 ">
      <div className="text-5xl font-bold font-display text-gray-200 text-center">
        <div>
          Confiamos en <span className="contact-home-highlight">Marcas Globales</span>
        </div>
        <div>
         <Marquee>
          <div className="flex justify-center space-x-6 pt-5 px-4">
            {LogoItems.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain bg-black px-8 py-2 gap-5 rounded-xl" // Ajusta según lo que necesites
              />
            ))}
          </div>
          </Marquee>
        </div>
      </div>
      <div>Programa Destacados</div>
    </div>
  );
};

export default GlobalBrands;
