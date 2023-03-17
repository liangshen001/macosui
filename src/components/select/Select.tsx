import React, {ForwardRefRenderFunction, PropsWithChildren, useEffect, useState} from "react";
import './Select.css';

export interface SelectProps {
    value?: string | ReadonlyArray<string> | number | undefined;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = React.forwardRef<HTMLSelectElement, PropsWithChildren<SelectProps>>((props, ref) => {
    const [value, setValue] = useState<any>();
    useEffect(() => {
        setValue(props.value);
    }, [props.value]);
    return <>
        <label className={'select-ui'}>
            <select ref={ref} value={value} onChange={e => {
                if (props.onChange) {
                    props.onChange(e);
                }
                setValue(e.target.value);
            }} >
                {props.children}
            </select>
            <div className={'select-icon'}>
                <div></div>
                <div></div>
            </div>
        </label>
    </>;
})

export default Select;