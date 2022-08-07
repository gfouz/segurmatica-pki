import styled from 'styled-components';

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
  
 .bg-grey  {
  background-color: #3a3839;
 }
 .btn-backwards {
     position: absolute;
     top: 4rem;
     left: 2em;
     display: flex;
     text-transform: uppercase;
     font-weight: bolder;
     color: #0660b1;
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
export default StyledProvince;