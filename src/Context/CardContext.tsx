import * as React from "react";

export interface ICartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  altText: string;
  rating: { rate: number; count: number };
  stock: number;
  quantity: number;
}

export const ContextCard = React.createContext({} as ICartItem | number | any);

const CardContext: React.FC<any> = ({ children }): JSX.Element => {

  const [quantity, setQuantity] = React.useState<number>(0);
  const [productObj, setProductObj] = React.useState<any>();
  const [cart, setCart] = React.useState<ICartItem[]>([{} as ICartItem]);
  const [totalOrder, setTotalOrder] = React.useState<number>(0);
  const [totalUnits, setTotalUnits] = React.useState<number>(0);

  const isEmpty = (val: any) =>
    val == null || !(Object.keys(val) || val).length;
  const isInCart = (val: any, id: number) =>
    val.some((item: { id: number }) => item.id === id);
  const removeItem = (val: any, id: number) =>
    val.filter((item: { id: number }) => item.id !== id);
  const clearItems = (val: any) => (val.lenght = 0);
  const totalPrice = (val: any) =>
    val.reduce((_total: number, item: { price: number }) => item.price + _total, 0);
  const totalQtty = (val: any) =>
    val.reduce((_total: number, item: { quantity: number }) => item.quantity + _total, 0);

  const addItem = (item: ICartItem, qtty: number) => {
    console.log("Cart Inicio",cart)
    item.quantity = qtty;
    if (!isEmpty(item) && qtty > 0 && cart.length === 1) {
      const newCart = [...cart];
      if(!isInCart(newCart, item.id)) {
        newCart.map(dato => {
          dato.id = item.id;
          dato.title = item.title;
          dato.price = item.price;
          dato.description = item.description;
          dato.category = item.category;
          dato.image = item.image;
          dato.altText = item.altText
          dato.rating = item.rating;
          dato.stock =  item.stock;
          dato.quantity = item.quantity;
          return dato
        });
        setCart([...newCart]);
      } else if (isInCart(cart, item.id)) {
        const newCart = [...cart];
        newCart.map(dato => {
          if(dato.id === item.id) {
            dato.quantity = dato.quantity + item.quantity;
          }
          return dato
        });
        setCart([...newCart]);
      }
    }
    setTotalOrder(totalPrice(cart));
    setTotalUnits(totalQtty(cart));
    console.log("Al final de la AddItem ",cart)
  };


  return (
    <ContextCard.Provider
      value={{
        productObj: productObj,
        setProductObj: setProductObj,
        quantity: quantity,
        setQuantity: setQuantity,
        addItem: addItem,
        removeItem: removeItem,
        totalOrder: totalOrder,
        clearItems:clearItems,
        totalUnits: totalUnits,
      }}
    >
      {children}
    </ContextCard.Provider>
  );
};
export default CardContext;
