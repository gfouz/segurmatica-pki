import * as React from "react";
import { useNavigate } from 'react-router';
import CaretLeft from '../../icons/CaretLeft'
import { Heading, HStack } from "@chakra-ui/react";
import styled from "styled-components";
import Form from './Form';


function Policy() {


  let navigate = useNavigate();
  function handleClick() {
    navigate(-1)
  }
  return (
   <>
    <StyledPolicy>
      <article className="policy">
      <Form />
      <Heading className="policy__title"> Terminos y condiciones de Segurmática </Heading>
       <p>
         You might think you can line things up and create some interesting effects by
         stringing together two or more spaces. Ha! Web browsers chew up all those
         extra spaces and spit them out into the nether regions of cyberspace. Why?
         Well, the philosophy of the web is that you can use only HTML tags to lay out a
         document. So a run of multiple spaces (or white space, as it’s called) is ignored.
         »Tabs also fall under the rubric of white space. You can enter tabs all day long,
         but the browser ignores them completely.
       </p>
       <HStack spacing='16px'>
        <CaretLeft/>
         <div>
            <button className="policy__button-backwards" onClick={handleClick}>REGRESAR</button>
         </div>
       </HStack>
     </article> 
    </StyledPolicy> 
  </>
  );
}

export default Policy;

const StyledPolicy = styled.div`
   min-height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   .policy {
     padding: 2em;
     max-width: 600px;
     background-color: #f1f1f1;
   }
   .policy__title {
      color: #888888;
      font-size: 20px;
   }
   .policy__button-backwards {
     text-transform: uppercase;
     font-weight: bolder;
     color: #0660b1;
   }
   
   p {
     color: #444444;
     font-family: calibri;
   }
`;