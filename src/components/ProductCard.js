import React from "react";

export const ProductCard = (props) => {
    const { name, price, img, description} = props.product
  return (
    <div onClick={() => props.handleProductSelected(props.product)}>
      <div>{name}</div>
      <div>
        Price: ${(price).toFixed(2)}
        {/* Price:${Math.round((price + Number.EPSILON) * 100) / 100} */}
        </div>
      <button 
    //   onClick={props.addToCard} 
      type="submit">
        Add To Cart
      </button>
      <img src={img} alt={name} />
      <p>{description}</p>
    </div>
  );
};
export default ProductCard;
