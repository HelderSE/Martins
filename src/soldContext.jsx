import React,{ createContext, useState, useEffect } from "react";





const SoldContext = createContext();

export const SoldProvider = ({ children }) => {
  let finished = 0;
  const [items, setItems] = useState(() => {
    return JSON.parse(window.localStorage.getItem("items")) || [0, 0, 0];
  }); // [queijo,chouriço,chouriçoEQueijo]

  useEffect(() => {
    try {
      const storedItems = JSON.parse(window.localStorage.getItem("items"));
      if (Array.isArray(storedItems)) {
        setItems(storedItems);
      }
    } catch (error) {
      console.error("Error loading data from local storage:", error);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const increaseSold = (id, quant) => {
    setItems((prevState) => {
      const updatedItems = [...prevState];
      updatedItems[id] += quant;
      return updatedItems;
    });
  };
  const decreaseSold = (id, quant) => {
    setItems((prevState) => {
      const updatedItems = [...prevState];
      updatedItems[id] -= quant;
      finished += 1;
      return updatedItems;
    });
  };

  console.log(finished);
  return (
    <SoldContext.Provider value={{ items, increaseSold, decreaseSold }}>
      {children}
    </SoldContext.Provider>
  );
};

export default SoldContext;
