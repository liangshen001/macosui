import React, {ReactNode} from "react";
export const TabsContext = React.createContext<{
    init: boolean;
    value: any;
    onChange: (value: any, tabPanel: ReactNode) => void;
}>({
    init: false,
    value: 0,
    onChange: () => {}
});
