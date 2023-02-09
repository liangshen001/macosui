import React, {PropsWithChildren, ReactNode} from "react";
import './List.mac.css';

export interface ListProps {
    header?: ReactNode;
}

const List: React.FC<PropsWithChildren<ListProps>> = (props) => {
    return <>
        <div className={'list-ui'}>
            {props.header && <div className={'header'}>{props.header}</div>}
            <div className={`items-container`} >
                {props.children}
            </div>
        </div>
    </>
}
export default List;

export interface ItemProps {
    avatar?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    actions?: ReactNode[];

    onClick?: () => void;
}

export const Item: React.FC<ItemProps> = (props) => {
    return <>
        <div className={`item ${props.onClick ? 'clickable' : ''}`} onClick={props.onClick}>
            <div >
                <div>{props.title}</div>
                <div className={'description'}>{props.description}</div>
            </div>
            <div>{props.actions}</div>
        </div>
    </>
}
