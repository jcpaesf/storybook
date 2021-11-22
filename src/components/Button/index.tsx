import { FunctionComponent } from "react";

import { colors } from "../../styles/colors";
import Loading from "../Loading";
import { IButtonProps } from "./ButtonComponent.types";
import { StyledButton } from "./styles";

const Button: FunctionComponent<IButtonProps> = ({
  color,
  fontColor,
  transparent,
  children,
  loading,
  size = "large",
  ...rest
}) => {
  return (
    <StyledButton
      $color={color}
      $size={size}
      $transparent={transparent}
      $fontColor={fontColor}
      {...rest}
    >
      {loading ? <Loading color={colors.white} /> : <>{children}</>}
    </StyledButton>
  );
};

export default Button;
