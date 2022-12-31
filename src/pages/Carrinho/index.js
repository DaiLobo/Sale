import {
  Button,
  Snackbar,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Alert, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Produto from "../../components/Produto";
import { useCart } from "../../hooks/useCart";
import { usePayment } from "../../hooks/usePayment";
import { useUsers } from "../../hooks/useUser";
import {
  Container,
  Voltar,
  TotalContainer,
  PagamentoContainer,
} from "./styles";

export const Carrinho = () => {
  const history = useNavigate();

  const { saldo = 0 } = useUsers();
  const { cart, valueTotalCart, checkout } = useCart();
  const { paymentMethod, typePayment, handleChange } = usePayment();

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const total = useMemo(() => saldo - valueTotalCart, [saldo, valueTotalCart]);

  return (
    <Container>
      <Voltar onClick={() => history(-1)} />
      <h2>Carrinho</h2>
      {cart.map((product) => (
        <Produto {...product} key={product.id} />
      ))}
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
          value={paymentMethod.id}
          onChange={(event) => handleChange(event.target.value)}
        >
          {typePayment.map((payment) => (
            <MenuItem key={payment.id} value={payment.id}>
              {payment.name}
            </MenuItem>
          ))}
        </Select>
      </PagamentoContainer>
      <TotalContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>R$ {valueTotalCart.toFixed(2)}</span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ {Number(saldo).toFixed(2)}</span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span>
            <Typography
              fontFamily="Segoe UI"
              fontSize={30}
              color={total > 0 ? "black" : "red"}
            >
              R$ {total.toFixed(2)}
            </Typography>
          </span>
        </div>
      </TotalContainer>
      <Button
        color="primary"
        variant="contained"
        disabled={total < 0 || cart.length === 0}
        onClick={() => {
          checkout();
          setOpenSnackbar(true);
        }}
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          Compra feita com sucesso!
        </Alert>
      </Snackbar>
    </Container>
  );
};
