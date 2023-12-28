const ProductItem = ({ title, img, description, price }) => {
  return (
    <div>
        <img src={img} alt={img} width={200} />
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{price} som </span>
    </div>
  );
};

export default ProductItem;
