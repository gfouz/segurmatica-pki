import React from 'react';
import { Tooltip } from '@chakra-ui/react';

interface IProps {
  listname: string;
  datalist: string[];
  message: string;
  children: React.ReactNode;
}

function SuggestedList(props: IProps) {
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
