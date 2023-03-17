import React, {useState} from 'react';
import { Story } from "@storybook/react";
import Select from "../components/select/Select";
import List, {Item} from "../components/list/List";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DemoTemplate: Story<{}> = (args) => {
    const [value, setValue] = useState<any>('test1');
    console.log(value, 123);
    return <>
        {/*<Select value={value} onChange={event => setValue(event.target.value)}>*/}
        {/*    <option value={'test1'}>test1</option>*/}
        {/*    <option value={'test2'}>test2</option>*/}
        {/*</Select>*/}
        <p></p>
        <List header={'Bluetooth'}>
            <Item title={'Keychron K10'} description={'Not Connected'} actions={[
                <Select onChange={event => {
                    console.log(event.target.value)
                    setValue(1);
                }}>
                    <option value={'test1'}>test1</option>
                    <option value={'test2'}>test2</option>
                </Select>
            ]}></Item>
            <Item title={'test1'}></Item>
            <Item title={'test2'}></Item>
        </List>
    </>
};

export const Demo = DemoTemplate.bind({});



