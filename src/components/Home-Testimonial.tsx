import React, { useState } from "react";
import { motion } from "framer-motion";
import DataTestimonials from "@/data/DataTestimonials";
import TestimonialsPagination from "./Home-TestimonialPagination";
import HomeAvatar from "./Home-TestimonialAvatar";

const Testimonials: React.FC = () => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = DataTestimonials.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTestimonials = DataTestimonials.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="p-6 flex flex-col justify-center items-center bg-gray-300 lg:rounded-2xl my-10 h-auto w-full xl:w-[1250px] py-5 px-4 relative z-10 xl:rounded-2xl"
    >
      <span className="font-poppins font-semibold text-xl title-home-section">Testimonials</span>

      <div className="text-4xl font-bold text-center mb-6 text-gray-700 font-display title-home-section">
        <span className="text-gray-200">Testimonios de </span>
        <span className="text-gray-200 title-home-section">Nuestros Usuarios</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
        {currentTestimonials.map((testimonial, index) => {
          const bgColor = {
            green: "bg-green1 text-white",
            yellow: "bg-yellow-500 text-black",
            gray: "bg-gray-400 text-black",
          }[testimonial.color];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
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

      <div className="mt-6">
        <TestimonialsPagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <HomeAvatar />
    </motion.div>
  );
};

export default Testimonials;

