import { Container, Header, Lista } from "./styles";
import feira from "./feira.json";

import NavBar from "./NavBar";
import Produto from "../../components/Produto";
import { useUsers } from "../../hooks/useUser";

export const Feira = () => {
  const { name, saldo } = useUsers();

  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá! {name}</h2>
          <h3> Saldo: R$ {saldo}</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <Lista>
        <h2>Produtos:</h2>
        {feira.map((produto) => (
          <Produto {...produto} key={produto.id} />
        ))}
      </Lista>
    </Container>
  );
};
