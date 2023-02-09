import React, {useState} from 'react';
import { Story } from "@storybook/react";
import Slider from "./Slider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Slider',
    component: Slider,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};


const DemoTemplate: Story<{}> = (args) =>
    <>
        <Slider />
    </>
export const Demo = DemoTemplate.bind({});




