import{u as x,j as e,r as i,a as d}from"./index-20e3204b.js";import{S as g,A as p,a as c,C as h,R as v}from"./reveal-63a4ed5a.js";import{C as m}from"./coverSlide-08d4d3ad.js";import{S as f}from"./sweetalert2.all-70e2c407.js";import{L as w}from"./BalaodWhiteOutFull@3x-b5c97ecf.js";import{I as u}from"./Input-81d7f71a.js";import{L as j}from"./loader-2-58257a91.js";const y=()=>{const t=JSON.parse(localStorage.getItem("activities")||"")[0],s=x();return e.jsxs(g,{spaceBetween:0,centeredSlides:!0,autoplay:{delay:3500,disableOnInteraction:!1},modules:[p],className:"  ease-out duration-1000 text-accent flex items-start justify-center h-[100vh] w-full overflow-hidden bg-fixed bg-cover bg-center object-contain  ",children:[e.jsx(c,{children:e.jsx(m,{children:e.jsxs("div",{className:" rounded-b-md relative  flex items-start justify-center h-[100vh] w-full overflow-hidden bg-fixed bg-cover bg-center object-contain ",style:{backgroundImage:`url(${h})`},children:[e.jsx("div",{className:"  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd900178] from-[2%] via-[#5d193ede] via-[90%] to-[#5d193ede] to-[90%] "}),e.jsx("div",{className:" relative h-full  w-full flex justify-between items-center  overflow-hidden ",children:e.jsxs("div",{className:" mt-10 sm:mt-0 md:mt-5 sm:px-2 relative flex flex-col gap-9 sm:gap-4  z-10 w-full px-20   min-h-0  lg:px-10 md:items-center py-10 sm:py-2 sm:items-start sm:w-[90%]",children:[e.jsxs("h1",{className:" w-[800px] leading-loose sm:leading-[40px] sm:w-full  text-accent  font-fbold sm:text-lg text-3xl ",children:[e.jsx("span",{className:"text-5xl sm:text-4xl font-fbold bg-primary-foreground px-2 py-2 box-decoration-clone text-accent ",children:"BALAOD "})," ",e.jsx("hr",{className:" border-none bg-none h-[2vh]"}),e.jsx("span",{className:"  font-fmedium bg-accent px-2 py-2 box-decoration-clone text-primary",children:"Envisions a society where legal empowerment is a way of life  and a  means to protect and  advance peoples access to justice and resources."})]}),e.jsx("hr",{className:" animate__animated animate__slideInDown md:w-[70%] md:border-2 w-[20%] border-[2px] sm:border-[1px] border-primary-foreground sm:w-[50%]"})]})}),e.jsx("div",{className:" z-30 flex px-5 absolute bottom-0 w-full h-10 items-center justify-end text-accent bg-black/20 text-lg font-fmedium sm:text-sm text-gray-300 ",children:"© Balaod Mindanaw"})]})})}),t?e.jsx(c,{children:e.jsx(m,{children:e.jsxs("div",{className:" rounded-b-md relative  flex items-start justify-center h-[100vh] w-full overflow-hidden bg-fixed bg-cover bg-center object-contain ",style:{backgroundImage:`url(${t.imageURL})`},children:[e.jsx("div",{className:"  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd900178] from-[2%] via-[#5d193ede] via-[90%] to-[#5d193ede] to-[90%] "}),e.jsx("div",{className:" relative h-full  w-full flex justify-between items-center  overflow-hidden ",children:e.jsxs("div",{className:" mt-10 sm:mt-0 md:mt-5 sm:px-2 relative flex flex-col gap-9 sm:gap-4  z-10 w-full px-20   min-h-0  lg:px-10 md:items-center py-10 sm:py-2 sm:items-start sm:w-[90%]",children:[e.jsx("h1",{className:" font-fbold sm:text-2xl sm:max-w-full sm:leading-[47px] text-4xl text-primary  leading-loose max-w-[60%]",children:e.jsx("span",{className:"bg-background px-4 py-2 box-decoration-clone",children:t.title})}),e.jsx("hr",{className:" animate__animated animate__slideInDown md:w-[70%] md:border-2 w-[20%] border-[2px] sm:border-[1px] border-primary-foreground sm:w-[50%]"}),e.jsx(v,{children:e.jsx("button",{onClick:()=>{window.scrollTo(0,0),s(`/balaod/blog/${t._id}`),localStorage.setItem("selected",JSON.stringify(t))},className:" hover:opacity-60 transition-all duration-200 font-black shadow-2xl text-primary-foreground uppercase  sm:text-sm bg-transparent border border-primary-foreground text-xl p-4",children:"Read More"})})]})}),e.jsx("div",{className:" z-30 flex px-5 absolute bottom-0 w-full h-12 items-center justify-end text-accent bg-black/20 text-sm "})]})})}):""]})},_=()=>{const[t,s]=i.useState({email:"",password:""}),n=x();function b(){d.get("posting/kudlit").then(a=>{localStorage.setItem("kudlit",JSON.stringify(a.data.activities))})}i.useEffect(()=>{localStorage.getItem("accessToken")&&n("/balaod/editable/"),b()},[]);const[o,l]=i.useState(!1);return e.jsxs("div",{className:" relative min-h-0 w-full max-w-full  flex flex-col justify-center",children:[e.jsxs("div",{className:" z-30 flex flex-col items-center justify-center right-0 absolute h-screen w-[40vw] lg:w-screen backdrop-blur-sm bg-primary lg:bg-[#5d193e]/70",children:[e.jsx("img",{src:w,className:" h-[100px] object-contain",alt:""}),e.jsxs("form",{onSubmit:a=>{a.preventDefault(),l(!0),d.post("auth/login",t).then(r=>{switch(r.data.status){case"success":f.fire({position:"center",icon:"success",title:"Logging In",text:`Welcome back,  ${r.data.user.name}! `,showConfirmButton:!1,timer:2e3}),localStorage.setItem("user",JSON.stringify(r.data.user)),localStorage.setItem("accessToken",r.data.accessToken),n("/balaod/editable/");break;default:f.fire({position:"center",icon:"error",title:"Invalid Credentials",showConfirmButton:!1,timer:1500});break}l(!1)}).catch(r=>{console.log(r)}),setTimeout(()=>{l(!1)},5e3),console.log(t)},className:" w-[500px] sm:w-full sm:px-5 mt-10 flex flex-col gap-5",children:[e.jsx(u,{value:t.email,onChange:a=>{s({...t,email:a.target.value})},type:"email",placeholder:"Email"}),e.jsx(u,{value:t.password,onChange:a=>{s({...t,password:a.target.value})},type:"password",placeholder:"Password"}),e.jsx("p",{className:" text-background text-sm font-fregular cursor-pointer hover:underline",children:"  Forgot Password?"}),e.jsxs("button",{className:o?"relative px-8 py-2 rounded-md bg-background isolation-auto z-10 border-2 border-primary-foreground flex items-center justify-center gap-4 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-primary-foreground before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 font-fmedium pointer-events-none":" relative px-8 py-2 rounded-md bg-background isolation-auto z-10 border-2 border-primary-foreground flex items-center justify-center gap-4 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-primary-foreground before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 font-fmedium",children:[" ",e.jsx(j,{className:o?" animate-spin ":" hidden"})," ",o?"Loading":"Sign In"]})]})]}),e.jsx(y,{})]})};export{_ as default};
