import React from "react";
import { Link } from "react-router-dom";
import "./CartIcon.css";
import { useSelector } from "react-redux";


//we add use useDispatch asper 
// import { connect } from "react-redux";

function CartIcon(Props) {
  const { totalQty } = useSelector((s) => s.cart);

  return (
    <div id="cart-icon">
      <Link to="/cart">
        <i className="fa fa-shopping-cart"></i>
        <span className="badge badge-danger">{totalQty}</span>
      </Link>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     totalQuantity: state.cart.reduce(
//       (total, item) => total + parseInt(item.quantity), 0),
//   };
// };

export default CartIcon;
