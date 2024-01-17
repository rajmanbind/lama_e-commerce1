import React from "react";
import { Link } from "react-router-dom";
import "./categories.scss";
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/5325639/pexels-photo-5325639.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <Link className="link" to="/products/1">
            <button>sale</button>
          </Link>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/19338642/pexels-photo-19338642/free-photo-of-man-in-fluffy-white-jacket-and-hood-on-head.png?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <Link className="link" to="/products/1">
            <button>hoodie</button>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <Link className="link" to="/products/1">
            <button>hat</button>
          </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://media.istockphoto.com/id/1227261494/photo/confident-smiling-man-in-black-cap-is-standing-with-arms-crossed.jpg?b=1&s=612x612&w=0&k=20&c=qFBcbHmS8iruOsZq-FSrmgEdeP0rZGIKGnhk5U5Cuik="
                alt=""
              />
              <Link className="link" to="/products/1">
                <button>t-shirt</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://media.istockphoto.com/id/175428055/photo/young-man-standing-with-arms-crossed-isolated.jpg?b=1&s=612x612&w=0&k=20&c=ZAuNCnF2eSLRcu96WIFzLazWKmdG2wnxgFGZclB1Cic="
                alt=""
              />
              <Link className="link" to="/products/1">
                <button>jeans</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/5325556/pexels-photo-5325556.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <Link className="link" to="/products/1">
            <button>jeans</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
