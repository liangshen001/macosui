import React, {useState} from 'react';
import { Story } from "@storybook/react";
import Window from "../components/Window/Window";
import Sidebar from "../components/Window/Sidebar";
import Toolbar from "../components/Window/Toolbar";
import Button from "../components/button/Button";

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
            <div>Window Content</div>
        </Window>
    </>
export const Demo = DemoTemplate.bind({});

const TitleBarDemoTemplate: Story<{}> = (args) =>
    <>
        <Window>
            <div>Window Content</div>
        </Window>
    </>
export const TitleBarDemo = TitleBarDemoTemplate.bind({});


const ToolbarDemoTemplate: Story<{}> = (args) =>
    <>
        <Window title={'Title'}>
            <Toolbar subtitle={'Subtitle'} >
                <Button>OK</Button>
            </Toolbar>
            <div>Window Content</div>
        </Window>
    </>
export const ToolbarDemo = ToolbarDemoTemplate.bind({});
const ToolbarMonoDemoTemplate: Story<{}> = (args) =>
    <>
        <Window title={'Title'}>
            <Toolbar mono>
                <Button>OK</Button>
            </Toolbar>
            <div>Window Content</div>
        </Window>
    </>
export const ToolbarMonoDemo = ToolbarMonoDemoTemplate.bind({});
const SidebarDemoTemplate: Story<{}> = (args) =>
    <>
        <Window title={'Title'}>
            <Sidebar list={[{title: 'Section Title'}, {title: 'Section Title2'}, {title: 'Section Title2'}, {title: 'Section Title2'}]} />
            <Toolbar />
            <div>Window Content</div>
        </Window>
    </>
export const SidebarDemo = SidebarDemoTemplate.bind({});



