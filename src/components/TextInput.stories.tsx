import { Meta, StoryObj } from "@storybook/react";
import { EnvelopeSimple } from "phosphor-react";
import { TextInput, TextInputRootProps } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <EnvelopeSimple />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address" />,
    ],
  },
  decorators: [
    (Story) => {
      return <div className="w-96">{Story()}</div>;
    },
  ],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {
  argTypes: {},
};
export const Small: StoryObj<TextInputRootProps> = {
  args: {},
};
export const Large: StoryObj<TextInputRootProps> = {
  args: {},
};