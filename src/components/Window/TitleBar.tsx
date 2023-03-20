import React from "react";
import styled from "styled-components";
import {WindowControls} from "./WindowControls";
import {TitleWrapper} from "../utils/TitleWrapper";

const TitleBarWrapper = styled.div`
  width: 100%;
  height: 28px;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 8px;
  box-sizing: border-box;
  background: rgba(246,246,246,0.8);
  //border-radius: 5px;
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
          <WindowControls/>
          <TitleBarContentWrapper>
              <TitleWrapper>{props.title}</TitleWrapper>
          </TitleBarContentWrapper>
      </TitleBarWrapper>
  </>
}
export default TitleBar;