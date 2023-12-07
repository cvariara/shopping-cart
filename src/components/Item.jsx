import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="w-full md:w-1/4 mb-36 ml-3">
      <Link to={`/shop/${item.id}`}>
        <figure className="min-w-[260px] border-2 border-gray-700 rounded-md h-full flex justify-center items-center">
          <img
            className="max-h-[350px] max-w-full"
            src={item.image}
            alt={item.title}
          />
        </figure>
      </Link>
      <div className="mt-1 text-lg hover:underline">
        <Link to={`/shop/${item.id}`}>{item.title}</Link>
      </div>
      <div>${item.price.toFixed(2)}</div>
    </div>
  );
};

export default Item;
