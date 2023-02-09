import React, {PropsWithChildren, useEffect, useImperativeHandle, useRef, useState} from 'react';
import styled, {css} from "styled-components";
import CloseIcon from "../icon/CloseIcon";

const ClearWrapper = styled.span`
  position: absolute;
  right: 6px;
  top: 6px;
  color: #808080;
  display: flex;
`
const SearchWrapper = styled.span`
  position: absolute;
  left: 6px;
  top: 6px;
  color: #4D4D4D;
  display: flex;
`;


interface TextFieldWrapperProps {
    focus?: boolean;
    borderRadius?: boolean
}

const TextFieldWrapper = styled.div<TextFieldWrapperProps>`
  position: relative;
  width: 160px;
  display: inline-block;
  border: 3px solid ${props => props.focus ? 'rgba(0,122,255,0.50)' : 'transparent'};
  ${props => props.borderRadius ? css`
    border-radius: 5px;
  ` : ''}
`
export interface TextFieldInputWrapperProps {
    borderRadius?: boolean
    icon?: React.ReactNode;
    clear?: boolean;
}
const TextFieldInputWrapper = styled.input<TextFieldInputWrapperProps>`
  height: 22px;
  outline: 0;
  background: #FFFFFF;
  border: 0.5px solid rgba(0,0,0,0.08);
  box-shadow: 0 0 0 0 rgba(0,0,0,0.06), 0 1px 0 0 rgba(0,0,0,0.12);
  padding-inline-start: ${props => props.icon ? 27 : 7}px;
  padding-inline-end: ${props => props.clear ? 27 : 7}px;
  width: calc(100% - ${props => props.clear && props.icon ? 54 : (props.clear || props.icon ? 34 : 14)}px);
  font-family: SFPro-Regular,serif;
  font-size: 13px;
  color: rgba(0,0,0,0.85);
  line-height: 16px;
  &::placeholder {
    font-family: SFPro-Regular,serif;
    font-size: 13px;
    color: rgba(0,0,0,0.25);
    line-height: 16px;
  }
  ${props => props.disabled ? css`
    opacity: 0.5;
  ` : ''}
  ${props => props.borderRadius ? css`
    border-radius: 5px;
  ` : ''}

`

export type TextFieldProps = {
    borderRadius?: boolean;
    clear?: boolean;
    icon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextField: React.FC<TextFieldProps> = React.forwardRef<HTMLInputElement, PropsWithChildren<TextFieldProps>>((props, ref) => {
    const [value, setValue] = useState<string | ReadonlyArray<string> | number>();
    const [focus, setFocus] = useState<boolean>();
    const innerRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => innerRef.current!);

    useEffect(() => setValue(props.value), [props.value]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        props.onChange && props.onChange(e);
    }
    const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setFocus(true);
        props.onFocus && props.onFocus(e);
    }
    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setFocus(false);
        props.onBlur && props.onBlur(e);
    }
    const onClear = (e: React.MouseEvent<HTMLSpanElement>) => {
        const event = new Event('change', { bubbles: true });
        innerRef.current!.value = '';
        innerRef.current!.dispatchEvent(event);
        setValue('');
        innerRef.current!.focus();
    }

    return (
        <TextFieldWrapper focus={focus} borderRadius={props.borderRadius}>
            <SearchWrapper>
                {props.icon}
            </SearchWrapper>
            <TextFieldInputWrapper {...props}
                                   ref={innerRef}
                                   value={value}
                                   onChange={onChange}
                                   onFocus={onFocus}
                                   onBlur={onBlur} />
            {props.clear && !props.disabled && <ClearWrapper>
                <CloseIcon onClick={onClear} fontSize="12px"/>
            </ClearWrapper>}
        </TextFieldWrapper>
    );
});

TextField.defaultProps = {
    borderRadius: false,
    clear: false
}

export default TextField;