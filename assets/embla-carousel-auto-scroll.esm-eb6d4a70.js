import{r as W,j as xt}from"./index-470f3ee0.js";import{u as Wt,a as Nt,m as kt}from"./coverSlide-c358c98a.js";const Vn=({children:t,width:n="fit-content"})=>{const e=W.useRef(null),s=Wt(e),i=Nt(),o=Nt();return W.useEffect(()=>{s&&(i.start("visible"),o.start("visible"))},[s]),xt.jsxs("div",{ref:e,style:{position:"relative",width:n,overflow:"hidden"},children:[xt.jsx(kt.div,{variants:{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}},initial:"hidden",animate:i,transition:{duration:.5,delay:.25},children:t}),xt.jsx(kt.div,{variants:{hidden:{left:0},visible:{left:"100%"}},initial:"hidden",animate:o,transition:{duration:.5,ease:"easeIn"},style:{position:"absolute",top:4,bottom:4,left:0,right:0,background:"#662138",zIndex:20}})]})},jn="/assets/DSWD-Logo-c90b4d02.png",zn="/assets/sec-e819f356.png",Hn="/assets/cdo_seal-e35ca07a.png";function tn(t){return Object.prototype.toString.call(t)==="[object Object]"}function Bt(t){return tn(t)||Array.isArray(t)}function nn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function It(t,n){const e=Object.keys(t),s=Object.keys(n);if(e.length!==s.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),o=JSON.stringify(Object.keys(n.breakpoints||{}));return i!==o?!1:e.every(r=>{const u=t[r],c=n[r];return typeof u=="function"?`${u}`==`${c}`:!Bt(u)||!Bt(c)?u===c:It(u,c)})}function Vt(t){return t.concat().sort((n,e)=>n.name>e.name?1:-1).map(n=>n.options)}function en(t,n){if(t.length!==n.length)return!1;const e=Vt(t),s=Vt(n);return e.every((i,o)=>{const r=s[o];return It(i,r)})}function Ot(t){return typeof t=="number"}function Et(t){return typeof t=="string"}function Lt(t){return typeof t=="boolean"}function jt(t){return Object.prototype.toString.call(t)==="[object Object]"}function M(t){return Math.abs(t)}function Dt(t){return Math.sign(t)}function ct(t,n){return M(t-n)}function on(t,n){if(t===0||n===0||M(t)<=M(n))return 0;const e=ct(M(t),M(n));return M(e/t)}function ut(t){return at(t).map(Number)}function _(t){return t[lt(t)]}function lt(t){return Math.max(0,t.length-1)}function Tt(t,n){return n===lt(t)}function zt(t,n=0){return Array.from(Array(t),(e,s)=>n+s)}function at(t){return Object.keys(t)}function Ht(t,n){return[t,n].reduce((e,s)=>(at(s).forEach(i=>{const o=e[i],r=s[i],u=jt(o)&&jt(r);e[i]=u?Ht(o,r):r}),e),{})}function vt(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function rn(t,n){const e={start:s,center:i,end:o};function s(){return 0}function i(c){return o(c)/2}function o(c){return n-c}function r(c,a){return Et(t)?e[t](c):t(n,c,a)}return{measure:r}}function ft(){let t=[];function n(i,o,r,u={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(o,r,u),c=()=>i.removeEventListener(o,r,u);else{const a=i;a.addListener(r),c=()=>a.removeListener(r)}return t.push(c),s}function e(){t=t.filter(i=>i())}const s={add:n,clear:e};return s}function sn(t,n,e,s){const i=ft(),o=1e3/60;let r=null,u=0,c=0;function a(){i.add(t,"visibilitychange",()=>{t.hidden&&d()})}function h(){b(),i.clear()}function f(y){if(!c)return;r||(r=y);const l=y-r;for(r=y,u+=l;u>=o;)e(),u-=o;const g=M(u/o);s(g),c&&n.requestAnimationFrame(f)}function p(){c||(c=n.requestAnimationFrame(f))}function b(){n.cancelAnimationFrame(c),r=null,u=0,c=0}function d(){r=null,u=0}return{init:a,destroy:h,start:p,stop:b,update:e,render:s}}function cn(t,n){const e=n==="rtl",s=t==="y",i=s?"y":"x",o=s?"x":"y",r=!s&&e?-1:1,u=h(),c=f();function a(d){const{height:m,width:y}=d;return s?m:y}function h(){return s?"top":e?"right":"left"}function f(){return s?"bottom":e?"left":"right"}function p(d){return d*r}return{scroll:i,cross:o,startEdge:u,endEdge:c,measureSize:a,direction:p}}function st(t=0,n=0){const e=M(t-n);function s(a){return a<t}function i(a){return a>n}function o(a){return s(a)||i(a)}function r(a){return o(a)?s(a)?t:n:a}function u(a){return e?a-e*Math.ceil((a-n)/e):a}return{length:e,max:n,min:t,constrain:r,reachedAny:o,reachedMax:i,reachedMin:s,removeOffset:u}}function Rt(t,n,e){const{constrain:s}=st(0,t),i=t+1;let o=r(n);function r(p){return e?M((i+p)%i):s(p)}function u(){return o}function c(p){return o=r(p),f}function a(p){return h().set(u()+p)}function h(){return Rt(t,u(),e)}const f={get:u,set:c,add:a,clone:h};return f}function un(t,n,e,s,i,o,r,u,c,a,h,f,p,b,d,m,y,l,g){const{cross:x,direction:D}=t,v=["INPUT","SELECT","TEXTAREA"],I={passive:!1},E=ft(),O=ft(),L=st(50,225).constrain(b.measure(20)),T={mouse:300,touch:400},A={mouse:500,touch:600},C=d?43:25;let z=!1,N=0,q=0,G=!1,V=!1,K=!1,H=!1;function Y(S){if(!g)return;function w(k){(Lt(g)||g(S,k))&&j(k)}const F=n;E.add(F,"dragstart",k=>k.preventDefault(),I).add(F,"touchmove",()=>{},I).add(F,"touchend",()=>{}).add(F,"touchstart",w).add(F,"mousedown",w).add(F,"touchcancel",B).add(F,"contextmenu",B).add(F,"click",it,!0)}function U(){E.clear(),O.clear()}function tt(){const S=H?e:n;O.add(S,"touchmove",$,I).add(S,"touchend",B).add(S,"mousemove",$,I).add(S,"mouseup",B)}function R(S){const w=S.nodeName||"";return v.includes(w)}function nt(){return(d?A:T)[H?"mouse":"touch"]}function et(S,w){const F=f.add(Dt(S)*-1),k=h.byDistance(S,!d).distance;return d||M(S)<L?k:y&&w?k*.5:h.byIndex(F.get(),0).distance}function j(S){const w=vt(S,s);H=w,K=d&&w&&!S.buttons&&z,z=ct(i.get(),r.get())>=2,!(w&&S.button!==0)&&(R(S.target)||(G=!0,o.pointerDown(S),a.useFriction(0).useDuration(0),i.set(r),tt(),N=o.readPoint(S),q=o.readPoint(S,x),p.emit("pointerDown")))}function $(S){if(!vt(S,s)&&S.touches.length>=2)return B(S);const F=o.readPoint(S),k=o.readPoint(S,x),Z=ct(F,N),J=ct(k,q);if(!V&&!H&&(!S.cancelable||(V=Z>J,!V)))return B(S);const X=o.pointerMove(S);Z>m&&(K=!0),a.useFriction(.3).useDuration(.75),u.start(),i.add(D(X)),S.preventDefault()}function B(S){const F=h.byDistance(0,!1).index!==f.get(),k=o.pointerUp(S)*nt(),Z=et(D(k),F),J=on(k,Z),X=C-10*J,ot=l+J/50;V=!1,G=!1,O.clear(),a.useDuration(X).useFriction(ot),c.distance(Z,!d),H=!1,p.emit("pointerUp")}function it(S){K&&(S.stopPropagation(),S.preventDefault(),K=!1)}function Q(){return G}return{init:Y,destroy:U,pointerDown:Q}}function an(t,n){let s,i;function o(f){return f.timeStamp}function r(f,p){const d=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(vt(f,n)?f:f.touches[0])[d]}function u(f){return s=f,i=f,r(f)}function c(f){const p=r(f)-r(i),b=o(f)-o(s)>170;return i=f,b&&(s=f),p}function a(f){if(!s||!i)return 0;const p=r(i)-r(s),b=o(f)-o(s),d=o(f)-o(i)>170,m=p/b;return b&&!d&&M(m)>.1?m:0}return{pointerDown:u,pointerMove:c,pointerUp:a,readPoint:r}}function fn(){function t(e){const{offsetTop:s,offsetLeft:i,offsetWidth:o,offsetHeight:r}=e;return{top:s,right:i+o,bottom:s+r,left:i,width:o,height:r}}return{measure:t}}function ln(t){function n(s){return t*(s/100)}return{measure:n}}function dn(t,n,e,s,i,o,r){let u,c,a=[],h=!1;function f(m){return i.measureSize(r.measure(m))}function p(m){if(!o)return;c=f(t),a=s.map(f);function y(g){for(const x of g){const D=x.target===t,v=s.indexOf(x.target),I=D?c:a[v],E=f(D?t:s[v]);if(M(E-I)>=.5){e.requestAnimationFrame(()=>{m.reInit(),n.emit("resize")});break}}}u=new ResizeObserver(g=>{h||(Lt(o)||o(m,g))&&y(g)}),[t].concat(s).forEach(g=>u.observe(g))}function b(){u&&u.disconnect(),h=!0}return{init:p,destroy:b}}function pn(t,n,e,s,i){let o=0,r=0,u=s,c=i,a=t.get(),h=0;function f(){const v=e.get()-t.get(),I=!u;let E=0;return I?(o=0,t.set(e),E=v):(o+=v/u,o*=c,a+=o,t.add(o),E=a-h),r=Dt(E),h=a,D}function p(){const v=e.get()-n.get();return M(v)<.001}function b(){return u}function d(){return r}function m(){return o}function y(){return g(s)}function l(){return x(i)}function g(v){return u=v,D}function x(v){return c=v,D}const D={direction:d,duration:b,velocity:m,seek:f,settled:p,useBaseFriction:l,useBaseDuration:y,useFriction:x,useDuration:g};return D}function mn(t,n,e,s,i){const o=i.measure(10),r=i.measure(50),u=st(.1,.99);let c=!1;function a(){return!(c||!t.reachedAny(e.get())||!t.reachedAny(n.get()))}function h(b){if(!a())return;const d=t.reachedMin(n.get())?"min":"max",m=M(t[d]-n.get()),y=e.get()-n.get(),l=u.constrain(m/r);e.subtract(y*l),!b&&M(y)<o&&(e.set(t.constrain(e.get())),s.useDuration(25).useBaseFriction())}function f(b){c=!b}return{constrain:h,toggleActive:f}}function gn(t,n,e,s,i){const o=st(-n+t,0),r=f(),u=h(),c=p();function a(d,m){return ct(d,m)<1}function h(){const d=r[0],m=_(r),y=r.lastIndexOf(d),l=r.indexOf(m)+1;return st(y,l)}function f(){return e.map((d,m)=>{const{min:y,max:l}=o,g=o.constrain(d),x=!m,D=Tt(e,m);return x?l:D||a(y,g)?y:a(l,g)?l:g}).map(d=>parseFloat(d.toFixed(3)))}function p(){if(n<=t+i)return[o.max];if(s==="keepSnaps")return r;const{min:d,max:m}=u;return r.slice(d,m)}return{snapsContained:c,scrollContainLimit:u}}function hn(t,n,e){const s=n[0],i=e?s-t:_(n);return{limit:st(i,s)}}function yn(t,n,e,s){const o=n.min+.1,r=n.max+.1,{reachedMin:u,reachedMax:c}=st(o,r);function a(p){return p===1?c(e.get()):p===-1?u(e.get()):!1}function h(p){if(!a(p))return;const b=t*(p*-1);s.forEach(d=>d.add(b))}return{loop:h}}function Sn(t){const{max:n,length:e}=t;function s(o){const r=o-n;return e?r/-e:0}return{get:s}}function bn(t,n,e,s,i){const{startEdge:o,endEdge:r}=t,{groupSlides:u}=i,c=f().map(n.measure),a=p(),h=b();function f(){return u(s).map(m=>_(m)[r]-m[0][o]).map(M)}function p(){return s.map(m=>e[o]-m[o]).map(m=>-M(m))}function b(){return u(a).map(m=>m[0]).map((m,y)=>m+c[y])}return{snaps:a,snapsAligned:h}}function xn(t,n,e,s,i,o){const{groupSlides:r}=i,{min:u,max:c}=s,a=h();function h(){const p=r(o),b=!t||n==="keepSnaps";return e.length===1?[o]:b?p:p.slice(u,c).map((d,m,y)=>{const l=!m,g=Tt(y,m);if(l){const x=_(y[0])+1;return zt(x)}if(g){const x=lt(o)-_(y)[0]+1;return zt(x,_(y)[0])}return d})}return{slideRegistry:a}}function En(t,n,e,s,i){const{reachedAny:o,removeOffset:r,constrain:u}=s;function c(d){return d.concat().sort((m,y)=>M(m)-M(y))[0]}function a(d){const m=t?r(d):u(d),y=n.map((g,x)=>({diff:h(g-m,0),index:x})).sort((g,x)=>M(g.diff)-M(x.diff)),{index:l}=y[0];return{index:l,distance:m}}function h(d,m){const y=[d,d+e,d-e];if(!t)return d;if(!m)return c(y);const l=y.filter(g=>Dt(g)===m);return l.length?c(l):_(y)-e}function f(d,m){const y=n[d]-i.get(),l=h(y,m);return{index:d,distance:l}}function p(d,m){const y=i.get()+d,{index:l,distance:g}=a(y),x=!t&&o(y);if(!m||x)return{index:l,distance:d};const D=n[l]-g,v=d+h(D,0);return{index:l,distance:v}}return{byDistance:p,byIndex:f,shortcut:h}}function vn(t,n,e,s,i,o,r){function u(f){const p=f.distance,b=f.index!==n.get();o.add(p),p&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),b&&(e.set(n.get()),n.set(f.index),r.emit("select"))}function c(f,p){const b=i.byDistance(f,p);u(b)}function a(f,p){const b=n.clone().set(f),d=i.byIndex(b.get(),p);u(d)}return{distance:c,index:a}}function In(t,n,e,s,i,o,r){let u=0;function c(){o.add(document,"keydown",a,!1),n.forEach(h)}function a(p){p.code==="Tab"&&(u=new Date().getTime())}function h(p){const b=()=>{if(new Date().getTime()-u>10)return;t.scrollLeft=0;const y=n.indexOf(p),l=e.findIndex(g=>g.includes(y));Ot(l)&&(i.useDuration(0),s.index(l,0),r.emit("slideFocus"))};o.add(p,"focus",b,{passive:!0,capture:!0})}return{init:c}}function pt(t){let n=t;function e(){return n}function s(c){n=r(c)}function i(c){n+=r(c)}function o(c){n-=r(c)}function r(c){return Ot(c)?c:c.get()}return{get:e,set:s,add:i,subtract:o}}function Gt(t,n){const e=t.scroll==="x"?o:r,s=n.style;let i=!1;function o(f){return`translate3d(${f}px,0px,0px)`}function r(f){return`translate3d(0px,${f}px,0px)`}function u(f){i||(s.transform=e(t.direction(f)))}function c(f){i=!f}function a(){i||(s.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:a,to:u,toggleActive:c}}function On(t,n,e,s,i,o,r,u,c){const h=ut(i),f=ut(i).reverse(),p=l().concat(g());function b(E,O){return E.reduce((L,T)=>L-i[T],O)}function d(E,O){return E.reduce((L,T)=>b(L,O)>0?L.concat([T]):L,[])}function m(E){return o.map((O,L)=>({start:O-s[L]+.5+E,end:O+n-.5+E}))}function y(E,O,L){const T=m(O);return E.map(A=>{const C=L?0:-e,z=L?e:0,N=L?"end":"start",q=T[A][N];return{index:A,loopPoint:q,slideLocation:pt(-1),translate:Gt(t,c[A]),target:()=>u.get()>q?C:z}})}function l(){const E=r[0],O=d(f,E);return y(O,e,!1)}function g(){const E=n-r[0]-1,O=d(h,E);return y(O,-e,!0)}function x(){return p.every(({index:E})=>{const O=h.filter(L=>L!==E);return b(O,n)<=.1})}function D(){p.forEach(E=>{const{target:O,translate:L,slideLocation:T}=E,A=O();A!==T.get()&&(L.to(A),T.set(A))})}function v(){p.forEach(E=>E.translate.clear())}return{canLoop:x,clear:v,loop:D,loopPoints:p}}function Ln(t,n,e){let s,i=!1;function o(c){if(!e)return;function a(h){for(const f of h)if(f.type==="childList"){c.reInit(),n.emit("slidesChanged");break}}s=new MutationObserver(h=>{i||(Lt(e)||e(c,h))&&a(h)}),s.observe(t,{childList:!0})}function r(){s&&s.disconnect(),i=!0}return{init:o,destroy:r}}function Dn(t,n,e,s){const i={};let o=null,r=null,u,c=!1;function a(){u=new IntersectionObserver(d=>{c||(d.forEach(m=>{const y=n.indexOf(m.target);i[y]=m}),o=null,r=null,e.emit("slidesInView"))},{root:t.parentElement,threshold:s}),n.forEach(d=>u.observe(d))}function h(){u&&u.disconnect(),c=!0}function f(d){return at(i).reduce((m,y)=>{const l=parseInt(y),{isIntersecting:g}=i[l];return(d&&g||!d&&!g)&&m.push(l),m},[])}function p(d=!0){if(d&&o)return o;if(!d&&r)return r;const m=f(d);return d&&(o=m),d||(r=m),m}return{init:a,destroy:h,get:p}}function Tn(t,n,e,s,i,o){const{measureSize:r,startEdge:u,endEdge:c}=t,a=e[0]&&i,h=d(),f=m(),p=e.map(r),b=y();function d(){if(!a)return 0;const g=e[0];return M(n[u]-g[u])}function m(){if(!a)return 0;const g=o.getComputedStyle(_(s));return parseFloat(g.getPropertyValue(`margin-${c}`))}function y(){return e.map((g,x,D)=>{const v=!x,I=Tt(D,x);return v?p[x]+h:I?p[x]+f:D[x+1][u]-g[u]}).map(M)}return{slideSizes:p,slideSizesWithGaps:b,startGap:h,endGap:f}}function An(t,n,e,s,i,o,r,u,c){const{startEdge:a,endEdge:h,direction:f}=t,p=Ot(e);function b(l,g){return ut(l).filter(x=>x%g===0).map(x=>l.slice(x,x+g))}function d(l){return l.length?ut(l).reduce((g,x,D)=>{const v=_(g)||0,I=v===0,E=x===lt(l),O=i[a]-o[v][a],L=i[a]-o[x][h],T=!s&&I?f(r):0,A=!s&&E?f(u):0,C=M(L-A-(O+T));return D&&C>n+c&&g.push(x),E&&g.push(l.length),g},[]).map((g,x,D)=>{const v=Math.max(D[x-1]||0);return l.slice(v,g)}):[]}function m(l){return p?b(l,e):d(l)}return{groupSlides:m}}function wn(t,n,e,s,i,o,r){const{align:u,axis:c,direction:a,startIndex:h,loop:f,duration:p,dragFree:b,dragThreshold:d,inViewThreshold:m,slidesToScroll:y,skipSnaps:l,containScroll:g,watchResize:x,watchSlides:D,watchDrag:v}=o,I=2,E=fn(),O=E.measure(n),L=e.map(E.measure),T=cn(c,a),A=T.measureSize(O),C=ln(A),z=rn(u,A),N=!f&&!!g,q=f||!!g,{slideSizes:G,slideSizesWithGaps:V,startGap:K,endGap:H}=Tn(T,O,L,e,q,i),Y=An(T,A,y,f,O,L,K,H,I),{snaps:U,snapsAligned:tt}=bn(T,z,O,L,Y),R=-_(U)+_(V),{snapsContained:nt,scrollContainLimit:et}=gn(A,R,tt,g,I),j=N?nt:tt,{limit:$}=hn(R,j,f),B=Rt(lt(j),h,f),it=B.clone(),Q=ut(e),P=({dragHandler:rt,scrollBody:St,scrollBounds:bt,options:{loop:dt}})=>{dt||bt.constrain(rt.pointerDown()),St.seek()},S=({scrollBody:rt,translate:St,location:bt,offsetLocation:dt,scrollLooper:Qt,slideLooper:Jt,dragHandler:Xt,animation:_t,eventHandler:Pt,options:{loop:Yt}},Zt)=>{const Ft=rt.velocity(),Ct=rt.settled();Ct&&!Xt.pointerDown()&&(_t.stop(),Pt.emit("settle")),Ct||Pt.emit("scroll"),dt.set(bt.get()-Ft+Ft*Zt),Yt&&(Qt.loop(rt.direction()),Jt.loop()),St.to(dt.get())},w=sn(s,i,()=>P(yt),rt=>S(yt,rt)),F=.68,k=j[B.get()],Z=pt(k),J=pt(k),X=pt(k),ot=pn(Z,J,X,p,F),gt=En(f,j,R,$,X),ht=vn(w,B,it,ot,gt,X,r),At=Sn($),wt=ft(),qt=Dn(n,e,r,m),{slideRegistry:Mt}=xn(N,g,j,et,Y,Q),Kt=In(t,e,Mt,ht,ot,wt,r),yt={ownerDocument:s,ownerWindow:i,eventHandler:r,containerRect:O,slideRects:L,animation:w,axis:T,dragHandler:un(T,t,s,i,X,an(T,i),Z,w,ht,ot,gt,B,r,C,b,d,l,F,v),eventStore:wt,percentOfView:C,index:B,indexPrevious:it,limit:$,location:Z,offsetLocation:J,options:o,resizeHandler:dn(n,r,i,e,T,x,E),scrollBody:ot,scrollBounds:mn($,J,X,ot,C),scrollLooper:yn(R,$,J,[Z,J,X]),scrollProgress:At,scrollSnapList:j.map(At.get),scrollSnaps:j,scrollTarget:gt,scrollTo:ht,slideLooper:On(T,A,R,G,V,U,j,J,e),slideFocus:Kt,slidesHandler:Ln(n,r,D),slidesInView:qt,slideIndexes:Q,slideRegistry:Mt,slidesToScroll:Y,target:X,translate:Gt(T,n)};return yt}function Mn(){let t={},n;function e(a){n=a}function s(a){return t[a]||[]}function i(a){return s(a).forEach(h=>h(n,a)),c}function o(a,h){return t[a]=s(a).concat([h]),c}function r(a,h){return t[a]=s(a).filter(f=>f!==h),c}function u(){t={}}const c={init:e,emit:i,off:r,on:o,clear:u};return c}const Pn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function Fn(t){function n(o,r){return Ht(o,r||{})}function e(o){const r=o.breakpoints||{},u=at(r).filter(c=>t.matchMedia(c).matches).map(c=>r[c]).reduce((c,a)=>n(c,a),{});return n(o,u)}function s(o){return o.map(r=>at(r.breakpoints||{})).reduce((r,u)=>r.concat(u),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:e,optionsMediaQueries:s}}function Cn(t){let n=[];function e(o,r){return n=r.filter(({options:u})=>t.optionsAtMedia(u).active!==!1),n.forEach(u=>u.init(o,t)),r.reduce((u,c)=>Object.assign(u,{[c.name]:c}),{})}function s(){n=n.filter(o=>o.destroy())}return{init:e,destroy:s}}function mt(t,n,e){const s=t.ownerDocument,i=s.defaultView,o=Fn(i),r=Cn(o),u=ft(),c=Mn(),{mergeOptions:a,optionsAtMedia:h,optionsMediaQueries:f}=o,{on:p,off:b,emit:d}=c,m=A;let y=!1,l,g=a(Pn,mt.globalOptions),x=a(g),D=[],v,I,E;function O(){const{container:P,slides:S}=x;I=(Et(P)?t.querySelector(P):P)||t.children[0];const F=Et(S)?I.querySelectorAll(S):S;E=[].slice.call(F||I.children)}function L(P){const S=wn(t,I,E,s,i,P,c);if(P.loop&&!S.slideLooper.canLoop()){const w=Object.assign({},P,{loop:!1});return L(w)}return S}function T(P,S){y||(g=a(g,P),x=h(g),D=S||D,O(),l=L(x),f([g,...D.map(({options:w})=>w)]).forEach(w=>u.add(w,"change",A)),x.active&&(l.translate.to(l.location.get()),l.animation.init(),l.slidesInView.init(),l.slideFocus.init(),l.eventHandler.init(Q),l.resizeHandler.init(Q),l.slidesHandler.init(Q),l.options.loop&&l.slideLooper.loop(),I.offsetParent&&E.length&&l.dragHandler.init(Q),v=r.init(Q,D)))}function A(P,S){const w=U();C(),T(a({startIndex:w},P),S),c.emit("reInit")}function C(){l.dragHandler.destroy(),l.eventStore.clear(),l.translate.clear(),l.slideLooper.clear(),l.resizeHandler.destroy(),l.slidesHandler.destroy(),l.slidesInView.destroy(),l.animation.destroy(),r.destroy(),u.clear()}function z(){y||(y=!0,u.clear(),C(),c.emit("destroy"),c.clear())}function N(P,S,w){!x.active||y||(l.scrollBody.useBaseFriction().useDuration(S===!0?0:x.duration),l.scrollTo.index(P,w||0))}function q(P){const S=l.index.add(1).get();N(S,P,-1)}function G(P){const S=l.index.add(-1).get();N(S,P,1)}function V(){return l.index.add(1).get()!==U()}function K(){return l.index.add(-1).get()!==U()}function H(){return l.scrollSnapList}function Y(){return l.scrollProgress.get(l.location.get())}function U(){return l.index.get()}function tt(){return l.indexPrevious.get()}function R(){return l.slidesInView.get()}function nt(){return l.slidesInView.get(!1)}function et(){return v}function j(){return l}function $(){return t}function B(){return I}function it(){return E}const Q={canScrollNext:V,canScrollPrev:K,containerNode:B,internalEngine:j,destroy:z,off:b,on:p,emit:d,plugins:et,previousScrollSnap:tt,reInit:m,rootNode:$,scrollNext:q,scrollPrev:G,scrollProgress:Y,scrollSnapList:H,scrollTo:N,selectedScrollSnap:U,slideNodes:it,slidesInView:R,slidesNotInView:nt};return T(n,e),setTimeout(()=>c.emit("init"),0),Q}mt.globalOptions=void 0;function Ut(t={},n=[]){const e=W.useRef(t),s=W.useRef(n),[i,o]=W.useState(),[r,u]=W.useState(),c=W.useCallback(()=>{i&&i.reInit(e.current,s.current)},[i]);return W.useEffect(()=>{if(nn()&&r){mt.globalOptions=Ut.globalOptions;const a=mt(r,e.current,s.current);return o(a),()=>a.destroy()}else o(void 0)},[r,o]),W.useEffect(()=>{It(e.current,t)||(e.current=t,c())},[t,c]),W.useEffect(()=>{en(s.current,n)||(s.current=n,c())},[n,c]),[u,i]}Ut.globalOptions=void 0;const Nn={direction:"forward",speed:2,startDelay:1e3,active:!0,breakpoints:{},playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,rootNode:null};function $t(t={}){let n,e,s,i=!1,o=!0,r=0,u,c;function a(v,I){e=v;const{mergeOptions:E,optionsAtMedia:O}=I,L=E(Nn,$t.globalOptions),T=E(L,t);if(n=O(T),e.scrollSnapList().length<=1)return;u=n.startDelay,s=!1,c=e.internalEngine().scrollBody;const{eventStore:A}=e.internalEngine(),C=e.rootNode(),z=n.rootNode&&n.rootNode(C)||C,N=e.containerNode();e.on("pointerDown",p),n.stopOnInteraction||e.on("pointerUp",d),n.stopOnMouseEnter&&(A.add(z,"mouseenter",()=>{o=!1,p()}),n.stopOnInteraction||A.add(z,"mouseleave",()=>{o=!0,f()})),n.stopOnFocusIn&&(A.add(N,"focusin",()=>{p(),e.scrollTo(e.selectedScrollSnap(),!0)}),n.stopOnInteraction||A.add(N,"focusout",f)),n.playOnInit&&f()}function h(){e.off("pointerDown",p).off("pointerUp",d).off("settle",b),p(),s=!0,i=!1}function f(){if(s||i||!o)return;e.emit("autoScroll:play");const v=e.internalEngine(),{ownerWindow:I}=v;r=I.setTimeout(()=>{v.scrollBody=m(v),v.animation.start()},u),i=!0}function p(){if(s||!i)return;e.emit("autoScroll:stop");const v=e.internalEngine(),{ownerWindow:I}=v;v.scrollBody=c,I.clearTimeout(r),r=0,i=!1}function b(){o&&f(),e.off("settle",b)}function d(){e.on("settle",b)}function m(v){const{location:I,target:E,scrollTarget:O,index:L,indexPrevious:T,limit:{reachedMin:A,reachedMax:C,constrain:z},options:{loop:N}}=v,q=n.direction==="forward"?-1:1,G=()=>R;let V=0,K=0,H=I.get(),Y=0,U=!1;function tt(){let nt=0;V=q*n.speed,H+=V,I.add(V),E.set(I),nt=H-Y,K=Math.sign(nt),Y=H;const et=O.byDistance(0,!1).index;L.get()!==et&&(T.set(L.get()),L.set(et),e.emit("select"));const j=n.direction==="forward"?A(I.get()):C(I.get());if(!N&&j){U=!0;const $=z(I.get());I.set($),E.set(I),p()}return R}const R={direction:()=>K,duration:()=>-1,velocity:()=>V,settled:()=>U,seek:tt,useBaseFriction:G,useBaseDuration:G,useFriction:G,useDuration:G};return R}function y(v){typeof v<"u"&&(u=v),o=!0,f()}function l(){i&&p()}function g(){i&&(p(),d())}function x(){return i}return{name:"autoScroll",options:t,init:a,destroy:h,play:y,stop:l,reset:g,isPlaying:x}}$t.globalOptions=void 0;export{$t as A,Vn as T,zn as a,jn as b,Hn as p,Ut as u};
