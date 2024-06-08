import{j as c,e as Bt,a as ee,f as Yt,d as Xt}from"./index-640401b4.js";import{C as dt}from"./coverSlide-61603c6c.js";import{F as Kt}from"./Footer-9e1c7f46.js";/*! @license DOMPurify 3.1.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.5/LICENSE */const{entries:bt,setPrototypeOf:gt,isFrozen:Vt,getPrototypeOf:$t,getOwnPropertyDescriptor:qt}=Object;let{freeze:b,seal:L,create:yt}=Object,{apply:Fe,construct:He}=typeof Reflect<"u"&&Reflect;b||(b=function(n){return n});L||(L=function(n){return n});Fe||(Fe=function(n,l,r){return n.apply(l,r)});He||(He=function(n,l){return new n(...l)});const ue=R(Array.prototype.forEach),ht=R(Array.prototype.pop),te=R(Array.prototype.push),ge=R(String.prototype.toLowerCase),Me=R(String.prototype.toString),Tt=R(String.prototype.match),ne=R(String.prototype.replace),Zt=R(String.prototype.indexOf),Qt=R(String.prototype.trim),D=R(Object.prototype.hasOwnProperty),x=R(RegExp.prototype.test),oe=Jt(TypeError);function R(a){return function(n){for(var l=arguments.length,r=new Array(l>1?l-1:0),p=1;p<l;p++)r[p-1]=arguments[p];return Fe(a,n,r)}}function Jt(a){return function(){for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return He(a,l)}}function s(a,n){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ge;gt&&gt(a,null);let r=n.length;for(;r--;){let p=n[r];if(typeof p=="string"){const O=l(p);O!==p&&(Vt(n)||(n[r]=O),p=O)}a[p]=!0}return a}function en(a){for(let n=0;n<a.length;n++)D(a,n)||(a[n]=null);return a}function z(a){const n=yt(null);for(const[l,r]of bt(a))D(a,l)&&(Array.isArray(r)?n[l]=en(r):r&&typeof r=="object"&&r.constructor===Object?n[l]=z(r):n[l]=r);return n}function me(a,n){for(;a!==null;){const r=qt(a,n);if(r){if(r.get)return R(r.get);if(typeof r.value=="function")return R(r.value)}a=$t(a)}function l(){return null}return l}const _t=b(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ve=b(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Pe=b(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),tn=b(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ke=b(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),nn=b(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Et=b(["#text"]),At=b(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ue=b(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),St=b(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),pe=b(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),on=L(/\{\{[\w\W]*|[\w\W]*\}\}/gm),an=L(/<%[\w\W]*|[\w\W]*%>/gm),rn=L(/\${[\w\W]*}/gm),sn=L(/^data-[\-\w.\u00B7-\uFFFF]/),ln=L(/^aria-[\-\w]+$/),Nt=L(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),cn=L(/^(?:\w+script|data):/i),fn=L(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Rt=L(/^html$/i),un=L(/^[a-z][.\w]*(-[.\w]+)+$/i);var xt=Object.freeze({__proto__:null,MUSTACHE_EXPR:on,ERB_EXPR:an,TMPLIT_EXPR:rn,DATA_ATTR:sn,ARIA_ATTR:ln,IS_ALLOWED_URI:Nt,IS_SCRIPT_OR_DATA:cn,ATTR_WHITESPACE:fn,DOCTYPE_NAME:Rt,CUSTOM_ELEMENT:un});const ie={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},mn=function(){return typeof window>"u"?null:window},pn=function(n,l){if(typeof n!="object"||typeof n.createPolicy!="function")return null;let r=null;const p="data-tt-policy-suffix";l&&l.hasAttribute(p)&&(r=l.getAttribute(p));const O="dompurify"+(r?"#"+r:"");try{return n.createPolicy(O,{createHTML(k){return k},createScriptURL(k){return k}})}catch{return console.warn("TrustedTypes policy "+O+" could not be created."),null}};function Lt(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:mn();const n=i=>Lt(i);if(n.version="3.1.5",n.removed=[],!a||!a.document||a.document.nodeType!==ie.document)return n.isSupported=!1,n;let{document:l}=a;const r=l,p=r.currentScript,{DocumentFragment:O,HTMLTemplateElement:k,Node:H,Element:ae,NodeFilter:U,NamedNodeMap:he=a.NamedNodeMap||a.MozNamedAttrMap,HTMLFormElement:Te,DOMParser:_e,trustedTypes:G}=a,W=ae.prototype,f=me(W,"cloneNode"),E=me(W,"nextSibling"),N=me(W,"childNodes"),w=me(W,"parentNode");if(typeof k=="function"){const i=l.createElement("template");i.content&&i.content.ownerDocument&&(l=i.content.ownerDocument)}let T,F="";const{implementation:Ee,createNodeIterator:Ot,createDocumentFragment:Dt,getElementsByTagName:wt}=l,{importNode:Ct}=r;let C={};n.isSupported=typeof bt=="function"&&typeof w=="function"&&Ee&&Ee.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Ae,ERB_EXPR:Se,TMPLIT_EXPR:xe,DATA_ATTR:It,ARIA_ATTR:Mt,IS_SCRIPT_OR_DATA:vt,ATTR_WHITESPACE:je,CUSTOM_ELEMENT:Pt}=xt;let{IS_ALLOWED_URI:ze}=xt,d=null;const Ge=s({},[..._t,...ve,...Pe,...ke,...Et]);let g=null;const We=s({},[...At,...Ue,...St,...pe]);let m=Object.seal(yt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),q=null,be=null,Be=!0,ye=!0,Ye=!1,Xe=!0,B=!1,Ne=!0,j=!1,Re=!1,Le=!1,Y=!1,re=!1,se=!1,Ke=!0,Ve=!1;const kt="user-content-";let Oe=!0,Z=!1,X={},K=null;const $e=s({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let qe=null;const Ze=s({},["audio","video","img","source","image","track"]);let De=null;const Qe=s({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),le="http://www.w3.org/1998/Math/MathML",ce="http://www.w3.org/2000/svg",v="http://www.w3.org/1999/xhtml";let V=v,we=!1,Ce=null;const Ut=s({},[le,ce,v],Me);let Q=null;const Ft=["application/xhtml+xml","text/html"],Ht="text/html";let h=null,$=null;const jt=l.createElement("form"),Je=function(e){return e instanceof RegExp||e instanceof Function},Ie=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!($&&$===e)){if((!e||typeof e!="object")&&(e={}),e=z(e),Q=Ft.indexOf(e.PARSER_MEDIA_TYPE)===-1?Ht:e.PARSER_MEDIA_TYPE,h=Q==="application/xhtml+xml"?Me:ge,d=D(e,"ALLOWED_TAGS")?s({},e.ALLOWED_TAGS,h):Ge,g=D(e,"ALLOWED_ATTR")?s({},e.ALLOWED_ATTR,h):We,Ce=D(e,"ALLOWED_NAMESPACES")?s({},e.ALLOWED_NAMESPACES,Me):Ut,De=D(e,"ADD_URI_SAFE_ATTR")?s(z(Qe),e.ADD_URI_SAFE_ATTR,h):Qe,qe=D(e,"ADD_DATA_URI_TAGS")?s(z(Ze),e.ADD_DATA_URI_TAGS,h):Ze,K=D(e,"FORBID_CONTENTS")?s({},e.FORBID_CONTENTS,h):$e,q=D(e,"FORBID_TAGS")?s({},e.FORBID_TAGS,h):{},be=D(e,"FORBID_ATTR")?s({},e.FORBID_ATTR,h):{},X=D(e,"USE_PROFILES")?e.USE_PROFILES:!1,Be=e.ALLOW_ARIA_ATTR!==!1,ye=e.ALLOW_DATA_ATTR!==!1,Ye=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Xe=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,B=e.SAFE_FOR_TEMPLATES||!1,Ne=e.SAFE_FOR_XML!==!1,j=e.WHOLE_DOCUMENT||!1,Y=e.RETURN_DOM||!1,re=e.RETURN_DOM_FRAGMENT||!1,se=e.RETURN_TRUSTED_TYPE||!1,Le=e.FORCE_BODY||!1,Ke=e.SANITIZE_DOM!==!1,Ve=e.SANITIZE_NAMED_PROPS||!1,Oe=e.KEEP_CONTENT!==!1,Z=e.IN_PLACE||!1,ze=e.ALLOWED_URI_REGEXP||Nt,V=e.NAMESPACE||v,m=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Je(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(m.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Je(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(m.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(m.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),B&&(ye=!1),re&&(Y=!0),X&&(d=s({},Et),g=[],X.html===!0&&(s(d,_t),s(g,At)),X.svg===!0&&(s(d,ve),s(g,Ue),s(g,pe)),X.svgFilters===!0&&(s(d,Pe),s(g,Ue),s(g,pe)),X.mathMl===!0&&(s(d,ke),s(g,St),s(g,pe))),e.ADD_TAGS&&(d===Ge&&(d=z(d)),s(d,e.ADD_TAGS,h)),e.ADD_ATTR&&(g===We&&(g=z(g)),s(g,e.ADD_ATTR,h)),e.ADD_URI_SAFE_ATTR&&s(De,e.ADD_URI_SAFE_ATTR,h),e.FORBID_CONTENTS&&(K===$e&&(K=z(K)),s(K,e.FORBID_CONTENTS,h)),Oe&&(d["#text"]=!0),j&&s(d,["html","head","body"]),d.table&&(s(d,["tbody"]),delete q.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw oe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw oe('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');T=e.TRUSTED_TYPES_POLICY,F=T.createHTML("")}else T===void 0&&(T=pn(G,p)),T!==null&&typeof F=="string"&&(F=T.createHTML(""));b&&b(e),$=e}},et=s({},["mi","mo","mn","ms","mtext"]),tt=s({},["foreignobject","annotation-xml"]),zt=s({},["title","style","font","a","script"]),nt=s({},[...ve,...Pe,...tn]),ot=s({},[...ke,...nn]),Gt=function(e){let t=w(e);(!t||!t.tagName)&&(t={namespaceURI:V,tagName:"template"});const o=ge(e.tagName),u=ge(t.tagName);return Ce[e.namespaceURI]?e.namespaceURI===ce?t.namespaceURI===v?o==="svg":t.namespaceURI===le?o==="svg"&&(u==="annotation-xml"||et[u]):!!nt[o]:e.namespaceURI===le?t.namespaceURI===v?o==="math":t.namespaceURI===ce?o==="math"&&tt[u]:!!ot[o]:e.namespaceURI===v?t.namespaceURI===ce&&!tt[u]||t.namespaceURI===le&&!et[u]?!1:!ot[o]&&(zt[o]||!nt[o]):!!(Q==="application/xhtml+xml"&&Ce[e.namespaceURI]):!1},I=function(e){te(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch{e.remove()}},fe=function(e,t){try{te(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch{te(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!g[e])if(Y||re)try{I(t)}catch{}else try{t.setAttribute(e,"")}catch{}},it=function(e){let t=null,o=null;if(Le)e="<remove></remove>"+e;else{const _=Tt(e,/^[\r\n\t ]+/);o=_&&_[0]}Q==="application/xhtml+xml"&&V===v&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const u=T?T.createHTML(e):e;if(V===v)try{t=new _e().parseFromString(u,Q)}catch{}if(!t||!t.documentElement){t=Ee.createDocument(V,"template",null);try{t.documentElement.innerHTML=we?F:u}catch{}}const A=t.body||t.documentElement;return e&&o&&A.insertBefore(l.createTextNode(o),A.childNodes[0]||null),V===v?wt.call(t,j?"html":"body")[0]:j?t.documentElement:A},at=function(e){return Ot.call(e.ownerDocument||e,e,U.SHOW_ELEMENT|U.SHOW_COMMENT|U.SHOW_TEXT|U.SHOW_PROCESSING_INSTRUCTION|U.SHOW_CDATA_SECTION,null)},rt=function(e){return e instanceof Te&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof he)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},st=function(e){return typeof H=="function"&&e instanceof H},P=function(e,t,o){C[e]&&ue(C[e],u=>{u.call(n,t,o,$)})},lt=function(e){let t=null;if(P("beforeSanitizeElements",e,null),rt(e))return I(e),!0;const o=h(e.nodeName);if(P("uponSanitizeElement",e,{tagName:o,allowedTags:d}),e.hasChildNodes()&&!st(e.firstElementChild)&&x(/<[/\w]/g,e.innerHTML)&&x(/<[/\w]/g,e.textContent)||e.nodeType===ie.progressingInstruction||Ne&&e.nodeType===ie.comment&&x(/<[/\w]/g,e.data))return I(e),!0;if(!d[o]||q[o]){if(!q[o]&&ft(o)&&(m.tagNameCheck instanceof RegExp&&x(m.tagNameCheck,o)||m.tagNameCheck instanceof Function&&m.tagNameCheck(o)))return!1;if(Oe&&!K[o]){const u=w(e)||e.parentNode,A=N(e)||e.childNodes;if(A&&u){const _=A.length;for(let y=_-1;y>=0;--y){const M=f(A[y],!0);M.__removalCount=(e.__removalCount||0)+1,u.insertBefore(M,E(e))}}}return I(e),!0}return e instanceof ae&&!Gt(e)||(o==="noscript"||o==="noembed"||o==="noframes")&&x(/<\/no(script|embed|frames)/i,e.innerHTML)?(I(e),!0):(B&&e.nodeType===ie.text&&(t=e.textContent,ue([Ae,Se,xe],u=>{t=ne(t,u," ")}),e.textContent!==t&&(te(n.removed,{element:e.cloneNode()}),e.textContent=t)),P("afterSanitizeElements",e,null),!1)},ct=function(e,t,o){if(Ke&&(t==="id"||t==="name")&&(o in l||o in jt))return!1;if(!(ye&&!be[t]&&x(It,t))){if(!(Be&&x(Mt,t))){if(!g[t]||be[t]){if(!(ft(e)&&(m.tagNameCheck instanceof RegExp&&x(m.tagNameCheck,e)||m.tagNameCheck instanceof Function&&m.tagNameCheck(e))&&(m.attributeNameCheck instanceof RegExp&&x(m.attributeNameCheck,t)||m.attributeNameCheck instanceof Function&&m.attributeNameCheck(t))||t==="is"&&m.allowCustomizedBuiltInElements&&(m.tagNameCheck instanceof RegExp&&x(m.tagNameCheck,o)||m.tagNameCheck instanceof Function&&m.tagNameCheck(o))))return!1}else if(!De[t]){if(!x(ze,ne(o,je,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&Zt(o,"data:")===0&&qe[e])){if(!(Ye&&!x(vt,ne(o,je,"")))){if(o)return!1}}}}}}return!0},ft=function(e){return e!=="annotation-xml"&&Tt(e,Pt)},ut=function(e){P("beforeSanitizeAttributes",e,null);const{attributes:t}=e;if(!t)return;const o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:g};let u=t.length;for(;u--;){const A=t[u],{name:_,namespaceURI:y,value:M}=A,J=h(_);let S=_==="value"?M:Qt(M);if(o.attrName=J,o.attrValue=S,o.keepAttr=!0,o.forceKeepAttr=void 0,P("uponSanitizeAttribute",e,o),S=o.attrValue,o.forceKeepAttr||(fe(_,e),!o.keepAttr))continue;if(!Xe&&x(/\/>/i,S)){fe(_,e);continue}if(Ne&&x(/((--!?|])>)|<\/(style|title)/i,S)){fe(_,e);continue}B&&ue([Ae,Se,xe],pt=>{S=ne(S,pt," ")});const mt=h(e.nodeName);if(ct(mt,J,S)){if(Ve&&(J==="id"||J==="name")&&(fe(_,e),S=kt+S),T&&typeof G=="object"&&typeof G.getAttributeType=="function"&&!y)switch(G.getAttributeType(mt,J)){case"TrustedHTML":{S=T.createHTML(S);break}case"TrustedScriptURL":{S=T.createScriptURL(S);break}}try{y?e.setAttributeNS(y,_,S):e.setAttribute(_,S),rt(e)?I(e):ht(n.removed)}catch{}}}P("afterSanitizeAttributes",e,null)},Wt=function i(e){let t=null;const o=at(e);for(P("beforeSanitizeShadowDOM",e,null);t=o.nextNode();)P("uponSanitizeShadowNode",t,null),!lt(t)&&(t.content instanceof O&&i(t.content),ut(t));P("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=null,o=null,u=null,A=null;if(we=!i,we&&(i="<!-->"),typeof i!="string"&&!st(i))if(typeof i.toString=="function"){if(i=i.toString(),typeof i!="string")throw oe("dirty is not a string, aborting")}else throw oe("toString is not a function");if(!n.isSupported)return i;if(Re||Ie(e),n.removed=[],typeof i=="string"&&(Z=!1),Z){if(i.nodeName){const M=h(i.nodeName);if(!d[M]||q[M])throw oe("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof H)t=it("<!---->"),o=t.ownerDocument.importNode(i,!0),o.nodeType===ie.element&&o.nodeName==="BODY"||o.nodeName==="HTML"?t=o:t.appendChild(o);else{if(!Y&&!B&&!j&&i.indexOf("<")===-1)return T&&se?T.createHTML(i):i;if(t=it(i),!t)return Y?null:se?F:""}t&&Le&&I(t.firstChild);const _=at(Z?i:t);for(;u=_.nextNode();)lt(u)||(u.content instanceof O&&Wt(u.content),ut(u));if(Z)return i;if(Y){if(re)for(A=Dt.call(t.ownerDocument);t.firstChild;)A.appendChild(t.firstChild);else A=t;return(g.shadowroot||g.shadowrootmode)&&(A=Ct.call(r,A,!0)),A}let y=j?t.outerHTML:t.innerHTML;return j&&d["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&x(Rt,t.ownerDocument.doctype.name)&&(y="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+y),B&&ue([Ae,Se,xe],M=>{y=ne(y,M," ")}),T&&se?T.createHTML(y):y},n.setConfig=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ie(i),Re=!0},n.clearConfig=function(){$=null,Re=!1},n.isValidAttribute=function(i,e,t){$||Ie({});const o=h(i),u=h(e);return ct(o,u,t)},n.addHook=function(i,e){typeof e=="function"&&(C[i]=C[i]||[],te(C[i],e))},n.removeHook=function(i){if(C[i])return ht(C[i])},n.removeHooks=function(i){C[i]&&(C[i]=[])},n.removeAllHooks=function(){C={}},n}var dn=Lt();function de({className:a,...n}){return c.jsx("div",{className:Bt("animate-pulse rounded-md bg-muted",a),...n})}const _n=()=>{const[a,n]=ee.useState(""),l=f=>{n(f.target.value)},[r,p]=ee.useState([]),O=(f,E)=>E?f.filter(N=>{const w=N.title.toLowerCase(),T=N.content.toLowerCase(),F=E.toLowerCase();return w.includes(F)||T.includes(F)}):f,[k,H]=ee.useState(!1),[ae,U]=ee.useState(r);function he(){H(!0),Xt.get("posting/kudlit?page=1").then(f=>{console.log(f.data.activities),U(f.data.activities),p(f.data.activities),setTimeout(()=>{H(!1)},1e3)}),setTimeout(()=>{H(!1)},1e4)}ee.useEffect(()=>{he()},[]);const Te=(f,E)=>{if(f.length<=E)return f;const N=f.slice(0,E),w=N.lastIndexOf(" ");return w===-1?N+"...":N.slice(0,w)+"..."},_e=Yt(),G=f=>{const E=document.createElement("div");E.innerHTML=f,E.innerHTML=E.innerHTML.replace(/<p><\/p>/g,"<p><br></p>").replace(/\n/g,"<br>");const N=E.querySelector("p"),w=N?N.outerHTML:"";return{__html:dn.sanitize(Te(w,200))}};function W(f){const E=new Date(f),N={year:"numeric",month:"long",day:"2-digit"};return new Intl.DateTimeFormat("en-US",N).format(E)}return c.jsxs("div",{className:" min-h-0 w-full max-w-full  flex flex-col justify-center",children:[c.jsx(dt,{children:c.jsxs("div",{id:"who-we-are",className:" px-20 sm:px-5 flex flex-col  w-full min-h-[10vh] py-5 bg-primary-foreground items-center pb-10 justify-center bg-fixed bg-cover bg-center object-contain  ",children:[c.jsx("div",{className:"  z-10 absolute h-full w-full bg-primary "}),c.jsx("div",{className:"  z-20 flex flex-col items-center justify-center gap-5  ",children:c.jsx("h1",{className:" mt-20  text-accent rounded-full  font-fbold  md:text-4xl text-4xl font-semibold",children:"Kudlit"})})]})}),c.jsxs("div",{className:" relative w-[95%]  self-center py-10 my-10   gap-4 flex flex-col px-10 md:px-5 bg-[#e4e4e4]",children:[c.jsxs("form",{onSubmit:f=>{f.preventDefault(),U(O(r,a))},className:" flex gap-3 items-center w-full  h-14",children:[c.jsx("input",{placeholder:"WHAT ARE YOU LOOKING FOR?",className:" px-4 h-full w-full  outline-none py-4 font-fmedium border  ",value:a,onChange:l,type:"text"}),c.jsx("button",{className:" font-fbold bg-primary text-accent w-[200px] h-full ",children:"Search"})]}),c.jsx("div",{className:" flex flex-col w-full  gap-3 min-h-[30vh]",children:k?c.jsxs(c.Fragment,{children:[c.jsx(de,{className:"h-[300px] w-full"}),c.jsx(de,{className:"h-[300px] w-full"}),c.jsx(de,{className:"h-[300px] w-full"}),c.jsx(de,{className:"h-[300px] w-full"})]}):ae.slice(0,10).map((f,E)=>c.jsx(dt,{children:c.jsxs("div",{onClick:()=>{window.scrollTo(0,0),_e(`/balaod/blog/${f._id}`),localStorage.setItem("selected",JSON.stringify(f))},className:" relative max-w-full flex w-full min-h-0  ",children:[c.jsxs("div",{className:" relative w-[20vw] md:hidden ",children:[c.jsx("div",{className:"  z-10 absolute h-full w-full bg-gradient-to-b from-[#fd900178] from-[2%] via-[#5d193ede] via-[90%] to-[#5d193ede] to-[90%] "}),c.jsx("img",{src:f.imageURL,className:"  h-full relative aspect-square object-cover",alt:""})]}),c.jsxs("div",{className:"w-full border flex flex-col gap-4 border-border p-4 bg-background cursor-pointer hover:bg-[#e4e4e4] pr-10 relative",children:[c.jsx("div",{className:" bg-primary-foreground w-[80px] h-[40px] text-lg text-accent  flex items-center justify-center font-fmedium",children:"Kudlit"}),c.jsx("div",{className:" border-b border-gray-300  pb-2",children:c.jsx("h1",{className:"text-2xl font-fbold",children:f.title})}),c.jsx("div",{className:" text-gray-600 mb-4",children:c.jsx("span",{className:" font-fmedium text-lg",children:c.jsx("div",{className:" outline-none ",dangerouslySetInnerHTML:G(f.content)})})}),c.jsx("div",{className:"  text-sm font-fregular text-gray-500",children:c.jsx("span",{children:f.date?W(f.date):""})})]})]},E)}))})]}),c.jsx(Kt,{})]})};export{_n as default};