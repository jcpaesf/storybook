import styled from "styled-components";

import { ILoadingProps } from "./LoadingComponent.types";

export const Loading = styled.div<ILoadingProps>`
  width: 25px;
  height: 25px;
  border: 2px solid transparent;
  border-top-color: #0e0e0e;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  ${(props) => props.color && `border-top-color: ${props.color}`};

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
