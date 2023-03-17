import React, {useState} from 'react';
import { Story } from "@storybook/react";
import CloseIcon from "../components/icon/CloseIcon";
import SearchIcon from "../components/icon/SearchIcon";
import ArrowForwardIcon from "../components/icon/ArrowForwardIcon";
import ExpandMoreIcon from "../components/icon/ExpandMoreIcon";
import ExpandLessIcon from "../components/icon/ExpandLessIcon";
import SidebarIcon from "../components/icon/SidebarIcon";
import Icon from "../components/icon/Icon";
import ArrowBackIcon from "../components/icon/ArrowBackIcon";
import HorizontalRuleIcon from "../components/icon/HorizontalRuleIcon";
import QuestionIcon from "../components/icon/QuestionIcon";
import SettingIcon from "../components/icon/SettingIcon";
import AddIcon from "../components/icon/AddIcon";
import CheckIcon from "../components/icon/CheckIcon";
import StarIcon from "../components/icon/StarIcon";
import CircleIcon from "../components/icon/CircleIcon";
import DashedRectangleIcon from "../components/icon/DashedRectangleIcon";
import UnorderedListIcon from "../components/icon/UnorderedListIcon";
import InfoIcon from "../components/icon/InfoIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Icon',
    component: Icon,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};
const DemoTemplate = () => <>
    <Icon type={'xmark.circle'} />
    <Icon type={'xmark.square.fill'} />
</>
export const Demo = DemoTemplate.bind({});





