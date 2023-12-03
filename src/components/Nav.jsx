import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Nav = () => {
  const [numOfItems, setNumOfItems] = useState(1)
  return(
    <nav>
      <div className="bg-white py-8 px-16 flex justify-between items-center shadow-md">
        <Link to="/">
          <h1 className="text-4xl text-blue-700 font-bold uppercase tracking-wide">Fake Store</h1>
        </Link>
        <ul className="flex gap-8 text-2xl">
          <li className="text-blue-500 font-semibold uppercase tracking-wider">
            <Link to="/">Home</Link>
          </li>
          <li className="text-blue-500 font-semibold uppercase tracking-wider">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="relative flex items-center justify-center">
            <Link to="/cart">
              <ShoppingCartIcon className="text-blue-500" sx={{ fontSize: 32 }} />
            </Link>
            {numOfItems > 0 && (
            <span className="absolute top-4 left-4 bg-red-400 text-white rounded-full text-sm w-5 text-center">{numOfItems}</span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;