import{r as d,u as m,j as e}from"./index-BMOHnWt5.js";import{l as u}from"./AuthService-Dwej2ar9.js";import"./index-BICwPsy_.js";const j=()=>{const[t,c]=d.useState(null),l=m(),i=n=>{const{value:s,name:a}=n.target;c({...t,[a]:s})},o=async n=>{var a,r;n.preventDefault();const s=await u(t);s&&(s&&((r=(a=s==null?void 0:s.user)==null?void 0:a.account)==null?void 0:r.role)==="ADMIN"?l("/admin"):l("/customer"))};return e.jsx("div",{className:"login-pop",children:e.jsx("div",{className:"pop-body col-6",children:e.jsxs("form",{action:"",onSubmit:o,children:[e.jsx("h5",{className:"text-center mb-4 fs-4",children:"Sign In"}),e.jsxs("div",{className:"d-flex flex-column gap-4",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"",children:"Username"}),e.jsx("input",{type:"text",name:"email",onChange:i,className:"input-field"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"",children:"Password"}),e.jsx("input",{type:"password",name:"password",onChange:i,className:"input-field"})]}),e.jsx("div",{className:"text-center",children:e.jsx("button",{type:"submit",className:"btn-red col-3 rounded-5",children:"Login"})})]})]})})})};export{j as default};
