import { createContext, useState } from "react";

export const PaymentContext = createContext({});

export const PaymentProvider = ({ children }) => {
  const typePayment = [
    {
      name: "Boleto",
      juros: 1,
      id: 1,
    },
    {
      name: "Cartão de Crédito",
      juros: 1.3,
      id: 2,
    },
    {
      name: "PIX",
      juros: 1,
      id: 3,
    },
    {
      name: "Crediário",
      juros: 1.5,
      id: 4,
    },
  ];
  const [paymentMethod, setPaymentmethod] = useState(typePayment[0]);

  const handleChange = (id) => {
    const chosedPayment = typePayment.find((payment) => payment.id === id);
    setPaymentmethod(chosedPayment);
  };

  return (
    <PaymentContext.Provider
      value={{ typePayment, paymentMethod, setPaymentmethod, handleChange }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
