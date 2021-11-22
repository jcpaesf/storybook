import React from "react";

import { Loading as LoadingStyle } from "./styles";

import { ILoadingProps } from "./LoadingComponent.types";

const Loading = ({ color }: ILoadingProps) => (
  <LoadingStyle data-testid="tst-loading" color={color} />
);

export default Loading;
