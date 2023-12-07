import React from "react";
import { Link } from "react-router-dom";

import EmptyCart from "../assets/empty.jpg";

const Cart = ({ numberOfItems, cart, removeItem, updateCart, totals }) => {
  return (
    <section>
      <div className="max-w-7xl w-full px-8 py-8 my-0 mx-auto">
        <div>
          <h1 className="text-4xl font-bold mb-4">Cart</h1>
        </div>
        <div className="bg-blue-600 text-white px-4 py-2 flex" id="header">
          <span className="w-[60%] flex items-center text-lg">Item</span>
          <span className="flex items-center w-[40%] text-lg">Quantity</span>
          <span className="flex items-center justify-end w-full max-w-[100px] text-xl">
            Price
          </span>
        </div>
        <div id="body">
          {numberOfItems <= 0 ? (
            <div className="flex flex-col justify-center items-center">
              <figure className="max-w-[600px] p-10">
                <img
                  className="w-full h-full"
                  src={EmptyCart}
                  alt="empty cart"
                />
              </figure>
              <h2 className="text-center font-bold text-3xl mb-8">
                You don't have any items in your cart!
              </h2>
              <Link to="/shop">
                <button className="py-3 px-4 bg-blue-600 rounded-md text-white text-2xl">
                  Browse Items
                </button>
              </Link>
            </div>
          ) : (
            <div>
              {cart.map((item) => {
                const price = +item.price * +item.quantity;
                return (
                  <div key={item.id} className="flex my-6">
                    <div className="flex w-[60%]">
                      <figure className="max-w-[90px] border-1 border-gray-800">
                        <img
                          className="w-full h-full"
                          src={item.image}
                          alt={item.title}
                        />
                      </figure>
                      <div className="flex flex-col justify-center py-2 px-4">
                        <span className="text-xl mb-4">{item.title}</span>
                        <span className="mb-4">${item.price.toFixed(2)}</span>
                        <button
                          className="text-red-700 items-start w-14"
                          onClick={() => removeItem(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="w-[40%] flex items-center">
                      <input
                        className="p-2 w-16 border-black border-2 rounded-sm"
                        type="number"
                        min={1}
                        max={99}
                        value={item.quantity}
                        onChange={(e) => updateCart(item, e.target.value)}
                      />
                    </div>
                    <div className="flex items-center justify-end w-full max-w-[100px] text-xl">
                      ${price.toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {numberOfItems > 0 && (
          <div className="flex flex-col items-end max-w-[300px] w-full ml-auto" id="total">
            <div className="pt-6 border-t-2 border-blue-500 flex justify-between w-full mb-6 text-lg" id="sub">
              <span>Subtotal:</span>
              <span>${totals.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between w-full mb-6 text-lg" id="tax">
              <span>Tax:</span>
              <span>${totals.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between w-full mb-6 text-lg" id="total">
              <span>Total:</span>
              <span>${totals.total.toFixed(2)}</span>
            </div>
            <button className="w-full py-3 px-4 bg-blue-600 rounded-md text-white text-lg">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
