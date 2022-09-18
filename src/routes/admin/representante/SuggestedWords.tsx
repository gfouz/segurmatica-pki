import React, { ReactNode } from 'react';
import { Tooltip } from '@chakra-ui/react';

interface IProps {
  listname: string;
  datalist: string[];
  message: string;
  children: React.ReactNode;
}

function SuggestedWords({ listname, datalist, message, children }: IProps) {
  return (
    <>
      <datalist id={listname}>
        {datalist &&
          datalist.map((item: string) => <option key={item.toString()} value={item}></option>)}
      </datalist>
      <Tooltip label={message} hasArrow arrowSize={15}>
        {children}
      </Tooltip>
    </>
  );
}

export default SuggestedWords;
