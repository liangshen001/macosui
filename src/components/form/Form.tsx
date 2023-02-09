import React, {Children, isValidElement, PropsWithChildren, useMemo} from "react";
import styled from "styled-components";
import FormGroup from "./FormGroup";
import FormRow from "./FormRow";
import {Store} from "./interface";
import ReactForm, {FormProps as ReactFormProps} from '../../react-components/form/Form';
import {FormInstance} from "../../react-components/form/interface";


const FormsWrapper = styled.div`
  background: transparent;
  border-radius: 6px;
`

export interface FormProps {
    initialValues?: any;
    onSubmit?: (values: any) => void;
    form?: FormInstance;
    onReset?: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form: React.FC<PropsWithChildren<FormProps>> = (props) => {
    const children = useMemo(() => {
        let hasGroup = false;
        const children = Children.map(props.children, i => {
            if (isValidElement(i) && i.type === FormGroup) {
                hasGroup = true;
                return i;
            }
            return i;
        });
        return hasGroup ? children : <FormGroup>{children}</FormGroup>;
    }, [props.children]);
    return (
        <FormsWrapper>
            <ReactForm {...props} onFinish={props.onSubmit} children={children} />
        </FormsWrapper>
    );
};

export default Form;