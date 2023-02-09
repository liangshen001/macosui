import React, {useEffect, useState} from "react";
import {OSTypes} from "../../types";
import {useWindowBlur} from "../../hooks/useWindowBlur";
import {useSystemOS} from "../../hooks/useSystemOS";
import './switch-mac.css';


export type SwitchProps = {
    os?: OSTypes;
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (value: boolean) => void;
    size?: 'default' | 'small'
};

const Switch: React.FC<SwitchProps> = (props) => {
    const [checked, setChecked] = useState(props.defaultChecked);
    const resultOS = useSystemOS(props.os);
    const blur = useWindowBlur();
    useEffect(() => {
        if (props.checked !== undefined) {
            setChecked(props.checked);
        }
    }, [props.checked]);

    const changeSwitch = () => {
        setChecked(!checked);
        if (props.onChange) {
            props.onChange(!checked);
        }
    }
    return <>
        <button type="button" role="switch"
                className={`switch-ui ${resultOS}
                 ${blur ? 'blur' : ''} ${checked ? 'switch-checked' : ''} ${props.size ?? ''}`}
                onClick={changeSwitch}>
            <div className="switch-handle"></div>
            <span className="switch-inner">
                <span className="switch-inner-checked"></span>
                <span className="switch-inner-unchecked"></span>
            </span>
        </button>
    </>
}

Switch.defaultProps = {
    os: OSTypes.Auto,
    size: 'default',
    disabled: false,
    defaultChecked: false,
};
export default Switch;