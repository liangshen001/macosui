import React, {PropsWithChildren, useEffect, useRef} from 'react';
import useForm from "./useForm";
import {FormInstance} from "./interface";
import {FieldContext} from "./FieldContext";

export interface FormProps {
    initialValues?: any;
    onFinish?: (values: any) => void;
    form?: FormInstance;
    onReset?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<PropsWithChildren<FormProps>> = (props) => {
    const formInstance = useForm(props.form);
    const initializeRef = useRef(false);

    const {setFormProps} = formInstance;

    setFormProps(props, initializeRef.current);
    if (initializeRef.current) {
        initializeRef.current = true;
    }
    console.log('rerender form')

    return (
        <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            event.stopPropagation();
            formInstance.submit();
        }} onReset={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            formInstance.resetFields();
            props.onReset?.(event);
        }}>
            <FieldContext.Provider value={formInstance}>{props.children}</FieldContext.Provider>
        </form>
    );
};

export default Form;