var p=Object.defineProperty;var a=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var r=(e,t,i)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,m=(e,t)=>{for(var i in t||(t={}))x.call(t,i)&&r(e,i,t[i]);if(a)for(var i of a(t))g.call(t,i)&&r(e,i,t[i]);return e};import{r as l,u as h,j as o,F as y,a as u,s as b}from"./index.84145a61.js";import{u as S,S as _}from"./StatusHandler.4fa71a43.js";import{b as v,S as w,e as E}from"./StyledLabel.97b52d23.js";import{B as j}from"./chakra-ui-button.esm.6a8e0e0a.js";function k(e){return l.exports.createElement("svg",m({viewBox:"0 0 192 512",width:e.width||"1em",length:e.height||"auto"},e),l.exports.createElement("path",{fill:e.color,d:"M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"}))}function T(){const e="condiciones",[t,i]=l.exports.useState(""),{data:s,isLoading:N,isError:z}=S("full-policy",()=>E(e)),c=localStorage.getItem("jwt");l.exports.useEffect(()=>{c&&(v.defaults.headers.common.jwt=c)},[]);const n=s==null?void 0:s.message;l.exports.useEffect(()=>{n&&i(n)},[n]);let d=h();function f(){d(-1)}return o(y,{children:o(L,{children:u("article",{className:"policy",children:[o("div",{className:"policy__button",children:u(j,{onClick:f,children:[o(k,{fontSize:"10px"}),o("span",{className:"policy__button-text",children:"regresar"})]})}),t&&o(_,{message:t}),o(w,{capit:!0,children:" T\xE9rminos y condiciones de Segurm\xE1tica "}),o("p",{children:s==null?void 0:s.data})]})})})}const L=b.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .policy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
    max-width: 600px;
    background-color: #f1f1f1;
  }
  .policy__title {
    color: #888888;
    font-size: 20px;
  }
  .policy__button {
    text-transform: uppercase;
    font-weight: bolder;
    color: #0660b1;
    align-self: flex-start;
  }
  .policy__button-text {
    margin: 0 0.5em;
  }
  p {
    color: #444444;
    font-family: calibri;
  }
`;export{T as default};
