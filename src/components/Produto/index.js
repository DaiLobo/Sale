import { Container } from "./styles";
import { memo } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../../hooks/useCart";

function Produto({ nome, foto, id, valor, unidade }) {
  const { cart, addProduct, removeProduct } = useCart();

  const productCart = cart.find((itemCart) => itemCart.id === id);

  return (
    <Container>
      <div>
        <img src={`/assets/${foto}.png`} alt={`foto de ${nome}`} />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton
          disabled={!productCart}
          color="secondary"
          onClick={() => removeProduct(id)}
        >
          <RemoveIcon />
        </IconButton>
        {productCart?.quantity || 0}
        <IconButton
          color="primary"
          onClick={() => {
            addProduct({ nome, foto, id, valor });
          }}
        >
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  );
}

export default memo(Produto);
