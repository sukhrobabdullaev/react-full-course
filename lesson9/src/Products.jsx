import { useState } from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: "product1.jpg",
      title: "product 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit id corrupti, mollitia facere quis sint rem quasi. Beatae, facilis!",
      price: 3000,
    },
    {
      id: 2,
      img: "product2.jpg",
      title: "product 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit id corrupti, mollitia facere quis sint rem quasi. Beatae, facilis!",
      price: 7000,
    },
    {
      id: 3,
      img: "product3.jpg",
      title: "product 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit id corrupti, mollitia facere quis sint rem quasi. Beatae, facilis!",
      price: 5000,
    },
    {
      id: 4,
      img: "product4.jpg",
      title: "product 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit id corrupti, mollitia facere quis sint rem quasi. Beatae, facilis!",
      price: 4000,
    },
    {
      id: 5,
      img: "product5.jpg",
      title: "product 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit id corrupti, mollitia facere quis sint rem quasi. Beatae, facilis!",
      price: 5000,
    },
  ]);

  const handleClear = () => {
    setProducts([]);
  };

  function handleRefresh() {
    setProducts([
      {
        id: 1,
        img: "product1.jpg",
        title: "product 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit id corrupti, mollitia facere quis sint rem quasi. Beatae, facilis!",
        price: 3000,
      },
      {
        id: 2,
        img: "product2.jpg",
        title: "product 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit id corrupti, mollitia facere quis sint rem quasi. Beatae, facilis!",
        price: 7000,
      },
      {
        id: 3,
        img: "product3.jpg",
        title: "product 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit id corrupti, mollitia facere quis sint rem quasi. Beatae, facilis!",
        price: 5000,
      },
      {
        id: 4,
        img: "product4.jpg",
        title: "product 4",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit id corrupti, mollitia facere quis sint rem quasi. Beatae, facilis!",
        price: 4000,
      },
      {
        id: 5,
        img: "product5.jpg",
        title: "product 5",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit id corrupti, mollitia facere quis sint rem quasi. Beatae, facilis!",
        price: 5000,
      },
    ]);
  }
  return (
    <>
      <div className="flex">
        {products.map((el) => {
          return (
            <ProductItem
              key={el.id}
              title={el.title}
              img={el.img}
              description={el.description}
              price={el.price}
            />
          );
        })}
        {products.length === 0 && (
          <p style={{ color: "red", fontSize: 40 }}>Topilmadi!;</p>
        )}
      </div>
      <br />
      <button onClick={handleClear}>Tozalash</button>
      <br />
      <br />
      <br />
      <button onClick={handleRefresh}>Qaytarish</button>
    </>
  );
};

export default Products;
