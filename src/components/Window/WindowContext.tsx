import React, {Children, PropsWithChildren, ReactElement, ReactNode, useMemo} from "react";
import Sidebar, {SidebarProps} from "./Sidebar";
import Toolbar, {ToolbarProps} from "./Toolbar";
import TitleBar, {TitleBarProps} from "./TitleBar";
import Slider from "../slider/Slider";
import {WindowProps} from "./index";

/**
 * Window Context
 * Window 的子组件上下文
 * sidebar: 边栏
 * toolbar: 上工具栏
 * content: window的主体内容
 */
export const WindowContext = React.createContext<{
    sidebar?: ReactElement<SidebarProps, typeof Sidebar>;
    toolbar?: ReactElement<ToolbarProps, typeof Toolbar>;
    // 去掉bar的内容
    content?: ReactNode;
} & WindowProps>({});

export interface WindowContextProps extends WindowProps {
    windowChildren: ReactNode;
}


export const WindowContextProvider: React.FC<PropsWithChildren<WindowContextProps>> = (props) => {
    const value = useMemo(() => {
        let sidebar: ReactElement<SidebarProps, typeof Sidebar> | undefined;
        let toolbar: ReactElement<ToolbarProps, typeof Toolbar> | undefined;
        const content = Children.map(props.windowChildren, i => {
            if (React.isValidElement(i)) {
                if (i.type === Sidebar) {
                    sidebar = i as ReactElement<SidebarProps, typeof Sidebar>;
                } else if (i.type === Toolbar) {
                    toolbar = i as ReactElement<ToolbarProps, typeof Toolbar>;
                } else {
                    return i;
                }
            }
        });
        return {
            toolbar,
            sidebar,
            content,
            title: props.title
        }
    }, [props.windowChildren, props.title]);
    return <>
        <WindowContext.Provider value={value}>
            {props.children}
        </WindowContext.Provider>
    </>;
}