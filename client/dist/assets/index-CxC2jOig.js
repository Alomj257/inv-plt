import{g as y,r as l,u as C,a as u,j as e,N as S,l as I,L as d}from"./index-DWJz4l7w.js";import{l as z}from"./Logo-02-removebg-preview-Cm97PXJs.js";import{a as E}from"./index-Colo46oY.js";import{S as k}from"./index-B05lIgl9.js";import{g as O}from"./AuthService-DjkCPoNv.js";const P=({sidebarData:n})=>{var x,p,h,j,f,g;const a=(p=(x=y())==null?void 0:x.user)==null?void 0:p._id,[s,i]=l.useState(null),c=C(),[r,A]=l.useState(!1),{pathname:N}=u(),m=N.split("/"),b=m[m.length-1];l.useEffect(()=>{(async()=>{const o=await O(a);i(o)})()},[a]);const w=()=>{I(),c("/")};return e.jsx("div",{className:`sidebar-upper ${r?"side-open":""}`,children:e.jsxs("div",{className:"sidebar",children:[e.jsxs("div",{className:"text-white my-5 pb-5 flex-column gap-4 d-flex justify-content-center",children:[e.jsxs("div",{className:"me-auto position-relative d-flex align-items-center flex-column justify-content-center",children:[e.jsx("div",{className:"w-75 mx-auto text-center mb-2",children:e.jsx("img",{className:"w-100 h-100 ",src:z,alt:""})}),e.jsxs("small",{className:"side text-capitalize",children:[((h=s==null?void 0:s.account)==null?void 0:h.role)==="ADMIN"?"Admin":"Customer"," Dashboard"]})]}),e.jsxs("div",{className:"d-flex  gap-3 mx-auto",children:[e.jsx("div",{className:"profile-img",children:e.jsx("img",{src:k+((j=s==null?void 0:s.personal)==null?void 0:j.profile),className:"w-100 h-100 rounded-circle",alt:"profile"})}),e.jsxs("div",{className:"d-flex flex-column justify-content",children:[e.jsxs("p",{className:"m-0 p-0 text-light-gray text-capitalize",children:[(f=s==null?void 0:s.personal)==null?void 0:f.firstName," ",(g=s==null?void 0:s.personal)==null?void 0:g.lastName]}),e.jsx("button",{onClick:()=>{var t,o;return c(`/${(o=(t=s==null?void 0:s.account)==null?void 0:t.role)==null?void 0:o.toLowerCase()}/profile`,{state:s==null?void 0:s._id})},style:{fontSize:"14px"},className:" text-gray btn px-0 text-decoration-underline fw-semibold",children:e.jsx("span",{children:" Edit profile"})})]})]})]}),e.jsxs("ul",{className:"sidebar-list px-0",children:[n==null?void 0:n.map((t,o)=>e.jsx(S,{to:t!=null&&t.soon?"":t.path,className:({isActive:L})=>(L&&!(t!=null&&t.soon)?"active":"")+` ${(t==null?void 0:t.soon)&&"not"} text-decoration-none`,children:e.jsxs("li",{children:[e.jsx("span",{children:t==null?void 0:t.icon}),!r&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:`text-${(t==null?void 0:t.path)!==b?"gray":""}  position-relative`,children:[t==null?void 0:t.name," ",(t==null?void 0:t.soon)&&e.jsx("span",{style:{fontSize:"11px"},className:"bg-secondary ms-1 rounded-5 text-white px-2 position-absolute py-1",children:"SOON"})]}),e.jsx("span",{className:"ms-auto  active-icon"})]})]})},o)),e.jsx("button",{onClick:w,className:"btn text-white  d-flex",children:e.jsxs("li",{children:[e.jsx("span",{children:e.jsx(E,{})}),!r&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"  position-relative",children:"Logout"})})]})})]})]})})};function $(n){return n.substring(n.lastIndexOf("/")+1).replace(/-/g," ").replace(/\b\w/g,c=>c.toUpperCase())}const T=({role:n})=>{const{pathname:a}=u(),s=$(a);console.log(s.toLowerCase());const i=()=>{if(s.toLocaleLowerCase()==="member")return e.jsx(d,{to:"member/personal-add",className:"btn-red text-decoration-none",children:" Create a new member"});if(s.toLocaleLowerCase()==="companies")return e.jsx(d,{to:"companies/new-company",className:"btn-red text-decoration-none",children:" Create a company"});if(s.toLocaleLowerCase()==="personal details")return e.jsx(d,{to:"member/personal-details",className:"btn-red text-decoration-none",children:" Edit"})};return e.jsx(e.Fragment,{children:s.toLocaleLowerCase()!=="personal details"&&s.toLocaleLowerCase()!=="profile"&&e.jsxs("div",{id:n,className:"d-flex  admin-header justify-content-between align-items-center",children:[e.jsx("h5",{className:"text-capitalize m-0 fw-semibold",children:s}),e.jsx("div",{className:"right-profile  d-flex gap-4",children:e.jsx("div",{children:e.jsx(i,{})})})]})})};export{T as H,P as S};
