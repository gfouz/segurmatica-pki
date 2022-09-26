import React from 'react';
import { Tooltip } from '@chakra-ui/react';

function SuggestedWords(props: {
  listname: string | undefined;
  datalist: string[];
  message:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <>
      <Tooltip label={props.message} hasArrow arrowSize={15}>
        {props.children}
      </Tooltip>
    </>
  );
}

export default SuggestedWords;
