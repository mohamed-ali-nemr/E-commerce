import { Link } from "react-router-dom";
//Localization
//higher order component (HOC)
import { withTranslation } from "react-i18next";

const ProductItem = (props) => {
  const { t } = props;
  const { product, handleDetails } = props;

  const titleData = product.title;
  const priceData = product.price;

  return (
    <div className="post">
      <img src={product.image} alt="" />
      <h3>{t("title", { titleData: titleData })}</h3>
      <p className="card-text"> {t("Price", { priceData: priceData })}$</p>
      <Link
        to={`/details/${product.id}`}
        className="btn"
        onClick={handleDetails}
      >
        {t('Details')}
      </Link>
    </div>
  );
};

export default withTranslation()(ProductItem);
