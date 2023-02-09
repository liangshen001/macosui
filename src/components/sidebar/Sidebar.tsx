import React, {PropsWithChildren, useContext} from "react"
import styled from "styled-components";
import {WindowControls} from "../window-controls/WindowControls";
import {WindowContext} from "../utils/WindowContext";

const SidebarWrapper = styled.div`
  background: rgba(246,246,246,0.84);
  border-radius: 10px 0 0 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
  &:after {
    content: '';
    height: 100%;
    width: 1px;
    top: 0;
    position: absolute;
    left: 300px;
    background: rgba(0,0,0,0.10);
    box-shadow: -1px 0 0 0 rgba(0,0,0,0.05);
  }
`;
const SidebarHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const SidebarContentWrapper = styled.div`
`

export interface SidebarProps {

}
const Sidebar: React.FC<PropsWithChildren<SidebarProps>> = (props) => {
    let context = useContext(WindowContext);
    return <>
        <SidebarWrapper>
            <SidebarHeaderWrapper style={{height: context.toolbar?.props?.mono ? '38px' : '52px'}}>
                <WindowControls left={context.toolbar?.props?.mono ? 13 : 20}></WindowControls>
            </SidebarHeaderWrapper>
            <SidebarContentWrapper>{props.children}</SidebarContentWrapper>
        </SidebarWrapper>
    </>
}
export default Sidebar;