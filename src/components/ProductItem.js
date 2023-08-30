import { Link } from "react-router-dom";
//Localization
//higher order component (HOC)
import { withTranslation } from "react-i18next";

const ProductItem = (props) => {
  const { t } = props;
  const { product, handleDetails } = props;

  const titleData = product.title;
  const priceData = product.price;
  const bodyData = product.body;

  return (
    // <div className="post">
    //   <img src={product.image} alt="" />
    //   <h3>{t("title", { titleData: titleData })}</h3>
    //   <p className="card-text"> {t("Price", { priceData: priceData })}$</p>
    //   <Link
    //     to={`/details/${product.id}`}
    //     className="btn"
    //     onClick={handleDetails}
    //   >
    //     {t('Details')}
    //   </Link>
    // </div>
    <div className="w3-third w3-margin-bottom">
      <div className="w3-card-4">
        <img src={product.image} alt=""  width={335} />
        <div className="w3-container">
          <h3>{t("title", { titleData: titleData })}</h3>
          {/* <p>
          {t("body", { bodyData: bodyData })}
          </p> */}
          <p className="w3-opacity"> {t("Price", { priceData: priceData })}$</p>
          <br />
          <Link to={`/details/${product.id}`} onClick={handleDetails}>
            <button class="w3-button w3-grey w3-block">{t('Details')}</button>
            <br />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(ProductItem);
