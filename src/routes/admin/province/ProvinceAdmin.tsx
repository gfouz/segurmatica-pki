//import * as React from "react";
import { useNavigate } from 'react-router';
import StyledProvince from  './Styled.Province.ts';
import Layout from "../../layout/Layout";
import Form from './Form'; 
import CaretLeft from '../../../icons/CaretLeft'
import { theme } from '../../constants';
import ToastVariant  from '../../../components/Toast'
import { HStack } from "@chakra-ui/react";

function ProvinceAdmin() {
  let navigate = useNavigate();
  function handleClick() {
    navigate(-1)
  }
  return (
    <>
      <StyledProvince>
         <ToastVariant linear={theme.green} color = "#ffffff"/>
        <section className="province">
            <Form />
            <nav className="btn-backwards">
              <button  onClick={handleClick}>
                 <div className="btn-backwards__content">
                   <CaretLeft/>
                   <span className="btn-backwards__text">REGRESAR</span>
                 </div>
              </button>
            </nav>  
        </section>
      </StyledProvince>
    </>  
  );
}

export default ProvinceAdmin;

