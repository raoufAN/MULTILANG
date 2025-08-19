/* eslint-disable no-unused-vars -- motion is used in JSX */
import { useTranslation } from "react-i18next";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const showAndHideAnimationMenu = {
  initialRight: { top: -50, right: 10, scaleX: 0, scaleY: 0, opacity: 0 },
  initialLeft: { top: -50, left: 10, scaleX: 0, scaleY: 0, opacity: 0 },
  animateTop: { top: 50, scaleX: 1, scaleY: 1, opacity: 1 },
  exitRight: { top: 10, right: 10, scaleX: 0, scaleY: 0, opacity: 0 },
  exitLeft: { top: 10, left: 10, scaleX: 0, scaleY: 0, opacity: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  styleRight: { position: "absolute", right: 0, transformOrigin: "top right" },
  styleLeft: { position: "absolute", left: 220, transformOrigin: "top left" },
};

const MobileMenu = ({ setMenuIsOpen, MenuisOpen, setShowList, side }) => {
  const { t } = useTranslation();

  return (
    <div className="relative mx-5">
      <IoMenu
        className="text-white size-7 md:size-10"
        onClick={() => {
          setMenuIsOpen(!MenuisOpen);
          setShowList(false);
        }}
      />
      <AnimatePresence>
        {MenuisOpen && (
          <motion.ul
            initial={
              side === "right"
                ? showAndHideAnimationMenu.initialRight
                : showAndHideAnimationMenu.initialLeft
            }
            animate={showAndHideAnimationMenu.animateTop}
            exit={
              side === "right"
                ? showAndHideAnimationMenu.exitRight
                : showAndHideAnimationMenu.exitLeft
            }
            transition={showAndHideAnimationMenu.transition}
            style={
              side === "right"
                ? showAndHideAnimationMenu.styleRight
                : showAndHideAnimationMenu.styleLeft
            }
            className="absolute z-50 flex flex-col items-center justify-center  px-5 py-10 bg-white shadow-lg xl:hidden rounded-xl  w-50">
            {t("headerLink", { returnObjects: true }).map((link, index) => (
              <li
                key={index}
                href="#"
                className=" w-full rounded-sm  text-center py-3 font-semibold cursor-pointer text-sm border-b border-gray-300 hover:bg-gray-100 hover:scale-105  duration-200 transition-all"
                onClick={() => setMenuIsOpen(false)}>
                {link}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
