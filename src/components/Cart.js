const Cart = (props) => {
  console.log(props);
  const { name, tax, subtotal, total, ProductSelected } = props;
  return (
    <div className="card">
      {name && ProductSelected}
      <h3> Card</h3>
      <div>Subtotal: ${subtotal}</div>
      <div>Tax: ${tax}</div>
      <div>Total: ${total}</div>
    </div>
  );
};

export default Cart;
