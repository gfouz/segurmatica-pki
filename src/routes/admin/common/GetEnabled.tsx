import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ChakraInput from "../../../components/input/ChakraInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQuery } from "react-query";
import { provinces, tooltip} from "./cardStore";
import Alert from './Tooltip'
import {
  Box,
  Flex,
  HStack,
  Button,
  Center,
  Spinner,
  Input,
  Heading,
  Container,
} from "@chakra-ui/react";

interface IFormInput {
  id?: string;
  name?: string;
}

export type IProvince = {
  id: string;
  name: string;
  enabled: boolean;
};
interface IProvinceList {
  data: IProvince[];
}
const BASE_URL = "http://localhost:5000/";

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

axiosApi.defaults.headers.common["Content-Type"] = "application/json";


export default function Getter(props) {

  const [status, setStatus] = useState(null);

  const format = (res) => {
    return JSON.stringify(res, null, 2);
  };


async function getRequest() {
  
      try {
        const res = await axiosApi.get(props.url);
        const result = {
          data: res.data,
          status: res.status,
          statusText: res.statusText
        };
        setStatus(res.status);
        return result.data;
        } 
         catch (err) {
         setStatus(err.message); 
         return err
        }
      }

  const { data, isError, isLoading, isSuccess, refetch } = useQuery(props.keys , getRequest);
  
   return(
    
     <StyledGetter>
      {status === 'Network Error' && <div className='refetch-button'>
       <Button size='sm' onClick={()=> {refetch()}} >Intentar</Button>
      </div>}
      {isError && <div><Spinner size="sm" /> Error ocurred...</div>}
      {isLoading && <div><Spinner size="sm" color="white"/><Heading color='#ffffff'>Loading</Heading></div>}
      {isSuccess && (
        <div className='list-container'>
          {Array.isArray(data) && data.map((item) => (
            <ul className='list' key={item.id}>
              <li className='list__item'>Número de ID: {item.id}</li>
              <li className='list__item'>Provincia: {item.name}</li>
              <li className='list__item'>Estado: {item.enabled ? 'habilitado':'deshabilitado'}</li>
            </ul>
          ))}
        </div>
      )}
       {status === 'Network Error' && <Heading color='#fff4a3' size='sm'>Network Error</Heading>}
    </StyledGetter>
    
)
 }
 
const StyledGetter = styled.div`

.list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #222222;
}
 .list {
  padding: 0;
  margin: 0;
  border-radius: 10px;
  width: 200px;
  padding: 1em;
  margin: 0.2em;
  background-color: #672587;
  box-shadow: 1px 1px 10px #672587;
 }
 .list__item {
  color: #ffffff;
  text-align: left;
  list-style-type: none;
 }
 .refetch-button {
   position: absolute;
   top: 5em;
   left: 1em;
 }
`;