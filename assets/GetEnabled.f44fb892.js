import{s as p,r as S,R as y,a as t,j as s,G as a,I as E}from"./index.65025839.js";import{u as v,S as x,g as G}from"./Card.8f9da9f1.js";import{A as b}from"./Getter.dd8f0e80.js";import{B as j}from"./chakra-ui-button.esm.4448790b.js";function k(c){var o,i;const{url:l,queryKey:u}=c,[r,m]=S.exports.useState(null),{data:e,isError:d,isLoading:f,isSuccess:h,refetch:g}=v(u,()=>G(l));e==null||e.result;const n=((i=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:i.message)||(e==null?void 0:e.message);return y.useEffect(()=>{m(n)},[n]),t(w,{children:[r==="Network Error"&&s("div",{className:"refetch-button",children:s(j,{size:"sm",onClick:()=>{g()},children:"Intentar"})}),d&&t("div",{children:[s(a,{size:"sm"})," Error ocurred..."]}),f&&t("div",{children:[s(a,{size:"sm",color:"white"}),s(E,{color:"#ffffff",children:"Loading"})]}),h&&s(b,{data:e==null?void 0:e.result}),s("div",{className:"status",children:r&&s(x,{message:r})})]})}const w=p.div`
  width: 100%;
  .status {
    text-align: center;
  }
`;export{k as G};