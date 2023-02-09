import {FormProps} from "./Form";

export type StoreValue = any;
export type Store = Record<string, StoreValue>;


interface UpdateAction {
    type: 'updateValue';
    name: string;
    value: StoreValue;
}

interface ValidateAction {
    type: 'validateField';
    name: string;
    triggerName: string;
}

export type ReducerAction = UpdateAction | ValidateAction;

export interface FormInstance<Values = any> {
    getFieldValue: (name: string) => StoreValue;
    getFieldsValue: () => Values;
    setFieldValue: (name: string, value: any) => void;
    setFieldsValue: (values: Partial<Values>) => void;
    submit: () => void;
    resetFields: () => void;
    registerField: (field: FieldEntity) => void;
    setFormProps: (props: FormProps, initialize: boolean) => void

    dispatch: (action: ReducerAction) => void,
}

export interface Callbacks<Values = any> {
    onValuesChange?: (changedValues: any, values: Values) => void;
    onFieldsChange?: (changedFields: any[], allFields: any[]) => void;
    onFinish?: (values: Values) => void;
    onFinishFailed?: (errorInfo: any) => void;
}


export interface FieldEntity {
    name: string;
    onStoreChange: (
        store: Store,
        name: string,
        info?: any
    ) => void;
}