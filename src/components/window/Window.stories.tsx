import React, {useState} from 'react';
import { Story } from "@storybook/react";
import Window from "./Window";
import Sidebar from "../sidebar/Sidebar";
import Toolbar from "../toolbar/Toolbar";
import TitleBar from "../title-bar/TitleBar";
import Button from "../button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Window',
    component: Window,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};


const DemoTemplate: Story<{}> = (args) =>
    <>
        <Window>
            <h1>test</h1>
        </Window>
    </>
export const Demo = DemoTemplate.bind({});

const TitleBarDemoTemplate: Story<{}> = (args) =>
    <>
        <Window>
            <TitleBar title={'Title'} />
            <h1>test</h1>
        </Window>
    </>
export const TitleBarDemo = TitleBarDemoTemplate.bind({});


const ToolbarDemoTemplate: Story<{}> = (args) =>
    <>
        <Window>
            <Toolbar title={'Title'} subtitle={'Subtitle'} >
                <Button>OK</Button>
            </Toolbar>
            <h1>test</h1>
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
const SidebarDemoTemplate: Story<{}> = (args) =>
    <>
        <Window>
            <Sidebar>
                <Button>OK</Button>
            </Sidebar>
            <Toolbar title={'Title'} ></Toolbar>
            <h1>Window Content</h1>
        </Window>
    </>
export const SidebarDemo = SidebarDemoTemplate.bind({});



