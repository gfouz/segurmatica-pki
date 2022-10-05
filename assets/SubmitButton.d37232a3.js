var h=Object.defineProperty;var d=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var l=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&l(e,r,t[r]);if(d)for(var r of d(t))g.call(t,r)&&l(e,r,t[r]);return e};import{r as a,s as o,u as m,a as i,j as n,G as u,T as p}from"./index.84145a61.js";function x(e){return a.exports.createElement("svg",s({viewBox:"0 0 192 512",width:e.width||"1em",length:e.height||"auto"},e),a.exports.createElement("path",{fill:e.color,d:"M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"}))}function k({children:e}){const t=m();function r(){t(-1)}return i(b,{children:[n("header",{children:i("div",{className:"backwards",onClick:r,children:[n(x,{fontSize:"10px",color:"blue"})," ",n("span",{children:"REGRESAR"})]})}),n("main",{children:e}),n("footer",{})]})}const b=o.div`
  border: 1px solid black;
  display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-areas:
    'header header'
    'main  main'
    'footer  footer';
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 1fr;

  header {
    text-align: center;
    grid-area: header;
    color: #372381;
    font-weight: bolder;
    line-height: 60px;
  }
  main {
    grid-area: main;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  footer {
    grid-area: footer;
    text-align: center;
    line-height: 60px;
    font-weight: bolder;
  }

  .backwards {
    position: fixed;
    top: -1em;
    display: flex;
    text-transform: uppercase;
    font-weight: bolder;
    margin: 1em;
    span {
      position: relative;
      left: 1rem;
      color: #999999;
    }
  }
`;function E(e){const{buttonstate:t}=e,[r,c]=a.exports.useState(!1);return a.exports.useEffect(()=>{c(t)},[t]),n(v,{children:n(w,{children:r?i("div",{children:[n(u,{size:"sm"}),n(p,{children:"Loading..."})]}):n("span",{children:"Enviar"})})})}const v=o.div`
  button:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`,w=o.button`
  padding: 0.5em 1.3em;
  color: #23023f;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  outline: none;
  margin: 2em;
  background-color: #ab8ffe;
`;export{k as D,E as S};
