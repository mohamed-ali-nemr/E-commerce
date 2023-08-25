import React ,{useState} from "react";
import CartItem from "../components/CartItem";
import ProductsApi from "../api/prouductsApi.json";
import { connect, useDispatch, useSelector } from "react-redux";
// import { removeFromCart } from "../store/actions/actions";


const Cart = (props) => {
  // const cart = useSelector((s) => s.cart);
  // console.log(cart);
  // const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const newGeneralTotalAfterCHange=(Cont)=>{
    setCount(otherCont=>otherCont+Cont)
  };

  return (
    <div>
      <h1>Cart Page</h1>
      <div className="row">
        {props.cartItems.map((item, index) => (
          <div className={"col-4"} key={index}>
            <CartItem
              // handleDeleteToCart={handleDeleteToCart}
              item={item}
              index={index}
              newGeneralTotalAfterCHange={newGeneralTotalAfterCHange}
            />
          </div>
        ))}
      </div>
      <br />
      <h3>Total: {props.total} $$</h3>
      <h3>New Total: {count} $$</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
    total: state.cart.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    ),
  };
};

export default connect(mapStateToProps)(Cart);
