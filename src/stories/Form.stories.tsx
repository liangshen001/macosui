import React, {useState} from 'react';
import { Story } from "@storybook/react";
import FormRow from "../components/form/FormRow";
import Form from "../components/form/Form";
import Switch from "../components/switch/Switch";
import FormGroup from "../components/form/FormGroup";
import Slider from "../components/slider/Slider";
import Select from "../components/select/Select";
import TextField from "../components/text-field/TextField";
import useForm from "../react-components/form/useForm";
import {Button} from "../index";
import {Option} from "../components/select";

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
                        <Option value={'test1'}>test1</Option>
                        <Option value={'test2'}>test2</Option>
                        <Option value={'test3'}>test3</Option>
                    </Select>
                </FormRow>
                <FormRow name={'select2'} title={'Title'}>
                    <Select>
                        <Option value={'test1'}>test1</Option>
                        <Option value={'test2'}>test2</Option>
                        <Option value={'test3'}>test3</Option>
                    </Select>
                </FormRow>
            </FormGroup>
        </Form>
        <Button onClick={() => console.log(formInstance.getFieldsValue())}>提交</Button>
    </>
}

export const Demo = DemoTemplate.bind({});




