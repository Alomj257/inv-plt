import{r as x,j as e,F as k,G as O,H as T,k as z,l as R,I as W}from"./index-Dll_1HP0.js";import{l as L}from"./Logo-02-removebg-preview-Cm97PXJs.js";import{b as $,c as I,d as A}from"./index-BnBg8CBd.js";import{b as G}from"./index-CdD0VRYO.js";import{B as M}from"./index-CAi8zhoe.js";import"./iconBase-D8TNORit.js";const q="/assets/auth-CH4bpr_x.png",D=({setPersonal:r})=>{const[l,m]=x.useState(""),d=s=>{const{name:a,value:n}=s.target;a==="industry"&&n==="Other"?(m(n),r(t=>({...t,[a]:l}))):r(t=>({...t,[a]:n}))};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"row row-cols-md-2",children:b==null?void 0:b.map((s,a)=>{var n;return e.jsx("div",{children:e.jsxs("div",{className:"px-0 mb-4  d-flex flex-column gap-2 field",children:[e.jsx("label",{className:"ms-3",htmlFor:"",children:s==null?void 0:s.label}),(s==null?void 0:s.type)==="select"?e.jsxs("select",{name:s==null?void 0:s.name,onChange:d,id:"",className:"input-field ",children:[e.jsxs("option",{value:"",children:["Select ",s==null?void 0:s.name]}),(n=s==null?void 0:s.option)==null?void 0:n.map((t,i)=>e.jsx(e.Fragment,{children:e.jsx("option",{value:t==null?void 0:t.name,children:t==null?void 0:t.name},a+""+i)})),(s==null?void 0:s.name)==="industry"&&e.jsx("option",{value:"Other",children:"Other"})]}):e.jsx("input",{type:(s==null?void 0:s.name)==="dob"?"date":"text",name:s==null?void 0:s.name,onChange:d,className:"input-field text-white"})]})},a)})})})},b=[{place:"Alessandro ",type:"input",name:"firstName",label:"First name"},{place:"Santero",type:"input",name:"lastName",label:"Last name"},{place:"Paris, France",type:"input",name:"city",label:"City of residence"},{place:" 10-05-1993",type:"date",name:"dob",label:"Date Of birth"},{place:"Blue Nest",type:"input",name:"company",label:"Company name"},{place:" Tech and E-commerce ",type:"input",name:"industry",label:" Industry"}],H="/assets/Africa-BGJtlU3P.png",J="/assets/Asia-CBntnPSA.png",_="/assets/Europe-BhOYEACr.png",U="/assets/Latin%20america-CoMMjfXg.png",V="/assets/map%20(4)-B_OiLnMR.png",X="/assets/North%20America-DByFg6zO.png",Y=({invest:r,step:l,setInvestVal:m})=>{const[d,s]=x.useState([]),a=(t,i,g)=>{g?(s(i),m(o=>({...o,[t]:i}))):d!=null&&d.includes(i)?(s(o=>o.filter(p=>p!==i)),m(o=>{var p;return{...o,[t]:(p=o[t])!=null&&p.includes(i)?o[t].filter(y=>y!==i):[...o[t]||[],i]}})):(s([...d,i]),m(o=>({...o,[t]:o[t]?[...o[t],i]:[i]})))},n=t=>{const{name:i,value:g}=t.target;setInterval(o=>({...o,[i]:g}))};return e.jsx(e.Fragment,{children:e.jsx("div",{children:r==null?void 0:r.map((t,i)=>{var g;return l===i&&e.jsxs("div",{children:[e.jsx("h6",{children:t==null?void 0:t.head}),i!=4?e.jsx("div",{className:`${i===1||i===5?"d-flex flex-wrap my-3 gap-3":`row  row-cols-${(t==null?void 0:t.field)!=="investorType"&&2}`} `,children:(g=t==null?void 0:t.option)==null?void 0:g.map((o,p)=>e.jsx("div",{className:`${i===1||i===5?"":"mb-4"} `,children:e.jsxs("div",{onClick:()=>a(t==null?void 0:t.field,o,t==null?void 0:t.isSingle),className:`bg-border cursor-pointer ${d.includes(o)&&"border"} d-flex align-items-center gap-2 rounded-5 p-3 px-4 text-very-light-gray`,style:{width:"maxc-content"},children:[(t==null?void 0:t.isIcon)&&e.jsx("div",{className:`${(t==null?void 0:t.field)!=="region"&&"bg-white"} ${(t==null?void 0:t.field)==="region"&&p>=(u==null?void 0:u.length)&&"bg-white"} rounded-circle text-dark d-flex align-items-center justify-content-center`,style:{width:((t==null?void 0:t.field)!=="region"||(t==null?void 0:t.field)==="region"&&p>=(u==null?void 0:u.length))&&"20px",aspectRatio:"1/1"},children:(t==null?void 0:t.field)==="region"&&p<(u==null?void 0:u.length)?e.jsx("img",{style:{width:"30px"},src:u[p],alt:""}):d.includes(o)&&e.jsx($,{})}),e.jsx("span",{children:o})]},i+" "+p)}))}):e.jsxs("div",{className:"areas d-flex flex-column gap-3",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"",children:"What would you consider to be your field of expertise ?"}),e.jsx("textarea",{onChange:n,rows:4,className:"input-field",name:"expertise",id:""})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"",children:"What are your main passions ?"}),e.jsx("textarea",{onChange:n,rows:4,className:"input-field",name:"expertise",id:""})]})]})]})})})})},u=[X,U,_,J,H,V],K=({setAccount:r})=>{const[l,m]=x.useState("");x.useState("");const d=s=>{const{name:a,value:n}=s.target;r(t=>({...t,[a]:n}))};return e.jsx("div",{className:"row row-cols-md-2",children:C==null?void 0:C.map((s,a)=>{var n;return e.jsx("div",{children:e.jsxs("div",{className:"px-0 mb-4  d-flex flex-column gap-2 field position-relative",children:[e.jsx("label",{className:"ms-3",htmlFor:"",children:s==null?void 0:s.label}),(s==null?void 0:s.type)==="select"?e.jsx("select",{name:s==null?void 0:s.name,onChange:d,id:"",className:"input-field ",children:(n=s==null?void 0:s.option)==null?void 0:n.map((t,i)=>e.jsx("option",{value:"",children:t},t+""+i))}):e.jsxs(e.Fragment,{children:[e.jsx("input",{type:l===(s==null?void 0:s.name)?"text":s==null?void 0:s.type,name:s==null?void 0:s.name,onChange:d,className:"input-field text-white"}),(s==null?void 0:s.name)==="password"&&e.jsx("span",{className:"eye",children:l!=="password"?e.jsx(I,{onClick:()=>m(s==null?void 0:s.name),size:20}):e.jsx(A,{onClick:()=>m(""),size:20})}),(s==null?void 0:s.name)==="cnfPassword"&&e.jsx("span",{className:"eye",children:l!=="cnfPassword"?e.jsx(I,{onClick:()=>m(s==null?void 0:s.name),size:20}):e.jsx(A,{onClick:()=>m(""),size:20})})]})]})},a)})})},C=[{place:"alessandro@anyma.capital",type:"input",name:"email",label:" E-mail address (username)"},{place:"0033623587116",type:"input",name:"phone",label:"Phone number"},{place:"*******",type:"password",name:"password",label:"Password"},{place:"*******",type:"password",name:"cnfPassword",label:"Repeat password"}],Q="/assets/logoOneLeter-CrJGmttG.png",Z=()=>e.jsxs("div",{className:"m-auto",children:[e.jsx("div",{className:"col-5 mx-auto",children:e.jsx("img",{src:Q,alt:"",className:"w-100 h-100"})}),e.jsxs("div",{className:"d-flex col-8 mx-auto justify-content-center align-items-center my-5 flex-column gap-3",children:[e.jsx("h3",{className:"text-center",children:"We’ve received your registration request"}),e.jsx("p",{className:"fs-5 text-light text-center",children:"Anyma Capital team will be in touch with you shortly by e-mail to grant you access to your account"})]})]}),v=({setIsNew:r,setAccount:l})=>{const[m,d]=x.useState(!1),s=()=>{if(!m){k("error","accept agreement");return}l(a=>({...a,agreement:m})),r(!1)};return e.jsx("div",{className:"agrreement",children:e.jsxs("div",{className:"pop-body col-md-5 ",children:[e.jsx("div",{className:"text-end",children:e.jsx(M,{onClick:()=>r(a=>!a),className:"cursor-pointer",size:30})}),e.jsxs("div",{className:"text-center col-md-10 mx-auto pb-3",children:[e.jsx("h5",{children:"By confirming the registration, you’re agreeing to"}),e.jsx("p",{className:"fs-5 ",children:e.jsxs("div",{className:"text-dark d-flex gap-2 align-items-center justify-content-center text-decoration-underline",href:"http://localhost:5173/",children:[e.jsx("input",{onChange:a=>d(a.target.checked),type:"checkbox",style:{width:"20px",aspectRatio:"1/1"},name:"",id:"terms"}),e.jsx("label",{htmlFor:"terms",children:" Our terms and conditions"})]})}),e.jsx("div",{className:"text-center",children:e.jsx("button",{onClick:s,className:"btn-red  w-100 rounded-5",children:"Agree and confirm"})})]})]})})},ce=()=>{const[r,l]=x.useState(0),[m,d]=x.useState(0),[s,a]=x.useState(null),[n,t]=x.useState(null),[i,g]=x.useState({}),[o,p]=x.useState(!1),[y]=O(),f=y.get("emailToken"),j=y.get("expiration"),N=[{com:e.jsx(D,{setPersonal:a})},{com:e.jsx(Y,{invest:F,step:m,setStep:d,setInvestVal:g})},{com:e.jsx(K,{setAccount:t})}];x.useEffect(()=>{f&&j&&l(1)},[f,j]);const B=()=>{if(r===N.length-1&&!n.agreement){p(!0);return}if(r==N.length-1){E();return}r===1?m>=F.length-1?l(r+1):d(m+1):l(r+1)},E=async()=>{let h={personal:s,investmentInfo:i,account:n};if(f&&j&&(n!=null&&n.email)){const c=await T(n==null?void 0:n.email);if(!c)return k("error","sorry this mail not added by admin please contact");h={member:{...c==null?void 0:c.member,emailToken:f,expiration:j},account:{...c==null?void 0:c.account,...n},personal:{...c==null?void 0:c.personal,...s},investmentInfo:{...c==null?void 0:c.investmentInfo,...i}};const w=await z(c==null?void 0:c._id,h);if(w!=null&&w.message)return;l(r+1);return}if(h!=null&&h.account&&(h!=null&&h.investmentInfo)&&(h!=null&&h.account)){const c=await R(h);if(c!=null&&c.message)return;l(r+1)}else k("error","field Required")},P=()=>{W(n==null?void 0:n.email)};return e.jsxs("div",{children:[o&&e.jsx(v,{setIsNew:p,setAccount:t}),e.jsxs("div",{className:"register",children:[e.jsx("div",{className:"register-left",children:e.jsx("img",{src:q,className:"w-100 h-100",alt:""})}),e.jsx("div",{className:"register-right d-flex flex-column",children:r===N.length?e.jsx(Z,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-10 ps-0 ms-auto d-flex justify-content-between align-items-center",children:[e.jsxs("h5",{className:"semibol",children:["Get reporting, access to new deals. ",e.jsx("br",{}),"Join Anyma Club."]}),e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("div",{className:"logo",children:e.jsx("img",{className:"w-100 h-100",src:L,alt:""})}),e.jsx("small",{className:"pres",children:"Investor dashboard"})]})]}),e.jsx("div",{className:"col-10 mx-auto",children:e.jsxs("div",{className:"col-md-10 px-0 mx-auto",children:[e.jsx("div",{className:"progress-comp my-4  ",children:e.jsx("ul",{className:"px-0 mx-0",children:S==null?void 0:S.map((h,c)=>e.jsxs("li",{onClick:()=>{l(c),d(0)},className:c==r?"active":"",children:[e.jsx("span",{children:h}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"w-100 empty"}),e.jsx("div",{className:"node ms-auto"})]})]},c))})}),N[r].com,r==2&&f&&j&&e.jsx("button",{onClick:P,className:"btn text-white text-decoration-underline",children:"Resend Link"})]})})]}),e.jsx("div",{className:"col-md-10 mx-auto pb-3 mt-auto",children:e.jsx("div",{className:"col-md-10 mx-auto pe-0",children:e.jsxs("button",{disabled:!s&&!f&&!j,onClick:B,className:`${r>=2?"btn-red":`btn-${!s&&"dark"}-gray `} d-flex  py-2 rounded-5 w-100`,children:[e.jsxs("span",{className:"mx-auto",children:[r>=2?" Confirm the registration":"Next"," "]})," ",e.jsx("span",{className:"text-dark pe-3",children:e.jsx(G,{size:30})})]})})})]})})]})]})},S=["Personal info","Investment info","Account info"],F=[{head:" which asset classe(s) are you most interest to invest in?",isSingle:!1,isIcon:!0,field:"interestedToInvest",option:["Venture capital","Private equity"," Stock market"," Structured products"," Real estate"," Crypto","Private debt","Infrastructure"," Indifferent"," Other"]},{head:" Which sectors are you most attracted to?",isSingle:!1,isIcon:!1,field:"sectors",option:["Agritech / foodtech","Ai/Data science"," Biotech / medtech"," Blockchain / Web 3.0"," Cleantech"," Consumer and retail"," Cybersecurity"," Education"," Enterprise 2.0","Fintech / Insurtech","Gaming"," Health / Wellbeing"," Industry 4.0"," Logistics","Mobility","Software","Smart society / IoT","Space"," Cloud / Edge","Other"]},{head:"Which geographical regions are you most inclined to invest in?",field:"region",isSingle:!1,isIcon:!0,option:[" North America","Latin America","Europe","Asia","Africa","Middle East"," Indifferent","Other"]},{head:" What is your investor profile regarding VC investments ?",field:"investorType",isSingle:!0,isIcon:!1,option:["Agressive : Several tickets per year"," Concentrated, a few large tickets per year","Balanced : medium ticket size for 3 to 5 investments per yea","Balanced : medium ticket size for 3 to 5 investments per year"," Diversified : small tickets in over 5 companies per year","Cautious : a few small tickets per year"]},"fawknawek",{head:"What are you looking to get the most out of Anyma ",isSingle:!1,isIcon:!0,field:"anyma",option:[" Invest young companies with high potential","Invest in mature tech champions","Diversify my asset allocation","Access to new geographies"," Learn about new fields"," Being able to monetize my expertise or network","Create new professional connections","Other"]}];export{ce as default};
