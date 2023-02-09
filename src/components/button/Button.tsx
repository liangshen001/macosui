import React, {PropsWithChildren, useEffect, useState} from 'react';
import {useWindowBlur} from "../../hooks/useWindowBlur";
import styled, {css} from "styled-components";
import {FullWrapper} from "../utils/FullWrapper";
import {Gradient} from "../utils/GradientWrapper";

export interface ButtonStyledProps {
    disabled?: boolean;
    block?: boolean;
    blur?: boolean;
    variant?: ButtonVariant;
}

const ButtonWrapper = styled.button<ButtonStyledProps>`
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
  outline: none;
  padding: 0 7px;
  text-align: center;
  border-radius: 5px;
  min-width: 50px;
  height: 20px;
  border: none;
  position: relative;

`;

interface BaseWrapperProps {
    variant?: ButtonVariant;
    disabled?: boolean;
}

const BaseWrapper = styled(FullWrapper)<BaseWrapperProps>`
  border: ${props => props.variant === 'primary' && !props.disabled ? '1px solid transparent' : '0.5px solid rgba(0,0,0,0.02)'};
  box-shadow: ${props => props.variant === 'primary' && !props.disabled ? '0 0 3px 0 rgba(255,255,255,0.12), 0 1px 2px 0 rgba(255,255,255,0.12), 0 0 1px 0 rgba(255,255,255,0.24)' : '0 0 0 0 rgba(0,0,0,0.15), 0 1px 0 0 rgba(0,0,0,0.05)'};
  border-radius: 5px;
  background: ${props => props.variant === 'primary' && !props.disabled ? '#007AFF' : '#FFFFFF'};
  color: ${props => props.variant === 'primary' && !props.disabled ? '#FFFFFF' : '#000000'};
  font-family: SFPro-Regular,serif;
  font-size: 13px;
  line-height: 16px;
  ${props => props.disabled ? css`
    opacity: 0.5;
  ` : ''}
`;

export type ButtonVariant = 'primary' | 'secondary' | '';

export type ButtonProps = {
    variant?: ButtonVariant;
    block?: boolean;
    disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<PropsWithChildren<ButtonProps>> =
    React.forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
        ({children, ...props}, ref) => {
            const blur = useWindowBlur();
            return (
                <ButtonWrapper
                    ref={ref}
                    blur={blur}
                    {...props}>
                    <Gradient enable={props.variant === 'primary'} disabled={props.disabled} borderRadius={5}>
                        <BaseWrapper variant={props.variant} disabled={props.disabled}>
                            {children}
                        </BaseWrapper>
                    </Gradient>
                    {children}
                </ButtonWrapper>
            );
        });
export default Button;

Button.defaultProps = {
    variant: 'primary',
    block: false,
    disabled: false,
};
