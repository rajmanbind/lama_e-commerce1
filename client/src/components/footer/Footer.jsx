import React from "react";
import "./footer.scss"
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint eum
            beatae eius voluptas at dignissimos assumenda amet, quibusdam quae
            commodi libero dicta explicabo delectus expedita minima ex, esse
            odit totam!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint eum
            beatae eius voluptas at dignissimos assumenda amet, quibusdam quae
            commodi libero dicta explicabo delectus expedita minima ex, esse
            odit totam!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">BaBa Store</span>
          <span className="copyright">
            &copy; Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
