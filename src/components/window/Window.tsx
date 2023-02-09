import React, {
    PropsWithChildren,
} from "react"
import styled from "styled-components";
import {WindowContext, WindowContextProvider} from "../utils/WindowContext";

const WindowWrapper = styled.div`
  border-radius: 10px;
  background: #FFFFFF;
  box-shadow: 0 36px 100px 0 rgba(0, 0, 0, 0.40), 0 0 3px 0 rgba(0, 0, 0, 0.55);
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const WindowContentWrapper = styled.div`
  flex: 1;
`;

export interface WindowProps {

}

const Window: React.FC<PropsWithChildren<WindowProps>> = (props) => {
    return <>
        <WindowContextProvider windowChildren={props.children}>
            <WindowContext.Consumer>
                {value => <>
                    <WindowWrapper style={{flexDirection: value.sidebar ? 'row' : 'column'}}>
                        {value.sidebar ?? value.toolbar ?? value.titleBar}
                        <WindowContentWrapper>
                            {value.content}
                        </WindowContentWrapper>
                    </WindowWrapper>
                </>}
            </WindowContext.Consumer>

        </WindowContextProvider>
    </>
}

export default Window;