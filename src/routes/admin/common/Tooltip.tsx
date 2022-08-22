import React from 'react';
import { Input, Tooltip } from '@chakra-ui/react';

function SuggestedList(props) {
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
