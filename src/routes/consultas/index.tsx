import * as React from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import Header from '../../components/header/Header';
import ErrorMessage from '../../components/ErrorMessage';
import { Heading } from '@chakra-ui/react';

export default function Request() {
  const [toggle, setToggle] = React.useState(true);

  return (
    <Layout>
      <StyledRequest>
        <div className='container'>
          <section>
            <ErrorMessage msg='anything!' />
          </section>
        </div>
      </StyledRequest>
    </Layout>
  );
}

const StyledRequest = styled.div`

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
}
}
  
  
`;
