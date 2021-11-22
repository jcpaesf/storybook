import React from "react";
import { Meta, Story } from "@storybook/react";
import { colors } from "../../styles/colors";

import Button from "./";
import { IButtonProps } from "./ButtonComponent.types";

const palleteColors = Object.values(colors);

export default {
  title: "Button",
  component: Button,
  argTypes: {
    transparent: {
      control: {
        type: "boolean",
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: { type: "boolean" },
    },
    color: {
      options: palleteColors,
      control: { type: "select" },
    },
    fontColor: {
      options: palleteColors,
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      color: { type: "radio" },
    },
    children: {
      control: {
        type: "text",
      },
    },
    onClick: { action: "clicked" },
  },
} as Meta<IButtonProps>;

const ButtonStory: Story<IButtonProps> = ({
  children,
  ...rest
}: IButtonProps) => <Button {...rest}>{children}</Button>;

export const Default = ButtonStory.bind({});

Default.args = {
  color: colors.green,
  fontColor: colors.white,
  transparent: false,
  loading: false,
  children: "Novo",
  disabled: false,
  size: "medium",
  onClick: () => {},
};
