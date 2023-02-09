import React, {Children, PropsWithChildren, useEffect, useMemo, useState} from 'react';
import {FieldContext} from "./FieldContext";
import {Store} from "./interface";

export interface FormItemProps {
    name: string;
    valuePropName?: string;
}

const Field: React.FC<PropsWithChildren<FormItemProps>> = (props) => {
    const [, forceUpdate] = useState({});
    const fieldContext = React.useContext(FieldContext);
    useEffect(() => {
        return fieldContext.registerField({
            name: props.name,
            onStoreChange: (store: Store, name: string, info) => {
                if (name === props.name) {
                    forceUpdate({});
                }
            }
        });
    }, []);
    let returnChildNode;
    const child = Children.only(props.children);
    if (React.isValidElement(child)) {
        returnChildNode = React.cloneElement(child,
            {
                ...child.props,
                [props.valuePropName!]: fieldContext.getFieldValue(props.name),
                onChange: (event: React.ChangeEvent) => {
                    const newValue = (event.target as any)[props.valuePropName!]
                    const value = fieldContext.getFieldValue(props.name);
                    if (newValue !== value) {
                        fieldContext.dispatch({
                            type: 'updateValue',
                            name: props.name,
                            value: newValue
                        });
                    }
                }
            },
        );
    }
    console.log('rerender field')

    return (<>
        {returnChildNode}
    </>);
};

Field.defaultProps = {
    valuePropName: 'value',
}

export default Field;