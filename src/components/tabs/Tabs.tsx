import React, {
    isValidElement,
    PropsWithChildren,
    ReactElement,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react";
import './Tabs.mac.css';
import {TabsContext} from "./TabsContext";
import {Tab, TabProps} from "./Tab";


export interface TabListProps {
    value?: any;
    onChange?: (value: any) => void;
    bordered?: boolean;
}
export const Tabs: React.FC<PropsWithChildren<TabListProps>> = (props) => {
    const [value, setValue] = useState(props.value);
    const [tabList, setTabList] = useState<ReactNode>();
    const [tabPanel, setTabPanel] = useState<ReactNode>();

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    useEffect(() => {
        const tabList = React.Children.map(props.children, (child: ReactNode, index) => {
            if (React.isValidElement<PropsWithChildren<TabProps>>(child) && child.type === Tab) {
                const tabValue = child.props.value ?? index;
                if (index === 0 && value === undefined) {
                    setValue(tabValue);
                    setTabPanel(child.props.children);
                } else if (value === tabValue) {
                    setTabPanel(child.props.children);
                }
                return React.cloneElement(child, {
                    value: tabValue
                });
            }
        });
        setTabList(tabList);
    }, [props.children, value]);

    const context = useMemo(() => ({
        init: false,
        value,
        onChange: (v: any, tabPanel: ReactNode) => {
            if (props.onChange) {
                props.onChange(v);
            }
            setValue(v);
            setTabPanel(tabPanel);
        }
    }), [value, setValue]);
    return <>
        <TabsContext.Provider value={context}>
            <div className={`tabs-ui ${props.bordered ? 'bordered' : ''}`}>
                <div className={'tab-list'}>
                    {tabList}
                </div>
                {tabPanel}
            </div>
        </TabsContext.Provider>
    </>;
}
