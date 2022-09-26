import * as React from 'react';
import styled from 'styled-components';
import { IFormList } from './constants';
import { useSnapshot } from 'valtio';
import { state } from './store';
//import { useCardStore } from '../common/cardStore';

function FormsIterator({ form }: IFormList) {
  //let selected = useCardStore((state) => state.option);
  const snap = useSnapshot(state);
  let selected = snap.opt;
  const [option, setOption] = React.useState('');
  React.useEffect(() => {
    setOption(selected);
  }, [selected]);
  return (
    <>
      {form &&
        form.map(
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
