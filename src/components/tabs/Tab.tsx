import React, {PropsWithChildren, useContext, useEffect} from "react";
import {TabsContext} from "./TabsContext";

export interface TabProps {
    label: React.ReactNode;
    value?: any;
}

export const Tab: React.FC<PropsWithChildren<TabProps>> = (props) => {
    const context = useContext(TabsContext);
    return <>
        <div className={props.value === context.value ? 'tab activated' : 'tab'}
                onClick={() => {
                    context.onChange(props.value, props.children)
                }}>
            {props.label}
        </div>
    </>;
}
