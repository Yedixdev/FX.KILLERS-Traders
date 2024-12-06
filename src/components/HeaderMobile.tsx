import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion'; 

const HeaderMobile = () => {

  return (
    <motion.nav
      className='lg:hidden flex p-10 flex-col items-center gap-4 font-poppins text-lg text-green1 font-semibold bg-white bg-opacity-55 shadow-md absolute w-full top-[65px] left-0 z-40'
      initial={{ opacity: 0, y: -30}} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.3, delay: 0.1 }} 
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link className="relative group transition duration-300 ease-in-out hover:text-yellow-600" 
        to="/">
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"/>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link className="relative group transition duration-300 ease-in-out hover:text-yellow-600" 
        to="/suscriptions">
          Community + Course
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"/>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link className="relative group transition duration-300 ease-in-out hover:text-yellow-600" 
        to="/FAQ">
          FAQ
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"/>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link
          to="/contact"
          className="bg-yellow-600 text-gray-100 px-8 py-1 rounded-full font-medium hover:bg-black transition duration-300 shadow-md shadow-gray-800 hover:shadow-black"
        >
          Confirm Us
        </Link>
      </motion.div>

      <div className='flex gap-10 justify-center items-center mt-3'>
        <motion.a
          href="https://www.youtube.com/@babyivanfx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green1 hover:text-yellow-600 text-3xl transition duration-300 transform hover:scale-150"
          initial={{ opacity: 0, y: -25 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <FaYoutube />
        </motion.a>
        
        <motion.a
          href="https://www.instagram.com/babyivanfx/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green1 hover:text-yellow-600 text-3xl transition duration-300 transform hover:scale-150"
          initial={{ opacity: 0, y: -25 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <FaInstagram />
        </motion.a>
        
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green1 hover:text-yellow-600 text-3xl transition duration-300 transform hover:scale-150"
          initial={{ opacity: 0, y: -25 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <FaDiscord />
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default HeaderMobile;
