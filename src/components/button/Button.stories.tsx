import React, {useState} from 'react';
import { Story } from "@storybook/react";
import Button, {ButtonProps} from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        os: { control: 'radio' },
        variant: { control: 'radio' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ButtonProps> = (args) => <Button {...args} >Cancel</Button>;

export const Type = Template.bind({
});
Type.args = {
    variant: 'primary'
}

const DemoTemplate: Story<{}> = (args) =>
    <>
        <p>
            <Button>Label</Button>
            <Button variant={'secondary'}>Label</Button>
        </p>
        <p>
            <Button disabled>Label</Button>
            <Button disabled variant={'secondary'}>Label</Button>
        </p>
        <p style={{display: 'flex'}}>
            <Button block>Cancel</Button>
            <Button variant={'secondary'} block>OK</Button>
        </p>
    </>
export const Demo = DemoTemplate.bind({});



