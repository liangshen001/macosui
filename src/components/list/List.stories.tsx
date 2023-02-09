import React, {useState} from 'react';
import { Story } from "@storybook/react";
import List, {Item, ListProps} from "./List";
import Switch from "../switch/Switch";
import Button from "../button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'List',
    component: List,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DemoTemplate: Story<{}> = (args) => <>
    <List header={'Bluetooth'}>
        <Item title={'Keychron K10'} description={'Not Connected'} actions={[
            <Switch defaultChecked />
        ]}></Item>
        <Item title={'test1'} actions={[
            <Button>Details...</Button>
        ]}></Item>
        <Item title={'test2'} actions={[
            <Button>Details...</Button>
        ]}></Item>
    </List>
    <p></p>
    <List>
        <Item title={'Keychron K10'} onClick={() => {
            console.log(1)
        }}></Item>
        <Item title={'test1'} onClick={() => {
            console.log(2)
        }}></Item>
        <Item title={'test2'} onClick={() => {
            console.log(3)
        }}></Item>
    </List>
    <p></p>
    <List>
        <Item title={'Keychron K10'} onClick={() => {
            console.log(1)
        }}></Item>
        <Item title={'test1'} onClick={() => {
            console.log(2)
        }}></Item>
        <Item title={'test2'} onClick={() => {
            console.log(3)
        }}></Item>
    </List>
</>;

export const Demo = DemoTemplate.bind({});



