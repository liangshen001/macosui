import {Callbacks, FieldEntity, FormInstance, ReducerAction, Store} from "./interface";
import React from "react";
import {FormProps} from "./Form";

export class FormStore {

    private store: Store = {};
    private fieldEntities: FieldEntity[] = [];
    private callbacks: Callbacks = {};
    private initialValues: Store = {};
    constructor(forceRootUpdate: () => void) {}
    public getForm(): FormInstance {
        return {
            getFieldValue: this.getFieldValue,
            getFieldsValue: this.getFieldsValue,
            setFieldValue: this.setFieldValue,
            setFieldsValue: this.setFieldsValue,
            resetFields: this.resetFields,
            submit: this.submit,

            registerField: this.registerField,
            setFormProps: this.setFormProps,
            dispatch: this.dispatch,
        }
    }

    getFieldValue = (name: string) => {
        console.log(name, this.store[name]);
        return this.store[name];
    }
    getFieldsValue = () => {
        return this.store;
    }
    setFieldValue = (name: string, value: any) => {
        const newStore = {...this.store, [name]: value};
        const entity = this.fieldEntities.find(i => i.name === name);
        if (entity) {
            entity.onStoreChange(this.store, name);
        }
        this.store = newStore;
    }
    setFieldsValue = (values: Partial<any>) => {
        this.fieldEntities.forEach(entity => {
            entity.onStoreChange(this.store, entity.name);
        });
        this.store = values;
    }
    resetFields = () => {

    }
    submit = () => {
        const { onFinish } = this.callbacks;
        if (onFinish) {
            onFinish(this.store);
        }
    }
    registerField = (entity: FieldEntity) => {
        this.fieldEntities.push(entity);
    }
    setFormProps = (props: FormProps, initialize: boolean) => {
        this.callbacks = {
            onFinish: props.onFinish
        };
        if (!initialize) {
            this.initialValues = props.initialValues || {};
            this.store = {...props.initialValues};
        }
    }
    dispatch = (action: ReducerAction) => {
        switch (action.type) {
            case "updateValue":
                const newStore = {...this.store, [action.name]: action.value};
                this.fieldEntities.forEach(i => i.onStoreChange(this.store, action.name));
                this.store = newStore;
        }
    }
}

function useForm<Values = any>(form?: FormInstance<Values>): FormInstance<Values> {
    const formRef = React.useRef<FormInstance>();
    const [, forceUpdate] = React.useState({});
    if (!formRef.current) {
        if (form) {
            formRef.current = form;
        } else {
            const forceReRender = () => {
                forceUpdate({});
            };
            const formStore: FormStore = new FormStore(forceReRender);
            formRef.current = formStore.getForm();
        }
    }
    return formRef.current;
}

export default useForm;