import React from "react";
import {FieldEntity, FormInstance, ReducerAction, StoreValue} from "./interface";
import {FormProps} from "./Form";

export const FieldContext = React.createContext<FormInstance>({
    getFieldValue: (name: string) => {},
    getFieldsValue: () => null,
    setFieldValue: (name: string, value: any) => {},
    setFieldsValue: (values: any) => {},
    submit: () => {},
    resetFields: () => {},
    registerField: (field: FieldEntity) => {},
    setFormProps: (props: FormProps) => {},
    dispatch: (action: ReducerAction) => {},
});