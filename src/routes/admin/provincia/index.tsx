import * as React from "react";
import { useNavigate } from 'react-router';
import StyledProvince from './Styled.Province';
import CaretLeft from '../../../icons/CaretLeft'
import { theme } from '../../constants';
import ToastVariant from '../../../components/Toast'
import Dashboard from '../common/Dashboard'
import Card from "../common/Card";
import Form from './Form';

function ProvinceAdmin() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1)
  }
  return (
    <>

      <StyledProvince>
        <ToastVariant linear={theme.green} color="#ffffff" />
        <Dashboard>
          <div className="btn-backwards" onClick={handleClick}>
            <CaretLeft />  <span>REGRESAR</span> 
          </div>
          <Card name="provincia">
            <Form />
          </Card>
        </Dashboard>
      </StyledProvince>
    </>
  );
}

export default ProvinceAdmin;

