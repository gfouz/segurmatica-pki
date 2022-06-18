import * as React from 'react'
import styled from "styled-components";
import Layout from '../layout/Layout';
import {layoutProps} from './constants'
import ContactForm from '../../components/ContactForm'

function Contacts() {

  return (
    <Layout>
      <StyledContact>
        <section className="contact">
          <article className="contact__divider">
              <section className="contact__information">
               <a href="mailto: comercial@segurmatica.cu ">
                  <p className="contact__text">
                     Email: comercial@segurmatica.cu   
                  </p>
               </a>   
               <a href="mailto: soporte@segurmatica.cu ">
                  <p className="contact__text">  
                    Email: soporte@segurmatica.cu
                  </p>
               </a> 
                <a href="tel: +5378703536">
                   <p className="contact__text">
                    Tel: Comercial: 78703536 ext 133 y 134 .
                  </p>
                </a>
                <a href="tel: +5378703536">
                   <p className="contact__text">
                   Tel: Soporte Técnico: +78703536 ext 135 y 136 .
                  </p>
                </a>
              </section>
              <img src="./images/contact.png" alt="contact" />
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
   .contact__divider {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    width: 100%;
    position:relative;

    img {
      max-width: 100%;
      height: auto;
    }
   }
   .contact__information {
    position: absolute;
    top: 57%;
    margin: 0 auto;
    color: #555555;
    max-width: 320px;
    text-align: left;
    font-size: 0.9em;
    font-weight: bolder;
   }
`;
//0099FF
