import{s as g,r as n,j as s,F as x,a as m,a2 as y,a3 as F}from"./index.84145a61.js";import{u as i,b as j,s as C}from"./store.6f1159d1.js";import{S as q}from"./StatusHandler.4fa71a43.js";import{u as A,a as H}from"./index.esm.d64a2720.js";import{f as L}from"./StyledLabel.97b52d23.js";import{S as T}from"./SubmitButton.d37232a3.js";import{T as k}from"./TextInput.0bd60058.js";function z(u){var r;const c="se permiten nombres compuestos sin n\xFAmeros",{url:f,msg:B}=u,[o,l]=n.exports.useState("");i(j);const p=i(C),{register:d,handleSubmit:S,formState:{errors:b}}=A(),t=H(a=>L(f,a)),h=async a=>{t.mutateAsync(a)},e=(r=t==null?void 0:t.data)==null?void 0:r.message;return n.exports.useEffect(()=>{e&&l(e),e==="created"&&p.setOption("mostrar")},[e]),s(x,{children:m("form",{onSubmit:S(h),children:[s(y,{p:"1em",children:m(F,{children:[s(w,{children:"Nombre"}),s(k,{label:"name",register:d,errors:b,required:!0,info:c})]})}),s(T,{buttonstate:t==null?void 0:t.isLoading}),o&&s(q,{message:o})]})})}const w=g.h4`
  color: #888888;
  font-weight: bolder;
`;export{z as C};
