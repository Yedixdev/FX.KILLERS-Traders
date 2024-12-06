import { FaStar } from "react-icons/fa";

const Welcome = () => {
   return (
      <div className="w-full h-[600px] flex justify-center pt-8 relative">
         <div className="bg-gray-300 w-[1300px] h-96 max-w-4xl lg:rounded-xl   xl:rounded-xl flex flex-col items-center">
            {/* Clasificación */}
            <div className="flex gap-5 items-center justify-center bg-green1 w-48 md:w-56 h-8 font-poppins text-sm text-gray-50 m-5 rounded-lg shadow-lg relative z-10">
               <FaStar />
               5/5 Clasificación
            </div>

            {/* Título principal */}
            <div className="title-home-section text-3xl md:text-5xl font-bold font-display text-center relative z-10">
               FK KILLERS <span className="text-gray-100">TRADING HOUSE</span>
            </div>

            {/* Subtítulo */}
            <div className="font-poppins font-semibold text-lg md:text-xl pt-5 text-center text-green1 relative z-10">
               Comunidad exclusiva + Educación Financiera
            </div>

            {/* Formulario */}
            <form className="w-full flex gap-3 mt-5 justify-center items-center relative z-10">
               <input
                  type="email"
                  placeholder="Correo electrónico"
                  required
                  className="p-3 w-60 xl:w-96 lg:w-96 bg-transparent max-w-md font-poppins rounded-lg text-green1 border-2 border-green1 focus:outline-none focus:ring-2 focus:ring-green1 focus:border-green1 placeholder-gray-300 transition duration-300 ease-in-out"
               />
               <button
                  type="submit"
                  className="contact-btn-form-home px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 bg-yellow1 text-white font-semibold"
               >
                  Suscríbete
               </button>
            </form>
            <div className="shadow-home-green bg-green1 w-[200px] max-w-3xl h-12 rounded-full mt-12 "></div>

         </div>           
         <div className="bg-green1 w-[80%] h-72 max-w-3xl rounded-lg mt-12 absolute bottom-2"></div>
         


      </div>
   );
};

export default Welcome;

