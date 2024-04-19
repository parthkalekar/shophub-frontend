import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useContext } from "react";
import { Context } from "../../../utils/context";

const CartItem = () => {

  // imported from contex.js
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);

  return (
    <div className="cart-products">

       {/* displaying all cart items by using map() loop */}

      {cartItems.map((item) => (
        <div key={item?.id} className="cart-product">
          <div className="img-container">
            <img src={ process.env.REACT_APP_URL +
                item?.attributes?.img?.data[0]?.attributes?.url} alt="" />
          </div>
          <div className="prod-details">
            <span className="name">{item?.attributes?.title}</span>
            <MdClose
              className="close-btn"
              onClick={() => handleRemoveFromCart(item)}
            />
            <div className="quantity-buttons">
              <span onClick={() => handleCartProductQuantity("dec", item)}>
                -
              </span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity("inc", item)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{item?.attributes?.quantity}</span>
              <span>x</span>
              <span>&#8377;{" "}{item?.attributes?.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
