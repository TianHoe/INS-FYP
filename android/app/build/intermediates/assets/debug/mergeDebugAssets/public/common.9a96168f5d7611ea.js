"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1320:(M,p,l)=>{l.d(p,{c:()=>c});var o=l(1308),d=l(7864),u=l(1898);const c=(a,n)=>{let e,t;const s=(h,_,f)=>{if(typeof document>"u")return;const w=document.elementFromPoint(h,_);w&&n(w)?w!==e&&(g(),r(w,f)):g()},r=(h,_)=>{e=h,t||(t=e);const f=e;(0,o.c)(()=>f.classList.add("ion-activated")),_()},g=(h=!1)=>{if(!e)return;const _=e;(0,o.c)(()=>_.classList.remove("ion-activated")),h&&t!==e&&e.click(),e=void 0};return(0,u.createGesture)({el:a,gestureName:"buttonActiveDrag",threshold:0,onStart:h=>s(h.currentX,h.currentY,d.a),onMove:h=>s(h.currentX,h.currentY,d.b),onEnd:()=>{g(!0),(0,d.h)(),t=void 0}})}},2225:(M,p,l)=>{l.d(p,{g:()=>o});const o=(n,e,t,s,r)=>u(n[1],e[1],t[1],s[1],r).map(g=>d(n[0],e[0],t[0],s[0],g)),d=(n,e,t,s,r)=>r*(3*e*Math.pow(r-1,2)+r*(-3*t*r+3*t+s*r))-n*Math.pow(r-1,3),u=(n,e,t,s,r)=>a((s-=r)-3*(t-=r)+3*(e-=r)-(n-=r),3*t-6*e+3*n,3*e-3*n,n).filter(h=>h>=0&&h<=1),a=(n,e,t,s)=>{if(0===n)return((n,e,t)=>{const s=e*e-4*n*t;return s<0?[]:[(-e+Math.sqrt(s))/(2*n),(-e-Math.sqrt(s))/(2*n)]})(e,t,s);const r=(3*(t/=n)-(e/=n)*e)/3,g=(2*e*e*e-9*e*t+27*(s/=n))/27;if(0===r)return[Math.pow(-g,1/3)];if(0===g)return[Math.sqrt(-r),-Math.sqrt(-r)];const h=Math.pow(g/2,2)+Math.pow(r/3,3);if(0===h)return[Math.pow(g/2,.5)-e/3];if(h>0)return[Math.pow(-g/2+Math.sqrt(h),1/3)-Math.pow(g/2+Math.sqrt(h),1/3)-e/3];const _=Math.sqrt(Math.pow(-r/3,3)),f=Math.acos(-g/(2*Math.sqrt(Math.pow(-r/3,3)))),w=2*Math.pow(_,1/3);return[w*Math.cos(f/3)-e/3,w*Math.cos((f+2*Math.PI)/3)-e/3,w*Math.cos((f+4*Math.PI)/3)-e/3]}},5062:(M,p,l)=>{l.d(p,{i:()=>o});const o=d=>d&&""!==d.dir?"rtl"===d.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(M,p,l)=>{l.r(p),l.d(p,{startFocusVisible:()=>c});const o="ion-focused",u=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=a=>{let n=[],e=!0;const t=a?a.shadowRoot:document,s=a||document.body,r=E=>{n.forEach(v=>v.classList.remove(o)),E.forEach(v=>v.classList.add(o)),n=E},g=()=>{e=!1,r([])},h=E=>{e=u.includes(E.key),e||r([])},_=E=>{if(e&&void 0!==E.composedPath){const v=E.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));r(v)}},f=()=>{t.activeElement===s&&r([])};return t.addEventListener("keydown",h),t.addEventListener("focusin",_),t.addEventListener("focusout",f),t.addEventListener("touchstart",g),t.addEventListener("mousedown",g),{destroy:()=>{t.removeEventListener("keydown",h),t.removeEventListener("focusin",_),t.removeEventListener("focusout",f),t.removeEventListener("touchstart",g),t.removeEventListener("mousedown",g)},setFocus:r}}},7626:(M,p,l)=>{l.d(p,{C:()=>a,a:()=>u,d:()=>c});var o=l(5861),d=l(5730);const u=function(){var n=(0,o.Z)(function*(e,t,s,r,g,h){var _;if(e)return e.attachViewToDom(t,s,g,r);if(!(h||"string"==typeof s||s instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof s?null===(_=t.ownerDocument)||void 0===_?void 0:_.createElement(s):s;return r&&r.forEach(w=>f.classList.add(w)),g&&Object.assign(f,g),t.appendChild(f),yield new Promise(w=>(0,d.c)(f,w)),f});return function(t,s,r,g,h,_){return n.apply(this,arguments)}}(),c=(n,e)=>{if(e){if(n)return n.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},a=()=>{let n,e;return{attachViewToDom:function(){var r=(0,o.Z)(function*(g,h,_={},f=[]){var w,E;if(n=g,h){const m="string"==typeof h?null===(w=n.ownerDocument)||void 0===w?void 0:w.createElement(h):h;f.forEach(i=>m.classList.add(i)),Object.assign(m,_),n.appendChild(m),yield new Promise(i=>(0,d.c)(m,i))}else if(n.children.length>0&&!n.children[0].classList.contains("ion-delegate-host")){const i=null===(E=n.ownerDocument)||void 0===E?void 0:E.createElement("div");i.classList.add("ion-delegate-host"),f.forEach(y=>i.classList.add(y)),i.append(...n.children),n.appendChild(i)}const v=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),n.parentNode.insertBefore(e,n),v.appendChild(n),n});return function(h,_){return r.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&e&&(e.parentNode.insertBefore(n,e),e.remove()),Promise.resolve())}}},7864:(M,p,l)=>{l.d(p,{a:()=>c,b:()=>a,c:()=>u,d:()=>e,h:()=>n});const o={getEngine(){var t;const s=window;return s.TapticEngine||(null===(t=s.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&s.Capacitor.Plugins.Haptics},available(){var t;const s=window;return!!this.getEngine()&&("web"!==(null===(t=s.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const s=this.getEngine();if(!s)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;s.impact({style:r})},notification(t){const s=this.getEngine();if(!s)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;s.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},d=()=>o.available(),u=()=>{d()&&o.selection()},c=()=>{d()&&o.selectionStart()},a=()=>{d()&&o.selectionChanged()},n=()=>{d()&&o.selectionEnd()},e=t=>{d()&&o.impact(t)}},109:(M,p,l)=>{l.d(p,{a:()=>o,b:()=>h,c:()=>e,d:()=>_,e:()=>b,f:()=>n,g:()=>f,h:()=>u,i:()=>d,j:()=>i,k:()=>y,l:()=>t,m:()=>r,n:()=>w,o:()=>s,p:()=>a,q:()=>c,r:()=>m,s:()=>D,t:()=>g,u:()=>E,v:()=>v});const o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},9888:(M,p,l)=>{l.d(p,{s:()=>o});const o=t=>{try{if(t instanceof e)return t.value;if(!c()||"string"!=typeof t||""===t)return t;if(t.includes("onload="))return"";const s=document.createDocumentFragment(),r=document.createElement("div");s.appendChild(r),r.innerHTML=t,n.forEach(f=>{const w=s.querySelectorAll(f);for(let E=w.length-1;E>=0;E--){const v=w[E];v.parentNode?v.parentNode.removeChild(v):s.removeChild(v);const m=u(v);for(let i=0;i<m.length;i++)d(m[i])}});const g=u(s);for(let f=0;f<g.length;f++)d(g[f]);const h=document.createElement("div");h.appendChild(s);const _=h.querySelector("div");return null!==_?_.innerHTML:h.innerHTML}catch(s){return console.error(s),""}},d=t=>{if(t.nodeType&&1!==t.nodeType)return;if(typeof NamedNodeMap<"u"&&!(t.attributes instanceof NamedNodeMap))return void t.remove();for(let r=t.attributes.length-1;r>=0;r--){const g=t.attributes.item(r),h=g.name;if(!a.includes(h.toLowerCase())){t.removeAttribute(h);continue}const _=g.value,f=t[h];(null!=_&&_.toLowerCase().includes("javascript:")||null!=f&&f.toLowerCase().includes("javascript:"))&&t.removeAttribute(h)}const s=u(t);for(let r=0;r<s.length;r++)d(s[r])},u=t=>null!=t.children?t.children:t.childNodes,c=()=>{var t;const s=window,r=null===(t=null==s?void 0:s.Ionic)||void 0===t?void 0:t.config;return!r||(r.get?r.get("sanitizerEnabled",!0):!0===r.sanitizerEnabled||void 0===r.sanitizerEnabled)},a=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"];class e{constructor(s){this.value=s}}},8416:(M,p,l)=>{l.d(p,{I:()=>a,a:()=>r,b:()=>n,c:()=>_,d:()=>w,f:()=>g,g:()=>s,i:()=>t,p:()=>f,r:()=>E,s:()=>h});var o=l(5861),d=l(5730),u=l(4147);const a="ion-content",n=".ion-content-scroll-host",e=`${a}, ${n}`,t=v=>"ION-CONTENT"===v.tagName,s=function(){var v=(0,o.Z)(function*(m){return t(m)?(yield new Promise(i=>(0,d.c)(m,i)),m.getScrollElement()):m});return function(i){return v.apply(this,arguments)}}(),r=v=>v.querySelector(n)||v.querySelector(e),g=v=>v.closest(e),h=(v,m)=>t(v)?v.scrollToTop(m):Promise.resolve(v.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),_=(v,m,i,y)=>t(v)?v.scrollByPoint(m,i,y):Promise.resolve(v.scrollBy({top:i,left:m,behavior:y>0?"smooth":"auto"})),f=v=>(0,u.a)(v,a),w=v=>{if(t(v)){const i=v.scrollY;return v.scrollY=!1,i}return v.style.setProperty("overflow","hidden"),!0},E=(v,m)=>{t(v)?v.scrollY=m:v.style.removeProperty("overflow")}},5234:(M,p,l)=>{l.r(p),l.d(p,{KEYBOARD_DID_CLOSE:()=>d,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>m,keyboardDidClose:()=>f,keyboardDidOpen:()=>h,keyboardDidResize:()=>_,resetKeyboardAssist:()=>e,setKeyboardClose:()=>g,setKeyboardOpen:()=>r,startKeyboardAssist:()=>t,trackViewportChanges:()=>v});const o="ionKeyboardDidShow",d="ionKeyboardDidHide";let c={},a={},n=!1;const e=()=>{c={},a={},n=!1},t=i=>{s(i),i.visualViewport&&(a=m(i.visualViewport),i.visualViewport.onresize=()=>{v(i),h()||_(i)?r(i):f(i)&&g(i)})},s=i=>{i.addEventListener("keyboardDidShow",y=>r(i,y)),i.addEventListener("keyboardDidHide",()=>g(i))},r=(i,y)=>{w(i,y),n=!0},g=i=>{E(i),n=!1},h=()=>!n&&c.width===a.width&&(c.height-a.height)*a.scale>150,_=i=>n&&!f(i),f=i=>n&&a.height===i.innerHeight,w=(i,y)=>{const b=new CustomEvent(o,{detail:{keyboardHeight:y?y.keyboardHeight:i.innerHeight-a.height}});i.dispatchEvent(b)},E=i=>{const y=new CustomEvent(d);i.dispatchEvent(y)},v=i=>{c=Object.assign({},a),a=m(i.visualViewport)},m=i=>({width:Math.round(i.width),height:Math.round(i.height),offsetTop:i.offsetTop,offsetLeft:i.offsetLeft,pageTop:i.pageTop,pageLeft:i.pageLeft,scale:i.scale})},9852:(M,p,l)=>{l.d(p,{c:()=>d});var o=l(3457);const d=u=>{let c,a,n;const e=()=>{c=()=>{n=!0,u&&u(!0)},a=()=>{n=!1,u&&u(!1)},null==o.w||o.w.addEventListener("keyboardWillShow",c),null==o.w||o.w.addEventListener("keyboardWillHide",a)};return e(),{init:e,destroy:()=>{null==o.w||o.w.removeEventListener("keyboardWillShow",c),null==o.w||o.w.removeEventListener("keyboardWillHide",a),c=a=void 0},isKeyboardVisible:()=>n}}},7741:(M,p,l)=>{l.d(p,{S:()=>d});const d={bubbles:{dur:1e3,circles:9,fn:(u,c,a)=>{const n=u*c/a-u+"ms",e=2*Math.PI*c/a;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(u,c,a)=>{const n=c/a,e=u*n-u+"ms",t=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(u,c)=>({r:6,style:{left:9-9*c+"px","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(u,c,a)=>({y1:14,y2:26,style:{transform:`rotate(${360/a*c+(c<a/2?180:-180)}deg)`,"animation-delay":u*c/a-u+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(u,c,a)=>({y1:12,y2:20,style:{transform:`rotate(${360/a*c+(c<a/2?180:-180)}deg)`,"animation-delay":u*c/a-u+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(u,c,a)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":u*c/a-u+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(u,c,a)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":u*c/a-u+"ms"}})}}},6659:(M,p,l)=>{l.r(p),l.d(p,{createSwipeBackGesture:()=>a});var o=l(5730),d=l(5062),u=l(1898);l(4349);const a=(n,e,t,s,r)=>{const g=n.ownerDocument.defaultView;let h=(0,d.i)(n);const f=i=>h?-i.deltaX:i.deltaX;return(0,u.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:i=>(h=(0,d.i)(n),(i=>{const{startX:D}=i;return h?D>=g.innerWidth-50:D<=50})(i)&&e()),onStart:t,onMove:i=>{const D=f(i)/g.innerWidth;s(D)},onEnd:i=>{const y=f(i),D=g.innerWidth,b=y/D,C=(i=>h?-i.velocityX:i.velocityX)(i),B=C>=0&&(C>.2||y>D/2),O=(B?1-b:b)*D;let T=0;if(O>5){const S=O/Math.abs(C);T=Math.min(S,540)}r(B,b<=0?.01:(0,o.l)(0,b,.9999),T)}})}},2468:(M,p,l)=>{l.d(p,{D:()=>c});var o=l(89),d=l(5525),u=l(8256);let c=(()=>{class a{constructor(e){this.firestore=e}getJudge(){const e=(0,d.hJ)(this.firestore,"judge");return(0,o.BS)(e,{idField:"id"})}getJudgeByAuthId(e){const t=(0,d.hJ)(this.firestore,"judge"),s=(0,o.IO)(t,(0,o.ar)("auth_id","==",e));return(0,o.BS)(s,{idField:"id"})}addJudge(e){const t=(0,d.hJ)(this.firestore,"judge");return(0,o.ET)(t,e)}deleteJudge(e){const t=(0,o.JU)(this.firestore,`judge/${e.id}`);return(0,o.oe)(t)}updateJudge(e){const t=(0,o.JU)(this.firestore,`judge/${e.id}`);return(0,o.r7)(t,{name:e.name,contactnum:e.contactnum,email:e.email})}getEvent(){const e=(0,d.hJ)(this.firestore,"event");return(0,o.BS)(e,{idField:"id"})}getBooth(){const e=(0,d.hJ)(this.firestore,"booth");return(0,o.BS)(e,{idField:"id"})}getBoothById(e){const t=(0,o.JU)(this.firestore,`booth/${e}`);return(0,o._1)(t,{idField:"id"})}updateBoothAvailability(e,t){const s=(0,o.JU)(this.firestore,`booth/${e.id}`);return(0,o.r7)(s,{available:t})}getJudgeBooth(){const e=(0,d.hJ)(this.firestore,"judge_booth");return(0,o.BS)(e,{idField:"id"})}getJudgeBoothByJudgeId(e){const t=(0,d.hJ)(this.firestore,"judge_booth"),s=(0,o.IO)(t,(0,o.ar)("judge_id","==",e));return(0,o.BS)(s,{idField:"id"})}combineData(e,t){return e.map(s=>{const r=t.find(g=>g.id===s.booth_id);return Object.assign(Object.assign({},s),{booth:r||null})})}getCurrentJudgeBooth(e,t){const s=(0,d.hJ)(this.firestore,"judge_booth"),r=(0,o.IO)(s,(0,o.ar)("booth_id","==",e),(0,o.ar)("judge_id","==",t));return(0,o.BS)(r,{idField:"id"})}updateJudgeBooth(e,t){const s=(0,o.JU)(this.firestore,`judge_booth/${e.id}`);return(0,o.r7)(s,{evaluated:t})}getCriteria(){const e=(0,d.hJ)(this.firestore,"criteria");return(0,o.BS)(e,{idField:"id"})}addScoring(e){const t=(0,d.hJ)(this.firestore,"scoring");return(0,o.ET)(t,e)}getBoothScoring(e,t){const s=(0,d.hJ)(this.firestore,"scoring"),r=(0,o.IO)(s,(0,o.ar)("booth_id","==",t),(0,o.ar)("judge_id","==",e));return(0,o.BS)(r,{idField:"id"})}combineScoringCriteria(e,t){return e.map(s=>{const r=t.find(g=>g.id===s.criteria_id);return Object.assign(Object.assign({},s),{criteria:r||null})})}}return a.\u0275fac=function(e){return new(e||a)(u.LFG(o.gg))},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},4466:(M,p,l)=>{l.d(p,{m:()=>c});var o=l(6895),d=l(2078),u=l(8256);let c=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=u.oAB({type:a}),a.\u0275inj=u.cJS({imports:[o.ez,d.Pc,d.Pc]}),a})()},1622:(M,p,l)=>{l.d(p,{Y:()=>n});var o=l(8256),d=l(9171),u=l(6895),c=l(2078);function a(e,t){1&e&&o._UZ(0,"ion-back-button",6)}let n=(()=>{class e{constructor(s){this.router=s,this.isEvaluatePage=!1}ngOnInit(){this.isEvaluatePage=this.router.url.includes("/evaluate")}}return e.\u0275fac=function(s){return new(s||e)(o.Y36(d.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-topnav-backbtn"]],decls:6,vars:2,consts:[[3,"translucent"],["color","toolbar"],["slot","start"],["defaultHref","/homepage",4,"ngIf"],[1,"app-logo-container","float-end","p-3"],["src","../../assets/icon/logo.png"],["defaultHref","/homepage"]],template:function(s,r){1&s&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),o.YNc(3,a,1,0,"ion-back-button",3),o.qZA(),o.TgZ(4,"div",4),o._UZ(5,"ion-img",5),o.qZA()()()),2&s&&(o.Q6J("translucent",!0),o.xp6(3),o.Q6J("ngIf",!r.isEvaluatePage))},dependencies:[u.O5,c.oU,c.Sm,c.Gu,c.Xz,c.sr,c.cs]}),e})()},2724:(M,p,l)=>{l.d(p,{Y:()=>u});var o=l(8256),d=l(2078);let u=(()=>{class c{constructor(){}ngOnInit(){}}return c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=o.Xpm({type:c,selectors:[["app-topnav"]],decls:6,vars:1,consts:[[3,"translucent"],["color","toolbar"],["slot","start"],[1,"app-logo-container","float-end","p-3"],["src","../../assets/icon/logo.png"]],template:function(n,e){1&n&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),o._UZ(3,"ion-menu-button"),o.qZA(),o.TgZ(4,"div",3),o._UZ(5,"ion-img",4),o.qZA()()()),2&n&&o.Q6J("translucent",!0)},dependencies:[d.Sm,d.Gu,d.Xz,d.fG,d.sr]}),c})()}}]);