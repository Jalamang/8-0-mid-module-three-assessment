const Cart = (props) => {
    const { tax, subtotal, total, ProductSelected } = props;
    const { productData } = props
    const displayName = productData.map(name =>name.name)
    console.log(productData);
  return (
    <div className="cart">
        <h3> Card</h3>
      {displayName && ProductSelected}
      
      <div>Subtotal: ${subtotal}</div>
      <div>Tax: ${tax}</div>
      <div>Total: ${total}</div>
    </div>
  );
};

export default Cart;
