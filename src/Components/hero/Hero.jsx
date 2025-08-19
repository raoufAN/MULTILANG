/* eslint-disable no-unused-vars -- motion is used in JSX */
import { useEffect, useState } from "react";
import heroImg from "../../assets/hero.jpg";
import heroImg1 from "../../assets/hero1.webp";
import heroImg2 from "../../assets/hero2.webp";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

const heroImages = [heroImg, heroImg1, heroImg2];
const textVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
    },
  },
};
const Hero = () => {
  const { t, i18n } = useTranslation();
  const [Polygon, setPolygon] = useState("polygon(100% 0px, 28% 0px, 70% 100%, 100% 100%)");
  const [activeIndex, setActiveIndex] = useState(0);
  const hero = t("hero", { returnObjects: true });

  useEffect(() => {
    if (i18n.language === "ar") {
      setPolygon("polygon(72% 0px, 0px 0px, 0px 100%, 50% 100%)");
    } else {
      setPolygon("polygon(100% 0px, 28% 0px, 50% 100%, 100% 100%)");
    }
  }, [i18n.language]);

  return (
    <div className="h-[calc(100%-60px)] md:h-[calc(100%-80px)] overflow-hidden relative ">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex} //  important so animation re-triggers on change
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${heroImages[activeIndex]})`,
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute inset-0"
        />
      </AnimatePresence>
      <div className="container flex justify-end items-center h-full ">
        <motion.div
          key={`${activeIndex}-${i18n.language}`}
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="w-1/2 z-40 text-white">
          <motion.h1 variants={textVariants} className="text-2xl md:text-4xl font-bold mb-5">
            {hero[activeIndex].title}
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="font-semibold text-sm md:text-base text-gray-100 mb-5">
            {hero[activeIndex].desc}
          </motion.p>
          <motion.div variants={textVariants} className="flex gap-3  items-center ">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`transition-all duration-300 cursor-pointer ${
                  activeIndex === index ? "p-2 rounded-full bg-gray-400/50 " : ""
                }`}>
                <span
                  onClick={() => setActiveIndex(index)}
                  className={`block w-3 h-3 rounded-full 
            ${activeIndex === index ? "bg-white scale-125" : "bg-gray-400"}`}
                />
              </div>
            ))}
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            variants={textVariants}
            className="p-1.5 bg-gray-400/50  w-fit h-fit mt-10 rounded-sm">
            <div className="font-semibold cursor-pointer text-xs md:text-sm  bg-white rounded-sm px-5 py-2 text-black ">
              {t("heroButton")}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className={`absolute right-0 top-0 bg-[#000000c4] w-full h-full z-10`}
        initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
        animate={{ clipPath: Polygon }}
        transition={{ duration: 1, ease: "easeInOut" }}></motion.div>
    </div>
  );
};

export default Hero;
