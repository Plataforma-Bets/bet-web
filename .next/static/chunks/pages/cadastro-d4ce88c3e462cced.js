(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[788],{3399:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastro",function(){return t(6601)}])},4146:function(n,e,t){"use strict";t.d(e,{Z:function(){return S}});var r=t(5893),i=t(7297),o=t(186);function a(){let n=(0,i.Z)(["\n  width: 100%;\n  height: 7vh;\n  display: flex;\n  justify-content: center;\n  background-color: #292929;\n  top: 0;\n  z-index: 100;\n\n  @media screen and (max-width: 850px) {\n    position: absolute;\n  }\n"]);return a=function(){return n},n}function s(){let n=(0,i.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return s=function(){return n},n}function d(){let n=(0,i.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"]);return d=function(){return n},n}function l(){let n=(0,i.Z)(["\n  width: 10rem;\n  height: auto;\n"]);return l=function(){return n},n}function c(){let n=(0,i.Z)(["\n  font-size: 1.5rem;\n  font-weight: 700;\n  padding: 0.5rem 0rem 0.5rem 1.5rem;\n  color: #1e2952 !important;\n  text-decoration: none;\n  display: flex;\n  \n  \n  @media screen and (max-width: 850px) {\n    font-size: 1.4rem;\n    font-weight: 700;\n  }\n\n  @media screen and (max-width: 600px) {\n    padding: 0.2rem;\n  }\n"]);return c=function(){return n},n}function u(){let n=(0,i.Z)(["\n  text-decoration: none;\n  color: #dedede;\n  letter-spacing: 0rem;\n  border-bottom: none;\n\n  &:hover {\n    border-bottom: 2px solid #006b2d;\n  }\n"]);return u=function(){return n},n}function p(){let n=(0,i.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"]);return p=function(){return n},n}function m(){let n=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: white;\n  font-size: 1rem;\n  font-weight: 600;\n  text-decoration: none;\n\n  svg {\n    font-size: 1.5rem;\n    margin-left: 0.5rem;\n  }\n"]);return m=function(){return n},n}function x(){let n=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 1vh;\n  background-color: #555555;\n  border-radius: 4px;\n  padding: 0.5rem;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  z-index: 101;\n\n  input {\n    border: none;\n    outline: none;\n    padding: 0.3rem;\n    font-size: .7rem;\n    width: 180px;  \n    border-radius: 4px;\n    padding-left: 2rem;  \n    background-color: #555555;\n    color: white;\n  }\n\n  input::placeholder {\n    color: #aaa;\n  }\n\n  svg {\n    position: absolute;\n    left: 10px;  \n    font-size: 1.1rem;\n    cursor: pointer;\n    color: #aaa;\n  }\n"]);return x=function(){return n},n}let h=o.ZP.header(a()),f=o.ZP.div(s()),g=o.ZP.nav(d());o.ZP.img(l());let b=o.ZP.div(c());o.ZP.span(u());let j=o.ZP.div(p()),w=o.ZP.div(m()),v=o.ZP.div(x());var Z=t(1664),y=t.n(Z),A={src:"/_next/static/media/logo.30a29fc3.png",height:499,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAq0lEQVR42mOAgVfPTzKC6AcfzwJpHOD55wdMGIJfv94D6/j86Ybq1y+PfR59vGC6+dOG5h8vr3KjKLx+ZUfA+1fXfR+8OxnXfLV30////1nAEmeOLWcE0yeWST28uM2mbknN8rzl5aVgyVlRzAwhsUFgBTFR/g6e0T5LPXOD+v7fvgp2y9IpjYwM7r4uYAVWznY6fkHu+jArJ/WUIXyjZWeJ4OR6Mk2YjpAEAL05RRq2hFytAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},z=t(2091),C=t(7294),F=t(1163),P=t(9616);let k=()=>{let[n,e]=(0,C.useState)(!1),[t,i]=(0,C.useState)(""),o=(0,F.useRouter)(),a=()=>{e(!n)},s=n=>{i(n.target.value)},d=async()=>{try{await P.Z.post("/logout"),o.push("/login")}catch(n){console.error("Erro ao fazer logout",n)}};return(0,r.jsx)(h,{children:(0,r.jsx)(f,{children:(0,r.jsxs)(g,{children:[(0,r.jsxs)(j,{children:[(0,r.jsx)(b,{children:(0,r.jsx)(y(),{href:"/",children:(0,r.jsx)("img",{alt:"Logo",src:A.src,width:54,height:54})})}),(0,r.jsxs)(b,{children:[n&&(0,r.jsxs)(v,{children:[(0,r.jsx)("input",{type:"text",placeholder:"Buscar...",value:t,onChange:s}),(0,r.jsx)(z.U41,{onClick:a,style:{cursor:"pointer",color:"#aaa"}})]}),!n&&(0,r.jsx)(z.U41,{onClick:a,style:{cursor:"pointer",color:"white"}})]})]}),(0,r.jsxs)(j,{children:[(0,r.jsx)(b,{children:(0,r.jsx)(y(),{href:"/perfil",style:{textDecoration:"none"},children:(0,r.jsxs)(w,{children:["Perfil",(0,r.jsx)(z.m3W,{})]})})}),(0,r.jsx)(b,{children:(0,r.jsx)(z.fHX,{onClick:d,style:{cursor:"pointer",color:"white",marginRight:"2rem",padding:0}})})]})]})})})};var S=k},6601:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return E}});var r=t(5893),i=t(7294),o=t(9008),a=t.n(o),s=t(7297),d=t(186);function l(){let n=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0;\n  min-height: 90vh;\n  background-color: #f5f5f5;\n"]);return l=function(){return n},n}function c(){let n=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  min-height: 90vh;\n  gap: 2rem;\n  padding: 2rem;\n  background-color: #353535FF;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n\n\n  @media screen and (max-width: 830px) {\n    margin-top: 10vh;\n  }\n\n  @media screen and (max-width: 600px) {\n    margin-top: 10vh;\n  }\n"]);return c=function(){return n},n}function u(){let n=(0,s.Z)(["\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  text-align: center;\n  color: ",";\n  background-color: ","; \n  border: 1px solid ","; \n"]);return u=function(){return n},n}function p(){let n=(0,s.Z)(["\n  color: #fff;\n  font-size: 2.5rem;\n  font-weight: 700;\n  text-align: center;\n"]);return p=function(){return n},n}function m(){let n=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  width: 100%;\n  max-width: 600px;\n  padding: 2rem;\n  background-color: #f4f4f4;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n\n  @media screen and (max-width: 800px) {\n    max-width: 500px;\n  }\n\n  @media screen and (max-width: 600px) {\n    max-width: 400px;\n  }\n"]);return m=function(){return n},n}function x(){let n=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n\n  label {\n    flex: 1;\n    font-size: 1rem;\n    color: #333;\n  }\n\n  input,\n  select {\n    flex: 2;\n    padding: 0.8rem;\n    font-size: 1rem;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n  }\n\n  input:focus,\n  select:focus {\n    border-color: #006b2d;\n    outline: none;\n  }\n\n\n  @media screen and (max-width: 600px) {\n    label {\n      font-size: .85rem;\n    }\n\n    input,\n    select {\n      flex: 2;\n      padding: 0.6rem;\n      font-size: .85rem;\n      border: 1px solid #ccc;\n      border-radius: 5px;\n    }\n  }\n\n"]);return x=function(){return n},n}function h(){let n=(0,s.Z)(["\n  padding: 1rem;\n  background-color: #006b2d;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1.1rem;\n  font-weight: 700;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: #004d20;\n  }\n"]);return h=function(){return n},n}function f(){let n=(0,s.Z)(["\n  color: #FFFFFFFF;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  background-color: #006b2d;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  font-weight: 700;\n  z-index: 2;\n  letter-spacing: 0.1rem;\n  text-align: center;\n\n  @media screen and (max-width: 800px) {\n    font-size: 1.7rem;\n  }\n\n  @media screen and (max-width: 600px) {\n    font-size: 1.2rem;\n    letter-spacing: 0.05rem;\n  }\n"]);return f=function(){return n},n}function g(){let n=(0,s.Z)(["\n  color: #FFFFFFFF;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  background-color: #006b2d;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  font-weight: 700;\n  z-index: 2;\n  letter-spacing: 0.1rem;\n  text-align: center;\n\n  @media screen and (max-width: 800px) {\n    font-size: 1.7rem;\n  }\n\n  @media screen and (max-width: 600px) {\n    font-size: 1.2rem;\n    letter-spacing: 0.05rem;\n  }\n"]);return g=function(){return n},n}let b=d.ZP.main(l()),j=d.ZP.div(c()),w=d.ZP.div(u(),n=>n.isSuccess?"#155724":"#721c24",n=>n.isSuccess?"#d4edda":"#f8d7da",n=>n.isSuccess?"#c3e6cb":"#f5c6cb"),v=d.ZP.span(p()),Z=d.ZP.form(m()),y=d.ZP.div(x()),A=d.ZP.button(h());d.ZP.button(f());let z=d.ZP.button(g());var C=t(4146),F=t(9616),P=t(1163),k=t.n(P);let S=()=>{let[n,e]=(0,i.useState)(""),[t,o]=(0,i.useState)(""),[s,d]=(0,i.useState)(""),[l,c]=(0,i.useState)(""),[u,p]=(0,i.useState)(""),[m,x]=(0,i.useState)(null),h=async e=>{if(e.preventDefault(),l!==u){x("As senhas n\xe3o coincidem.");return}try{await F.Z.post("/register",{name:n,email:t,cargo:s,password:l,password_confirmation:u}),x("Cadastro realizado com sucesso! Redirecionando..."),setTimeout(()=>{k().push("/login")},2e3)}catch(n){var r,i;x((null===(r=n.response)||void 0===r?void 0:null===(i=r.data)||void 0===i?void 0:i.message)||"Ocorreu um erro ao realizar o cadastro.")}},f=()=>{k().push("/login")};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Cadastro"}),(0,r.jsx)("meta",{name:"description",content:"P\xe1gina de cadastro"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,r.jsx)(C.Z,{}),(0,r.jsx)(b,{children:(0,r.jsxs)(j,{children:[(0,r.jsx)(v,{children:"Cadastro"}),m&&(0,r.jsx)(w,{children:m}),(0,r.jsxs)(Z,{onSubmit:h,children:[(0,r.jsxs)(y,{children:[(0,r.jsx)("label",{htmlFor:"nomeCompleto",children:"Nome Completo:"}),(0,r.jsx)("input",{type:"text",id:"nomeCompleto",value:n,onChange:n=>e(n.target.value),required:!0,placeholder:"Digite seu nome completo"})]}),(0,r.jsxs)(y,{children:[(0,r.jsx)("label",{htmlFor:"email",children:"E-mail:"}),(0,r.jsx)("input",{type:"email",id:"email",value:t,onChange:n=>o(n.target.value),required:!0,placeholder:"Digite seu e-mail"})]}),(0,r.jsxs)(y,{children:[(0,r.jsx)("label",{htmlFor:"cargo",children:"Cargo:"}),(0,r.jsxs)("select",{id:"cargo",value:s,onChange:n=>d(n.target.value),required:!0,children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"Selecione seu cargo"}),(0,r.jsx)("option",{value:"dono",children:"Dono"}),(0,r.jsx)("option",{value:"dev",children:"Dev"}),(0,r.jsx)("option",{value:"visitante",children:"Visitante"})]})]}),(0,r.jsxs)(y,{children:[(0,r.jsx)("label",{htmlFor:"password",children:"Senha:"}),(0,r.jsx)("input",{type:"password",id:"password",value:l,onChange:n=>c(n.target.value),required:!0,placeholder:"Digite sua senha"})]}),(0,r.jsxs)(y,{children:[(0,r.jsx)("label",{htmlFor:"passwordConfirm",children:"Confirme sua senha:"}),(0,r.jsx)("input",{type:"password",id:"passwordConfirm",value:u,onChange:n=>p(n.target.value),required:!0,placeholder:"Confirme sua senha"})]}),(0,r.jsx)(A,{type:"submit",children:"Cadastrar"})]}),(0,r.jsx)(z,{onClick:f,style:{marginTop:"1rem"},children:"Fazer Login"})]})})]})};var E=S},9616:function(n,e,t){"use strict";var r=t(7066);let i=r.Z.create({baseURL:"http://127.0.0.1:8000/api",headers:{"Content-Type":"application/json",Accept:"application/json"}});i.interceptors.request.use(n=>{let e=localStorage.getItem("token");return e&&(n.headers.Authorization="Bearer ".concat(e)),n},n=>Promise.reject(n)),e.Z=i}},function(n){n.O(0,[365,246,774,888,179],function(){return n(n.s=3399)}),_N_E=n.O()}]);