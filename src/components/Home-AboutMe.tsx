import React, { useState } from "react";
import { motion } from "framer-motion"; // Importar Framer Motion

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
      className="w-2xl bg-gradient-to-r from-[#197149] to-[#012b20] h-auto m-5 rounded-2xl flex justify-center items-center flex-col gap-5 py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }} 
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full flex items-center justify-center gap-1"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative flex justify-center items-center">
          <div className="shadow-about-me absolute"></div>
          <div className="relative w-80 h-80">
            <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1 }} 
            className="absolute top-0 bottom-0 left-16 w-[1px] bg-gradient-to-b from-green-1 via-emerald-50 to-green1"></motion.div>
            <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-0 bottom-0 right-16 w-[1px] bg-gradient-to-b from-green-1 via-emerald-50 to-green1"></motion.div>

            <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute left-0 right-0 top-16 h-[1px] bg-gradient-to-r from-green-1 via-emerald-50 to-green1"></motion.div>
            <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute left-0 right-0 bottom-16 h-[1px] bg-gradient-to-r from-green-1 via-emerald-50 to-green1"></motion.div>
          </div>
        </div>

        <motion.div
          className="w-[800px] bg-green2 opacity-90 relative z-10 rounded-xl p-10 shadow-lg shadow-green-900"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-2">
            <span className="font-display text-4xl font-bold text-gray-50">
              CEO e Instructor
            </span>
            <span className="contact-home-highlight font-bold text-gray-100 font-display text-4xl mb-5">
              Ivan Vargas
            </span>
          </div>
          <div className="text-gray-50 font-poppins font-light">
            <span>
              Me chamo Washington Henrique Fernandes de Sousa, mas pode me
              chamar apenas de Henrique. Prazer!
            </span>
            <span>
              Há mais de 2 anos desenvolvendo e programando interfaces com
              JavaScript, React JS e Typescript. Graduado em Análise e
              Desenvolvimento de Sistemas pela Fatec de São José dos Campos.
              Interesses em desenvolvimento Front-end com React, React Native,
              VueJS e UX/UI Design. Tentando ser um pouquinho melhor do que
              ontem todos os dias.
            </span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="text-5xl font-bold font-display text-gray-300 text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="contact-home-highlight">Mantente</span> en contacto
      </motion.div>

      {message && (
        <div
          className={`${
            message.includes("Gracias") ? "text-green-500" : "text-red-500"
          } font-semibold text-center`}
        >
          {message}
        </div>
      )}

      <motion.form 
        onSubmit={handleSubmit} 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full flex gap-2 mt-5 justify-center">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 w-96 font-poppins rounded-xl text-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-400 transition duration-300 ease-in-out"
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
