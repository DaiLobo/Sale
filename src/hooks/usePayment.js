import { useContext } from "react";
import { PaymentContext } from "../context/Pagamento";

export const usePayment = () => {
  return useContext(PaymentContext);
};
