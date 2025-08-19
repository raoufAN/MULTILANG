import { useTranslation } from "react-i18next";

const LangSwitch = ({ setShowList }) => {
  const { i18n } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = lng === "ar" ? "rtl" : "ltr"; // for RTL
    setShowList(false);
  };
  return (
    <div
      className={`bg-white text-black flex flex-col text-sm absolute top-10 z-90  rounded-sm ${
        i18n.language === "ar" ? "left-0" : "right-0"
      }`}>
      <button
        className="cursor-pointer px-6 py-2.5 border-b border-gray-300 hover:bg-gray-100"
        onClick={() => changeLang("en")}>
        ENGLAIS
      </button>
      <button
        className="cursor-pointer px-6 py-2.5 border-b border-gray-300 hover:bg-gray-100"
        onClick={() => changeLang("fr")}>
        FRANCAIS
      </button>
      <button
        dir="rtl"
        className="cursor-pointer px-6 py-2.5 border-b border-gray-300 hover:bg-gray-100"
        onClick={() => changeLang("ar")}>
        العربية
      </button>
    </div>
  );
};

export default LangSwitch;
