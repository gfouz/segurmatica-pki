import{s as E,r as a,j as s,F,J as H,a as i,K as P,I as h,G as q}from"./index.65025839.js";import{u as p,e as v,S as B,f as C,j as I}from"./Card.8f9da9f1.js";import{A as K}from"./Getter.dd8f0e80.js";import{S as L}from"./chakra-ui-select.esm.21842cd1.js";function R(g){var d,u;const{path:S,attached:f,queryKey:x}=g,[c,y]=a.exports.useState(""),[l,j]=a.exports.useState(""),{data:o}=p("entidades-registro",()=>C(f)),{data:e,isLoading:A,isError:G,refetch:w}=p(x,()=>I(S,l));e==null||e.result;const n=o==null?void 0:o.result,m=((u=(d=e==null?void 0:e.response)==null?void 0:d.data)==null?void 0:u.message)||(e==null?void 0:e.message);a.exports.useEffect(()=>{v(m,y)},[m]);const z=r=>{var t;j((t=r==null?void 0:r.target)==null?void 0:t.value)};return a.exports.useEffect(()=>{w()},[l]),s(F,{children:s(H,{p:"1em",children:i(P,{children:[s("label",{htmlFor:"association",children:s(h,{size:"md",m:"0.5em 0",color:"#009966",children:"Seleccione asociado:"})}),s(L,{placeholder:"Select option",size:"xm",color:"#000000",onChange:r=>z(r),children:n==null?void 0:n.map((r,t)=>s("option",{value:r.id,children:r.email||r.name},t))}),i(b,{children:[G&&s("div",{children:"An error ocurred..."}),A&&i("div",{children:[s(q,{size:"sm",color:"white"}),s(h,{color:"white",children:"Loading..."})]}),s(K,{data:e==null?void 0:e.result}),c&&s(B,{message:c})]})]})})})}const b=E.div`
  width: 100%;
`;export{R as G};
