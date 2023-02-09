import React, {useState} from 'react';
import { Story } from "@storybook/react";
import Sidebar from "../sidebar/Sidebar";
import Toolbar from "../toolbar/Toolbar";
import Window from "../window/Window";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Sidebar',
    component: Sidebar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

const SidebarDemoTemplate: Story<{}> = (args) =>
    <>
        <Window>
            <Sidebar>
                <h1>Sidebar Content</h1>
            </Sidebar>
            <Toolbar title={'Title'} ></Toolbar>
            <h1>Window Content</h1>
        </Window>
    </>
export const SidebarDemo = SidebarDemoTemplate.bind({});



