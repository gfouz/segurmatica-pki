import{s as p,r as S,R as y,a as t,j as s,G as a,a1 as E}from"./index.84145a61.js";import{u as v,S as x}from"./StatusHandler.4fa71a43.js";import{g as G}from"./StyledLabel.97b52d23.js";import{A as b}from"./Getter.2ace4167.js";import{B as j}from"./chakra-ui-button.esm.6a8e0e0a.js";function A(c){var i,n;const{url:l,queryKey:u}=c,[r,m]=S.exports.useState(null),{data:e,isError:d,isLoading:f,isSuccess:h,refetch:g}=v(u,()=>G(l));e==null||e.result;const o=((n=(i=e==null?void 0:e.response)==null?void 0:i.data)==null?void 0:n.message)||(e==null?void 0:e.message);return y.useEffect(()=>{m(o)},[o]),t(w,{children:[r==="Network Error"&&s("div",{className:"refetch-button",children:s(j,{size:"sm",onClick:()=>{g()},children:"Intentar"})}),d&&t("div",{children:[s(a,{size:"sm"})," Error ocurred..."]}),f&&t("div",{children:[s(a,{size:"sm",color:"white"}),s(E,{color:"#ffffff",children:"Loading"})]}),h&&s(b,{data:e==null?void 0:e.result}),s("div",{className:"status",children:r&&s(x,{message:r})})]})}const w=p.div`
  width: 100%;
  .status {
    text-align: center;
  }
`;export{A as G};
