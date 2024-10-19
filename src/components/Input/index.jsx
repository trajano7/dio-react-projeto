import { Controller } from "react-hook-form";

import { InputContainer, InputText, IconContainer } from "./styles";
import PropTypes from "prop-types";

const Input = ({ leftIcon, name, control, ...rest }) => {
  return (
   
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>

    
  );
};

export default Input;
Input.propTypes = {
  leftIcon: PropTypes.element,
  name: PropTypes.string,
  control: PropTypes.object.isRequired,
};
