import React, {useState} from 'react';
import { Story } from "@storybook/react";
import CloseIcon from "./CloseIcon";
import SearchIcon from "./SearchIcon";
import ArrowForwardIcon from "./ArrowForwardIcon";
import ExpandMoreIcon from "./ExpandMoreIcon";
import ExpandLessIcon from "./ExpandLessIcon";
import SidebarIcon from "./SidebarIcon";
import Icon from "./Icon";
import ArrowBackIcon from "./ArrowBackIcon";
import HorizontalRuleIcon from "./HorizontalRuleIcon";
import QuestionIcon from "./QuestionIcon";
import SettingIcon from "./SettingIcon";
import AddIcon from "./AddIcon";
import CheckIcon from "./CheckIcon";
import StarIcon from "./StarIcon";
import CircleIcon from "./CircleIcon";
import DashedRectangleIcon from "./DashedRectangleIcon";
import UnorderedListIcon from "./UnorderedListIcon";
import InfoIcon from "./InfoIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Icon',
    component: Icon,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};
const DemoTemplate = () => <>
    <SidebarIcon />
    <SettingIcon />
    <ExpandLessIcon />
    <ExpandMoreIcon />
    <ArrowForwardIcon />
    <ArrowBackIcon />
    <CloseIcon />
    <SearchIcon />
    <HorizontalRuleIcon />
    <QuestionIcon />
    <AddIcon />
    <CheckIcon />
    <StarIcon />
    <CircleIcon />
    <DashedRectangleIcon />
    <UnorderedListIcon />
    <InfoIcon />
    <Icon type={'info'} />
</>
export const Demo = DemoTemplate.bind({});





