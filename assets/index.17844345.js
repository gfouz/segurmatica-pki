var f=Object.defineProperty,g=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var c=(i,o,a)=>o in i?f(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[o]=a,e=(i,o)=>{for(var a in o||(o={}))h.call(o,a)&&c(i,a,o[a]);if(s)for(var a of s(o))u.call(o,a)&&c(i,a,o[a]);return i},r=(i,o)=>g(i,p(o));import{j as t,s as d,a as m,H as n}from"./index.f64b0dbf.js";import{L as y}from"./Layout.3d9bba9e.js";function x(i){return t(w,r(e({},i),{children:t("div",{className:"line"})}))}const w=d.div`
  width: 100%;
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
`,l={size:"sm",m:"0.5em 0",color:"#666666",fontFamily:"calibri"},b={width:"150px",height:"auto",margin:"0 3.5em"};function Y(){return t(y,{children:t(k,{children:m("section",{children:[m("article",{children:[t("img",{style:e({},b),src:"./images/segurmatica.jpg",alt:"Segurm\xE1tica"}),t("p",{className:"article__pki",children:"PKI"}),t(x,{color:"#1799ff"}),t(n,r(e({},l),{children:"25 a\xF1os de experincia en seguridad."})),t(n,r(e({},l),{children:"Servicio de llave p\xFAblica."})),t(n,r(e({},l),{children:new Date().getFullYear()}))]}),t("img",{src:"./images/robot.jpg",alt:"robot"})]})})})}const k=d.div`
  width: 100%;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
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
      .article__pki {
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
    }
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
`;export{Y as default};
