import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import Marquee from './ui/marquee';
import LogoDiscord from '../assets/img/logo-discord.png';
import LogoTradingView from '../assets/img/logo-TradingView.png';
import LogoBinance from '../assets/img/logo-binance.png';
import LogoCTrader from '../assets/img/logo-ctrader.webp';
import LogoFtmo from '../assets/img/logo-ftmo.png';
import LogoStripe from '../assets/img/logo-stripe.png';
import LogoTradezella from '../assets/img/logo-tradezella.png';
import LogoTrustpilot from '../assets/img/logo-trustpilot.png';
import { FaDiscord, FaBookOpen, FaPlus } from "react-icons/fa";
import { BorderBeamPrograms } from './ui/border-beam-programs';

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
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }} 
      transition={{ duration: 0.5 }}
      className="w-2xl mt-3 bg-gradient-green h-[600px] flex flex-col items-center relative z-10 p-4 overflow-hidden mx-5 rounded-2xl"
    >
      <div className="text-5xl font-bold font-display text-gray-200 text-center">
        <div>
          Confiamos en <span className="contact-home-highlight">Marcas Globales</span>
        </div>
        <div className="w-full overflow-hidden pt-4 relative z-10">
          <Marquee>
            <div className="flex justify-center space-x-6">
              {LogoItems.map((logo, index) => (
                <div
                  key={index}
                  className="w-44 flex items-center justify-center bg-gradient-to-r from-black via-emerald-950 to-black px-4 py-[6px] mb-5 rounded-xl shadow-lg shadow-black transform transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-7 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className="relative z-10 font-display text-5xl font-bold text-gray-100 flex gap-3 pb-5 ">
          <span className='contact-home-highlight'>Programas</span> 
          Destacados
        </div>
        <div className="shadow-programs absolute mt-32"></div>
        <div className="w-[800px] h-[350px] relative top-0 bg-transparent rounded-2xl border-2 border-green-700 flex justify-around items-center flex-col ">
          <div className='flex gap-16 items-center'>
            <BorderBeamPrograms className='rounded-xl'/>
            <div className='w-44 h-40 bg-gradient-to-r from-black via-emerald-950 to-black rounded-xl shadow-lg shadow-zinc-900 flex justify-center items-center flex-col gap-3 font-poppins text-gray-50 text-2xl'>
              <FaBookOpen className='text-7xl'/>
              Learn
            </div>
            <FaPlus className='text-gray-50 text-7xl'/>
            <div className='w-44 h-40 bg-gradient-to-r from-black via-emerald-950 to-black rounded-xl shadow-lg shadow-zinc-900 flex justify-center items-center flex-col gap-3 font-poppins text-gray-50 text-2xl'>
              <FaDiscord className='text-7xl'/>
              Community
            </div>
          </div>
          <div className='flex flex-col gap-3 items-center'>
            <div className='font-poppins text-2xl font-semibold text-gray-50'>Comunidad Premium + Curso</div>
            <div className='font-poppins text-center '>
              <div className='text-gray-50 font-poppins text-lg font-normal'>
                Accelerate your Business Success with a Powerful Combination of
              </div>
              <span className='text-yellow-500 font-semibold'> Learning, Community, and Live Insights.</span>
            </div>
            {/* <BorderBeam className='rounded-xl'/> */}
            <Link
              to="/contact"
              className=" btn-about-us text-gray-50 px-5 py-2 font-poppins rounded-full"
            >
              Confirm Us
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GlobalBrands;
