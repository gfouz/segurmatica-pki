import{s as o,r as n,j as e,a as i,G as d,T as c}from"./index.b7cccbb5.js";function b(r){const{buttonstate:t}=r,[s,a]=n.exports.useState(!1);return n.exports.useEffect(()=>{a(t)},[t]),e(l,{children:e(u,{children:s?i("div",{children:[e(d,{size:"sm"}),e(c,{children:"Loading..."})]}):e("span",{children:"Enviar"})})})}const l=o.div`
  button:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`,u=o.button`
  padding: 0.5em 1.3em;
  color: #23023f;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  outline: none;
  margin: 2em;
  background-color: #ab8ffe;
`;export{b as S};
