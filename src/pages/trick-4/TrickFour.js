import React, { useState } from "react";

const TrickFour = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "black sneakers", quantity: 1 },
    { id: 2, title: "black sneakers", quantity: 2 },
  ]);
  const increment = (id) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
    });
  };
  return <div>TrickFour</div>;
};

export default TrickFour;
