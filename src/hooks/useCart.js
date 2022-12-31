import { useContext } from "react";
import { CartContext } from "../context/Carrinho";

export const useCart = () => {
  return useContext(CartContext);
};
