import React, {PropsWithChildren, useEffect, useMemo, useState} from "react";
import styled, {css} from "styled-components";
import iconMap from './icon.json';

export type IconType = keyof typeof iconMap;
// 'sidebar' | 'search' | 'close' | 'arrowForward' | 'expandMore' | 'expandLess' | 'arrowBack' |
//     'question' | 'setting' | 'horizontalRule' | 'add' | 'check' | 'star' | 'circle' | 'dashedRectangle' |
//     'unorderedList' | 'info' | 'recent' | 'desktop' | 'file' | 'download' | 'global' | 'hd' | 'wifi' | 'control' |
//     'doNotDisturb' | 'apple' | 'xmark';

type IconWrapperProps = Omit<IconProps, 'type'>;

const IconWrapper: React.FC<IconWrapperProps> = styled.span<IconWrapperProps>`
  font-family: SFPro-${props => props.fontFamily}, SF Pro, serif;
  ${props => props.fontSize ? css`
    font-size: ${props.fontSize};
  ` : ''}
  ${props => props.color ? css`
    color: ${props.color};
  ` : ''}
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  @font-face{
    font-family: 'SFPro-Regular'; // --自定义名字就好
    src: url("../../fonts/SF-Pro.ttf"); // --下载的字体文件路径
  }
`;

export type IconProps = {
    type: IconType;
    fontFamily?: 'Medium' | 'Regular' | 'Bold';
    fontSize?: string;
} & React.HTMLProps<HTMLSpanElement>;

const Icon =
    React.forwardRef<HTMLSpanElement, Omit<IconProps, 'children'>>(({type, ...props}, ref) => {
        const icon = useMemo(() => iconMap[type], [type])
        return <>
            <IconWrapper {...props} ref={ref}>{icon}</IconWrapper>
        </>
    });

export const iconFactory = (type: IconType) => React.forwardRef<HTMLSpanElement, Omit<IconProps, 'type'>>(
    (props, ref) => <Icon {...props} ref={ref} type={type} />);

Icon.defaultProps = {
    fontFamily: 'Regular',
    shape: 'default'
}

export default Icon;


// ,
// "sidebar": "􀏚",
//     "search": "􀊫",
//     "close": "􀁡",
//     "arrowForward": "􀆊",
//     "expandMore": "􀆈",
//     "expandLess": "􀆇",
//     "arrowBack": "􀆉",
//     "question": "􀅍",
//     "setting": "􀍟",
//     "horizontalRule": "􀅽",
//     "add": "􀅼",
//     "check": "􀆅",
//     "star": "􀋃",
//     "circle": "􀀁",
//     "dashedRectangle": "􀓔",
//     "unorderedList": "􀋲",
//     "info": "􀅴",
//     "recent": "􀐫",
//     "desktop": "􀣰",
//     "file": "􀈷",
//     "download": "􀁸",
//     "global": "􀤆",
//     "hd": "􀤂",
//     "wifi": "􀙇",
//     "control": "􀜊",
//     "doNotDisturb": "􀆺",
//     "apple": "􀣺"