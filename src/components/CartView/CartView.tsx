import React from "react";
import { ContextCard } from "../../Context/CardContext";

const CartView = () => {
  const { cart, removeItem, totalOrder, clearItems, totalUnits } =
    React.useContext(ContextCard);
  return (
    <div>
      <h1>CartView Hola carrito</h1>
      <h4>{JSON.stringify(cart,null,2)} </h4>
      <h3>Total Pedido = {totalOrder}</h3>
      <h3>Total de Unidades = {totalUnits}</h3>
    </div>
  );
};

export default CartView;
