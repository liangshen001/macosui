import React, {PropsWithChildren, useContext} from 'react';
import styled from "styled-components";
import {WindowControls} from "../window-controls/WindowControls";
import {WindowContext} from "../utils/WindowContext";
import {SubtitleWrapper, TitleWrapper} from "../utils/TitleWrapper";


const ToolbarWrapper = styled.div`
  width: 100%;
  border-radius: 10px 10px 0 0;
  background: rgba(255,255,255,0.80);
  //background: #F6F6F6;
  //box-shadow: 0 1px 0 0 rgba(0,0,0,0.05);
  box-shadow: 0 1px 0 0 rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
`;
const ToolbarContentWrapper = styled.div`
  flex: 1;
  padding-left: 33px;
  padding-right: 12px;
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
    title: string;
    subtitle?: string;
    mono?: boolean;
}

const Toolbar: React.FC<PropsWithChildren<ToolbarProps>> = (props) => {
    let context = useContext(WindowContext);
    return (
        <ToolbarWrapper style={{height: props.mono ? '38px' : '52px'}}>
            {!context.sidebar && <WindowControls left={props.mono ? 13 : 20}/>}
            <ToolbarContentWrapper>
                <HeaderWrapper>
                    <TitleWrapper>{props.title}</TitleWrapper>
                    <SubtitleWrapper>{props.subtitle}</SubtitleWrapper>
                </HeaderWrapper>
                <ActionsWrapper>{props.children}</ActionsWrapper>
            </ToolbarContentWrapper>
        </ToolbarWrapper>
    );
};

export default Toolbar;