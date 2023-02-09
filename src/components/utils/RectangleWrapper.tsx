import styled, {css} from "styled-components";
import {FullWrapper} from "./FullWrapper";

export interface RectangleWrapperProps {
    tintColor: boolean;
    disabled?: boolean;
    borderRadius?: number;
}

export const RectangleWrapper = styled(FullWrapper)<RectangleWrapperProps>`
  background: ${props => props.tintColor && !props.disabled ? '#007AFF' : '#FFFFFF'};
  border: ${props => props.tintColor && !props.disabled ? 'transparent' : '0.5px solid rgba(0,0,0,0.15)'};
  border-radius: ${props => props.borderRadius ?? 3.5}px;
  ${props => props.disabled && css`
    opacity: 0.5;
  `}

  &:after {
    box-shadow: ${props => props.tintColor ? '0 0 3px 0 rgba(255,255,255,0.12), 0 1px 2px 0 rgba(255,255,255,0.12), 0 0 1px 0 rgba(255,255,255,0.24)' : 'inset 0 1px 2px 0 rgba(0,0,0,0.10), inset 0 0 2px 0 rgba(0,0,0,0.10)'};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
  }
`