import { useState } from "react";

const HomeWhyChosee = () => {
  const infoItems = [
    { title: "Enseñanza Clara y Aterrizada", description: "Iván se caracteriza por su capacidad de explicar conceptos complejos de forma sencilla y accesible." },
    { title: "Preparación para la Realidad del Mercado", description: "Iván te prepara para enfrentar tanto los desafíos como las recompensas reales del trading." },
    { title: "Una Comunidad de Apoyo", description: "Te unirás a una comunidad de traders motivados y en constante aprendizaje." },
    { title: "Actualización Continua", description: "Iván mantiene a sus estudiantes actualizados con las últimas tendencias y desarrollos del mercado." },
    { title: "Adaptabilidad", description: "Iván enseña la importancia de adaptarse a los cambios rápidos del mercado." },
    { title: "Capacitación Regular", description: "Regularmente ofrece sesiones de capacitación para mantener a sus estudiantes al día." },
    { title: "Soporte Personalizado", description: "Proporciona soporte continuo y personalizado para resolver dudas." },
  ];

  const [currentIndex, setCurrentIndex] = useState(3); // Slide central por defecto

  // Funciones para cambiar el slide activo
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? infoItems.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === infoItems.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex flex-col items-center bg-gray-100 p-8 relative overflow-hidden">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">¿Por qué elegir a Iván?</h2>

      <div className="relative w-full max-w-6xl h-64 flex items-center justify-center">
        {/* Botón Izquierdo */}
        <button onClick={prevSlide} className="absolute left-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 z-10">
          &#8592;
        </button>

        {/* Slides */}
        <div className="flex items-center justify-center w-full">
          {infoItems.map((item, index) => {
            // Calcular posición relativa al slide activo
            const position = index - currentIndex;
            const isCenter = position === 0;

            return (
              <div
                key={index}
                className={`absolute transition-transform duration-500 ease-in-out p-4 w-80 h-56 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center
                  ${isCenter ? "z-10 scale-100" : "z-0 scale-75"}
                  ${position === -1 ? "-translate-x-48 rotate-6" : ""}
                  ${position === 1 ? "translate-x-48 -rotate-6" : ""}
                  ${position < -1 || position > 1 ? "opacity-0 pointer-events-none" : "opacity-100"}
                `}
              >
                <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
                <p className="text-gray-700 text-sm text-center">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Botón Derecho */}
        <button onClick={nextSlide} className="absolute right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 z-10">
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default HomeWhyChosee;
