import React from "react";
import "./featuredProducts.scss";
import Card from "../card/Card";
import useFetch from "../../hooks/useFetch";
const FeaturedProducts = ({ type }) => {
  // `http://localhost:1337/api`
  // "http://localhost:1337/api/products?populate=*"
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  // console.log(type);
  // console.log(data, loading, error);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          accusamus obcaecati sunt laboriosam cumque ipsam, dolore iure ullam
          illum officiis debitis in vel vero molestias itaque atque maxime
          voluptatum similique?
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading..."
          : data?.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
