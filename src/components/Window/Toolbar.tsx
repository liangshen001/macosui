import React, {PropsWithChildren, useContext} from 'react';
import styled from "styled-components";
import {WindowControls} from "./WindowControls";
import {WindowContext} from "./WindowContext";
import {SubtitleWrapper, TitleWrapper} from "../utils/TitleWrapper";


const ToolbarWrapper = styled.div`
  width: 100%;
  border-radius: 10px 10px 0 0;
  background: rgba(246,246,246,0.8);
  //background: #F6F6F6;
  //box-shadow: 0 1px 0 0 rgba(0,0,0,0.05);
  box-shadow: 0 1px 0 0 rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 12px;
`;
const ToolbarContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ActionsWrapper = styled.div`
    display: flex;
    align-items: center;
`;



export interface ToolbarProps {
    subtitle?: string;
    mono?: boolean;
}

const Toolbar: React.FC<PropsWithChildren<ToolbarProps>> = (props) => {
    let context = useContext(WindowContext);
    return (
        <ToolbarWrapper style={props.mono ? {height: '38px', paddingLeft: '13px'} : {height: '52px', paddingLeft: '20px'}}>
            {!context.sidebar && <WindowControls/>}
            <ToolbarContentWrapper style={{paddingLeft: context.sidebar ? 0 : '33px'}}>
                <HeaderWrapper>
                    <TitleWrapper>{context.title}</TitleWrapper>
                    <SubtitleWrapper>{props.subtitle}</SubtitleWrapper>
                </HeaderWrapper>
                <ActionsWrapper>{props.children}</ActionsWrapper>
            </ToolbarContentWrapper>
        </ToolbarWrapper>
    );
};

export default Toolbar;