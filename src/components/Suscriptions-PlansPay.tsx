import { motion } from "framer-motion"
const PlansPay = () => {
   return(
      <motion.div
      className="xl:w-[1250px] bg-gradient-green h-auto mx-auto  p-5 lg:rounded-2xl flex flex-col py-10 justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      >
         <span className="font-poppins font-semibold contact-home-highlight text-xl">Suscriptions</span>
         <div className="text-5xl font-display font-bold contact-home-highlight text-center pb-5 ">
            <span className="contact-home-highlight"> Planes perfectos </span>
            <span className="text-gray-200"> para tus necesidades:</span>
         </div>
         <div className="font-poppins text-gray-200  text-center">Ofrecemos una gama de planes de precios flexibles diseñados para adaptarse a traders de todos los tamaños.</div>
      </motion.div>
   )
}

export default PlansPay