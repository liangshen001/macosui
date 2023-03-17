import React, {useState} from "react"
import styled from "styled-components";
import {Icon} from "../icon";

const WindowControlsItemWrapper = styled.span`
  border: 0.5px solid rgba(0, 0, 0, 0.20);
  height: 12px;
  width: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
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
const WindowControlsWrapper = styled.div`
  display: inline-flex;
  z-index: 2;
  & span + span {
    margin-left: 8px;
  }
`;

export interface WindowControlsProps {
    onClose?: () => void;
    onMaximize?: () => void;
    onMinimize?: () => void;
    onResize?: () => void;
}

export const WindowControls: React.FC<WindowControlsProps> = (props) => {
    const [over, setOver] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);
    const onMaximize = () => {
        setFullScreen(true);
        props.onMaximize?.();
    }
    const onResize = () => {
        setFullScreen(false);
        props.onResize?.();
    }
    return <>
        <WindowControlsWrapper
                               onMouseOver={() => setOver(true)}
                               onMouseOut={() => setOver(false)}>
            {/*<Icon type={over ? 'xmark.circle.fill' : 'circle.fill'} fontSize='12px' color={'#FF5F57'} />*/}
            {/*<Icon type={over ? 'minus.circle.fill' : 'circle.fill'} fontSize='12px' color={'#FEBC2E'} />*/}
            {/*<Icon type={over ? 'arrow.up.left.and.arrow.down.right.circle.fill' : 'circle.fill'} fontSize='12px' color={'#28C840'} />*/}
            <CloseWrapper>
                {over && <Icon type={'xmark'} onClick={props.onClose} fontSize='8px' color="rgba(0, 0, 0, 0.5)" fontFamily={'Bold'} />}
            </CloseWrapper>
            <MinimizeWrapper>
                {over && <Icon type={'minus'} onClick={props.onMinimize} fontSize='9px' color="rgba(0, 0, 0, 0.5)" fontFamily={'Bold'} />}
            </MinimizeWrapper>
            <ZoomWrapper>
                {over && (
                    fullScreen ?
                        <svg onClick={onResize} x="0px" y="0px" width="10px" height="10px" viewBox="0 0 20 20" data-radium="true"><path fill="#006400" d="M8.7,10H1l9,8.8v-7.5C9.3,11.2,8.7,10.7,8.7,10z"></path><path fill="#006400" d="M11.3,10H19l-9-8.8v7.5C10.7,8.8,11.3,9.3,11.3,10z"></path></svg> :
                        <svg onClick={onMaximize} x="0px" y="0px" width="10px" height="10px" viewBox="0 0 20 20" data-radium="true"><path fill="#006400" d="M5.3,16H13L4,7v7.7C4.6,14.7,5.3,15.4,5.3,16z"></path><path fill="#006400" d="M14.7,4H7l9,9V5.3C15.4,5.3,14.7,4.6,14.7,4z"></path></svg>
                )}
            </ZoomWrapper>

        </WindowControlsWrapper>
    </>
}