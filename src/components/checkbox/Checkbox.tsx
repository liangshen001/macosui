import React, {PropsWithChildren, useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import {FullWrapper} from "../utils/FullWrapper";
import {Gradient, GradientWrapper} from "../utils/GradientWrapper";



const CheckboxWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  justify-content: center;
`
const CheckboxTypeWrapper = styled.span`
  position: relative;
  width: 14px;
  height: 14px;
`
const CheckboxInputWrapper = styled.input.attrs({
    type: 'checkbox'
})`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
`
const CheckboxLabelWrapper = styled.span`
  font-family: SFPro-Regular, serif;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 16px;
  padding-inline-start: 6px;
  padding-inline-end: 6px;
`
interface RectangleProps {
    tintColor?: boolean;
    disabled?: boolean;

}

const RectangleWrapper = styled(FullWrapper)<RectangleProps>`
  background: ${props => props.tintColor && !props.disabled ? '#007AFF' : '#FFFFFF'};
  border: ${props => {
      if (props.tintColor) {
          if (props.disabled) {
            // return '0.5px solid rgba(0,0,0,0.02)';
            return '0.5px solid rgba(0,0,0,0.1)';
          }
        return 'transparent';
      }
      return '0.5px solid rgba(0,0,0,0.15)';
  }};
  border-radius: 3.5px;
  ${props => props.disabled && css`
    opacity: 0.5;
  `}
`
const ShadowWrapper = styled(FullWrapper)<RectangleProps>`
  box-shadow: ${props => props.tintColor ? '0 0 3px 0 rgba(255,255,255,0.12), 0 1px 2px 0 rgba(255,255,255,0.12), 0 0 1px 0 rgba(255,255,255,0.24)' : 'inset 0 1px 2px 0 rgba(0,0,0,0.10), inset 0 0 2px 0 rgba(0,0,0,0.10)'};
  border-radius: 3.5px;
`
const Rectangle: React.FC<PropsWithChildren<RectangleProps>> = ({children, ...props}) => {
    return <>
        <RectangleWrapper {...props}/>
        <ShadowWrapper {...props}/>
        <IconWrapper disabled={props.disabled}>
        {children}
        </IconWrapper>
    </>
}
const CheckedIcon = () =>
    <svg width="10px" height="9px" viewBox="0 0 10 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="SFPro-Bold, SF Pro" fontSize="10" fontWeight="bold">
            <g id="Components---Bars,-Controls,-Menus,-and-Lists" transform="translate(-22.000000, -1287.000000)" fill="currentColor">
                <g id="Controls" transform="translate(20.000000, 957.000000)">
                    <g id="Checkboxes" transform="translate(0.000000, 303.000000)">
                        <g id="Checkbox" transform="translate(0.000000, 22.000000)">
                            <g id="Checkbox-Type" transform="translate(0.000000, 2.000000)">
                                <text id="􀆅">
                                    <tspan x="1.18945312" y="10.5">􀆅</tspan>
                                </text>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
const IndeterminateIcon = () =>
    <svg width="9px" height="3px" viewBox="0 0 9 3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="SFPro-Heavy, SF Pro" fontSize="10" fontWeight="600">
            <g id="Components---Bars,-Controls,-Menus,-and-Lists" transform="translate(-22.000000, -1312.000000)" fill="currentColor">
                <g id="Controls" transform="translate(20.000000, 957.000000)">
                    <g id="Checkboxes" transform="translate(0.000000, 303.000000)">
                        <g id="Checkbox" transform="translate(0.000000, 44.000000)">
                            <g id="Checkbox-Type" transform="translate(0.000000, 2.000000)">
                                <text id="􀅽">
                                    <tspan x="1.43774536" y="10.5">􀅽</tspan>
                                </text>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
const IconWrapper = styled(FullWrapper)<any>`
  font-family: SFPro-Bold, serif;
  font-size: 10px;
  color: ${props => props.disabled ? '#000000' : '#FFFFFF'};
  ${props => props.disabled && css`
    opacity: 0.5;
  `}
`

export interface CheckboxProps {
    defaultChecked?: boolean;
    indeterminate?: boolean;
    checked?: boolean;
    disabled?: boolean;
    /**
     * 选择状态变化
     * @param event
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<PropsWithChildren<CheckboxProps>> = React.forwardRef<HTMLInputElement, PropsWithChildren<CheckboxProps>>((props, ref) => {
    // 是否在点击状态
    const [active, setActive] = useState<boolean>(false);
    // 是否选中状态
    const [checked, setChecked] = useState<boolean>(props.defaultChecked!);
    // 是否在不确定状态
    const [indeterminate, setIndeterminate] = useState<boolean>(props.indeterminate!);
    // 处理选中和不确定逻辑 选中优先级高
    useEffect(() => {
        if (props.checked !== undefined) {
            setChecked(props.checked);
        }
        setIndeterminate(!props.checked && props.indeterminate!);
    }, [props.checked, props.indeterminate]);

    // 设置为取消点击状态
    const setActiveFalse = () => setActive(false);

    // 设置为点击状态
    const setActiveTrue = () => setActive(!props.disabled && (checked || indeterminate));
    // 组件值更新
    const change = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (indeterminate) {
            setChecked(true);
        }
        setChecked(event.target.checked);
        setIndeterminate(false);
        if (props.onChange) {
            props.onChange(event);
        }
    }
    return (
        <CheckboxWrapper onMouseDown={setActiveTrue} onMouseUp={setActiveFalse} onMouseLeave={setActiveFalse}>
            <CheckboxTypeWrapper>
                <Gradient borderRadius={3.5} enable={(checked || indeterminate)} disabled={props.disabled}>
                    <CheckboxInputWrapper
                        ref={ref}
                        checked={checked}
                        defaultChecked={props.defaultChecked}
                        disabled={props.disabled}
                        onChange={change}/>
                    <Rectangle tintColor={checked || indeterminate} disabled={props.disabled} >
                        {indeterminate && <IndeterminateIcon/>}
                        {checked && <CheckedIcon/>}
                    </Rectangle>
                </Gradient>
            </CheckboxTypeWrapper>
            {props.children && <CheckboxLabelWrapper>{props.children}</CheckboxLabelWrapper>}
        </CheckboxWrapper>
    );
});

Checkbox.defaultProps = {
    defaultChecked: false,
    indeterminate: false,
    disabled: false
}

export default Checkbox;