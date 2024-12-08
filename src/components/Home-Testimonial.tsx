import React, { useState } from 'react';
import HomeAvatar from './Home-TestimonialAvatar';

const testimonials = [
  { 
    name: 'Romário Lima', 
    rating: 5, 
    color: 'green', 
    height: 'row-span-1', 
    date: '2024-12-01', 
    text: '¡Un servicio excepcional! Recomendaría esta empresa a todos mis amigos.' 
  },
  { 
    name: 'Romário Lima', 
    rating: 4, 
    color: 'yellow', 
    height: 'row-span-2', 
    date: '2024-11-15', 
    text: 'El producto llegó bien, aunque hubo pequeños retrasos en la entrega.' 
  },
  { 
    name: 'Romário Lima', 
    rating: 3, 
    color: 'gray', 
    height: 'row-span-1', 
    date: '2024-10-20', 
    text: 'La experiencia fue buena, pero hay espacio para mejorar en algunos aspectos.' 
  },
  { 
    name: 'Romário Lima', 
    rating: 5, 
    color: 'yellow', 
    height: 'row-span-2', 
    date: '2024-09-05', 
    text: 'El equipo fue increíble, superaron todas mis expectativas.' 
  },
  { 
    name: 'Romário Lima', 
    rating: 4, 
    color: 'green', 
    height: 'row-span-1', 
    date: '2024-08-12', 
    text: 'Me gustó bastante, pero aún pueden trabajar en la velocidad de atención.' 
  },
  { 
    name: 'Romário Lima', 
    rating: 3, 
    color: 'gray', 
    height: 'row-span-1', 
    date: '2024-07-18', 
    text: 'El producto cumplió con lo prometido, aunque el empaque podría ser mejor.' 
  },
  { 
    name: 'Romário Lima', 
    rating: 4, 
    color: 'yellow', 
    height: 'row-span-2', 
    date: '2024-06-25', 
    text: 'Excelente calidad, pero el proceso de compra fue algo confuso.' 
  },
  { 
    name: 'Romário Lima', 
    rating: 3, 
    color: 'gray', 
    height: 'row-span-1', 
    date: '2024-05-10', 
    text: 'La atención fue buena, pero el producto llegó tarde.' 
  },
  { 
    name: 'Romário Lima', 
    rating: 4, 
    color: 'green', 
    height: 'row-span-1', 
    date: '2024-04-22', 
    text: 'Todo bien, aunque espero que mejoren en el seguimiento de pedidos.' 
  },
  { 
    name: 'Romário Lima', 
    rating: 5, 
    color: 'green', 
    height: 'row-span-1', 
    date: '2024-12-01', 
    text: '¡Un servicio excepcional! Recomendaría esta empresa a todos mis amigos.' 
  },
  { 
    name: 'Romário Lima', 
    rating: 4, 
    color: 'yellow', 
    height: 'row-span-2', 
    date: '2024-11-15', 
    text: 'El producto llegó bien, aunque hubo pequeños retrasos en la entrega.' 
  },
  { 
    name: 'Romário Lima', 
    rating: 3, 
    color: 'gray', 
    height: 'row-span-1', 
    date: '2024-10-20', 
    text: 'La experiencia fue buena, pero hay espacio para mejorar en algunos aspectos.' 
  },
  { 
    name: 'Romário Lima', 
    rating: 5, 
    color: 'yellow', 
    height: 'row-span-2', 
    date: '2024-09-05', 
    text: 'El equipo fue increíble, superaron todas mis expectativas.' 
  },
  { 
    name: 'Romário Lima', 
    rating: 4, 
    color: 'green', 
    height: 'row-span-1', 
    date: '2024-08-12', 
    text: 'Me gustó bastante, pero aún pueden trabajar en la velocidad de atención.' 
  },
  { 
    name: 'Romário Lima', 
    rating: 3, 
    color: 'gray', 
    height: 'row-span-1', 
    date: '2024-07-18', 
    text: 'El producto cumplió con lo prometido, aunque el empaque podría ser mejor.' 
  },
  { 
    name: 'Romário Lima', 
    rating: 4, 
    color: 'yellow', 
    height: 'row-span-2', 
    date: '2024-06-25', 
    text: 'Excelente calidad, pero el proceso de compra fue algo confuso.' 
  },
  { 
    name: 'Romário Lima', 
    rating: 3, 
    color: 'gray', 
    height: 'row-span-1', 
    date: '2024-05-10', 
    text: 'La atención fue buena, pero el producto llegó tarde.' 
  },
  { 
    name: 'Romário Lima', 
    rating: 4, 
    color: 'green', 
    height: 'row-span-1', 
    date: '2024-04-22', 
    text: 'Todo biencool, aunque espero que mejoren en el seguimiento de pedidos.' 
  },
];

interface CustomPaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex justify-center items-center mt-6">
      {/* Botón de anterior */}
      <button
        className="px-3 py-1 mx-1 bg-gray-200 rounded-full hover:bg-gray-300"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Anterior
      </button>

      {/* Números de páginas */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-3 py-1 mx-1 text-lg ${currentPage === index + 1 ? 'bg-green1 text-white' : 'bg-gray-200 text-gray-900'} rounded-full hover:bg-blue-500 hover:text-white`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      {/* Botón de siguiente */}
      <button
        className="px-3 py-1 mx-1 bg-gray-200 rounded-full hover:bg-gray-300"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Siguiente
      </button>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalItems = testimonials.length;

  // Calcular el índice de los testimonios a mostrar para la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, endIndex);

  // Función para manejar el cambio de página
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="p-6 flex flex-col justify-center items-center bg-gray-300 lg:rounded-2xl my-10 h-auto w-full xl:w-[1250px] py-5 px-4 relative z-10 xl:rounded-2xl overflow-hidden">
      <span className='font-poppins font-semibold text-xl title-home-section '>Testimonials</span>
      
      <div className="text-4xl font-bold text-center mb-6 text-gray-700 font-display title-home-section ">
        <span className='text-gray-200 '>Testimonios de </span> <span className='text-gray-200 title-home-section'>Nuestros Usuarios</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
        {currentTestimonials.map((testimonial, index) => {
          const bgColor = {
            green: 'bg-green1 text-white',
            yellow: 'bg-yellow-500 text-black',
            gray: 'bg-gray-400 text-black',
          }[testimonial.color];

          return (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-lg ${bgColor} ${testimonial.height}`}
              style={{ minWidth: '200px', maxWidth: '300px' }}
            >
              {/* Encabezado */}
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

              {/* Reseña */}
              <div className="mb-3 text-sm">
                <span className="text-lg">{'★'.repeat(testimonial.rating)}</span>
                <span className="text-gray-400">{'☆'.repeat(5 - testimonial.rating)}</span>
              </div>

              {/* Texto */}
              <p className="text-sm leading-relaxed">{testimonial.text}</p>
            </div>
          );
        })}
      </div>
      {/* Paginación */}
      <div className="mt-6">
        <CustomPagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <HomeAvatar/>
    </div>
  );
};

export default Testimonials;