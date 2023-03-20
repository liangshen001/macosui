import React, {PropsWithChildren, useContext} from "react"
import styled from "styled-components";
import {WindowControls} from "./WindowControls";
import {WindowContext} from "./WindowContext";

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
  box-sizing: border-box;
`;
const SidebarContentWrapper = styled.div`
    padding: 10px;
    padding-top: 3px;
    flex: 1;
`
const SideBarItemIconWrapper = styled.span`
    position: absolute;
    right: 0;
`

const SideBarItemWrapper = styled.div`
  font-family: SFPro-Semibold;
  font-size: 11px;
  color: rgba(0,0,0,0.25);
  line-height: 14px;
  margin-left: 6px;
  margin-right: 8px;
  position: relative;
  padding-bottom: 3px;
  margin-bottom: 15px;
`

export interface SideBarItem {
    title: string
    items?: SideBarItem[]
    value?: any
}

export type SideBarList = SideBarItem[]

export interface SidebarProps {
    list?: SideBarList
}
const Sidebar: React.FC<PropsWithChildren<SidebarProps>> = (props) => {
    let context = useContext(WindowContext);
    return <>
        <SidebarWrapper>
            <SidebarHeaderWrapper style={{height: context.toolbar?.props?.mono ? '38px' : '52px', paddingLeft: context.toolbar?.props?.mono ? '13px' : '20px'}}>
                <WindowControls/>
            </SidebarHeaderWrapper>
            <SidebarContentWrapper>
                {props?.list?.map(i => <>
                    <SideBarItemWrapper>
                        {i.title}
                        <SideBarItemIconWrapper>
                            <svg width="11px" height="11px" viewBox="0 0 11 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="Components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="SFPro-Bold, SF Pro" fontSize="9" fontWeight="bold">
                                    <g id="Components---Bars,-Controls,-Menus,-and-Lists" transform="translate(-1400.000000, -237.000000)" fill="#C6C6C6">
                                        <g id="Bars" transform="translate(0.000000, 94.000000)">
                                            <g id="Sidebar" transform="translate(1230.000000, 76.000000)">
                                                <g id="Section-Title" transform="translate(16.000000, 65.000000)">
                                                    <g id="Chevron" transform="translate(154.000000, 2.000000)">
                                                        <text id="Symbol">
                                                            <tspan x="0.270507812" y="9">􀆈</tspan>
                                                        </text>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </SideBarItemIconWrapper>
                    </SideBarItemWrapper>
                </>)}
                {props.children}
            </SidebarContentWrapper>
        </SidebarWrapper>
    </>
}
export default Sidebar;