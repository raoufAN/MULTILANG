import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="h-screen relative overflow-hidden">
      <h1>{t("about")}</h1>
    </div>
  );
};

export default About;
