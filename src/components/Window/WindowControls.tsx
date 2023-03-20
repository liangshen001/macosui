import React, {useContext, useMemo, useState} from "react"
import styled from "styled-components";
import {useToggle} from "react-use";
import {WindowContext} from "./WindowContext";

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

export const WindowControls: React.FC = (props) => {
    const [mouseOver, toggleMouseOver] = useToggle(false);
    const [fullScreen, toggleFullScreen] = useToggle(false);
    // const context = useContext(WindowContext);
    const {showClose, showMinimize, showMaximize, onResize, onMaximize} = {} as any
    // useMemo(() => {
    //     let showClose = true;
    //     let showMinimize = true;
    //     let showMaximize = true;
    //     let onResize;
    //     let onMinimize;
    //     let onMaximize;
    //     let onClose;
    //     switch (context.controls) {
    //         case true:
    //             break;
    //         case false:
    //             showClose = false
    //             showMinimize = false;
    //             showMaximize = false;
    //             break;
    //         default:
    //             showClose = context.controls?.showClose ?? true
    //             showMinimize = context.controls?.showMinimize ?? true
    //             showMaximize = context.controls?.showMaximize ?? true
    //             onResize = context.controls?.onResize
    //             onClose = context.controls?.onClose
    //             onMaximize = context.controls?.onMaximize
    //             onMinimize = context.controls?.onMinimize
    //     }
    //     return {
    //         showClose,
    //         showMinimize,
    //         showMaximize,
    //         onResize,
    //         onClose,
    //         onMaximize,
    //         onMinimize
    //     }
    // }, [context, toggleFullScreen]);
    return <>
        <WindowControlsWrapper
            onMouseOver={toggleMouseOver}
            onMouseOut={toggleMouseOver}>
            {/*<Icon type={over ? 'xmark.circle.fill' : 'circle.fill'} fontSize='12px' color={'#FF5F57'} />*/}
            {/*<Icon type={over ? 'minus.circle.fill' : 'circle.fill'} fontSize='12px' color={'#FEBC2E'} />*/}
            {/*<Icon type={over ? 'arrow.up.left.and.arrow.down.right.circle.fill' : 'circle.fill'} fontSize='12px' color={'#28C840'} />*/}
            <CloseWrapper>
                {/*{mouseOver && <Icon type={'xmark'} onClick={props.onClose} fontSize='8px' color="rgba(0, 0, 0, 0.5)" fontFamily={'Bold'} />}*/}
            </CloseWrapper>
            <MinimizeWrapper>
                {/*{mouseOver && <Icon type={'minus'} onClick={props.onMinimize} fontSize='9px' color="rgba(0, 0, 0, 0.5)" fontFamily={'Bold'} />}*/}
            </MinimizeWrapper>
            <ZoomWrapper>
                {mouseOver && (
                    fullScreen ?
                        <svg x="0px" y="0px" width="10px" height="10px" viewBox="0 0 20 20"
                             data-radium="true">
                            <path fill="#006400" d="M8.7,10H1l9,8.8v-7.5C9.3,11.2,8.7,10.7,8.7,10z"></path>
                            <path fill="#006400" d="M11.3,10H19l-9-8.8v7.5C10.7,8.8,11.3,9.3,11.3,10z"></path>
                        </svg> :
                        <svg x="0px" y="0px" width="10px" height="10px" viewBox="0 0 20 20"
                             data-radium="true">
                            <path fill="#006400" d="M5.3,16H13L4,7v7.7C4.6,14.7,5.3,15.4,5.3,16z"></path>
                            <path fill="#006400" d="M14.7,4H7l9,9V5.3C15.4,5.3,14.7,4.6,14.7,4z"></path>
                        </svg>
                )}
            </ZoomWrapper>

        </WindowControlsWrapper>
    </>
}