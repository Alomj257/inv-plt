import{u as j,r as d,j as e,c as p,b as u,d as g,e as y}from"./index-Dll_1HP0.js";import{b,c as N}from"./index-CXbA1jBV.js";import"./iconBase-D8TNORit.js";const w=()=>{const o=j(),[t,l]=d.useState([]),h=async()=>{const s=await u("CUSTOMER");l(s)};d.useEffect(()=>{h()},[]),console.log(t);const x=async s=>{await g(s),h()};return e.jsx("div",{className:"bg-white admin-dashboard h-100 ",children:e.jsxs("table",{children:[e.jsx("thead",{className:"thead-dark",children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"60px",aspectRatio:"1/1"},className:"border-0"}),e.jsx("th",{scope:"col",className:"border-0 ps-3",children:"Member's Name"}),e.jsx("th",{scope:"col",children:"Email"}),e.jsx("th",{scope:"col",children:"TOTAL INVESTMENT"}),e.jsx("th",{scope:"col",children:" TOTAL AMOUNT "}),e.jsx("th",{scope:"col",children:" "}),e.jsx("th",{className:"border-0"})]})}),e.jsx("tbody",{children:t&&(t==null?void 0:t.map((s,r)=>{var a,i,n;return e.jsxs("tr",{children:[e.jsx("td",{style:{width:"60px",aspectRatio:"1/1"}}),e.jsxs("td",{className:" ps-5",children:[(a=s==null?void 0:s.personal)==null?void 0:a.firstName," ",(i=s==null?void 0:s.personal)==null?void 0:i.lastName]}),e.jsx("td",{children:(n=s==null?void 0:s.account)==null?void 0:n.email}),e.jsx(f,{userId:s._id}),e.jsxs("td",{className:"d-flex gap-3 ",children:[e.jsx("button",{onClick:()=>o("personal-details",{state:s==null?void 0:s._id}),className:"btn text-primary bg-very-light-gray rounded-circle",children:e.jsx(b,{size:20})}),e.jsx("button",{onClick:()=>x(s==null?void 0:s._id),className:"btn bg-gray bg-very-light-gray rounded-circle text-gray",children:e.jsx(N,{size:20})})]}),e.jsx("td",{style:{width:"60px",aspectRatio:"1/1"}})]},r)}))})]})})},f=({userId:o})=>{const[t,l]=d.useState(0),[h,x]=d.useState(0);return d.useEffect(()=>{(async()=>{try{const r=await y(o);let a=0,i=0;r==null||r.forEach(n=>{var m;(m=n==null?void 0:n.investors)==null||m.forEach(c=>{(c==null?void 0:c.investerId)===o&&(console.log(c),i+=parseInt(c==null?void 0:c.amount)||0,a+=1)})}),l(a),x(i)}catch(r){console.error("Error fetching data:",r)}})()},[o]),e.jsxs(e.Fragment,{children:[e.jsxs("td",{children:[t," Investments"]}),e.jsx("td",{children:p(h)})]})};export{w as default};
