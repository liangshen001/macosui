import React, {useState} from 'react';
import { Story } from "@storybook/react";
import TitleBar from "../title-bar/TitleBar";
import Window from "../window/Window";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'TitleBar',
    component: TitleBar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};


const TitleBarDemoTemplate: Story<{}> = (args) =>
    <>
        <Window>
            <TitleBar title={'Title'} />
            <h1>Window Content</h1>
        </Window>
    </>
export const TitleBarDemo = TitleBarDemoTemplate.bind({});




