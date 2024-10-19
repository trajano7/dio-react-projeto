import PropTypes from "prop-types";
import { ButtonContainer } from "./styles";

const Button = ({ children, variant = "primary", onClick }) => {
  return <ButtonContainer $variant={variant} onClick={onClick}>{children}</ButtonContainer>;
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired, 
  variant: PropTypes.oneOf(["primary", "secondary"]), 
  onClick: PropTypes.func,
};
