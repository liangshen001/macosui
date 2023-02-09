import styled from "styled-components";

export const TitleWrapper = styled.div`
  font-weight: bold;
  font-family: SFPro-Semibold,serif;
  font-size: 15px;
  color: #4D4D4D;
  line-height: 20px;
  display: block;
  height: 20px;
  align-items: center;
`;

export const SubtitleWrapper = styled.div`
  display: ${props => props.children ? 'unset' : 'none'};
  font-family: SFPro-Regular,serif;
  font-size: 11px;
  color: #808080;
  line-height: 14px;
`;