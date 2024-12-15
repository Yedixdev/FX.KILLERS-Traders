import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FaYoutube, FaInstagram, FaDiscord } from "react-icons/fa";

const Footer = () => {
  const navIcons = [
    { icon: <FaYoutube />, href: "https://www.youtube.com/@babyivanfx" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/babyivanfx/" },
    { icon: <FaDiscord />, href: "" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-green2 w-full pt-5 flex flex-col items-center relative z-10 overflow-hidden mt-10"
    >
      <div className="flex flex-wrap justify-evenly items-center px-5 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center"
        >
          <div className="text-lg font-bold w-32 h-32 bg-black rounded-xl text-center">LOGO</div>
          <div className="contact-home-highlight text-sm font-poppins font-bold">
            COOL COMPANY FOR COOL TRADERS
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-2 px-5 mt-6"
        >
          <div className="font-bold contact-home-highlight text-xl">Community</div>
          <ScrollLink
            to="home-welcome"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-gray-200 font-poppins cursor-pointer hover:text-yellow-400"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="testimonials-section"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-gray-200 font-poppins cursor-pointer hover:text-yellow-400"
          >
            Testimonials
          </ScrollLink>
          <ScrollLink
            to="why-chosee"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-gray-200 font-poppins cursor-pointer hover:text-yellow-400"
          >
            Why Chosee
          </ScrollLink>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-2 mt-6"
        >
          <div className="font-bold contact-home-highlight text-xl">Company</div>
          <RouterLink
          to="/suscriptions"
          className="text-gray-200 font-poppins cursor-pointer hover:text-yellow-400">Subscription
          </RouterLink>
          <RouterLink
          to="/contact"
          className="text-gray-200 font-poppins cursor-pointer hover:text-yellow-400">Confirm Us
          </RouterLink>
          <RouterLink
            to="/FAQs"
            className="text-gray-200 font-poppins cursor-pointer hover:text-yellow-400"
          >
            FAQs
          </RouterLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-2 mt-6"
        >
          <div className="font-bold contact-home-highlight text-center text-xl">Contact</div>
          <RouterLink
            to="/contact"
            className=" btn-about-us text-gray-50 px-8 py-2 font-poppins rounded-full">
            Confirm Us
          </RouterLink>
          <div className="flex justify-between gap-3">
            {navIcons.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 hover:text-yellow-100 text-4xl transition duration-300 transform hover:scale-150"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + 0.2 * index }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-col px-5 w-full mt-4"
      >
        <div className="w-full h-[1px] btn-about-us flex justify-center items-center"></div>
        <div className="w-full text-center text-gray-200 flex justify-between items-center">
          <div className="text-sm font-poppins py-4 px-2">Terms and Conditions</div>
          <div className="text-sm font-poppins py-4 px-2">@2024 FX KILLERS TRADING HOUSE, All rights reserved.</div>
          <div className="text-sm font-poppins py-4 px-2">Privacy Policy</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
