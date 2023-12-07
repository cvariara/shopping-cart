import React from "react";
import { Link } from "react-router-dom";

import Intro from "../assets/e-commerce.png";

const Landing = () => {
  return (
    <section>
      <header>
        <div className="flex justify-around max-w-8xl my-4 mx-auto">
          <div className="flex flex-col items-center justify-center max-w-4xl">
            <h1 className="text-6xl text-center text-blue-600 font-bold">America's number 1 online fake store</h1>
            <h2 className="text-3xl mt-10 font-bold">Shop now with 
              <span className="text-blue-600"> Fake Store</span>
            </h2>
            <Link to="/shop">
              <button className="mt-10 py-3 px-4 bg-blue-600 rounded-md text-white text-2xl">Browse Items</button>
            </Link>
          </div>
          <figure className="w-1/3">
            <img className="" src={Intro} alt="" />
          </figure>
        </div>
      </header>
    </section>
  )
}

export default Landing;