import { createContext, useEffect, useState } from "react";
import { usePayment } from "../hooks/usePayment";
import { useUsers } from "../hooks/useUser";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantityProduct, setQuantityProduct] = useState(0);
  const [valueTotalCart, setValueTotalCart] = useState(0);

  const { paymentMethod } = usePayment();
  const { setSaldo } = useUsers();

  const changeQuantity = (id, quantity) => {
    return cart.map((itemCart) => {
      if (itemCart.id === id) itemCart.quantity += quantity;
      return itemCart;
    });
  };

  const addProduct = (newProduct) => {
    const haveProduct = cart.some((itemCart) => itemCart.id === newProduct.id);
    if (!haveProduct) {
      newProduct.quantity = 1;
      return setCart((cartPrevious) => [...cartPrevious, newProduct]);
    }
    setCart(changeQuantity(newProduct.id, 1));
  };

  const removeProduct = (id) => {
    const product = cart.find((itemCart) => itemCart.id === id);

    if (product.quantity === 1) {
      return setCart((cartPrevious) =>
        cartPrevious.filter((itemCart) => itemCart.id !== id)
      );
    }

    setCart(changeQuantity(id, -1));
  };

  const checkout = () => {
    setCart([]);
    setSaldo((actualSaldo => actualSaldo - valueTotalCart));
  };

  useEffect(() => {
    const { newTotal, countQuantityProduct } = cart.reduce(
      (count, product) => ({
        countQuantityProduct: count.countQuantityProduct + product.quantity,
        newTotal: count.newTotal + product.valor * product.quantity,
      }),
      {
        newTotal: 0,
        countQuantityProduct: 0,
      }
    );
    setQuantityProduct(countQuantityProduct);
    setValueTotalCart(newTotal * paymentMethod.juros);
  }, [cart, paymentMethod.juros, setQuantityProduct, setValueTotalCart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addProduct,
        removeProduct,
        quantityProduct,
        valueTotalCart,
        setValueTotalCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
