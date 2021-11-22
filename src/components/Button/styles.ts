import styled, { css } from "styled-components";

import { colors } from "../../styles/colors";
import dimensions from "../../styles/dimensions";
import { IStyledButtonProps } from "./ButtonComponent.types";

export const StyledButton = styled.button<IStyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${dimensions.componentHeight.large}px;

  background: ${(props) => (props.$transparent ? "transparent" : props.$color)};
  color: ${(props) => (props.$fontColor ? props.$fontColor : colors.white)};
  font-weight: 700;

  ${(props) =>
    props.$size === "small" &&
    css`
      width: 81px;
    `}

  ${(props) =>
    props.$size === "medium" &&
    css`
      width: 120px;
    `}

  ${(props) =>
    props.$size === "large" &&
    css`
      width: 159px;
    `}

  border-radius: 4px;
  border: 0;

  transition: filter 0.2s;

  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        filter: brightness(0.8);
      }
      cursor: pointer;
    `}

  ${(props) =>
    props.disabled &&
    css`
      background: ${colors.grayLight};
      cursor: not-allowed;
    `}

  svg {
    margin-right: 5px;
  }
`;
