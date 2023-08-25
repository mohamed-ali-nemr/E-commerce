import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (e) => {

    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="footer">
      <button className="btn-footer " onClick={handleChangeLanguage} value="en">
        English
      </button>
      <button className="btn-footer " onClick={handleChangeLanguage} value="ar">
        العربيه
      </button>
    </div>
  );
};

export default Footer;
