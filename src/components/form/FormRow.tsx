import React, {Children, isValidElement, PropsWithChildren} from 'react';
import styled from "styled-components";
import Field from "../../react-components/form/Field";
import Switch from "../switch/Switch";

const FormRowWrapper = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
    pointer-events: none;
  }
  & + & {
    border-top: 1px solid rgba(0,0,0,0.04);
  }
`;
const TitleGroupWrapper = styled.span`
  display: flex;
  flex-direction: column;
    
`;
const TitleWrapper = styled.span`
  font-family: SFPro-Regular,serif;
  font-size: 13px;
  color: rgba(0,0,0,0.85);
  line-height: 16px;
`;
const SubtitleWrapper = styled.span`
  font-family: SFPro-Regular,serif;
  font-size: 11px;
  color: rgba(0,0,0,0.50);
  line-height: 14px;
`;
const ControlWrapper = styled.span`
    
`;

export interface FormRowProps {
    title: string;
    subtitle?: string;
    name: string;
}

const FormRow: React.FC<PropsWithChildren<FormRowProps>> = (props) => {
    let child = Children.only(props.children);
    let valuePropName;
    if (isValidElement(child) && child.type === Switch) {
        valuePropName = 'checked';
    }
    return (
        <FormRowWrapper style={{height: props.subtitle ? '51px' : '37px'}}>
            <TitleGroupWrapper>
                <TitleWrapper>{props.title}</TitleWrapper>
                {props.subtitle && <SubtitleWrapper>{props.subtitle}</SubtitleWrapper>}
            </TitleGroupWrapper>
            <ControlWrapper>
                <Field name={props.name} valuePropName={valuePropName}>{props.children}</Field>
            </ControlWrapper>
        </FormRowWrapper>
    );
};

export default FormRow;