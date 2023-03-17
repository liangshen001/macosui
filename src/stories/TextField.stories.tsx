import React, {useState} from 'react';
import { Story } from "@storybook/react";
import {OSTypes} from "../types";
import TextField, {TextFieldProps} from "../components/text-field/TextField";
import SearchField from "../components/text-field/SearchField";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'TextField',
    component: TextField,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};


const BasicUsageTemplate: Story<{}> = (args) =>
    <>
        <TextField placeholder={'Placeholder'}/>
        <TextField placeholder={'Placeholder'} borderRadius/>
        <br/>
        <TextField placeholder={'Placeholder'} disabled/>
        <TextField placeholder={'Placeholder'} borderRadius disabled/>
        <br/>
        <TextField placeholder={'Placeholder'} clear/>
        <TextField placeholder={'Placeholder'} borderRadius clear/>
        <br/>
        <TextField placeholder={'Placeholder'} clear disabled/>
        <TextField placeholder={'Placeholder'} borderRadius clear disabled/>
        <br/>
        <SearchField placeholder={'Placeholder'}/>
        <SearchField placeholder={'Placeholder'} borderRadius/>
        <br/>
        <SearchField placeholder={'Placeholder'} disabled/>
        <SearchField placeholder={'Placeholder'} borderRadius disabled/>
        <br/>
        <SearchField placeholder={'Placeholder'} clear/>
        <SearchField placeholder={'Placeholder'} borderRadius clear/>
        <br/>
        <SearchField placeholder={'Placeholder'} clear disabled/>
        <SearchField placeholder={'Placeholder'} borderRadius clear disabled/>
    </>
export const BasicUsage = BasicUsageTemplate.bind({});



