import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Nav = ({ cart }) => {
  return(
    <nav>
      <div className="bg-blue-400 py-8 px-16 flex justify-between items-center shadow-md">
        <Link to="/">
          <h1 className="text-4xl text-white font-bold uppercase tracking-wide">Fake Store</h1>
        </Link>
        <ul className="flex gap-8 text-2xl">
          <li className="text-white font-semibold uppercase tracking-wider">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white font-semibold uppercase tracking-wider">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="relative flex items-center justify-center">
            <Link to="/cart">
              <ShoppingCartIcon className="text-white" sx={{ fontSize: 32 }} />
            </Link>
            {cart > 0 && (
            <span className="absolute top-4 left-4 bg-red-400 text-white rounded-full text-sm w-5 text-center">{+cart}</span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;