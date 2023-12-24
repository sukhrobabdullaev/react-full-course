const ProductItem = ({ mahsulot, setMahsulot }) => {
  const handleDelete = () => {
    console.log("deleted....");
    setMahsulot([]);
  };

  const handleRefresh = () => {
    setMahsulot([
      {
        id: 1,
        img: "https://images.uzum.uz/ci7cbdf5d7kom1ti2ndg/original.jpg",
        name: "Noutbuk Davon Celeron - J3455, 8 GB RAM, 512 GB SSD, DDR4, FullHD IPS",
        rating: 4.6,
        deletePrice: 6000000,
        price: 3850000,
      },
      {
        id: 2,
        img: "https://images.uzum.uz/ck5fmekjvf2qegt493cg/original.jpg",
        name: "Noutbuk Lenovo IdeaPad 3, 15,6 FullHD, 8GB DDR4, 256 GB SSD, Intel Core i3-1115G4, FreeDOS",
        rating: 5.0,
        deletePrice: 6730000,
        price: 4774000,
      },
      {
        id: 3,
        img: "https://images.uzum.uz/ck402o3k9fq74920qf00/original.jpg",
        name: 'Noutbuk HP 15s Intel Core i3-1215U, 4 GB DDR4 RAM, 256 GB SSD 15.6" HD',
        rating: 5.0,
        deletePrice: 6999000,
        price: 4125000,
      },
      {
        id: 4,
        img: "https://images.uzum.uz/clc3jfl6sfhgee0m73dg/original.jpg",
        name: "Noutbuk HP Core i5-1235U/ DDR4 8GB /SSD 512GB/ 15,6 FHD/ Intel Iris Xe Graphics/ Backlit",
        rating: 5.0,
        deletePrice: 8750000,
        price: 7250000,
      },
    ]);
  };

  return (
    <>
      <div className="flex">
        {mahsulot.map((el) => {
          return (
            <div className="card" key={el.id}>
              <img src={el.img} alt="card img" />
              <div className="card-content">
                <p className="card_name truncate-text">{el.name}</p>
                <span className="card_rating"> ⭐ {el.rating} baho</span>
                <div className="card_price">
                  <p>{el.deletePrice} so'm</p>
                  <p>{el.price} so'm</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={handleDelete}>DELETE all</button>
      <button onClick={handleRefresh}>REFRESH all</button>
    </>
  );
};

export default ProductItem;
