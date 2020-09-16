import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevState) => [
      ...prevState,
      {
        key: item.id,
        title: item.title,
        price: item.price,
        description: item.description,
        option: item.option,
      },
    ]);
    console.log(item);
  };

  const itemsWithQuantities = (items) => {
    return items.reduce((acc, item) => {
      const found = acc.find((_item) => _item[0].key === item.key);

      if (found) {
        found[0].quantity++;
      } else {
        acc.push([
          {
            quantity: 1,
            key: item.key,
            ...item,
          },
        ]);
      }
      return acc;
    }, []);
  };

  function totalItems(items) {
    if (items.length === 0) {
      return 0;
    } else {
      return items.reduce((acc, x) => acc + x[0].quantity, 0);
    }
  }

  function oneUpItem(item) {
    setCart((prevState) => [...prevState, { quantity: item.quantity++ }]);
    console.log(item, "mas");
  }

  function oneLessItem(item) {
    setCart((prevState) => [...prevState, { quantity: item.quantity-- }]);
    console.log(item, "menos");
  }

  function removeItem(item) {
    // const filteredCart = cart.filter((items) => items !== item);
    cart.splice(item, 1);
    setCart([cart]);
    console.log(cart);
    return;
  }

  return (
    <CartContext.Provider
      value={{
        cart: itemsWithQuantities(cart),
        setCart,
        addToCart,
        totalItems,
        oneLessItem,
        oneUpItem,
        removeItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
