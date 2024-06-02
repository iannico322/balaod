import{a as o,j as e}from"./index-cfb2f2ed.js";import{u as d,a as r,m,C as f}from"./coverSlide-4458d7a2.js";import{F as h}from"./Footer-39f50c2c.js";const l="/balaod/assets/programs1-51fc46e7.png",u="/balaod/assets/programs2-c33c588a.png",p="/balaod/assets/programs3-a8e212b0.jfif",g="/balaod/assets/programs4-864874ba.jfif",x=({children:s,width:t="fit-content"})=>{const i=o.useRef(null),n=d(i),a=r(),c=r();return o.useEffect(()=>{n&&(a.start("visible"),c.start("visible"))},[n]),e.jsx("div",{ref:i,className:" flex items-center justify-center relative",style:{width:t,overflow:"hidden"},children:e.jsx(m.div,{variants:{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}},initial:"hidden",animate:a,transition:{duration:.5,delay:.4},children:s})})},y=()=>{const s=[{title:"Human Rights Promotion",img:l,description:"This involves the work of assessing the status of human rights in many marginalized communities, capacitating community paralegals in forwarding their rights, and facilitating the advocation of policies and programs that strengthen and enhance their rights-claiming mechanisms."},{title:"Environmental Justice",img:u,description:"BALAOD firmly believes that all the natural resources: land, trees, air, water and all the living plants and animals are critical common resources that must be shared and enjoyed by, and for the growth and development of,  all generations, present and future. "},{title:"Women and Children Protection",img:p,description:"The number of cases of abuse, exploitation and discrimination against women and children in our society show the extent by which this affected sector are marginalized, oppressed and objectified. BALAOD strives to work for the dismantling of structural policies, discriminate practices and even traditional mindsets that put women and children at the oppressive end."},{title:"Institutional Development",img:g,description:"In order to effectively perform its mission and successfully pursue its vision, BALAOD must also strive to continuously enhance its operations and ways of doing things in order to be responsive to the needs of its partner communities and to the challenges posed upon by society."}];return e.jsxs("div",{className:" min-h-0 w-full max-w-full  flex flex-col justify-center",children:[e.jsx(f,{children:e.jsxs("div",{id:"who-we-are",className:" px-20 sm:px-5 flex flex-col  w-full min-h-[40vh] pb-20 bg-primary-foreground pt-20 items-center justify-center bg-fixed bg-cover bg-center object-contain  ",style:{backgroundImage:`url(${l})`},children:[e.jsx("div",{className:"  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd900178] from-[2%] via-[#5d193ede] via-[90%] to-[#5d193ede] to-[90%] "}),e.jsxs("div",{className:"  z-20 flex flex-col items-center justify-center gap-5  ",children:[e.jsx("h1",{className:" mt-20  rounded-full text-accent font-fbold  md:text-4xl text-6xl font-semibold",children:"Our programs"}),e.jsxs("div",{className:" flex gap-2 text-lg text-accent font-flight",children:[e.jsx("a",{href:"#Human Rights Promotion",children:"Human Rights Promotion"})," |",e.jsx("a",{href:"#Environmental Justice",children:"Environmental Justice"})," |",e.jsx("a",{href:"#Women and Children Protection",children:"Women and Children Protection"})," |",e.jsx("a",{href:"#Institutional Development",children:"Institutional Development"})]})]})]})}),s.map((t,i)=>e.jsx("div",{id:t.title,className:" animate__animated animate__fadeIn relative flex rounded-sm px-20  sm:px-5 flex-col justify-center  w-full min-h-[50vh] py-20  items-start",children:e.jsxs("div",{className:" flex flex-col items-end gap-10  ",children:[e.jsx("h1",{className:"  bg-primary-foreground py-5 px-10 w-full  text-accent font-fbold  md:text-4xl text-2xl font-semibold text-center",children:t.title}),e.jsx(x,{children:e.jsxs("div",{className:" grid grid-cols-3 gap-10 ",children:[e.jsx("img",{className:" col-span-1",src:t.img,alt:""}),e.jsx("p",{className:" col-span-2 font-fregular  w-[90%]  text-xl",children:t.description})]})})]})},i)),e.jsx(h,{})]})};export{y as default};
