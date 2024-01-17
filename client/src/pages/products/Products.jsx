import React, { useState } from "react";
import List from "../../components/productsList/List";
import { useParams } from "react-router-dom";
import "./products.scss";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const catId = parseInt(useParams().id);
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  // console.log(selectedSubCats);
  // console.log(data);
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>

          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={() => setSort("asc")}
            />
            <label htmlFor="asc">Price(Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="dsc"
              value="dsc"
              onChange={() => setSort("dsc")}
            />
            <label htmlFor="asc">Price(Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/3355358/pexels-photo-3355358.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCat={selectedSubCats} />
      </div>
    </div>
  );
};

export default Products;
