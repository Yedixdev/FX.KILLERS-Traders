"use client";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; 
// import { FaYoutube, FaInstagram, FaDiscord } from 'react-icons/fa'; 
import { MdMenuOpen, MdClose } from "react-icons/md";
import { BorderBeam } from './ui/border-beam';
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Community + Course', path: '/suscriptions' },
    { name: 'FAQs', path: '/FAQs' },
  ];

  // const navIcons = [
  //   { icon: <FaYoutube/>, href: 'https://www.youtube.com/@babyivanfx' },
  //   { icon: <FaInstagram/>, href: 'https://www.instagram.com/babyivanfx/' },
  //   { icon: <FaDiscord/>, href: '' }
  // ];

  return (
    <motion.header
      className="w-full fixed bg-gradient-green h-16 flex justify-between items-center px-8 shadow-lg shadow-gray-900  z-50"
      initial={{ opacity: 0, y: -30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
    >
      <motion.div
        className="text-gold text-3xl font-serif tracking-wider"
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }} 
      >
        <Link to="/" className=" ">
          Logo
        </Link>
      </motion.div>

      <motion.nav
        className="hidden lg:flex gap-10"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.5 }} 
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + 0.2 * index }} 
          >
            <div>
            
            <Link
            
              to={item.path}
              className={`relative group tracking-wide font-poppins px-5 py-2 rounded-xl transition-all duration-300 ease-in-out 
                ${location.pathname === item.path ? 'text-yellow-500 font-semibold' : 'text-gray-50 hover:text-yellow-500'}`}
            >
              {item.name}
              <BorderBeam/>
            </Link>
            </div>
          </motion.div>
        ))}
      </motion.nav>

      <div className="flex gap-6 items-center">
          <motion.div
            className="hidden lg:flex gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {/* <div className=''>
              {navIcons.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:text-yellow-100 text-2xl transition duration-300 transform hover:scale-150 "
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + 0.2 * index }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div> */}

          <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.4 }}>
            <Link
              to="/contact"
              className=" btn-about-us text-gray-50 px-5 py-2 font-poppins rounded-full">
              Confirm Us
            </Link>
          </motion.div>
        </motion.div>
        <div className="lg:hidden">
          <div onClick={toggleMenu} className="cursor-pointer">
            <motion.div
              animate={{
                rotate: isOpen ? 180 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              {isOpen ? (
                <MdClose
                  className="text-yellow-600 hover:text-yellow-600 text-3xl transition duration-300 transform hover:scale-150"
                />
              ) : (
                <MdMenuOpen
                  className="text-yellow-600 hover:text-yellow-600 text-3xl transition duration-300 transform hover:scale-150"
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
      {isOpen && <HeaderMobile />}
    </motion.header>
  );
};

export default Header;
