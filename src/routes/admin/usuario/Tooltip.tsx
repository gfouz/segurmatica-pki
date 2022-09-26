import React from 'react';
import { Input, Tooltip } from '@chakra-ui/react';

function SuggestedList(props: {
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
      <datalist id={props.listname}>
        {props.datalist &&
          props.datalist.map((item: string) => (
            <option key={item.toString()} value={item}></option>
          ))}
      </datalist>
      <Tooltip label={props.message} hasArrow arrowSize={15}>
        {props.children}
      </Tooltip>
    </>
  );
}

export default SuggestedList;
