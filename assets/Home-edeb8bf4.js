import{j as e,r as n,B as g,a as w,u as M}from"./index-4c595dbe.js";import{T as I,u as J,A as V,p as K,a as W,b as Y}from"./embla-carousel-auto-scroll.esm-2ad17209.js";import{R as T,a as q}from"./reveal3-1e0d3d99.js";import{F as G}from"./Footer-5fe3b73e.js";import{M as X}from"./Main-40e38051.js";import{R as B}from"./reveal-b52a1198.js";import{L as H}from"./BalaodWhiteOutFull@3x-b5c97ecf.js";import{I as v,S as y}from"./Input-419e8442.js";import{D as L,a as O,b as _,c as P,d as z,e as R,f as F}from"./dialog-c9eb2712.js";import{u as Z}from"./GetRefresh-f739ae5a.js";import"./coverSlide-9c6ad8f7.js";function U({className:r,e:t}){return e.jsx(B,{children:e.jsxs("div",{onClick:()=>{window.scrollTo(0,0),window.open(`/balaod/blog/${t._id}`,"_blank"),localStorage.setItem("selected",JSON.stringify(t))},className:" cursor-pointer rounded-sm  border  justify-center  border-card flex flex-col items-center relative bg-primary aspect-[7/8] overflow-hidden "+r,children:[e.jsx("div",{className:"  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd90019d] from-5% via-[#5d193e00] via-92% to-[#5d193ee5] to-2% ",children:e.jsx("img",{src:H,className:" m-5  logo h-7 right-0 absolute object-contain ",alt:"Vite logo"})}),e.jsx("img",{className:"  w-full h-full bg-white object-cover rounded-md  ",src:t.imageURL}),e.jsxs("div",{className:" w-full z-20 absolute bottom-0    mt-2 flex flex-col gap-4",children:[e.jsx("h1",{className:" text-accent font-fbold  px-5 w-[200px]",children:e.jsx("span",{className:" py-2  px-2 bg-primary-foreground",children:"Kudlit"})}),e.jsx("h1",{className:"  px-5 w-full text-wrap  leading-[37px]  text-primary text-md font-fbold",children:e.jsx("span",{className:" w-full bg-accent backdrop-blur-lg box-decoration-clone px-2 py-2",children:t.title})}),e.jsx("div",{className:" z-40 flex bottom-0 w-full h-10 items-center justify-end text-accent bg-[#531837ca] text-xs ",children:e.jsx("h1",{className:" px-5 font-fregular",children:t.author?`by: ${t.author}`:""})})]})]})})}function ee({resetPartners:r,id:t,e:l,order:s}){const[o,h]=n.useState(!1),[c,a]=n.useState(t),[d,p]=n.useState(l),[j,N]=n.useState(""),[C]=n.useState(JSON.parse(localStorage.getItem("kudlit")||"")),S=(m,u)=>u?m.filter(f=>{const D=f.title.toLowerCase(),Q=f.content.toLowerCase(),E=u.toLowerCase();return D.includes(E)||Q.includes(E)}):m,[A,k]=n.useState(C),b=m=>{N(m.target.value),h(!1),k(S(C,j))},[$,i]=n.useState(!1),x=async m=>{m.preventDefault(),console.log(t),console.log(s+1);try{await w.put(`posting/activity/${t}`,{highlight:!1,order:null},{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`,"Content-Type":"multipart/form-data"}}).then(u=>{console.log("remove current!");try{w.put(`posting/activity/${c}`,{highlight:!0,order:s+1},{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`,"Content-Type":"multipart/form-data"}}).then(f=>{console.log("updated!"),r(),y.fire({title:"Added!",text:`Highligh ${s+1} has been updated!`,icon:"success",showConfirmButton:!1,timer:2e3}),i(!1)})}catch(f){console.error("Error uploading partner data:",f)}i(!1)})}catch(u){console.error("Error uploading partner data:",u)}};return e.jsxs(L,{open:$,onOpenChange:i,children:[e.jsx(O,{asChild:!0,children:e.jsx(g,{variant:"secondary",onClick:()=>i(!0),children:"Change Highlight"})}),e.jsxs(_,{className:"sm:max-w-[425px]",children:[e.jsxs(P,{children:[e.jsxs(z,{children:["Changing Highlight #",s+1]}),e.jsx(R,{children:"Select  highlight from current activities, Click submit when you're done."})]}),o?e.jsx(U,{e:d}):"",e.jsxs("form",{onSubmit:x,className:"grid gap-2 py-4",children:[e.jsx(v,{className:"text-black",placeholder:"Search Activities",type:"search",value:j,onChange:b}),A.slice(0,5).map((m,u)=>e.jsxs("div",{className:" cursor-pointer border-border border flex items-center gap-3",onClick:()=>{N(m.title),h(!0),p(m),k([]),a(m._id)},children:[e.jsx("img",{src:m.imageURL,className:"  h-16 w-12  object-cover",alt:""}),e.jsx("p",{className:" font-fbold text-sm",children:m.title})]},u)),e.jsx(F,{children:e.jsx(g,{type:"submit",children:"Submit"})})]})]})]})}function te({className:r,e:t,order:l,resetPartners:s,id:o}){return e.jsx(B,{children:e.jsxs("div",{className:"  cursor-pointer rounded-sm  border  justify-center  border-card flex flex-col items-center relative  bg-primary aspect-[7/10] overflow-hidden "+r,children:[e.jsx("div",{className:" z-30 absolute",children:e.jsx(ee,{e:t,order:l,id:o,resetPartners:s})}),e.jsx("div",{className:"  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd90019d] from-5% via-[#5d193e00] via-92% to-[#5d193ee5] to-2% ",children:e.jsx("img",{src:H,className:" m-5  logo h-7 right-0 absolute object-contain ",alt:"Vite logo"})}),e.jsx("img",{className:"  w-full h-full bg-white object-cover rounded-md  ",src:t.imageURL}),e.jsxs("div",{className:" w-full z-20 absolute bottom-0    mt-2 flex flex-col gap-4",children:[e.jsx("h1",{className:" text-accent font-fbold  px-5 w-[400px]",children:e.jsx("span",{className:" py-2  px-2 bg-primary-foreground",children:"Kudlit"})}),e.jsx("h1",{className:"  px-5 w-full text-wrap  leading-[37px]  text-primary text-md font-fbold",children:e.jsx("span",{className:" w-full bg-accent backdrop-blur-lg box-decoration-clone px-2 py-2",children:t.title})}),e.jsx("div",{className:" z-40 flex bottom-0 w-full h-10 items-center justify-end text-accent bg-[#531837ca] text-xs ",children:e.jsx("h1",{className:" px-5 font-fregular",children:t.author?`by: ${t.author}`:""})})]})]})})}function se({resetPartners:r,order:t}){const[l,s]=n.useState(!1),[o,h]=n.useState(null),[c,a]=n.useState([]),[d,p]=n.useState(""),[j]=n.useState(JSON.parse(localStorage.getItem("kudlit")||"")),N=(i,x)=>x?i.filter(m=>{const u=m.title.toLowerCase(),f=m.content.toLowerCase(),D=x.toLowerCase();return u.includes(D)||f.includes(D)}):i,[C,S]=n.useState(j),A=i=>{p(i.target.value),s(!1),S(N(j,d))},[k,b]=n.useState(!1),$=async i=>{i.preventDefault(),console.log(t);try{w.put(`posting/activity/${o}`,{highlight:!0,order:t},{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`,"Content-Type":"multipart/form-data"}}).then(x=>{console.log("updated!"),r(),y.fire({title:"Added!",text:`Highligh ${t+1} has been updated!`,icon:"success",showConfirmButton:!1,timer:2e3}),b(!1)})}catch(x){console.error("Error uploading partner data:",x)}};return e.jsxs(L,{open:k,onOpenChange:b,children:[e.jsx(O,{asChild:!0,children:e.jsx(g,{variant:"secondary",onClick:()=>b(!0),children:"Change Highlight"})}),e.jsxs(_,{className:"sm:max-w-[425px]",children:[e.jsxs(P,{children:[e.jsxs(z,{children:["Changing Highlight #",t+1]}),e.jsx(R,{children:"Select  highlight from current activities, Click submit when you're done."})]}),l?e.jsx(U,{e:c}):"",e.jsxs("form",{onSubmit:$,className:"grid gap-2 py-4",children:[e.jsx(v,{className:"text-black",placeholder:"Search Activities",type:"search",value:d,onChange:A}),C.slice(0,5).map((i,x)=>e.jsxs("div",{className:" relative cursor-pointer border-border border flex items-center gap-3",onClick:()=>{p(i.title),s(!0),a(i),S([]),h(i._id)},children:[e.jsx("img",{src:i.imageURL,className:"  h-16 w-12  object-cover",alt:""}),e.jsx("p",{className:" font-fbold text-sm flex-wrap ",children:i.title})]},x)),e.jsx(F,{children:e.jsx(g,{type:"submit",children:"Submit"})})]})]})]})}const ae=({resetPartners:r,data:t})=>{const s=t.sort((c,a)=>c.order-a.order),o=[];for(let c=1;c<=4;c++){const a=s.find(d=>d.order===c);a?o.push(e.jsx(te,{resetPartners:r,order:a.order-1,e:a,id:a._id},a._id)):o.push(e.jsx("div",{className:" cursor-pointer rounded-sm  border  justify-center  border-card flex flex-col items-center relative  bg-primary aspect-[7/10] overflow-hidden",children:e.jsx(se,{resetPartners:r,order:c})},`placeholder-${c}`))}const h=M();return e.jsxs("div",{className:"  mt-36 relative  flex  gap-10 flex-col  items-center min-h-0 w-full ",children:[e.jsx(I,{children:e.jsx("h1",{className:" text-4xl font-fbold text-primary ",children:e.jsx("span",{children:"Activities"})})}),e.jsx(T,{children:e.jsx("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-4 gap-4 w-full sm:px-5 px-[4vw] min-h-0 justify-center items-center",children:o})}),e.jsx(B,{children:e.jsx("button",{onClick:()=>{window.scrollTo(0,0),h("/balaod/kudlit")},className:" w-[400px] sm:w-[300px]  hover:opacity-60 transition-all duration-200 font-black shadow-2xl text-primary-foreground uppercase  sm:text-sm bg-transparent border border-primary-foreground text-xl p-4",children:"View More"})})]})};const re=r=>{const{slides:t,options:l,resetPartners:s}=r,[o]=J(l,[V({playOnInit:!0})]);return e.jsx("div",{className:"embla ",children:e.jsx("div",{className:"embla__viewport",ref:o,children:e.jsx("div",{className:"embla__container sm:gap-1",children:t.map((h,c)=>e.jsx("div",{onClick:()=>{y.fire({imageUrl:h.imageURL,imageWidth:400,imageAlt:"Custom image",title:"This action will delete the image, are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(a=>{a.isConfirmed&&(w.delete(`posting/partner/${h._id}`,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}}).then(d=>{s(),console.log(d)}).catch(d=>{console.log(d)}),y.fire({title:"Deleted!",text:"The Image has been deleted.",icon:"success"}))})},className:"embla__slide flex  justify-center",children:e.jsx("img",{src:h.imageURL,className:" col-span-1  h-32 sm:h-24 object-contain",alt:""})},c))})})})};function le({resetPartners:r}){const[t,l]=n.useState(!1),[s,o]=n.useState({type:"partner",linkToPage:"https://www.facebook.com/BALAODMindanaw",photo:null}),h=a=>{o({...s,photo:a.target.files[0]})},c=async a=>{a.preventDefault();const d=new FormData;d.append("type",s.type),d.append("linkToPage",s.linkToPage),d.append("photo",s.photo);try{await w.post("posting/partner/addPartner",d,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`,"Content-Type":"multipart/form-data"}}).then(p=>{console.log(p),r(),y.fire({title:"Added!",text:"The Image has been added, try view on the public url or refresh the page.",icon:"success",showConfirmButton:!1,timer:2e3}),l(!1)})}catch(p){console.error("Error uploading partner data:",p)}};return e.jsxs(L,{open:t,onOpenChange:l,children:[e.jsx(O,{asChild:!0,onClick:()=>l(!0),children:e.jsx(g,{variant:"outline",children:"Add Partners"})}),e.jsxs(_,{className:"sm:max-w-[425px]",children:[e.jsxs(P,{children:[e.jsx(z,{children:"Add Partners"}),e.jsx(R,{children:"Add another partners or Networks here. Click submit when you're done."})]}),e.jsxs("form",{onSubmit:c,className:"grid gap-4 py-4",children:[e.jsx(v,{className:" text-black",placeholder:"Type",value:s.type,required:!1,onChange:a=>{o({...s,type:a.target.value})}}),e.jsx(v,{className:" text-black",placeholder:"linkToPage",type:"url",value:s.linkToPage,onChange:a=>{o({...s,linkToPage:a.target.value})}}),e.jsx(v,{className:" text-black",placeholder:"Photo",type:"file",onChange:h}),e.jsx(F,{children:e.jsx(g,{type:"submit",children:"Submit"})})]})]})]})}const oe=({data:r,key:t,resetPartners:l})=>e.jsxs("div",{id:"Partners-and-Networks",className:" rounded-sm pt-40  sm:px-0 flex flex-col  w-full py-10  gap-10 sm:gap-5   min-h-0 items-center justify-center  ",children:[e.jsx(I,{children:e.jsxs("div",{className:" flex  items-center gap-4 w-full",children:[e.jsx("h1",{className:" text-4xl font-fbold text-primary text-center ",children:e.jsx("span",{children:"Partners and Networks"})}),e.jsx(le,{resetPartners:l})]})}),e.jsx("div",{className:" w-full flex justify-center",children:e.jsx(T,{children:e.jsx("div",{className:" w-full min-h-0 flex justify-center mt-20 sm:mt-10",children:e.jsx(re,{resetPartners:l,slides:r,options:{loop:!0}})})})})]},t),je=()=>{const{seed:r,partners:t,activities:l,resetPartners:s}=Z();return n.useEffect(()=>{s()},[]),e.jsxs("div",{className:" min-h-0 w-full max-w-full  flex flex-col justify-center",children:[e.jsx(X,{data:l},r+2),e.jsx("div",{id:"more",className:" rounded-sm px-[5vw] sm:px-5 flex-col  w-full  min-h-0 pt-20 items-center justify-center  ",children:e.jsxs("div",{className:" flex  justify-center gap-10 sm:gap-5 items-start  ",children:[e.jsx(T,{children:e.jsxs("div",{className:" flex flex-col",children:[e.jsx("h1",{className:" text-primary font-fbold  md:text-4xl text-7xl font-semibold",children:"Balaod"}),e.jsxs("p",{className:" text-primary text-2xl  sm:text-lg font-fextra-bold-italic",children:["Noun."," ",e.jsx("span",{className:" font-fregular",children:"A Cebuano term for law"})]})]})}),e.jsx(q,{children:e.jsx("div",{className:" flex gap-5",children:e.jsx("p",{className:" font-flight   text-3xl text-primary  sm:text-base",children:"To achieve our advocacies on gender equality, and legal improvement in the ownership and use of natural resources (resource tenure) within the context of people actively participating in governance, we constantly engage with various marginalized groups through legal empowerment approach"})})})]})}),e.jsx("hr",{className:" w-full border border-primary h-2 border-none border-b-2"}),e.jsx(ae,{resetPartners:s,data:l},r+1),e.jsx(oe,{resetPartners:s,data:t},r),e.jsxs("div",{id:"Accreditations",className:" rounded-sm  px-20 sm:px-5 flex flex-col  w-full py-10 pt-40  gap-20   min-h-0 items-center justify-center  ",children:[e.jsx(I,{children:e.jsx("h1",{className:" text-4xl font-fbold text-primary text-center ",children:e.jsx("span",{children:"Accreditations"})})}),e.jsx("div",{className:" w-full flex justify-center",children:e.jsx(T,{children:e.jsx("div",{className:" w-full min-h-0 flex justify-center",children:e.jsx("div",{className:" grid grid-cols-3 items-center justify-center w-full gap-10  sm:gap-2",children:[K,W,Y].map((o,h)=>e.jsx("div",{className:" flex flex-col gap-5",children:e.jsx("img",{src:o,className:" col-span-1 sm:col-span-3 justify-self-center h-36 sm:h-24 object-contain",alt:""})},h))})})})})]}),e.jsx("div",{className:" w-full h-[30vh]"}),e.jsx(G,{})]})};export{je as default};
