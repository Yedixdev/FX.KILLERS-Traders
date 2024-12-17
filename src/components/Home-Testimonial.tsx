import React, { useState } from "react";
import { motion } from "framer-motion";
import DataTestimonials from "@/data/DataTestimonials";
import HomeAvatar from "./Home-TestimonialAvatar";

const Testimonials: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  const handleShowLess = ()  => {
    setVisibleCount((prevCount) => Math.max(prevCount - 9, 9)); 
  };
 
  return (
    <motion.div
      id="testimonials-section"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="p-6 flex flex-col justify-center items-center bg-gray-300 lg:rounded-2xl my-10 h-auto w-full xl:w-[1250px] py-5 px-4 relative z-10 xl:rounded-2xl"
    >
      <span className="font-urbanist font-semibold text-xl title-home-section">Testimonials</span>

      <div className="text-6xl py-4 text-center mb-6 text-gray-700 font-greatVibes title-home-section">
        <span className="text-gray-200">Testimonios de </span>
        <span className="text-gray-200 title-home-section">Nuestros Usuarios</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
        {DataTestimonials.slice(0, visibleCount).map((testimonial, index) => {
          const bgColor = {
            green: "bg-blue1 text-white",
            yellow: "bg-green1 text-black",
            gray: "bg-gray-400 text-black",
          }[testimonial.color];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`rounded-xl p-6 shadow-lg ${bgColor} ${testimonial.height}`}
              style={{ minWidth: "200px", maxWidth: "300px" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://via.placeholder.com/50"
                  alt={`${testimonial.name}'s avatar`}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <span className="font-medium">{testimonial.name}</span>
                  <p className="text-sm text-gray-200">{testimonial.date}</p>
                </div>
              </div>
              <div className="mb-3 text-sm">
                <span className="text-lg">{'★'.repeat(testimonial.rating)}</span>
                <span className="text-gray-400">{'☆'.repeat(5 - testimonial.rating)}</span>
              </div>
              <p className="text-sm leading-relaxed">{testimonial.text}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        {visibleCount < DataTestimonials.length && (
          <button
            onClick={handleShowMore}
            className="flex items-center justify-center bg-yellow-600 hover:bg-yellow-500 text-white font-urbanist rounded-full py-2 px-4 transition duration-300 ease-in-out"
          >
            Mostrar más
          </button>
        )}

        {visibleCount > 9 && (
          <button
            onClick={handleShowLess}
            className="flex items-center justify-center bg-gray-400 hover:bg-gray-300 text-gray-800 rounded-full py-2 px-4 transition duration-300 ease-in-out"
          >
            Mostrar menos
          </button>
        )}
      </div>

      <HomeAvatar />
    </motion.div>
  );
};

export default Testimonials;
