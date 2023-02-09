import React from 'react';
import TextField, {TextFieldProps} from "./TextField";
import SearchIcon from "../icon/SearchIcon";

export type SearchFieldProps = Omit<TextFieldProps, 'icon'>;

const SearchField: React.FC<SearchFieldProps> = (props) => {
    return <>
        <TextField {...props} icon={<SearchIcon fontSize="12px"/>}/>
    </>;
};

export default SearchField;