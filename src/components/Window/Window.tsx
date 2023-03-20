import React, {
    PropsWithChildren, useContext,
} from "react"
import styled from "styled-components";
import {WindowContext, WindowContextProvider} from "./WindowContext";
import TitleBar from "./TitleBar";

const WindowWrapper = styled.div`
  border-radius: 10px;
  background: #FFFFFF;
  box-shadow: 0 36px 100px 0 rgba(0, 0, 0, 0.40), 0 0 3px 0 rgba(0, 0, 0, 0.55);
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(246, 246, 246, 0.84);
`;
const WindowContentWrapper = styled.div`
  flex: 1;
  overflow: auto;
  padding: 10px;
`;

const WindowContent: React.FC<PropsWithChildren> = (props) => {
    let context = useContext(WindowContext);
    if (context.sidebar && context.toolbar) {
        return <>
            <div style={{flex: 1, flexDirection: "row"}}>
                {context.toolbar}
                <WindowContentWrapper>
                    {props.children}
                </WindowContentWrapper>
            </div>
        </>
    }
    return <>
        <WindowContentWrapper>
            {props.children}
        </WindowContentWrapper>
    </>
}

export interface WindowProps {
    title?: string
    controls?: boolean | {
        onClose?: () => void;
        onMaximize?: () => void;
        onMinimize?: () => void;
        onResize?: () => void;
        showClose?: boolean
        showMinimize?: boolean
        showMaximize?: boolean
    }
}

const Window: React.FC<PropsWithChildren<WindowProps>> = (props) => {
    return <>
        <WindowContextProvider title={props.title} windowChildren={props.children} >
            <WindowContext.Consumer>
                {value => {
                    return <>
                        <WindowWrapper style={{flexDirection: value.sidebar ? 'row' : 'column'}}>
                            {value.sidebar ?? value.toolbar ?? <TitleBar title={value.title} />}
                            <WindowContent>
                                {/*{value.content}*/}
                            </WindowContent>
                        </WindowWrapper>
                    </>
                }}
            </WindowContext.Consumer>

        </WindowContextProvider>
    </>
}

export default Window;