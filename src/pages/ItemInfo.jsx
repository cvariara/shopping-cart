import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const ItemInfo = ({ items, error, loading, addItemsToCart }) => {
  const { id } = useParams();

  if (error)
    return (
      <p className="text-4xl text-red-600 text-center mt-14">
        A network error was encountered
      </p>
    );

  if (loading)
    return (
      <p className="text-4xl text-blue-600 text-center mt-14">Loading...</p>
    );

  const item = items.find((item) => +item.id === +id);

  return (
    <section>
      <div className="max-w-7xl w-full px-8 py-8 my-0 mx-auto">
        <div className="flex items-center text-4xl font-bold gap-2">
          <Link to="/shop">
            <ArrowBackIcon sx={{ fontSize: 36, fontWeight: 700 }}></ArrowBackIcon>
          </Link>
          <Link to="/shop">
            <span className="hover:underline">Back</span>
          </Link>
        </div>
        <div className="md:flex mt-8">
          <figure className="w-[40%]">
            <img
              className="max-h-[450px] max-w-full flex self-center"
              src={item.image}
              alt={item.title}
            />
          </figure>
          <div className="mt-4 md:mt-0 w-[60%]">
            <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
            <h4 className="mb-8 text-lg">${item.price.toFixed(2)}</h4>
            <div className="">
              <h2 className="text-2xl font-bold mb-4">Summary</h2>
              <p className="mb-8">{item.description}</p>
            </div>
            <button className="py-3 px-4 bg-blue-600 rounded-md text-white text-2xl" onClick={() => addItemsToCart(item)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemInfo;
