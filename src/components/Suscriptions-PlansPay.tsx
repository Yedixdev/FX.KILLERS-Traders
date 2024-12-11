import { motion } from "framer-motion"
const PlansPay = () => {
   return(
      <motion.div
      className="xl:w-[1250px] bg-gradient-green h-auto mx-auto  p-3 lg:rounded-2xl flex flex-col py-5 justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      >
         <span className="font-poppins font-semibold contact-home-highlight text-xl">Suscriptions</span>
         <div className="text-4xl font-display font-bold contact-home-highlight text-center pb-3 ">
            <span className="contact-home-highlight"> Planes perfectos </span>
            <span className="text-gray-200"> para tus necesidades:</span>
         </div>
         <div className="font-poppins text-gray-200  text-center">Ofrecemos una gama de planes de precios flexibles diseñados para adaptarse a traders de todos los tamaños.</div>
         <div className="w-full flex justify-center gap-6 items-center mt-5">

            <div className="bg-green2 text-white h-[450px] w-72 rounded-xl border-2 border-green-400 p-5 flex flex-col justify-between shadow-lg">
               <div>
                  <h2 className="text-2xl font-bold">Premium VIP</h2>
                  <p className="text-4xl font-bold mt-3">$149.00 <span className="text-sm">/mes</span></p>
                  <p className="text-green-400 text-sm font-semibold mt-2">BLACKFRIDAY30</p>
                  <ul className="text-sm mt-4 space-y-2">
                  <li>✔️ Señales (con stoploss, take profit)</li>
                  <li>✔️ Soporte de moderadores 24/5</li>
                  <li>✔️ BIAS (dirección diaria y semanal)</li>
                  <li>✔️ Psicóloga Personal y Grupal</li>
                  <li>✔️ Nutrióloga Personal y Grupal</li>
                  <li>✔️ Live Sessions de Trading semanal</li>
                  <li>✔️ Casos de estudio</li>
                  <li>✔️ Idiomas (Inglés + Francés)</li>
                  <li>✔️ Recap semanal de Trades</li>
                  </ul>
               </div>
               <button className="bg-green-400 text-green2 font-bold py-2 px-4 rounded-lg mt-5">
                  ¡Únete!
               </button>
            </div>

            <div className="bg-green2 text-white h-[450px] w-80 rounded-xl border-2 border-green-400 p-5 flex flex-col justify-between shadow-lg">
               <div>
                  <h2 className="text-2xl font-bold">PDF The Best ICT Guide</h2>
                  <p className="text-4xl font-bold mt-3">$949.00 <span className="text-sm">/único pago</span></p>
                  <p className="text-green-400 text-sm font-semibold mt-2">BLACKFRIDAY30</p>
                  <ul className="text-sm mt-4 space-y-2">
                  <li>✔️ PDF de 142 pag.</li>
                  <li>✔️ Masterclass personalizada 1hr.</li>
                  <li>✔️ Acceso a sección especial de Pro Traders (30 días).</li>
                  <li>✔️ Casos de estudio (modo PDF).</li>
                  <li>✔️ Masterclasses grupales fechas random.</li>
                  <li>✔️ Reuniones de Pro Traders en tu país.</li>
                  <li>✔️ Dudas y preguntas en todo momento con Iván Vargas.</li>
                  </ul>
               </div>
               <button className="bg-green-400 text-green2 font-bold py-2 px-4 rounded-lg mt-5">
                  Adquiere Pro Traders
               </button>
            </div>

            <div className="bg-green2 text-white h-[450px] w-72 rounded-xl border-2 border-green-400 p-5 flex flex-col justify-between shadow-lg">
               <div>
                  <h2 className="text-2xl font-bold">Coaching 1ON1</h2>
                  <p className="text-4xl font-bold mt-3">$1949.00 <span className="text-sm">/único pago</span></p>
                  <ul className="text-sm mt-4 space-y-2">
                  <li>✔️ Entrenamiento avanzado 1 semana</li>
                  <li>✔️ 1 semana junto a Iván Vargas</li>
                  <li>✔️ Clases de 2 hrs (tú eliges tu horario)</li>
                  <li>✔️ PDF The Best ICT Guide incluido 2.0</li>
                  <li>✔️ WhatsApp personal de babyivanfx</li>
                  <li>✔️ 90 días gratis en Membresía Premium VIP</li>
                  <li>✔️ Acceso Pro Traders 30 días</li>
                  </ul>
               </div>
               <button className="bg-green-400 text-green2 font-bold py-2 px-4 rounded-lg mt-5">
                  Reserva 60 días antes
               </button>
            </div>
         </div>
      </motion.div>
   )
}

export default PlansPay