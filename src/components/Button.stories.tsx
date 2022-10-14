import { Meta, StoryObj } from "@storybook/react";
import{ Button, ButtonProps} from "./Button";

export default {
  title: "Components/Button",
  component: Button ,
  args: {
    children: "Create",
  },
  decorators:[
    (Story) => {
      return(
        <div className="w-96">
          {Story()}
        </div>
      )
    }
  ]
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  argTypes:{
    asChild:{
      table: {
        disable: true
      }
    }
  }
};
export const Small: StoryObj<ButtonProps> = {
  args: { 
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
export const Large: StoryObj<ButtonProps> = {
  args: {
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: <a>Text with p</a>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
