import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {clearCart, setQuantity} from "../store/reducers/cart";



const ChechOut = () => {
  const { products, total } = useSelector((s) => s.cart);
  const dispatch = useDispatch();


  const handlePlaceOrder = () => {
    // send the request to the server
    // clear cart
    dispatch(clearCart());
    alert('We recieved your order, and we are working on it.');
};

  return (
    <div>
      <h1>Check Out Page </h1>
<br/><br/>
      {/* //first part from checkout */}
      <div className="col-50">
        <h3>Billing Address</h3>
        <label htmlFor="fname">
          <i className="fa fa-user"></i> Full Name
        </label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="John M. Doe"
        ></input>
        <label htmlFor="email">
          <i className="fa fa-envelope"></i> Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="john@example.com"
        ></input>
        <label htmlFor="adr">
          <i className="fa fa-address-card-o"></i> Address
        </label>
        <input
          type="text"
          id="adr"
          name="address"
          placeholder="542 W. 15th Street"
        ></input>
        <label htmlFor="city">
          <i className="fa fa-institution"></i> City
        </label>
        <input type="text" id="city" name="city" placeholder="New York"></input>

        <div className="row">
          <div className="col-50">
            <label htmlFor="state">State</label>
            <input type="text" id="state" name="state" placeholder="NY"></input>
          </div>
          <div className="col-50">
            <label htmlFor="zip">Zip</label>
            <input type="text" id="zip" name="zip" placeholder="10001"></input>
          </div>
        </div>
      </div>

      {/* //seconed part from checkout */}
      <div className="quickcheckout-content cart-content">
        {products.map((product, index) => (
          <table key={product.id} className="quickcheckout-cart">
            <thead>
              <tr>
                <td className="image">Image</td>
                <td className="name">Product Name</td>
                <td className="price1 hidden-xs hidden-sm">Price</td>
                <td className="quantity">Quantity</td>
                <td className="total text-right">Total</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="image">
                  <img
                    src={product.image}
                    alt=""
                    width="200"
                    height="150"
                  />
                </td>

                <td className="name card-body">
                  <div>{product.title}</div>
                </td>

                <td className="card-text price1 hidden-xs hidden-sm">
                  {product.price}
                </td>

                <td className="quantity">
                  <div className="qty-block">{product.qty}</div>
                </td>

                <td className="total text-right">
                  { product.total} $
                </td>
              </tr>
            </tbody>
          </table>
        ))}

        <table className="table table-bordered total-list margin-b0">
          <tbody>
            <tr>
              <td className="text-left" colSpan="4">
                <b>Total:</b>
              </td>
              <td className="text-right">{total} $</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary btn-block" 
       onClick={handlePlaceOrder}
       >Pay order</button>

    </div>
    
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.cart,
//     total: state.cart.reduce(
//       (total, item) => total + item.quantity * item.product.price,
//       0
//     ),
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//       clearCart: () => dispatch(clearCart()),
//   };
// }

export default ChechOut;
