/* eslint-disable no-unused-vars -- motion is used in JSX */
import { useTranslation } from "react-i18next";
import logo from "../../assets/Logo.png";
import { useEffect, useState } from "react";
import LangSwitch from "../langSwitch/LangSwitch";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "../mobileMenu/MobileMenu";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [Polygon, setPolygon] = useState("polygon(35% 0px, 100% 0px, 100% 100%, 28% 100%)");
  const [showList, setShowList] = useState(false);
  const [MenuisOpen, setMenuIsOpen] = useState(false);
  const [side, setSide] = useState("right");

  useEffect(() => {
    if (i18n.language === "ar") {
      setPolygon("polygon(65% 0px, 0px 0px, 0px 100%, 72% 100%)");
      setSide("left");
    } else {
      setPolygon("polygon(35% 0px, 100% 0px, 100% 100%, 28% 100%)");
      setSide("right");
    }
  }, [i18n.language]);

  return (
    <div className="flex justify-between  items-center px-5 py-2 md:px-10 md:py-3 h-14  md:h-20 bg-white relative">
      <div className="w-1/3 z-20">
        <img src={logo} alt="logo" loading="lazy" className="w-10 xl:w-16 rounded-full" />
      </div>

      {/*desktop menu and language */}
      <ul className="w-2/3 hidden xl:flex justify-between items-center z-20 text-white">
        <>
          {t("headerLink", { returnObjects: true }).map((link, index) => (
            <li
              key={index}
              href="#"
              className="font-semibold cursor-pointer text-sm hover:scale-105  duration-200 transition-all">
              {link}
            </li>
          ))}
          <motion.div
            className="relative p-1.5 bg-gray-400/50  w-fit h-fit  rounded-sm"
            whileHover={{ scale: 1.1 }}>
            <li
              href="#"
              className="font-semibold cursor-pointer text-sm  bg-white rounded-sm px-5 py-1 text-black"
              onClick={() => {
                setShowList(!showList);
                setMenuIsOpen(false);
              }}>
              {t("lang")}
            </li>
            <AnimatePresence>
              {showList && (
                <motion.div
                  key="box"
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -60, opacity: 0 }}
                  transition={{ duration: 0.3 }}>
                  <LangSwitch setShowList={setShowList} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      </ul>

      {/*Mobile menu and language */}
      <div className="flex items-center cursor-pointer xl:hidden z-50">
        <MobileMenu
          setMenuIsOpen={setMenuIsOpen}
          MenuisOpen={MenuisOpen}
          setShowList={setShowList}
          side={side}
        />
        <motion.div
          className="relative p-1 bg-gray-400/50  w-fit h-fit rounded-sm"
          whileHover={{ scale: 1.1 }}>
          <span
            href="#"
            className="font-semibold  bg-white cursor-pointer rounded-sm px-5 py-1 text-xs md:text-base"
            onClick={() => {
              setShowList(!showList);
              setMenuIsOpen(false);
            }}>
            {t("lang")}
          </span>
          <AnimatePresence>
            {showList && (
              <motion.div
                key="box"
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 0.3 }}>
                <LangSwitch setShowList={setShowList} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/*overlay*/}
      <motion.div
        className="absolute right-0 top-0 bg-black w-full h-full"
        initial={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
        animate={{ clipPath: Polygon }}
        transition={{ duration: 1, ease: "easeInOut" }}></motion.div>
    </div>
  );
};

export default Header;

//;

//
