import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tag from "./Tag";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "CodeableSchool/Tag",
  component: Tag,
  args: {
    label: "Tag",
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Tag",
};
