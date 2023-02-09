import React, {PropsWithChildren} from 'react';
import styled from "styled-components";


const GroupWrapper = styled.div`
  border-radius: 6px;
  background: rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.04);
  
  & + & {
    margin-top: 20px;
  }
`
export interface GroupProps {

}

const FormGroup: React.FC<PropsWithChildren<GroupProps>> = (props) => {
    return (
        <GroupWrapper>
            {props.children}
        </GroupWrapper>
    );
};

export default FormGroup;
