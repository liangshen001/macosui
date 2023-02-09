import React, {PropsWithChildren, useEffect, useState} from "react";
import styled, {css} from "styled-components";
import iconMap from './icon.json';

export type IconType = 'sidebar' | 'search' | 'close' | 'arrowForward' | 'expandMore' | 'expandLess' | 'arrowBack' |
    'question' | 'setting' | 'horizontalRule' | 'add' | 'check' | 'star' | 'circle' | 'dashedRectangle' |
    'unorderedList' | 'info' | 'recent' | 'desktop' | 'file' | 'download' | 'global' | 'hd' | 'wifi' | 'control' |
    'doNotDisturb' | 'apple';

type IconWrapperProps = Omit<IconProps, 'type'>;

const IconWrapper: React.FC<IconWrapperProps> = styled.span<IconWrapperProps>`
  font-family: SFPro-${props => props.fontFamily}, SF Pro, serif;
  ${props => props.fontSize ? css`
    font-size: ${props.fontSize};
  ` : ''}
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
`;

export type IconProps = {
    type: IconType;
    fontFamily?: 'Medium' | 'Regular' | 'Bold';
    fontSize?: string;
} & React.HTMLProps<HTMLSpanElement>;

const Icon =
    React.forwardRef<HTMLSpanElement, Omit<IconProps, 'children'>>(({type, ...props}, ref) => {
        const icon = iconMap[type];
        return <>
            <IconWrapper {...props} ref={ref}>{icon}</IconWrapper>
        </>
    });

export const iconFactory = (type: IconType) => React.forwardRef<HTMLSpanElement, Omit<IconProps, 'type'>>(
    (props, ref) => <Icon {...props} ref={ref} type={type} />);

Icon.defaultProps = {
    fontFamily: 'Regular'
}

export default Icon;