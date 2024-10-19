import PropTypes from "prop-types";
import { Container, NameText, Progress, UserPicture } from "./styles";

const UserInfo = ({ nome, image, percentual }) => {
  return (
    <Container>
      <UserPicture src={image} alt={`${nome}'s picture`} />
      <div>
        <NameText>{nome}</NameText>
        <Progress $percentual={percentual} />
      </div>
    </Container>
  );
};

// Definindo propTypes
UserInfo.propTypes = {
  nome: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  percentual: PropTypes.number.isRequired,
};

export { UserInfo };
