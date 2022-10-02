var c=Object.defineProperty,f=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var n=(i,t,o)=>t in i?c(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o,r=(i,t)=>{for(var o in t||(t={}))p.call(t,o)&&n(i,o,t[o]);if(a)for(var o of a(t))g.call(t,o)&&n(i,o,t[o]);return i},l=(i,t)=>f(i,d(t));import{j as e,s,u as h,r as u,a as m}from"./index.197da568.js";import{L as y}from"./Layout.ba305aad.js";import"./Toast.c9a8ea84.js";import"./chakra-ui-button.esm.2eba4fb6.js";function x(i){return e(w,l(r({},i),{children:e("div",{className:"line"})}))}const w=s.div`
  width: 100%;
  margin: 0 0 2em 0;
  .line {
    position: relative;
    left: 5%;
    right: 5%;
    height: 5px;
    border-radius: 2px;
    animation: line 2s;
    animation-fill-mode: forwards;
    background-color: ${i=>i.color};
  }
  @keyframes line {
    from {
      width: 0;
      background-color: #ffffff;
    }
    to {
      width: 90%;
      background-color: ${i=>i.color};
    }
  }
`;function E(){const i=h(),t=localStorage.getItem("jwt");return u.exports.useEffect(()=>{setTimeout(()=>{!t&&i("/login")},2e3)}),e(y,{children:e(_,{children:m("section",{className:"homepage",children:[m("article",{children:[e("p",{className:"article__title",children:"PKI"}),e(x,{color:"#1799ff"})]}),e("img",{src:"./images/homepage.png",alt:"man",className:"homepage__image"}),e("button",{onClick:()=>{localStorage.clear()},children:"clear localStorage"}),e("h2",{className:"article__subtitle",children:"M\xC1S DE 25 A\xD1OS DE EXPERIENCIA."})]})})})}const _=s.div`
  width: 100%;

  section {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .homepage__logo {
    width: 120px;
    height: auto;
    position: absolute;
    top: -20px;
    left: 0;
  }
  .homepage__image {
    max-width: 100%;
    height: auto;
  }
  article {
    position: relative;
    top: 3em;
    width: 100%;
    text-align: center;
    img {
      margin: 0 2em;
      opacity: 0;
      animation: logo;
      animation-delay: 0.2s;
      animation-duration: 1s;
      animation-direction: normal;
      animation-fill-mode: forwards;
    }
  }
  .article__title {
    opacity: 0;
    color: #0099ff;
    font-size: 3.2em;
    font-weight: bolder;
    font-family: calibri;
    animation: pki;
    animation-delay: 0.2s;
    animation-duration: 1.5s;
    animation-direction: normal;
    animation-fill-mode: forwards;
  }
  .article__subtitle {
    fontsize: 20px;
    margin: 2em 0 2em 0;
    color: #000000;
    whitespace: nowrap;
    fontfamily: calibri;
  }
  @keyframes logo {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes pki {
    from {
      opacity: 0;
      transform: rotateY(180deg);
    }
    to {
      opacity: 1;
      transform: rotateY(0);
    }
  }
`;export{E as default};
