import React, {useState} from 'react';
import { Story } from "@storybook/react";
import FormRow from "./FormRow";
import Form from "./Form";
import Switch from "../switch/Switch";
import FormGroup from "./FormGroup";
import Slider from "../slider/Slider";
import Select from "../select/Select";
import TextField from "../text-field/TextField";
import useForm from "../../react-components/form/useForm";
import {Button} from "../../index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Form',
    component: Form,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};


const DemoTemplate: Story<{}> = (args) => {
    let formInstance = useForm();
    return <>
        <Form>
            <FormRow name={'switch'} title={'Title'}>
                <Switch size='small' />
            </FormRow>
            <FormRow name={'slider'} title={'Title'}>
                <Slider />
            </FormRow>
            <FormRow name={'slider2'} title={'Title'}>
                <Slider />
            </FormRow>
        </Form>
        <p></p>
        <Form form={formInstance} initialValues={{select: "test2", switch: true, slider: '222'}}>
            <FormGroup>
                <FormRow name={'switch'} title={'Title'}>
                    <Switch size='small' />
                </FormRow>
                <FormRow name={'slider'} title={'Title'}>
                    <TextField />
                </FormRow>
                <FormRow name={'slider2'} title={'Title'}>
                    <Slider />
                </FormRow>
            </FormGroup>
            <FormGroup>
                <FormRow name={'select'} title={'Title'}>
                    <Select>
                        <option value={'test1'}>test1</option>
                        <option value={'test2'}>test2</option>
                        <option value={'test3'}>test3</option>
                    </Select>
                </FormRow>
                <FormRow name={'select2'} title={'Title'}>
                    <Select>
                        <option value={'test1'}>test1</option>
                        <option value={'test2'}>test2</option>
                        <option value={'test3'}>test3</option>
                    </Select>
                </FormRow>
            </FormGroup>
        </Form>
        <Button onClick={() => console.log(formInstance.getFieldsValue())}>提交</Button>
    </>
}

export const Demo = DemoTemplate.bind({});




