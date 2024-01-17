import React from "react";
import "./cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetItem } from "../../redux/cartSlice";
const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(removeItem(productId));
  };
  const total = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };
  // console.log(products)
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img
            src={"http://localhost:1337" + item.img}
            alt={"http://localhost:1337" + item.img}
          />
          <div className="details">
            <h1>{item?.title}</h1>
            <p>{item?.desc}...</p>
            <div className="price">
              {item.quantity} X $ {item?.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => handleRemove(item.id)}
          />
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>
          <b>$ {total()}</b>
        </span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetItem())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
