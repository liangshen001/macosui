import React, {useState} from 'react';
import { Story } from "@storybook/react";
import Field from "./Field";
import Form from "./Form";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactForm',
    component: Form,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};
const formValue = {
    username: "test",
    password: "password"
};

const DemoTemplate: Story<{}> = (args) =>
    <>
        <Form
            initialValues={formValue}
            onFinish={(values) => {
                console.log("Finish:", values);
            }}
        >
            <Field name="username">
                <input placeholder="Username" />
            </Field>
            <Field name="password">
                <input placeholder="Password" />
            </Field>
            <button>Submit</button>
        </Form>
    </>
export const Demo = DemoTemplate.bind({});




