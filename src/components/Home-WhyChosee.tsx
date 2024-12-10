import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
//ignore error
import "swiper/css";

const HomeWhyChosee = () => {
  const infoItems = [
    {
      title: "Enseñanza Clara y Aterrizada",
      description:
        "Iván se caracteriza por su capacidad de explicar conceptos complejos de forma sencilla y accesible.",
    },
    {
      title: "Preparación para la Realidad del Mercado",
      description:
        "Iván te prepara para enfrentar tanto los desafíos como las recompensas reales del trading.",
    },
    {
      title: "Una Comunidad de Apoyo",
      description:
        "No estarás solo en este camino. Te unirás a una comunidad de traders motivados y en constante aprendizaje.",
    },
    {
      title: "Actualización Continua",
      description:
        "Iván mantiene a sus estudiantes actualizados con las últimas tendencias y desarrollos del mercado.",
    },
    {
      title: "Adaptabilidad",
      description:
        "Iván enseña la importancia de adaptarse a los cambios rápidos del mercado para mantener la ventaja competitiva.",
    },
    {
      title: "Capacitación Regular",
      description:
        "Regularmente ofrece sesiones de capacitación para mantener a sus estudiantes al día.",
    },
    {
      title: "Soporte Personalizado",
      description:
        "Proporciona soporte continuo y personalizado para resolver dudas y guiar a los estudiantes en su camino.",
    },
  ];

  return (
    <motion.div 
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.8 }}
    transition={{ duration: 0.8 }}
    className="p-6 flex flex-col justify-center items-center bg-gray-300  w-full ">
      <div 
      id="why-chosee"
      className="text-xl font-poppins font-bold title-home-section">Why Chosee</div>
      <div className="text-4xl title-home-section text-gray-100 mb-6 text-center font-display font-semibold">
        <span className="text-gray-100">¿Por qué</span> 
        <span className="title-home-section"> elegir a Iván?</span>
      </div>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-full"
      >
        <div>
          {infoItems.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-green2 rounded-lg shadow-lgflex flex-col justify-center items-center text-center max-w-sm mx-auto my-3  shadow-gray-800 mb-8"
              style={{ width: "800px", height: "220px" }}
            >
              <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 20 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}>
                <div className="text-2xl font-bold font-poppins contact-home-highlight pb-4">{item.title}</div>
                <p className="text-gray-200 font-poppins text-xl">{item.description}</p>
              </motion.div>
            </SwiperSlide>
          ))}
          </div>
      </Swiper>
      
    </motion.div>
  );
};

export default HomeWhyChosee;
