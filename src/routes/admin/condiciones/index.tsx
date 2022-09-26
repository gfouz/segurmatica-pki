import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../../constants';
import ToastVariant from '../../../components/Toast';
import Dashboard from '../common/Dashboard';
import Card from '../common/Card';
import FormsIterator from '../common/FormsIterator';
import { FormsList } from './FormList';
import { axiosApi } from '../common/constants';

function TermsAdmin() {
  const token = localStorage.getItem('jwt');
  React.useEffect(() => {
    if (token) {
      axiosApi.defaults.headers.common['jwt'] = token;
    }
  }, []);

  return (
    <>
      <StyledProvince>
        <ToastVariant linear={theme.green} color='#ffffff' />
        <Dashboard>
          <Card name='Terminos y...'>
            <FormsIterator form={FormsList} />
          </Card>
        </Dashboard>
      </StyledProvince>
    </>
  );
}

export default TermsAdmin;

const StyledProvince = styled.div`
  width: 100%;
  position: relative;
  background-color: #ffffff;
  .province {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .province__divider {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg-grey {
    background-color: #3a3839;
  }
  .btn-backwards {
    align-self: flex-start;
    display: flex;
    text-transform: uppercase;
    font-weight: bolder;
    color: #0660b1;
    margin: 1em;
    span {
      position: relative;
      top: 0.5rem;
      left: 1rem;
      color: #009fff;
    }
  }
  .btn-backwards__text {
    font-weight: bolder;
    position: relative;
    top: 8px;
    left: 5px;
  }
`;
