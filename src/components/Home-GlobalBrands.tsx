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
      className="bg-gradient-green h-auto w-full py-5 S flex flex-col items-center relative z-10 overflow-hidden"
    >
      <div className='font-poppins contact-home-highlight font-bold lg:text-xl'>We Transport Confidence</div>
      {/* Título */}
      <div className="text-center ">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-gray-200 font-display">
          Confiamos en <span className="contact-home-highlight font-display">Marcas Globales</span>
        </h2>
      </div>

      {/* Logos con Marquee */}
      <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} 
      transition={{ duration: 1.2, ease: "easeOut" }} 
      className="w-full overflow-hidden pt-4 relative z-10">
        <Marquee>
          <div className="flex flex-wrap justify-center gap-6">
            {LogoItems.map((logo, index) => (
              <div
                key={index}
                className="w-32 sm:w-40 md:w-44 flex items-center justify-center bg-gradient-to-r from-black via-emerald-950 to-black px-4 py-2 mb-5 rounded-xl shadow-lg shadow-black transform transition-all duration-300 hover:scale-105"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 sm:h-7 md:h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </motion.div>

      <div className="flex flex-col justify-center items-center px-4 ">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px]  font-bold text-gray-100 flex gap-3 pb-5 font-display">
          <span className="contact-home-highlight font-display pb-5">Programas</span> Destacados
        </h3>

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ delay:  1, duration: 1, ease: "easeOut"}}
        className="w-full max-w-md md:max-w-3xl bg-transparent rounded-2xl border-2 border-green-700 flex flex-col justify-around items-center p-2 xl:p-4 ">
        

          {/* Bloque 1 */}
          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} 
          transition={{ delay:  1, duration: 1, ease: "easeOut"}}
          className='flex items-center gap-5'>
            <div className="flex flex-col items-center gap-3">
              <div className="w-32 h-24 bg-gradient-to-r from-black via-emerald-950 to-black rounded-xl shadow-lg flex flex-col justify-center items-center gap-2 text-gray-50 text-lg font-poppins">
                <FaBookOpen className="text-4xl sm:text-4xl" />
                Learn
              </div>
            </div>

            <FaPlus className="text-gray-50 text-3xl md:text-4xl" />

            {/* Bloque 2 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-32 h-24 bg-gradient-to-r from-black via-emerald-950 to-black rounded-xl shadow-lg flex flex-col justify-center items-center gap-2 text-gray-50  font-poppins">
                <FaDiscord className="text-4xl sm:text-4xl" />
                Community
              </div>
            </div>
          </motion.div>
       

          {/* Descripción */}
          <div className="mt-6 text-center">
            <h4 className="text-xl md:text-2xl font-semibold text-gray-50 font-poppins">
              Comunidad Premium + Curso
            </h4>
            <p className="text-gray-50 mt-3 font-poppins flex  flex-col">
              Accelerate your Business Success with a Powerful Combination of
              <span className="text-yellow-500 font-semibold"> Learning, Community, and Live Insights.</span>
            </p>
            <Link
              to="/contact"
              className="btn-about-us mt-5 inline-block text-gray-50 px-10 py-2 font-poppins rounded-xl"
            >
              Confirm Us
            </Link>
          </div>   
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GlobalBrands;
