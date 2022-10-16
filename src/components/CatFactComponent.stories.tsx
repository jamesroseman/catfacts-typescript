import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import CatFactComponent, { CatFactComponentProps } from './CatFactComponent';

export default {
  component: CatFactComponent,
} as ComponentMeta<typeof CatFactComponent>;

const Template: ComponentStory<typeof CatFactComponent> = (args: CatFactComponentProps) => 
  <CatFactComponent fact={args.fact} />;

export const Primary = Template.bind({});

Primary.args = {
  fact: 'This is a cat fact.',
}