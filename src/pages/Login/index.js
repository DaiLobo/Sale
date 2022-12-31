import { Button } from "@material-ui/core";
import { Container, Titulo, InputContainer } from "./styles";
import { Input, InputLabel, InputAdornment } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/useUser";

function Login() {
  const { name, setName, saldo, setSaldo } = useUsers();

  const history = useNavigate();

  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          required
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          type="number"
          value={saldo}
          onChange={(event) => setSaldo(event.target.value)}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        />
      </InputContainer>
      <Button
        color="primary"
        variant="contained"
        disabled={name.length < 4}
        onClick={() => history("/feira")}
      >
        Avançar
      </Button>
    </Container>
  );
}

export default Login;
