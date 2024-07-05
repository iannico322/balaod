import{c as g,r,u as L,j as e,L as D,b as f}from"./index-bcedf953.js";import{C as h}from"./coverSlide-465a12f8.js";import{F as I}from"./Footer-b221c0b5.js";import{p as M}from"./purify.es-299a4543.js";import{S as i}from"./skeleton-79f6930c.js";import{S as p}from"./sweetalert2.all-b0b18555.js";import"./BalaodWhiteOutFull@3x-b5c97ecf.js";const H=g("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]),O=g("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),U=()=>{const[o,b]=r.useState(""),v=t=>{b(t.target.value)},[c,j]=r.useState([]),y=(t,s)=>s?t.filter(l=>{const a=l.title.toLowerCase(),k=l.content.toLowerCase(),x=s.toLowerCase();return a.includes(x)||k.includes(x)}):t,[w,n]=r.useState(!1),[N,d]=r.useState(c);function m(){n(!0),f.get("posting/kudlit").then(t=>{console.log(t.data.activities),d(t.data.activities),j(t.data.activities),setTimeout(()=>{n(!1)},1e3)}),setTimeout(()=>{n(!1)},1e4)}r.useEffect(()=>{m()},[]);const S=(t,s)=>{if(t.length<=s)return t;const l=t.slice(0,s),a=l.lastIndexOf(" ");return a===-1?l+"...":l.slice(0,a)+"..."},u=L(),T=t=>{const s=document.createElement("div");s.innerHTML=t,s.innerHTML=s.innerHTML.replace(/<p><\/p>/g,"<p><br></p>").replace(/\n/g,"<br>");const l=s.querySelector("p"),a=l?l.outerHTML:"";return{__html:M.sanitize(S(a,200))}};function C(t){const s=new Date(t),l={year:"numeric",month:"long",day:"2-digit"};return new Intl.DateTimeFormat("en-US",l).format(s)}return e.jsxs("div",{className:" min-h-0 w-full max-w-full  flex flex-col justify-center",children:[e.jsx(h,{children:e.jsxs("div",{id:"who-we-are",className:" px-20 sm:px-5 flex flex-col  w-full min-h-[10vh] py-5 bg-primary-foreground items-center pb-10 justify-center bg-fixed bg-cover bg-center object-contain  ",children:[e.jsx("div",{className:"  z-10 absolute h-full w-full bg-primary "}),e.jsx("div",{className:"  z-20 flex flex-col items-center justify-center gap-5  ",children:e.jsxs("h1",{className:" flex items-center gap-3 mt-20  text-accent rounded-full  font-fbold  md:text-4xl text-4xl font-semibold",children:["Kudlit",e.jsx(D,{className:" text-sm px-4 py-2 rounded-md border border-input bg-primary hover:bg-accent hover:text-accent-foreground",to:"/balaod/editable/create-blog",children:"Create Activity"})]})})]})}),e.jsxs("div",{className:" relative w-[95%]  self-center py-10 my-10   gap-4 flex flex-col px-10 md:px-5 bg-[#e4e4e4]",children:[e.jsxs("form",{onSubmit:t=>{t.preventDefault(),d(y(c,o))},className:" flex gap-3 items-center w-full  h-14",children:[e.jsx("input",{placeholder:"WHAT ARE YOU LOOKING FOR?",className:" px-4 h-full w-full  outline-none py-4 font-fmedium border  ",value:o,onChange:v,type:"text"}),e.jsx("button",{className:" font-fbold bg-primary text-accent w-[200px] h-full ",children:"Search"})]}),e.jsx("div",{className:" flex flex-col w-full  gap-3 min-h-[30vh]",children:w?e.jsxs(e.Fragment,{children:[e.jsx(i,{className:"h-[300px] w-full"}),e.jsx(i,{className:"h-[300px] w-full"}),e.jsx(i,{className:"h-[300px] w-full"}),e.jsx(i,{className:"h-[300px] w-full"})]}):N.slice(0,10).map((t,s)=>e.jsx(h,{children:e.jsxs("div",{className:" relative max-w-full flex w-full min-h-0  ",children:[e.jsxs("div",{className:" absolute z-40 right-0 flex gap-5 p-6",children:[e.jsx(H,{className:" cursor-pointer text-green-600",onClick:()=>{window.scrollTo(0,0),u(`/balaod/editable/edit-blog/${t._id}`),localStorage.setItem("saveEdit",JSON.stringify(t))}}),e.jsx(O,{className:" cursor-pointer text-red-600",onClick:()=>{p.fire({imageUrl:t.imageURL,imageWidth:400,imageAlt:"Custom image",title:"This action will delete this activity, are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(l=>{l.isConfirmed&&(f.delete(`posting/activity/${t._id}`,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}}).then(a=>{m(),console.log(a)}).catch(a=>{console.log(a)}),p.fire({title:"Deleted!",text:"The Image has been deleted.",icon:"success"}))})}})]}),e.jsxs("div",{className:" relative w-[20vw] md:hidden  ",children:[e.jsx("div",{className:"  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd900178] from-[2%] via-[#5d193ede] via-[90%] to-[#5d193ede] to-[90%] "}),e.jsx("img",{src:t.imageURL,className:"  h-full relative aspect-square object-cover",alt:""})]}),e.jsxs("div",{className:"w-full border flex flex-col gap-4 border-border p-4 bg-background cursor-pointer hover:bg-[#e4e4e4] pr-10 relative",onClick:()=>{window.scrollTo(0,0),u(`/balaod/editable/blog/${t._id}`),localStorage.setItem("selected",JSON.stringify(t))},children:[e.jsx("div",{className:" bg-primary-foreground w-[80px] h-[40px] text-lg text-accent  flex items-center justify-center font-fmedium",children:"Kudlit"}),e.jsx("div",{className:" border-b border-gray-300  pb-2",children:e.jsx("h1",{className:"text-2xl font-fbold",children:t.title})}),e.jsx("div",{className:" text-gray-600 mb-4",children:e.jsx("span",{className:" font-fmedium text-lg",children:e.jsx("div",{className:" outline-none ",dangerouslySetInnerHTML:T(t.content)})})}),e.jsx("div",{className:"  text-sm font-fregular text-gray-500",children:e.jsx("span",{children:t.date?C(t.date):""})})]})]},s)}))})]}),e.jsx(I,{})]})};export{U as default};