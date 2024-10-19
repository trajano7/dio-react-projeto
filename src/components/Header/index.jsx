import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dio.png";

import Button from "../Button";

import {
  Container,
  Wrapper,
  BuscarInputContainer,
  Input,
  Row,
  Menu,
  MenuRight,
  UserPicture,
} from "./styles";
import PropTypes from "prop-types";

const Header = ({ autenticado = false }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" onClick={() => navigate("/login")}>Entrar</Button>
              <Button title="Cadastrar" onClick={() => navigate("/cadastrar")}>Cadastrar</Button>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header ;

Header.propTypes = {
  autenticado: PropTypes.bool,
};
