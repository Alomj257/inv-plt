import{i as g,g as N,r as c,j as e,S as w,a as S,k as v}from"./index-Dll_1HP0.js";import{f as E}from"./index-CXbA1jBV.js";import"./iconBase-D8TNORit.js";const P=()=>{var h,f;const{state:x}=g(),n=((f=(h=N())==null?void 0:h.user)==null?void 0:f._id)||x,[a,m]=c.useState(null),[l,d]=c.useState(!1),[p,y]=c.useState(null),u=t=>{const{name:s,value:i,files:r}=t.target;try{r&&y(r[0]),m({...a,[s]:r?r[0]:i})}catch(j){console.log(j)}};c.useEffect(()=>{n&&(async()=>{const s=await S(n);m({...s==null?void 0:s.account,...s==null?void 0:s.personal})})()},[n]);const b=t=>{t.preventDefault();const s={personal:{...a},account:{...a}},i=new FormData;if(i.append("account",JSON.stringify(s.account)),i.append("personal",JSON.stringify(s.personal)),a.profile&&i.append("profile",a.profile),n){v(n,i),d(!1),window.location.reload();return}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flex my-3 py-3  admin-header justify-content-between align-items-center",children:[e.jsx("h5",{className:"text-capitalize m-0 fw-semibold",children:"Personal Details"}),e.jsx("div",{className:"right-profile  d-flex gap-4",children:!l&&e.jsx("div",{children:e.jsx("button",{onClick:()=>d(!0),className:"btn-red py-2 text-decoration-none",children:"Edit"})})})]}),e.jsxs("form",{action:"",onSubmit:b,children:[e.jsx("div",{className:"bg-white create-mamber",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"profile d-flex justify-content-center ",children:e.jsxs("div",{className:"position-relative ",style:{width:"150px",aspectRatio:"1/1"},children:[e.jsx("img",{src:p&&URL.createObjectURL(p)||w+(a==null?void 0:a.profile),className:"h-100 bg-light rounded-circle  w-100",alt:""}),l&&e.jsxs("label",{htmlFor:"profile",className:"position-absolute cursor-pointer",style:{bottom:"25%",right:"-10%"},children:[e.jsx("input",{onChange:u,type:"file",name:"profile",className:"position-absolute",style:{opacity:0}}),e.jsx("div",{className:"bg-very-light-gray p-2 rounded-circle cursor-pointer  ",children:e.jsx(E,{size:25})})]})]})}),e.jsx("div",{className:"row row-cols-3",children:o==null?void 0:o.map((t,s)=>e.jsx("div",{children:e.jsxs("div",{className:"mx-3 mb-3 d-flex flex-column gap-2 field",children:[e.jsx("label",{className:"ms-3",htmlFor:"",children:t==null?void 0:t.label}),e.jsx("input",{type:"text",style:{cursor:n?l?"auto":"not-allowed":"auto"},disabled:n?!l:!1,onChange:u,value:a&&a[t==null?void 0:t.name],name:t==null?void 0:t.name,className:"input-field"})]})},s))})]})})}),(l||!n)&&e.jsx("div",{className:"text-center",children:e.jsx("button",{className:"btn-red rounded-5 px-4 my-3",children:"Save"})})]})]})},o=[{place:"Thomas",type:"input",name:"firstName",label:"First name"},{place:"Domingue",type:"input",name:"lastName",label:"Last name"},{place:"thomas.domnugue@gmail.com",type:"input",name:"email",label:" E-mail"},{place:"Paris, France",type:"input",name:"city",label:"City of residence"},{place:" 10-05-1993",type:"date",name:"dob",label:"Date Of birth"},{place:" 07754838908",type:"input",name:"phone",label:"Phone number"},{place:"Blue Nest",type:"input",name:"company",label:"Company name"},{place:" Tech and E-commerce ",type:"input",name:"industry",label:" Industry"}];export{P as default};
