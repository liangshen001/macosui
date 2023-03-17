import React, {useEffect, useState} from 'react';
import { Story } from "@storybook/react";
import {OSTypes} from "../types";
import {Tabs, TabListProps} from "../components/tabs/Tabs";
import Button from "../components/button/Button";
import {Tab} from "../components/tabs/Tab";
import List, {Item} from "../components/list/List";
import {ListItem} from "@storybook/addon-interactions/dist/ts3.9/components/List";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tabs',
    component: Tabs,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TabListProps> = (args) => <Tabs {...args}/>;

export const Type = Template.bind({
});
Type.args = {
}

const DemoTemplate: Story<{}> = (args) => {
    const [value, setValue] = useState<any>();
    useEffect(() => {
        setTimeout(() => {
            setValue(1);
        }, 1000);
    }, []);
    return <>
        <Tabs value={value} onChange={setValue} bordered>
            <Tab label={'Output'}>
                <List>
                    <Item title={'test1'}></Item>
                    <Item title={'test2'}></Item>
                </List>
            </Tab>
            <Tab label={'Input'}>
                <List>
                    <Item title={'test3'}></Item>
                    <Item title={'test4'}></Item>
                </List>
            </Tab>
        </Tabs>
        <p></p>
        <Tabs>
            <Tab label={'Output'}>
                <h1>test</h1>
            </Tab>
            <Tab label={'Input'}>
                <h1>test2</h1>
            </Tab>
        </Tabs>
    </>
}
export const Demo = DemoTemplate.bind({});

Demo.args = {
}
