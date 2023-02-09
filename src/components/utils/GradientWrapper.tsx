import styled, {css} from "styled-components";
import {FullWrapper} from "./FullWrapper";
import React, {PropsWithChildren} from "react";

export interface GradientProps {
    borderRadius?: number;
    enable: boolean;
    disabled?: boolean;
}

export const GradientWrapper = styled(FullWrapper)<GradientProps>`
  
  border-radius: ${props => props.borderRadius ?? 3.5}px;
  ${props => props.enable ? css`
    opacity: 0.17;
    background-image: linear-gradient(179deg, #FFFFFF 0%, rgba(255, 255, 255, 0.00) 96%);
  ` : ''}
  ${props => props.disabled ? '' : css`
    &:active {
      opacity: 0.1;
    }
  `}
`
/**
 * 渐变色
 */
export const Gradient: React.FC<PropsWithChildren<GradientProps>> = ({children, ...props}) => {
    return <>
        {children}
        <GradientWrapper {...props} />
    </>
}