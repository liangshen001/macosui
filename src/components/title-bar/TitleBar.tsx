import React from "react";
import styled from "styled-components";
import {WindowControls} from "../window-controls/WindowControls";
import {TitleWrapper} from "../utils/TitleWrapper";

const TitleBarWrapper = styled.div`
  width: 100%;
  height: 28px;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  position: relative;
`;

const TitleBarContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

export interface TitleBarProps {
    title?: string
}

const TitleBar: React.FC<TitleBarProps> = (props) => {
  return <>
      <TitleBarWrapper>
          <WindowControls left={8}/>
          <TitleBarContentWrapper>
              <TitleWrapper>{props.title}</TitleWrapper>
          </TitleBarContentWrapper>
      </TitleBarWrapper>
  </>
}
export default TitleBar;