import * as React from 'react'
import styled from "styled-components";
import Layout from '../layout/Layout';
import {layoutProps} from './constants'
import ContactForm from '../../components/ContactForm'

function Contacts() {

  return (
    <Layout {...layoutProps}>
      <StyledContact>
        <section className="contact">
          <article className="contact__divider">
              <h2 className="contact__title"> Contacte nos aquí!</h2>
              <img src="./images/habana.jpg"  />
          </article>
          <article className="contact__divider">
            <ContactForm />
          </article>
        </section>
      </StyledContact>  
    </Layout>
  );
}

export default Contacts;

const StyledContact = styled.div`
   width: 100%;
   height: 100%;
   .contact {
    display: flex;
    @media (max-width: 800px){
      flex-direction: column;
      align-items: center;
    }
    }
   .contact__title {
    color: #222222;
    position: absolute;
    top: 40%;
    left:50%;
    white-space: nowrap;
    font-size: 1.6em;
    font-weight: bolder;
    text-transform: uppercase;
    text-shadow: 1px 1px 10px #ffffff;
    transform: translate(-50%, -50%);
   } 
   .contact__divider {
    display: flex;
    flex-direction: column;
  
    align-items: center;
    text-align: center;
    width: 100%;
    position:relative;
   }
`;