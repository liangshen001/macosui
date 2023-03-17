import React, {useState} from 'react';
import { Story } from "@storybook/react";
import Toolbar from "../components/toolbar/Toolbar";
import Button from "../components/button/Button";
import Window from "../components/window/Window";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Toolbar',
    component: Toolbar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};


const ToolbarDemoTemplate: Story<{}> = (args) =>
    <>
        <Window>
            <Toolbar title={'Title'}/>
            <h1>Window Content</h1>
            <h1>Window Content</h1>
            <h1>Window Content</h1>
            <h1>Window Content</h1>
            <h1>Window Content</h1>
            <h1>Window Content</h1>
            <h1>Window Content</h1>
            <h1>Window Content</h1>
            <h1>Window Content</h1>
            <h1>Window Content</h1>
            <h1>Window Content</h1>
            <h1>Window Content</h1>
            <h1>Window Content</h1>
            <h1>Window Content</h1>
        </Window>
    </>
export const ToolbarDemo = ToolbarDemoTemplate.bind({});
const ToolbarMonoDemoTemplate: Story<{}> = (args) =>
    <>
        <Window>
            <Toolbar title={'Title'} mono>
                <Button>OK</Button>
            </Toolbar>
            <h1>test</h1>
        </Window>
    </>
export const ToolbarMonoDemo = ToolbarMonoDemoTemplate.bind({});



