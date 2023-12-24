import React, { useState } from "react";
import ProductItem from "./ProductItem";
import { products } from "../data";

const Products = () => {
  const [mahsulot, setMahsulot] = useState(products);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>Products</h1>
      <ProductItem mahsulot={mahsulot} setMahsulot={setMahsulot} />
    </div>
  );
};

export default Products;
