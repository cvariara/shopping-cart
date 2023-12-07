import React, { useEffect, useState } from "react";

import Item from "../components/Item";

const Shop = ({ items: initialItems, error, loading }) => {
  const [items, setItems] = useState();

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems])

  if (error) return <p className="text-4xl text-red-600 text-center mt-14">A network error was encountered</p>;
  if (loading) return <p className="text-4xl text-blue-600 text-center mt-14">Loading...</p>;

  return (
    <section id="shop">
      <div className="max-w-7xl w-full px-8 py-8 my-0 mx-auto">
        <header className="flex justify-start">
          <h1 className="text-4xl text-blue-600 font-bold">All Items</h1>
        </header>
        <div className="flex flex-wrap justify-between mt-6 mx-[-8px]">
          {items && items.map((item) => {
            return <Item item={item} key={item.id} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Shop;