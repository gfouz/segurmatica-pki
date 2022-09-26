import React, { ReactNode } from 'react';
import { Tooltip } from '@chakra-ui/react';

interface IProps {
  message: string;
  children: React.ReactNode;
}

function SuggestedWords({ message, children }: IProps) {
  return (
    <>
      <Tooltip label={message} hasArrow arrowSize={15}>
        {children}
      </Tooltip>
    </>
  );
}

export default SuggestedWords;
