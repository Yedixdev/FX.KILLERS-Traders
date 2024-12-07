import { FaStar } from "react-icons/fa";
import ShimmerButton from "./ui/shimmer-button";
import { motion } from "framer-motion";
import TypingAnimation from "./ui/typing-animation";
import BlurIn from "./ui/blur-in";

const Welcome = () => {
  return (
    <div className="w-full h-[600px] flex justify-center  relative">
      <motion.div
        className="bg-gray-300 h-[450px] w-[1000px] lg:rounded-xl xl:rounded-xl flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}  
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 1, ease: "easeOut" }}  
      >

        {/* Clasificación */}
         <motion.div
            className="mt-5 font-poppins"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
            <ShimmerButton background="#135A3A">
               <div className="flex gap-2 items-center">
                  <FaStar className="text-xl" />
                  <BlurIn className="font-poppins text-gray-100"
                  word="5/5 Clasificación"/>
               </div>
            </ShimmerButton>
         </motion.div>

        {/* Título principal */}
        <motion.div
          className="title-home-section text-4xl md:text-6xl font-bold font-display text-center relative z-10 p-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          FK KILLERS <span className="text-gray-100">TRADING HOUSE</span>
        </motion.div>

        {/* Subtítulo */}
        <motion.div
          
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <TypingAnimation
          className="font-poppins font-semibold text-lg md:text-xl pt-5 text-center text-green1 relative z-10"
          text="Comunidad exclusiva + Educación Financiera"
          />
        </motion.div>

        {/* Formulario */}
        <motion.form
          className="w-full flex gap-3 mt-5 justify-center items-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <input
            type="email"
            placeholder="Correo electrónico"
            required
            className="p-3 w-60 xl:w-96 lg:w-96 bg-transparent max-w-md font-poppins rounded-xl text-gray-50 border-2 border-green1 focus:outline-none focus:ring-2 focus:ring-green1 focus:border-green1 placeholder-green1 transition duration-300 ease-in-out"
          />
          <button
            type="submit"
            className="contact-btn-form-home px-6 py-3 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 bg-yellow1 text-white font-semibold"
          >
            Suscríbete
          </button>
        </motion.form>

        <motion.div className="shadow-home-green bg-transparent w-[400px] max-w-3xl  rounded-full mt-24 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}></motion.div>
      </motion.div>

      <motion.div
        className="bg-green1 w-[80%] h-72 max-w-3xl rounded-xl mt-12 absolute bottom-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
      />
    </div>
  );
};

export default Welcome;
