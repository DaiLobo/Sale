import { Nav } from "./styles";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import { Badge } from "@material-ui/core";
import { useCart } from "../../../hooks/useCart";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { quantityProduct } = useCart();
  const history = useNavigate();

  return (
    <Nav>
      <Logo />
      <IconButton
        disabled={quantityProduct === 0}
        onClick={() => history("/carrinho")}
      >
        <Badge color="primary" badgeContent={quantityProduct}>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  );
}
