import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const API_KEY = "bZcfKqa3c7EDn2VhsDKY1Q";
  const FORM_ID = "7439790";
  const BASE_URL = "https://api.convertkit.com/v3/forms";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Por favor, ingresa tu correo.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${BASE_URL}/${FORM_ID}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: API_KEY,
          email: email,
        }),
      });

      if (response.ok) {
        setMessage("¡Gracias por suscribirte!");
        setEmail("");
      } else {
        setMessage("Hubo un error. Inténtalo nuevamente.");
      }
    } catch (error) {
      setMessage("Hubo un problema al enviar tu suscripción.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="xl:w-[1250px] bg-gradient-to-r from-[#197149] to-[#012b20] h-auto mx-auto mt-5 p-5 lg:rounded-2xl flex flex-col py-10 justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    > 
    <div className="contact-home-highlight font-poppins font-semibold text-xl mb-4">About Me</div>
      {/* Contenedor superior: Imagen o diseño */}
      <motion.div
        className="w-full gap-4 flex flex-col items-center justify-evenly lg:flex-row lg:gap-10"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
       
        <div className="relative flex justify-center items-center">
          <div className="shadow-about-me absolute"></div>
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-0 bottom-0 left-12 sm:left-16 w-[1px] bg-gradient-to-b from-green-1 via-emerald-50 to-green1"
            ></motion.div>
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute top-0 bottom-0 right-12 sm:right-16 w-[1px] bg-gradient-to-b from-green-1 via-emerald-50 to-green1"
            ></motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute left-0 right-0 top-12 sm:top-16 h-[1px] bg-gradient-to-r from-green-1 via-emerald-50 to-green1"
            ></motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute left-0 right-0 bottom-12 sm:bottom-16 h-[1px] bg-gradient-to-r from-green-1 via-emerald-50 to-green1"
            ></motion.div>
          </div>
        </div>

        {/* Información personal */}
        <motion.div
          className="w-full lg:w-[800px] bg-green2 opacity-90 relative z-10 rounded-xl p-6 sm:p-10 shadow-lg shadow-green-900"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col text-center gap-2">
            <span className="font-display text-3xl sm:text-4xl font-bold text-gray-50">
              CEO e Instructor
            </span>
            <span className="contact-home-highlight font-bold text-gray-100 font-display text-2xl sm:text-3xl">
              Ivan Vargas
            </span>
          </div>
          <div className="text-gray-50 font-poppins font-light mt-4 text-sm sm:text-base">
            <p>
              Me chamo Washington Henrique Fernandes de Sousa, mas pode me
              chamar apenas de Henrique. Prazer!
            </p>
            <p className="mt-2">
              Há mais de 2 anos desenvolvendo e programando interfaces com
              JavaScript, React JS e Typescript. Graduado em Análise e
              Desenvolvimento de Sistemas pela Fatec de São José dos Campos.
              Interesses em desenvolvimento Front-end com React, React Native,
              VueJS e UX/UI Design. Tentando ser um pouquinho melhor do que
              ontem todos os dias.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Título */}
      <motion.div
        className="text-3xl sm:text-5xl font-bold font-display text-gray-300 text-center relative z-10 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="contact-home-highlight">Mantente</span> en contacto
      </motion.div>

      {/* Mensajes */}
      {message && (
        <div
          className={`${
            message.includes("Gracias") ? "text-green-500" : "text-red-500"
          } font-semibold text-center`}
        >
          {message}
        </div>
      )}

      {/* Formulario */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full flex  sm:flex-row gap-2 mt-5 justify-center"
      >
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 w-full sm:w-96 font-poppins rounded-xl text-gray-100 bg-green2 border-2 border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent placeholder-yellow-500 transition duration-300 ease-in-out shadow-md shadow-zinc-950"
        />

        <motion.button
          type="submit"
          className={`contact-btn-form-home px-8 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.3 }}
        >
          {isSubmitting ? "Enviando..." : "Suscribirme"}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default AboutMe;
