import React from 'react';
import { Tooltip } from '@chakra-ui/react';

interface IProps {
  message?: string;
  children: React.ReactNode;
}

function SuggestedList(props: IProps) {
  return (
    <>
      <Tooltip label={props.message} hasArrow arrowSize={15}>
        {props.children}
      </Tooltip>
    </>
  );
}

export default SuggestedList;
