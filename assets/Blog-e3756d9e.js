import{r as a,j as e,b as x,L as u,a as f}from"./index-de73e16a.js";import{F as p}from"./Footer-17512cfa.js";import{S as g,T as h,C as j,a as b,u as w,L as v}from"./index-07c2e92a.js";import{F as y}from"./styles-0a7c65f6.js";import"./BalaodWhiteOutFull@3x-b5c97ecf.js";const S=[g,h,j,b.configure({types:["heading","paragraph"]}),y],N=({con:o})=>{const[d,n]=a.useState(16),[t,r]=a.useState(o);if(a.useEffect(()=>{r(`${o}`)},[o]),!w({extensions:S,content:t,onUpdate({editor:s}){console.log(s.getHTML()),r(s.getHTML());const l=s.getAttributes("textStyle");n(l.fontSize||16)}}))return null;const i=s=>({__html:s.replace(/<p><\/p>/g,"<p><br></p>").replace(/\n/g,"<br>").replace(/<p>/g,"<p>")});return e.jsx("div",{className:"",children:e.jsx("div",{className:"tiptap outline-none ",dangerouslySetInnerHTML:i(t)})})},E=()=>{const o=x(),[d,n]=a.useState(!1),[t,r]=a.useState({});async function c(){n(!0),await f.get(`posting/${o.uid}`).then(s=>{r(s.data.activity),console.log(s.data.activity.content),setTimeout(()=>{n(!1)},1e3)}),setTimeout(()=>{n(!1)},1e4)}a.useEffect(()=>{c()},[]);function i(s){const l=new Date(s),m={year:"numeric",month:"long",day:"2-digit"};return new Intl.DateTimeFormat("en-US",m).format(l)}return e.jsxs("div",{className:" min-h-0 w-full max-w-full  flex flex-col justify-center",children:[e.jsx("img",{src:t.imageURL,className:" mt-5 text-xl mb-5 object-cover h-[50vh]",alt:""}),e.jsxs("div",{className:" mt-5 px-[10vw] md:px-5",children:[e.jsxs(u,{to:"/balaod/kudlit",className:" w-[90px] font-fmedium flex items-center justify-between px-2 py-2 bg-background text-black font-bold border border-gray-300 hover:bg-[#e4e4e4]",children:[e.jsx("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})}),"Kudlit"]}),e.jsxs("div",{className:" flex justify-between border border-x-0 py-5 text-base font-fmedium mt-4 ",children:[e.jsx("p",{children:t.date?i(t.date):""}),t.location?e.jsxs("p",{className:" flex gap-3 items-center",children:[" ",t.location," ",e.jsx(v,{className:" h-4 w-4"})]}):e.jsx("p",{})]}),e.jsxs("div",{className:" flex flex-col  mt-5 font-fmedium text-lg gap-5 mb-36",children:[e.jsxs("div",{children:[e.jsx("h1",{className:" text-primary text-3xl font-fbold",children:t.title}),e.jsx("p",{className:" font-fmedium"})]}),e.jsx(N,{con:t.content})]})]}),e.jsx(p,{})]})};export{E as default};