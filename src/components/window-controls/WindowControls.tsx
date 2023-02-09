import React from "react"
import styled from "styled-components";


const WindowControlsItemWrapper = styled.span`
  border: 0.5px solid rgba(0, 0, 0, 0.20);
  height: 12px;
  width: 12px;
  display: inline-flex;
  border-radius: 6px;
  box-sizing: border-box;
  & + & {
    margin-left: 8px;
  }
`;
const ZoomWrapper = styled(WindowControlsItemWrapper)`
  background: #28C840;
`;
const MinimizeWrapper = styled(WindowControlsItemWrapper)`
  background: #FEBC2E;
`;
const CloseWrapper = styled(WindowControlsItemWrapper)`
  background: #FF5F57;
`;

interface WindowControlsWrapperProps {
    left: number;
}
const WindowControlsWrapper = styled.div<WindowControlsWrapperProps>`
  // top: ${props => props.left}px;
  margin-left: ${props => props.left}px;
  display: inline-flex;
`;

export interface WindowControlsProps {
    left: number;
}

export const WindowControls: React.FC<WindowControlsProps> = (props) => {
    return <>
        <WindowControlsWrapper left={props.left}>
            <CloseWrapper/>
            <MinimizeWrapper/>
            <ZoomWrapper/>
        </WindowControlsWrapper>
    </>
}