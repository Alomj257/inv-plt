import{e as a}from"./dateTimeFormater-BO10k8ZT.js";const g=async s=>{const t=await a(s);try{return{totalInvestment:t==null?void 0:t.reduce((c,e)=>{var o;const m=((o=e==null?void 0:e.investors)==null?void 0:o.reduce((u,n)=>u+(parseInt((n==null?void 0:n.amount)||0)||0),0))||0;return c+m},0)}}catch(r){console.log(r)}};export{g};
