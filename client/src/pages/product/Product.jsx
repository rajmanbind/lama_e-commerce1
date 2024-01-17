import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./product.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
const Product = () => {
  const dispatch = useDispatch();
  const id = parseInt(useParams().id);
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedIMg] = useState("img");
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const [toast, setToast] = useState(false);
  const handleAdd = (data) => {
    dispatch(addToCart(data));
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 1000);
  };
  return (
    <div className="product">
      {
        <div
          className="toast"
          style={{
            top: toast ? "0px" : "-300px",
          }}
        >
          item add...
        </div>
      }
      <div className="left">
        <div className="images">
          <img
            src={
              "http://localhost:1337" +
              data?.attributes?.img?.data?.attributes?.url
            }
            alt=""
            onMouseOver={() => setSelectedIMg("img")}
            style={{ opacity: `${selectedImg === "img" ? 0.4 : 1}` }}
          />
          <img
            src={
              "http://localhost:1337" +
              data?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            onMouseOver={() => setSelectedIMg("img2")}
            style={{ opacity: `${selectedImg === "img2" ? 0.4 : 1}` }}
          />
        </div>
        <div className="mainImg">
          <img
            src={
              "http://localhost:1337" +
              data?.attributes[selectedImg]?.data?.attributes?.url
            }
            alt={
              "http://localhost:1337" +
              data?.attributes[selectedImg]?.data?.attributes?.url
            }
          />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className="price"> ${data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => (prev >= 20 ? 0 : prev + 1))}
          >
            +
          </button>
        </div>
        <button
          className="add"
          onClick={() =>
            handleAdd({
              id: data.id,
              title: data.attributes.title,
              desc: data.attributes.desc,
              price: data.attributes.price,
              img: data.attributes.img.data.attributes.url,
              quantity,
            })
          }
        >
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Pole</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-Shirt,Women,Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DECRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
