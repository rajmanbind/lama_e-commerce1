import React from "react";
import Card from "../card/Card";
import "./list.scss";
import useFetch from "../../hooks/useFetch";
const List = ({ catId, sort, maxPrice, subCat }) => {
  // console.log(catId, maxPrice, sort);
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCat.map(
      (item) => `&[filters][sub_categories][id]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  // console.log(data);
  return (
    <div className="list">
      {loading
        ? "loading..."
        : data?.length === 0
        ? "Empty..."
        : data?.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
};

export default List;
