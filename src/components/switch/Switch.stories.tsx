import React, {useState} from 'react';
import { Story } from "@storybook/react";
import {OSTypes} from "../../types";
import Switch, {SwitchProps} from "./Switch";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Switch',
    component: Switch,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        os: { control: 'radio' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Type = Template.bind({
});
Type.args = {
    os: OSTypes.Auto
}

const DemoTemplate: Story<{}> = (args) =>
    <>
        <p>
            <Switch />
            <Switch defaultChecked/>
            <Switch defaultChecked size={'small'}/>
        </p>
    </>
export const Demo = DemoTemplate.bind({});



