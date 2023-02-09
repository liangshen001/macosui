import React, {Children, PropsWithChildren, ReactElement, ReactNode, useMemo} from "react";
import Sidebar, {SidebarProps} from "../sidebar/Sidebar";
import Toolbar, {ToolbarProps} from "../toolbar/Toolbar";
import TitleBar, {TitleBarProps} from "../title-bar/TitleBar";

export const WindowContext = React.createContext<{
    sidebar?: ReactElement<SidebarProps>;
    toolbar?: ReactElement<ToolbarProps>;
    titleBar?: ReactElement<TitleBarProps>;
    // 去掉bar的内容
    content?: ReactNode;
}>({});

export interface WindowContextProviderProps {
    windowChildren: ReactNode
}

export const WindowContextProvider: React.FC<PropsWithChildren<WindowContextProviderProps>> = (props) => {
    const value = useMemo(() => {
        let sidebar: ReactElement<SidebarProps> | undefined = undefined;
        let toolbar: ReactElement<ToolbarProps> | undefined = undefined;
        let titleBar: ReactElement<TitleBarProps> | undefined = undefined;
        const content = Children.map(props.windowChildren, i => {
            if (React.isValidElement(i)) {
                if (i.type === Sidebar) {
                    sidebar = i as ReactElement<SidebarProps>;
                } else if (i.type === Toolbar) {
                    toolbar = i as ReactElement<ToolbarProps>;
                    // 如果有侧边栏 则返回toolbar  左栏/上栏/内容 布局
                    if (sidebar) {
                        return i;
                    }
                } else if (i.type === TitleBar) {
                    titleBar = i as ReactElement<TitleBarProps>;
                } else {
                    return i;
                }
            }
        });
        return {
            titleBar,
            toolbar,
            sidebar,
            content
        }
    }, [props.windowChildren]);
    return <>
        <WindowContext.Provider value={value}>
            {props.children}
        </WindowContext.Provider>
    </>;
}