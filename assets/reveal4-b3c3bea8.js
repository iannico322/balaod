import{r as e,j as o}from"./index-de73e16a.js";import{u as l,a as i,m}from"./coverSlide-1decadfa.js";const p="/balaod/assets/programs1-51fc46e7.png",b="/balaod/assets/programs2-c33c588a.png",u="/balaod/assets/programs3-a8e212b0.jfif",v="/balaod/assets/programs4-864874ba.jfif",g=({children:r,width:n="fit-content"})=>{const s=e.useRef(null),a=l(s),t=i(),c=i();return e.useEffect(()=>{a&&(t.start("visible"),c.start("visible"))},[a]),o.jsx("div",{ref:s,className:" flex items-center justify-center relative",style:{width:n,overflow:"hidden"},children:o.jsx(m.div,{variants:{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}},initial:"hidden",animate:t,transition:{duration:.5,delay:.4},children:r})})};export{p as C,b as P,g as R,u as a,v as b};