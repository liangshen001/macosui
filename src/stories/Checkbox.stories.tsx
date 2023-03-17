import React, {useState} from 'react';
import { Story } from "@storybook/react";
import Checkbox from "../components/checkbox/Checkbox";
import Button from "../components/button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Checkbox',
    component: Checkbox,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`checked = ${e.target.checked}`);
};
const BasicTemplate = () => <>
    <Checkbox onChange={onChange}>Checkbox</Checkbox>
</>
export const Basic = BasicTemplate.bind({});

const DisabledTemplate = () => <>
    <Checkbox disabled />
    <br/>
    <Checkbox defaultChecked disabled />
    <br/>
    <Checkbox indeterminate disabled />
</>
export const Disabled = DisabledTemplate.bind({});
const ControlledCheckboxTemplate = () => {
    const [checked, setChecked] = useState(true);
    const [disabled, setDisabled] = useState(false);

    const toggleChecked = () => {
        setChecked(!checked);
    };

    const toggleDisable = () => {
        setDisabled(!disabled);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('checked = ', e.target.checked);
        setChecked(e.target.checked);
    };

    const label = `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`;

    return <>
        <Checkbox checked={checked} disabled={disabled} onChange={onChange} >{label}</Checkbox>
        <p>
            <Button onClick={toggleChecked}>
                {!checked ? 'Check' : 'Uncheck'}
            </Button>
            <Button style={{ margin: '0 10px' }} onClick={toggleDisable}>
                {!disabled ? 'Disable' : 'Enable'}
            </Button>
        </p>
    </>
}
export const ControlledCheckbox = ControlledCheckboxTemplate.bind({});


const CheckAllTemplate: Story<{}> = (args) => {
    const [indeterminate, setIndeterminate] = useState(false);
    const [checkAll, setCheckAll] = useState(false);

    const [checkMap, setCheckMap] = useState({apple: false, pear: true, orange: false})

    const onCheckAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIndeterminate(false);
        setCheckAll(e.target.checked);
        setCheckMap({apple: e.target.checked, pear: e.target.checked, orange: e.target.checked});
    };
    const changeItem = (type: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCheckMap = {...checkMap, [type]: e.target.checked};
        setCheckMap(newCheckMap);
        let indeterminate = Object.values(newCheckMap).reduce((p, v) => p || v);
        setIndeterminate(indeterminate);
        let checkAll = Object.values(newCheckMap).reduce((p, v) => p && v);
        setCheckAll(checkAll);
    }
    return <>
        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>Check all</Checkbox>
        <br/>
        <Checkbox checked={checkMap.apple} onChange={changeItem('apple')}>Apple</Checkbox>
        <Checkbox checked={checkMap.pear} onChange={changeItem('pear')}>Pear</Checkbox>
        <Checkbox checked={checkMap.orange} onChange={changeItem('orange')}>Orange</Checkbox>
    </>
}
export const CheckAll = CheckAllTemplate.bind({});




