import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ItemInfo from "./pages/ItemInfo";
import Cart from "./pages/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server errror");
        }
        return response.json();
      })
      .then((response) => setItems(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const addItemsToCart = (item) => {
    const duplicate = cart.find((cartItem) => cartItem.id === item.id);

    setCart((prevCart) => {
      if (duplicate) {
        return prevCart.map((cartItem) =>
          cartItem.id === duplicate.id
            ? {
                ...cartItem,
                quantity: +cartItem.quantity + 1,
              }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const numberOfItems = () => {
    let count = 0;
    cart.forEach((item) => {
      count += +item.quantity;
    });
    return count;
  };

  const removeItem = (item) => {
    setCart((prevCart) => {
      return prevCart.filter((cartItem) => cartItem.id !== item.id);
    });
  };

  const updateCart = (item, value) => {
    setCart((prevCart) => {
      return prevCart.map((prevItem) => {
        if (prevItem.id === item.id) {
          return {
            ...prevItem,
            quantity: +value,
          };
        } else {
          return prevItem;
        }
      });
    });
  };

  const calcPrices = () => {
    let total = 0;
    cart.forEach((item) => {
      total += (item.price * item.quantity);
    })
    const subtotal = 0.9 * total;
    const tax = 0.1 * total;
    return { total, subtotal, tax };
  }

  return (
    <Router>
      <div className="min-h-screen">
        <Nav cart={numberOfItems()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop items={items} error={error} loading={loading} />}
          />
          <Route
            path="/shop/:id"
            element={
              <ItemInfo
                items={items}
                error={error}
                loading={loading}
                addItemsToCart={addItemsToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                numberOfItems={numberOfItems()}
                cart={cart}
                removeItem={removeItem}
                updateCart={updateCart}
                totals={calcPrices()}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
