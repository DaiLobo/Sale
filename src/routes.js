import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Feira } from "./pages/Feira";
import { Carrinho } from "./pages/Carrinho";
import { UserProvider } from "./context/Usuario";
import { CartProvider } from "./context/Carrinho";
import { PaymentProvider } from "./context/Pagamento";

function Router() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
        <PaymentProvider>
          <CartProvider>
            <Routes>
              <Route path="/feira" element={<Feira />} />
              <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
          </CartProvider>
        </PaymentProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default Router;
