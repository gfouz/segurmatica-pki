import * as React from 'react';
import styled from 'styled-components';
import { IOptions } from './constants';
import { useSnapshot } from 'valtio';
import { state } from './store';

function FormsIterator({ options }: IOptions) {

  const snap = useSnapshot(state);
  let selected = snap.opt;
  const [option, setOption] = React.useState('');

  React.useEffect(() => {
    setOption(selected);
  }, [selected]);
  
  return (
    <>
      {options &&
        options.map(
          (item, idx) =>
            option == item.option && <StyledContainer key={idx}>{item.comp}</StyledContainer>,
        )}
    </>
  );
}
export default FormsIterator;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3em 0;
`;
