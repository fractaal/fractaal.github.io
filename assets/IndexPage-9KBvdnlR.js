import{v as bh,a as mg,b as Nt,Q as ur,R as Sh,c as gg}from"./QBtn-DF98jvbD.js";import{i as Eh,e as rc,b as Ke,l as vg,h as ci,g as Ci,a as Ss,u as Lr,m as gi,v as Es,K as Ts,L as _g,M as yg,s as ye,w as Rt,N as xg,O as wg,x as As,P as Cs,Q as Rs,q as oa,R as Mg,S as bg,U as Wi,V as Sg,n as Ps,W as Th,X as Ah,Y as Ch,y as Ir,Z as Eg,$ as Tg,r as Nr,I as Ag,a0 as Cg,C as Rg,T as nc,a1 as Dr,_ as la,o as ke,d as Ye,f as X,a2 as ft,j as et,z as Dt,a3 as ui,c as wn,a4 as Rh,a5 as ca,H as ac,a6 as Ri,a7 as ji,a8 as hr,a9 as Qt,aa as Pg,ab as Lg,ac as ei,k as Ls,ad as Ig,ae as Ng}from"./index-cv1HdLJx.js";import{h as sc}from"./render-dChl5Uk-.js";import{Q as Dg}from"./QPage-BVtXRycV.js";import{b as Ug,a as Og,h as Fg}from"./scroll-cGItFcfY.js";import{a as Bg}from"./dom-B7MAc8tN.js";const zg={position:{type:String,default:"bottom-right",validator:n=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(n)},offset:{type:Array,validator:n=>n.length===2},expand:Boolean};function kg(){const{props:n,proxy:{$q:e}}=Ci(),t=Eh(vg,rc);if(t===rc)return console.error("QPageSticky needs to be child of QLayout"),rc;const i=Ke(()=>{const d=n.position;return{top:d.indexOf("top")!==-1,right:d.indexOf("right")!==-1,bottom:d.indexOf("bottom")!==-1,left:d.indexOf("left")!==-1,vertical:d==="top"||d==="bottom",horizontal:d==="left"||d==="right"}}),r=Ke(()=>t.header.offset),a=Ke(()=>t.right.offset),s=Ke(()=>t.footer.offset),o=Ke(()=>t.left.offset),l=Ke(()=>{let d=0,h=0;const p=i.value,g=e.lang.rtl===!0?-1:1;p.top===!0&&r.value!==0?h=`${r.value}px`:p.bottom===!0&&s.value!==0&&(h=`${-s.value}px`),p.left===!0&&o.value!==0?d=`${g*o.value}px`:p.right===!0&&a.value!==0&&(d=`${-g*a.value}px`);const v={transform:`translate(${d}, ${h})`};return n.offset&&(v.margin=`${n.offset[1]}px ${n.offset[0]}px`),p.vertical===!0?(o.value!==0&&(v[e.lang.rtl===!0?"right":"left"]=`${o.value}px`),a.value!==0&&(v[e.lang.rtl===!0?"left":"right"]=`${a.value}px`)):p.horizontal===!0&&(r.value!==0&&(v.top=`${r.value}px`),s.value!==0&&(v.bottom=`${s.value}px`)),v}),c=Ke(()=>`q-page-sticky row flex-center fixed-${n.position} q-page-sticky--${n.expand===!0?"expand":"shrink"}`);function u(d){const h=sc(d.default);return ci("div",{class:c.value,style:l.value},n.expand===!0?h:[ci("div",h)])}return{$layout:t,getStickyContent:u}}const Vg=Ss({name:"QPageSticky",props:zg,setup(n,{slots:e}){const{getStickyContent:t}=kg();return()=>t(e)}});function Pi(n){return _g()?(yg(n),!0):!1}function hi(){const n=new Set,e=t=>{n.delete(t)};return{on:t=>{n.add(t);const i=()=>e(t);return Pi(i),{off:i}},off:e,trigger:(...t)=>Promise.all(Array.from(n).map(i=>i(...t)))}}function tt(n){return typeof n=="function"?n():Lr(n)}const oc=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Gg=n=>n!=null,Hg=Object.prototype.toString,Wg=n=>Hg.call(n)==="[object Object]",Ur=()=>{};function Ph(n,e){function t(...i){return new Promise((r,a)=>{Promise.resolve(n(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(a)})}return t}function jg(n,e={}){let t,i,r=Ur;const a=s=>{clearTimeout(s),r(),r=Ur};return s=>{const o=tt(n),l=tt(e.maxWait);return t&&a(t),o<=0||l!==void 0&&l<=0?(i&&(a(i),i=null),Promise.resolve(s())):new Promise((c,u)=>{r=e.rejectOnCancel?u:c,l&&!i&&(i=setTimeout(()=>{t&&a(t),i=null,c(s())},l)),t=setTimeout(()=>{i&&a(i),i=null,c(s())},o)})}}function Xg(...n){let e=0,t,i=!0,r=Ur,a,s,o,l,c;!Ts(n[0])&&typeof n[0]=="object"?{delay:s,trailing:o=!0,leading:l=!0,rejectOnCancel:c=!1}=n[0]:[s,o=!0,l=!0,c=!1]=n;const u=()=>{t&&(clearTimeout(t),t=void 0,r(),r=Ur)};return d=>{const h=tt(s),p=Date.now()-e,g=()=>a=d();return u(),h<=0?(e=Date.now(),g()):(p>h&&(l||!i)?(e=Date.now(),g()):o&&(a=new Promise((v,m)=>{r=c?m:v,t=setTimeout(()=>{e=Date.now(),i=!0,v(g()),u()},Math.max(0,h-p))})),!l&&!t&&(t=setTimeout(()=>i=!0,h)),i=!1,a)}}function qg(n,e,t=!1){return e.reduce((i,r)=>(r in n&&(!t||n[r]!==void 0)&&(i[r]=n[r]),i),{})}function Yg(n){return Ci()}function Lh(n,e=200,t={}){return Ph(jg(e,t),n)}function Ih(n,e=200,t={}){const i=ye(n.value),r=Lh(()=>{i.value=n.value},e,t);return Rt(n,()=>r()),i}function Zg(n,e=200,t=!1,i=!0,r=!1){return Ph(Xg(e,t,i,r),n)}function Jg(n,e={}){if(!Ts(n))return xg(n);const t=Array.isArray(n.value)?Array.from({length:n.value.length}):{};for(const i in n.value)t[i]=wg(()=>({get(){return n.value[i]},set(r){var a;if((a=tt(e.replaceRef))==null||a)if(Array.isArray(n.value)){const s=[...n.value];s[i]=r,n.value=s}else{const s={...n.value,[i]:r};Object.setPrototypeOf(s,Object.getPrototypeOf(n.value)),n.value=s}else n.value[i]=r}}));return t}function Is(n,e=!0,t){Yg()?gi(n,t):e?n():Es(n)}function Kg(n,e=1e3,t={}){const{immediate:i=!0,immediateCallback:r=!1}=t;let a=null;const s=ye(!1);function o(){a&&(clearInterval(a),a=null)}function l(){s.value=!1,o()}function c(){const u=tt(e);u<=0||(s.value=!0,r&&n(),o(),a=setInterval(n,u))}if(i&&oc&&c(),Ts(e)||typeof e=="function"){const u=Rt(e,()=>{s.value&&oc&&c()});Pi(u)}return Pi(l),{isActive:s,pause:l,resume:c}}const Li=oc?window:void 0;function di(n){var e;const t=tt(n);return(e=t?.$el)!=null?e:t}function Or(...n){let e,t,i,r;if(typeof n[0]=="string"||Array.isArray(n[0])?([t,i,r]=n,e=Li):[e,t,i,r]=n,!e)return Ur;Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);const a=[],s=()=>{a.forEach(u=>u()),a.length=0},o=(u,d,h,p)=>(u.addEventListener(d,h,p),()=>u.removeEventListener(d,h,p)),l=Rt(()=>[di(e),tt(r)],([u,d])=>{if(s(),!u)return;const h=Wg(d)?{...d}:d;a.push(...t.flatMap(p=>i.map(g=>o(u,p,g,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),s()};return Pi(c),c}function $g(){const n=ye(!1),e=Ci();return e&&gi(()=>{n.value=!0},e),n}function Ns(n){const e=$g();return Ke(()=>(e.value,!!n()))}function Qg(n,e,t={}){const{window:i=Li,...r}=t;let a;const s=Ns(()=>i&&"MutationObserver"in i),o=()=>{a&&(a.disconnect(),a=void 0)},l=Ke(()=>{const h=tt(n),p=(Array.isArray(h)?h:[h]).map(di).filter(Gg);return new Set(p)}),c=Rt(()=>l.value,h=>{o(),s.value&&h.size&&(a=new MutationObserver(e),h.forEach(p=>a.observe(p,r)))},{immediate:!0,flush:"post"}),u=()=>a?.takeRecords(),d=()=>{c(),o()};return Pi(d),{isSupported:s,stop:d,takeRecords:u}}function lc(n,e={}){const{immediate:t=!0,fpsLimit:i=void 0,window:r=Li}=e,a=ye(!1),s=i?1e3/i:null;let o=0,l=null;function c(h){if(!a.value||!r)return;o||(o=h);const p=h-o;if(s&&p<s){l=r.requestAnimationFrame(c);return}o=h,n({delta:p,timestamp:h}),l=r.requestAnimationFrame(c)}function u(){!a.value&&r&&(a.value=!0,o=0,l=r.requestAnimationFrame(c))}function d(){a.value=!1,l!=null&&r&&(r.cancelAnimationFrame(l),l=null)}return t&&u(),Pi(d),{isActive:Cs(a),pause:d,resume:u}}function ev(n,e={}){const{window:t=Li}=e,i=Ns(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let r;const a=ye(!1),s=c=>{a.value=c.matches},o=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",s):r.removeListener(s))},l=Rs(()=>{i.value&&(o(),r=t.matchMedia(tt(n)),"addEventListener"in r?r.addEventListener("change",s):r.addListener(s),a.value=r.matches)});return Pi(()=>{l(),o(),r=void 0}),a}function tv(n={}){const{window:e=Li}=n,t=ye(1);if(e){let i=function(){t.value=e.devicePixelRatio,r(),a=e.matchMedia(`(resolution: ${t.value}dppx)`),a.addEventListener("change",i,{once:!0})},r=function(){a?.removeEventListener("change",i)},a;i(),Pi(r)}return{pixelRatio:t}}function Nh(n,e,t={}){const{window:i=Li,...r}=t;let a;const s=Ns(()=>i&&"ResizeObserver"in i),o=()=>{a&&(a.disconnect(),a=void 0)},l=Ke(()=>{const d=tt(n);return Array.isArray(d)?d.map(h=>di(h)):[di(d)]}),c=Rt(l,d=>{if(o(),s.value&&i){a=new ResizeObserver(e);for(const h of d)h&&a.observe(h,r)}},{immediate:!0,flush:"post"}),u=()=>{o(),c()};return Pi(u),{isSupported:s,stop:u}}function iv(n,e={}){const{reset:t=!0,windowResize:i=!0,windowScroll:r=!0,immediate:a=!0,updateTiming:s="sync"}=e,o=ye(0),l=ye(0),c=ye(0),u=ye(0),d=ye(0),h=ye(0),p=ye(0),g=ye(0);function v(){const f=di(n);if(!f){t&&(o.value=0,l.value=0,c.value=0,u.value=0,d.value=0,h.value=0,p.value=0,g.value=0);return}const _=f.getBoundingClientRect();o.value=_.height,l.value=_.bottom,c.value=_.left,u.value=_.right,d.value=_.top,h.value=_.width,p.value=_.x,g.value=_.y}function m(){s==="sync"?v():s==="next-frame"&&requestAnimationFrame(()=>v())}return Nh(n,m),Rt(()=>di(n),f=>!f&&m()),Qg(n,m,{attributeFilter:["style","class"]}),r&&Or("scroll",m,{capture:!0,passive:!0}),i&&Or("resize",m,{passive:!0}),Is(()=>{a&&m()}),{height:o,bottom:l,left:c,right:u,top:d,width:h,x:p,y:g,update:m}}function rv(n,e={width:0,height:0},t={}){const{window:i=Li,box:r="content-box"}=t,a=Ke(()=>{var d,h;return(h=(d=di(n))==null?void 0:d.namespaceURI)==null?void 0:h.includes("svg")}),s=ye(e.width),o=ye(e.height),{stop:l}=Nh(n,([d])=>{const h=r==="border-box"?d.borderBoxSize:r==="content-box"?d.contentBoxSize:d.devicePixelContentBoxSize;if(i&&a.value){const p=di(n);if(p){const g=p.getBoundingClientRect();s.value=g.width,o.value=g.height}}else if(h){const p=Array.isArray(h)?h:[h];s.value=p.reduce((g,{inlineSize:v})=>g+v,0),o.value=p.reduce((g,{blockSize:v})=>g+v,0)}else s.value=d.contentRect.width,o.value=d.contentRect.height},t);Is(()=>{const d=di(n);d&&(s.value="offsetWidth"in d?d.offsetWidth:e.width,o.value="offsetHeight"in d?d.offsetHeight:e.height)});const c=Rt(()=>di(n),d=>{s.value=d?e.width:0,o.value=d?e.height:0});function u(){l(),c()}return{width:s,height:o,stop:u}}function nv(n){var e;const t=ye(0);if(typeof performance>"u")return t;const i=(e=n?.every)!=null?e:10;let r=performance.now(),a=0;return lc(()=>{if(a+=1,a>=i){const s=performance.now(),o=s-r;t.value=Math.round(1e3/(o/a)),r=s,a=0}}),t}const Dh=1;function av(n,e={}){const{throttle:t=0,idle:i=200,onStop:r=Ur,onScroll:a=Ur,offset:s={left:0,right:0,top:0,bottom:0},eventListenerOptions:o={capture:!1,passive:!0},behavior:l="auto",window:c=Li,onError:u=S=>{console.error(S)}}=e,d=ye(0),h=ye(0),p=Ke({get(){return d.value},set(S){v(S,void 0)}}),g=Ke({get(){return h.value},set(S){v(void 0,S)}});function v(S,R){var w,M,I,N;if(!c)return;const F=tt(n);if(!F)return;(I=F instanceof Document?c.document.body:F)==null||I.scrollTo({top:(w=tt(R))!=null?w:g.value,left:(M=tt(S))!=null?M:p.value,behavior:tt(l)});const B=((N=F?.document)==null?void 0:N.documentElement)||F?.documentElement||F;p!=null&&(d.value=B.scrollLeft),g!=null&&(h.value=B.scrollTop)}const m=ye(!1),f=As({left:!0,right:!1,top:!0,bottom:!1}),_=As({left:!1,right:!1,top:!1,bottom:!1}),y=S=>{m.value&&(m.value=!1,_.left=!1,_.right=!1,_.top=!1,_.bottom=!1,r(S))},x=Lh(y,t+i),A=S=>{var R;if(!c)return;const w=((R=S?.document)==null?void 0:R.documentElement)||S?.documentElement||di(S),{display:M,flexDirection:I}=getComputedStyle(w),N=w.scrollLeft;_.left=N<d.value,_.right=N>d.value;const F=Math.abs(N)<=(s.left||0),B=Math.abs(N)+w.clientWidth>=w.scrollWidth-(s.right||0)-Dh;M==="flex"&&I==="row-reverse"?(f.left=B,f.right=F):(f.left=F,f.right=B),d.value=N;let H=w.scrollTop;S===c.document&&!H&&(H=c.document.body.scrollTop),_.top=H<h.value,_.bottom=H>h.value;const G=Math.abs(H)<=(s.top||0),q=Math.abs(H)+w.clientHeight>=w.scrollHeight-(s.bottom||0)-Dh;M==="flex"&&I==="column-reverse"?(f.top=q,f.bottom=G):(f.top=G,f.bottom=q),h.value=H},E=S=>{var R;if(!c)return;const w=(R=S.target.documentElement)!=null?R:S.target;A(w),m.value=!0,x(S),a(S)};return Or(n,"scroll",t?Zg(E,t,!0,!1):E,o),Is(()=>{try{const S=tt(n);if(!S)return;A(S)}catch(S){u(S)}}),Or(n,"scrollend",y,o),{x:p,y:g,isScrolling:m,arrivedState:f,directions:_,measure(){const S=tt(n);c&&S&&A(S)}}}function sv(n={}){const e=ye(),t=Ns(()=>typeof performance<"u"&&"memory"in performance);if(t.value){const{interval:i=1e3}=n;Kg(()=>{e.value=performance.memory},i,{immediate:n.immediate,immediateCallback:n.immediateCallback})}return{isSupported:t,memory:e}}const Uh={x:0,y:0,pointerId:0,pressure:0,tiltX:0,tiltY:0,width:0,height:0,twist:0,pointerType:null},ov=Object.keys(Uh);function lv(n={}){const{target:e=Li}=n,t=ye(!1),i=ye(n.initialValue||{});Object.assign(i.value,Uh,i.value);const r=a=>{t.value=!0,!(n.pointerTypes&&!n.pointerTypes.includes(a.pointerType))&&(i.value=qg(a,ov,!1))};if(e){const a={passive:!0};Or(e,["pointerdown","pointermove","pointerup"],r,a),Or(e,"pointerleave",()=>t.value=!1,a)}return{...Jg(i),isInside:t}}function cv(n={}){const{window:e=Li,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:i=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:a=!0,type:s="inner"}=n,o=ye(t),l=ye(i),c=()=>{e&&(s==="outer"?(o.value=e.outerWidth,l.value=e.outerHeight):a?(o.value=e.innerWidth,l.value=e.innerHeight):(o.value=e.document.documentElement.clientWidth,l.value=e.document.documentElement.clientHeight))};if(c(),Is(c),Or("resize",c,{passive:!0}),r){const u=ev("(orientation: portrait)");Rt(u,()=>c())}return{width:o,height:l}}function uv(n){return Mg(n)===!0?"__q_date|"+n.getTime():bg(n)===!0?"__q_expr|"+n.source:typeof n=="number"?"__q_numb|"+n:typeof n=="boolean"?"__q_bool|"+(n?"1":"0"):typeof n=="string"?"__q_strn|"+n:typeof n=="function"?"__q_strn|"+n.toString():n===Object(n)?"__q_objt|"+JSON.stringify(n):n}function hv(n){if(n.length<9)return n;const e=n.substring(0,8),t=n.substring(9);switch(e){case"__q_date":const i=Number(t);return new Date(Number.isNaN(i)===!0?t:i);case"__q_expr":return new RegExp(t);case"__q_numb":return Number(t);case"__q_bool":return t==="1";case"__q_strn":return""+t;case"__q_objt":return JSON.parse(t);default:return n}}function dv(){const n=()=>null;return{has:()=>!1,hasItem:()=>!1,getLength:()=>0,getItem:n,getIndex:n,getKey:n,getAll:()=>{},getAllKeys:()=>[],set:oa,setItem:oa,remove:oa,removeItem:oa,clear:oa,isEmpty:()=>!0}}function pv(n){const e=window[n+"Storage"],t=s=>{const o=e.getItem(s);return o?hv(o):null},i=s=>e.getItem(s)!==null,r=(s,o)=>{e.setItem(s,uv(o))},a=s=>{e.removeItem(s)};return{has:i,hasItem:i,getLength:()=>e.length,getItem:t,getIndex:s=>s<e.length?t(e.key(s)):null,getKey:s=>s<e.length?e.key(s):null,getAll:()=>{let s;const o={},l=e.length;for(let c=0;c<l;c++)s=e.key(c),o[s]=t(s);return o},getAllKeys:()=>{const s=[],o=e.length;for(let l=0;l<o;l++)s.push(e.key(l));return s},set:r,setItem:r,remove:a,removeItem:a,clear:()=>{e.clear()},isEmpty:()=>e.length===0}}const Oh=Wi.has.webStorage===!1?dv():pv("local"),vi={install({$q:n}){n.localStorage=Oh}};Object.assign(vi,Oh);class fv{_bufferSource;_splitter;_out;_sampleHolder;_analyser;context;constructor(e){this.context=e,this._bufferSource=new AudioBufferSourceNode(e),this._splitter=new ChannelSplitterNode(e),this._out=new ChannelMergerNode(e),this._sampleHolder=new Float32Array(1),this._analyser=null}get playbackPosition(){return this._analyser?.getFloatTimeDomainData(this._sampleHolder),this._sampleHolder[0]}get duration(){return this._bufferSource.buffer?.duration}set buffer(e){this._bufferSource.buffer=new AudioBuffer({length:e.length,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels+1});for(let r=0;r<e.numberOfChannels;r++)this._bufferSource.buffer.copyToChannel(e.getChannelData(r),r);const t=e.length,i=new Float32Array(t);for(let r=0;r<t;r++)i[r]=r/t;this._bufferSource.buffer.copyToChannel(i,e.numberOfChannels),this._bufferSource.connect(this._splitter);for(let r=0;r<e.numberOfChannels;r++)this._splitter.connect(this._out,r,r);this._analyser=new AnalyserNode(this.context),this._splitter.connect(this._analyser,e.numberOfChannels)}get buffer(){return this._bufferSource.buffer}get loop(){return this._bufferSource.loop}set loop(e){this._bufferSource.loop=e}get playbackRate(){return this._bufferSource.playbackRate}start(...e){this._bufferSource.start(...e)}stop(...e){this._bufferSource.stop(...e)}connect(...e){this._out.connect(...e)}}function Fh(n,e){return Array(e).fill(null).flatMap(()=>n)}const Bh=[!0,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!1,!1,!1,!1,!0,!1,!1,!1,!0,!1],zh=[null,null].flatMap(()=>[!0,!1,!1,!1,!0,!1,!1,!1]),ti=[{file:"/music.flac",bpm:87,title:"Original Composition",patterns:[{beatMap:Bh,colors:[{r:.416,g:.357,b:.988},{r:.976,g:.502,b:.384},{r:.827,g:.412,b:.867},{r:.443,g:.349,b:.98},{r:.765,g:.49,b:.733}],speedMult:2,noiseStrength:1},{beatMap:Bh,colors:[{r:137/255,g:210/255,b:220/255},{r:101/255,g:100/255,b:219/255},{r:35/255,g:46/255,b:209/255},{r:16/255,g:29/255,b:66/255},{r:137/255,g:210/255,b:220/255}],speedMult:1,noiseStrength:1}]},{file:"/music-house-2.flac",bpm:120,title:"",patterns:[{beatMap:Fh(zh,4),colors:[{r:.443*.5,g:.349*.5,b:.98*.5},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0}],noiseStrength:.5,speedMult:1},{beatMap:Fh(zh,4*4),colors:[{r:.416,g:.357,b:.988},{r:.976,g:.502,b:.384},{r:.827,g:.412,b:.867},{r:.443,g:.349,b:.98},{r:.765,g:.49,b:.733}],speedMult:2,noiseStrength:1}]}],kh=vi.getItem("lastMusicChoice");if(kh){const n=ti.findIndex(e=>e.title===kh);n!==-1&&ti.splice(n,1)}const Ii=Math.floor(Math.random()*ti.length);vi.set("lastMusicChoice",ti[Ii].title);const mv=.3,gv=(n,e)=>{if(!e)throw console.error("No output node provided"),new Error("No output node provided");if(!n)throw console.error("No context provided"),new Error("No context provided");const t=ye(!0),i=ye(!0),r=Ke(()=>t.value||i.value);fetch(ti[Ii].file).then(v=>{v.arrayBuffer().then(m=>{n.decodeAudioData(m).then(f=>{a.buffer=f,console.log("Loaded source buffer - ",a.buffer),t.value=!1})})}),fetch("/music-rmrf-bite.flac").then(v=>{v.arrayBuffer().then(m=>{n.decodeAudioData(m).then(f=>{o.buffer=f,console.log("Loaded crash buffer - ",o.buffer),i.value=!1})})});const a=new fv(n),s=n.createGain(),o=n.createBufferSource();a.loop=!0,a.connect(s),o.connect(s),s.connect(e),s.gain.value=mv,(async()=>{for(;;){if(a.buffer==null||o.buffer==null){console.log("Waiting for buffers to load, retrying in 50ms..."),await new Promise(v=>setTimeout(v,50));continue}a.start();return}})();const l=ye([]),c=ye(ti[Ii].bpm),u=()=>a.playbackPosition,d=()=>(a.duration??0)*a.playbackPosition,h=v=>l.value.length===0?!1:l.value[v%l.value.length],p=As({oneFourthBeatIndex:0,beatIndex:0,patternIndex:0,numPatterns:ti[Ii].patterns.length,colors:ti[Ii].patterns[0].colors,oneFourthBeatIndexInPattern:0,speedMult:ti[Ii].patterns[0].speedMult,noiseStrength:ti[Ii].patterns[0].noiseStrength??1});function g(){const v=60/c.value/4;p.oneFourthBeatIndex=Math.floor(d()/v);const m=60/c.value;p.beatIndex=Math.floor(d()/m);const f=ti[Ii].patterns.reduce((y,x)=>y+x.beatMap.length,0);let _=p.oneFourthBeatIndex%f;p.oneFourthBeatIndexInPattern=_;for(let y=0;y<ti[Ii].patterns.length;y++){const x=ti[Ii].patterns[y];if(_<x.beatMap.length){l.value=x.beatMap,p.colors=x.colors,p.patternIndex=y,p.speedMult=x.speedMult,p.noiseStrength=x.noiseStrength??1;break}_-=x.beatMap.length,p.oneFourthBeatIndexInPattern=_}requestAnimationFrame(g)}return g(),{realtime:p,context:n,crash:()=>{try{a.stop()}catch{}try{o.start()}catch{}},getPlaybackPosition:u,getPlaybackTime:d,hasBeatAtIndex:h,beatMap:l,bpm:c,fetching:r}},Fr=[],Vh=(n,e)=>{if(!e)throw new Error("Output node is required");const t=n.createBufferSource(),i=n.createGain();t.loop=!0,t.connect(i),i.connect(e),(async()=>(Fr.push(await n.decodeAudioData(await(await fetch("/keys1.wav")).arrayBuffer())),Fr.push(await n.decodeAudioData(await(await fetch("/keys2.wav")).arrayBuffer())),Fr.push(await n.decodeAudioData(await(await fetch("/keys3.wav")).arrayBuffer())),Fr.push(await n.decodeAudioData(await(await fetch("/keys4.wav")).arrayBuffer()))))();const r=ye(!1);return{mute:()=>{r.value=!0},unmute:()=>{r.value=!1},play:()=>{if(!r.value){if(n.state==="suspended"){console.log("Not playing keyboard sfx because context is suspended"),n.resume();return}try{i.gain.setValueAtTime(.1,n.currentTime);const a=Fr[Math.floor(Math.random()*Fr.length)],s=n.createBufferSource();s.buffer=a,s.connect(i),s.start()}catch(a){console.log("Could not play keyboard sfx: ",a)}}},playFullVolume:()=>{if(!r.value)try{const a=Fr[0];i.gain.setValueAtTime(.2,n.currentTime);const s=n.createBufferSource();s.buffer=a,s.connect(i),s.start()}catch(a){console.log("Could not play keyboard sfx: ",a)}},context:n}},vv=(n,e,t,i)=>{const r=ye(!1),a=Vh(e.context,e.gainNode),s=Sg();async function o(){r.value=!0,n.isLatestLinePrompt()||n.newPromptStringLine(),await n.wipeOutLatestLine(),await n.fillInLatestLine("dmesg"),await n.keyboardSFX.playFullVolume(),await n.newOutputStringLine(),i.showStatsForNerds.value=!i.showStatsForNerds.value,await n.wait(1250/2),await n.fillInLatestLinePerWord("Statistics "+(i.showStatsForNerds.value?"enabled":"disabled")),await n.wait(1250/2),await n.newPromptStringLine(),r.value=!1}async function l(){r.value=!0,n.isLatestLinePrompt()||n.newPromptStringLine(),await n.wipeOutLatestLine(),e.muted.value?(await n.fillInLatestLine("unmute"),await n.keyboardSFX.playFullVolume(),await n.newOutputStringLine(),e.unmute(),await n.wait(1250),await n.fillInLatestLinePerWord("\u{1F50A} Music unmuted")):(await n.fillInLatestLine("mute"),await n.keyboardSFX.playFullVolume(),await n.newOutputStringLine(),e.mute(),await n.wait(1250),await n.fillInLatestLinePerWord("\u{1F507} Music muted")),await n.emulatePressEnterOnLatestLine(),r.value=!1}async function c(){r.value=!0,n.isLatestLinePrompt()||n.newPromptStringLine(),await n.wipeOutLatestLine(),await n.fillInLatestLine("clear"),await n.emulatePressEnterOnLatestLine(),await n.wait(500),await n.clearLines(),await n.wait(500),await n.newPromptStringLine(),r.value=!1}async function u(){r.value=!0,n.isLatestLinePrompt()||n.newPromptStringLine(),await n.wipeOutLatestLine(),await n.wait(250),await n.fillInLatestLine("neofetch"),await n.keyboardSFX.playFullVolume(),await n.newOutputStringLine("Hey! My name's Benedict Jude A. Rocat -- but I often just go by Ben Jude."),await n.wait(500),await n.newOutputStringLine("\u{1F680} I make cohesive software, visual & acoustic experiences."),await n.wait(700),await n.wait(700),await n.newOutputStringLine(),await n.wait(250),await n.newOutputStringLine("My experience is varied, but mainly focused on the following:"),await n.wait(1250),await n.newOutputStringLine();const p=["\u{1F4BB} WEBDEV","\u2728 VIDEO & VFX","\u{1F4E6} 3D","\u{1F3AE} GAMEDEV","\u{1F3B6} MUSIC"];for(let g=0;g<p.length;g++)await n.newOutputStringLine(" - "+p[g]),await n.wait(100);await n.newPromptStringLine(),await n.wait(500),r.value=!1}async function d(){r.value=!0,n.isLatestLinePrompt()||n.newPromptStringLine(),await n.wipeOutLatestLine(),await n.wait(250),await n.fillInLatestLine("rm -rf --no-preserve-root /"),await n.keyboardSFX.playFullVolume(),await n.newOutputStringLine(),await n.wait(500),await n.newOutputStringLine("WARNING! This is a non-standard Linux configuration (faux_linux 5.3.1)"),await n.wait(300),await n.newOutputStringLine("DO NOT PROCEED UNLESS This is a scary warning message that's supposed to show up for just a moment!"),await n.wait(150),await n.newOutputStringLine(),await n.wait(150),await n.newOutputStringLine("Are you sure you want to proceed?"),await n.wait(150),await n.newPromptStringLine(),await n.fillInLatestLine("y"),await n.emulatePressEnterOnLatestLine();function p(){return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,v=>(+v^crypto.getRandomValues(new Uint8Array(1))[0]&15>>+v/4).toString(16))}(async()=>{for(let v=0;v<5;v++)await n.newOutputStringLine(`/dev/sd${"abcdefghijklm"[v]}/`),await n.wait(Math.random()>.9?250:20);for(let v=0;v<100;v++)await n.newOutputStringLine(`/home/users/benjude/${p()}`),await n.wait(Math.random()>.99?250:20)})(),t.crash(),await n.wait(750);const g=new CustomEvent("__destroy");window.dispatchEvent(g),s.push("/rmrf")}async function h(p){const g=async()=>{let m=!0;const f=n.getLatestLine(),_=f.content;for(let y=0;y<_.length;y++){if(r.value)return;f.content=_.slice(0,_.length-(y+1)),a.play(),m?(m=!1,await new Promise(x=>setTimeout(x,100))):await new Promise(x=>setTimeout(x,60))}},v=async m=>{const f=n.getLatestLine();for(let _=0;_<m.length;_++){if(r.value)return;f.content=m.slice(0,_+1),a.play(),f.content[f.content.length-1]===" "?await new Promise(y=>setTimeout(y,140)):await new Promise(y=>setTimeout(y,70))}};r.value||(await g(),!r.value&&(await new Promise(m=>setTimeout(m,250)),!r.value&&(await v(p),!r.value&&(await new Promise(m=>setTimeout(m,3500)),!r.value&&(r.value||await new Promise(m=>setTimeout(m,250)))))))}return{toggleStatsForNerds:o,toggleMusicTerm:l,clearCommand:c,whoAreYouCommand:u,rmRf:d,temporarilyChangeText:h,termBusy:r}},_v=(n,e)=>{const t=ye([]),i=Vh(n,e),r=async A=>{let E=!0;const S=t.value[A].content;for(let R=0;R<S.length;R++)t.value[A].content=S.slice(0,S.length-(R+1)),t.value[A].type==="prompt"&&i.play(),E?(E=!1,await new Promise(w=>setTimeout(w,100))):await new Promise(w=>setTimeout(w,60))},a=async()=>{await r(t.value.length-1)},s=async(A,E)=>{for(let S=0;S<E.length;S++)t.value[A].content=E.slice(0,S+1),t.value[A].type==="prompt"&&i.play(),t.value[A].content[t.value[A].content.length-1]===" "?await new Promise(R=>setTimeout(R,140)):await new Promise(R=>setTimeout(R,70))},o=async(A,E)=>{const S=E.split(" ");for(let R=0;R<S.length;R++)t.value[A].content+=S[R]+" ",t.value[A].type==="prompt"&&i.play(),await new Promise(w=>setTimeout(w,5))},l=async A=>{await o(t.value.length-1,A)},c=async A=>{await s(t.value.length-1,A)},u=A=>{t.value[t.value.length-1].content=A},d=(A,E)=>{t.value[A].content=E},h=A=>{t.value.push({type:"prompt",content:A??""})},p=A=>{t.value.push({type:"output",content:A??""})},g=()=>{t.value=[]},v=async()=>{i.playFullVolume(),p(),h()},m=async()=>{const A=t.value[t.value.length-1];i.playFullVolume(),A.content=""},f=()=>t.value[t.value.length-1].type==="prompt",_=()=>t.value[t.value.length-1].type==="output",y=()=>t.value[t.value.length-1],x=A=>new Promise(E=>setTimeout(E,A));return h(),{lines:t,updateLatestLine:u,updateLine:d,newOutputStringLine:p,newPromptStringLine:h,clearLines:g,wipeOutLine:r,wipeOutLatestLine:a,fillInLine:s,fillInLatestLine:c,emulatePressEnterOnLatestLine:v,emulatePressEnterOnLatestLineWipeOut:m,fillInLinePerWord:o,fillInLatestLinePerWord:l,isLatestLineOutput:_,isLatestLinePrompt:f,keyboardSFX:i,getLatestLine:y,wait:x}},yv={dark:{type:Boolean,default:null}};function xv(n,e){return Ke(()=>n.dark===null?e.dark.isActive:n.dark)}const wv=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],Mv=["wave","pulse","pulse-x","pulse-y","fade","blink","none"],bv=Ss({name:"QSkeleton",props:{...yv,tag:{type:String,default:"div"},type:{type:String,validator:n=>wv.includes(n),default:"rect"},animation:{type:String,validator:n=>Mv.includes(n),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(n,{slots:e}){const t=Ci(),i=xv(n,t.proxy.$q),r=Ke(()=>{const s=n.size!==void 0?[n.size,n.size]:[n.width,n.height];return{"--q-skeleton-speed":`${n.animationSpeed}ms`,width:s[0],height:s[1]}}),a=Ke(()=>`q-skeleton q-skeleton--${i.value===!0?"dark":"light"} q-skeleton--type-${n.type}`+(n.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${n.animation}`:"")+(n.square===!0?" q-skeleton--square":"")+(n.bordered===!0?" q-skeleton--bordered":""));return()=>ci(n.tag,{class:a.value,style:r.value},sc(e.default))}});function Sv(n,e,t){let i;function r(){i!==void 0&&(Th.remove(i),i=void 0)}return Ps(()=>{n.value===!0&&r()}),{removeFromHistory:r,addToHistory(){i={condition:()=>t.value===!0,handler:e},Th.add(i)}}}function Ev(){let n=null;const e=Ci();function t(){n!==null&&(clearTimeout(n),n=null)}return Ah(t),Ps(t),{removeTimeout:t,registerTimeout(i,r){t(),bh(e)===!1&&(n=setTimeout(()=>{n=null,i()},r))}}}function Tv(){let n;const e=Ci();function t(){n=void 0}return Ah(t),Ps(t),{removeTick:t,registerTick(i){n=i,Es(()=>{n===i&&(bh(e)===!1&&n(),n=void 0)})}}}const Av={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Cv=["beforeShow","show","beforeHide","hide"];function Rv({showing:n,canShow:e,hideOnRouteChange:t,handleShow:i,handleHide:r,processOnMount:a}){const s=Ci(),{props:o,emit:l,proxy:c}=s;let u;function d(_){n.value===!0?g(_):h(_)}function h(_){if(o.disable===!0||_!==void 0&&_.qAnchorHandled===!0||e!==void 0&&e(_)!==!0)return;const y=o["onUpdate:modelValue"]!==void 0;y===!0&&(l("update:modelValue",!0),u=_,Es(()=>{u===_&&(u=void 0)})),(o.modelValue===null||y===!1)&&p(_)}function p(_){n.value!==!0&&(n.value=!0,l("beforeShow",_),i!==void 0?i(_):l("show",_))}function g(_){if(o.disable===!0)return;const y=o["onUpdate:modelValue"]!==void 0;y===!0&&(l("update:modelValue",!1),u=_,Es(()=>{u===_&&(u=void 0)})),(o.modelValue===null||y===!1)&&v(_)}function v(_){n.value!==!1&&(n.value=!1,l("beforeHide",_),r!==void 0?r(_):l("hide",_))}function m(_){o.disable===!0&&_===!0?o["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!1):_===!0!==n.value&&(_===!0?p:v)(u)}Rt(()=>o.modelValue,m),t!==void 0&&mg(s)===!0&&Rt(()=>c.$route.fullPath,()=>{t.value===!0&&n.value===!0&&g()}),a===!0&&gi(()=>{m(o.modelValue)});const f={show:h,hide:g,toggle:d};return Object.assign(c,f),f}const Pv={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Lv(n,e=()=>{},t=()=>{}){return{transitionProps:Ke(()=>{const i=`q-transition--${n.transitionShow||e()}`,r=`q-transition--${n.transitionHide||t()}`;return{appear:!0,enterFromClass:`${i}-enter-from`,enterActiveClass:`${i}-enter-active`,enterToClass:`${i}-enter-to`,leaveFromClass:`${r}-leave-from`,leaveActiveClass:`${r}-leave-active`,leaveToClass:`${r}-leave-to`}}),transitionStyle:Ke(()=>`--q-transition-duration: ${n.transitionDuration}ms`)}}let ua=[],ha=[];function Gh(n){ha=ha.filter(e=>e!==n)}function Iv(n){Gh(n),ha.push(n)}function Hh(n){Gh(n),ha.length===0&&ua.length!==0&&(ua[ua.length-1](),ua=[])}function Nv(n){ha.length===0?n():ua.push(n)}let Dv=1,Uv=document.body;function Ov(n,e){const t=document.createElement("div");if(t.id=`q-portal--${e}--${Dv++}`,Ch.globalNodes!==void 0){const i=Ch.globalNodes.class;i!==void 0&&(t.className=i)}return Uv.appendChild(t),t}function Fv(n){n.remove()}const cc=[],Bv=Ss({name:"QPortal",setup(n,{slots:e}){return()=>e.default()}});function zv(n){for(n=n.parent;n!=null;){if(n.type.name==="QGlobalDialog")return!0;if(n.type.name==="QDialog"||n.type.name==="QMenu")return!1;n=n.parent}return!1}function kv(n,e,t,i){const r=ye(!1),a=ye(!1);let s=null;const o={},l=zv(n);function c(d){if(d===!0){Hh(o),a.value=!0;return}a.value=!1,r.value===!1&&(l===!1&&s===null&&(s=Ov(!1,i)),r.value=!0,cc.push(n.proxy),Iv(o))}function u(d){if(a.value=!1,d!==!0)return;Hh(o),r.value=!1;const h=cc.indexOf(n.proxy);h!==-1&&cc.splice(h,1),s!==null&&(Fv(s),s=null)}return Ir(()=>{u(!0)}),n.proxy.__qPortal=!0,Eg(n.proxy,"contentEl",()=>e.value),{showPortal:c,hidePortal:u,portalIsActive:r,portalIsAccessible:a,renderPortal:()=>l===!0?t():r.value===!0?[ci(Tg,{to:s},ci(Bv,t))]:void 0}}let da=0,uc,hc,pa,dc=!1,Wh,jh,Xh,Br=null;function Vv(n){Gv(n)&&Ag(n)}function Gv(n){if(n.target===document.body||n.target.classList.contains("q-layout__backdrop"))return!0;const e=Cg(n),t=n.shiftKey&&!n.deltaX,i=!t&&Math.abs(n.deltaX)<=Math.abs(n.deltaY),r=t||i?n.deltaY:n.deltaX;for(let a=0;a<e.length;a++){const s=e[a];if(Fg(s,i))return i?r<0&&s.scrollTop===0?!0:r>0&&s.scrollTop+s.clientHeight===s.scrollHeight:r<0&&s.scrollLeft===0?!0:r>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function qh(n){n.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Ds(n){dc!==!0&&(dc=!0,requestAnimationFrame(()=>{dc=!1;const{height:e}=n.target,{clientHeight:t,scrollTop:i}=document.scrollingElement;(pa===void 0||e!==window.innerHeight)&&(pa=t-e,document.scrollingElement.scrollTop=i),i>pa&&(document.scrollingElement.scrollTop-=Math.ceil((i-pa)/8))}))}function Yh(n){const e=document.body,t=window.visualViewport!==void 0;if(n==="add"){const{overflowY:i,overflowX:r}=window.getComputedStyle(e);uc=Ug(window),hc=Og(window),Wh=e.style.left,jh=e.style.top,Xh=window.location.href,e.style.left=`-${uc}px`,e.style.top=`-${hc}px`,r!=="hidden"&&(r==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,Wi.is.ios===!0&&(t===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Ds,Nr.passiveCapture),window.visualViewport.addEventListener("scroll",Ds,Nr.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",qh,Nr.passiveCapture))}Wi.is.desktop===!0&&Wi.is.mac===!0&&window[`${n}EventListener`]("wheel",Vv,Nr.notPassive),n==="remove"&&(Wi.is.ios===!0&&(t===!0?(window.visualViewport.removeEventListener("resize",Ds,Nr.passiveCapture),window.visualViewport.removeEventListener("scroll",Ds,Nr.passiveCapture)):window.removeEventListener("scroll",qh,Nr.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=Wh,e.style.top=jh,window.location.href===Xh&&window.scrollTo(uc,hc),pa=void 0)}function Hv(n){let e="add";if(n===!0){if(da++,Br!==null){clearTimeout(Br),Br=null;return}if(da>1)return}else{if(da===0||(da--,da>0))return;if(e="remove",Wi.is.ios===!0&&Wi.is.nativeMobile===!0){Br!==null&&clearTimeout(Br),Br=setTimeout(()=>{Yh(e),Br=null},100);return}}Yh(e)}function Wv(){let n;return{preventBodyScroll(e){e!==n&&(n!==void 0||e===!0)&&(n=e,Hv(e))}}}const zr=[];let Mn;function jv(n){Mn=n.keyCode===27}function Xv(){Mn===!0&&(Mn=!1)}function qv(n){Mn===!0&&(Mn=!1,Rg(n,27)===!0&&zr[zr.length-1](n))}function Zh(n){window[n]("keydown",jv),window[n]("blur",Xv),window[n]("keyup",qv),Mn=!1}function Yv(n){Wi.is.desktop===!0&&(zr.push(n),zr.length===1&&Zh("addEventListener"))}function Jh(n){const e=zr.indexOf(n);e!==-1&&(zr.splice(e,1),zr.length===0&&Zh("removeEventListener"))}const kr=[];function Kh(n){kr[kr.length-1](n)}function Zv(n){Wi.is.desktop===!0&&(kr.push(n),kr.length===1&&document.body.addEventListener("focusin",Kh))}function $h(n){const e=kr.indexOf(n);e!==-1&&(kr.splice(e,1),kr.length===0&&document.body.removeEventListener("focusin",Kh))}let Us=0;const Jv={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Qh={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},Kv=Ss({name:"QDialog",inheritAttrs:!1,props:{...Av,...Pv,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:n=>["standard","top","bottom","left","right"].includes(n)}},emits:[...Cv,"shake","click","escapeKey"],setup(n,{slots:e,emit:t,attrs:i}){const r=Ci(),a=ye(null),s=ye(!1),o=ye(!1);let l=null,c=null,u,d;const h=Ke(()=>n.persistent!==!0&&n.noRouteDismiss!==!0&&n.seamless!==!0),{preventBodyScroll:p}=Wv(),{registerTimeout:g}=Ev(),{registerTick:v,removeTick:m}=Tv(),{transitionProps:f,transitionStyle:_}=Lv(n,()=>Qh[n.position][0],()=>Qh[n.position][1]),y=Ke(()=>_.value+(n.backdropFilter!==void 0?`;backdrop-filter:${n.backdropFilter};-webkit-backdrop-filter:${n.backdropFilter}`:"")),{showPortal:x,hidePortal:A,portalIsAccessible:E,renderPortal:S}=kv(r,a,ie,"dialog"),{hide:R}=Rv({showing:s,hideOnRouteChange:h,handleShow:H,handleHide:G,processOnMount:!0}),{addToHistory:w,removeFromHistory:M}=Sv(s,R,h),I=Ke(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${n.maximized===!0?"maximized":"minimized"} q-dialog__inner--${n.position} ${Jv[n.position]}`+(o.value===!0?" q-dialog__inner--animating":"")+(n.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(n.fullHeight===!0?" q-dialog__inner--fullheight":"")+(n.square===!0?" q-dialog__inner--square":"")),N=Ke(()=>s.value===!0&&n.seamless!==!0),F=Ke(()=>n.autoClose===!0?{onClick:Te}:{}),B=Ke(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${N.value===!0?"modal":"seamless"}`,i.class]);Rt(()=>n.maximized,Q=>{s.value===!0&&K(Q)}),Rt(N,Q=>{p(Q),Q===!0?(Zv(j),Yv(ae)):($h(j),Jh(ae))});function H(Q){w(),c=n.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,K(n.maximized),x(),o.value=!0,n.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),v(q)):m(),g(()=>{if(r.proxy.$q.platform.is.ios===!0){if(n.seamless!==!0&&document.activeElement){const{top:se,bottom:Re}=document.activeElement.getBoundingClientRect(),{innerHeight:Pe}=window,De=window.visualViewport!==void 0?window.visualViewport.height:Pe;se>0&&Re>De/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-De,Re>=Pe?1/0:Math.ceil(document.scrollingElement.scrollTop+Re-De/2))),document.activeElement.scrollIntoView()}d=!0,a.value.click(),d=!1}x(!0),o.value=!1,t("show",Q)},n.transitionDuration)}function G(Q){m(),M(),ve(!0),o.value=!0,A(),c!==null&&(((Q&&Q.type.indexOf("key")===0?c.closest('[tabindex]:not([tabindex^="-"])'):void 0)||c).focus(),c=null),g(()=>{A(!0),o.value=!1,t("hide",Q)},n.transitionDuration)}function q(Q){Nv(()=>{let se=a.value;if(se!==null){if(Q!==void 0){const Re=se.querySelector(Q);if(Re!==null){Re.focus({preventScroll:!0});return}}se.contains(document.activeElement)!==!0&&(se=se.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||se.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||se.querySelector("[autofocus], [data-autofocus]")||se,se.focus({preventScroll:!0}))}})}function W(Q){Q&&typeof Q.focus=="function"?Q.focus({preventScroll:!0}):q(),t("shake");const se=a.value;se!==null&&(se.classList.remove("q-animate--scale"),se.classList.add("q-animate--scale"),l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,a.value!==null&&(se.classList.remove("q-animate--scale"),q())},170))}function ae(){n.seamless!==!0&&(n.persistent===!0||n.noEscDismiss===!0?n.maximized!==!0&&n.noShake!==!0&&W():(t("escapeKey"),R()))}function ve(Q){l!==null&&(clearTimeout(l),l=null),(Q===!0||s.value===!0)&&(K(!1),n.seamless!==!0&&(p(!1),$h(j),Jh(ae))),Q!==!0&&(c=null)}function K(Q){Q===!0?u!==!0&&(Us<1&&document.body.classList.add("q-body--dialog"),Us++,u=!0):u===!0&&(Us<2&&document.body.classList.remove("q-body--dialog"),Us--,u=!1)}function Te(Q){d!==!0&&(R(Q),t("click",Q))}function We(Q){n.persistent!==!0&&n.noBackdropDismiss!==!0?R(Q):n.noShake!==!0&&W()}function j(Q){n.allowFocusOutside!==!0&&E.value===!0&&Bg(a.value,Q.target)!==!0&&q('[tabindex]:not([tabindex="-1"])')}Object.assign(r.proxy,{focus:q,shake:W,__updateRefocusTarget(Q){c=Q||null}}),Ps(ve);function ie(){return ci("div",{role:"dialog","aria-modal":N.value===!0?"true":"false",...i,class:B.value},[ci(nc,{name:"q-transition--fade",appear:!0},()=>N.value===!0?ci("div",{class:"q-dialog__backdrop fixed-full",style:y.value,"aria-hidden":"true",tabindex:-1,onClick:We}):null),ci(nc,f.value,()=>s.value===!0?ci("div",{ref:a,class:I.value,style:_.value,tabindex:-1,...F.value},sc(e.default)):null)])}return S}}),$v=Dr({__name:"ProjectItem",props:{project:{type:Object}},setup(n,{expose:e}){e();const t=ye(),i=ye(!1);setInterval(()=>{t.value&&t.value.matches(":hover")});const r=ye(!1),a=Ke(()=>r.value?"upside-down":""),s=ye(0),o=f=>{c.value=!1,s.value=f},l=()=>{let f=(s.value+1)%h.value.length,_=h.value[f].includes(".mp4");for(;_;)f=(f+1)%h.value.length,_=h.value[f].includes(".mp4");s.value=f},c=ye(!0);Rt(r,f=>{if(f){c.value=!1;const _=h.value.findIndex(y=>y.includes(".mp4"));_!==-1&&(s.value=_)}else l(),c.value=!0});const u=Ke(()=>n.project?.images.some(f=>f.includes(".mp4"))),d=Ke(()=>h.value[s.value]),h=ye([...n.project?.images??[]]),p=ye(0),g=ye(!1);gi(async()=>{const f=await Promise.all(h.value.map(async _=>{if(_.includes(".mp4"))return 1.7777777777777777;const y=new Image;return y.src=_,await y.decode(),y.width/y.height}));g.value=!0,p.value=Math.min(...f),await new Promise(_=>setTimeout(_,Math.round(Math.random()*5)*1e3)),setInterval(()=>{c.value&&l()},7500)});const v=ye(Math.round(Math.random()*5)),m={projectItem:t,showFullscreen:i,showDetails:r,chevronClass:a,activeImage:s,changeImage:o,changeGuaranteeImage:l,autoChange:c,projectHasVideo:u,activeImageURL:d,images:h,lowestAspectRatio:p,allImagesLoaded:g,slowZoomAnimationDelay:v};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}}),Qv={class:"tw-w-full tw-flex tw-flex-col tw-transition-all tw-duration-700 tw-ease-out-expo"},e0={class:"tw-flex tw-flex-col tw-w-full -tw-space-y-1 tw-pointer-events-none"},t0={class:"tw-font-black tw-text-lg"},i0={class:"tw-ml-1"},r0={class:"tw-flex tw-justify-between"},n0={class:"tw-flex tw-w-full tw-justify-between"},a0={key:0},s0={key:1},o0={key:0,class:"tw-bg-black tw-w-full tw-h-full tw-object-cover tw-absolute tw-top-0 tw-left-0 tw-bottom-0 tw-right-0 -tw-z-10"},l0=["src"],c0=["src"],u0=["src"],h0={key:2,class:"tw-absolute tw-h-full tw-w-full tw-top-0 tw-left-0 tw-bottom-0 tw-right-0 tw-flex tw-justify-center tw-items-center -tw-z-10"},d0={class:"tw-duration-500 tw-transition-all tw-ease-in-out-cubic tw-mx-4 tw-rounded-xl tw-ring-1 tw-ring-slate-200/20 tw-bg-black/75 tw-overflow-clip tw-p-4 tw-min-h-[12rem] tw-font-mono tw-flex tw-flex-col tw-relative tw-mb-12 tw-backdrop-blur-lg"},p0={class:"tw-w-full tw-flex tw-justify-center tw-mb-6 tw-gap-3"},f0=["onClick"],m0={class:"tw-flex tw-gap-4 tw-flex-col lg:tw-flex-row"},g0={class:"tw-flex-1"},v0=["innerHTML"],_0={class:"tw-flex-shrink"},y0={class:"tw-flex tw-gap-2 tw-ml-2"},x0={key:0},w0={class:"tw-flex tw-gap-2 tw-ml-2"},M0={key:1},b0={class:"tw-w-full tw-h-full tw-flex tw-flex-col tw-bg-black/20 tw-backdrop-blur-md tw-relative tw-p-4"},S0={class:"tw-text-white tw-font-sans"},E0={class:"tw-font-black tw-text-lg"},T0={class:"tw-ml-1"},A0={class:"tw-my-4 tw-font-mono"},C0={class:"tw-flex-1 tw-w-full tw-flex tw-items-center tw-justify-center tw-overflow-hidden tw-rounded-xl"},R0=["src"],P0=["src"],L0={class:"tw-w-full tw-flex tw-justify-center tw-gap-3 tw-my-8"},I0=["onClick"];function N0(n,e,t,i,r,a){return ke(),Ye("div",Qv,[X("div",{ref:"projectItem",class:ui(["tw-ring-1 tw-ring-white/25 tw-flex-1 tw-flex tw-relative tw-rounded-xl tw-m-4 tw-p-4 tw-overflow-hidden tw-duration-300 tw-transition-transform tw-ease-out-expo tw-z-50",i.allImagesLoaded?"":"tw-min-h-64"]),style:ca(`aspect-ratio: ${i.lowestAspectRatio};`)},[e[4]||(e[4]=X("div",{class:"tw-absolute tw-min-h-32 -tw-z-[1] tw-top-0 tw-left-0 tw-right-0 tw-bg-gradient-to-b tw-from-black via-black/60 tw-to-transparent"},null,-1)),X("div",e0,[X("span",t0,ft(t.project?.name??"Unknown Project"),1),X("div",i0,[et(Nt,{class:"-tw-mt-1 tw-mr-2",name:t.project?.main_discipline.icon??"fas fa-question"},null,8,["name"]),X("span",null,ft(t.project?.main_discipline.name??"None"),1)]),e[2]||(e[2]=X("div",{class:"tw-flex-grow tw-pointer-events-none"},null,-1)),X("div",r0,[X("div",n0,[et(ur,{onClick:e[0]||(e[0]=s=>i.showDetails=!i.showDetails),flat:"","no-caps":"",class:ui(["tw-bg-black/20 tw-backdrop-blur-md tw-pointer-events-auto tw-transition-all tw-duration-300",i.showDetails&&i.projectHasVideo?"tw-mb-16":""])},{default:Dt(()=>[et(Nt,{class:ui([i.chevronClass,"tw-duration-300 tw-mr-2"]),size:"xs",name:"fas fa-chevron-down"},null,8,["class"]),i.showDetails?(ke(),Ye("span",a0," Less Details ")):(ke(),Ye("span",s0," More Details "))]),_:1},8,["class"])])])]),et(Rh,{name:"fade"},{default:Dt(()=>[i.activeImageURL.includes(".mp4")&&i.allImagesLoaded?(ke(),Ye("div",o0)):!i.activeImageURL.includes(".mp4")&&i.allImagesLoaded?(ke(),Ye("img",{src:i.activeImageURL,key:i.activeImageURL,class:"tw-object-cover tw-blur-lg tw-absolute tw-h-full tw-w-full tw-top-0 tw-left-0 tw-bottom-0 tw-right-0 -tw-z-10"},null,8,l0)):(ke(),wn(bv,{key:2,class:"tw-object-cover tw-absolute tw-h-full tw-w-full tw-top-0 tw-left-0 tw-bottom-0 tw-right-0"}))]),_:1}),et(Rh,{name:"fade"},{default:Dt(()=>[i.activeImageURL.includes(".mp4")&&i.allImagesLoaded?(ke(),Ye("video",{key:0,autoplay:"",loop:"",muted:"",controls:"",src:i.activeImageURL,class:"tw-w-full tw-h-full tw-object-contain tw-absolute tw-top-0 tw-left-0 tw-bottom-0 tw-right-0 -tw-z-10"},null,8,c0)):!i.activeImageURL.includes(".mp4")&&i.allImagesLoaded?(ke(),Ye("img",{src:i.activeImageURL,key:i.activeImageURL,class:ui([i.showDetails?"":"slow-zoom","tw-object-contain tw-absolute tw-h-full tw-w-full tw-top-0 tw-left-0 tw-bottom-0 tw-right-0 -tw-z-10"]),style:ca("animation-delay: "+i.slowZoomAnimationDelay+"s")},null,14,u0)):(ke(),Ye("div",h0,e[3]||(e[3]=[X("div",{class:"tw-font-mono tw-text-lg tw-tracking-wider"},"LOADING",-1)])))]),_:1})],6),et(nc,{mode:"out-in",name:"details"},{default:Dt(()=>[ac(X("div",d0,[X("div",p0,[(ke(!0),Ye(Ri,null,ji(i.images,(s,o)=>ac((ke(),Ye("div",{key:o,class:ui([i.activeImage===o?"tw-bg-white tw-h-6 tw-w-6 -tw-mt-1":"tw-h-4 tw-w-4 tw-bg-white/20","tw-relative tw-cursor-pointer tw-rounded-full hover:tw-scale-150 tw-duration-200"]),onClick:l=>i.changeImage(o)},null,10,f0)),[[Sh]])),128))]),X("div",m0,[X("div",g0,[t.project?(ke(),Ye("span",{key:0,class:"tw-text-base",innerHTML:t.project?.description},null,8,v0)):hr("",!0)]),X("div",_0,[X("span",y0,[et(Nt,{name:"fas fa-yin-yang",size:"xs",class:"tw-mt-1.5 -tw-ml-2"}),e[5]||(e[5]=X("p",{class:"tw-text-lg tw-font-semibold"},"DISCIPLINES",-1))]),e[7]||(e[7]=X("div",{class:"tw-w-full tw-h-[1px] tw-bg-white tw-my-1"},null,-1)),t.project?(ke(),Ye("ul",x0,[(ke(!0),Ye(Ri,null,ji(t.project.disciplines,s=>(ke(),Ye("li",{key:s.name,class:"tw-flex tw-gap-2 tw-ml-1"},[et(Nt,{name:s.icon,class:"tw-mt-1"},null,8,["name"]),Qt(ft(s.name),1)]))),128))])):hr("",!0),e[8]||(e[8]=X("br",null,null,-1)),X("span",w0,[et(Nt,{name:"fas fa-memory",size:"xs",class:"tw-mt-1.5 -tw-ml-2"}),e[6]||(e[6]=X("p",{class:"tw-text-lg tw-font-semibold"},"TECHNOLOGIES",-1))]),e[9]||(e[9]=X("div",{class:"tw-w-full tw-h-[1px] tw-bg-white tw-my-1"},null,-1)),t.project?(ke(),Ye("ul",M0,[(ke(!0),Ye(Ri,null,ji(t.project.technologies,s=>(ke(),Ye("li",{key:s.name,class:"tw-flex tw-gap-2 tw-ml-1"},[et(Nt,{name:s.icon,class:"tw-mt-1"},null,8,["name"]),Qt(ft(s.name),1)]))),128))])):hr("",!0)])]),e[10]||(e[10]=X("div",{class:"tw-absolute tw-top-0 tw-bottom-0 tw-left-0 tw-right-0 tw-rounded-xl tw-overflow-hidden tw-opacity-50 tw-pointer-events-none"},null,-1))],512),[[Pg,i.showDetails]])]),_:1}),et(Kv,{modelValue:i.showFullscreen,"onUpdate:modelValue":e[1]||(e[1]=s=>i.showFullscreen=s),"full-height":"","full-width":"","transition-show":"fade","transition-hide":"fade"},{default:Dt(()=>[X("div",b0,[X("div",S0,[X("span",E0,ft(t.project?.name??"Unknown Project"),1),X("div",T0,[et(Nt,{class:"-tw-mt-1 tw-mr-2",name:t.project?.main_discipline.icon??"fas fa-question"},null,8,["name"]),X("span",null,ft(t.project?.main_discipline.name??"None"),1)]),X("div",A0,ft(t.project?.description),1)]),X("div",C0,[i.activeImageURL.includes(".mp4")?(ke(),Ye("video",{key:0,autoplay:"",loop:"",muted:"",src:i.activeImageURL,class:"tw-object-contain"},null,8,R0)):(ke(),Ye("img",{src:i.activeImageURL,key:i.activeImageURL,class:"tw-object-contain"},null,8,P0))]),X("div",L0,[(ke(!0),Ye(Ri,null,ji(i.images,(s,o)=>ac((ke(),Ye("div",{key:o,class:ui([i.activeImage===o?"tw-bg-white tw-h-6 tw-w-6 -tw-mt-1":"tw-h-4 tw-w-4 tw-bg-white/20","tw-relative tw-cursor-pointer tw-rounded-full hover:tw-scale-150 tw-duration-200"]),onClick:l=>i.changeImage(o)},null,10,I0)),[[Sh]])),128))])])]),_:1},8,["modelValue"])])}const D0=la($v,[["render",N0],["__scopeId","data-v-85c63248"],["__file","ProjectItem.vue"]]);/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const fa="168",U0={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},O0={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ed=0,pc=1,td=2,F0=3,B0=0,fc=1,mc=2,Ni=3,Xi=0,Vt=1,_i=2,qi=0,Vr=1,gc=2,vc=3,_c=4,id=5,dr=100,rd=101,nd=102,ad=103,sd=104,od=200,ld=201,cd=202,ud=203,Os=204,Fs=205,hd=206,dd=207,pd=208,fd=209,md=210,gd=211,vd=212,_d=213,yd=214,xd=0,wd=1,Md=2,ma=3,bd=4,Sd=5,Ed=6,Td=7,ga=0,Ad=1,Cd=2,Di=0,Rd=1,Pd=2,Ld=3,Bs=4,Id=5,Nd=6,Dd=7,yc="attached",Ud="detached",zs=300,Yi=301,pr=302,va=303,_a=304,bn=306,ya=1e3,pi=1001,xa=1002,Pt=1003,xc=1004,z0=1004,Sn=1005,k0=1005,bt=1006,wa=1007,V0=1007,Ui=1008,G0=1008,Oi=1009,wc=1010,Mc=1011,En=1012,ks=1013,Zi=1014,Yt=1015,Tn=1016,Vs=1017,Gs=1018,Gr=1020,bc=35902,Sc=1021,Ec=1022,Gt=1023,Tc=1024,Ac=1025,Hr=1026,Wr=1027,Hs=1028,Ma=1029,Cc=1030,Ws=1031,H0=1032,js=1033,ba=33776,Sa=33777,Ea=33778,Ta=33779,Xs=35840,qs=35841,Ys=35842,Zs=35843,Js=36196,Ks=37492,$s=37496,Qs=37808,eo=37809,to=37810,io=37811,ro=37812,no=37813,ao=37814,so=37815,oo=37816,lo=37817,co=37818,uo=37819,ho=37820,po=37821,Aa=36492,fo=36494,mo=36495,Rc=36283,go=36284,vo=36285,_o=36286,Od=2200,Fd=2201,Bd=2202,Ca=2300,yo=2301,xo=2302,jr=2400,Xr=2401,Ra=2402,wo=2500,Pc=2501,W0=0,j0=1,X0=2,zd=3200,kd=3201,q0=3202,Y0=3203,fr=0,Vd=1,Ji="",ii="srgb",Ki="srgb-linear",Mo="display-p3",Pa="display-p3-linear",La="linear",ct="srgb",Ia="rec709",Na="p3",Z0=0,qr=7680,J0=7681,K0=7682,$0=7683,Q0=34055,e_=34056,t_=5386,i_=512,r_=513,n_=514,a_=515,s_=516,o_=517,l_=518,Lc=519,Gd=512,Hd=513,Wd=514,Ic=515,jd=516,Xd=517,qd=518,Yd=519,Da=35044,c_=35048,u_=35040,h_=35045,d_=35049,p_=35041,f_=35046,m_=35050,g_=35042,v_="100",Nc="300 es",Fi=2e3,Ua=2001;class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zd=1234567;const Yr=Math.PI/180,An=180/Math.PI;function ri(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function mt(n,e,t){return Math.max(e,Math.min(t,n))}function Dc(n,e){return(n%e+e)%e}function __(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function y_(n,e,t){return n!==e?(t-n)/(e-n):0}function Oa(n,e,t){return(1-t)*n+t*e}function x_(n,e,t,i){return Oa(n,e,1-Math.exp(-t*i))}function w_(n,e=1){return e-Math.abs(Dc(n,e*2)-e)}function M_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function b_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function S_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function E_(n,e){return n+Math.random()*(e-n)}function T_(n){return n*(.5-Math.random())}function A_(n){n!==void 0&&(Zd=n);let e=Zd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function C_(n){return n*Yr}function R_(n){return n*An}function P_(n){return(n&n-1)===0&&n!==0}function L_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function I_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function N_(n,e,t,i,r){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),u=s((e+i)/2),d=a((e-i)/2),h=s((e-i)/2),p=a((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function je(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Uc={DEG2RAD:Yr,RAD2DEG:An,generateUUID:ri,clamp:mt,euclideanModulo:Dc,mapLinear:__,inverseLerp:y_,lerp:Oa,damp:x_,pingpong:w_,smoothstep:M_,smootherstep:b_,randInt:S_,randFloat:E_,randFloatSpread:T_,seededRandom:A_,degToRad:C_,radToDeg:R_,isPowerOfTwo:P_,ceilPowerOfTwo:L_,floorPowerOfTwo:I_,setQuaternionFromProperEuler:N_,normalize:je,denormalize:Ht};class J{constructor(e=0,t=0){J.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,a,s,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],v=r[0],m=r[3],f=r[6],_=r[1],y=r[4],x=r[7],A=r[2],E=r[5],S=r[8];return a[0]=s*v+o*_+l*A,a[3]=s*m+o*y+l*E,a[6]=s*f+o*x+l*S,a[1]=c*v+u*_+d*A,a[4]=c*m+u*y+d*E,a[7]=c*f+u*x+d*S,a[2]=h*v+p*_+g*A,a[5]=h*m+p*y+g*E,a[8]=h*f+p*x+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*a*u+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,h=o*l-u*a,p=c*a-s*l,g=t*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*s)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*a-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(s*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oc.makeScale(e,t)),this}rotate(e){return this.premultiply(Oc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oc=new Xe;function Jd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}const D_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Cn(n,e){return new D_[n](e)}function Fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kd(){const n=Fa("canvas");return n.style.display="block",n}const $d={};function Rn(n){n in $d||($d[n]=!0,console.warn(n))}function U_(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const Qd=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ep=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ba={[Ki]:{transfer:La,primaries:Ia,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ii]:{transfer:ct,primaries:Ia,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Pa]:{transfer:La,primaries:Na,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(ep),fromReference:n=>n.applyMatrix3(Qd)},[Mo]:{transfer:ct,primaries:Na,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(ep),fromReference:n=>n.applyMatrix3(Qd).convertLinearToSRGB()}},O_=new Set([Ki,Pa]),rt={enabled:!0,_workingColorSpace:Ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!O_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ba[e].toReference,r=Ba[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ba[n].primaries},getTransfer:function(n){return n===Ji?La:Ba[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ba[e].luminanceCoefficients)}};function Pn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ln;class tp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ln===void 0&&(Ln=Fa("canvas")),Ln.width=e.width,Ln.height=e.height;const i=Ln.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ln}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Pn(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pn(t[i]/255)*255):t[i]=Pn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let F_=0;class Zr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Bc(r[s].image)):a.push(Bc(r[s]))}else a=Bc(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Bc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let B_=0;class vt extends Bi{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,i=pi,r=pi,a=bt,s=Ui,o=Gt,l=Oi,c=vt.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=ri(),this.name="",this.source=new Zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zs)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vt.DEFAULT_IMAGE=null,vt.DEFAULT_MAPPING=zs,vt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const s=e.elements,o=s[0],l=s[4],c=s[8],u=s[1],d=s[5],h=s[9],p=s[2],g=s[6],v=s[10];if(Math.abs(l-u)<.01&&Math.abs(c-p)<.01&&Math.abs(h-g)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+p)<.1&&Math.abs(h+g)<.1&&Math.abs(o+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const f=(o+1)/2,_=(d+1)/2,y=(v+1)/2,x=(l+u)/4,A=(c+p)/4,E=(h+g)/4;return f>_&&f>y?f<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(f),r=x/i,a=A/i):_>y?_<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(_),i=x/r,a=E/r):y<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(y),i=A/a,r=E/a),this.set(i,r,a,t),this}let m=Math.sqrt((g-h)*(g-h)+(c-p)*(c-p)+(u-l)*(u-l));return Math.abs(m)<.001&&(m=1),this.x=(g-h)/m,this.y=(c-p)/m,this.z=(u-l)/m,this.w=Math.acos((o+d+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ip extends Bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new vt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends ip{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class bo extends vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class z_ extends yi{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new bo(null,e,t,i),this.texture.isRenderTargetTexture=!0}}class zc extends vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class k_ extends yi{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new zc(null,e,t,i),this.texture.isRenderTargetTexture=!0}}class Zt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=a[s+0],p=a[s+1],g=a[s+2],v=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==h||c!==p||u!==g){let m=1-o;const f=l*h+c*p+u*g+d*v,_=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const A=Math.sqrt(y),E=Math.atan2(A,f*_);m=Math.sin(m*E)/A,o=Math.sin(o*E)/A}const x=o*_;if(l=l*m+h*x,c=c*m+p*x,u=u*m+g*x,d=d*m+v*x,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=a[s],h=a[s+1],p=a[s+2],g=a[s+3];return e[t]=o*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-o*p,e[t+2]=c*g+u*p+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(a/2),h=l(i/2),p=l(r/2),g=l(a/2);switch(s){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(s-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(s-r)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+r*c-a*l,this._y=r*u+s*l+a*o-i*c,this._z=a*u+s*c+i*l-r*o,this._w=s*u-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),u=2*(o*t-a*r),d=2*(a*i-s*t);return this.x=t+l*c+s*d-o*u,this.y=i+l*u+o*c-a*d,this.z=r+l*d+a*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kc=new P,rp=new Zt;class Wt{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,xi):xi.fromBufferAttribute(a,s),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),Eo.subVectors(this.max,za),In.subVectors(e.a,za),Nn.subVectors(e.b,za),Dn.subVectors(e.c,za),mr.subVectors(Nn,In),gr.subVectors(Dn,Nn),Jr.subVectors(In,Dn);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Jr.z,Jr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Jr.z,0,-Jr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Jr.y,Jr.x,0];return!Vc(t,In,Nn,Dn,Eo)||(t=[1,0,0,0,1,0,0,0,1],!Vc(t,In,Nn,Dn,Eo))?!1:(To.crossVectors(mr,gr),t=[To.x,To.y,To.z],Vc(t,In,Nn,Dn,Eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new P,new P,new P,new P,new P,new P,new P,new P],xi=new P,So=new Wt,In=new P,Nn=new P,Dn=new P,mr=new P,gr=new P,Jr=new P,za=new P,Eo=new P,To=new P,Kr=new P;function Vc(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){Kr.fromArray(n,a);const o=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),l=e.dot(Kr),c=t.dot(Kr),u=i.dot(Kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const V_=new Wt,ka=new P,Gc=new P;class Ot{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):V_.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const t=ka.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ka,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(Gc)),this.expandByPoint(ka.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new P,Hc=new P,Ao=new P,vr=new P,Wc=new P,Co=new P,jc=new P;class Un{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Hc.copy(e).add(t).multiplyScalar(.5),Ao.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(Hc);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Ao),o=vr.dot(this.direction),l=-vr.dot(Ao),c=vr.lengthSq(),u=Math.abs(1-s*s);let d,h,p,g;if(u>0)if(d=s*l-o,h=s*o-l,g=a*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,p=d*(d+s*h+2*o)+h*(s*d+h+2*l)+c}else h=a,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-s*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+c):(d=Math.max(0,-(s*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c);else h=s>0?-a:a,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Hc).addScaledVector(Ao,h),p}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);const i=Qi.dot(this.direction),r=Qi.dot(Qi)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(a=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,i,r,a){Wc.subVectors(t,e),Co.subVectors(i,e),jc.crossVectors(Wc,Co);let s=this.direction.dot(jc),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;vr.subVectors(this.origin,e);const l=o*this.direction.dot(Co.crossVectors(vr,Co));if(l<0)return null;const c=o*this.direction.dot(Wc.cross(vr));if(c<0||l+c>s)return null;const u=-o*vr.dot(jc);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(e,t,i,r,a,s,o,l,c,u,d,h,p,g,v,m){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,u,d,h,p,g,v,m)}set(e,t,i,r,a,s,o,l,c,u,d,h,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/On.setFromMatrixColumn(e,0).length(),a=1/On.setFromMatrixColumn(e,1).length(),s=1/On.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const h=s*u,p=s*d,g=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+p*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,v=c*d;t[0]=h+v*o,t[4]=g*o-p,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=p*o-g,t[6]=v+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,v=c*d;t[0]=h-v*o,t[4]=-s*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=s*u,t[9]=v-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,p=s*d,g=o*u,v=o*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-h*d,t[8]=g*d+p,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-v*d}else if(e.order==="XZY"){const h=s*l,p=s*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=s*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G_,e,H_)}lookAt(e,t,i){const r=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),_r.crossVectors(i,ni),_r.lengthSq()===0&&(Math.abs(i.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),_r.crossVectors(i,ni)),_r.normalize(),Ro.crossVectors(ni,_r),r[0]=_r.x,r[4]=Ro.x,r[8]=ni.x,r[1]=_r.y,r[5]=Ro.y,r[9]=ni.y,r[2]=_r.z,r[6]=Ro.z,r[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],_=i[3],y=i[7],x=i[11],A=i[15],E=r[0],S=r[4],R=r[8],w=r[12],M=r[1],I=r[5],N=r[9],F=r[13],B=r[2],H=r[6],G=r[10],q=r[14],W=r[3],ae=r[7],ve=r[11],K=r[15];return a[0]=s*E+o*M+l*B+c*W,a[4]=s*S+o*I+l*H+c*ae,a[8]=s*R+o*N+l*G+c*ve,a[12]=s*w+o*F+l*q+c*K,a[1]=u*E+d*M+h*B+p*W,a[5]=u*S+d*I+h*H+p*ae,a[9]=u*R+d*N+h*G+p*ve,a[13]=u*w+d*F+h*q+p*K,a[2]=g*E+v*M+m*B+f*W,a[6]=g*S+v*I+m*H+f*ae,a[10]=g*R+v*N+m*G+f*ve,a[14]=g*w+v*F+m*q+f*K,a[3]=_*E+y*M+x*B+A*W,a[7]=_*S+y*I+x*H+A*ae,a[11]=_*R+y*N+x*G+A*ve,a[15]=_*w+y*F+x*q+A*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+a*l*d-r*c*d-a*o*h+i*c*h+r*o*p-i*l*p)+v*(+t*l*p-t*c*h+a*s*h-r*s*p+r*c*u-a*l*u)+m*(+t*c*d-t*o*p-a*s*d+i*s*p+a*o*u-i*c*u)+f*(-r*o*u-t*l*d+t*o*h+r*s*d-i*s*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],_=d*m*c-v*h*c+v*l*p-o*m*p-d*l*f+o*h*f,y=g*h*c-u*m*c-g*l*p+s*m*p+u*l*f-s*h*f,x=u*v*c-g*d*c+g*o*p-s*v*p-u*o*f+s*d*f,A=g*d*l-u*v*l-g*o*h+s*v*h+u*o*m-s*d*m,E=t*_+i*y+r*x+a*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/E;return e[0]=_*S,e[1]=(v*h*a-d*m*a-v*r*p+i*m*p+d*r*f-i*h*f)*S,e[2]=(o*m*a-v*l*a+v*r*c-i*m*c-o*r*f+i*l*f)*S,e[3]=(d*l*a-o*h*a-d*r*c+i*h*c+o*r*p-i*l*p)*S,e[4]=y*S,e[5]=(u*m*a-g*h*a+g*r*p-t*m*p-u*r*f+t*h*f)*S,e[6]=(g*l*a-s*m*a-g*r*c+t*m*c+s*r*f-t*l*f)*S,e[7]=(s*h*a-u*l*a+u*r*c-t*h*c-s*r*p+t*l*p)*S,e[8]=x*S,e[9]=(g*d*a-u*v*a-g*i*p+t*v*p+u*i*f-t*d*f)*S,e[10]=(s*v*a-g*o*a+g*i*c-t*v*c-s*i*f+t*o*f)*S,e[11]=(u*o*a-s*d*a-u*i*c+t*d*c+s*i*p-t*o*p)*S,e[12]=A*S,e[13]=(u*v*r-g*d*r+g*i*h-t*v*h-u*i*m+t*d*m)*S,e[14]=(g*o*r-s*v*r-g*i*l+t*v*l+s*i*m-t*o*m)*S,e[15]=(s*d*r-u*o*r+u*i*l-t*d*l-s*i*h+t*o*h)*S,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*s,0,c*l-r*o,u*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,d=o+o,h=a*c,p=a*u,g=a*d,v=s*u,m=s*d,f=o*d,_=l*c,y=l*u,x=l*d,A=i.x,E=i.y,S=i.z;return r[0]=(1-(v+f))*A,r[1]=(p+x)*A,r[2]=(g-y)*A,r[3]=0,r[4]=(p-x)*E,r[5]=(1-(h+f))*E,r[6]=(m+_)*E,r[7]=0,r[8]=(g+y)*S,r[9]=(m-_)*S,r[10]=(1-(h+v))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=On.set(r[0],r[1],r[2]).length();const s=On.set(r[4],r[5],r[6]).length(),o=On.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],wi.copy(this);const l=1/a,c=1/s,u=1/o;return wi.elements[0]*=l,wi.elements[1]*=l,wi.elements[2]*=l,wi.elements[4]*=c,wi.elements[5]*=c,wi.elements[6]*=c,wi.elements[8]*=u,wi.elements[9]*=u,wi.elements[10]*=u,t.setFromRotationMatrix(wi),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=Fi){const l=this.elements,c=2*a/(t-e),u=2*a/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(o===Fi)p=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===Ua)p=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=Fi){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(s-a),h=(t+e)*c,p=(i+r)*u;let g,v;if(o===Fi)g=(s+a)*d,v=-2*d;else if(o===Ua)g=a*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const On=new P,wi=new Oe,G_=new P(0,0,0),H_=new P(1,1,1),_r=new P,Ro=new P,ni=new P,np=new Oe,ap=new Zt;class si{constructor(e=0,t=0,i=0,r=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(np,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ap.setFromEuler(this),this.setFromQuaternion(ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class Po{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W_=0;const sp=new P,Fn=new Zt,er=new Oe,Lo=new P,Va=new P,j_=new P,X_=new Zt,op=new P(1,0,0),lp=new P(0,1,0),cp=new P(0,0,1),up={type:"added"},q_={type:"removed"},Bn={type:"childadded",child:null},Xc={type:"childremoved",child:null};class Qe extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const e=new P,t=new si,i=new Zt,r=new P(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Xe}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fn.setFromAxisAngle(e,t),this.quaternion.multiply(Fn),this}rotateOnWorldAxis(e,t){return Fn.setFromAxisAngle(e,t),this.quaternion.premultiply(Fn),this}rotateX(e){return this.rotateOnAxis(op,e)}rotateY(e){return this.rotateOnAxis(lp,e)}rotateZ(e){return this.rotateOnAxis(cp,e)}translateOnAxis(e,t){return sp.copy(e).applyQuaternion(this.quaternion),this.position.add(sp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(op,e)}translateY(e){return this.translateOnAxis(lp,e)}translateZ(e){return this.translateOnAxis(cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Lo.copy(e):Lo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(Va,Lo,this.up):er.lookAt(Lo,Va,this.up),this.quaternion.setFromRotationMatrix(er),r&&(er.extractRotation(r.matrixWorld),Fn.setFromRotationMatrix(er),this.quaternion.premultiply(Fn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(up),Bn.child=e,this.dispatchEvent(Bn),Bn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q_),Xc.child=e,this.dispatchEvent(Xc),Xc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(up),Bn.child=e,this.dispatchEvent(Bn),Bn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,j_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,X_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),p=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qe.DEFAULT_UP=new P(0,1,0),Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0,Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new P,tr=new P,qc=new P,ir=new P,zn=new P,kn=new P,hp=new P,Yc=new P,Zc=new P,Jc=new P;class oi{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Mi.subVectors(e,t),r.cross(Mi);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Mi.subVectors(r,t),tr.subVectors(i,t),qc.subVectors(e,t);const s=Mi.dot(Mi),o=Mi.dot(tr),l=Mi.dot(qc),c=tr.dot(tr),u=tr.dot(qc),d=s*c-o*o;if(d===0)return a.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,g=(s*u-o*l)*h;return a.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ir.x),l.addScaledVector(s,ir.y),l.addScaledVector(o,ir.z),l)}static isFrontFacing(e,t,i,r){return Mi.subVectors(i,t),tr.subVectors(e,t),Mi.cross(tr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),Mi.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return oi.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;zn.subVectors(r,i),kn.subVectors(a,i),Yc.subVectors(e,i);const l=zn.dot(Yc),c=kn.dot(Yc);if(l<=0&&c<=0)return t.copy(i);Zc.subVectors(e,r);const u=zn.dot(Zc),d=kn.dot(Zc);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(zn,s);Jc.subVectors(e,a);const p=zn.dot(Jc),g=kn.dot(Jc);if(g>=0&&p<=g)return t.copy(a);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(kn,o);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return hp.subVectors(a,r),o=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(hp,o);const f=1/(m+v+h);return s=v*f,o=h*f,t.copy(i).addScaledVector(zn,s).addScaledVector(kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},Io={h:0,s:0,l:0};function Kc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=Dc(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Kc(s,a,e+1/3),this.g=Kc(s,a,e),this.b=Kc(s,a,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=ii){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ii){const i=dp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Fc(e.r),this.g=Fc(e.g),this.b=Fc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return rt.fromWorkingColorSpace(Ft.copy(this),e),Math.round(mt(Ft.r*255,0,255))*65536+Math.round(mt(Ft.g*255,0,255))*256+Math.round(mt(Ft.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Ft.copy(this),t);const i=Ft.r,r=Ft.g,a=Ft.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=u<=.5?d/(s+o):d/(2-s-o),s){case i:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-i)/d+2;break;case a:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=ii){rt.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,r=Ft.b;return e!==ii?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(Io);const i=Oa(yr.h,Io.h,t),r=Oa(yr.s,Io.s,t),a=Oa(yr.l,Io.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new ge;ge.NAMES=dp;let Y_=0;class Bt extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Vr,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Os,this.blendDst=Fs,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Os&&(i.blendSrc=this.blendSrc),this.blendDst!==Fs&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ma&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rr extends Bt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nr=Z_();function Z_(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const a=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,a[l]=c|u}for(let l=1024;l<2048;++l)a[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:a,exponentTable:s,offsetTable:o}}function Jt(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=mt(n,-65504,65504),nr.floatView[0]=n;const e=nr.uint32View[0],t=e>>23&511;return nr.baseTable[t]+((e&8388607)>>nr.shiftTable[t])}function Ga(n){const e=n>>10;return nr.uint32View[0]=nr.mantissaTable[nr.offsetTable[e]+(n&1023)]+nr.exponentTable[e],nr.floatView[0]}const J_={toHalfFloat:Jt,fromHalfFloat:Ga},St=new P,No=new J;class ot{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Da,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Rn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ht(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ht(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ht(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ht(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ht(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),r=je(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),r=je(r,this.array),a=je(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Da&&(e.usage=this.usage),e}}class K_ extends ot{constructor(e,t,i){super(new Int8Array(e),t,i)}}class $_ extends ot{constructor(e,t,i){super(new Uint8Array(e),t,i)}}class Q_ extends ot{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}}class ey extends ot{constructor(e,t,i){super(new Int16Array(e),t,i)}}class $c extends ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ty extends ot{constructor(e,t,i){super(new Int32Array(e),t,i)}}class Qc extends ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class iy extends ot{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=Ga(this.array[e*this.itemSize]);return this.normalized&&(t=Ht(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=Jt(t),this}getY(e){let t=Ga(this.array[e*this.itemSize+1]);return this.normalized&&(t=Ht(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=Jt(t),this}getZ(e){let t=Ga(this.array[e*this.itemSize+2]);return this.normalized&&(t=Ht(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=Jt(t),this}getW(e){let t=Ga(this.array[e*this.itemSize+3]);return this.normalized&&(t=Ht(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=Jt(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array)),this.array[e+0]=Jt(t),this.array[e+1]=Jt(i),this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),r=je(r,this.array)),this.array[e+0]=Jt(t),this.array[e+1]=Jt(i),this.array[e+2]=Jt(r),this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),r=je(r,this.array),a=je(a,this.array)),this.array[e+0]=Jt(t),this.array[e+1]=Jt(i),this.array[e+2]=Jt(r),this.array[e+3]=Jt(a),this}}class Ee extends ot{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ry=0;const fi=new Oe,eu=new Qe,Vn=new P,ai=new Wt,Ha=new Wt,Lt=new P;class Ze extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jd(e)?Qc:$c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Xe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,i){return fi.makeTranslation(e,t,i),this.applyMatrix4(fi),this}scale(e,t,i){return fi.makeScale(e,t,i),this.applyMatrix4(fi),this}lookAt(e){return eu.lookAt(e),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vn).negate(),this.translate(Vn.x,Vn.y,Vn.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ee(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];ai.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Ha.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(ai.min,Ha.min),ai.expandByPoint(Lt),Lt.addVectors(ai.max,Ha.max),ai.expandByPoint(Lt)):(ai.expandByPoint(Ha.min),ai.expandByPoint(Ha.max))}ai.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Lt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Lt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Lt.fromBufferAttribute(o,c),l&&(Vn.fromBufferAttribute(e,c),Lt.add(Vn)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new P,l[R]=new P;const c=new P,u=new P,d=new P,h=new J,p=new J,g=new J,v=new P,m=new P;function f(R,w,M){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),h.fromBufferAttribute(a,R),p.fromBufferAttribute(a,w),g.fromBufferAttribute(a,M),u.sub(c),d.sub(c),p.sub(h),g.sub(h);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),o[R].add(v),o[w].add(v),o[M].add(v),l[R].add(m),l[w].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,w=_.length;R<w;++R){const M=_[R],I=M.start,N=M.count;for(let F=I,B=I+N;F<B;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new P,x=new P,A=new P,E=new P;function S(R){A.fromBufferAttribute(r,R),E.copy(A);const w=o[R];y.copy(w),y.sub(A.multiplyScalar(A.dot(w))).normalize(),x.crossVectors(E,w);const M=x.dot(l[R])<0?-1:1;s.setXYZW(R,y.x,y.y,y.z,M)}for(let R=0,w=_.length;R<w;++R){const M=_[R],I=M.start,N=M.count;for(let F=I,B=I+N;F<B;F+=3)S(e.getX(F+0)),S(e.getX(F+1)),S(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new P,a=new P,s=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new ot(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ze,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],d=a[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pp=new Oe,$r=new Un,Do=new Ot,fp=new P,Gn=new P,Hn=new P,Wn=new P,tu=new P,Uo=new P,Oo=new J,Fo=new J,Bo=new J,mp=new P,gp=new P,vp=new P,zo=new P,ko=new P;class dt extends Qe{constructor(e=new Ze,t=new rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Uo.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],d=a[l];u!==0&&(tu.fromBufferAttribute(d,e),s?Uo.addScaledVector(tu,u):Uo.addScaledVector(tu.sub(t),u))}t.add(Uo)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(a),$r.copy(e.ray).recast(e.near),!(Do.containsPoint($r.origin)===!1&&($r.intersectSphere(Do,fp)===null||$r.origin.distanceToSquared(fp)>(e.far-e.near)**2))&&(pp.copy(a).invert(),$r.copy(e.ray).applyMatrix4(pp),!(i.boundingBox!==null&&$r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=s[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,A=y;x<A;x+=3){const E=o.getX(x),S=o.getX(x+1),R=o.getX(x+2);r=Vo(this,f,e,i,c,u,d,E,S,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const _=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);r=Vo(this,s,e,i,c,u,d,_,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=s[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,A=y;x<A;x+=3){const E=x,S=x+1,R=x+2;r=Vo(this,f,e,i,c,u,d,E,S,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const _=m,y=m+1,x=m+2;r=Vo(this,s,e,i,c,u,d,_,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ny(n,e,t,i,r,a,s,o){let l;if(e.side===Vt?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===Xi,o),l===null)return null;ko.copy(o),ko.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ko);return c<t.near||c>t.far?null:{distance:c,point:ko.clone(),object:n}}function Vo(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,Gn),n.getVertexPosition(l,Hn),n.getVertexPosition(c,Wn);const u=ny(n,e,t,i,Gn,Hn,Wn,zo);if(u){r&&(Oo.fromBufferAttribute(r,o),Fo.fromBufferAttribute(r,l),Bo.fromBufferAttribute(r,c),u.uv=oi.getInterpolation(zo,Gn,Hn,Wn,Oo,Fo,Bo,new J)),a&&(Oo.fromBufferAttribute(a,o),Fo.fromBufferAttribute(a,l),Bo.fromBufferAttribute(a,c),u.uv1=oi.getInterpolation(zo,Gn,Hn,Wn,Oo,Fo,Bo,new J)),s&&(mp.fromBufferAttribute(s,o),gp.fromBufferAttribute(s,l),vp.fromBufferAttribute(s,c),u.normal=oi.getInterpolation(zo,Gn,Hn,Wn,mp,gp,vp,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};oi.getNormal(Gn,Hn,Wn,d.normal),u.face=d}return u}class _n extends Ze{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(d,2));function g(v,m,f,_,y,x,A,E,S,R,w){const M=x/S,I=A/R,N=x/2,F=A/2,B=E/2,H=S+1,G=R+1;let q=0,W=0;const ae=new P;for(let ve=0;ve<G;ve++){const K=ve*I-F;for(let Te=0;Te<H;Te++){const We=Te*M-N;ae[v]=We*_,ae[m]=K*y,ae[f]=B,c.push(ae.x,ae.y,ae.z),ae[v]=0,ae[m]=0,ae[f]=E>0?1:-1,u.push(ae.x,ae.y,ae.z),d.push(Te/S),d.push(1-ve/R),q+=1}}for(let ve=0;ve<R;ve++)for(let K=0;K<S;K++){const Te=h+K+H*ve,We=h+K+H*(ve+1),j=h+(K+1)+H*(ve+1),ie=h+(K+1)+H*ve;l.push(Te,We,ie),l.push(We,j,ie),W+=6}o.addGroup(p,W,w),p+=W,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jn(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=jn(n[t]);for(const r in i)e[r]=i[r]}return e}function ay(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _p(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const yp={clone:jn,merge:jt};var sy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Bt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sy,this.fragmentShader=oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jn(e.uniforms),this.uniformsGroups=ay(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Wa extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new P,xp=new J,wp=new J;class Et extends Wa{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=An*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return An*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,xp,wp),t.subVectors(wp,xp)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xn=-90,qn=1;class Mp extends Qe{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Et(Xn,qn,e,t);r.layers=this.layers,this.add(r);const a=new Et(Xn,qn,e,t);a.layers=this.layers,this.add(a);const s=new Et(Xn,qn,e,t);s.layers=this.layers,this.add(s);const o=new Et(Xn,qn,e,t);o.layers=this.layers,this.add(o);const l=new Et(Xn,qn,e,t);l.layers=this.layers,this.add(l);const c=new Et(Xn,qn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ja extends vt{constructor(e,t,i,r,a,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Yi,super(e,t,i,r,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bp extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ja(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _n(5,5,5),a=new bi({name:"CubemapFromEquirect",uniforms:jn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:qi});a.uniforms.tEquirect.value=t;const s=new dt(r,a),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=bt),new Mp(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}const iu=new P,ly=new P,cy=new Xe;class wr{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=iu.subVectors(i,t).cross(ly.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(iu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cy.getNormalMatrix(e),r=this.coplanarPoint(iu).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new Ot,Go=new P;class Xa{constructor(e=new wr,t=new wr,i=new wr,r=new wr,a=new wr,s=new wr){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fi){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],g=r[9],v=r[10],m=r[11],f=r[12],_=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-a,h-c,m-p,x-f).normalize(),i[1].setComponents(l+a,h+c,m+p,x+f).normalize(),i[2].setComponents(l+s,h+u,m+g,x+_).normalize(),i[3].setComponents(l-s,h-u,m-g,x-_).normalize(),i[4].setComponents(l-o,h-d,m-v,x-y).normalize(),t===Fi)i[5].setComponents(l+o,h+d,m+v,x+y).normalize();else if(t===Ua)i[5].setComponents(o,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){return Qr.center.set(0,0,0),Qr.radius=.7071067811865476,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Go.x=r.normal.x>0?e.max.x:e.min.x,Go.y=r.normal.y>0?e.max.y:e.min.y,Go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sp(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function uy(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,o),d.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let p=0,g=h.length;p<g;p++){const v=h[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}class Ar extends Ze{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const _=f*h-s;for(let y=0;y<c;y++){const x=y*d-a;g.push(x,-_,0),v.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){const y=_+c*f,x=_+c*(f+1),A=_+1+c*(f+1),E=_+1+c*f;p.push(y,x,E),p.push(x,A,E)}this.setIndex(p),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(v,3)),this.setAttribute("uv",new Ee(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.widthSegments,e.heightSegments)}}var hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,my=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,My=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,by=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ey=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Oy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,By=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ky=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$y=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ix=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ax=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ux=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,px=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ew=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_w=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ww=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ew=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Aw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Iw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ow=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:hy,alphahash_pars_fragment:dy,alphamap_fragment:py,alphamap_pars_fragment:fy,alphatest_fragment:my,alphatest_pars_fragment:gy,aomap_fragment:vy,aomap_pars_fragment:_y,batching_pars_vertex:yy,batching_vertex:xy,begin_vertex:wy,beginnormal_vertex:My,bsdfs:by,iridescence_fragment:Sy,bumpmap_pars_fragment:Ey,clipping_planes_fragment:Ty,clipping_planes_pars_fragment:Ay,clipping_planes_pars_vertex:Cy,clipping_planes_vertex:Ry,color_fragment:Py,color_pars_fragment:Ly,color_pars_vertex:Iy,color_vertex:Ny,common:Dy,cube_uv_reflection_fragment:Uy,defaultnormal_vertex:Oy,displacementmap_pars_vertex:Fy,displacementmap_vertex:By,emissivemap_fragment:zy,emissivemap_pars_fragment:ky,colorspace_fragment:Vy,colorspace_pars_fragment:Gy,envmap_fragment:Hy,envmap_common_pars_fragment:Wy,envmap_pars_fragment:jy,envmap_pars_vertex:Xy,envmap_physical_pars_fragment:rx,envmap_vertex:qy,fog_vertex:Yy,fog_pars_vertex:Zy,fog_fragment:Jy,fog_pars_fragment:Ky,gradientmap_pars_fragment:$y,lightmap_pars_fragment:Qy,lights_lambert_fragment:ex,lights_lambert_pars_fragment:tx,lights_pars_begin:ix,lights_toon_fragment:nx,lights_toon_pars_fragment:ax,lights_phong_fragment:sx,lights_phong_pars_fragment:ox,lights_physical_fragment:lx,lights_physical_pars_fragment:cx,lights_fragment_begin:ux,lights_fragment_maps:hx,lights_fragment_end:dx,logdepthbuf_fragment:px,logdepthbuf_pars_fragment:fx,logdepthbuf_pars_vertex:mx,logdepthbuf_vertex:gx,map_fragment:vx,map_pars_fragment:_x,map_particle_fragment:yx,map_particle_pars_fragment:xx,metalnessmap_fragment:wx,metalnessmap_pars_fragment:Mx,morphinstance_vertex:bx,morphcolor_vertex:Sx,morphnormal_vertex:Ex,morphtarget_pars_vertex:Tx,morphtarget_vertex:Ax,normal_fragment_begin:Cx,normal_fragment_maps:Rx,normal_pars_fragment:Px,normal_pars_vertex:Lx,normal_vertex:Ix,normalmap_pars_fragment:Nx,clearcoat_normal_fragment_begin:Dx,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:Ox,iridescence_pars_fragment:Fx,opaque_fragment:Bx,packing:zx,premultiplied_alpha_fragment:kx,project_vertex:Vx,dithering_fragment:Gx,dithering_pars_fragment:Hx,roughnessmap_fragment:Wx,roughnessmap_pars_fragment:jx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:qx,shadowmap_vertex:Yx,shadowmask_pars_fragment:Zx,skinbase_vertex:Jx,skinning_pars_vertex:Kx,skinning_vertex:$x,skinnormal_vertex:Qx,specularmap_fragment:ew,specularmap_pars_fragment:tw,tonemapping_fragment:iw,tonemapping_pars_fragment:rw,transmission_fragment:nw,transmission_pars_fragment:aw,uv_pars_fragment:sw,uv_pars_vertex:ow,uv_vertex:lw,worldpos_vertex:cw,background_vert:uw,background_frag:hw,backgroundCube_vert:dw,backgroundCube_frag:pw,cube_vert:fw,cube_frag:mw,depth_vert:gw,depth_frag:vw,distanceRGBA_vert:_w,distanceRGBA_frag:yw,equirect_vert:xw,equirect_frag:ww,linedashed_vert:Mw,linedashed_frag:bw,meshbasic_vert:Sw,meshbasic_frag:Ew,meshlambert_vert:Tw,meshlambert_frag:Aw,meshmatcap_vert:Cw,meshmatcap_frag:Rw,meshnormal_vert:Pw,meshnormal_frag:Lw,meshphong_vert:Iw,meshphong_frag:Nw,meshphysical_vert:Dw,meshphysical_frag:Uw,meshtoon_vert:Ow,meshtoon_frag:Fw,points_vert:Bw,points_frag:zw,shadow_vert:kw,shadow_frag:Vw,sprite_vert:Gw,sprite_frag:Hw},pe={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Si={basic:{uniforms:jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ge(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:jt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:jt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ge(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:jt([pe.points,pe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:jt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:jt([pe.common,pe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:jt([pe.sprite,pe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:jt([pe.common,pe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:jt([pe.lights,pe.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Si.physical={uniforms:jt([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Ho={r:0,b:0,g:0},en=new si,Ww=new Oe;function jw(n,e,t,i,r,a,s){const o=new ge(0);let l=a===!0?0:1,c,u,d=null,h=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function v(_){let y=!1;const x=g(_);x===null?f(o,l):x&&x.isColor&&(f(x,1),y=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===bn)?(u===void 0&&(u=new dt(new _n(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:jn(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),en.copy(y.backgroundRotation),en.x*=-1,en.y*=-1,en.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(en.y*=-1,en.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ww.makeRotationFromEuler(en)),u.material.toneMapped=rt.getTransfer(x.colorSpace)!==ct,(d!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new dt(new Ar(2,2),new bi({name:"BackgroundMaterial",uniforms:jn(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=rt.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,y){_.getRGB(Ho,_p(n)),i.buffers.color.setClear(Ho.r,Ho.g,Ho.b,y,s)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(o,l)},render:v,addToRenderList:m}}function Xw(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let a=r,s=!1;function o(M,I,N,F,B){let H=!1;const G=d(F,N,I);a!==G&&(a=G,c(a.object)),H=p(M,F,N,B),H&&g(M,F,N,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,x(M,I,N,F),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,I,N){const F=N.wireframe===!0;let B=i[M.id];B===void 0&&(B={},i[M.id]=B);let H=B[I.id];H===void 0&&(H={},B[I.id]=H);let G=H[F];return G===void 0&&(G=h(l()),H[F]=G),G}function h(M){const I=[],N=[],F=[];for(let B=0;B<t;B++)I[B]=0,N[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,I,N,F){const B=a.attributes,H=I.attributes;let G=0;const q=N.getAttributes();for(const W in q)if(q[W].location>=0){const ae=B[W];let ve=H[W];if(ve===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),ae===void 0||ae.attribute!==ve||ve&&ae.data!==ve.data)return!0;G++}return a.attributesNum!==G||a.index!==F}function g(M,I,N,F){const B={},H=I.attributes;let G=0;const q=N.getAttributes();for(const W in q)if(q[W].location>=0){let ae=H[W];ae===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const ve={};ve.attribute=ae,ae&&ae.data&&(ve.data=ae.data),B[W]=ve,G++}a.attributes=B,a.attributesNum=G,a.index=F}function v(){const M=a.newAttributes;for(let I=0,N=M.length;I<N;I++)M[I]=0}function m(M){f(M,0)}function f(M,I){const N=a.newAttributes,F=a.enabledAttributes,B=a.attributeDivisors;N[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),B[M]!==I&&(n.vertexAttribDivisor(M,I),B[M]=I)}function _(){const M=a.newAttributes,I=a.enabledAttributes;for(let N=0,F=I.length;N<F;N++)I[N]!==M[N]&&(n.disableVertexAttribArray(N),I[N]=0)}function y(M,I,N,F,B,H,G){G===!0?n.vertexAttribIPointer(M,I,N,B,H):n.vertexAttribPointer(M,I,N,F,B,H)}function x(M,I,N,F){v();const B=F.attributes,H=N.getAttributes(),G=I.defaultAttributeValues;for(const q in H){const W=H[q];if(W.location>=0){let ae=B[q];if(ae===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){const ve=ae.normalized,K=ae.itemSize,Te=e.get(ae);if(Te===void 0)continue;const We=Te.buffer,j=Te.type,ie=Te.bytesPerElement,Q=j===n.INT||j===n.UNSIGNED_INT||ae.gpuType===ks;if(ae.isInterleavedBufferAttribute){const se=ae.data,Re=se.stride,Pe=ae.offset;if(se.isInstancedInterleavedBuffer){for(let De=0;De<W.locationSize;De++)f(W.location+De,se.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let De=0;De<W.locationSize;De++)m(W.location+De);n.bindBuffer(n.ARRAY_BUFFER,We);for(let De=0;De<W.locationSize;De++)y(W.location+De,K/W.locationSize,j,ve,Re*ie,(Pe+K/W.locationSize*De)*ie,Q)}else{if(ae.isInstancedBufferAttribute){for(let se=0;se<W.locationSize;se++)f(W.location+se,ae.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let se=0;se<W.locationSize;se++)m(W.location+se);n.bindBuffer(n.ARRAY_BUFFER,We);for(let se=0;se<W.locationSize;se++)y(W.location+se,K/W.locationSize,j,ve,K*ie,K/W.locationSize*se*ie,Q)}}else if(G!==void 0){const ve=G[q];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(W.location,ve);break;case 3:n.vertexAttrib3fv(W.location,ve);break;case 4:n.vertexAttrib4fv(W.location,ve);break;default:n.vertexAttrib1fv(W.location,ve)}}}}_()}function A(){R();for(const M in i){const I=i[M];for(const N in I){const F=I[N];for(const B in F)u(F[B].object),delete F[B];delete I[N]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const N in I){const F=I[N];for(const B in F)u(F[B].object),delete F[B];delete I[N]}delete i[M.id]}function S(M){for(const I in i){const N=i[I];if(N[M.id]===void 0)continue;const F=N[M.id];for(const B in F)u(F[B].object),delete F[B];delete N[M.id]}}function R(){w(),s=!0,a!==r&&(a=r,c(a.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:S,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function qw(n,e,t){let i;function r(c){i=c}function a(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function s(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];t.update(h,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)s(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];for(let v=0;v<h.length;v++)t.update(g,i,h[v])}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Yw(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(E){return!(E!==Gt&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const S=E===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Oi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Yt&&!S)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:x,maxSamples:A}}function Zw(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new wr,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||a&&!m)a?u(null):c();else{const _=a?0:i,y=_*4;let x=f.clippingState||null;l.value=x,x=u(g,h,y,p);for(let A=0;A!==y;++A)x[A]=t[A];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=p;y!==v;++y,x+=4)s.copy(d[y]).applyMatrix4(_,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Jw(n){let e=new WeakMap;function t(s,o){return o===va?s.mapping=Yi:o===_a&&(s.mapping=pr),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===va||o===_a)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new bp(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Wo extends Wa{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yn=4,Ep=[.125,.215,.35,.446,.526,.582],tn=20,ru=new Wo,Tp=new ge;let nu=null,au=0,su=0,ou=!1;const rn=(1+Math.sqrt(5))/2,Zn=1/rn,Ap=[new P(-rn,Zn,0),new P(rn,Zn,0),new P(-Zn,0,rn),new P(Zn,0,rn),new P(0,rn,-Zn),new P(0,rn,Zn),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class lu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){nu=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nu,au,su),this._renderer.xr.enabled=ou,e.scissorTest=!1,jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nu=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:Tn,format:Gt,colorSpace:Ki,depthBuffer:!1},r=Cp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cp(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kw(a)),this._blurMaterial=$w(a,e,t)}return r}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,ru)}_sceneToCubeUV(e,t,i,r){const a=new Et(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(Tp),l.toneMapping=Di,l.autoClear=!1;const d=new rr({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),h=new dt(new _n,d);let p=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,p=!0):(d.color.copy(Tp),p=!0);for(let v=0;v<6;v++){const m=v%3;m===0?(a.up.set(0,s[v],0),a.lookAt(o[v],0,0)):m===1?(a.up.set(0,0,s[v]),a.lookAt(0,o[v],0)):(a.up.set(0,s[v],0),a.lookAt(0,0,o[v]));const f=this._cubeSize;jo(r,m*f,v>2?f:0,f,f),l.setRenderTarget(r),p&&l.render(h,a),l.render(e,a)}h.geometry.dispose(),h.material.dispose(),l.toneMapping=u,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Yi||e.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rp());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new dt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;jo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,ru)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Ap[(r-a-1)%Ap.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new dt(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*tn-1),v=a/g,m=isFinite(a)?1+Math.floor(u*v):tn;m>tn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tn}`);const f=[];let _=0;for(let S=0;S<tn;++S){const R=S/v,w=Math.exp(-R*R/2);f.push(w),S===0?_+=w:S<m&&(_+=2*w)}for(let S=0;S<f.length;S++)f[S]=f[S]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const x=this._sizeLods[r],A=3*x*(r>y-Yn?r-y+Yn:0),E=4*(this._cubeSize-x);jo(t,A,E,3*x,2*x),l.setRenderTarget(t),l.render(d,ru)}}function Kw(n){const e=[],t=[],i=[];let r=n;const a=n-Yn+1+Ep.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>n-Yn?l=Ep[s-n+Yn-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,v=3,m=2,f=1,_=new Float32Array(v*g*p),y=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let E=0;E<p;E++){const S=E%3*2/3-1,R=E>2?0:-1,w=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];_.set(w,v*g*E),y.set(h,m*g*E);const M=[E,E,E,E,E,E];x.set(M,f*g*E)}const A=new Ze;A.setAttribute("position",new ot(_,v)),A.setAttribute("uv",new ot(y,m)),A.setAttribute("faceIndex",new ot(x,f)),e.push(A),r>Yn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Cp(n,e,t){const i=new yi(n,e,t);return i.texture.mapping=bn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $w(n,e,t){const i=new Float32Array(tn),r=new P(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:tn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Rp(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Pp(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qw(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===va||l===_a,u=l===Yi||l===pr;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new lu(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new lu(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function e1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Rn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function t1(n,e,t,i){const r={},a=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}h.removeEventListener("dispose",s),delete r[h.id];const p=a.get(h);p&&(e.remove(p),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let y=0,x=_.length;y<x;y+=3){const A=_[y+0],E=_[y+1],S=_[y+2];h.push(A,E,E,S,S,A)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const A=y+0,E=y+1,S=y+2;h.push(A,E,E,S,S,A)}}else return;const m=new(Jd(h)?Qc:$c)(h,1);m.version=v;const f=a.get(d);f&&e.remove(f),a.set(d,m)}function u(d){const h=a.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function i1(n,e,t){let i;function r(h){i=h}let a,s;function o(h){a=h.type,s=h.bytesPerElement}function l(h,p){n.drawElements(i,p,a,h*s),t.update(p,i,1)}function c(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,a,h*s,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,h,0,g);let v=0;for(let m=0;m<g;m++)v+=p[m];t.update(v,i,1)}function d(h,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/s,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,h,0,v,0,g);let f=0;for(let _=0;_<g;_++)f+=p[_];for(let _=0;_<v.length;_++)t.update(f,i,v[_])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function r1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function n1(n,e,t){const i=new WeakMap,r=new nt;function a(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let p=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",p)};h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let A=o.attributes.position.count*x,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const S=new Float32Array(A*E*4*d),R=new bo(S,A,E,d);R.type=Yt,R.needsUpdate=!0;const w=x*4;for(let M=0;M<d;M++){const I=f[M],N=_[M],F=y[M],B=A*E*4*M;for(let H=0;H<I.count;H++){const G=H*w;g===!0&&(r.fromBufferAttribute(I,H),S[B+G+0]=r.x,S[B+G+1]=r.y,S[B+G+2]=r.z,S[B+G+3]=0),v===!0&&(r.fromBufferAttribute(N,H),S[B+G+4]=r.x,S[B+G+5]=r.y,S[B+G+6]=r.z,S[B+G+7]=0),m===!0&&(r.fromBufferAttribute(F,H),S[B+G+8]=r.x,S[B+G+9]=r.y,S[B+G+10]=r.z,S[B+G+11]=F.itemSize===4?r.w:1)}}h={count:d,texture:R,size:new J(A,E)},i.set(o,h),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:a}}function a1(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class uu extends vt{constructor(e,t,i,r,a,s,o,l,c,u=Hr){if(u!==Hr&&u!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hr&&(i=Zi),i===void 0&&u===Wr&&(i=Gr),super(null,r,a,s,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Lp=new vt,Ip=new uu(1,1),Np=new bo,Dp=new zc,Up=new ja,Op=[],Fp=[],Bp=new Float32Array(16),zp=new Float32Array(9),kp=new Float32Array(4);function Jn(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Op[r];if(a===void 0&&(a=new Float32Array(r),Op[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xo(n,e){let t=Fp[e];t===void 0&&(t=new Int32Array(e),Fp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function s1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function o1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function l1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function c1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function u1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;kp.set(i),n.uniformMatrix2fv(this.addr,!1,kp),Ct(t,i)}}function h1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;zp.set(i),n.uniformMatrix3fv(this.addr,!1,zp),Ct(t,i)}}function d1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;Bp.set(i),n.uniformMatrix4fv(this.addr,!1,Bp),Ct(t,i)}}function p1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function f1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function m1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function g1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function v1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function y1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function x1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function w1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(Ip.compareFunction=Ic,a=Ip):a=Lp,t.setTexture2D(e||a,r)}function M1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Dp,r)}function b1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Up,r)}function S1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Np,r)}function E1(n){switch(n){case 5126:return s1;case 35664:return o1;case 35665:return l1;case 35666:return c1;case 35674:return u1;case 35675:return h1;case 35676:return d1;case 5124:case 35670:return p1;case 35667:case 35671:return f1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return v1;case 36294:return _1;case 36295:return y1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return S1}}function T1(n,e){n.uniform1fv(this.addr,e)}function A1(n,e){const t=Jn(e,this.size,2);n.uniform2fv(this.addr,t)}function C1(n,e){const t=Jn(e,this.size,3);n.uniform3fv(this.addr,t)}function R1(n,e){const t=Jn(e,this.size,4);n.uniform4fv(this.addr,t)}function P1(n,e){const t=Jn(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function L1(n,e){const t=Jn(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function I1(n,e){const t=Jn(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function N1(n,e){n.uniform1iv(this.addr,e)}function D1(n,e){n.uniform2iv(this.addr,e)}function U1(n,e){n.uniform3iv(this.addr,e)}function O1(n,e){n.uniform4iv(this.addr,e)}function F1(n,e){n.uniform1uiv(this.addr,e)}function B1(n,e){n.uniform2uiv(this.addr,e)}function z1(n,e){n.uniform3uiv(this.addr,e)}function k1(n,e){n.uniform4uiv(this.addr,e)}function V1(n,e,t){const i=this.cache,r=e.length,a=Xo(t,r);At(i,a)||(n.uniform1iv(this.addr,a),Ct(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Lp,a[s])}function G1(n,e,t){const i=this.cache,r=e.length,a=Xo(t,r);At(i,a)||(n.uniform1iv(this.addr,a),Ct(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Dp,a[s])}function H1(n,e,t){const i=this.cache,r=e.length,a=Xo(t,r);At(i,a)||(n.uniform1iv(this.addr,a),Ct(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Up,a[s])}function W1(n,e,t){const i=this.cache,r=e.length,a=Xo(t,r);At(i,a)||(n.uniform1iv(this.addr,a),Ct(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Np,a[s])}function j1(n){switch(n){case 5126:return T1;case 35664:return A1;case 35665:return C1;case 35666:return R1;case 35674:return P1;case 35675:return L1;case 35676:return I1;case 5124:case 35670:return N1;case 35667:case 35671:return D1;case 35668:case 35672:return U1;case 35669:case 35673:return O1;case 5125:return F1;case 36294:return B1;case 36295:return z1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return W1}}class X1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=E1(t.type)}}class q1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=j1(t.type)}}class Y1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const hu=/(\w+)(\])?(\[|\.)?/g;function Vp(n,e){n.seq.push(e),n.map[e.id]=e}function Z1(n,e,t){const i=n.name,r=i.length;for(hu.lastIndex=0;;){const a=hu.exec(i),s=hu.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Vp(t,c===void 0?new X1(o,n,e):new q1(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Y1(o),Vp(t,u)),t=u}}}class qo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Z1(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function Gp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const J1=37297;let K1=0;function $1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}function Q1(n){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(n);let i;switch(e===t?i="":e===Na&&t===Ia?i="LinearDisplayP3ToLinearSRGB":e===Ia&&t===Na&&(i="LinearSRGBToLinearDisplayP3"),n){case Ki:case Pa:return[i,"LinearTransferOETF"];case ii:case Mo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Hp(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+$1(n.getShaderSource(e),s)}else return r}function eM(n,e){const t=Q1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function tM(n,e){let t;switch(e){case Rd:t="Linear";break;case Pd:t="Reinhard";break;case Ld:t="Cineon";break;case Bs:t="ACESFilmic";break;case Nd:t="AgX";break;case Dd:t="Neutral";break;case Id:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yo=new P;function iM(){rt.getLuminanceCoefficients(Yo);const n=Yo.x.toFixed(4),e=Yo.y.toFixed(4),t=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function nM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function aM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function qa(n){return n!==""}function Wp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sM=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(n){return n.replace(sM,lM)}const oM=new Map;function lM(n,e){let t=qe[e];if(t===void 0){const i=oM.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return du(t)}const cM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xp(n){return n.replace(cM,uM)}function uM(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function qp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function dM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yi:case pr:e="ENVMAP_TYPE_CUBE";break;case bn:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function fM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ga:e="ENVMAP_BLENDING_MULTIPLY";break;case Ad:e="ENVMAP_BLENDING_MIX";break;case Cd:e="ENVMAP_BLENDING_ADD";break}return e}function mM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function gM(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=hM(t),c=dM(t),u=pM(t),d=fM(t),h=mM(t),p=rM(t),g=nM(a),v=r.createProgram();let m,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),f.length>0&&(f+=`
`)):(m=[qp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),f=[qp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?qe.tonemapping_pars_fragment:"",t.toneMapping!==Di?tM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,eM("linearToOutputTexel",t.outputColorSpace),iM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),s=du(s),s=Wp(s,t),s=jp(s,t),o=du(o),o=Wp(o,t),o=jp(o,t),s=Xp(s),o=Xp(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=_+m+s,x=_+f+o,A=Gp(r,r.VERTEX_SHADER,y),E=Gp(r,r.FRAGMENT_SHADER,x);r.attachShader(v,A),r.attachShader(v,E),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function S(I){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(v).trim(),F=r.getShaderInfoLog(A).trim(),B=r.getShaderInfoLog(E).trim();let H=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,E);else{const q=Hp(r,A,"vertex"),W=Hp(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+q+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||B==="")&&(G=!1);G&&(I.diagnostics={runnable:H,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:f}})}r.deleteShader(A),r.deleteShader(E),R=new qo(r,v),w=aM(r,v)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,J1)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}let vM=0;class _M{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yM(e),t.set(e,i)),i}}class yM{constructor(e){this.id=vM++,this.code=e,this.usedTimes=0}}function xM(n,e,t,i,r,a,s){const o=new Po,l=new _M,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,I,N,F){const B=N.fog,H=F.geometry,G=w.isMeshStandardMaterial?N.environment:null,q=(w.isMeshStandardMaterial?t:e).get(w.envMap||G),W=q&&q.mapping===bn?q.image.height:null,ae=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const ve=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,K=ve!==void 0?ve.length:0;let Te=0;H.morphAttributes.position!==void 0&&(Te=1),H.morphAttributes.normal!==void 0&&(Te=2),H.morphAttributes.color!==void 0&&(Te=3);let We,j,ie,Q;if(ae){const at=Si[ae];We=at.vertexShader,j=at.fragmentShader}else We=w.vertexShader,j=w.fragmentShader,l.update(w),ie=l.getVertexShaderID(w),Q=l.getFragmentShaderID(w);const se=n.getRenderTarget(),Re=F.isInstancedMesh===!0,Pe=F.isBatchedMesh===!0,De=!!w.map,re=!!w.matcap,C=!!q,ce=!!w.aoMap,fe=!!w.lightMap,le=!!w.bumpMap,ue=!!w.normalMap,Ue=!!w.displacementMap,_e=!!w.emissiveMap,Ce=!!w.metalnessMap,L=!!w.roughnessMap,b=w.anisotropy>0,z=w.clearcoat>0,Z=w.dispersion>0,te=w.iridescence>0,$=w.sheen>0,Ie=w.transmission>0,me=b&&!!w.anisotropyMap,we=z&&!!w.clearcoatMap,Ve=z&&!!w.clearcoatNormalMap,oe=z&&!!w.clearcoatRoughnessMap,be=te&&!!w.iridescenceMap,$e=te&&!!w.iridescenceThicknessMap,Ge=$&&!!w.sheenColorMap,Me=$&&!!w.sheenRoughnessMap,He=!!w.specularMap,Je=!!w.specularColorMap,ht=!!w.specularIntensityMap,D=Ie&&!!w.transmissionMap,he=Ie&&!!w.thicknessMap,Y=!!w.gradientMap,ee=!!w.alphaMap,de=w.alphaTest>0,Ne=!!w.alphaHash,lt=!!w.extensions;let xt=Di;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(xt=n.toneMapping);const It={shaderID:ae,shaderType:w.type,shaderName:w.name,vertexShader:We,fragmentShader:j,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:Q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Pe,batchingColor:Pe&&F._colorsTexture!==null,instancing:Re,instancingColor:Re&&F.instanceColor!==null,instancingMorph:Re&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ki,alphaToCoverage:!!w.alphaToCoverage,map:De,matcap:re,envMap:C,envMapMode:C&&q.mapping,envMapCubeUVHeight:W,aoMap:ce,lightMap:fe,bumpMap:le,normalMap:ue,displacementMap:h&&Ue,emissiveMap:_e,normalMapObjectSpace:ue&&w.normalMapType===Vd,normalMapTangentSpace:ue&&w.normalMapType===fr,metalnessMap:Ce,roughnessMap:L,anisotropy:b,anisotropyMap:me,clearcoat:z,clearcoatMap:we,clearcoatNormalMap:Ve,clearcoatRoughnessMap:oe,dispersion:Z,iridescence:te,iridescenceMap:be,iridescenceThicknessMap:$e,sheen:$,sheenColorMap:Ge,sheenRoughnessMap:Me,specularMap:He,specularColorMap:Je,specularIntensityMap:ht,transmission:Ie,transmissionMap:D,thicknessMap:he,gradientMap:Y,opaque:w.transparent===!1&&w.blending===Vr&&w.alphaToCoverage===!1,alphaMap:ee,alphaTest:de,alphaHash:Ne,combine:w.combine,mapUv:De&&v(w.map.channel),aoMapUv:ce&&v(w.aoMap.channel),lightMapUv:fe&&v(w.lightMap.channel),bumpMapUv:le&&v(w.bumpMap.channel),normalMapUv:ue&&v(w.normalMap.channel),displacementMapUv:Ue&&v(w.displacementMap.channel),emissiveMapUv:_e&&v(w.emissiveMap.channel),metalnessMapUv:Ce&&v(w.metalnessMap.channel),roughnessMapUv:L&&v(w.roughnessMap.channel),anisotropyMapUv:me&&v(w.anisotropyMap.channel),clearcoatMapUv:we&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(w.sheenRoughnessMap.channel),specularMapUv:He&&v(w.specularMap.channel),specularColorMapUv:Je&&v(w.specularColorMap.channel),specularIntensityMapUv:ht&&v(w.specularIntensityMap.channel),transmissionMapUv:D&&v(w.transmissionMap.channel),thicknessMapUv:he&&v(w.thicknessMap.channel),alphaMapUv:ee&&v(w.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ue||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(De||ee),fog:!!B,useFog:w.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Te,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:xt,decodeVideoTexture:De&&w.map.isVideoTexture===!0&&rt.getTransfer(w.map.colorSpace)===ct,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_i,flipSided:w.side===Vt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:lt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&w.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function f(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)M.push(I),M.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(_(M,w),y(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function _(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function y(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),w.push(o.mask)}function x(w){const M=g[w.type];let I;if(M){const N=Si[M];I=yp.clone(N.uniforms)}else I=w.uniforms;return I}function A(w,M){let I;for(let N=0,F=u.length;N<F;N++){const B=u[N];if(B.cacheKey===M){I=B,++I.usedTimes;break}}return I===void 0&&(I=new gM(n,M,w,a),u.push(I)),I}function E(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function S(w){l.remove(w)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:A,releaseProgram:E,releaseShaderCache:S,programs:u,dispose:R}}function wM(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function MM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Yp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zp(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(d,h,p,g,v,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function o(d,h,p,g,v,m){const f=s(d,h,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,g,v,m){const f=s(d,h,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||MM),i.length>1&&i.sort(h||Yp),r.length>1&&r.sort(h||Yp)}function u(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:u,sort:c}}function bM(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new Zp,n.set(i,[s])):r>=a.length?(s=new Zp,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function SM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ge};break;case"SpotLight":t={position:new P,direction:new P,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function EM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let TM=0;function AM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function CM(n){const e=new SM,t=EM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,a=new Oe,s=new Oe;function o(c){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,_=0,y=0,x=0,A=0,E=0,S=0;c.sort(AM);for(let w=0,M=c.length;w<M;w++){const I=c[w],N=I.color,F=I.intensity,B=I.distance,H=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=N.r*F,d+=N.g*F,h+=N.b*F;else if(I.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(I.sh.coefficients[G],F);S++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const q=I.shadow,W=t.get(I);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=I.shadow.matrix,_++}i.directional[p]=G,p++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(N).multiplyScalar(F),G.distance=B,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,i.spot[v]=G;const q=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,q.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[v]=q.matrix,I.castShadow){const W=t.get(I);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=H,x++}v++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(N).multiplyScalar(F),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=G,m++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const q=I.shadow,W=t.get(I);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=I.shadow.matrix,y++}i.point[g]=G,g++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(F),G.groundColor.copy(I.groundColor).multiplyScalar(F),i.hemi[f]=G,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==_||R.numPointShadows!==y||R.numSpotShadows!==x||R.numSpotMaps!==A||R.numLightProbes!==S)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=S,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=_,R.numPointShadows=y,R.numSpotShadows=x,R.numSpotMaps=A,R.numLightProbes=S,i.version=TM++)}function l(c,u){let d=0,h=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const y=c[f];if(y.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),s.identity(),a.copy(y.matrixWorld),a.premultiply(m),s.extractRotation(a),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),g++}else if(y.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Jp(n){const e=new CM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function a(u){t.push(u)}function s(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function RM(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Jp(n),e.set(r,[o])):a>=s.length?(o=new Jp(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class pu extends Bt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fu extends Bt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function IM(n,e,t){let i=new Xa;const r=new J,a=new J,s=new nt,o=new pu({depthPacking:kd}),l=new fu,c={},u=t.maxTextureSize,d={[Xi]:Vt,[Vt]:Xi,[_i]:_i},h=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:PM,fragmentShader:LM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ze;g.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new dt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let f=this.type;this.render=function(E,S,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const w=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(qi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=f!==Ni&&this.type===Ni,B=f===Ni&&this.type!==Ni;for(let H=0,G=E.length;H<G;H++){const q=E[H],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ae=W.getFrameExtents();if(r.multiply(ae),a.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ae.x),r.x=a.x*ae.x,W.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ae.y),r.y=a.y*ae.y,W.mapSize.y=a.y)),W.map===null||F===!0||B===!0){const K=this.type!==Ni?{minFilter:Pt,magFilter:Pt}:{};W.map!==null&&W.map.dispose(),W.map=new yi(r.x,r.y,K),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const ve=W.getViewportCount();for(let K=0;K<ve;K++){const Te=W.getViewport(K);s.set(a.x*Te.x,a.y*Te.y,a.x*Te.z,a.y*Te.w),N.viewport(s),W.updateMatrices(q,K),i=W.getFrustum(),x(S,R,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Ni&&_(W,R),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,M,I)};function _(E,S){const R=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new yi(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(S,null,R,h,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(S,null,R,p,v,null)}function y(E,S,R,w){let M=null;const I=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)M=I;else if(M=R.isPointLight===!0?l:o,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const N=M.uuid,F=S.uuid;let B=c[N];B===void 0&&(B={},c[N]=B);let H=B[F];H===void 0&&(H=M.clone(),B[F]=H,S.addEventListener("dispose",A)),M=H}if(M.visible=S.visible,M.wireframe=S.wireframe,w===Ni?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:d[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=R}return M}function x(E,S,R,w,M){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Ni)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const N=e.update(E),F=E.material;if(Array.isArray(F)){const B=N.groups;for(let H=0,G=B.length;H<G;H++){const q=B[H],W=F[q.materialIndex];if(W&&W.visible){const ae=y(E,W,w,M);E.onBeforeShadow(n,E,S,R,N,ae,q),n.renderBufferDirect(R,null,N,ae,E,q),E.onAfterShadow(n,E,S,R,N,ae,q)}}}else if(F.visible){const B=y(E,F,w,M);E.onBeforeShadow(n,E,S,R,N,B,null),n.renderBufferDirect(R,null,N,B,E,null),E.onAfterShadow(n,E,S,R,N,B,null)}}const I=E.children;for(let N=0,F=I.length;N<F;N++)x(I[N],S,R,w,M)}function A(E){E.target.removeEventListener("dispose",A);for(const S in c){const R=c[S],w=E.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}function NM(n){function e(){let D=!1;const he=new nt;let Y=null;const ee=new nt(0,0,0,0);return{setMask:function(de){Y!==de&&!D&&(n.colorMask(de,de,de,de),Y=de)},setLocked:function(de){D=de},setClear:function(de,Ne,lt,xt,It){It===!0&&(de*=xt,Ne*=xt,lt*=xt),he.set(de,Ne,lt,xt),ee.equals(he)===!1&&(n.clearColor(de,Ne,lt,xt),ee.copy(he))},reset:function(){D=!1,Y=null,ee.set(-1,0,0,0)}}}function t(){let D=!1,he=null,Y=null,ee=null;return{setTest:function(de){de?Q(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(de){he!==de&&!D&&(n.depthMask(de),he=de)},setFunc:function(de){if(Y!==de){switch(de){case xd:n.depthFunc(n.NEVER);break;case wd:n.depthFunc(n.ALWAYS);break;case Md:n.depthFunc(n.LESS);break;case ma:n.depthFunc(n.LEQUAL);break;case bd:n.depthFunc(n.EQUAL);break;case Sd:n.depthFunc(n.GEQUAL);break;case Ed:n.depthFunc(n.GREATER);break;case Td:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Y=de}},setLocked:function(de){D=de},setClear:function(de){ee!==de&&(n.clearDepth(de),ee=de)},reset:function(){D=!1,he=null,Y=null,ee=null}}}function i(){let D=!1,he=null,Y=null,ee=null,de=null,Ne=null,lt=null,xt=null,It=null;return{setTest:function(at){D||(at?Q(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(at){he!==at&&!D&&(n.stencilMask(at),he=at)},setFunc:function(at,Hi,Ai){(Y!==at||ee!==Hi||de!==Ai)&&(n.stencilFunc(at,Hi,Ai),Y=at,ee=Hi,de=Ai)},setOp:function(at,Hi,Ai){(Ne!==at||lt!==Hi||xt!==Ai)&&(n.stencilOp(at,Hi,Ai),Ne=at,lt=Hi,xt=Ai)},setLocked:function(at){D=at},setClear:function(at){It!==at&&(n.clearStencil(at),It=at)},reset:function(){D=!1,he=null,Y=null,ee=null,de=null,Ne=null,lt=null,xt=null,It=null}}}const r=new e,a=new t,s=new i,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,g=!1,v=null,m=null,f=null,_=null,y=null,x=null,A=null,E=new ge(0,0,0),S=0,R=!1,w=null,M=null,I=null,N=null,F=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,G=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=G>=1):q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=G>=2);let W=null,ae={};const ve=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),Te=new nt().fromArray(ve),We=new nt().fromArray(K);function j(D,he,Y,ee){const de=new Uint8Array(4),Ne=n.createTexture();n.bindTexture(D,Ne),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let lt=0;lt<Y;lt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(he+lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return Ne}const ie={};ie[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),Q(n.DEPTH_TEST),a.setFunc(ma),le(!1),ue(pc),Q(n.CULL_FACE),ce(qi);function Q(D){c[D]!==!0&&(n.enable(D),c[D]=!0)}function se(D){c[D]!==!1&&(n.disable(D),c[D]=!1)}function Re(D,he){return u[D]!==he?(n.bindFramebuffer(D,he),u[D]=he,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=he),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=he),!0):!1}function Pe(D,he){let Y=h,ee=!1;if(D){Y=d.get(he),Y===void 0&&(Y=[],d.set(he,Y));const de=D.textures;if(Y.length!==de.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let Ne=0,lt=de.length;Ne<lt;Ne++)Y[Ne]=n.COLOR_ATTACHMENT0+Ne;Y.length=de.length,ee=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,ee=!0);ee&&n.drawBuffers(Y)}function De(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const re={[dr]:n.FUNC_ADD,[rd]:n.FUNC_SUBTRACT,[nd]:n.FUNC_REVERSE_SUBTRACT};re[ad]=n.MIN,re[sd]=n.MAX;const C={[od]:n.ZERO,[ld]:n.ONE,[cd]:n.SRC_COLOR,[Os]:n.SRC_ALPHA,[md]:n.SRC_ALPHA_SATURATE,[pd]:n.DST_COLOR,[hd]:n.DST_ALPHA,[ud]:n.ONE_MINUS_SRC_COLOR,[Fs]:n.ONE_MINUS_SRC_ALPHA,[fd]:n.ONE_MINUS_DST_COLOR,[dd]:n.ONE_MINUS_DST_ALPHA,[gd]:n.CONSTANT_COLOR,[vd]:n.ONE_MINUS_CONSTANT_COLOR,[_d]:n.CONSTANT_ALPHA,[yd]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(D,he,Y,ee,de,Ne,lt,xt,It,at){if(D===qi){g===!0&&(se(n.BLEND),g=!1);return}if(g===!1&&(Q(n.BLEND),g=!0),D!==id){if(D!==v||at!==R){if((m!==dr||y!==dr)&&(n.blendEquation(n.FUNC_ADD),m=dr,y=dr),at)switch(D){case Vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFunc(n.ONE,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _c:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}f=null,_=null,x=null,A=null,E.set(0,0,0),S=0,v=D,R=at}return}de=de||he,Ne=Ne||Y,lt=lt||ee,(he!==m||de!==y)&&(n.blendEquationSeparate(re[he],re[de]),m=he,y=de),(Y!==f||ee!==_||Ne!==x||lt!==A)&&(n.blendFuncSeparate(C[Y],C[ee],C[Ne],C[lt]),f=Y,_=ee,x=Ne,A=lt),(xt.equals(E)===!1||It!==S)&&(n.blendColor(xt.r,xt.g,xt.b,It),E.copy(xt),S=It),v=D,R=!1}function fe(D,he){D.side===_i?se(n.CULL_FACE):Q(n.CULL_FACE);let Y=D.side===Vt;he&&(Y=!Y),le(Y),D.blending===Vr&&D.transparent===!1?ce(qi):ce(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const ee=D.stencilWrite;s.setTest(ee),ee&&(s.setMask(D.stencilWriteMask),s.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),s.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),_e(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function le(D){w!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),w=D)}function ue(D){D!==ed?(Q(n.CULL_FACE),D!==M&&(D===pc?n.cullFace(n.BACK):D===td?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),M=D}function Ue(D){D!==I&&(H&&n.lineWidth(D),I=D)}function _e(D,he,Y){D?(Q(n.POLYGON_OFFSET_FILL),(N!==he||F!==Y)&&(n.polygonOffset(he,Y),N=he,F=Y)):se(n.POLYGON_OFFSET_FILL)}function Ce(D){D?Q(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function L(D){D===void 0&&(D=n.TEXTURE0+B-1),W!==D&&(n.activeTexture(D),W=D)}function b(D,he,Y){Y===void 0&&(W===null?Y=n.TEXTURE0+B-1:Y=W);let ee=ae[Y];ee===void 0&&(ee={type:void 0,texture:void 0},ae[Y]=ee),(ee.type!==D||ee.texture!==he)&&(W!==Y&&(n.activeTexture(Y),W=Y),n.bindTexture(D,he||ie[D]),ee.type=D,ee.texture=he)}function z(){const D=ae[W];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(D){Te.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Te.copy(D))}function Me(D){We.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),We.copy(D))}function He(D,he){let Y=l.get(he);Y===void 0&&(Y=new WeakMap,l.set(he,Y));let ee=Y.get(D);ee===void 0&&(ee=n.getUniformBlockIndex(he,D.name),Y.set(D,ee))}function Je(D,he){const Y=l.get(he).get(D);o.get(he)!==Y&&(n.uniformBlockBinding(he,Y,D.__bindingPointIndex),o.set(he,Y))}function ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},W=null,ae={},u={},d=new WeakMap,h=[],p=null,g=!1,v=null,m=null,f=null,_=null,y=null,x=null,A=null,E=new ge(0,0,0),S=0,R=!1,w=null,M=null,I=null,N=null,F=null,Te.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),s.reset()}return{buffers:{color:r,depth:a,stencil:s},enable:Q,disable:se,bindFramebuffer:Re,drawBuffers:Pe,useProgram:De,setBlending:ce,setMaterial:fe,setFlipSided:le,setCullFace:ue,setLineWidth:Ue,setPolygonOffset:_e,setScissorTest:Ce,activeTexture:L,bindTexture:b,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:be,texImage3D:$e,updateUBOMapping:He,uniformBlockBinding:Je,texStorage2D:Ve,texStorage3D:oe,texSubImage2D:$,texSubImage3D:Ie,compressedTexSubImage2D:me,compressedTexSubImage3D:we,scissor:Ge,viewport:Me,reset:ht}}function DM(n,e){const t=n.image&&n.image.width?n.image.width/n.image.height:1;return t>e?(n.repeat.x=1,n.repeat.y=t/e,n.offset.x=0,n.offset.y=(1-n.repeat.y)/2):(n.repeat.x=e/t,n.repeat.y=1,n.offset.x=(1-n.repeat.x)/2,n.offset.y=0),n}function UM(n,e){const t=n.image&&n.image.width?n.image.width/n.image.height:1;return t>e?(n.repeat.x=e/t,n.repeat.y=1,n.offset.x=(1-n.repeat.x)/2,n.offset.y=0):(n.repeat.x=1,n.repeat.y=t/e,n.offset.x=0,n.offset.y=(1-n.repeat.y)/2),n}function OM(n){return n.repeat.x=1,n.repeat.y=1,n.offset.x=0,n.offset.y=0,n}function mu(n,e,t,i){const r=FM(i);switch(t){case Sc:return n*e;case Tc:return n*e;case Ac:return n*e*2;case Hs:return n*e/r.components*r.byteLength;case Ma:return n*e/r.components*r.byteLength;case Cc:return n*e*2/r.components*r.byteLength;case Ws:return n*e*2/r.components*r.byteLength;case Ec:return n*e*3/r.components*r.byteLength;case Gt:return n*e*4/r.components*r.byteLength;case js:return n*e*4/r.components*r.byteLength;case ba:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ea:case Ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qs:case Zs:return Math.max(n,16)*Math.max(e,8)/4;case Xs:case Ys:return Math.max(n,8)*Math.max(e,8)/2;case Js:case Ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case to:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case io:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ro:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case no:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ao:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case so:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case oo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case lo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case co:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case uo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ho:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case po:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Aa:case fo:case mo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rc:case go:return Math.ceil(n/4)*Math.ceil(e/4)*8;case vo:case _o:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function FM(n){switch(n){case Oi:case wc:return{byteLength:1,components:1};case En:case Mc:case Tn:return{byteLength:2,components:1};case Vs:case Gs:return{byteLength:2,components:4};case Zi:case ks:case Yt:return{byteLength:4,components:1};case bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}const BM={contain:DM,cover:UM,fill:OM,getByteLength:mu};function zM(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,b){return p?new OffscreenCanvas(L,b):Fa("canvas")}function v(L,b,z){let Z=1;const te=Ce(L);if((te.width>z||te.height>z)&&(Z=z/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const $=Math.floor(Z*te.width),Ie=Math.floor(Z*te.height);d===void 0&&(d=g($,Ie));const me=b?g($,Ie):d;return me.width=$,me.height=Ie,me.getContext("2d").drawImage(L,0,0,$,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+Ie+")."),me}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==Pt&&L.minFilter!==bt}function f(L){n.generateMipmap(L)}function _(L,b,z,Z,te=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let $=b;if(b===n.RED&&(z===n.FLOAT&&($=n.R32F),z===n.HALF_FLOAT&&($=n.R16F),z===n.UNSIGNED_BYTE&&($=n.R8)),b===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.R8UI),z===n.UNSIGNED_SHORT&&($=n.R16UI),z===n.UNSIGNED_INT&&($=n.R32UI),z===n.BYTE&&($=n.R8I),z===n.SHORT&&($=n.R16I),z===n.INT&&($=n.R32I)),b===n.RG&&(z===n.FLOAT&&($=n.RG32F),z===n.HALF_FLOAT&&($=n.RG16F),z===n.UNSIGNED_BYTE&&($=n.RG8)),b===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RG8UI),z===n.UNSIGNED_SHORT&&($=n.RG16UI),z===n.UNSIGNED_INT&&($=n.RG32UI),z===n.BYTE&&($=n.RG8I),z===n.SHORT&&($=n.RG16I),z===n.INT&&($=n.RG32I)),b===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),b===n.RGBA){const Ie=te?La:rt.getTransfer(Z);z===n.FLOAT&&($=n.RGBA32F),z===n.HALF_FLOAT&&($=n.RGBA16F),z===n.UNSIGNED_BYTE&&($=Ie===ct?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(L,b){let z;return L?b===null||b===Zi||b===Gr?z=n.DEPTH24_STENCIL8:b===Yt?z=n.DEPTH32F_STENCIL8:b===En&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Zi||b===Gr?z=n.DEPTH_COMPONENT24:b===Yt?z=n.DEPTH_COMPONENT32F:b===En&&(z=n.DEPTH_COMPONENT16),z}function x(L,b){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Pt&&L.minFilter!==bt?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function A(L){const b=L.target;b.removeEventListener("dispose",A),S(b),b.isVideoTexture&&u.delete(b)}function E(L){const b=L.target;b.removeEventListener("dispose",E),w(b)}function S(L){const b=i.get(L);if(b.__webglInit===void 0)return;const z=L.source,Z=h.get(z);if(Z){const te=Z[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(L),Object.keys(Z).length===0&&h.delete(z)}i.remove(L)}function R(L){const b=i.get(L);n.deleteTexture(b.__webglTexture);const z=L.source,Z=h.get(z);delete Z[b.__cacheKey],s.memory.textures--}function w(L){const b=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let te=0;te<b.__webglFramebuffer[Z].length;te++)n.deleteFramebuffer(b.__webglFramebuffer[Z][te]);else n.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)n.deleteFramebuffer(b.__webglFramebuffer[Z]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=L.textures;for(let Z=0,te=z.length;Z<te;Z++){const $=i.get(z[Z]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),s.memory.textures--),i.remove(z[Z])}i.remove(L)}let M=0;function I(){M=0}function N(){const L=M;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),M+=1,L}function F(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function B(L,b){const z=i.get(L);if(L.isVideoTexture&&Ue(L),L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){const Z=L.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(z,L,b);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+b)}function H(L,b){const z=i.get(L);if(L.version>0&&z.__version!==L.version){We(z,L,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+b)}function G(L,b){const z=i.get(L);if(L.version>0&&z.__version!==L.version){We(z,L,b);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+b)}function q(L,b){const z=i.get(L);if(L.version>0&&z.__version!==L.version){j(z,L,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+b)}const W={[ya]:n.REPEAT,[pi]:n.CLAMP_TO_EDGE,[xa]:n.MIRRORED_REPEAT},ae={[Pt]:n.NEAREST,[xc]:n.NEAREST_MIPMAP_NEAREST,[Sn]:n.NEAREST_MIPMAP_LINEAR,[bt]:n.LINEAR,[wa]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},ve={[Gd]:n.NEVER,[Yd]:n.ALWAYS,[Hd]:n.LESS,[Ic]:n.LEQUAL,[Wd]:n.EQUAL,[qd]:n.GEQUAL,[jd]:n.GREATER,[Xd]:n.NOTEQUAL};function K(L,b){if(b.type===Yt&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===bt||b.magFilter===wa||b.magFilter===Sn||b.magFilter===Ui||b.minFilter===bt||b.minFilter===wa||b.minFilter===Sn||b.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,W[b.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,W[b.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,W[b.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ae[b.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ae[b.minFilter]),b.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,ve[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Pt||b.minFilter!==Sn&&b.minFilter!==Ui||b.type===Yt&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Te(L,b){let z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",A));const Z=b.source;let te=h.get(Z);te===void 0&&(te={},h.set(Z,te));const $=F(b);if($!==L.__cacheKey){te[$]===void 0&&(te[$]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,z=!0),te[$].usedTimes++;const Ie=te[L.__cacheKey];Ie!==void 0&&(te[L.__cacheKey].usedTimes--,Ie.usedTimes===0&&R(b)),L.__cacheKey=$,L.__webglTexture=te[$].texture}return z}function We(L,b,z){let Z=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=n.TEXTURE_3D);const te=Te(L,b),$=b.source;t.bindTexture(Z,L.__webglTexture,n.TEXTURE0+z);const Ie=i.get($);if($.version!==Ie.__version||te===!0){t.activeTexture(n.TEXTURE0+z);const me=rt.getPrimaries(rt.workingColorSpace),we=b.colorSpace===Ji?null:rt.getPrimaries(b.colorSpace),Ve=b.colorSpace===Ji||me===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let oe=v(b.image,!1,r.maxTextureSize);oe=_e(b,oe);const be=a.convert(b.format,b.colorSpace),$e=a.convert(b.type);let Ge=_(b.internalFormat,be,$e,b.colorSpace,b.isVideoTexture);K(Z,b);let Me;const He=b.mipmaps,Je=b.isVideoTexture!==!0,ht=Ie.__version===void 0||te===!0,D=$.dataReady,he=x(b,oe);if(b.isDepthTexture)Ge=y(b.format===Wr,b.type),ht&&(Je?t.texStorage2D(n.TEXTURE_2D,1,Ge,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ge,oe.width,oe.height,0,be,$e,null));else if(b.isDataTexture)if(He.length>0){Je&&ht&&t.texStorage2D(n.TEXTURE_2D,he,Ge,He[0].width,He[0].height);for(let Y=0,ee=He.length;Y<ee;Y++)Me=He[Y],Je?D&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Me.width,Me.height,be,$e,Me.data):t.texImage2D(n.TEXTURE_2D,Y,Ge,Me.width,Me.height,0,be,$e,Me.data);b.generateMipmaps=!1}else Je?(ht&&t.texStorage2D(n.TEXTURE_2D,he,Ge,oe.width,oe.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,be,$e,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Ge,oe.width,oe.height,0,be,$e,oe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Je&&ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ge,He[0].width,He[0].height,oe.depth);for(let Y=0,ee=He.length;Y<ee;Y++)if(Me=He[Y],b.format!==Gt)if(be!==null)if(Je){if(D)if(b.layerUpdates.size>0){const de=mu(Me.width,Me.height,b.format,b.type);for(const Ne of b.layerUpdates){const lt=Me.data.subarray(Ne*de/Me.data.BYTES_PER_ELEMENT,(Ne+1)*de/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,Ne,Me.width,Me.height,1,be,lt,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Me.width,Me.height,oe.depth,be,Me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Ge,Me.width,Me.height,oe.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Me.width,Me.height,oe.depth,be,$e,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,Ge,Me.width,Me.height,oe.depth,0,be,$e,Me.data)}else{Je&&ht&&t.texStorage2D(n.TEXTURE_2D,he,Ge,He[0].width,He[0].height);for(let Y=0,ee=He.length;Y<ee;Y++)Me=He[Y],b.format!==Gt?be!==null?Je?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,Me.width,Me.height,be,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,Ge,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?D&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Me.width,Me.height,be,$e,Me.data):t.texImage2D(n.TEXTURE_2D,Y,Ge,Me.width,Me.height,0,be,$e,Me.data)}else if(b.isDataArrayTexture)if(Je){if(ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ge,oe.width,oe.height,oe.depth),D)if(b.layerUpdates.size>0){const Y=mu(oe.width,oe.height,b.format,b.type);for(const ee of b.layerUpdates){const de=oe.data.subarray(ee*Y/oe.data.BYTES_PER_ELEMENT,(ee+1)*Y/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,be,$e,de)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,be,$e,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,oe.width,oe.height,oe.depth,0,be,$e,oe.data);else if(b.isData3DTexture)Je?(ht&&t.texStorage3D(n.TEXTURE_3D,he,Ge,oe.width,oe.height,oe.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,be,$e,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,oe.width,oe.height,oe.depth,0,be,$e,oe.data);else if(b.isFramebufferTexture){if(ht)if(Je)t.texStorage2D(n.TEXTURE_2D,he,Ge,oe.width,oe.height);else{let Y=oe.width,ee=oe.height;for(let de=0;de<he;de++)t.texImage2D(n.TEXTURE_2D,de,Ge,Y,ee,0,be,$e,null),Y>>=1,ee>>=1}}else if(He.length>0){if(Je&&ht){const Y=Ce(He[0]);t.texStorage2D(n.TEXTURE_2D,he,Ge,Y.width,Y.height)}for(let Y=0,ee=He.length;Y<ee;Y++)Me=He[Y],Je?D&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,be,$e,Me):t.texImage2D(n.TEXTURE_2D,Y,Ge,be,$e,Me);b.generateMipmaps=!1}else if(Je){if(ht){const Y=Ce(oe);t.texStorage2D(n.TEXTURE_2D,he,Ge,Y.width,Y.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,$e,oe)}else t.texImage2D(n.TEXTURE_2D,0,Ge,be,$e,oe);m(b)&&f(Z),Ie.__version=$.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function j(L,b,z){if(b.image.length!==6)return;const Z=Te(L,b),te=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+z);const $=i.get(te);if(te.version!==$.__version||Z===!0){t.activeTexture(n.TEXTURE0+z);const Ie=rt.getPrimaries(rt.workingColorSpace),me=b.colorSpace===Ji?null:rt.getPrimaries(b.colorSpace),we=b.colorSpace===Ji||Ie===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ve=b.isCompressedTexture||b.image[0].isCompressedTexture,oe=b.image[0]&&b.image[0].isDataTexture,be=[];for(let ee=0;ee<6;ee++)!Ve&&!oe?be[ee]=v(b.image[ee],!0,r.maxCubemapSize):be[ee]=oe?b.image[ee].image:b.image[ee],be[ee]=_e(b,be[ee]);const $e=be[0],Ge=a.convert(b.format,b.colorSpace),Me=a.convert(b.type),He=_(b.internalFormat,Ge,Me,b.colorSpace),Je=b.isVideoTexture!==!0,ht=$.__version===void 0||Z===!0,D=te.dataReady;let he=x(b,$e);K(n.TEXTURE_CUBE_MAP,b);let Y;if(Ve){Je&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,He,$e.width,$e.height);for(let ee=0;ee<6;ee++){Y=be[ee].mipmaps;for(let de=0;de<Y.length;de++){const Ne=Y[de];b.format!==Gt?Ge!==null?Je?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,0,0,Ne.width,Ne.height,Ge,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,He,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,0,0,Ne.width,Ne.height,Ge,Me,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,He,Ne.width,Ne.height,0,Ge,Me,Ne.data)}}}else{if(Y=b.mipmaps,Je&&ht){Y.length>0&&he++;const ee=Ce(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,He,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){Je?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,be[ee].width,be[ee].height,Ge,Me,be[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,He,be[ee].width,be[ee].height,0,Ge,Me,be[ee].data);for(let de=0;de<Y.length;de++){const Ne=Y[de].image[ee].image;Je?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,0,0,Ne.width,Ne.height,Ge,Me,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,He,Ne.width,Ne.height,0,Ge,Me,Ne.data)}}else{Je?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ge,Me,be[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,He,Ge,Me,be[ee]);for(let de=0;de<Y.length;de++){const Ne=Y[de];Je?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,0,0,Ge,Me,Ne.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,He,Ge,Me,Ne.image[ee])}}}m(b)&&f(n.TEXTURE_CUBE_MAP),$.__version=te.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ie(L,b,z,Z,te,$){const Ie=a.convert(z.format,z.colorSpace),me=a.convert(z.type),we=_(z.internalFormat,Ie,me,z.colorSpace);if(!i.get(b).__hasExternalTextures){const Ve=Math.max(1,b.width>>$),oe=Math.max(1,b.height>>$);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,$,we,Ve,oe,b.depth,0,Ie,me,null):t.texImage2D(te,$,we,Ve,oe,0,Ie,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),ue(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,te,i.get(z).__webglTexture,0,le(b)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,te,i.get(z).__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(L,b,z){if(n.bindRenderbuffer(n.RENDERBUFFER,L),b.depthBuffer){const Z=b.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,$=y(b.stencilBuffer,te),Ie=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=le(b);ue(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,$,b.width,b.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,$,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,$,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,L)}else{const Z=b.textures;for(let te=0;te<Z.length;te++){const $=Z[te],Ie=a.convert($.format,$.colorSpace),me=a.convert($.type),we=_($.internalFormat,Ie,me,$.colorSpace),Ve=le(b);z&&ue(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,we,b.width,b.height):ue(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,we,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,we,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);const z=i.get(b.depthTexture).__webglTexture,Z=le(b);if(b.depthTexture.format===Hr)ue(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0);else if(b.depthTexture.format===Wr)ue(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Re(L){const b=i.get(L),z=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const Z=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),b.__depthDisposeCallback=te}b.__boundDepthTexture=Z}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");se(b.__webglFramebuffer,L)}else if(z){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=n.createRenderbuffer(),Q(b.__webglDepthbuffer[Z],L,!1);else{const te=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Q(b.__webglDepthbuffer,L,!1);else{const Z=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(L,b,z){const Z=i.get(L);b!==void 0&&ie(Z.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Re(L)}function De(L){const b=L.texture,z=i.get(L),Z=i.get(b);L.addEventListener("dispose",E);const te=L.textures,$=L.isWebGLCubeRenderTarget===!0,Ie=te.length>1;if(Ie||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=b.version,s.memory.textures++),$){z.__webglFramebuffer=[];for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[me]=[];for(let we=0;we<b.mipmaps.length;we++)z.__webglFramebuffer[me][we]=n.createFramebuffer()}else z.__webglFramebuffer[me]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let me=0;me<b.mipmaps.length;me++)z.__webglFramebuffer[me]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let me=0,we=te.length;me<we;me++){const Ve=i.get(te[me]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),s.memory.textures++)}if(L.samples>0&&ue(L)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let me=0;me<te.length;me++){const we=te[me];z.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[me]);const Ve=a.convert(we.format,we.colorSpace),oe=a.convert(we.type),be=_(we.internalFormat,Ve,oe,we.colorSpace,L.isXRRenderTarget===!0),$e=le(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,be,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,z.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Q(z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),K(n.TEXTURE_CUBE_MAP,b);for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0)for(let we=0;we<b.mipmaps.length;we++)ie(z.__webglFramebuffer[me][we],L,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,we);else ie(z.__webglFramebuffer[me],L,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(b)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let me=0,we=te.length;me<we;me++){const Ve=te[me],oe=i.get(Ve);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),K(n.TEXTURE_2D,Ve),ie(z.__webglFramebuffer,L,Ve,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),m(Ve)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(me=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,Z.__webglTexture),K(me,b),b.mipmaps&&b.mipmaps.length>0)for(let we=0;we<b.mipmaps.length;we++)ie(z.__webglFramebuffer[we],L,b,n.COLOR_ATTACHMENT0,me,we);else ie(z.__webglFramebuffer,L,b,n.COLOR_ATTACHMENT0,me,0);m(b)&&f(me),t.unbindTexture()}L.depthBuffer&&Re(L)}function re(L){const b=L.textures;for(let z=0,Z=b.length;z<Z;z++){const te=b[z];if(m(te)){const $=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ie=i.get(te).__webglTexture;t.bindTexture($,Ie),f($),t.unbindTexture()}}}const C=[],ce=[];function fe(L){if(L.samples>0){if(ue(L)===!1){const b=L.textures,z=L.width,Z=L.height;let te=n.COLOR_BUFFER_BIT;const $=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(L),me=b.length>1;if(me)for(let we=0;we<b.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let we=0;we<b.length;we++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[we]);const Ve=i.get(b[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ve,0)}n.blitFramebuffer(0,0,z,Z,0,0,z,Z,te,n.NEAREST),l===!0&&(C.length=0,ce.length=0,C.push(n.COLOR_ATTACHMENT0+we),L.depthBuffer&&L.resolveDepthBuffer===!1&&(C.push($),ce.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let we=0;we<b.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[we]);const Ve=i.get(b[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const b=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function le(L){return Math.min(r.maxSamples,L.samples)}function ue(L){const b=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ue(L){const b=s.render.frame;u.get(L)!==b&&(u.set(L,b),L.update())}function _e(L,b){const z=L.colorSpace,Z=L.format,te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||z!==Ki&&z!==Ji&&(rt.getTransfer(z)===ct?(Z!==Gt||te!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function Ce(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=G,this.setTextureCube=q,this.rebindTextures=Pe,this.setupRenderTarget=De,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ue}function Kp(n,e){function t(i,r=Ji){let a;const s=rt.getTransfer(r);if(i===Oi)return n.UNSIGNED_BYTE;if(i===Vs)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gs)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wc)return n.BYTE;if(i===Mc)return n.SHORT;if(i===En)return n.UNSIGNED_SHORT;if(i===ks)return n.INT;if(i===Zi)return n.UNSIGNED_INT;if(i===Yt)return n.FLOAT;if(i===Tn)return n.HALF_FLOAT;if(i===Sc)return n.ALPHA;if(i===Ec)return n.RGB;if(i===Gt)return n.RGBA;if(i===Tc)return n.LUMINANCE;if(i===Ac)return n.LUMINANCE_ALPHA;if(i===Hr)return n.DEPTH_COMPONENT;if(i===Wr)return n.DEPTH_STENCIL;if(i===Hs)return n.RED;if(i===Ma)return n.RED_INTEGER;if(i===Cc)return n.RG;if(i===Ws)return n.RG_INTEGER;if(i===js)return n.RGBA_INTEGER;if(i===ba||i===Sa||i===Ea||i===Ta)if(s===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ba)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ba)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ea)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xs||i===qs||i===Ys||i===Zs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Xs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ys)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Js||i===Ks||i===$s)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Js||i===Ks)return s===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===$s)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qs||i===eo||i===to||i===io||i===ro||i===no||i===ao||i===so||i===oo||i===lo||i===co||i===uo||i===ho||i===po)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Qs)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eo)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===to)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===io)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ro)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===no)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ao)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===so)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oo)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lo)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===co)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uo)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ho)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===po)return s===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Aa||i===fo||i===mo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Aa)return s===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rc||i===go||i===vo||i===_o)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Aa)return a.COMPRESSED_RED_RGTC1_EXT;if(i===go)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_o)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class $p extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kn extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kM={type:"move"};class gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const VM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new vt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bi({vertexShader:VM,fragmentShader:GM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Ar(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WM extends Bi{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const v=new HM,m=t.getContextAttributes();let f=null,_=null;const y=[],x=[],A=new J;let E=null;const S=new Et;S.layers.enable(1),S.viewport=new nt;const R=new Et;R.layers.enable(2),R.viewport=new nt;const w=[S,R],M=new $p;M.layers.enable(1),M.layers.enable(2);let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=y[j];return ie===void 0&&(ie=new gu,y[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=y[j];return ie===void 0&&(ie=new gu,y[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=y[j];return ie===void 0&&(ie=new gu,y[j]=ie),ie.getHandSpace()};function F(j){const ie=x.indexOf(j.inputSource);if(ie===-1)return;const Q=y[ie];Q!==void 0&&(Q.update(j.inputSource,j.frame,c||s),Q.dispatchEvent({type:j.type,data:j.inputSource}))}function B(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",H);for(let j=0;j<y.length;j++){const ie=x[j];ie!==null&&(x[j]=null,y[j].disconnect(ie))}I=null,N=null,v.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,_=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",B),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new yi(p.framebufferWidth,p.framebufferHeight,{format:Gt,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,Q=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?Wr:Hr,Q=m.stencil?Gr:Zi);const Re={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:a};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Re),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new yi(h.textureWidth,h.textureHeight,{format:Gt,type:Oi,depthTexture:new uu(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H(j){for(let ie=0;ie<j.removed.length;ie++){const Q=j.removed[ie],se=x.indexOf(Q);se>=0&&(x[se]=null,y[se].disconnect(Q))}for(let ie=0;ie<j.added.length;ie++){const Q=j.added[ie];let se=x.indexOf(Q);if(se===-1){for(let Pe=0;Pe<y.length;Pe++)if(Pe>=x.length){x.push(Q),se=Pe;break}else if(x[Pe]===null){x[Pe]=Q,se=Pe;break}if(se===-1)break}const Re=y[se];Re&&Re.connect(Q)}}const G=new P,q=new P;function W(j,ie,Q){G.setFromMatrixPosition(ie.matrixWorld),q.setFromMatrixPosition(Q.matrixWorld);const se=G.distanceTo(q),Re=ie.projectionMatrix.elements,Pe=Q.projectionMatrix.elements,De=Re[14]/(Re[10]-1),re=Re[14]/(Re[10]+1),C=(Re[9]+1)/Re[5],ce=(Re[9]-1)/Re[5],fe=(Re[8]-1)/Re[0],le=(Pe[8]+1)/Pe[0],ue=De*fe,Ue=De*le,_e=se/(-fe+le),Ce=_e*-fe;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ce),j.translateZ(_e),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Re[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const L=De+_e,b=re+_e,z=ue-Ce,Z=Ue+(se-Ce),te=C*re/b*L,$=ce*re/b*L;j.projectionMatrix.makePerspective(z,Z,te,$,L,b),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ae(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ie=j.near,Q=j.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(Q=v.depthFar)),M.near=R.near=S.near=ie,M.far=R.far=S.far=Q,(I!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,N=M.far);const se=j.parent,Re=M.cameras;ae(M,se);for(let Pe=0;Pe<Re.length;Pe++)ae(Re[Pe],se);Re.length===2?W(M,S,R):M.projectionMatrix.copy(S.projectionMatrix),ve(j,M,se)};function ve(j,ie,Q){Q===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(Q.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=An*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let K=null;function Te(j,ie){if(u=ie.getViewerPose(c||s),g=ie,u!==null){const Q=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let se=!1;Q.length!==M.cameras.length&&(M.cameras.length=0,se=!0);for(let Pe=0;Pe<Q.length;Pe++){const De=Q[Pe];let re=null;if(p!==null)re=p.getViewport(De);else{const ce=d.getViewSubImage(h,De);re=ce.viewport,Pe===0&&(e.setRenderTargetTextures(_,ce.colorTexture,h.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(_))}let C=w[Pe];C===void 0&&(C=new Et,C.layers.enable(Pe),C.viewport=new nt,w[Pe]=C),C.matrix.fromArray(De.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(De.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(re.x,re.y,re.width,re.height),Pe===0&&(M.matrix.copy(C.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),se===!0&&M.cameras.push(C)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Pe=d.getDepthInformation(Q[0]);Pe&&Pe.isValid&&Pe.texture&&v.init(e,Pe,r.renderState)}}for(let Q=0;Q<y.length;Q++){const se=x[Q],Re=y[Q];se!==null&&Re!==void 0&&Re.update(se,ie,c||s)}K&&K(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const We=new Sp;We.setAnimationLoop(Te),this.setAnimationLoop=function(j){K=j},this.dispose=function(){}}}const nn=new si,jM=new Oe;function XM(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,_p(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),u(m,f)):f.isMeshStandardMaterial?(a(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),v(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,_,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Vt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Vt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,nn.copy(x),nn.x*=-1,nn.y*=-1,nn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(nn.y*=-1,nn.z*=-1),m.envMapRotation.value.setFromMatrix4(jM.makeRotationFromEuler(nn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qM(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;i.uniformBlockBinding(_,x)}function c(_,y){let x=r[_.id];x===void 0&&(g(_),x=u(_),r[_.id]=x,_.addEventListener("dispose",m));const A=y.program;i.updateUBOMapping(_,A);const E=e.render.frame;a[_.id]!==E&&(h(_),a[_.id]=E)}function u(_){const y=d();_.__bindingPointIndex=y;const x=n.createBuffer(),A=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,A,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function d(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const y=r[_.id],x=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let E=0,S=x.length;E<S;E++){const R=Array.isArray(x[E])?x[E]:[x[E]];for(let w=0,M=R.length;w<M;w++){const I=R[w];if(p(I,E,w,A)===!0){const N=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let B=0;for(let H=0;H<F.length;H++){const G=F[H],q=v(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,N+B,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,B),B+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,y,x,A){const E=_.value,S=y+"_"+x;if(A[S]===void 0)return typeof E=="number"||typeof E=="boolean"?A[S]=E:A[S]=E.clone(),!0;{const R=A[S];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return A[S]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(_){const y=_.uniforms;let x=0;const A=16;for(let S=0,R=y.length;S<R;S++){const w=Array.isArray(y[S])?y[S]:[y[S]];for(let M=0,I=w.length;M<I;M++){const N=w[M],F=Array.isArray(N.value)?N.value:[N.value];for(let B=0,H=F.length;B<H;B++){const G=F[B],q=v(G),W=x%A,ae=W%q.boundary,ve=W+ae;x+=ae,ve!==0&&A-ve<q.storage&&(x+=A-ve),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=q.storage}}}const E=x%A;return E>0&&(x+=A-E),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=s.indexOf(y.__bindingPointIndex);s.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete a[y.id]}function f(){for(const _ in r)n.deleteBuffer(r[_]);s=[],r={},a={}}return{bind:l,update:c,dispose:f}}class Zo{constructor(e={}){const{canvas:t=Kd(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=s;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=Di,this.toneMappingExposure=1;const y=this;let x=!1,A=0,E=0,S=null,R=-1,w=null;const M=new nt,I=new nt;let N=null;const F=new ge(0);let B=0,H=t.width,G=t.height,q=1,W=null,ae=null;const ve=new nt(0,0,H,G),K=new nt(0,0,H,G);let Te=!1;const We=new Xa;let j=!1,ie=!1;const Q=new Oe,se=new P,Re=new nt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function re(){return S===null?q:1}let C=i;function ce(T,U){return t.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fa}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",de,!1),C===null){const U="webgl2";if(C=ce(U,T),C===null)throw ce(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let fe,le,ue,Ue,_e,Ce,L,b,z,Z,te,$,Ie,me,we,Ve,oe,be,$e,Ge,Me,He,Je,ht;function D(){fe=new e1(C),fe.init(),He=new Kp(C,fe),le=new Yw(C,fe,e,He),ue=new NM(C),Ue=new r1(C),_e=new wM,Ce=new zM(C,fe,ue,_e,le,He,Ue),L=new Jw(y),b=new Qw(y),z=new uy(C),Je=new Xw(C,z),Z=new t1(C,z,Ue,Je),te=new a1(C,Z,z,Ue),$e=new n1(C,le,Ce),Ve=new Zw(_e),$=new xM(y,L,b,fe,le,Je,Ve),Ie=new XM(y,_e),me=new bM,we=new RM(fe),be=new jw(y,L,b,ue,te,h,l),oe=new IM(y,te,le),ht=new qM(C,Ue,le,ue),Ge=new qw(C,fe,Ue),Me=new i1(C,fe,Ue),Ue.programs=$.programs,y.capabilities=le,y.extensions=fe,y.properties=_e,y.renderLists=me,y.shadowMap=oe,y.state=ue,y.info=Ue}D();const he=new WM(y,C);this.xr=he,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const T=fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(H,G,!1))},this.getSize=function(T){return T.set(H,G)},this.setSize=function(T,U,k=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,G=U,t.width=Math.floor(T*q),t.height=Math.floor(U*q),k===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(H*q,G*q).floor()},this.setDrawingBufferSize=function(T,U,k){H=T,G=U,q=k,t.width=Math.floor(T*k),t.height=Math.floor(U*k),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(ve)},this.setViewport=function(T,U,k,V){T.isVector4?ve.set(T.x,T.y,T.z,T.w):ve.set(T,U,k,V),ue.viewport(M.copy(ve).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,U,k,V){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,U,k,V),ue.scissor(I.copy(K).multiplyScalar(q).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(T){ue.setScissorTest(Te=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){ae=T},this.getClearColor=function(T){return T.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(T=!0,U=!0,k=!0){let V=0;if(T){let O=!1;if(S!==null){const ne=S.texture.format;O=ne===js||ne===Ws||ne===Ma}if(O){const ne=S.texture.type,xe=ne===Oi||ne===Zi||ne===En||ne===Gr||ne===Vs||ne===Gs,Se=be.getClearColor(),Ae=be.getClearAlpha(),ze=Se.r,Be=Se.g,Fe=Se.b;xe?(p[0]=ze,p[1]=Be,p[2]=Fe,p[3]=Ae,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=ze,g[1]=Be,g[2]=Fe,g[3]=Ae,C.clearBufferiv(C.COLOR,0,g))}else V|=C.COLOR_BUFFER_BIT}U&&(V|=C.DEPTH_BUFFER_BIT),k&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",de,!1),me.dispose(),we.dispose(),_e.dispose(),L.dispose(),b.dispose(),te.dispose(),Je.dispose(),ht.dispose(),$.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ai),he.removeEventListener("sessionend",gh),Rr.stop()};function Y(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=Ue.autoReset,U=oe.enabled,k=oe.autoUpdate,V=oe.needsUpdate,O=oe.type;D(),Ue.autoReset=T,oe.enabled=U,oe.autoUpdate=k,oe.needsUpdate=V,oe.type=O}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ne(T){const U=T.target;U.removeEventListener("dispose",Ne),lt(U)}function lt(T){xt(T),_e.remove(T)}function xt(T){const U=_e.get(T).programs;U!==void 0&&(U.forEach(function(k){$.releaseProgram(k)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,k,V,O,ne){U===null&&(U=Pe);const xe=O.isMesh&&O.matrixWorld.determinant()<0,Se=hg(T,U,k,V,O);ue.setMaterial(V,xe);let Ae=k.index,ze=1;if(V.wireframe===!0){if(Ae=Z.getWireframeAttribute(k),Ae===void 0)return;ze=2}const Be=k.drawRange,Fe=k.attributes.position;let st=Be.start*ze,wt=(Be.start+Be.count)*ze;ne!==null&&(st=Math.max(st,ne.start*ze),wt=Math.min(wt,(ne.start+ne.count)*ze)),Ae!==null?(st=Math.max(st,0),wt=Math.min(wt,Ae.count)):Fe!=null&&(st=Math.max(st,0),wt=Math.min(wt,Fe.count));const _t=wt-st;if(_t<0||_t===1/0)return;Je.setup(O,V,Se,k,Ae);let Tt,ut=Ge;if(Ae!==null&&(Tt=z.get(Ae),ut=Me,ut.setIndex(Tt)),O.isMesh)V.wireframe===!0?(ue.setLineWidth(V.wireframeLinewidth*re()),ut.setMode(C.LINES)):ut.setMode(C.TRIANGLES);else if(O.isLine){let Le=V.linewidth;Le===void 0&&(Le=1),ue.setLineWidth(Le*re()),O.isLineSegments?ut.setMode(C.LINES):O.isLineLoop?ut.setMode(C.LINE_LOOP):ut.setMode(C.LINE_STRIP)}else O.isPoints?ut.setMode(C.POINTS):O.isSprite&&ut.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ut.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))ut.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Le=O._multiDrawStarts,kt=O._multiDrawCounts,Pr=O._multiDrawCount,mi=Ae?z.get(Ae).bytesPerElement:1,xn=_e.get(V).currentProgram.getUniforms();for(let $t=0;$t<Pr;$t++)xn.setValue(C,"_gl_DrawID",$t),ut.render(Le[$t]/mi,kt[$t])}else if(O.isInstancedMesh)ut.renderInstances(st,_t,O.count);else if(k.isInstancedBufferGeometry){const Le=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,kt=Math.min(k.instanceCount,Le);ut.renderInstances(st,_t,kt)}else ut.render(st,_t)};function It(T,U,k){T.transparent===!0&&T.side===_i&&T.forceSinglePass===!1?(T.side=Vt,T.needsUpdate=!0,bs(T,U,k),T.side=Xi,T.needsUpdate=!0,bs(T,U,k),T.side=_i):bs(T,U,k)}this.compile=function(T,U,k=null){k===null&&(k=T),m=we.get(k),m.init(U),_.push(m),k.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),T!==k&&T.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const V=new Set;return T.traverse(function(O){const ne=O.material;if(ne)if(Array.isArray(ne))for(let xe=0;xe<ne.length;xe++){const Se=ne[xe];It(Se,k,O),V.add(Se)}else It(ne,k,O),V.add(ne)}),_.pop(),m=null,V},this.compileAsync=function(T,U,k=null){const V=this.compile(T,U,k);return new Promise(O=>{function ne(){if(V.forEach(function(xe){_e.get(xe).currentProgram.isReady()&&V.delete(xe)}),V.size===0){O(T);return}setTimeout(ne,10)}fe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let at=null;function Hi(T){at&&at(T)}function Ai(){Rr.stop()}function gh(){Rr.start()}const Rr=new Sp;Rr.setAnimationLoop(Hi),typeof self<"u"&&Rr.setContext(self),this.setAnimationLoop=function(T){at=T,he.setAnimationLoop(T),T===null?Rr.stop():Rr.start()},he.addEventListener("sessionstart",Ai),he.addEventListener("sessionend",gh),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(U),U=he.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,U,S),m=we.get(T,_.length),m.init(U),_.push(m),Q.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),We.setFromProjectionMatrix(Q),ie=this.localClippingEnabled,j=Ve.init(this.clippingPlanes,ie),v=me.get(T,f.length),v.init(),f.push(v),he.enabled===!0&&he.isPresenting===!0){const ne=y.xr.getDepthSensingMesh();ne!==null&&Ql(ne,U,-1/0,y.sortObjects)}Ql(T,U,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(W,ae),De=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,De&&be.addToRenderList(v,T),this.info.render.frame++,j===!0&&Ve.beginShadows();const k=m.state.shadowsArray;oe.render(k,T,U),j===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=v.opaque,O=v.transmissive;if(m.setupLights(),U.isArrayCamera){const ne=U.cameras;if(O.length>0)for(let xe=0,Se=ne.length;xe<Se;xe++){const Ae=ne[xe];_h(V,O,T,Ae)}De&&be.render(T);for(let xe=0,Se=ne.length;xe<Se;xe++){const Ae=ne[xe];vh(v,T,Ae,Ae.viewport)}}else O.length>0&&_h(V,O,T,U),De&&be.render(T),vh(v,T,U);S!==null&&(Ce.updateMultisampleRenderTarget(S),Ce.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(y,T,U),Je.resetDefaultState(),R=-1,w=null,_.pop(),_.length>0?(m=_[_.length-1],j===!0&&Ve.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Ql(T,U,k,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||We.intersectsSprite(T)){V&&Re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const ne=te.update(T),xe=T.material;xe.visible&&v.push(T,ne,xe,k,Re.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||We.intersectsObject(T))){const ne=te.update(T),xe=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Re.copy(T.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Re.copy(ne.boundingSphere.center)),Re.applyMatrix4(T.matrixWorld).applyMatrix4(Q)),Array.isArray(xe)){const Se=ne.groups;for(let Ae=0,ze=Se.length;Ae<ze;Ae++){const Be=Se[Ae],Fe=xe[Be.materialIndex];Fe&&Fe.visible&&v.push(T,ne,Fe,k,Re.z,Be)}}else xe.visible&&v.push(T,ne,xe,k,Re.z,null)}}const O=T.children;for(let ne=0,xe=O.length;ne<xe;ne++)Ql(O[ne],U,k,V)}function vh(T,U,k,V){const O=T.opaque,ne=T.transmissive,xe=T.transparent;m.setupLightsView(k),j===!0&&Ve.setGlobalState(y.clippingPlanes,k),V&&ue.viewport(M.copy(V)),O.length>0&&Ms(O,U,k),ne.length>0&&Ms(ne,U,k),xe.length>0&&Ms(xe,U,k),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function _h(T,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new yi(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float")?Tn:Oi,minFilter:Ui,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const O=m.state.transmissionRenderTarget[V.id],ne=V.viewport||M;O.setSize(ne.z,ne.w);const xe=y.getRenderTarget();y.setRenderTarget(O),y.getClearColor(F),B=y.getClearAlpha(),B<1&&y.setClearColor(16777215,.5),y.clear(),De&&be.render(k);const Se=y.toneMapping;y.toneMapping=Di;const Ae=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),j===!0&&Ve.setGlobalState(y.clippingPlanes,V),Ms(T,k,V),Ce.updateMultisampleRenderTarget(O),Ce.updateRenderTargetMipmap(O),fe.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Be=0,Fe=U.length;Be<Fe;Be++){const st=U[Be],wt=st.object,_t=st.geometry,Tt=st.material,ut=st.group;if(Tt.side===_i&&wt.layers.test(V.layers)){const Le=Tt.side;Tt.side=Vt,Tt.needsUpdate=!0,yh(wt,k,V,_t,Tt,ut),Tt.side=Le,Tt.needsUpdate=!0,ze=!0}}ze===!0&&(Ce.updateMultisampleRenderTarget(O),Ce.updateRenderTargetMipmap(O))}y.setRenderTarget(xe),y.setClearColor(F,B),Ae!==void 0&&(V.viewport=Ae),y.toneMapping=Se}function Ms(T,U,k){const V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ne=T.length;O<ne;O++){const xe=T[O],Se=xe.object,Ae=xe.geometry,ze=V===null?xe.material:V,Be=xe.group;Se.layers.test(k.layers)&&yh(Se,U,k,Ae,ze,Be)}}function yh(T,U,k,V,O,ne){T.onBeforeRender(y,U,k,V,O,ne),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(y,U,k,V,T,ne),O.transparent===!0&&O.side===_i&&O.forceSinglePass===!1?(O.side=Vt,O.needsUpdate=!0,y.renderBufferDirect(k,U,V,O,T,ne),O.side=Xi,O.needsUpdate=!0,y.renderBufferDirect(k,U,V,O,T,ne),O.side=_i):y.renderBufferDirect(k,U,V,O,T,ne),T.onAfterRender(y,U,k,V,O,ne)}function bs(T,U,k){U.isScene!==!0&&(U=Pe);const V=_e.get(T),O=m.state.lights,ne=m.state.shadowsArray,xe=O.state.version,Se=$.getParameters(T,O.state,ne,U,k),Ae=$.getProgramCacheKey(Se);let ze=V.programs;V.environment=T.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(T.isMeshStandardMaterial?b:L).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,ze===void 0&&(T.addEventListener("dispose",Ne),ze=new Map,V.programs=ze);let Be=ze.get(Ae);if(Be!==void 0){if(V.currentProgram===Be&&V.lightsStateVersion===xe)return wh(T,Se),Be}else Se.uniforms=$.getUniforms(T),T.onBeforeCompile(Se,y),Be=$.acquireProgram(Se,Ae),ze.set(Ae,Be),V.uniforms=Se.uniforms;const Fe=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=Ve.uniform),wh(T,Se),V.needsLights=pg(T),V.lightsStateVersion=xe,V.needsLights&&(Fe.ambientLightColor.value=O.state.ambient,Fe.lightProbe.value=O.state.probe,Fe.directionalLights.value=O.state.directional,Fe.directionalLightShadows.value=O.state.directionalShadow,Fe.spotLights.value=O.state.spot,Fe.spotLightShadows.value=O.state.spotShadow,Fe.rectAreaLights.value=O.state.rectArea,Fe.ltc_1.value=O.state.rectAreaLTC1,Fe.ltc_2.value=O.state.rectAreaLTC2,Fe.pointLights.value=O.state.point,Fe.pointLightShadows.value=O.state.pointShadow,Fe.hemisphereLights.value=O.state.hemi,Fe.directionalShadowMap.value=O.state.directionalShadowMap,Fe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Fe.spotShadowMap.value=O.state.spotShadowMap,Fe.spotLightMatrix.value=O.state.spotLightMatrix,Fe.spotLightMap.value=O.state.spotLightMap,Fe.pointShadowMap.value=O.state.pointShadowMap,Fe.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Be,V.uniformsList=null,Be}function xh(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=qo.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function wh(T,U){const k=_e.get(T);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function hg(T,U,k,V,O){U.isScene!==!0&&(U=Pe),Ce.resetTextureUnits();const ne=U.fog,xe=V.isMeshStandardMaterial?U.environment:null,Se=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Ki,Ae=(V.isMeshStandardMaterial?b:L).get(V.envMap||xe),ze=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Be=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Fe=!!k.morphAttributes.position,st=!!k.morphAttributes.normal,wt=!!k.morphAttributes.color;let _t=Di;V.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(_t=y.toneMapping);const Tt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ut=Tt!==void 0?Tt.length:0,Le=_e.get(V),kt=m.state.lights;if(j===!0&&(ie===!0||T!==w)){const li=T===w&&V.id===R;Ve.setState(V,T,li)}let Pr=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==kt.state.version||Le.outputColorSpace!==Se||O.isBatchedMesh&&Le.batching===!1||!O.isBatchedMesh&&Le.batching===!0||O.isBatchedMesh&&Le.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Le.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Le.instancing===!1||!O.isInstancedMesh&&Le.instancing===!0||O.isSkinnedMesh&&Le.skinning===!1||!O.isSkinnedMesh&&Le.skinning===!0||O.isInstancedMesh&&Le.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Le.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Le.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Le.instancingMorph===!1&&O.morphTexture!==null||Le.envMap!==Ae||V.fog===!0&&Le.fog!==ne||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Ve.numPlanes||Le.numIntersection!==Ve.numIntersection)||Le.vertexAlphas!==ze||Le.vertexTangents!==Be||Le.morphTargets!==Fe||Le.morphNormals!==st||Le.morphColors!==wt||Le.toneMapping!==_t||Le.morphTargetsCount!==ut)&&(Pr=!0):(Pr=!0,Le.__version=V.version);let mi=Le.currentProgram;Pr===!0&&(mi=bs(V,U,O));let xn=!1,$t=!1,ec=!1;const Mt=mi.getUniforms(),cr=Le.uniforms;if(ue.useProgram(mi.program)&&(xn=!0,$t=!0,ec=!0),V.id!==R&&(R=V.id,$t=!0),xn||w!==T){Mt.setValue(C,"projectionMatrix",T.projectionMatrix),Mt.setValue(C,"viewMatrix",T.matrixWorldInverse);const li=Mt.map.cameraPosition;li!==void 0&&li.setValue(C,se.setFromMatrixPosition(T.matrixWorld)),le.logarithmicDepthBuffer&&Mt.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Mt.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,$t=!0,ec=!0)}if(O.isSkinnedMesh){Mt.setOptional(C,O,"bindMatrix"),Mt.setOptional(C,O,"bindMatrixInverse");const li=O.skeleton;li&&(li.boneTexture===null&&li.computeBoneTexture(),Mt.setValue(C,"boneTexture",li.boneTexture,Ce))}O.isBatchedMesh&&(Mt.setOptional(C,O,"batchingTexture"),Mt.setValue(C,"batchingTexture",O._matricesTexture,Ce),Mt.setOptional(C,O,"batchingIdTexture"),Mt.setValue(C,"batchingIdTexture",O._indirectTexture,Ce),Mt.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&Mt.setValue(C,"batchingColorTexture",O._colorsTexture,Ce));const tc=k.morphAttributes;if((tc.position!==void 0||tc.normal!==void 0||tc.color!==void 0)&&$e.update(O,k,mi),($t||Le.receiveShadow!==O.receiveShadow)&&(Le.receiveShadow=O.receiveShadow,Mt.setValue(C,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(cr.envMap.value=Ae,cr.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(cr.envMapIntensity.value=U.environmentIntensity),$t&&(Mt.setValue(C,"toneMappingExposure",y.toneMappingExposure),Le.needsLights&&dg(cr,ec),ne&&V.fog===!0&&Ie.refreshFogUniforms(cr,ne),Ie.refreshMaterialUniforms(cr,V,q,G,m.state.transmissionRenderTarget[T.id]),qo.upload(C,xh(Le),cr,Ce)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(qo.upload(C,xh(Le),cr,Ce),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Mt.setValue(C,"center",O.center),Mt.setValue(C,"modelViewMatrix",O.modelViewMatrix),Mt.setValue(C,"normalMatrix",O.normalMatrix),Mt.setValue(C,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const li=V.uniformsGroups;for(let ic=0,fg=li.length;ic<fg;ic++){const Mh=li[ic];ht.update(Mh,mi),ht.bind(Mh,mi)}}return mi}function dg(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function pg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,U,k){_e.get(T.texture).__webglTexture=U,_e.get(T.depthTexture).__webglTexture=k;const V=_e.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const k=_e.get(T);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,k=0){S=T,A=U,E=k;let V=!0,O=null,ne=!1,xe=!1;if(T){const Se=_e.get(T);if(Se.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(Se.__webglFramebuffer===void 0)Ce.setupRenderTarget(T);else if(Se.__hasExternalTextures)Ce.rebindTextures(T,_e.get(T.texture).__webglTexture,_e.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Be=T.depthTexture;if(Se.__boundDepthTexture!==Be){if(Be!==null&&_e.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ce.setupDepthRenderbuffer(T)}}const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(xe=!0);const ze=_e.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[U])?O=ze[U][k]:O=ze[U],ne=!0):T.samples>0&&Ce.useMultisampledRTT(T)===!1?O=_e.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?O=ze[k]:O=ze,M.copy(T.viewport),I.copy(T.scissor),N=T.scissorTest}else M.copy(ve).multiplyScalar(q).floor(),I.copy(K).multiplyScalar(q).floor(),N=Te;if(ue.bindFramebuffer(C.FRAMEBUFFER,O)&&V&&ue.drawBuffers(T,O),ue.viewport(M),ue.scissor(I),ue.setScissorTest(N),ne){const Se=_e.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,k)}else if(xe){const Se=_e.get(T.texture),Ae=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Se.__webglTexture,k||0,Ae)}R=-1},this.readRenderTargetPixels=function(T,U,k,V,O,ne,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){ue.bindFramebuffer(C.FRAMEBUFFER,Se);try{const Ae=T.texture,ze=Ae.format,Be=Ae.type;if(!le.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&k>=0&&k<=T.height-O&&C.readPixels(U,k,V,O,He.convert(ze),He.convert(Be),ne)}finally{const Ae=S!==null?_e.get(S).__webglFramebuffer:null;ue.bindFramebuffer(C.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(T,U,k,V,O,ne,xe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){ue.bindFramebuffer(C.FRAMEBUFFER,Se);try{const Ae=T.texture,ze=Ae.format,Be=Ae.type;if(!le.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-V&&k>=0&&k<=T.height-O){const Fe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Fe),C.bufferData(C.PIXEL_PACK_BUFFER,ne.byteLength,C.STREAM_READ),C.readPixels(U,k,V,O,He.convert(ze),He.convert(Be),0),C.flush();const st=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await U_(C,st,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,Fe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ne)}finally{C.deleteBuffer(Fe),C.deleteSync(st)}return ne}}finally{const Ae=S!==null?_e.get(S).__webglFramebuffer:null;ue.bindFramebuffer(C.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(T,U=null,k=0){T.isTexture!==!0&&(Rn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const V=Math.pow(2,-k),O=Math.floor(T.image.width*V),ne=Math.floor(T.image.height*V),xe=U!==null?U.x:0,Se=U!==null?U.y:0;Ce.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,xe,Se,O,ne),ue.unbindTexture()},this.copyTextureToTexture=function(T,U,k=null,V=null,O=0){T.isTexture!==!0&&(Rn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1],U=arguments[2],O=arguments[3]||0,k=null);let ne,xe,Se,Ae,ze,Be;k!==null?(ne=k.max.x-k.min.x,xe=k.max.y-k.min.y,Se=k.min.x,Ae=k.min.y):(ne=T.image.width,xe=T.image.height,Se=0,Ae=0),V!==null?(ze=V.x,Be=V.y):(ze=0,Be=0);const Fe=He.convert(U.format),st=He.convert(U.type);Ce.setTexture2D(U,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const wt=C.getParameter(C.UNPACK_ROW_LENGTH),_t=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Tt=C.getParameter(C.UNPACK_SKIP_PIXELS),ut=C.getParameter(C.UNPACK_SKIP_ROWS),Le=C.getParameter(C.UNPACK_SKIP_IMAGES),kt=T.isCompressedTexture?T.mipmaps[O]:T.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,kt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,kt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Se),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ae),T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,O,ze,Be,ne,xe,Fe,st,kt.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,O,ze,Be,kt.width,kt.height,Fe,kt.data):C.texSubImage2D(C.TEXTURE_2D,O,ze,Be,ne,xe,Fe,st,kt),C.pixelStorei(C.UNPACK_ROW_LENGTH,wt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,_t),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Tt),C.pixelStorei(C.UNPACK_SKIP_ROWS,ut),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Le),O===0&&U.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(T,U,k=null,V=null,O=0){T.isTexture!==!0&&(Rn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,T=arguments[2],U=arguments[3],O=arguments[4]||0);let ne,xe,Se,Ae,ze,Be,Fe,st,wt;const _t=T.isCompressedTexture?T.mipmaps[O]:T.image;k!==null?(ne=k.max.x-k.min.x,xe=k.max.y-k.min.y,Se=k.max.z-k.min.z,Ae=k.min.x,ze=k.min.y,Be=k.min.z):(ne=_t.width,xe=_t.height,Se=_t.depth,Ae=0,ze=0,Be=0),V!==null?(Fe=V.x,st=V.y,wt=V.z):(Fe=0,st=0,wt=0);const Tt=He.convert(U.format),ut=He.convert(U.type);let Le;if(U.isData3DTexture)Ce.setTexture3D(U,0),Le=C.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Ce.setTexture2DArray(U,0),Le=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const kt=C.getParameter(C.UNPACK_ROW_LENGTH),Pr=C.getParameter(C.UNPACK_IMAGE_HEIGHT),mi=C.getParameter(C.UNPACK_SKIP_PIXELS),xn=C.getParameter(C.UNPACK_SKIP_ROWS),$t=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,_t.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,_t.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ae),C.pixelStorei(C.UNPACK_SKIP_ROWS,ze),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Be),T.isDataTexture||T.isData3DTexture?C.texSubImage3D(Le,O,Fe,st,wt,ne,xe,Se,Tt,ut,_t.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Le,O,Fe,st,wt,ne,xe,Se,Tt,_t.data):C.texSubImage3D(Le,O,Fe,st,wt,ne,xe,Se,Tt,ut,_t),C.pixelStorei(C.UNPACK_ROW_LENGTH,kt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Pr),C.pixelStorei(C.UNPACK_SKIP_PIXELS,mi),C.pixelStorei(C.UNPACK_SKIP_ROWS,xn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,$t),O===0&&U.generateMipmaps&&C.generateMipmap(Le),ue.unbindTexture()},this.initRenderTarget=function(T){_e.get(T).__webglFramebuffer===void 0&&Ce.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ce.setTextureCube(T,0):T.isData3DTexture?Ce.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ce.setTexture2DArray(T,0):Ce.setTexture2D(T,0),ue.unbindTexture()},this.resetState=function(){A=0,E=0,S=null,ue.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Mo?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===Pa?"display-p3":"srgb"}}class Fl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new Fl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ge(e),this.near=t,this.far=i}clone(){return new Bl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jo extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ko{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Da,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Rn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new P;class yn{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ht(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ht(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ht(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ht(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ht(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array),r=je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array),r=je(r,this.array),a=je(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vu extends Bt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $n;const Ya=new P,Qn=new P,ea=new P,ta=new J,Za=new J,Qp=new Oe,$o=new P,Ja=new P,Qo=new P,ef=new J,_u=new J,tf=new J;class rf extends Qe{constructor(e=new vu){if(super(),this.isSprite=!0,this.type="Sprite",$n===void 0){$n=new Ze;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ko(t,5);$n.setIndex([0,1,2,0,2,3]),$n.setAttribute("position",new yn(i,3,0,!1)),$n.setAttribute("uv",new yn(i,2,3,!1))}this.geometry=$n,this.material=e,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qn.setFromMatrixScale(this.matrixWorld),Qp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ea.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qn.multiplyScalar(-ea.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const s=this.center;el($o.set(-.5,-.5,0),ea,s,Qn,r,a),el(Ja.set(.5,-.5,0),ea,s,Qn,r,a),el(Qo.set(.5,.5,0),ea,s,Qn,r,a),ef.set(0,0),_u.set(1,0),tf.set(1,1);let o=e.ray.intersectTriangle($o,Ja,Qo,!1,Ya);if(o===null&&(el(Ja.set(-.5,.5,0),ea,s,Qn,r,a),_u.set(0,1),o=e.ray.intersectTriangle($o,Qo,Ja,!1,Ya),o===null))return;const l=e.ray.origin.distanceTo(Ya);l<e.near||l>e.far||t.push({distance:l,point:Ya.clone(),uv:oi.getInterpolation(Ya,$o,Ja,Qo,ef,_u,tf,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function el(n,e,t,i,r,a){ta.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Za.x=a*ta.x-r*ta.y,Za.y=r*ta.x+a*ta.y):Za.copy(ta),n.copy(e),n.x+=Za.x,n.y+=Za.y,n.applyMatrix4(Qp)}const tl=new P,nf=new P;class af extends Qe{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,r=t.length;i<r;i++){const a=t[i];this.addLevel(a.object.clone(),a.distance,a.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const r=this.levels;let a;for(a=0;a<r.length&&!(t<r[a].distance);a++);return r.splice(a,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),e<a)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){tl.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(tl);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){tl.setFromMatrixPosition(e.matrixWorld),nf.setFromMatrixPosition(this.matrixWorld);const i=tl.distanceTo(nf)/e.zoom;t[0].object.visible=!0;let r,a;for(r=1,a=t.length;r<a;r++){let s=t[r].distance;if(t[r].object.visible&&(s-=s*t[r].hysteresis),i>=s)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<a;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const i=this.levels;for(let r=0,a=i.length;r<a;r++){const s=i[r];t.object.levels.push({object:s.object.uuid,distance:s.distance,hysteresis:s.hysteresis})}return t}}const sf=new P,of=new nt,lf=new nt,YM=new P,cf=new Oe,il=new P,yu=new Ot,uf=new Oe,xu=new Un;class hf extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yc,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,il),this.boundingBox.expandByPoint(il)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ot),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,il),this.boundingSphere.expandByPoint(il)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yu.copy(this.boundingSphere),yu.applyMatrix4(r),e.ray.intersectsSphere(yu)!==!1&&(uf.copy(r).invert(),xu.copy(e.ray).applyMatrix4(uf),!(this.boundingBox!==null&&xu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ud?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;of.fromBufferAttribute(r.attributes.skinIndex,e),lf.fromBufferAttribute(r.attributes.skinWeight,e),sf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const s=lf.getComponent(a);if(s!==0){const o=of.getComponent(a);cf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(YM.copy(sf).applyMatrix4(cf),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class wu extends Qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class zi extends vt{constructor(e=null,t=1,i=1,r,a,s,o,l,c=Pt,u=Pt,d,h){super(null,s,o,l,c,u,r,a,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const df=new Oe,ZM=new Oe;class zl{constructor(e=[],t=[]){this.uuid=ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Oe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let a=0,s=e.length;a<s;a++){const o=e[a]?e[a].matrixWorld:ZM;df.multiplyMatrices(o,t[a]),df.toArray(i,a*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new zl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new zi(t,e,e,Gt,Yt);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const a=e.bones[i];let s=t[a];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),s=new wu),this.bones.push(s),this.boneInverses.push(new Oe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,a=t.length;r<a;r++){const s=t[r];e.bones.push(s.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class ia extends ot{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ra=new Oe,pf=new Oe,rl=[],ff=new Wt,JM=new Oe,Ka=new dt,$a=new Ot;class mf extends dt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ia(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,JM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ra),ff.copy(e.boundingBox).applyMatrix4(ra),this.boundingBox.union(ff)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ot),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ra),$a.copy(e.boundingSphere).applyMatrix4(ra),this.boundingSphere.union($a)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,s=e*a+1;for(let o=0;o<i.length;o++)i[o]=r[s+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ka.geometry=this.geometry,Ka.material=this.material,Ka.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$a.copy(this.boundingSphere),$a.applyMatrix4(i),e.ray.intersectsSphere($a)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,ra),pf.multiplyMatrices(i,ra),Ka.matrixWorld=pf,Ka.raycast(e,rl);for(let s=0,o=rl.length;s<o;s++){const l=rl[s];l.instanceId=a,l.object=this,t.push(l)}rl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ia(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new zi(new Float32Array(r*this.count),r,this.count,Hs,Yt));const a=this.morphTexture.source.data.data;let s=0;for(let c=0;c<i.length;c++)s+=i[c];const o=this.geometry.morphTargetsRelative?1:1-s,l=r*e;a[l]=o,a.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function KM(n,e){return n.z-e.z}function $M(n,e){return e.z-n.z}class QM{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const s=r[this.index];a.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t,s.index=i}reset(){this.list.length=0,this.index=0}}const Mr=new Oe,Mu=new Oe,eb=new Oe,tb=new ge(1,1,1),gf=new Oe,bu=new Xa,nl=new Wt,an=new Ot,Qa=new P,vf=new P,ib=new P,Su=new QM,zt=new dt,al=[];function rb(n,e,t=0){const i=e.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==e.array.constructor){const r=n.count;for(let a=0;a<r;a++)for(let s=0;s<i;s++)e.setComponent(a+t,s,n.getComponent(a,s))}else e.array.set(n.array,t*i);e.needsUpdate=!0}class _f extends dt{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,i=t*2,r){super(new Ze,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new zi(t,e,e,Gt,Yt);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),i=new zi(t,e,e,Ma,Zi);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),i=new zi(t,e,e,Gt,Yt);i.colorSpace=rt.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const a in e.attributes){const s=e.getAttribute(a),{array:o,itemSize:l,normalized:c}=s,u=new o.constructor(i*l),d=new ot(u,l,c);t.setAttribute(a,d)}if(e.getIndex()!==null){const a=i>65535?new Uint32Array(r):new Uint16Array(r);t.setIndex(new ot(a,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(!e.hasAttribute(i))throw new Error(`BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const r=e.getAttribute(i),a=t.getAttribute(i);if(r.itemSize!==a.itemSize||r.normalized!==a.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);const e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let i=0,r=t.length;i<r;i++){if(t[i].active===!1)continue;const a=t[i].geometryIndex;this.getMatrixAt(i,Mr),this.getBoundingBoxAt(a,nl).applyMatrix4(Mr),e.union(nl)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let i=0,r=t.length;i<r;i++){if(t[i].active===!1)continue;const a=t[i].geometryIndex;this.getMatrixAt(i,Mr),this.getBoundingSphereAt(a,an).applyMatrix4(Mr),e.union(an)}}addInstance(e){if(this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");this._drawInfo.push({visible:!0,active:!0,geometryIndex:e});const t=this._drawInfo.length-1,i=this._matricesTexture,r=i.image.data;eb.toArray(r,t*16),i.needsUpdate=!0;const a=this._colorsTexture;return a&&(tb.toArray(a.image.data,t*4),a.needsUpdate=!0),t}addGeometry(e,t=-1,i=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const r={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let a=null;const s=this._reservedRanges,o=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(a=s[s.length-1]),t===-1?r.vertexCount=e.getAttribute("position").count:r.vertexCount=t,a===null?r.vertexStart=0:r.vertexStart=a.vertexStart+a.vertexCount;const c=e.getIndex(),u=c!==null;if(u&&(i===-1?r.indexCount=c.count:r.indexCount=i,a===null?r.indexStart=0:r.indexStart=a.indexStart+a.indexCount),r.indexStart!==-1&&r.indexStart+r.indexCount>this._maxIndexCount||r.vertexStart+r.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const d=this._geometryCount;return this._geometryCount++,s.push(r),o.push({start:u?r.indexStart:r.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new Wt,sphereInitialized:!1,sphere:new Ot}),this.setGeometryAt(d,e),d}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,r=i.getIndex()!==null,a=i.getIndex(),s=t.getIndex(),o=this._reservedRanges[e];if(r&&s.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.vertexCount;for(const p in i.attributes){const g=t.getAttribute(p),v=i.getAttribute(p);rb(g,v,l);const m=g.itemSize;for(let f=g.count,_=c;f<_;f++){const y=l+f;for(let x=0;x<m;x++)v.setComponent(y,x,0)}v.needsUpdate=!0,v.addUpdateRange(l*m,c*m)}if(r){const p=o.indexStart;for(let g=0;g<s.count;g++)a.setX(p+g,l+s.getX(g));for(let g=s.count,v=o.indexCount;g<v;g++)a.setX(p+g,l);a.needsUpdate=!0,a.addUpdateRange(p,o.indexCount)}const u=this._bounds[e];t.boundingBox!==null?(u.box.copy(t.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,t.boundingSphere!==null?(u.sphere.copy(t.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const d=this._drawRanges[e],h=t.getAttribute("position");return d.count=r?s.count:h.count,this._visibilityChanged=!0,e}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const i=this._bounds[e],r=i.box,a=this.geometry;if(i.boxInitialized===!1){r.makeEmpty();const s=a.index,o=a.attributes.position,l=this._drawRanges[e];for(let c=l.start,u=l.start+l.count;c<u;c++){let d=c;s&&(d=s.getX(d)),r.expandByPoint(Qa.fromBufferAttribute(o,d))}i.boxInitialized=!0}return t.copy(r),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const i=this._bounds[e],r=i.sphere,a=this.geometry;if(i.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(e,nl),nl.getCenter(r.center);const s=a.index,o=a.attributes.position,l=this._drawRanges[e];let c=0;for(let u=l.start,d=l.start+l.count;u<d;u++){let h=u;s&&(h=s.getX(h)),Qa.fromBufferAttribute(o,h),c=Math.max(c,r.center.distanceToSquared(Qa))}r.radius=Math.sqrt(c),i.sphereInitialized=!0}return t.copy(r),t}setMatrixAt(e,t){const i=this._drawInfo,r=this._matricesTexture,a=this._matricesTexture.image.data;return e>=i.length||i[e].active===!1?this:(t.toArray(a,e*16),r.needsUpdate=!0,this)}getMatrixAt(e,t){const i=this._drawInfo,r=this._matricesTexture.image.data;return e>=i.length||i[e].active===!1?null:t.fromArray(r,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const i=this._colorsTexture,r=this._colorsTexture.image.data,a=this._drawInfo;return e>=a.length||a[e].active===!1?this:(t.toArray(r,e*4),i.needsUpdate=!0,this)}getColorAt(e,t){const i=this._colorsTexture.image.data,r=this._drawInfo;return e>=r.length||r[e].active===!1?null:t.fromArray(i,e*4)}setVisibleAt(e,t){const i=this._drawInfo;return e>=i.length||i[e].active===!1||i[e].visible===t?this:(i[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}raycast(e,t){const i=this._drawInfo,r=this._drawRanges,a=this.matrixWorld,s=this.geometry;zt.material=this.material,zt.geometry.index=s.index,zt.geometry.attributes=s.attributes,zt.geometry.boundingBox===null&&(zt.geometry.boundingBox=new Wt),zt.geometry.boundingSphere===null&&(zt.geometry.boundingSphere=new Ot);for(let o=0,l=i.length;o<l;o++){if(!i[o].visible||!i[o].active)continue;const c=i[o].geometryIndex,u=r[c];zt.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,zt.matrixWorld).premultiply(a),this.getBoundingBoxAt(c,zt.geometry.boundingBox),this.getBoundingSphereAt(c,zt.geometry.boundingSphere),zt.raycast(e,al);for(let d=0,h=al.length;d<h;d++){const p=al[d];p.object=this,p.batchId=o,t.push(p)}al.length=0}zt.material=null,zt.geometry.index=null,zt.geometry.attributes={},zt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,i,r,a){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const s=r.getIndex(),o=s===null?1:s.array.BYTES_PER_ELEMENT,l=this._drawInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,d=this._drawRanges,h=this.perObjectFrustumCulled,p=this._indirectTexture,g=p.image.data;h&&(gf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),bu.setFromProjectionMatrix(gf,e.coordinateSystem));let v=0;if(this.sortObjects){Mu.copy(this.matrixWorld).invert(),Qa.setFromMatrixPosition(i.matrixWorld).applyMatrix4(Mu),vf.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(Mu);for(let _=0,y=l.length;_<y;_++)if(l[_].visible&&l[_].active){const x=l[_].geometryIndex;this.getMatrixAt(_,Mr),this.getBoundingSphereAt(x,an).applyMatrix4(Mr);let A=!1;if(h&&(A=!bu.intersectsSphere(an)),!A){const E=ib.subVectors(an.center,Qa).dot(vf);Su.push(d[x],E,_)}}const m=Su.list,f=this.customSort;f===null?m.sort(a.transparent?$M:KM):f.call(this,m,i);for(let _=0,y=m.length;_<y;_++){const x=m[_];c[v]=x.start*o,u[v]=x.count,g[v]=x.index,v++}Su.reset()}else for(let m=0,f=l.length;m<f;m++)if(l[m].visible&&l[m].active){const _=l[m].geometryIndex;let y=!1;if(h&&(this.getMatrixAt(m,Mr),this.getBoundingSphereAt(_,an).applyMatrix4(Mr),y=!bu.intersectsSphere(an)),!y){const x=d[_];c[v]=x.start*o,u[v]=x.count,g[v]=m,v++}}p.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(e,t,i,r,a,s){this.onBeforeRender(e,null,r,a,s)}}class qt extends Bt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sl=new P,ol=new P,yf=new Oe,es=new Un,ll=new Ot,Eu=new P,xf=new P;class br extends Qe{constructor(e=new Ze,t=new qt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)sl.fromBufferAttribute(t,r-1),ol.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=sl.distanceTo(ol);e.setAttribute("lineDistance",new Ee(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(r),ll.radius+=a,e.ray.intersectsSphere(ll)===!1)return;yf.copy(r).invert(),es.copy(e.ray).applyMatrix4(yf);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let g=h,v=p-1;g<v;g+=c){const m=u.getX(g),f=u.getX(g+1),_=cl(this,e,es,l,m,f);_&&t.push(_)}if(this.isLineLoop){const g=u.getX(p-1),v=u.getX(h),m=cl(this,e,es,l,g,v);m&&t.push(m)}}else{const h=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let g=h,v=p-1;g<v;g+=c){const m=cl(this,e,es,l,g,g+1);m&&t.push(m)}if(this.isLineLoop){const g=cl(this,e,es,l,p-1,h);g&&t.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function cl(n,e,t,i,r,a){const s=n.geometry.attributes.position;if(sl.fromBufferAttribute(s,r),ol.fromBufferAttribute(s,a),t.distanceSqToSegment(sl,ol,Eu,xf)>i)return;Eu.applyMatrix4(n.matrixWorld);const o=e.ray.origin.distanceTo(Eu);if(!(o<e.near||o>e.far))return{distance:o,point:xf.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const wf=new P,Mf=new P;class ki extends br{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)wf.fromBufferAttribute(t,r),Mf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+wf.distanceTo(Mf);e.setAttribute("lineDistance",new Ee(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bf extends br{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Tu extends Bt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sf=new Oe,Au=new Un,ul=new Ot,hl=new P;class Ef extends Qe{constructor(e=new Ze,t=new Tu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(r),ul.radius+=a,e.ray.intersectsSphere(ul)===!1)return;Sf.copy(r).invert(),Au.copy(e.ray).applyMatrix4(Sf);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),h=Math.min(c.count,s.start+s.count);for(let p=d,g=h;p<g;p++){const v=c.getX(p);hl.fromBufferAttribute(u,v),Tf(hl,v,l,r,e,t,this)}}else{const d=Math.max(0,s.start),h=Math.min(u.count,s.start+s.count);for(let p=d,g=h;p<g;p++)hl.fromBufferAttribute(u,p),Tf(hl,p,l,r,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function Tf(n,e,t,i,r,a,s){const o=Au.distanceSqToPoint(n);if(o<t){const l=new P;Au.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class nb extends vt{constructor(e,t,i,r,a,s,o,l,c){super(e,t,i,r,a,s,o,l,c),this.isVideoTexture=!0,this.minFilter=s!==void 0?s:bt,this.magFilter=a!==void 0?a:bt,this.generateMipmaps=!1;const u=this;function d(){u.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class ab extends vt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Pt,this.minFilter=Pt,this.generateMipmaps=!1,this.needsUpdate=!0}}class dl extends vt{constructor(e,t,i,r,a,s,o,l,c,u,d,h){super(null,s,o,l,c,u,r,a,d,h),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class sb extends dl{constructor(e,t,i,r,a,s){super(e,t,i,a,s),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=pi,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ob extends dl{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,Yi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class lb extends vt{constructor(e,t,i,r,a,s,o,l,c){super(e,t,i,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const a=i.length;let s;t?s=t:s=e*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-s,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(a-1);const u=i[r],d=i[r+1]-u,h=(s-u)/d;return(r+h)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),s=this.getPoint(r),o=t||(a.isVector2?new J:new P);return o.copy(s).sub(a).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new P,r=[],a=[],s=[],o=new P,l=new Oe;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new P)}a[0]=new P,s[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(mt(r[p-1].dot(r[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}s[p].crossVectors(r[p],a[p])}if(t===!0){let p=Math.acos(mt(a[0].dot(a[e]),-1,1));p/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(p=-p);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),s[g].crossVectors(r[g],a[g])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class pl extends Ei{constructor(e=0,t=0,i=1,r=1,a=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new J){const i=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Af extends pl{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Cu(){let n=0,e=0,t=0,i=0;function r(a,s,o,l){n=a,e=o,t=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){r(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,u,d){let h=(s-a)/c-(o-a)/(c+u)+(o-s)/u,p=(o-s)/u-(l-s)/(u+d)+(l-o)/d;h*=u,p*=u,r(s,o,h,p)},calc:function(a){const s=a*a,o=s*a;return n+e*a+t*s+i*o}}}const fl=new P,Ru=new Cu,Pu=new Cu,Lu=new Cu;class Cf extends Ei{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){const i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%a]:(fl.subVectors(r[0],r[1]).add(r[0]),c=fl);const d=r[o%a],h=r[(o+1)%a];if(this.closed||o+2<a?u=r[(o+2)%a]:(fl.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=fl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ru.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,v,m),Pu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,v,m),Lu.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Ru.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Pu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Lu.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(Ru.calc(l),Pu.calc(l),Lu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Rf(n,e,t,i,r){const a=(i-e)*.5,s=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+a+s)*l+(-3*t+3*i-2*a-s)*o+a*n+t}function cb(n,e){const t=1-n;return t*t*e}function ub(n,e){return 2*(1-n)*n*e}function hb(n,e){return n*n*e}function ts(n,e,t,i){return cb(n,e)+ub(n,t)+hb(n,i)}function db(n,e){const t=1-n;return t*t*t*e}function pb(n,e){const t=1-n;return 3*t*t*n*e}function fb(n,e){return 3*(1-n)*n*n*e}function mb(n,e){return n*n*n*e}function is(n,e,t,i,r){return db(n,e)+pb(n,t)+fb(n,i)+mb(n,r)}class Iu extends Ei{constructor(e=new J,t=new J,i=new J,r=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new J){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(is(e,r.x,a.x,s.x,o.x),is(e,r.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pf extends Ei{constructor(e=new P,t=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(is(e,r.x,a.x,s.x,o.x),is(e,r.y,a.y,s.y,o.y),is(e,r.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nu extends Ei{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lf extends Ei{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Du extends Ei{constructor(e=new J,t=new J,i=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(ts(e,r.x,a.x,s.x),ts(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uu extends Ei{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(ts(e,r.x,a.x,s.x),ts(e,r.y,a.y,s.y),ts(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ou extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,l=r[s===0?s:s-1],c=r[s],u=r[s>r.length-2?r.length-1:s+1],d=r[s>r.length-3?r.length-1:s+2];return i.set(Rf(o,l.x,c.x,u.x,d.x),Rf(o,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new J().fromArray(r))}return this}}var ml=Object.freeze({__proto__:null,ArcCurve:Af,CatmullRomCurve3:Cf,CubicBezierCurve:Iu,CubicBezierCurve3:Pf,EllipseCurve:pl,LineCurve:Nu,LineCurve3:Lf,QuadraticBezierCurve:Du,QuadraticBezierCurve3:Uu,SplineCurve:Ou});class If extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ml[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let a=0;for(;a<r.length;){if(r[a]>=i){const s=r[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,a=this.curves;r<a.length;r++){const s=a[r],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new ml[r.type]().fromJSON(r))}return this}}class rs extends If{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Nu(this.currentPoint.clone(),new J(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const a=new Du(this.currentPoint.clone(),new J(e,t),new J(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){const o=new Iu(this.currentPoint.clone(),new J(e,t),new J(i,r),new J(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ou(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,a,s,o,l),this}absellipse(e,t,i,r,a,s,o,l){const c=new pl(e,t,i,r,a,s,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ys extends Ze{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=mt(r,0,Math.PI*2);const a=[],s=[],o=[],l=[],c=[],u=1/t,d=new P,h=new J,p=new P,g=new P,v=new P;let m=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let _=0;_<=t;_++){const y=i+_*u*r,x=Math.sin(y),A=Math.cos(y);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*x,d.y=e[E].y,d.z=e[E].x*A,s.push(d.x,d.y,d.z),h.x=_/t,h.y=E/(e.length-1),o.push(h.x,h.y);const S=l[3*E+0]*x,R=l[3*E+1],w=l[3*E+0]*A;c.push(S,R,w)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){const x=y+_*e.length,A=x,E=x+e.length,S=x+e.length+1,R=x+1;a.push(A,E,R),a.push(S,R,E)}this.setIndex(a),this.setAttribute("position",new Ee(s,3)),this.setAttribute("uv",new Ee(o,2)),this.setAttribute("normal",new Ee(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.points,e.segments,e.phiStart,e.phiLength)}}class kl extends ys{constructor(e=1,t=1,i=4,r=8){const a=new rs;a.absarc(0,-t/2,e,Math.PI*1.5,0),a.absarc(0,t/2,e,0,Math.PI*.5),super(a.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new kl(e.radius,e.length,e.capSegments,e.radialSegments)}}class Vl extends Ze{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const a=[],s=[],o=[],l=[],c=new P,u=new J;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const p=i+d/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),s.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(s[h]/e+1)/2,u.y=(s[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new Ee(s,3)),this.setAttribute("normal",new Ee(o,3)),this.setAttribute("uv",new Ee(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class sa extends Ze{constructor(e=1,t=1,i=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const u=[],d=[],h=[],p=[];let g=0;const v=[],m=i/2;let f=0;_(),s===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ee(d,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(p,2));function _(){const x=new P,A=new P;let E=0;const S=(t-e)/i;for(let R=0;R<=a;R++){const w=[],M=R/a,I=M*(t-e)+e;for(let N=0;N<=r;N++){const F=N/r,B=F*l+o,H=Math.sin(B),G=Math.cos(B);A.x=I*H,A.y=-M*i+m,A.z=I*G,d.push(A.x,A.y,A.z),x.set(H,S,G).normalize(),h.push(x.x,x.y,x.z),p.push(F,1-M),w.push(g++)}v.push(w)}for(let R=0;R<r;R++)for(let w=0;w<a;w++){const M=v[w][R],I=v[w+1][R],N=v[w+1][R+1],F=v[w][R+1];u.push(M,I,F),u.push(I,N,F),E+=6}c.addGroup(f,E,0),f+=E}function y(x){const A=g,E=new J,S=new P;let R=0;const w=x===!0?e:t,M=x===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),g++;const I=g;for(let N=0;N<=r;N++){const F=N/r*l+o,B=Math.cos(F),H=Math.sin(F);S.x=w*H,S.y=m*M,S.z=w*B,d.push(S.x,S.y,S.z),h.push(0,M,0),E.x=B*.5+.5,E.y=H*.5*M+.5,p.push(E.x,E.y),g++}for(let N=0;N<r;N++){const F=A+N,B=I+N;x===!0?u.push(B,B+1,F):u.push(B+1,B,F),R+=3}c.addGroup(f,R,x===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gl extends sa{constructor(e=1,t=1,i=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,i,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Gl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cr extends Ze{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const a=[],s=[];o(r),c(i),u(),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(a.slice(),3)),this.setAttribute("uv",new Ee(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const y=new P,x=new P,A=new P;for(let E=0;E<t.length;E+=3)p(t[E+0],y),p(t[E+1],x),p(t[E+2],A),l(y,x,A,_)}function l(_,y,x,A){const E=A+1,S=[];for(let R=0;R<=E;R++){S[R]=[];const w=_.clone().lerp(x,R/E),M=y.clone().lerp(x,R/E),I=E-R;for(let N=0;N<=I;N++)N===0&&R===E?S[R][N]=w:S[R][N]=w.clone().lerp(M,N/I)}for(let R=0;R<E;R++)for(let w=0;w<2*(E-R)-1;w++){const M=Math.floor(w/2);w%2===0?(h(S[R][M+1]),h(S[R+1][M]),h(S[R][M])):(h(S[R][M+1]),h(S[R+1][M+1]),h(S[R+1][M]))}}function c(_){const y=new P;for(let x=0;x<a.length;x+=3)y.x=a[x+0],y.y=a[x+1],y.z=a[x+2],y.normalize().multiplyScalar(_),a[x+0]=y.x,a[x+1]=y.y,a[x+2]=y.z}function u(){const _=new P;for(let y=0;y<a.length;y+=3){_.x=a[y+0],_.y=a[y+1],_.z=a[y+2];const x=m(_)/2/Math.PI+.5,A=f(_)/Math.PI+.5;s.push(x,1-A)}g(),d()}function d(){for(let _=0;_<s.length;_+=6){const y=s[_+0],x=s[_+2],A=s[_+4],E=Math.max(y,x,A),S=Math.min(y,x,A);E>.9&&S<.1&&(y<.2&&(s[_+0]+=1),x<.2&&(s[_+2]+=1),A<.2&&(s[_+4]+=1))}}function h(_){a.push(_.x,_.y,_.z)}function p(_,y){const x=_*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const _=new P,y=new P,x=new P,A=new P,E=new J,S=new J,R=new J;for(let w=0,M=0;w<a.length;w+=9,M+=6){_.set(a[w+0],a[w+1],a[w+2]),y.set(a[w+3],a[w+4],a[w+5]),x.set(a[w+6],a[w+7],a[w+8]),E.set(s[M+0],s[M+1]),S.set(s[M+2],s[M+3]),R.set(s[M+4],s[M+5]),A.copy(_).add(y).add(x).divideScalar(3);const I=m(A);v(E,M+0,_,I),v(S,M+2,y,I),v(R,M+4,x,I)}}function v(_,y,x,A){A<0&&_.x===1&&(s[y]=_.x-1),x.x===0&&x.z===0&&(s[y]=A/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.vertices,e.indices,e.radius,e.details)}}class Hl extends Cr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hl(e.radius,e.detail)}}const gl=new P,vl=new P,Fu=new P,_l=new oi;class Nf extends Ze{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Yr*t),a=e.getIndex(),s=e.getAttribute("position"),o=a?a.count:s.count,l=[0,0,0],c=["a","b","c"],u=new Array(3),d={},h=[];for(let p=0;p<o;p+=3){a?(l[0]=a.getX(p),l[1]=a.getX(p+1),l[2]=a.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:g,b:v,c:m}=_l;if(g.fromBufferAttribute(s,l[0]),v.fromBufferAttribute(s,l[1]),m.fromBufferAttribute(s,l[2]),_l.getNormal(Fu),u[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[1]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let f=0;f<3;f++){const _=(f+1)%3,y=u[f],x=u[_],A=_l[c[f]],E=_l[c[_]],S=`${y}_${x}`,R=`${x}_${y}`;R in d&&d[R]?(Fu.dot(d[R].normal)<=r&&(h.push(A.x,A.y,A.z),h.push(E.x,E.y,E.z)),d[R]=null):S in d||(d[S]={index0:l[f],index1:l[_],normal:Fu.clone()})}}for(const p in d)if(d[p]){const{index0:g,index1:v}=d[p];gl.fromBufferAttribute(s,g),vl.fromBufferAttribute(s,v),h.push(gl.x,gl.y,gl.z),h.push(vl.x,vl.y,vl.z)}this.setAttribute("position",new Ee(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class sn extends rs{constructor(e){super(e),this.uuid=ri(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new rs().fromJSON(r))}return this}}const gb={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let a=Df(n,0,r,t,!0);const s=[];if(!a||a.next===a.prev)return s;let o,l,c,u,d,h,p;if(i&&(a=wb(n,e,a,t)),n.length>80*t){o=c=n[0],l=u=n[1];for(let g=t;g<r;g+=t)d=n[g],h=n[g+1],d<o&&(o=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return ns(a,s,t,o,l,p,0),s}};function Df(n,e,t,i,r){let a,s;if(r===Ib(n,e,t,i)>0)for(a=e;a<t;a+=i)s=Ff(a,n[a],n[a+1],s);else for(a=t-i;a>=e;a-=i)s=Ff(a,n[a],n[a+1],s);return s&&yl(s,s.next)&&(ss(s),s=s.next),s}function on(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(yl(t,t.next)||pt(t.prev,t,t.next)===0)){if(ss(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ns(n,e,t,i,r,a,s){if(!n)return;!s&&a&&Tb(n,i,r,a);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,a?_b(n,i,r,a):vb(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),ss(n),n=c.next,o=c.next;continue}if(n=c,n===o){s?s===1?(n=yb(on(n),e,t),ns(n,e,t,i,r,a,2)):s===2&&xb(n,e,t,i,r,a):ns(on(n),e,t,i,r,a,1);break}}}function vb(n){const e=n.prev,t=n,i=n.next;if(pt(e,t,i)>=0)return!1;const r=e.x,a=t.x,s=i.x,o=e.y,l=t.y,c=i.y,u=r<a?r<s?r:s:a<s?a:s,d=o<l?o<c?o:c:l<c?l:c,h=r>a?r>s?r:s:a>s?a:s,p=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=p&&na(r,o,a,l,s,c,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _b(n,e,t,i){const r=n.prev,a=n,s=n.next;if(pt(r,a,s)>=0)return!1;const o=r.x,l=a.x,c=s.x,u=r.y,d=a.y,h=s.y,p=o<l?o<c?o:c:l<c?l:c,g=u<d?u<h?u:h:d<h?d:h,v=o>l?o>c?o:c:l>c?l:c,m=u>d?u>h?u:h:d>h?d:h,f=Bu(p,g,e,t,i),_=Bu(v,m,e,t,i);let y=n.prevZ,x=n.nextZ;for(;y&&y.z>=f&&x&&x.z<=_;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==s&&na(o,u,l,d,c,h,y.x,y.y)&&pt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==s&&na(o,u,l,d,c,h,x.x,x.y)&&pt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==s&&na(o,u,l,d,c,h,y.x,y.y)&&pt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==s&&na(o,u,l,d,c,h,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function yb(n,e,t){let i=n;do{const r=i.prev,a=i.next.next;!yl(r,a)&&Uf(r,i,i.next,a)&&as(r,a)&&as(a,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),ss(i),ss(i.next),i=n=a),i=i.next}while(i!==n);return on(i)}function xb(n,e,t,i,r,a){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Rb(s,o)){let l=Of(s,o);s=on(s,s.next),l=on(l,l.next),ns(s,e,t,i,r,a,0),ns(l,e,t,i,r,a,0);return}o=o.next}s=s.next}while(s!==n)}function wb(n,e,t,i){const r=[];let a,s,o,l,c;for(a=0,s=e.length;a<s;a++)o=e[a]*i,l=a<s-1?e[a+1]*i:n.length,c=Df(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Cb(c));for(r.sort(Mb),a=0;a<r.length;a++)t=bb(r[a],t);return t}function Mb(n,e){return n.x-e.x}function bb(n,e){const t=Sb(n,e);if(!t)return e;const i=Of(t,n);return on(i,i.next),on(t,t.next)}function Sb(n,e){let t=e,i=-1/0,r;const a=n.x,s=n.y;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=a&&h>i&&(i=h,r=t.x<t.next.x?t:t.next,h===a))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,d;t=r;do a>=t.x&&t.x>=l&&a!==t.x&&na(s<c?a:i,s,l,c,s<c?i:a,s,t.x,t.y)&&(d=Math.abs(s-t.y)/(a-t.x),as(t,n)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&Eb(r,t)))&&(r=t,u=d)),t=t.next;while(t!==o);return r}function Eb(n,e){return pt(n.prev,n,e.prev)<0&&pt(e.next,n,n.next)<0}function Tb(n,e,t,i){let r=n;do r.z===0&&(r.z=Bu(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Ab(r)}function Ab(n){let e,t,i,r,a,s,o,l,c=1;do{for(t=n,n=null,a=null,s=0;t;){for(s++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),a?a.nextZ=r:n=r,r.prevZ=a,a=r;t=i}a.nextZ=null,c*=2}while(s>1);return n}function Bu(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Cb(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function na(n,e,t,i,r,a,s,o){return(r-s)*(e-o)>=(n-s)*(a-o)&&(n-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(r-s)*(i-o)}function Rb(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Pb(n,e)&&(as(n,e)&&as(e,n)&&Lb(n,e)&&(pt(n.prev,n,e.prev)||pt(n,e.prev,e))||yl(n,e)&&pt(n.prev,n,n.next)>0&&pt(e.prev,e,e.next)>0)}function pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function yl(n,e){return n.x===e.x&&n.y===e.y}function Uf(n,e,t,i){const r=wl(pt(n,e,t)),a=wl(pt(n,e,i)),s=wl(pt(t,i,n)),o=wl(pt(t,i,e));return!!(r!==a&&s!==o||r===0&&xl(n,t,e)||a===0&&xl(n,i,e)||s===0&&xl(t,n,i)||o===0&&xl(t,e,i))}function xl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function wl(n){return n>0?1:n<0?-1:0}function Pb(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Uf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function as(n,e){return pt(n.prev,n,n.next)<0?pt(n,e,n.next)>=0&&pt(n,n.prev,e)>=0:pt(n,e,n.prev)<0||pt(n,n.next,e)<0}function Lb(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&r<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Of(n,e){const t=new zu(n.i,n.x,n.y),i=new zu(e.i,e.x,e.y),r=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Ff(n,e,t,i){const r=new zu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ss(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function zu(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ib(n,e,t,i){let r=0;for(let a=e,s=t-i;a<t;a+=i)r+=(n[s]-n[a])*(n[a+1]+n[s+1]),s=a;return r}class Gi{static area(e){const t=e.length;let i=0;for(let r=t-1,a=0;a<t;r=a++)i+=e[r].x*e[a].y-e[a].x*e[r].y;return i*.5}static isClockWise(e){return Gi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],a=[];Bf(e),zf(i,e);let s=e.length;t.forEach(Bf);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,zf(i,t[l]);const o=gb.triangulate(i,r);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function Bf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function zf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Wl extends Ze{constructor(e=new sn([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s(c)}this.setAttribute("position",new Ee(r,3)),this.setAttribute("uv",new Ee(a,2)),this.computeVertexNormals();function s(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Nb;let y,x=!1,A,E,S,R;f&&(y=f.getSpacedPoints(u),x=!0,h=!1,A=f.computeFrenetFrames(u,!1),E=new P,S=new P,R=new P),h||(m=0,p=0,g=0,v=0);const w=o.extractPoints(c);let M=w.shape;const I=w.holes;if(!Gi.isClockWise(M)){M=M.reverse();for(let re=0,C=I.length;re<C;re++){const ce=I[re];Gi.isClockWise(ce)&&(I[re]=ce.reverse())}}const N=Gi.triangulateShape(M,I),F=M;for(let re=0,C=I.length;re<C;re++){const ce=I[re];M=M.concat(ce)}function B(re,C,ce){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(C,ce)}const H=M.length,G=N.length;function q(re,C,ce){let fe,le,ue;const Ue=re.x-C.x,_e=re.y-C.y,Ce=ce.x-re.x,L=ce.y-re.y,b=Ue*Ue+_e*_e,z=Ue*L-_e*Ce;if(Math.abs(z)>Number.EPSILON){const Z=Math.sqrt(b),te=Math.sqrt(Ce*Ce+L*L),$=C.x-_e/Z,Ie=C.y+Ue/Z,me=ce.x-L/te,we=ce.y+Ce/te,Ve=((me-$)*L-(we-Ie)*Ce)/(Ue*L-_e*Ce);fe=$+Ue*Ve-re.x,le=Ie+_e*Ve-re.y;const oe=fe*fe+le*le;if(oe<=2)return new J(fe,le);ue=Math.sqrt(oe/2)}else{let Z=!1;Ue>Number.EPSILON?Ce>Number.EPSILON&&(Z=!0):Ue<-Number.EPSILON?Ce<-Number.EPSILON&&(Z=!0):Math.sign(_e)===Math.sign(L)&&(Z=!0),Z?(fe=-_e,le=Ue,ue=Math.sqrt(b)):(fe=Ue,le=_e,ue=Math.sqrt(b/2))}return new J(fe/ue,le/ue)}const W=[];for(let re=0,C=F.length,ce=C-1,fe=re+1;re<C;re++,ce++,fe++)ce===C&&(ce=0),fe===C&&(fe=0),W[re]=q(F[re],F[ce],F[fe]);const ae=[];let ve,K=W.concat();for(let re=0,C=I.length;re<C;re++){const ce=I[re];ve=[];for(let fe=0,le=ce.length,ue=le-1,Ue=fe+1;fe<le;fe++,ue++,Ue++)ue===le&&(ue=0),Ue===le&&(Ue=0),ve[fe]=q(ce[fe],ce[ue],ce[Ue]);ae.push(ve),K=K.concat(ve)}for(let re=0;re<m;re++){const C=re/m,ce=p*Math.cos(C*Math.PI/2),fe=g*Math.sin(C*Math.PI/2)+v;for(let le=0,ue=F.length;le<ue;le++){const Ue=B(F[le],W[le],fe);Q(Ue.x,Ue.y,-ce)}for(let le=0,ue=I.length;le<ue;le++){const Ue=I[le];ve=ae[le];for(let _e=0,Ce=Ue.length;_e<Ce;_e++){const L=B(Ue[_e],ve[_e],fe);Q(L.x,L.y,-ce)}}}const Te=g+v;for(let re=0;re<H;re++){const C=h?B(M[re],K[re],Te):M[re];x?(S.copy(A.normals[0]).multiplyScalar(C.x),E.copy(A.binormals[0]).multiplyScalar(C.y),R.copy(y[0]).add(S).add(E),Q(R.x,R.y,R.z)):Q(C.x,C.y,0)}for(let re=1;re<=u;re++)for(let C=0;C<H;C++){const ce=h?B(M[C],K[C],Te):M[C];x?(S.copy(A.normals[re]).multiplyScalar(ce.x),E.copy(A.binormals[re]).multiplyScalar(ce.y),R.copy(y[re]).add(S).add(E),Q(R.x,R.y,R.z)):Q(ce.x,ce.y,d/u*re)}for(let re=m-1;re>=0;re--){const C=re/m,ce=p*Math.cos(C*Math.PI/2),fe=g*Math.sin(C*Math.PI/2)+v;for(let le=0,ue=F.length;le<ue;le++){const Ue=B(F[le],W[le],fe);Q(Ue.x,Ue.y,d+ce)}for(let le=0,ue=I.length;le<ue;le++){const Ue=I[le];ve=ae[le];for(let _e=0,Ce=Ue.length;_e<Ce;_e++){const L=B(Ue[_e],ve[_e],fe);x?Q(L.x,L.y+y[u-1].y,y[u-1].x+ce):Q(L.x,L.y,d+ce)}}}We(),j();function We(){const re=r.length/3;if(h){let C=0,ce=H*C;for(let fe=0;fe<G;fe++){const le=N[fe];se(le[2]+ce,le[1]+ce,le[0]+ce)}C=u+m*2,ce=H*C;for(let fe=0;fe<G;fe++){const le=N[fe];se(le[0]+ce,le[1]+ce,le[2]+ce)}}else{for(let C=0;C<G;C++){const ce=N[C];se(ce[2],ce[1],ce[0])}for(let C=0;C<G;C++){const ce=N[C];se(ce[0]+H*u,ce[1]+H*u,ce[2]+H*u)}}i.addGroup(re,r.length/3-re,0)}function j(){const re=r.length/3;let C=0;ie(F,C),C+=F.length;for(let ce=0,fe=I.length;ce<fe;ce++){const le=I[ce];ie(le,C),C+=le.length}i.addGroup(re,r.length/3-re,1)}function ie(re,C){let ce=re.length;for(;--ce>=0;){const fe=ce;let le=ce-1;le<0&&(le=re.length-1);for(let ue=0,Ue=u+m*2;ue<Ue;ue++){const _e=H*ue,Ce=H*(ue+1),L=C+fe+_e,b=C+le+_e,z=C+le+Ce,Z=C+fe+Ce;Re(L,b,z,Z)}}}function Q(re,C,ce){l.push(re),l.push(C),l.push(ce)}function se(re,C,ce){Pe(re),Pe(C),Pe(ce);const fe=r.length/3,le=_.generateTopUV(i,r,fe-3,fe-2,fe-1);De(le[0]),De(le[1]),De(le[2])}function Re(re,C,ce,fe){Pe(re),Pe(C),Pe(fe),Pe(C),Pe(ce),Pe(fe);const le=r.length/3,ue=_.generateSideWallUV(i,r,le-6,le-3,le-2,le-1);De(ue[0]),De(ue[1]),De(ue[3]),De(ue[1]),De(ue[2]),De(ue[3])}function Pe(re){r.push(l[re*3+0]),r.push(l[re*3+1]),r.push(l[re*3+2])}function De(re){a.push(re.x),a.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Db(t,i,e)}static fromJSON(e,t){const i=[];for(let a=0,s=e.shapes.length;a<s;a++){const o=t[e.shapes[a]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ml[r.type]().fromJSON(r)),new Wl(i,e.options)}}const Nb={generateTopUV:function(n,e,t,i,r){const a=e[t*3],s=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new J(a,s),new J(o,l),new J(c,u)]},generateSideWallUV:function(n,e,t,i,r,a){const s=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[r*3],p=e[r*3+1],g=e[r*3+2],v=e[a*3],m=e[a*3+1],f=e[a*3+2];return Math.abs(o-u)<Math.abs(s-c)?[new J(s,1-l),new J(c,1-d),new J(h,1-g),new J(v,1-f)]:[new J(o,1-l),new J(u,1-d),new J(p,1-g),new J(m,1-f)]}};function Db(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const a=n[i];t.shapes.push(a.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class jl extends Cr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jl(e.radius,e.detail)}}class xs extends Cr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xs(e.radius,e.detail)}}class Xl extends Ze{constructor(e=.5,t=1,i=32,r=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:a,thetaLength:s},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/r,p=new P,g=new J;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const f=a+m/i*s;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let v=0;v<r;v++){const m=v*(i+1);for(let f=0;f<i;f++){const _=f+m,y=_,x=_+i+1,A=_+i+2,E=_+1;o.push(y,x,E),o.push(x,A,E)}}this.setIndex(o),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ql extends Ze{constructor(e=new sn([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],a=[],s=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(a,3)),this.setAttribute("uv",new Ee(s,2));function c(u){const d=r.length/3,h=u.extractPoints(t);let p=h.shape;const g=h.holes;Gi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){const _=g[m];Gi.isClockWise(_)===!0&&(g[m]=_.reverse())}const v=Gi.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){const _=g[m];p=p.concat(_)}for(let m=0,f=p.length;m<f;m++){const _=p[m];r.push(_.x,_.y,0),a.push(0,0,1),s.push(_.x,_.y)}for(let m=0,f=v.length;m<f;m++){const _=v[m],y=_[0]+d,x=_[1]+d,A=_[2]+d;i.push(y,x,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ub(t,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const s=t[e.shapes[r]];i.push(s)}return new ql(i,e.curveSegments)}}function Ub(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class ws extends Ze{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const u=[],d=new P,h=new P,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const _=[],y=f/i;let x=0;f===0&&s===0?x=.5/t:f===i&&l===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){const E=A/t;d.x=-e*Math.cos(r+E*a)*Math.sin(s+y*o),d.y=e*Math.cos(s+y*o),d.z=e*Math.sin(r+E*a)*Math.sin(s+y*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(E+x,1-y),_.push(c++)}u.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){const y=u[f][_+1],x=u[f][_],A=u[f+1][_],E=u[f+1][_+1];(f!==0||s>0)&&p.push(y,x,E),(f!==i-1||l<Math.PI)&&p.push(x,A,E)}this.setIndex(p),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(v,3)),this.setAttribute("uv",new Ee(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yl extends Cr{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yl(e.radius,e.detail)}}class Zl extends Ze{constructor(e=1,t=.4,i=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:a},i=Math.floor(i),r=Math.floor(r);const s=[],o=[],l=[],c=[],u=new P,d=new P,h=new P;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const v=g/r*a,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const v=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,_=(r+1)*p+g;s.push(v,m,_),s.push(m,f,_)}this.setIndex(s),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Jl extends Ze{constructor(e=1,t=.4,i=64,r=8,a=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:a,q:s},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],c=[],u=[],d=new P,h=new P,p=new P,g=new P,v=new P,m=new P,f=new P;for(let y=0;y<=i;++y){const x=y/i*a*Math.PI*2;_(x,a,s,e,p),_(x+.01,a,s,e,g),m.subVectors(g,p),f.addVectors(g,p),v.crossVectors(m,f),f.crossVectors(v,m),v.normalize(),f.normalize();for(let A=0;A<=r;++A){const E=A/r*Math.PI*2,S=-t*Math.cos(E),R=t*Math.sin(E);d.x=p.x+(S*f.x+R*v.x),d.y=p.y+(S*f.y+R*v.y),d.z=p.z+(S*f.z+R*v.z),l.push(d.x,d.y,d.z),h.subVectors(d,p).normalize(),c.push(h.x,h.y,h.z),u.push(y/i),u.push(A/r)}}for(let y=1;y<=i;y++)for(let x=1;x<=r;x++){const A=(r+1)*(y-1)+(x-1),E=(r+1)*y+(x-1),S=(r+1)*y+x,R=(r+1)*(y-1)+x;o.push(A,E,R),o.push(E,S,R)}this.setIndex(o),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(u,2));function _(y,x,A,E,S){const R=Math.cos(y),w=Math.sin(y),M=A/x*y,I=Math.cos(M);S.x=E*(2+I)*.5*R,S.y=E*(2+I)*w*.5,S.z=E*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Kl extends Ze{constructor(e=new Uu(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:a};const s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const o=new P,l=new P,c=new J;let u=new P;const d=[],h=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Ee(d,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(p,2));function v(){for(let y=0;y<t;y++)m(y);m(a===!1?t:0),_(),f()}function m(y){u=e.getPointAt(y/t,u);const x=s.normals[y],A=s.binormals[y];for(let E=0;E<=r;E++){const S=E/r*Math.PI*2,R=Math.sin(S),w=-Math.cos(S);l.x=w*x.x+R*A.x,l.y=w*x.y+R*A.y,l.z=w*x.z+R*A.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let y=1;y<=t;y++)for(let x=1;x<=r;x++){const A=(r+1)*(y-1)+(x-1),E=(r+1)*y+(x-1),S=(r+1)*y+x,R=(r+1)*(y-1)+x;g.push(A,E,R),g.push(E,S,R)}}function _(){for(let y=0;y<=t;y++)for(let x=0;x<=r;x++)c.x=y/t,c.y=x/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Kl(new ml[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class kf extends Ze{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new P,a=new P;if(e.index!==null){const s=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],h=d.start,p=d.count;for(let g=h,v=h+p;g<v;g+=3)for(let m=0;m<3;m++){const f=o.getX(g+m),_=o.getX(g+(m+1)%3);r.fromBufferAttribute(s,f),a.fromBufferAttribute(s,_),Vf(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{const s=e.attributes.position;for(let o=0,l=s.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,d=3*o+(c+1)%3;r.fromBufferAttribute(s,u),a.fromBufferAttribute(s,d),Vf(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new Ee(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Vf(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}var Gf=Object.freeze({__proto__:null,BoxGeometry:_n,CapsuleGeometry:kl,CircleGeometry:Vl,ConeGeometry:Gl,CylinderGeometry:sa,DodecahedronGeometry:Hl,EdgesGeometry:Nf,ExtrudeGeometry:Wl,IcosahedronGeometry:jl,LatheGeometry:ys,OctahedronGeometry:xs,PlaneGeometry:Ar,PolyhedronGeometry:Cr,RingGeometry:Xl,ShapeGeometry:ql,SphereGeometry:ws,TetrahedronGeometry:Yl,TorusGeometry:Zl,TorusKnotGeometry:Jl,TubeGeometry:Kl,WireframeGeometry:kf});class Hf extends Bt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ge(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Wf extends bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ku extends Bt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jf extends ku{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xf extends Bt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ge(16777215),this.specular=new ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qf extends Bt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Yf extends Bt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Zf extends Bt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jf extends Bt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ge(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kf extends qt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function ln(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function $f(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Qf(n){function e(r,a){return n[r]-n[a]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Vu(n,e,t){const i=n.length,r=new n.constructor(i);for(let a=0,s=0;s!==i;++a){const o=t[a]*e;for(let l=0;l!==e;++l)r[s++]=n[o+l]}return r}function Gu(n,e,t,i){let r=1,a=n[0];for(;a!==void 0&&a[i]===void 0;)a=n[r++];if(a===void 0)return;let s=a[i];if(s!==void 0)if(Array.isArray(s))do s=a[i],s!==void 0&&(e.push(a.time),t.push.apply(t,s)),a=n[r++];while(a!==void 0);else if(s.toArray!==void 0)do s=a[i],s!==void 0&&(e.push(a.time),s.toArray(t,t.length)),a=n[r++];while(a!==void 0);else do s=a[i],s!==void 0&&(e.push(a.time),t.push(s)),a=n[r++];while(a!==void 0)}function Ob(n,e,t,i,r=30){const a=n.clone();a.name=e;const s=[];for(let l=0;l<a.tracks.length;++l){const c=a.tracks[l],u=c.getValueSize(),d=[],h=[];for(let p=0;p<c.times.length;++p){const g=c.times[p]*r;if(!(g<t||g>=i)){d.push(c.times[p]);for(let v=0;v<u;++v)h.push(c.values[p*u+v])}}d.length!==0&&(c.times=ln(d,c.times.constructor),c.values=ln(h,c.values.constructor),s.push(c))}a.tracks=s;let o=1/0;for(let l=0;l<a.tracks.length;++l)o>a.tracks[l].times[0]&&(o=a.tracks[l].times[0]);for(let l=0;l<a.tracks.length;++l)a.tracks[l].shift(-1*o);return a.resetDuration(),a}function Fb(n,e=0,t=n,i=30){i<=0&&(i=30);const r=t.tracks.length,a=e/i;for(let s=0;s<r;++s){const o=t.tracks[s],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=n.tracks.find(function(f){return f.name===o.name&&f.ValueTypeName===l});if(c===void 0)continue;let u=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=p/3);const g=o.times.length-1;let v;if(a<=o.times[0]){const f=u,_=d-u;v=o.values.slice(f,_)}else if(a>=o.times[g]){const f=g*d+u,_=f+d-u;v=o.values.slice(f,_)}else{const f=o.createInterpolant(),_=u,y=d-u;f.evaluate(a),v=f.resultBuffer.slice(_,y)}l==="quaternion"&&new Zt().fromArray(v).normalize().conjugate().toArray(v);const m=c.times.length;for(let f=0;f<m;++f){const _=f*p+h;if(l==="quaternion")Zt.multiplyQuaternionsFlat(c.values,_,v,0,c.values,_);else{const y=p-h*2;for(let x=0;x<y;++x)c.values[_+x]-=v[x]}}}return n.blendMode=Pc,n}const Bb={convertArray:ln,isTypedArray:$f,getKeyframeOrder:Qf,sortedArray:Vu,flattenJSON:Gu,subclip:Ob,makeClipAdditive:Fb};class os{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],a=t[i-1];e:{t:{let s;i:{r:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=r,r=t[++i],e<r)break t}s=t.length;break i}if(!(e>=a)){const o=t[1];e<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=a,a=t[--i-1],e>=a)break t}s=i,i=0;break i}break e}for(;i<s;){const o=i+s>>>1;e<t[o]?s=o:i=o+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let s=0;s!==r;++s)t[s]=i[a+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class em extends os{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jr,endingEnd:jr}}intervalChanged_(e,t,i){const r=this.parameterPositions;let a=e-2,s=e+1,o=r[a],l=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case Xr:a=e,o=2*t-i;break;case Ra:a=r.length-2,o=t+r[a]-r[a+1];break;default:a=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Xr:s=e,l=2*i-t;break;case Ra:s=1,l=i+r[1]-r[0];break;default:s=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=a*u,this._offsetNext=s*u}interpolate_(e,t,i,r){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,f=-h*m+2*h*v-h*g,_=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,y=(-1-p)*m+(1.5+p)*v+.5*g,x=p*m-p*v;for(let A=0;A!==o;++A)a[A]=f*s[u+A]+_*s[c+A]+y*s[l+A]+x*s[d+A];return a}}class Hu extends os{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==o;++h)a[h]=s[c+h]*d+s[l+h]*u;return a}}class tm extends os{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ti{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ln(t,this.TimeBufferType),this.values=ln(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ln(e.times,Array),values:ln(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new tm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new em(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ca:t=this.InterpolantFactoryMethodDiscrete;break;case yo:t=this.InterpolantFactoryMethodLinear;break;case xo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ca;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return xo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let a=0,s=r-1;for(;a!==r&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==r){a>=s&&(s=Math.max(s,1),a=s-1);const o=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==a;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(r!==void 0&&$f(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===xo,a=e.length-1;let s=1;for(let o=1;o<a;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const d=o*i,h=d-i,p=d+i;for(let g=0;g!==i;++g){const v=t[d+g];if(v!==t[h+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const d=o*i,h=s*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++s}}if(a>0){e[s]=e[a];for(let o=a*i,l=s*i,c=0;c!==i;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Ti.prototype.TimeBufferType=Float32Array,Ti.prototype.ValueBufferType=Float32Array,Ti.prototype.DefaultInterpolation=yo;class cn extends Ti{constructor(e,t,i){super(e,t,i)}}cn.prototype.ValueTypeName="bool",cn.prototype.ValueBufferType=Array,cn.prototype.DefaultInterpolation=Ca,cn.prototype.InterpolantFactoryMethodLinear=void 0,cn.prototype.InterpolantFactoryMethodSmooth=void 0;class Wu extends Ti{}Wu.prototype.ValueTypeName="color";class ls extends Ti{}ls.prototype.ValueTypeName="number";class im extends os{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Zt.slerpFlat(a,0,s,c-o,s,c,l);return a}}class cs extends Ti{InterpolantFactoryMethodLinear(e){return new im(this.times,this.values,this.getValueSize(),e)}}cs.prototype.ValueTypeName="quaternion",cs.prototype.InterpolantFactoryMethodSmooth=void 0;class un extends Ti{constructor(e,t,i){super(e,t,i)}}un.prototype.ValueTypeName="string",un.prototype.ValueBufferType=Array,un.prototype.DefaultInterpolation=Ca,un.prototype.InterpolantFactoryMethodLinear=void 0,un.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends Ti{}us.prototype.ValueTypeName="vector";class hs{constructor(e="",t=-1,i=[],r=wo){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ri(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let s=0,o=i.length;s!==o;++s)t.push(kb(i[s]).scale(r));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,s=i.length;a!==s;++a)t.push(Ti.toJSON(i[a]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const a=t.length,s=[];for(let o=0;o<a;o++){let l=[],c=[];l.push((o+a-1)%a,o,(o+1)%a),c.push(0,1,0);const u=Qf(l);l=Vu(l,1,u),c=Vu(c,1,u),!r&&l[0]===0&&(l.push(a),c.push(c[0])),s.push(new ls(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(a);if(u&&u.length>1){const d=u[1];let h=r[d];h||(r[d]=h=[]),h.push(c)}}const s=[];for(const o in r)s.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,h,p,g){if(h.length!==0){const v=[],m=[];Gu(h,v,m,p),v.length!==0&&g.push(new u(d,v,m))}},r=[],a=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const h={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let g=0;g<d[p].morphTargets.length;g++)h[d[p].morphTargets[g]]=-1;for(const g in h){const v=[],m=[];for(let f=0;f!==d[p].morphTargets.length;++f){const _=d[p];v.push(_.time),m.push(_.morphTarget===g?1:0)}r.push(new ls(".morphTargetInfluence["+g+"]",v,m))}l=h.length*s}else{const h=".bones["+t[u].name+"]";i(us,h+".position",d,"pos",r),i(cs,h+".quaternion",d,"rot",r),i(us,h+".scale",d,"scl",r)}}return r.length===0?null:new this(a,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ls;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return Wu;case"quaternion":return cs;case"bool":case"boolean":return cn;case"string":return un}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function kb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zb(n.type);if(n.times===void 0){const t=[],i=[];Gu(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ar={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ju{constructor(e,t,i){const r=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,a===!1&&r.onStart!==void 0&&r.onStart(u,s,o),a=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const rm=new ju;class Kt{constructor(e){this.manager=e!==void 0?e:rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Kt.DEFAULT_MATERIAL_NAME="__DEFAULT";const sr={};class Vb extends Error{constructor(e,t){super(e),this.response=t}}class or extends Kt{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=ar.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(sr[e]!==void 0){sr[e].push({onLoad:t,onProgress:i,onError:r});return}sr[e]=[],sr[e].push({onLoad:t,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=sr[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0;let v=0;const m=new ReadableStream({start(f){_();function _(){d.read().then(({done:y,value:x})=>{if(y)f.close();else{v+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let E=0,S=u.length;E<S;E++){const R=u[E];R.onProgress&&R.onProgress(A)}f.enqueue(x),_()}},y=>{f.error(y)})}}});return new Response(m)}else throw new Vb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(p=>h.decode(p))}}}).then(c=>{ar.add(e,c);const u=sr[e];delete sr[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=sr[e];if(u===void 0)throw this.manager.itemError(e),c;delete sr[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Gb extends Kt{constructor(e){super(e)}load(e,t,i,r){const a=this,s=new or(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){try{t(a.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),a.manager.itemError(e)}},i,r)}parse(e){const t=[];for(let i=0;i<e.length;i++){const r=hs.parse(e[i]);t.push(r)}return t}}class Hb extends Kt{constructor(e){super(e)}load(e,t,i,r){const a=this,s=[],o=new dl,l=new or(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(a.withCredentials);let c=0;function u(d){l.load(e[d],function(h){const p=a.parse(h,!0);s[d]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},c+=1,c===6&&(p.mipmapCount===1&&(o.minFilter=bt),o.image=s,o.format=p.format,o.needsUpdate=!0,t&&t(o))},i,r)}if(Array.isArray(e))for(let d=0,h=e.length;d<h;++d)u(d);else l.load(e,function(d){const h=a.parse(d,!0);if(h.isCubemap){const p=h.mipmaps.length/h.mipmapCount;for(let g=0;g<p;g++){s[g]={mipmaps:[]};for(let v=0;v<h.mipmapCount;v++)s[g].mipmaps.push(h.mipmaps[g*h.mipmapCount+v]),s[g].format=h.format,s[g].width=h.width,s[g].height=h.height}o.image=s}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=bt),o.format=h.format,o.needsUpdate=!0,t&&t(o)},i,r);return o}}class ds extends Kt{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=ar.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=Fa("img");function l(){u(),ar.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(d){u(),r&&r(d),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class Wb extends Kt{constructor(e){super(e)}load(e,t,i,r){const a=new ja;a.colorSpace=ii;const s=new ds(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function l(c){s.load(e[c],function(u){a.images[c]=u,o++,o===6&&(a.needsUpdate=!0,t&&t(a))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return a}}class jb extends Kt{constructor(e){super(e)}load(e,t,i,r){const a=this,s=new zi,o=new or(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(a.withCredentials),o.load(e,function(l){let c;try{c=a.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:pi,s.wrapT=c.wrapT!==void 0?c.wrapT:pi,s.magFilter=c.magFilter!==void 0?c.magFilter:bt,s.minFilter=c.minFilter!==void 0?c.minFilter:bt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(s.colorSpace=c.colorSpace),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Ui),c.mipmapCount===1&&(s.minFilter=bt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},i,r),s}}class Xb extends Kt{constructor(e){super(e)}load(e,t,i,r){const a=new vt,s=new ds(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}}class Sr extends Qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class nm extends Sr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xu=new Oe,am=new P,sm=new P;class qu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xa,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;am.setFromMatrixPosition(e.matrixWorld),t.position.copy(am),sm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sm),t.updateMatrixWorld(),Xu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qb extends qu{constructor(){super(new Et(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=An*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class om extends Sr{constructor(e,t,i=0,r=Math.PI/3,a=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.distance=i,this.angle=r,this.penumbra=a,this.decay=s,this.map=null,this.shadow=new qb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const lm=new Oe,ps=new P,Yu=new P;class Yb extends qu{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),ps.setFromMatrixPosition(e.matrixWorld),i.position.copy(ps),Yu.copy(i.position),Yu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Yu),i.updateMatrixWorld(),r.makeTranslation(-ps.x,-ps.y,-ps.z),lm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lm)}}class cm extends Sr{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Yb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Zb extends qu{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class um extends Sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new Zb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hm extends Sr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class dm extends Sr{constructor(e,t,i=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class pm{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new P)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,a=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*r),t.addScaledVector(s[2],.488603*a),t.addScaledVector(s[3],.488603*i),t.addScaledVector(s[4],1.092548*(i*r)),t.addScaledVector(s[5],1.092548*(r*a)),t.addScaledVector(s[6],.315392*(3*a*a-1)),t.addScaledVector(s[7],1.092548*(i*a)),t.addScaledVector(s[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,a=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],2*.511664*r),t.addScaledVector(s[2],2*.511664*a),t.addScaledVector(s[3],2*.511664*i),t.addScaledVector(s[4],2*.429043*i*r),t.addScaledVector(s[5],2*.429043*r*a),t.addScaledVector(s[6],.743125*a*a-.247708),t.addScaledVector(s[7],2*.429043*i*a),t.addScaledVector(s[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,a=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*a,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*a,t[6]=.315392*(3*a*a-1),t[7]=1.092548*i*a,t[8]=.546274*(i*i-r*r)}}class fm extends Sr{constructor(e=new pm,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class $l extends Kt{constructor(e){super(e),this.textures={}}load(e,t,i,r){const a=this,s=new or(a.manager);s.setPath(a.path),s.setRequestHeader(a.requestHeader),s.setWithCredentials(a.withCredentials),s.load(e,function(o){try{t(a.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),a.manager.itemError(e)}},i,r)}parse(e){const t=this.textures;function i(a){return t[a]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",a),t[a]}const r=$l.createMaterialFromType(e.type);if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=e.sheen),e.sheenColor!==void 0&&(r.sheenColor=new ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(r.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.specularIntensity!==void 0&&(r.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(r.dispersion=e.dispersion),e.iridescence!==void 0&&(r.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(r.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(r.transmission=e.transmission),e.thickness!==void 0&&(r.thickness=e.thickness),e.attenuationDistance!==void 0&&(r.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(r.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.shadowSide!==void 0&&(r.shadowSide=e.shadowSide),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(r.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(r.depthFunc=e.depthFunc),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(r.blendSrc=e.blendSrc),e.blendDst!==void 0&&(r.blendDst=e.blendDst),e.blendEquation!==void 0&&(r.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(r.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(r.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(r.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&r.blendColor!==void 0&&r.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(r.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==void 0&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(r.dithering=e.dithering),e.alphaToCoverage!==void 0&&(r.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(r.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const a in e.uniforms){const s=e.uniforms[a];switch(r.uniforms[a]={},s.type){case"t":r.uniforms[a].value=i(s.value);break;case"c":r.uniforms[a].value=new ge().setHex(s.value);break;case"v2":r.uniforms[a].value=new J().fromArray(s.value);break;case"v3":r.uniforms[a].value=new P().fromArray(s.value);break;case"v4":r.uniforms[a].value=new nt().fromArray(s.value);break;case"m3":r.uniforms[a].value=new Xe().fromArray(s.value);break;case"m4":r.uniforms[a].value=new Oe().fromArray(s.value);break;default:r.uniforms[a].value=s.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(r.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)r.extensions[a]=e.extensions[a];if(e.lights!==void 0&&(r.lights=e.lights),e.clipping!==void 0&&(r.clipping=e.clipping),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=i(e.map)),e.matcap!==void 0&&(r.matcap=i(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),r.normalScale=new J().fromArray(a)}return e.displacementMap!==void 0&&(r.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=i(e.specularMap)),e.specularIntensityMap!==void 0&&(r.specularIntensityMap=i(e.specularIntensityMap)),e.specularColorMap!==void 0&&(r.specularColorMap=i(e.specularColorMap)),e.envMap!==void 0&&(r.envMap=i(e.envMap)),e.envMapRotation!==void 0&&r.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(r.iridescenceMap=i(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(r.iridescenceThicknessMap=i(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(r.transmissionMap=i(e.transmissionMap)),e.thicknessMap!==void 0&&(r.thicknessMap=i(e.thicknessMap)),e.anisotropyMap!==void 0&&(r.anisotropyMap=i(e.anisotropyMap)),e.sheenColorMap!==void 0&&(r.sheenColorMap=i(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=i(e.sheenRoughnessMap)),r}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:Hf,SpriteMaterial:vu,RawShaderMaterial:Wf,ShaderMaterial:bi,PointsMaterial:Tu,MeshPhysicalMaterial:jf,MeshStandardMaterial:ku,MeshPhongMaterial:Xf,MeshToonMaterial:qf,MeshNormalMaterial:Yf,MeshLambertMaterial:Zf,MeshDepthMaterial:pu,MeshDistanceMaterial:fu,MeshBasicMaterial:rr,MeshMatcapMaterial:Jf,LineDashedMaterial:Kf,LineBasicMaterial:qt,Material:Bt};return new t[e]}}class Zu{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class mm extends Ze{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class gm extends Kt{constructor(e){super(e)}load(e,t,i,r){const a=this,s=new or(a.manager);s.setPath(a.path),s.setRequestHeader(a.requestHeader),s.setWithCredentials(a.withCredentials),s.load(e,function(o){try{t(a.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),a.manager.itemError(e)}},i,r)}parse(e){const t={},i={};function r(h,p){if(t[p]!==void 0)return t[p];const g=h.interleavedBuffers[p],v=a(h,g.buffer),m=Cn(g.type,v),f=new Ko(m,g.stride);return f.uuid=g.uuid,t[p]=f,f}function a(h,p){if(i[p]!==void 0)return i[p];const g=h.arrayBuffers[p],v=new Uint32Array(g).buffer;return i[p]=v,v}const s=e.isInstancedBufferGeometry?new mm:new Ze,o=e.data.index;if(o!==void 0){const h=Cn(o.type,o.array);s.setIndex(new ot(h,1))}const l=e.data.attributes;for(const h in l){const p=l[h];let g;if(p.isInterleavedBufferAttribute){const v=r(e.data,p.data);g=new yn(v,p.itemSize,p.offset,p.normalized)}else{const v=Cn(p.type,p.array),m=p.isInstancedBufferAttribute?ia:ot;g=new m(v,p.itemSize,p.normalized)}p.name!==void 0&&(g.name=p.name),p.usage!==void 0&&g.setUsage(p.usage),s.setAttribute(h,g)}const c=e.data.morphAttributes;if(c)for(const h in c){const p=c[h],g=[];for(let v=0,m=p.length;v<m;v++){const f=p[v];let _;if(f.isInterleavedBufferAttribute){const y=r(e.data,f.data);_=new yn(y,f.itemSize,f.offset,f.normalized)}else{const y=Cn(f.type,f.array);_=new ot(y,f.itemSize,f.normalized)}f.name!==void 0&&(_.name=f.name),g.push(_)}s.morphAttributes[h]=g}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let h=0,p=u.length;h!==p;++h){const g=u[h];s.addGroup(g.start,g.count,g.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const h=new P;d.center!==void 0&&h.fromArray(d.center),s.boundingSphere=new Ot(h,d.radius)}return e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}}class Jb extends Kt{constructor(e){super(e)}load(e,t,i,r){const a=this,s=this.path===""?Zu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const o=new or(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){r!==void 0&&r(d),console.error("THREE:ObjectLoader: Can't parse "+e+".",d.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}a.parse(c,t)},i,r)}async loadAsync(e,t){const i=this,r=this.path===""?Zu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const a=new or(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials);const s=await a.loadAsync(e,t),o=JSON.parse(s),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(o)}parse(e,t){const i=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),a=this.parseGeometries(e.geometries,r),s=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,s),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,a,l,o,i),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let d=!1;for(const h in s)if(s[h].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=await this.parseImagesAsync(e.images),s=this.parseTextures(e.textures,a),o=this.parseMaterials(e.materials,s),l=this.parseObject(e.object,r,o,s,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let i=0,r=e.length;i<r;i++){const a=new sn().fromJSON(e[i]);t[a.uuid]=a}return t}parseSkeletons(e,t){const i={},r={};if(t.traverse(function(a){a.isBone&&(r[a.uuid]=a)}),e!==void 0)for(let a=0,s=e.length;a<s;a++){const o=new zl().fromJSON(e[a],r);i[o.uuid]=o}return i}parseGeometries(e,t){const i={};if(e!==void 0){const r=new gm;for(let a=0,s=e.length;a<s;a++){let o;const l=e[a];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=r.parse(l);break;default:l.type in Gf?o=Gf[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(e,t){const i={},r={};if(e!==void 0){const a=new $l;a.setTextures(t);for(let s=0,o=e.length;s<o;s++){const l=e[s];i[l.uuid]===void 0&&(i[l.uuid]=a.parse(l)),r[l.uuid]=i[l.uuid]}}return r}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const r=e[i],a=hs.parse(r);t[a.uuid]=a}return t}parseImages(e,t){const i=this,r={};let a;function s(l){return i.manager.itemStart(l),a.load(l,function(){i.manager.itemEnd(l)},void 0,function(){i.manager.itemError(l),i.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:i.resourcePath+c;return s(u)}else return l.data?{data:Cn(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new ju(t);a=new ds(l),a.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const d=e[c],h=d.url;if(Array.isArray(h)){const p=[];for(let g=0,v=h.length;g<v;g++){const m=h[g],f=o(m);f!==null&&(f instanceof HTMLImageElement?p.push(f):p.push(new zi(f.data,f.width,f.height)))}r[d.uuid]=new Zr(p)}else{const p=o(d.url);r[d.uuid]=new Zr(p)}}}return r}async parseImagesAsync(e){const t=this,i={};let r;async function a(s){if(typeof s=="string"){const o=s,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await r.loadAsync(l)}else return s.data?{data:Cn(s.type,s.data),width:s.width,height:s.height}:null}if(e!==void 0&&e.length>0){r=new ds(this.manager),r.setCrossOrigin(this.crossOrigin);for(let s=0,o=e.length;s<o;s++){const l=e[s],c=l.url;if(Array.isArray(c)){const u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d],g=await a(p);g!==null&&(g instanceof HTMLImageElement?u.push(g):u.push(new zi(g.data,g.width,g.height)))}i[l.uuid]=new Zr(u)}else{const u=await a(l.url);i[l.uuid]=new Zr(u)}}}return i}parseTextures(e,t){function i(a,s){return typeof a=="number"?a:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a),s[a])}const r={};if(e!==void 0)for(let a=0,s=e.length;a<s;a++){const o=e[a];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let u;Array.isArray(c)?(u=new ja,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new zi:u=new vt,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=i(o.mapping,Kb)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=i(o.wrap[0],vm),u.wrapT=i(o.wrap[1],vm)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=i(o.minFilter,_m)),o.magFilter!==void 0&&(u.magFilter=i(o.magFilter,_m)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.userData!==void 0&&(u.userData=o.userData),r[o.uuid]=u}return r}parseObject(e,t,i,r,a){let s;function o(h){return t[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",h),t[h]}function l(h){if(h!==void 0){if(Array.isArray(h)){const p=[];for(let g=0,v=h.length;g<v;g++){const m=h[g];i[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),p.push(i[m])}return p}return i[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",h),i[h]}}function c(h){return r[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",h),r[h]}let u,d;switch(e.type){case"Scene":s=new Jo,e.background!==void 0&&(Number.isInteger(e.background)?s.background=new ge(e.background):s.background=c(e.background)),e.environment!==void 0&&(s.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?s.fog=new Bl(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(s.fog=new Fl(e.fog.color,e.fog.density)),e.fog.name!==""&&(s.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(s.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(s.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&s.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(s.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&s.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":s=new Et(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(s.focus=e.focus),e.zoom!==void 0&&(s.zoom=e.zoom),e.filmGauge!==void 0&&(s.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(s.filmOffset=e.filmOffset),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"OrthographicCamera":s=new Wo(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(s.zoom=e.zoom),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"AmbientLight":s=new hm(e.color,e.intensity);break;case"DirectionalLight":s=new um(e.color,e.intensity),s.target=e.target||"";break;case"PointLight":s=new cm(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":s=new dm(e.color,e.intensity,e.width,e.height);break;case"SpotLight":s=new om(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),s.target=e.target||"";break;case"HemisphereLight":s=new nm(e.color,e.groundColor,e.intensity);break;case"LightProbe":s=new fm().fromJSON(e);break;case"SkinnedMesh":u=o(e.geometry),d=l(e.material),s=new hf(u,d),e.bindMode!==void 0&&(s.bindMode=e.bindMode),e.bindMatrix!==void 0&&s.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(s.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),d=l(e.material),s=new dt(u,d);break;case"InstancedMesh":u=o(e.geometry),d=l(e.material);const h=e.count,p=e.instanceMatrix,g=e.instanceColor;s=new mf(u,d,h),s.instanceMatrix=new ia(new Float32Array(p.array),16),g!==void 0&&(s.instanceColor=new ia(new Float32Array(g.array),g.itemSize));break;case"BatchedMesh":u=o(e.geometry),d=l(e.material),s=new _f(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),s.geometry=u,s.perObjectFrustumCulled=e.perObjectFrustumCulled,s.sortObjects=e.sortObjects,s._drawRanges=e.drawRanges,s._reservedRanges=e.reservedRanges,s._visibility=e.visibility,s._active=e.active,s._bounds=e.bounds.map(v=>{const m=new Wt;m.min.fromArray(v.boxMin),m.max.fromArray(v.boxMax);const f=new Ot;return f.radius=v.sphereRadius,f.center.fromArray(v.sphereCenter),{boxInitialized:v.boxInitialized,box:m,sphereInitialized:v.sphereInitialized,sphere:f}}),s._maxInstanceCount=e.maxInstanceCount,s._maxVertexCount=e.maxVertexCount,s._maxIndexCount=e.maxIndexCount,s._geometryInitialized=e.geometryInitialized,s._geometryCount=e.geometryCount,s._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(s._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":s=new af;break;case"Line":s=new br(o(e.geometry),l(e.material));break;case"LineLoop":s=new bf(o(e.geometry),l(e.material));break;case"LineSegments":s=new ki(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":s=new Ef(o(e.geometry),l(e.material));break;case"Sprite":s=new rf(l(e.material));break;case"Group":s=new Kn;break;case"Bone":s=new wu;break;default:s=new Qe}if(s.uuid=e.uuid,e.name!==void 0&&(s.name=e.name),e.matrix!==void 0?(s.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=e.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(e.position!==void 0&&s.position.fromArray(e.position),e.rotation!==void 0&&s.rotation.fromArray(e.rotation),e.quaternion!==void 0&&s.quaternion.fromArray(e.quaternion),e.scale!==void 0&&s.scale.fromArray(e.scale)),e.up!==void 0&&s.up.fromArray(e.up),e.castShadow!==void 0&&(s.castShadow=e.castShadow),e.receiveShadow!==void 0&&(s.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(s.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(s.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(s.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(s.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(s.visible=e.visible),e.frustumCulled!==void 0&&(s.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(s.renderOrder=e.renderOrder),e.userData!==void 0&&(s.userData=e.userData),e.layers!==void 0&&(s.layers.mask=e.layers),e.children!==void 0){const h=e.children;for(let p=0;p<h.length;p++)s.add(this.parseObject(h[p],t,i,r,a))}if(e.animations!==void 0){const h=e.animations;for(let p=0;p<h.length;p++){const g=h[p];s.animations.push(a[g])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(s.autoUpdate=e.autoUpdate);const h=e.levels;for(let p=0;p<h.length;p++){const g=h[p],v=s.getObjectByProperty("uuid",g.object);v!==void 0&&s.addLevel(v,g.distance,g.hysteresis)}}return s}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const r=t[i.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(r,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const i=t.target,r=e.getObjectByProperty("uuid",i);r!==void 0?t.target=r:t.target=new Qe}})}}const Kb={UVMapping:zs,CubeReflectionMapping:Yi,CubeRefractionMapping:pr,EquirectangularReflectionMapping:va,EquirectangularRefractionMapping:_a,CubeUVReflectionMapping:bn},vm={RepeatWrapping:ya,ClampToEdgeWrapping:pi,MirroredRepeatWrapping:xa},_m={NearestFilter:Pt,NearestMipmapNearestFilter:xc,NearestMipmapLinearFilter:Sn,LinearFilter:bt,LinearMipmapNearestFilter:wa,LinearMipmapLinearFilter:Ui};class $b extends Kt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=ar.get(e);if(s!==void 0){if(a.manager.itemStart(e),s.then){s.then(c=>{t&&t(c),a.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(c){return ar.add(e,c),t&&t(c),a.manager.itemEnd(e),c}).catch(function(c){r&&r(c),ar.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});ar.add(e,l),a.manager.itemStart(e)}}let Ml,Ju=class{static getContext(){return Ml===void 0&&(Ml=new(window.AudioContext||window.webkitAudioContext)),Ml}static setContext(n){Ml=n}};class Qb extends Kt{constructor(e){super(e)}load(e,t,i,r){const a=this,s=new or(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(l){try{const c=l.slice(0);Ju.getContext().decodeAudioData(c,function(u){t(u)}).catch(o)}catch(c){o(c)}},i,r);function o(l){r?r(l):console.error(l),a.manager.itemError(e)}}}const ym=new Oe,xm=new Oe,hn=new Oe;class eS{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Et,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Et,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,hn.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(Yr*t.fov*.5)/t.zoom;let s,o;xm.elements[12]=-i,ym.elements[12]=i,s=-a*t.aspect+r,o=a*t.aspect+r,hn.elements[0]=2*t.near/(o-s),hn.elements[8]=(o+s)/(o-s),this.cameraL.projectionMatrix.copy(hn),s=-a*t.aspect-r,o=a*t.aspect-r,hn.elements[0]=2*t.near/(o-s),hn.elements[8]=(o+s)/(o-s),this.cameraR.projectionMatrix.copy(hn)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(xm),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(ym)}}class bl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=wm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function wm(){return(typeof performance>"u"?Date:performance).now()}const dn=new P,Mm=new Zt,tS=new P,pn=new P;class iS extends Qe{constructor(){super(),this.type="AudioListener",this.context=Ju.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new bl}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(dn,Mm,tS),pn.set(0,0,-1).applyQuaternion(Mm),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(dn.x,r),t.positionY.linearRampToValueAtTime(dn.y,r),t.positionZ.linearRampToValueAtTime(dn.z,r),t.forwardX.linearRampToValueAtTime(pn.x,r),t.forwardY.linearRampToValueAtTime(pn.y,r),t.forwardZ.linearRampToValueAtTime(pn.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition(dn.x,dn.y,dn.z),t.setOrientation(pn.x,pn.y,pn.z,i.x,i.y,i.z)}}class bm extends Qe{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const fn=new P,Sm=new Zt,rS=new P,mn=new P;class nS extends bm{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(fn,Sm,rS),mn.set(0,0,1).applyQuaternion(Sm);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(fn.x,i),t.positionY.linearRampToValueAtTime(fn.y,i),t.positionZ.linearRampToValueAtTime(fn.z,i),t.orientationX.linearRampToValueAtTime(mn.x,i),t.orientationY.linearRampToValueAtTime(mn.y,i),t.orientationZ.linearRampToValueAtTime(mn.z,i)}else t.setPosition(fn.x,fn.y,fn.z),t.setOrientation(mn.x,mn.y,mn.z)}}class aS{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}}class Em{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,a,s;switch(t){case"quaternion":r=this._slerp,a=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,a=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,a=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=a,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,a=e*r+r;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==r;++o)i[a+o]=i[o];s=t}else{s+=t;const o=t/s;this._mixBufferRegion(i,a,0,o,r)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,a=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,a<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-a,t)}s>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let a=i,s=r;a!==s;++a)t[a]=t[r+a%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,a){if(r>=.5)for(let s=0;s!==a;++s)e[t+s]=e[i+s]}_slerp(e,t,i,r){Zt.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,a){const s=this._workIndex*a;Zt.multiplyQuaternionsFlat(e,s,e,t,e,i),Zt.slerpFlat(e,t,e,t,e,s,r)}_lerp(e,t,i,r,a){const s=1-r;for(let o=0;o!==a;++o){const l=t+o;e[l]=e[l]*s+e[i+o]*r}}_lerpAdditive(e,t,i,r,a){for(let s=0;s!==a;++s){const o=t+s;e[o]=e[o]+e[i+s]*r}}}const Ku="\\[\\]\\.:\\/",sS=new RegExp("["+Ku+"]","g"),$u="[^"+Ku+"]",oS="[^"+Ku.replace("\\.","")+"]",lS=/((?:WC+[\/:])*)/.source.replace("WC",$u),cS=/(WCOD+)?/.source.replace("WCOD",oS),uS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$u),hS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$u),dS=new RegExp("^"+lS+cS+uS+hS+"$"),pS=["material","materials","bones","map"];class fS{constructor(e,t,i){const r=i||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class it{constructor(e,t,i){this.path=t,this.parsedPath=i||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,i):new it(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sS,"")}static parseTrackName(e){const t=dS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const a=i.nodeName.substring(r+1);pS.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let s=0;s<a.length;s++){const o=a[s];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let a=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[r];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=fS,it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray],it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class mS{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ri(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let i=0,r=arguments.length;i!==r;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,i=this._paths,r=this._parsedPaths,a=this._bindings,s=a.length;let o,l=e.length,c=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){const h=arguments[u],p=h.uuid;let g=t[p];if(g===void 0){g=l++,t[p]=g,e.push(h);for(let v=0,m=s;v!==m;++v)a[v].push(new it(h,i[v],r[v]))}else if(g<c){o=e[g];const v=--c,m=e[v];t[m.uuid]=g,e[g]=m,t[p]=v,e[v]=h;for(let f=0,_=s;f!==_;++f){const y=a[f],x=y[v];let A=y[g];y[g]=x,A===void 0&&(A=new it(h,i[f],r[f])),y[v]=A}}else e[g]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length;let a=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const l=arguments[s],c=l.uuid,u=t[c];if(u!==void 0&&u>=a){const d=a++,h=e[d];t[h.uuid]=u,e[u]=h,t[c]=d,e[d]=l;for(let p=0,g=r;p!==g;++p){const v=i[p],m=v[d],f=v[u];v[u]=m,v[d]=f}}}this.nCachedObjects_=a}uncache(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length;let a=this.nCachedObjects_,s=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],u=c.uuid,d=t[u];if(d!==void 0)if(delete t[u],d<a){const h=--a,p=e[h],g=--s,v=e[g];t[p.uuid]=d,e[d]=p,t[v.uuid]=h,e[h]=v,e.pop();for(let m=0,f=r;m!==f;++m){const _=i[m],y=_[h],x=_[g];_[d]=y,_[h]=x,_.pop()}}else{const h=--s,p=e[h];h>0&&(t[p.uuid]=d),e[d]=p,e.pop();for(let g=0,v=r;g!==v;++g){const m=i[g];m[d]=m[h],m.pop()}}}this.nCachedObjects_=a}subscribe_(e,t){const i=this._bindingsIndicesByPath;let r=i[e];const a=this._bindings;if(r!==void 0)return a[r];const s=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,d=new Array(c);r=a.length,i[e]=r,s.push(e),o.push(t),a.push(d);for(let h=u,p=l.length;h!==p;++h){const g=l[h];d[h]=new it(g,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){const r=this._paths,a=this._parsedPaths,s=this._bindings,o=s.length-1,l=s[o],c=e[o];t[c]=i,s[i]=l,s.pop(),a[i]=a[o],a.pop(),r[i]=r[o],r.pop()}}}class Tm{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const a=t.tracks,s=a.length,o=new Array(s),l={endingStart:jr,endingEnd:jr};for(let c=0;c!==s;++c){const u=a[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Fd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,a=e._clip.duration,s=a/r,o=r/a;e.warp(1,s,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,a=r.time,s=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=a,l[1]=a+i,c[0]=e/s,c[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const a=this._startTime;if(a!==null){const l=(e-a)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const s=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Pc:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(s),c[u].accumulateAdditive(o);break;case wo:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(s),c[u].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,a=this._loopCount;const s=i===Bd;if(e===0)return a===-1?r:s&&(a&1)===1?t-r:r;if(i===Od){a===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(a===-1&&(e>=0?(a=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,a+=Math.abs(o);const l=this.repetitions-a;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=a,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(s&&(a&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=Xr,r.endingEnd=Xr):(e?r.endingStart=this.zeroSlopeAtStart?Xr:jr:r.endingStart=Ra,t?r.endingEnd=this.zeroSlopeAtEnd?Xr:jr:r.endingEnd=Ra)}_scheduleFading(e,t,i){const r=this._mixer,a=r.time;let s=this._weightInterpolant;s===null&&(s=r._lendControlInterpolant(),this._weightInterpolant=s);const o=s.parameterPositions,l=s.sampleValues;return o[0]=a,l[0]=t,o[1]=a+e,l[1]=i,this}}const gS=new Float32Array(1);class vS extends Bi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,a=r.length,s=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==a;++d){const h=r[d],p=h.name;let g=u[p];if(g!==void 0)++g.referenceCount,s[d]=g;else{if(g=s[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const v=t&&t._propertyBindings[d].binding.parsedPath;g=new Em(it.create(i,p,v),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),s[d]=g}o[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,a=this._actionsByClip[r];this._bindAction(e,a&&a.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.useCount++===0&&(this._lendBinding(a),a.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const a=t[i];--a.useCount===0&&(a.restoreOriginalState(),this._takeBackBinding(a))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,a=this._actionsByClip;let s=a[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,a[t]=s;else{const o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),s.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const a=e._clip.uuid,s=this._actionsByClip,o=s[a],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete s[a],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const a=t[i];--a.referenceCount===0&&this._removeInactiveBinding(a)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,a=this._bindings;let s=r[t];s===void 0&&(s={},r[t]=s),s[i]=e,e._cacheIndex=a.length,a.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,a=i.path,s=this._bindingsByRootAndName,o=s[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[a],Object.keys(o).length===0&&delete s[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Hu(new Float32Array(2),new Float32Array(2),1,gS),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,a=t[r];e.__cacheIndex=r,t[r]=e,a.__cacheIndex=i,t[i]=a}clipAction(e,t,i){const r=t||this._root,a=r.uuid;let s=typeof e=="string"?hs.findByName(r,e):e;const o=s!==null?s.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(s!==null?i=s.blendMode:i=wo),l!==void 0){const d=l.actionByRoot[a];if(d!==void 0&&d.blendMode===i)return d;c=l.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const u=new Tm(this,s,t,i);return this._bindAction(u,c),this._addInactiveAction(u,o,a),u}existingAction(e,t){const i=t||this._root,r=i.uuid,a=typeof e=="string"?hs.findByName(i,e):e,s=a?a.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,a=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,a,s);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,a=r[i];if(a!==void 0){const s=a.knownActions;for(let o=0,l=s.length;o!==l;++o){const c=s[o];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const s in i){const o=i[s].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,a=r[t];if(a!==void 0)for(const s in a){const o=a[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class fh{constructor(e){this.value=e}clone(){return new fh(this.value.clone===void 0?this.value:this.value.clone())}}let _S=0;class yS extends Bi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:_S++}),this.name="",this.usage=Da,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let i=0,r=t.length;i<r;i++){const a=Array.isArray(t[i])?t[i]:[t[i]];for(let s=0;s<a.length;s++)this.uniforms.push(a[s].clone())}return this}clone(){return new this.constructor().copy(this)}}class xS extends Ko{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class wS{constructor(e,t,i,r,a){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Am=new Oe;class Cm{constructor(e,t,i=0,r=1/0){this.ray=new Un(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Am.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Am),this}intersectObject(e,t=!0,i=[]){return Qu(e,this,i,t),i.sort(Rm),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Qu(e[r],this,i,t);return i.sort(Rm),i}}function Rm(n,e){return n.distance-e.distance}function Qu(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let s=0,o=a.length;s<o;s++)Qu(a[s],e,t,!0)}}class MS{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bS{constructor(e=1,t=0,i=0){return this.radius=e,this.theta=t,this.y=i,this}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}}class mh{constructor(e,t,i,r){mh.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=r,this}}const Pm=new J;class SS{constructor(e=new J(1/0,1/0),t=new J(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Lm=new P,Sl=new P;class ES{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Lm.subVectors(e,this.start),Sl.subVectors(this.end,this.start);const i=Sl.dot(Sl);let r=Sl.dot(Lm)/i;return t&&(r=mt(r,0,1)),r}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Im=new P;class TS extends Qe{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const i=new Ze,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,o=1,l=32;s<l;s++,o++){const c=s/l*Math.PI*2,u=o/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}i.setAttribute("position",new Ee(r,3));const a=new qt({fog:!1,toneMapped:!1});this.cone=new ki(i,a),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Im.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Im),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Er=new P,El=new Oe,eh=new Oe;class AS extends ki{constructor(e){const t=Nm(e),i=new Ze,r=[],a=[],s=new ge(0,0,1),o=new ge(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),a.push(s.r,s.g,s.b),a.push(o.r,o.g,o.b))}i.setAttribute("position",new Ee(r,3)),i.setAttribute("color",new Ee(a,3));const l=new qt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,i=this.geometry,r=i.getAttribute("position");eh.copy(this.root.matrixWorld).invert();for(let a=0,s=0;a<t.length;a++){const o=t[a];o.parent&&o.parent.isBone&&(El.multiplyMatrices(eh,o.matrixWorld),Er.setFromMatrixPosition(El),r.setXYZ(s,Er.x,Er.y,Er.z),El.multiplyMatrices(eh,o.parent.matrixWorld),Er.setFromMatrixPosition(El),r.setXYZ(s+1,Er.x,Er.y,Er.z),s+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Nm(n){const e=[];n.isBone===!0&&e.push(n);for(let t=0;t<n.children.length;t++)e.push.apply(e,Nm(n.children[t]));return e}class CS extends dt{constructor(e,t,i){const r=new ws(t,4,2),a=new rr({wireframe:!0,fog:!1,toneMapped:!1});super(r,a),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const RS=new P,Dm=new ge,Um=new ge;class PS extends Qe{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const r=new xs(t);r.rotateY(Math.PI*.5),this.material=new rr({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const a=r.getAttribute("position"),s=new Float32Array(a.count*3);r.setAttribute("color",new ot(s,3)),this.add(new dt(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Dm.copy(this.light.color),Um.copy(this.light.groundColor);for(let i=0,r=t.count;i<r;i++){const a=i<r/2?Dm:Um;t.setXYZ(i,a.r,a.g,a.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(RS.setFromMatrixPosition(this.light.matrixWorld).negate())}}class LS extends ki{constructor(e=10,t=10,i=4473924,r=8947848){i=new ge(i),r=new ge(r);const a=t/2,s=e/t,o=e/2,l=[],c=[];for(let h=0,p=0,g=-o;h<=t;h++,g+=s){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=h===a?i:r;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const u=new Ze;u.setAttribute("position",new Ee(l,3)),u.setAttribute("color",new Ee(c,3));const d=new qt({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class IS extends ki{constructor(e=10,t=16,i=8,r=64,a=4473924,s=8947848){a=new ge(a),s=new ge(s);const o=[],l=[];if(t>1)for(let d=0;d<t;d++){const h=d/t*(Math.PI*2),p=Math.sin(h)*e,g=Math.cos(h)*e;o.push(0,0,0),o.push(p,0,g);const v=d&1?a:s;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let d=0;d<i;d++){const h=d&1?a:s,p=e-e/i*d;for(let g=0;g<r;g++){let v=g/r*(Math.PI*2),m=Math.sin(v)*p,f=Math.cos(v)*p;o.push(m,0,f),l.push(h.r,h.g,h.b),v=(g+1)/r*(Math.PI*2),m=Math.sin(v)*p,f=Math.cos(v)*p,o.push(m,0,f),l.push(h.r,h.g,h.b)}}const c=new Ze;c.setAttribute("position",new Ee(o,3)),c.setAttribute("color",new Ee(l,3));const u=new qt({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Om=new P,Tl=new P,Fm=new P;class NS extends Qe{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new Ze;r.setAttribute("position",new Ee([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const a=new qt({fog:!1,toneMapped:!1});this.lightPlane=new br(r,a),this.add(this.lightPlane),r=new Ze,r.setAttribute("position",new Ee([0,0,0,0,0,1],3)),this.targetLine=new br(r,a),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Om.setFromMatrixPosition(this.light.matrixWorld),Tl.setFromMatrixPosition(this.light.target.matrixWorld),Fm.subVectors(Tl,Om),this.lightPlane.lookAt(Tl),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Tl),this.targetLine.scale.z=Fm.length()}}const Al=new P,gt=new Wa;class DS extends ki{constructor(e){const t=new Ze,i=new qt({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],a=[],s={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(g,v){l(g),l(v)}function l(g){r.push(0,0,0),a.push(0,0,0),s[g]===void 0&&(s[g]=[]),s[g].push(r.length/3-1)}t.setAttribute("position",new Ee(r,3)),t.setAttribute("color",new Ee(a,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();const c=new ge(16755200),u=new ge(16711680),d=new ge(43775),h=new ge(16777215),p=new ge(3355443);this.setColors(c,u,d,h,p)}setColors(e,t,i,r,a){const s=this.geometry.getAttribute("color");s.setXYZ(0,e.r,e.g,e.b),s.setXYZ(1,e.r,e.g,e.b),s.setXYZ(2,e.r,e.g,e.b),s.setXYZ(3,e.r,e.g,e.b),s.setXYZ(4,e.r,e.g,e.b),s.setXYZ(5,e.r,e.g,e.b),s.setXYZ(6,e.r,e.g,e.b),s.setXYZ(7,e.r,e.g,e.b),s.setXYZ(8,e.r,e.g,e.b),s.setXYZ(9,e.r,e.g,e.b),s.setXYZ(10,e.r,e.g,e.b),s.setXYZ(11,e.r,e.g,e.b),s.setXYZ(12,e.r,e.g,e.b),s.setXYZ(13,e.r,e.g,e.b),s.setXYZ(14,e.r,e.g,e.b),s.setXYZ(15,e.r,e.g,e.b),s.setXYZ(16,e.r,e.g,e.b),s.setXYZ(17,e.r,e.g,e.b),s.setXYZ(18,e.r,e.g,e.b),s.setXYZ(19,e.r,e.g,e.b),s.setXYZ(20,e.r,e.g,e.b),s.setXYZ(21,e.r,e.g,e.b),s.setXYZ(22,e.r,e.g,e.b),s.setXYZ(23,e.r,e.g,e.b),s.setXYZ(24,t.r,t.g,t.b),s.setXYZ(25,t.r,t.g,t.b),s.setXYZ(26,t.r,t.g,t.b),s.setXYZ(27,t.r,t.g,t.b),s.setXYZ(28,t.r,t.g,t.b),s.setXYZ(29,t.r,t.g,t.b),s.setXYZ(30,t.r,t.g,t.b),s.setXYZ(31,t.r,t.g,t.b),s.setXYZ(32,i.r,i.g,i.b),s.setXYZ(33,i.r,i.g,i.b),s.setXYZ(34,i.r,i.g,i.b),s.setXYZ(35,i.r,i.g,i.b),s.setXYZ(36,i.r,i.g,i.b),s.setXYZ(37,i.r,i.g,i.b),s.setXYZ(38,r.r,r.g,r.b),s.setXYZ(39,r.r,r.g,r.b),s.setXYZ(40,a.r,a.g,a.b),s.setXYZ(41,a.r,a.g,a.b),s.setXYZ(42,a.r,a.g,a.b),s.setXYZ(43,a.r,a.g,a.b),s.setXYZ(44,a.r,a.g,a.b),s.setXYZ(45,a.r,a.g,a.b),s.setXYZ(46,a.r,a.g,a.b),s.setXYZ(47,a.r,a.g,a.b),s.setXYZ(48,a.r,a.g,a.b),s.setXYZ(49,a.r,a.g,a.b),s.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,i=1,r=1;gt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),yt("c",t,e,gt,0,0,-1),yt("t",t,e,gt,0,0,1),yt("n1",t,e,gt,-i,-r,-1),yt("n2",t,e,gt,i,-r,-1),yt("n3",t,e,gt,-i,r,-1),yt("n4",t,e,gt,i,r,-1),yt("f1",t,e,gt,-i,-r,1),yt("f2",t,e,gt,i,-r,1),yt("f3",t,e,gt,-i,r,1),yt("f4",t,e,gt,i,r,1),yt("u1",t,e,gt,i*.7,r*1.1,-1),yt("u2",t,e,gt,-i*.7,r*1.1,-1),yt("u3",t,e,gt,0,r*2,-1),yt("cf1",t,e,gt,-i,0,1),yt("cf2",t,e,gt,i,0,1),yt("cf3",t,e,gt,0,-r,1),yt("cf4",t,e,gt,0,r,1),yt("cn1",t,e,gt,-i,0,-1),yt("cn2",t,e,gt,i,0,-1),yt("cn3",t,e,gt,0,-r,-1),yt("cn4",t,e,gt,0,r,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function yt(n,e,t,i,r,a,s){Al.set(r,a,s).unproject(i);const o=e[n];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],Al.x,Al.y,Al.z)}}const Cl=new Wt;class US extends ki{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),a=new Ze;a.setIndex(new ot(i,1)),a.setAttribute("position",new ot(r,3)),super(a,new qt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Cl.setFromObject(this.object),Cl.isEmpty())return;const t=Cl.min,i=Cl.max,r=this.geometry.attributes.position,a=r.array;a[0]=i.x,a[1]=i.y,a[2]=i.z,a[3]=t.x,a[4]=i.y,a[5]=i.z,a[6]=t.x,a[7]=t.y,a[8]=i.z,a[9]=i.x,a[10]=t.y,a[11]=i.z,a[12]=i.x,a[13]=i.y,a[14]=t.z,a[15]=t.x,a[16]=i.y,a[17]=t.z,a[18]=t.x,a[19]=t.y,a[20]=t.z,a[21]=i.x,a[22]=t.y,a[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class OS extends ki{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],a=new Ze;a.setIndex(new ot(i,1)),a.setAttribute("position",new Ee(r,3)),super(a,new qt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class FS extends br{constructor(e,t=1,i=16776960){const r=i,a=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],s=new Ze;s.setAttribute("position",new Ee(a,3)),s.computeBoundingSphere(),super(s,new qt({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ze;l.setAttribute("position",new Ee(o,3)),l.computeBoundingSphere(),this.add(new dt(l,new rr({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Bm=new P;let Rl,th;class BS extends Qe{constructor(e=new P(0,0,1),t=new P(0,0,0),i=1,r=16776960,a=i*.2,s=a*.2){super(),this.type="ArrowHelper",Rl===void 0&&(Rl=new Ze,Rl.setAttribute("position",new Ee([0,0,0,0,1,0],3)),th=new sa(0,.5,1,5,1),th.translate(0,-.5,0)),this.position.copy(t),this.line=new br(Rl,new qt({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new dt(th,new rr({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,a,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Bm.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Bm,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class zS extends ki{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Ze;r.setAttribute("position",new Ee(t,3)),r.setAttribute("color",new Ee(i,3));const a=new qt({vertexColors:!0,toneMapped:!1});super(r,a),this.type="AxesHelper"}setColors(e,t,i){const r=new ge,a=this.geometry.attributes.color.array;return r.set(e),r.toArray(a,0),r.toArray(a,3),r.set(t),r.toArray(a,6),r.toArray(a,9),r.set(i),r.toArray(a,12),r.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class kS{constructor(){this.type="ShapePath",this.color=new ge,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new rs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,a,s){return this.currentPath.bezierCurveTo(e,t,i,r,a,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const _=[];for(let y=0,x=f.length;y<x;y++){const A=f[y],E=new sn;E.curves=A.curves,_.push(E)}return _}function i(f,_){const y=_.length;let x=!1;for(let A=y-1,E=0;E<y;A=E++){let S=_[A],R=_[E],w=R.x-S.x,M=R.y-S.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(S=_[E],w=-w,R=_[A],M=-M),f.y<S.y||f.y>R.y)continue;if(f.y===S.y){if(f.x===S.x)return!0}else{const I=M*(f.x-S.x)-w*(f.y-S.y);if(I===0)return!0;if(I<0)continue;x=!x}}else{if(f.y!==S.y)continue;if(R.x<=f.x&&f.x<=S.x||S.x<=f.x&&f.x<=R.x)return!0}}return x}const r=Gi.isClockWise,a=this.subPaths;if(a.length===0)return[];let s,o,l;const c=[];if(a.length===1)return o=a[0],l=new sn,l.curves=o.curves,c.push(l),c;let u=!r(a[0].getPoints());u=e?!u:u;const d=[],h=[];let p=[],g=0,v;h[g]=void 0,p[g]=[];for(let f=0,_=a.length;f<_;f++)o=a[f],v=o.getPoints(),s=r(v),s=e?!s:s,s?(!u&&h[g]&&g++,h[g]={s:new sn,p:v},h[g].s.curves=o.curves,u&&g++,p[g]=[]):p[g].push({h:o,p:v[0]});if(!h[0])return t(a);if(h.length>1){let f=!1,_=0;for(let y=0,x=h.length;y<x;y++)d[y]=[];for(let y=0,x=h.length;y<x;y++){const A=p[y];for(let E=0;E<A.length;E++){const S=A[E];let R=!0;for(let w=0;w<h.length;w++)i(S.p,h[w].p)&&(y!==w&&_++,R?(R=!1,d[w].push(S)):f=!0);R&&d[y].push(S)}}_>0&&f===!1&&(p=d)}let m;for(let f=0,_=h.length;f<_;f++){l=h[f].s,c.push(l),m=p[f];for(let y=0,x=m.length;y<x;y++)l.holes.push(m[y].h)}return c}}class VS extends Bi{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class GS extends yi{constructor(e=1,t=1,i=1,r={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...r,count:i}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fa}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fa);const HS=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Bs,AddEquation:dr,AddOperation:Cd,AdditiveAnimationBlendMode:Pc,AdditiveBlending:gc,AgXToneMapping:Nd,AlphaFormat:Sc,AlwaysCompare:Yd,AlwaysDepth:wd,AlwaysStencilFunc:Lc,AmbientLight:hm,AnimationAction:Tm,AnimationClip:hs,AnimationLoader:Gb,AnimationMixer:vS,AnimationObjectGroup:mS,AnimationUtils:Bb,ArcCurve:Af,ArrayCamera:$p,ArrowHelper:BS,AttachedBindMode:yc,Audio:bm,AudioAnalyser:aS,AudioContext:Ju,AudioListener:iS,AudioLoader:Qb,AxesHelper:zS,BackSide:Vt,BasicDepthPacking:zd,BasicShadowMap:B0,BatchedMesh:_f,Bone:wu,BooleanKeyframeTrack:cn,Box2:SS,Box3:Wt,Box3Helper:OS,BoxGeometry:_n,BoxHelper:US,BufferAttribute:ot,BufferGeometry:Ze,BufferGeometryLoader:gm,ByteType:wc,Cache:ar,Camera:Wa,CameraHelper:DS,CanvasTexture:lb,CapsuleGeometry:kl,CatmullRomCurve3:Cf,CineonToneMapping:Ld,CircleGeometry:Vl,ClampToEdgeWrapping:pi,Clock:bl,Color:ge,ColorKeyframeTrack:Wu,ColorManagement:rt,CompressedArrayTexture:sb,CompressedCubeTexture:ob,CompressedTexture:dl,CompressedTextureLoader:Hb,ConeGeometry:Gl,ConstantAlphaFactor:_d,ConstantColorFactor:gd,Controls:VS,CubeCamera:Mp,CubeReflectionMapping:Yi,CubeRefractionMapping:pr,CubeTexture:ja,CubeTextureLoader:Wb,CubeUVReflectionMapping:bn,CubicBezierCurve:Iu,CubicBezierCurve3:Pf,CubicInterpolant:em,CullFaceBack:pc,CullFaceFront:td,CullFaceFrontBack:F0,CullFaceNone:ed,Curve:Ei,CurvePath:If,CustomBlending:id,CustomToneMapping:Id,CylinderGeometry:sa,Cylindrical:bS,Data3DTexture:zc,DataArrayTexture:bo,DataTexture:zi,DataTextureLoader:jb,DataUtils:J_,DecrementStencilOp:$0,DecrementWrapStencilOp:e_,DefaultLoadingManager:rm,DepthFormat:Hr,DepthStencilFormat:Wr,DepthTexture:uu,DetachedBindMode:Ud,DirectionalLight:um,DirectionalLightHelper:NS,DiscreteInterpolant:tm,DisplayP3ColorSpace:Mo,DodecahedronGeometry:Hl,DoubleSide:_i,DstAlphaFactor:hd,DstColorFactor:pd,DynamicCopyUsage:m_,DynamicDrawUsage:c_,DynamicReadUsage:d_,EdgesGeometry:Nf,EllipseCurve:pl,EqualCompare:Wd,EqualDepth:bd,EqualStencilFunc:n_,EquirectangularReflectionMapping:va,EquirectangularRefractionMapping:_a,Euler:si,EventDispatcher:Bi,ExtrudeGeometry:Wl,FileLoader:or,Float16BufferAttribute:iy,Float32BufferAttribute:Ee,FloatType:Yt,Fog:Bl,FogExp2:Fl,FramebufferTexture:ab,FrontSide:Xi,Frustum:Xa,GLBufferAttribute:wS,GLSL1:v_,GLSL3:Nc,GreaterCompare:jd,GreaterDepth:Ed,GreaterEqualCompare:qd,GreaterEqualDepth:Sd,GreaterEqualStencilFunc:l_,GreaterStencilFunc:s_,GridHelper:LS,Group:Kn,HalfFloatType:Tn,HemisphereLight:nm,HemisphereLightHelper:PS,IcosahedronGeometry:jl,ImageBitmapLoader:$b,ImageLoader:ds,ImageUtils:tp,IncrementStencilOp:K0,IncrementWrapStencilOp:Q0,InstancedBufferAttribute:ia,InstancedBufferGeometry:mm,InstancedInterleavedBuffer:xS,InstancedMesh:mf,Int16BufferAttribute:ey,Int32BufferAttribute:ty,Int8BufferAttribute:K_,IntType:ks,InterleavedBuffer:Ko,InterleavedBufferAttribute:yn,Interpolant:os,InterpolateDiscrete:Ca,InterpolateLinear:yo,InterpolateSmooth:xo,InvertStencilOp:t_,KeepStencilOp:qr,KeyframeTrack:Ti,LOD:af,LatheGeometry:ys,Layers:Po,LessCompare:Hd,LessDepth:Md,LessEqualCompare:Ic,LessEqualDepth:ma,LessEqualStencilFunc:a_,LessStencilFunc:r_,Light:Sr,LightProbe:fm,Line:br,Line3:ES,LineBasicMaterial:qt,LineCurve:Nu,LineCurve3:Lf,LineDashedMaterial:Kf,LineLoop:bf,LineSegments:ki,LinearDisplayP3ColorSpace:Pa,LinearFilter:bt,LinearInterpolant:Hu,LinearMipMapLinearFilter:G0,LinearMipMapNearestFilter:V0,LinearMipmapLinearFilter:Ui,LinearMipmapNearestFilter:wa,LinearSRGBColorSpace:Ki,LinearToneMapping:Rd,LinearTransfer:La,Loader:Kt,LoaderUtils:Zu,LoadingManager:ju,LoopOnce:Od,LoopPingPong:Bd,LoopRepeat:Fd,LuminanceAlphaFormat:Ac,LuminanceFormat:Tc,MOUSE:U0,Material:Bt,MaterialLoader:$l,MathUtils:Uc,Matrix2:mh,Matrix3:Xe,Matrix4:Oe,MaxEquation:sd,Mesh:dt,MeshBasicMaterial:rr,MeshDepthMaterial:pu,MeshDistanceMaterial:fu,MeshLambertMaterial:Zf,MeshMatcapMaterial:Jf,MeshNormalMaterial:Yf,MeshPhongMaterial:Xf,MeshPhysicalMaterial:jf,MeshStandardMaterial:ku,MeshToonMaterial:qf,MinEquation:ad,MirroredRepeatWrapping:xa,MixOperation:Ad,MultiplyBlending:_c,MultiplyOperation:ga,NearestFilter:Pt,NearestMipMapLinearFilter:k0,NearestMipMapNearestFilter:z0,NearestMipmapLinearFilter:Sn,NearestMipmapNearestFilter:xc,NeutralToneMapping:Dd,NeverCompare:Gd,NeverDepth:xd,NeverStencilFunc:i_,NoBlending:qi,NoColorSpace:Ji,NoToneMapping:Di,NormalAnimationBlendMode:wo,NormalBlending:Vr,NotEqualCompare:Xd,NotEqualDepth:Td,NotEqualStencilFunc:o_,NumberKeyframeTrack:ls,Object3D:Qe,ObjectLoader:Jb,ObjectSpaceNormalMap:Vd,OctahedronGeometry:xs,OneFactor:ld,OneMinusConstantAlphaFactor:yd,OneMinusConstantColorFactor:vd,OneMinusDstAlphaFactor:dd,OneMinusDstColorFactor:fd,OneMinusSrcAlphaFactor:Fs,OneMinusSrcColorFactor:ud,OrthographicCamera:Wo,P3Primaries:Na,PCFShadowMap:fc,PCFSoftShadowMap:mc,PMREMGenerator:lu,Path:rs,PerspectiveCamera:Et,Plane:wr,PlaneGeometry:Ar,PlaneHelper:FS,PointLight:cm,PointLightHelper:CS,Points:Ef,PointsMaterial:Tu,PolarGridHelper:IS,PolyhedronGeometry:Cr,PositionalAudio:nS,PropertyBinding:it,PropertyMixer:Em,QuadraticBezierCurve:Du,QuadraticBezierCurve3:Uu,Quaternion:Zt,QuaternionKeyframeTrack:cs,QuaternionLinearInterpolant:im,RED_GREEN_RGTC2_Format:vo,RED_RGTC1_Format:Rc,REVISION:fa,RGBADepthPacking:kd,RGBAFormat:Gt,RGBAIntegerFormat:js,RGBA_ASTC_10x10_Format:uo,RGBA_ASTC_10x5_Format:oo,RGBA_ASTC_10x6_Format:lo,RGBA_ASTC_10x8_Format:co,RGBA_ASTC_12x10_Format:ho,RGBA_ASTC_12x12_Format:po,RGBA_ASTC_4x4_Format:Qs,RGBA_ASTC_5x4_Format:eo,RGBA_ASTC_5x5_Format:to,RGBA_ASTC_6x5_Format:io,RGBA_ASTC_6x6_Format:ro,RGBA_ASTC_8x5_Format:no,RGBA_ASTC_8x6_Format:ao,RGBA_ASTC_8x8_Format:so,RGBA_BPTC_Format:Aa,RGBA_ETC2_EAC_Format:$s,RGBA_PVRTC_2BPPV1_Format:Zs,RGBA_PVRTC_4BPPV1_Format:Ys,RGBA_S3TC_DXT1_Format:Sa,RGBA_S3TC_DXT3_Format:Ea,RGBA_S3TC_DXT5_Format:Ta,RGBDepthPacking:q0,RGBFormat:Ec,RGBIntegerFormat:H0,RGB_BPTC_SIGNED_Format:fo,RGB_BPTC_UNSIGNED_Format:mo,RGB_ETC1_Format:Js,RGB_ETC2_Format:Ks,RGB_PVRTC_2BPPV1_Format:qs,RGB_PVRTC_4BPPV1_Format:Xs,RGB_S3TC_DXT1_Format:ba,RGDepthPacking:Y0,RGFormat:Cc,RGIntegerFormat:Ws,RawShaderMaterial:Wf,Ray:Un,Raycaster:Cm,Rec709Primaries:Ia,RectAreaLight:dm,RedFormat:Hs,RedIntegerFormat:Ma,ReinhardToneMapping:Pd,RenderTarget:ip,RepeatWrapping:ya,ReplaceStencilOp:J0,ReverseSubtractEquation:nd,RingGeometry:Xl,SIGNED_RED_GREEN_RGTC2_Format:_o,SIGNED_RED_RGTC1_Format:go,SRGBColorSpace:ii,SRGBTransfer:ct,Scene:Jo,ShaderChunk:qe,ShaderLib:Si,ShaderMaterial:bi,ShadowMaterial:Hf,Shape:sn,ShapeGeometry:ql,ShapePath:kS,ShapeUtils:Gi,ShortType:Mc,Skeleton:zl,SkeletonHelper:AS,SkinnedMesh:hf,Source:Zr,Sphere:Ot,SphereGeometry:ws,Spherical:MS,SphericalHarmonics3:pm,SplineCurve:Ou,SpotLight:om,SpotLightHelper:TS,Sprite:rf,SpriteMaterial:vu,SrcAlphaFactor:Os,SrcAlphaSaturateFactor:md,SrcColorFactor:cd,StaticCopyUsage:f_,StaticDrawUsage:Da,StaticReadUsage:h_,StereoCamera:eS,StreamCopyUsage:g_,StreamDrawUsage:u_,StreamReadUsage:p_,StringKeyframeTrack:un,SubtractEquation:rd,SubtractiveBlending:vc,TOUCH:O0,TangentSpaceNormalMap:fr,TetrahedronGeometry:Yl,Texture:vt,TextureLoader:Xb,TextureUtils:BM,TorusGeometry:Zl,TorusKnotGeometry:Jl,Triangle:oi,TriangleFanDrawMode:X0,TriangleStripDrawMode:j0,TrianglesDrawMode:W0,TubeGeometry:Kl,UVMapping:zs,Uint16BufferAttribute:$c,Uint32BufferAttribute:Qc,Uint8BufferAttribute:$_,Uint8ClampedBufferAttribute:Q_,Uniform:fh,UniformsGroup:yS,UniformsLib:pe,UniformsUtils:yp,UnsignedByteType:Oi,UnsignedInt248Type:Gr,UnsignedInt5999Type:bc,UnsignedIntType:Zi,UnsignedShort4444Type:Vs,UnsignedShort5551Type:Gs,UnsignedShortType:En,VSMShadowMap:Ni,Vector2:J,Vector3:P,Vector4:nt,VectorKeyframeTrack:us,VideoTexture:nb,WebGL3DRenderTarget:k_,WebGLArrayRenderTarget:z_,WebGLCoordinateSystem:Fi,WebGLCubeRenderTarget:bp,WebGLMultipleRenderTargets:GS,WebGLRenderTarget:yi,WebGLRenderer:Zo,WebGLUtils:Kp,WebGPUCoordinateSystem:Ua,WireframeGeometry:kf,WrapAroundEnding:Ra,ZeroCurvatureEnding:jr,ZeroFactor:od,ZeroSlopeEnding:Xr,ZeroStencilOp:Z0,createCanvasElement:Kd},Symbol.toStringTag,{value:"Module"}));var WS=Object.defineProperty,jS=(n,e,t)=>e in n?WS(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,zm=(n,e,t)=>jS(n,typeof e!="symbol"?e+"":e,t);const XS="@tresjs/core",qS="module",YS="4.3.0",ZS="pnpm@9.1.4",JS="Declarative ThreeJS using Vue Components",KS="Alvaro Saburido <hola@alvarosaburido.dev> (https://github.com/alvarosabu/)",$S="MIT",QS={type:"git",url:"git+https://github.com/Tresjs/tres.git"},eE=["vue","3d","threejs","three","threejs-vue"],tE=!1,iE={".":{types:"./dist/index.d.ts",import:"./dist/tres.js",require:"./dist/tres.umd.cjs"},"./components":{types:"./dist/src/components/index.d.ts"},"./composables":{types:"./dist/src/composables/index.d.ts"},"./types":{types:"./dist/src/types/index.d.ts"},"./utils":{types:"./dist/src/utils/index.d.ts"},"./*":"./*"},rE="./dist/tres.js",nE="./dist/tres.js",aE="./dist/index.d.ts",sE=["*.d.ts","dist"],oE={access:"public"},lE={dev:"cd playground/vue && npm run dev","dev:nuxt":"cd playground/nuxt && npm run dev",build:"vite build",test:"vitest","test:ci":"vitest run","test:ui":"vitest --ui --coverage.enabled=true",release:"release-it",coverage:"vitest run --coverage",lint:"eslint .","lint:fix":"eslint . --fix","docs:dev":"vitepress dev docs","docs:build":"vitepress build docs","docs:serve":"vitepress serve docs","docs:preview":"vitepress preview docs","docs:contributors":"esno scripts/update-contributors.ts"},cE={three:">=0.133",vue:">=3.4"},uE={"@alvarosabu/utils":"^3.2.0","@vue/devtools-api":"^6.6.3","@vueuse/core":"^11.1.0"},hE={"@release-it/conventional-changelog":"^8.0.2","@stackblitz/sdk":"^1.11.0","@tresjs/cientos":"4.0.2","@tresjs/eslint-config":"^1.3.1","@types/three":"^0.168.0","@typescript-eslint/eslint-plugin":"^8.6.0","@typescript-eslint/parser":"^8.6.0","@vitejs/plugin-vue":"^5.1.3","@vitest/coverage-c8":"^0.33.0","@vitest/coverage-v8":"^2.1.1","@vitest/ui":"^2.1.1","@vue/test-utils":"^2.4.6",eslint:"^9.10.0","eslint-plugin-vue":"^9.28.0",esno:"^4.7.0",gsap:"^3.12.5",husky:"^9.1.6",jsdom:"^25.0.0",kolorist:"^1.8.0",ohmyfetch:"^0.4.21",pathe:"^1.1.2","release-it":"^17.5.0","rollup-plugin-analyzer":"^4.0.0","rollup-plugin-copy":"^3.5.0","rollup-plugin-visualizer":"^5.12.0",sponsorkit:"^0.15.5",three:"^0.168.0",unocss:"^0.62.4",unplugin:"^1.14.1","unplugin-vue-components":"^0.27.4",vite:"^5.4.6","vite-plugin-banner":"^0.8.0","vite-plugin-dts":"4.2.1","vite-plugin-inspect":"^0.8.7","vite-plugin-require-transform":"^1.0.21","vite-svg-loader":"^5.1.0",vitepress:"1.3.4",vitest:"^2.1.1",vue:"3.5.6","vue-demi":"^0.14.10"},dE={name:XS,type:qS,version:YS,packageManager:ZS,description:JS,author:KS,license:$S,repository:QS,keywords:eE,sideEffects:tE,exports:iE,main:rE,module:nE,types:aE,files:sE,publishConfig:oE,scripts:lE,peerDependencies:cE,dependencies:uE,devDependencies:hE};class pE extends dt{constructor(...e){super(...e),zm(this,"type","HightlightMesh"),zm(this,"createTime"),this.createTime=Date.now()}onBeforeRender(){const e=(Date.now()-this.createTime)/1e3,t=1+.07*Math.sin(2.5*e);this.scale.set(t,t,t)}}function ih(n){return typeof n>"u"}function Pl(n){return Array.isArray(n)}function fE(n){return typeof n=="number"}function km(n){return typeof n=="string"}function gn(n){return typeof n=="function"}function lr(n){return n===Object(n)&&!Pl(n)&&!gn(n)}function Tr(n){return lr(n)&&"isObject3D"in n&&!!n.isObject3D}function Vm(n){return lr(n)&&"isCamera"in n&&!!n.isCamera}function mE(n){return lr(n)&&"isBufferGeometry"in n&&!!n.isBufferGeometry}function gE(n){return lr(n)&&"isMaterial"in n&&!!n.isMaterial}function vE(n){return lr(n)&&"isLight"in n&&!!n.isLight}function _E(n){return lr(n)&&"isFog"in n&&!!n.isFog}function yE(n){return lr(n)&&"isScene"in n&&!!n.isScene}function Ll(n){return Tr(n)||mE(n)||gE(n)||_E(n)}function xE(n){return lr(n)&&!!n.isPrimitive}const Gm=(n,e)=>{for(const t of Object.keys(e))e[t]instanceof Object&&Object.assign(e[t],Gm(n[t],e[t]));return Object.assign(n||{},e),n},wE="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",ME=EE(wE);function Hm(n){return n&&n.nodeType===1}function Il(n){return n.replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}const bE=/\B([A-Z])/g;function SE(n){return n.replace(bE,"-$1").toLowerCase()}function EE(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return r=>!!t[r]}const Wm=(n,e)=>e?(Array.isArray(e)?e:e.match(/([^[.\]])+/g))?.reduce((i,r)=>i&&i[r],n):void 0,TE=(n,e,t)=>{const i=Array.isArray(e)?e:e.match(/([^[.\]])+/g);i&&i.reduce((r,a,s)=>(r[a]===void 0&&(r[a]={}),s===i.length-1&&(r[a]=t),r[a]),n)};function jm(n,e){if(Hm(n)&&Hm(e)){const r=n.attributes,a=e.attributes;return r.length!==a.length?!1:Array.from(r).every(({name:s,value:o})=>e.getAttribute(s)===o)}if(n===e)return!0;if(n===null||typeof n!="object"||e===null||typeof e!="object")return!1;const t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(const r of t)if(!i.includes(r)||!jm(n[r],e[r]))return!1;return!0}function AE(n,e){if(!Array.isArray(n)||!Array.isArray(e)||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!jm(n[t],e[t]))return!1;return!0}function CE(n,e,t,i){const r=l=>{if(l.uuid===e)return l;for(const c of l.children){const u=r(c);if(u)return u}},a=r(n);if(!a){console.warn("Object with UUID not found in the scene.");return}let s=a;for(let l=0;l<t.length-1;l++)if(s[t[l]]!==void 0)s=s[t[l]];else{console.warn(`Property path is not valid: ${t.join(".")}`);return}const o=t[t.length-1];s[o]!==void 0?s[o]=i:console.warn(`Property path is not valid: ${t.join(".")}`)}function RE(n){const e=new rr({color:11003607,transparent:!0,opacity:.2,depthTest:!1,side:_i});return new pE(n.geometry.clone(),e)}function PE(n){return"map"in n}function Xm(n){PE(n)&&n.map&&n.map.dispose(),n.dispose()}function qm(n){var e,t;if(n.parent&&((e=n.removeFromParent)==null||e.call(n)),delete n.__tres,[...n.children].forEach(i=>qm(i)),!(n instanceof Jo)){const i=n;n&&((t=n.dispose)==null||t.call(n)),i.geometry&&(i.geometry.dispose(),delete i.geometry),Array.isArray(i.material)?(i.material.forEach(r=>Xm(r)),delete i.material):i.material&&(Xm(i.material),delete i.material)}}function LE(n,e){let t=0;for(let i=0;i<n.length;i++)e(n[i],i)&&(n[t]=n[i],t++);return n.length=t,n}function rh(n,e){let t=n;if(e.includes("-")){const i=e.split("-");let r=i.shift();for(;t&&i.length;)r in t?(t=t[r],r=i.shift()):r=Ym(r,i.shift());return{target:t,key:Ym(r,...i)}}else return{target:t,key:e}}function Ym(...n){return n.map((e,t)=>t===0?e:e.charAt(0).toUpperCase()+e.slice(1)).join("")}const Zm=/-\d+$/;function IE(n,e,t){if(km(t)){if(Zm.test(t)){const a=t.replace(Zm,""),{target:s,key:o}=rh(n,a);if(!Array.isArray(s[o])){const l=s[o],c=[];c.__tresDetach=()=>{c.every(u=>ih(u))&&(s[o]=l)},s[o]=c}}const{target:i,key:r}=rh(n,t);e.__tres.previousAttach=i[r],i[r]=aa(e)}else e.__tres.previousAttach=t(n,e)}function NE(n,e,t){var i,r,a;if(km(t)){const{target:s,key:o}=rh(n,t),l=e.__tres.previousAttach;l===void 0?delete s[o]:s[o]=l,"__tresDetach"in s&&s.__tresDetach()}else(r=(i=e.__tres)==null?void 0:i.previousAttach)==null||r.call(i,n,e);(a=e.__tres)==null||delete a.previousAttach}function vn(n,e,t){const i=n;return i.__tres={type:"unknown",eventCount:0,root:t,handlers:{},memoizedProps:{},objects:[],parent:null,previousAttach:null,...e},i.__tres.attach||(i.isMaterial?i.__tres.attach="material":i.isBufferGeometry?i.__tres.attach="geometry":i.isFog&&(i.__tres.attach="fog")),i}function Jm(n){var e;const t=(e=n?.__tres)==null?void 0:e.root;t&&t.render&&t.render.canBeInvalidated.value&&t.invalidate()}function DE(n,e,t){var i;if(!gn(n.setPixelRatio))return;let r=0;if(Pl(t)&&t.length>=2){const[a,s]=t;r=Uc.clamp(e,a,s)}else fE(t)?r=t:r=e;r!==((i=n.getPixelRatio)==null?void 0:i.call(n))&&n.setPixelRatio(r)}function UE(n,e,t,i,r){const a=[...e.__tres.objects],s=aa(e);if(n=aa(n),s===n)return!0;const o=vn(n,e.__tres??{},r),l=e.parent??e.__tres.parent??null,c={...e.__tres.memoizedProps};delete c.object;for(const u of a)Km(u,r),$m(u,r);s.__tres.objects=[],i.remove(e);for(const[u,d]of Object.entries(c))i.patchProp(o,u,o[u],d);t(n),i.insert(e,l);for(const u of a)i.insert(u,e);return!0}function aa(n){return xE(n)?(n.object.__tres=n.__tres,n.object):n}function Km(n,e){var t,i,r,a;const s=((t=n.__tres)==null?void 0:t.parent)||e.scene.value;n.__tres&&(n.__tres.parent=null),s&&s.__tres&&"objects"in s.__tres&&LE(s.__tres.objects,o=>o!==n),(i=n.__tres)!=null&&i.attach?NE(s,n,n.__tres.attach):((a=(r=n.parent)==null?void 0:r.remove)==null||a.call(r,aa(n)),n.parent=null)}function $m(n,e){var t;(t=n.traverse)==null||t.call(n,i=>{var r;e.deregisterCamera(i),(r=e.eventManager)==null||r.deregisterPointerMissedObject(i)}),e.deregisterCamera(n),Jm(n)}const OE=({sizes:n})=>{const e=ye([]),t=Ke(()=>e.value[0]),i=s=>{const o=s instanceof Wa?s:e.value.find(c=>c.uuid===s);if(!o)return;const l=e.value.filter(({uuid:c})=>c!==o.uuid);e.value=[o,...l]},r=(s,o=!1)=>{if(Vm(s)){const l=s;if(e.value.some(({uuid:c})=>c===l.uuid))return;o?i(l):e.value.push(l)}},a=s=>{if(Vm(s)){const o=s;e.value=e.value.filter(({uuid:l})=>l!==o.uuid)}};return Rs(()=>{n.aspectRatio.value&&e.value.forEach(s=>{!s.manual&&(s instanceof Et||FE(s))&&(s instanceof Et?s.aspect=n.aspectRatio.value:(s.left=n.width.value*-.5,s.right=n.width.value*.5,s.top=n.height.value*.5,s.bottom=n.height.value*-.5),s.updateProjectionMatrix())})}),Ir(()=>{e.value=[]}),{camera:t,cameras:e,registerCamera:r,deregisterCamera:a,setCameraActive:i}};function FE(n){return n.hasOwnProperty("isOrthographicCamera")&&n.isOrthographicCamera}const Nl="[TresJS \u25B2 \u25A0 \u25CF] ";function BE(...n){typeof n[0]=="string"?n[0]=Nl+n[0]:n.unshift(Nl),console.error(...n)}function zE(...n){typeof n[0]=="string"?n[0]=Nl+n[0]:n.unshift(Nl),console.warn(...n)}function kE(n,e){}function nh(){return{logError:BE,logWarning:zE,logMessage:kE}}const ah=ye({}),sh=n=>Object.assign(ah.value,n);function oh(){const n=new Map,e=new Set;let t=0,i=!1;const r=()=>{const s=Array.from(n.entries()).sort((o,l)=>{const c=o[1].priority-l[1].priority;return c===0?o[1].addI-l[1].addI:c});e.clear(),s.forEach(o=>e.add(o[0]))},a=s=>{n.delete(s),e.delete(s)};return{on:(s,o=0)=>{n.set(s,{priority:o,addI:t++});const l=()=>a(s);return Pi(l),i=!0,{off:l}},off:a,trigger:(...s)=>{i&&(r(),i=!1),e.forEach(o=>o(...s))},dispose:()=>{n.clear(),e.clear()},get count(){return n.size}}}function VE(){let n=!0,e=!0,t=!1;const i=new bl(!1),r=ye(i.running),a=ye(!1);let s;const o=Uc.generateUUID();let l=null;const c=oh(),u=oh(),d=oh();E();let h={};function p(S){h=S}function g(S,R,w=0){switch(R){case"before":return c.on(S,w);case"render":return l||(l=S),u.dispose(),u.on(S);case"after":return d.on(S,w)}}function v(){e&&(e=!1,E(),A())}function m(){e=!0,E(),cancelAnimationFrame(s)}function f(){t=!1,E()}function _(){t=!0,E()}function y(){a.value=!0}function x(){a.value=!1}function A(){if(!n){s=requestAnimationFrame(A);return}const S=i.getDelta(),R=i.getElapsedTime(),w={camera:Lr(h.camera),scene:Lr(h.scene),renderer:Lr(h.renderer),raycaster:Lr(h.raycaster),controls:Lr(h.controls),invalidate:h.invalidate,advance:h.advance},M={delta:S,elapsed:R,clock:i,...w};r.value&&c.trigger(M),a.value||(u.count?u.trigger(M):l&&l(M)),r.value&&d.trigger(M),s=requestAnimationFrame(A)}function E(){const S=!e&&!t;i.running!==S&&(i.running?i.stop():i.start()),r.value=i.running}return{loopId:o,register:(S,R,w)=>g(S,R,w),start:v,stop:m,pause:_,resume:f,pauseRender:y,resumeRender:x,isRenderPaused:a,isActive:r,setContext:p,setReady:S=>n=S}}function lh(n){let e=0;return n.traverse(t=>{if(t.isMesh&&t.geometry&&t.type!=="HightlightMesh"){const i=t.geometry,r=i.attributes.position.count*3*Float32Array.BYTES_PER_ELEMENT,a=i.index?i.index.count*Uint32Array.BYTES_PER_ELEMENT:0,s=i.attributes.normal?i.attributes.normal.count*3*Float32Array.BYTES_PER_ELEMENT:0,o=i.attributes.uv?i.attributes.uv.count*2*Float32Array.BYTES_PER_ELEMENT:0,l=r+a+s+o;e+=l}}),e}function GE(n){return(n/1024).toFixed(2)}const HE=Number.parseInt(fa.replace("dev",""));function WE(n){return n instanceof ge?n:Array.isArray(n)?new ge(...n):new ge(n)}const Dl={realistic:{shadows:!0,physicallyCorrectLights:!0,outputColorSpace:ii,toneMapping:Bs,toneMappingExposure:3,shadowMap:{enabled:!0,type:mc}},flat:{toneMapping:Di,toneMappingExposure:1}};function jE({canvas:n,options:e,contextParts:{sizes:t,render:i,invalidate:r,advance:a}}){const s=Ke(()=>({alpha:tt(e.alpha)??!0,depth:tt(e.depth),canvas:di(n),context:tt(e.context),stencil:tt(e.stencil),antialias:tt(e.antialias)??!0,precision:tt(e.precision),powerPreference:tt(e.powerPreference),premultipliedAlpha:tt(e.premultipliedAlpha),preserveDrawingBuffer:tt(e.preserveDrawingBuffer),logarithmicDepthBuffer:tt(e.logarithmicDepthBuffer),failIfMajorPerformanceCaveat:tt(e.failIfMajorPerformanceCaveat)})),o=ei(new Zo(s.value));function l(){e.renderMode==="on-demand"&&r()}Rt(s,()=>{o.value.dispose(),o.value=new Zo(s.value),l()}),Rt([t.width,t.height],()=>{o.value.setSize(t.width.value,t.height.value),l()},{immediate:!0}),Rt(()=>e.clearColor,l);const{pixelRatio:c}=tv(),{logError:u}=nh(),d=(()=>{const p=new Zo,g={shadowMap:{enabled:p.shadowMap.enabled,type:p.shadowMap.type},toneMapping:p.toneMapping,toneMappingExposure:p.toneMappingExposure,outputColorSpace:p.outputColorSpace};return p.dispose(),g})(),h=tt(e.renderMode);return h==="on-demand"&&r(),h==="manual"&&setTimeout(()=>{a()},100),Rs(()=>{const p=tt(e.preset);p&&(p in Dl||u(`Renderer Preset must be one of these: ${Object.keys(Dl).join(", ")}`),Gm(o.value,Dl[p])),DE(o.value,c.value,tt(e.dpr)),h==="always"&&(i.frames.value=Math.max(1,i.frames.value));const g=(f,_)=>{const y=tt(f),x=()=>{if(p)return Wm(Dl[p],_)};if(y!==void 0)return y;const A=x();return A!==void 0?A:Wm(d,_)},v=(f,_)=>TE(o.value,_,g(f,_));v(e.shadows,"shadowMap.enabled"),v(e.toneMapping??Bs,"toneMapping"),v(e.shadowMapType,"shadowMap.type"),HE<150&&v(!e.useLegacyLights,"physicallyCorrectLights"),v(e.outputColorSpace,"outputColorSpace"),v(e.toneMappingExposure,"toneMappingExposure");const m=g(e.clearColor,"clearColor");m&&o.value.setClearColor(m?WE(m):new ge(0))}),Ir(()=>{o.value.dispose(),o.value.forceContextLoss()}),{renderer:o}}function XE(n,e,t=10){const i=tt(n)?cv():rv(Ke(()=>tt(e).parentElement)),r=Cs(Ih(i.width,t)),a=Cs(Ih(i.height,t)),s=Ke(()=>r.value/a.value);return{height:a,width:r,aspectRatio:s}}const qE=(n,e)=>{const t=Ke(()=>e.renderer.value.domElement),i=ei([]),{x:r,y:a}=lv({target:t});let s=0;const{width:o,height:l,top:c,left:u}=iv(t),d=({x:K,y:Te})=>{if(t.value)return{x:(K-u.value)/o.value*2-1,y:-((Te-c.value)/l.value)*2+1}},h=({x:K,y:Te})=>{if(e.camera.value)return e.raycaster.value.setFromCamera(new J(K,Te),e.camera.value),i.value=e.raycaster.value.intersectObjects(n.value,!0),i.value},p=K=>{const Te=d({x:K?.clientX??r.value,y:K?.clientY??a.value});return Te?h(Te)||[]:[]},g=hi(),v=hi(),m=hi(),f=hi(),_=hi(),y=hi(),x=hi(),A=hi();function E(K){const Te={};for(const We in K)typeof We!="function"&&(Te[We]=K[We]);return Te}const S=(K,Te)=>{var We,j,ie;const Q=E(Te),se=new P(Te?.clientX,Te?.clientY,0).unproject((We=e.camera)==null?void 0:We.value);K.trigger({...Q,intersections:i.value,unprojectedPoint:se,ray:(j=e.raycaster)==null?void 0:j.value.ray,camera:(ie=e.camera)==null?void 0:ie.value,sourceEvent:Te,delta:s,stopPropagating:!1})};let R;const w=K=>{p(K),S(m,K),R=K},M=()=>{R&&w(R)};let I,N,F;const B=K=>{var Te;I=(Te=i.value[0])==null?void 0:Te.object,s=0,N=new J(K?.clientX??r.value,K?.clientY??a.value),S(_,K)};let H,G=!1;const q=K=>{var Te,We,j;K instanceof PointerEvent&&(i.value.length===0&&S(y,K),I===((Te=i.value[0])==null?void 0:Te.object)&&(F=new J(K?.clientX??r.value,K?.clientY??a.value),s=N?.distanceTo(F),K.button===0?(S(g,K),H===((We=i.value[0])==null?void 0:We.object)?G=!0:(H=(j=i.value[0])==null?void 0:j.object,G=!1)):K.button===2&&S(x,K)),S(f,K))},W=K=>{G&&(S(v,K),H=void 0,G=!1)},ae=K=>S(m,K),ve=K=>S(A,K);return t.value.addEventListener("pointerup",q),t.value.addEventListener("pointerdown",B),t.value.addEventListener("pointermove",w),t.value.addEventListener("pointerleave",ae),t.value.addEventListener("dblclick",W),t.value.addEventListener("wheel",ve),Ir(()=>{t!=null&&t.value&&(t.value.removeEventListener("pointerup",q),t.value.removeEventListener("pointerdown",B),t.value.removeEventListener("pointermove",w),t.value.removeEventListener("pointerleave",ae),t.value.removeEventListener("dblclick",W),t.value.removeEventListener("wheel",ve))}),{intersects:i,onClick:K=>g.on(K).off,onDblClick:K=>v.on(K).off,onContextMenu:K=>x.on(K).off,onPointerMove:K=>m.on(K).off,onPointerUp:K=>f.on(K).off,onPointerDown:K=>_.on(K).off,onPointerMissed:K=>y.on(K).off,onWheel:K=>A.on(K).off,forceUpdate:M}};function ch(n,e){if(Array.isArray(n))for(const t of n)t(e);typeof n=="function"&&n(e)}function YE(n,e,t){var i;const r=ei(),a=ei();n&&(r.value=n),e&&(a.value=e);const s=w=>{var M;return((M=w.__tres)==null?void 0:M.eventCount)>0},o=w=>{var M;return((M=w.children)==null?void 0:M.some(I=>o(I)))||s(w)},l=ei(((i=r.value)==null?void 0:i.children).filter(o)||[]);function c(w,M){const I=[],N=()=>M.stopPropagating=!0;M.stopPropagation=N;for(const F of M?.intersections){if(M.stopPropagating)return;M={...M,...F};const{object:B}=F;M.eventObject=B,ch(B[w],M),I.push(B);let H=B.parent;for(;H!==null&&!M.stopPropagating&&!I.includes(H);)M.eventObject=H,ch(H[w],M),I.push(H),H=H.parent;const G=SE(w.slice(2));t(G,{intersection:F,event:M})}}const{onClick:u,onDblClick:d,onContextMenu:h,onPointerMove:p,onPointerDown:g,onPointerUp:v,onPointerMissed:m,onWheel:f,forceUpdate:_}=qE(l,e);v(w=>c("onPointerUp",w)),g(w=>c("onPointerDown",w)),u(w=>c("onClick",w)),d(w=>c("onDoubleClick",w)),h(w=>c("onContextMenu",w)),f(w=>c("onWheel",w));let y=[];p(w=>{const M=w.intersections.map(({object:N})=>N),I=w.intersections;y.forEach(({object:N})=>{M.includes(N)||(w.intersections=y,c("onPointerLeave",w),c("onPointerOut",w))}),w.intersections=I,w.intersections.forEach(({object:N})=>{y.includes(N)||(c("onPointerEnter",w),c("onPointerOver",w))}),c("onPointerMove",w),y=w.intersections});const x=[];m(w=>{const M=()=>w.stopPropagating=!0;w.stopPropagation=M,x.forEach(I=>{w.stopPropagating||(w.eventObject=I,ch(I.onPointerMissed,w))}),t("pointer-missed",{event:w})});function A(w){Ll(w)&&Tr(w)&&l.value.push(w)}function E(w){if(Ll(w)&&Tr(w)){const M=l.value.indexOf(w);M>-1&&l.value.splice(M,1)}}function S(w){Ll(w)&&Tr(w)&&w.onPointerMissed&&x.push(w)}function R(w){if(Ll(w)&&Tr(w)){const M=x.indexOf(w);M>-1&&x.splice(M,1)}}return e.eventManager={forceUpdate:_,registerObject:A,deregisterObject:E,registerPointerMissedObject:S,deregisterPointerMissedObject:R},{forceUpdate:_,registerObject:A,deregisterObject:E,registerPointerMissedObject:S,deregisterPointerMissedObject:R}}function ZE(n,e,t=100){t=t<=0?100:t;const i=hi(),r=new Set;let a=!1,s=!1,o=null;function l(){o&&clearTimeout(o),!s&&!a&&n()?(i.trigger(e),r.forEach(d=>d()),r.clear(),a=!0):!s&&!a&&(o=setTimeout(l,t))}function c(){s=!0,o&&clearTimeout(o)}l();const u=(d,...h)=>{d(...h)};return{on:d=>{if(a)return u(d,e),{off:()=>{}};{const h=i.on(d);return r.add(h.off),i.on(d)}},off:i.off,trigger:i.trigger,cancel:c}}const uh=new WeakMap;function JE(n){if(n=n||Qm(),uh.has(n))return uh.get(n);const e=100,t=Date.now(),i=ZE(()=>{if(Date.now()-t>=e)return!0;{const r=n.renderer.value,a=r?.domElement||{width:0,height:0};return!!(r&&a.width>0&&a.height>0)}},n);return uh.set(n,i),i}function KE({scene:n,canvas:e,windowSize:t,rendererOptions:i,emit:r}){const a=ei(n),s=XE(t,e),{camera:o,cameras:l,registerCamera:c,deregisterCamera:u,setCameraActive:d}=OE({sizes:s,scene:n}),h={mode:ye(i.renderMode||"always"),priority:ye(0),frames:ye(0),maxFrames:60,canBeInvalidated:Ke(()=>h.mode.value==="on-demand"&&h.frames.value===0)};function p(F=1){i.renderMode==="on-demand"&&(h.frames.value=Math.min(h.maxFrames,h.frames.value+F))}function g(){i.renderMode==="manual"&&(h.frames.value=1)}const{renderer:v}=jE({scene:n,canvas:e,options:i,emit:r,contextParts:{sizes:s,camera:o,render:h,invalidate:p,advance:g}}),m={sizes:s,scene:a,camera:o,cameras:Cs(l),renderer:v,raycaster:ei(new Cm),controls:ye(null),perf:{maxFrames:160,fps:{value:0,accumulator:[]},memory:{currentMem:0,allocatedMem:0,accumulator:[]}},render:h,advance:g,extend:sh,invalidate:p,registerCamera:c,setCameraActive:d,deregisterCamera:u,loop:VE()};Ls("useTres",m),m.scene.value.__tres={root:m},m.loop.register(()=>{o.value&&h.frames.value>0&&(v.value.render(n,o.value),r("render",m.renderer.value)),h.priority.value=0,h.mode.value==="always"?h.frames.value=1:h.frames.value=Math.max(0,h.frames.value-1)},"render");const{on:f,cancel:_}=JE(m);m.loop.setReady(!1),m.loop.start(),f(()=>{r("ready",m),m.loop.setReady(!0),YE(n,m,r)}),Ir(()=>{_(),m.loop.stop()});const y=100,x=nv({every:y}),{isSupported:A,memory:E}=sv({interval:y}),S=160;let R=performance.now();const w=({timestamp:F})=>{m.scene.value&&(m.perf.memory.allocatedMem=lh(m.scene.value)),F-R>=y&&(R=F,m.perf.fps.accumulator.push(x.value),m.perf.fps.accumulator.length>S&&m.perf.fps.accumulator.shift(),m.perf.fps.value=x.value,A.value&&E.value&&(m.perf.memory.accumulator.push(E.value.usedJSHeapSize/1024/1024),m.perf.memory.accumulator.length>S&&m.perf.memory.accumulator.shift(),m.perf.memory.currentMem=m.perf.memory.accumulator.reduce((B,H)=>B+H,0)/m.perf.memory.accumulator.length))};let M=0;const I=1,{pause:N}=lc(({delta:F})=>{window.__TRES__DEVTOOLS__&&(w({timestamp:performance.now()}),M+=F,M>=I&&(window.__TRES__DEVTOOLS__.cb(m),M=0))},{immediate:!0});return Ir(()=>{N()}),m}function Qm(){const n=Eh("useTres");if(!n)throw new Error("useTresContext must be used together with useTresContextProvider");return n}const eg=Qm,tg=hi(),ig=hi(),hh=hi(),fs=new bl;let Ul=0,Ol=0;const{pause:$E,resume:rg,isActive:QE}=lc(()=>{tg.trigger({delta:Ul,elapsed:Ol,clock:fs}),ig.trigger({delta:Ul,elapsed:Ol,clock:fs}),hh.trigger({delta:Ul,elapsed:Ol,clock:fs})},{immediate:!1});hh.on(()=>{Ul=fs.getDelta(),Ol=fs.getElapsedTime()});let ng=!1;const eT=()=>(ng||(ng=!0,rg()),{onBeforeLoop:tg.on,onLoop:ig.on,onAfterLoop:hh.on,pause:$E,resume:rg,isActive:QE});function tT(n,e={},t={}){let i=n;const r=o=>{i=o};let a=new Proxy({},{});const s={has(o,l){return l in e||l in i},get(o,l,c){return l in e?e[l](i):i[l]},set(o,l,c){return t[l]?t[l](c,i,a,r):i[l]=c,!0}};return a=new Proxy({},s),a}const{logError:ag}=nh(),sg=["onClick","onContextMenu","onPointerMove","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut","onDoubleClick","onPointerDown","onPointerUp","onPointerCancel","onPointerMissed","onLostPointerCapture","onWheel"],iT=n=>{const e=n.scene.value;function t(c,u,d,h){if(h||(h={}),h.args||(h.args=[]),c==="template"||ME(c))return null;let p=c.replace("Tres",""),g;if(c==="primitive"){(!lr(h.object)||Ts(h.object))&&ag("Tres primitives need an 'object' prop, whose value is an object or shallowRef<object>"),p=h.object.type;const v={};g=tT(h.object,{object:m=>m,isPrimitive:()=>!0,__tres:()=>v},{object:(m,f,_,y)=>{UE(m,_,y,{patchProp:a,remove:r,insert:i},n)},__tres:m=>{Object.assign(v,m)}})}else{const v=ah.value[p];v||ag(`${p} is not defined on the THREE namespace. Use extend to add it to the catalog.`),g=new v(...h.args)}return g?(g.isCamera&&(h!=null&&h.position||g.position.set(3,3,3),h!=null&&h.lookAt||g.lookAt(0,0,0)),g=vn(g,{...g.__tres,type:p,memoizedProps:h,eventCount:0,primitive:c==="primitive",attach:h.attach},n),g):null}function i(c,u){var d,h,p;if(!c)return;u=u||e;const g=c.__tres?c:vn(c,{},n),v=u.__tres?u:vn(u,{},n);c=aa(g),u=aa(v),c.__tres&&((d=c.__tres)==null?void 0:d.eventCount)>0&&((h=n.eventManager)==null||h.registerObject(c)),n.registerCamera(c),(p=n.eventManager)==null||p.registerPointerMissedObject(c),g.__tres.attach?IE(v,g,g.__tres.attach):Tr(c)&&Tr(v)&&(v.add(c),c.dispatchEvent({type:"added"})),g.__tres.parent=v,v.__tres.objects&&!v.__tres.objects.includes(g)&&v.__tres.objects.push(g)}function r(c,u){var d,h,p,g;if(!c)return;c!=null&&c.__tres&&((d=c.__tres)==null?void 0:d.eventCount)>0&&((h=n.eventManager)==null||h.deregisterObject(c)),u=ih(u)?"default":u;const v=(p=c.__tres)==null?void 0:p.dispose;ih(v)||(v===null?u=!1:u=v);const m=(g=c.__tres)==null?void 0:g.primitive,f=u==="default"?!m:!!u;if(c.__tres&&"objects"in c.__tres&&[...c.__tres.objects].forEach(_=>r(_,u)),f&&c.children&&[...c.children].forEach(_=>r(_,u)),Km(c,n),$m(c,n),f&&!yE(c)){if(gn(u))u(c);else if(gn(c.dispose))try{c.dispose()}catch{}}"__tres"in c&&delete c.__tres}function a(c,u,d,h){var p,g;if(!c)return;let v=c,m=u;if(c.__tres&&(c.__tres.memoizedProps[u]=h),u==="attach"){const x=((p=c.__tres)==null?void 0:p.parent)||c.parent;r(c),vn(c,{attach:h},n),x&&i(c,x);return}if(u==="dispose"){c.__tres||(c=vn(c,{},n)),c.__tres.dispose=h;return}if(Tr(c)&&m==="blocks-pointer-events"){h||h===""?c[m]=h:delete c[m];return}sg.includes(u)&&c.__tres&&(c.__tres.eventCount+=1);let f=Il(m),_=v?.[f];if(m==="args"){const x=c,A=d??[],E=h??[],S=((g=c.__tres)==null?void 0:g.type)||c.type;S&&A.length&&!AE(A,E)&&(v=Object.assign(x,new ah.value[S](...h)));return}if(v.type==="BufferGeometry"){if(m==="args")return;v.setAttribute(Il(m),new ot(...h));return}if(m.includes("-")&&_===void 0){const x=m.split("-");_=x.reduce((A,E)=>A[Il(E)],v),m=x.pop(),f=m,_!=null&&_.set||(v=x.reduce((A,E)=>A[Il(E)],v))}let y=h;if(y===""&&(y=!0),gn(_)){sg.includes(u)||(Pl(y)?c[f](...y):c[f](y)),f.startsWith("on")&&gn(y)&&(v[f]=y);return}!(_!=null&&_.set)&&!gn(_)?v[f]=y:_.constructor===y.constructor&&_!=null&&_.copy?_?.copy(y):Pl(y)?_.set(...y):!_.isColor&&_.setScalar?_.setScalar(y):_.set(y),Jm(c)}function s(c){var u;return((u=c?.__tres)==null?void 0:u.parent)||null}function o(c){const u=vn(new Qe,{type:"Comment"},n);return u.name=c,u}function l(c){var u;const d=s(c),h=((u=d?.__tres)==null?void 0:u.objects)||[],p=h.indexOf(c);return p<0||p>=h.length-1?null:h[p+1]}return{insert:i,remove:r,createElement:t,patchProp:a,parentNode:s,createText:()=>{},createComment:o,setText:()=>{},setElementText:()=>{},nextSibling:l,querySelector:()=>{},setScopeId:()=>{},cloneNode:()=>{},insertStaticContent:()=>{}}};function rT(){return og().__VUE_DEVTOOLS_GLOBAL_HOOK__}function og(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const nT=typeof Proxy=="function",aT="devtools-plugin:setup",sT="plugin:settings:set";let ms,dh;function oT(){var n;return ms!==void 0||(typeof window<"u"&&window.performance?(ms=!0,dh=window.performance):typeof globalThis<"u"&&!((n=globalThis.perf_hooks)===null||n===void 0)&&n.performance?(ms=!0,dh=globalThis.perf_hooks.performance):ms=!1),ms}function lT(){return oT()?dh.now():Date.now()}class cT{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const i={};if(e.settings)for(const s in e.settings){const o=e.settings[s];i[s]=o.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let a=Object.assign({},i);try{const s=localStorage.getItem(r),o=JSON.parse(s);Object.assign(a,o)}catch{}this.fallbacks={getSettings(){return a},setSettings(s){try{localStorage.setItem(r,JSON.stringify(s))}catch{}a=s},now(){return lT()}},t&&t.on(sT,(s,o)=>{s===this.plugin.id&&this.fallbacks.setSettings(o)}),this.proxiedOn=new Proxy({},{get:(s,o)=>this.target?this.target.on[o]:(...l)=>{this.onQueue.push({method:o,args:l})}}),this.proxiedTarget=new Proxy({},{get:(s,o)=>this.target?this.target[o]:o==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(o)?(...l)=>(this.targetQueue.push({method:o,args:l,resolve:()=>{}}),this.fallbacks[o](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:o,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function uT(n,e){const t=n,i=og(),r=rT(),a=nT&&t.enableEarlyProxy;if(r&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!a))r.emit(aT,n,e);else{const s=a?new cT(t,r):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:s}),s&&e(s.proxiedTarget)}}function hT(n,e){const t=`\u25B2 \u25A0 \u25CF${n}`;typeof lg=="function"?lg(t,e):console.log(t)}function lg(n,e){throw new Error(n+e)}const cg=n=>{const e={id:n.uuid,label:n.type,children:[],tags:[]};n.name!==""&&e.tags.push({label:n.name,textColor:5750629,backgroundColor:15793395});const t=lh(n);return t>0&&e.tags.push({label:`${GE(t)} KB`,textColor:15707189,backgroundColor:16775644,tooltip:"Memory usage"}),n.type.includes("Light")&&(vE(n)&&e.tags.push({label:`${n.intensity}`,textColor:9738662,backgroundColor:16316922,tooltip:"Intensity"}),e.tags.push({label:`#${new ge(n.color).getHexString()}`,textColor:9738662,backgroundColor:16316922,tooltip:"Color"})),n.type.includes("Camera")&&(e.tags.push({label:`${n.fov}\xB0`,textColor:9738662,backgroundColor:16316922,tooltip:"Field of view"}),e.tags.push({label:`x: ${Math.round(n.position.x)} y: ${Math.round(n.position.y)} z: ${Math.round(n.position.z)}`,textColor:9738662,backgroundColor:16316922,tooltip:"Position"})),e};function ug(n,e,t=""){n.children.forEach(i=>{if(i.type==="HightlightMesh"||t&&!i.type.includes(t)&&!i.name.includes(t))return;const r=cg(i);e.children.push(r),ug(i,r,t)})}const dT=[],gs="tres:inspector",pT=As({sceneGraph:null});function fT(n,e){uT({id:"dev.esm.tres",label:"TresJS \u{1FA90}",logo:"https://raw.githubusercontent.com/Tresjs/tres/main/public/favicon.svg",packageName:"tresjs",homepage:"https://tresjs.org",componentStateTypes:dT,app:n},t=>{typeof t.now!="function"&&hT("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),t.addInspector({id:gs,label:"TresJS \u{1FA90}",icon:"account_tree",treeFilterPlaceholder:"Search instances"}),setInterval(()=>{t.sendInspectorTree(gs)},1e3),setInterval(()=>{t.notifyComponentUpdate()},5e3),t.on.getInspectorTree(a=>{if(a.inspectorId===gs){const s=cg(e.scene.value);ug(e.scene.value,s,a.filter),pT.sceneGraph=s,a.rootNodes=[s]}});let i=null,r=null;t.on.getInspectorState(a=>{var s;if(a.inspectorId===gs){const[o]=e.scene.value.getObjectsByProperty("uuid",a.nodeId);if(!o)return;if(r&&i&&i.parent&&r.remove(i),o.isMesh){const l=RE(o);o.add(l),i=l,r=o}a.state={object:Object.entries(o).map(([l,c])=>l==="children"?{key:l,value:c.filter(u=>u.type!=="HightlightMesh")}:{key:l,value:c,editable:!0}).filter(({key:l})=>l!=="parent")},o.isScene&&(a.state.info={objects:o.children.length,memory:lh(o),calls:e.renderer.value.info.render.calls,triangles:e.renderer.value.info.render.triangles,points:e.renderer.value.info.render.points,lines:e.renderer.value.info.render.lines},a.state.programs=((s=e.renderer.value.info.programs)==null?void 0:s.map(l=>({key:l.name,value:{...l,vertexShader:l.vertexShader,attributes:l.getAttributes(),uniforms:l.getUniforms()}})))||[])}}),t.on.editInspectorState(a=>{a.inspectorId===gs&&CE(e.scene.value,a.nodeId,a.path,a.state.value)})})}const mT=["data-scene","data-tres"],gT=Dr({__name:"TresCanvas",props:{shadows:{type:Boolean,default:void 0},clearColor:{},toneMapping:{},shadowMapType:{},useLegacyLights:{type:Boolean,default:void 0},outputColorSpace:{},toneMappingExposure:{},renderMode:{default:"always"},dpr:{},camera:{},preset:{},windowSize:{type:Boolean,default:void 0},enableProvideBridge:{type:Boolean,default:!0},context:{},precision:{},alpha:{type:Boolean,default:void 0},premultipliedAlpha:{type:Boolean},antialias:{type:Boolean,default:void 0},stencil:{type:Boolean,default:void 0},preserveDrawingBuffer:{type:Boolean,default:void 0},powerPreference:{},depth:{type:Boolean,default:void 0},logarithmicDepthBuffer:{type:Boolean,default:void 0},failIfMajorPerformanceCaveat:{type:Boolean,default:void 0}},emits:["render","click","double-click","context-menu","pointer-move","pointer-up","pointer-down","pointer-enter","pointer-leave","pointer-over","pointer-out","pointer-missed","wheel","ready"],setup(n,{expose:e,emit:t}){const i=n,r=t,a=Lg(),{logWarning:s}=nh(),o=ye(),l=ei(new Jo),c=Ci();sh(HS);const u=(v,m=!1)=>Dr({setup(){var f;const _=(f=Ci())==null?void 0:f.appContext;_&&(_.app=c?.appContext.app);const y={};function x(A){A&&(A.parent&&x(A.parent),A.provides&&Object.assign(y,A.provides))}return c!=null&&c.parent&&i.enableProvideBridge&&(x(c.parent),Object.entries(y).forEach(([A,E])=>{Ls(A,E)})),Ls("useTres",v),Ls("extend",sh),typeof window<"u"&&fT(_?.app,v),()=>ci(Ri,null,m?[]:a.default())}}),d=(v,m=!1)=>{const f=u(v,m),{render:_}=Ig(iT(v));_(ci(f),l.value)},h=(v,m=!1)=>{qm(v.scene.value),m&&(v.renderer.value.dispose(),v.renderer.value.renderLists.dispose(),v.renderer.value.forceContextLoss()),l.value.__tres={root:v}},p=ei(null);e({context:p,dispose:()=>h(p.value,!0)});const g=()=>{h(p.value),d(p.value,!0)};return gi(()=>{const v=o;p.value=KE({scene:l.value,canvas:v,windowSize:i.windowSize??!1,rendererOptions:i,emit:r});const{registerCamera:m,camera:f,cameras:_,deregisterCamera:y}=p.value;d(p.value);const x=()=>{const A=new Et(45,window.innerWidth/window.innerHeight,.1,1e3);A.position.set(3,3,3),A.lookAt(0,0,0),m(A);const E=Rs(()=>{_.value.length>=2&&(A.removeFromParent(),y(A),E?.())})};Rt(()=>i.camera,(A,E)=>{A&&m(A),E&&(E.removeFromParent(),y(E))},{immediate:!0}),f.value||(s("No camera found. Creating a default perspective camera. To have full control over a camera, please add one to the scene."),x())}),Ir(g),(v,m)=>(ke(),Ye("canvas",{ref_key:"canvas",ref:o,"data-scene":l.value.uuid,class:ui(v.$attrs.class),"data-tres":`tresjs ${Lr(dE).version}`,style:ca({display:"block",width:"100%",height:"100%",position:v.windowSize?"fixed":"relative",top:0,left:0,pointerEvents:"auto",touchAction:"none",...v.$attrs.style})},null,14,mT))}}),vT=Dr({__name:"ManualFPS",setup(n,{expose:e}){e(),gi(async()=>{const{advance:i}=eg();setInterval(i,1e3/60)});const t={onMounted:gi,get useTres(){return eg}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),_T=la(vT,[["__file","ManualFPS.vue"]]);var yT=`uniform float time;
varying vec2 vUv;
varying vec4 vColor;

void main() {
  gl_FragColor = vColor;
}`,xT=`varying vec4 vColor;
varying vec2 vUv;
uniform float time;
uniform float noiseStrength;
uniform vec4 colors[5];
uniform float brightness;

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  
  
  
  
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; 
  vec3 x3 = x0 - D.yyy;      

  i = mod289(i);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857; 
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);    

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  
  
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {

  float tilt = -0.8 * uv.y;

  float noise = snoise(vec3(uv.x * 2.75 + time * 0.2, uv.y * 8.0, time * 0.2)) * 7.0;

  noise = noise * noiseStrength;

  vec3 pos = vec3(position.x, position.y, position.z);
  pos.z = pos.z + noise * 0.1 + tilt;
  pos.z -= 0.1;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  vColor = colors[0];

  for(int i = 1; i < 5; i++) {
    float noiseFlow = (1.0 + float(i) * 0.5) * 0.05;
    float noiseSpeed = (2.0 + float(i) * 0.3) * 0.05;
    float noiseSeed = (1.0 + float(i) * 10.0) * 0.05;

    float noiseFloor = 0.1;
    float noiseCeil = 0.6 + float(i) * 0.07;

    float noise = smoothstep(noiseFloor, noiseCeil, snoise(vec3(uv.x * 3.0 + time * noiseFlow, uv.y * 3.0, time * noiseSpeed + noiseSeed)));

    vColor = mix(vColor, colors[i], noise);

    vec4 _ = vColor;
    vColor = mix(vColor, vec4(2.0 / 255.0, 2.0 / 255.0, 15.0 / 255.0, 1.0), map(pos.z, -1.0, 1.0, 0.2, 1.5)) * brightness;
    
  }

  vUv = uv;
}`,wT=`precision mediump float;
uniform float time;
uniform float brightness;

varying vec4 vColors[5];
varying vec2 vUv;

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  
  
  
  
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; 
  vec3 x3 = x0 - D.yyy;      

  i = mod289(i);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857; 
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);    

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  
  
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {

  vec4 color = vColors[0];

  for(int i = 1; i < 5; i++) {
    float noiseFlow = (1.0 + float(i) * 0.5) * 0.05;
    float noiseSpeed = (2.0 + float(i) * 0.3) * 0.05;
    float noiseSeed = (1.0 + float(i) * 10.0) * 0.05;

    float noiseFloor = 0.1;
    float noiseCeil = 0.6;

    float noise = smoothstep(noiseFloor, noiseCeil, snoise(vec3(vUv.x * 5.0, vUv.y * 0.5, time * noiseSpeed + noiseSeed)));

    color = mix(color, vColors[i], noise);

    color.a = 1.0 - smoothstep(0.65, 0.85, vUv.y + snoise(vec3((vUv.x + (time * 0.01)) * 5.0, 0.0, 0.0)) * 0.025);
    color.a = mix(0.0, color.a, smoothstep(0.0, 1.0, time));

    
  }

  
  gl_FragColor = color * brightness;
}`,MT=`varying vec2 vUv;
varying vec3 pos;
uniform vec4 colors[5];
varying vec4 vColors[5];

void main() {
  vUv = uv;
  pos = position;
  vColors = colors;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;const bT=Dr({__name:"FancyWaves",props:{speed:{type:Number,default:1,required:!0},noiseStrength:{type:Number,default:1,required:!0},colors:{type:Array,required:!0},brightness:{type:Number,default:1,required:!0}},setup(n,{expose:e}){e();const{onLoop:t}=eT(),i=n,r=new Ar(250,75,1,1),a=new dt(r),s=ei({colors:{value:[[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1]]},time:{value:0},brightness:{value:i.brightness}}),o=ei(null),l=ye(!1),c=new Ar(30,20,150,150),u=new dt(c),d=ei(null),h=ye([0,-3,2]);function p(){requestAnimationFrame(p),h.value=[0,-3,2+(3-window.scrollY/2500*3)]}p(),gi(()=>{setTimeout(()=>{console.log("Force updating glowMesh uniforms"),l.value=!0,o.value.material.needsUpdate=!0,o.value.material.uniformsNeedUpdate=!0},1e3)}),t(()=>{if(!d.value)return;Number.isFinite(d.value.material.uniforms.time.value)||(d.value.material.uniforms.time={value:0}),Number.isFinite(d.value.material.uniforms.noiseStrength.value)||(d.value.material.uniforms.noiseStrength={value:1});const m=[];for(let f=0;f<i.colors.length;f++){const _=i.colors[f];m.push(new nt(_.r,_.g,_.b,1))}d.value.material.uniforms.colors.value=m,d.value.material.uniforms.time.value+=.005*i.speed,d.value.material.uniforms.noiseStrength.value=i.noiseStrength,d.value.material.uniforms.brightness.value=i.brightness,o.value&&(o.value.material.uniforms.time.value+=.005*i.speed,o.value.material.uniforms.colors.value=m,o.value.material.uniforms.brightness.value=i.brightness)});const g=ei({time:{value:0},noiseStrength:{value:1},colors:{value:[[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1]]},brightness:{value:i.brightness}}),v={onLoop:t,props:i,glowGeometry:r,_glowMesh:a,glowMeshUniforms:s,glowMesh:o,showGlowMesh:l,geometry:c,_mesh:u,mesh:d,position:h,updateScroll:p,uniforms:g,get TresCanvas(){return gT},ManualFPS:_T,get wavesFragmentShader(){return yT},get wavesVertexShader(){return xT},get glowMeshFragmentShader(){return wT},get glowMeshVertexShader(){return MT}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}}),ST=["position"],ET=["object"],TT=["vertex-shader","fragment-shader","uniforms"],AT=["object"],CT=["uniforms","vertex-shader","fragment-shader"];function RT(n,e,t,i,r,a){return ke(),wn(i.TresCanvas,{"window-size":"","render-mode":"manual",class:"tw-absolute tw-top-0 tw-bottom-0 tw-left-0 tw-right-0"},{default:Dt(()=>[et(i.ManualFPS),X("TresPerspectiveCamera",{position:i.position,rotation:[1.3,0,0]},null,8,ST),i.showGlowMesh?(ke(),Ye("primitive",{key:0,ref:"glowMesh",object:i._glowMesh,position:[0,50,-35],rotation:[1,0,0]},[X("TresShaderMaterial",{"vertex-shader":i.glowMeshVertexShader,"fragment-shader":i.glowMeshFragmentShader,uniforms:i.glowMeshUniforms},null,8,TT)],8,ET)):hr("",!0),X("primitive",{ref:"mesh",object:i._mesh},[X("TresShaderMaterial",{uniforms:i.uniforms,"vertex-shader":i.wavesVertexShader,"fragment-shader":i.wavesFragmentShader},null,8,CT)],8,AT)]),_:1})}const PT=la(bT,[["render",RT],["__file","FancyWaves.vue"]]),LT=Dr({__name:"ColorDisplay",props:{color:{type:Object,required:!0}},setup(n,{expose:e}){e();const t=n;function i(s,o,l){const c=Math.round(s*255).toString(16).padStart(2,"0"),u=Math.round(o*255).toString(16).padStart(2,"0"),d=Math.round(l*255).toString(16).padStart(2,"0");return`#${c}${u}${d}`}const r=Ke(()=>i(t.color.r,t.color.g,t.color.b)),a={props:t,normalizedRgbToHex:i,hexColor:r};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),IT={class:"tw-flex tw-flex-col tw-items-center"};function NT(n,e,t,i,r,a){return ke(),Ye("div",IT,[X("div",{class:"tw-rounded-md tw-h-6 tw-w-full",style:ca("background-color: "+i.hexColor+";")},null,4),Qt(" "+ft(i.hexColor),1)])}const DT=la(LT,[["render",NT],["__file","ColorDisplay.vue"]]),ph=[{name:"Curator - LLM Powered Horror Game",description:"Curator is an innovative horror game that leverages large language models (LLMs) to generate dynamic ghost behaviors and dialogue in real-time.<br><br>The player must decipher the type of ghost they are dealing with by observing its interactions and effects on the environment. Ghosts are able to manipulate both the environment and the player in unpredictable ways. The game integrates natural language processing to create immersive, intelligent, and emergent gameplay.<br><br>This project explored the viability of generative AI within a gaming context, particularly for creating responsive non-playable characters (NPCs). The LLM was integrated via external APIs (OpenAI, OpenRouter).",main_discipline:{name:"Artificial Intelligence",icon:"fas fa-robot"},disciplines:[{name:"Artificial Intelligence",icon:"fas fa-robot"},{name:"Natural Language Processing",icon:"fas fa-language"},{name:"Game Development",icon:"fas fa-gamepad"},{name:"Procedural Generation",icon:"fas fa-random"},{name:"External API Integration",icon:"fas fa-plug"}],technologies:[{name:"Godot Engine",icon:"fas fa-cube"},{name:"OpenAI API",icon:"fas fa-cloud"},{name:"OpenRouter",icon:"fas fa-network-wired"},{name:"Natural Language Processing",icon:"fas fa-language"}],images:["/curator/screenshot1.png","/curator/screenshot2.png","/curator/screenshot3.png","/curator/screenshot4.png","/curator/screenshot5.png","/curator/curator.mp4"]},{name:"Doctor Who - 2023 Title Sequence Recreation",description:"Recreated the 2023 Doctor Who Specials Title Sequence using After Effects, Premiere Pro for VFX, compositing, editing, and color grading.<br><br>EmberGen was used for smoke simulations, and Blender's Eevee engine was utilized for 3D rendering.",main_discipline:{name:"Visual Effects and Compositing",icon:"fas fa-paint-brush"},disciplines:[{name:"Visual Effects",icon:"fas fa-film"},{name:"Compositing",icon:"fas fa-layer-group"},{name:"3D Rendering",icon:"fas fa-cube"},{name:"Color Grading",icon:"fas fa-adjust"},{name:"Smoke Simulation",icon:"fas fa-cloud"}],technologies:[{name:"Adobe After Effects",icon:"fas fa-video"},{name:"Adobe Premiere Pro",icon:"fas fa-video"},{name:"Blender",icon:"fas fa-cube"},{name:"EmberGen",icon:"fas fa-cloud"}],images:["/dw2023/4.png","/dw2023/1.png","/dw2023/2.png","/dw2023/3.png","/dw2023/movie.mp4"]},{name:"Star Trek: Enterprise Warp Out Recreation",description:"Recreated the iconic 'Enterprise Warp Out' scene from the JJ Abrams Star Trek films.<br><br>Blender\u2019s Eevee engine was used for 3D rendering, while Adobe After Effects was utilized for compositing and further tweaking the visual effects. Premiere Pro handled the final edit and color grading.",main_discipline:{name:"Visual Effects and Compositing",icon:"fas fa-paint-brush"},disciplines:[{name:"Visual Effects",icon:"fas fa-film"},{name:"Compositing",icon:"fas fa-layer-group"},{name:"3D Rendering",icon:"fas fa-cube"},{name:"Color Grading",icon:"fas fa-adjust"}],technologies:[{name:"Blender",icon:"fas fa-cube"},{name:"Adobe After Effects",icon:"fas fa-video"},{name:"Adobe Premiere Pro",icon:"fas fa-video"}],images:["/enterprise/1.png","/enterprise/2.png","/enterprise/3.png","/enterprise/4.png","/enterprise/5.png","/enterprise/6.png","/enterprise/enterprise.mp4"]},{images:["/tracvac/insight.png"],name:"Tracvac - Vaccine Tracking Application",description:"Developed during the pandemic, Tracvac tracked vaccines, user occupation, and post-vaccine health reports.<br><br>LGUs received consolidated health data with graphs and analytics to monitor public health. The app also enabled LGUs to send push notifications for schedules, alerts, and updates. It featured a plugin system allowing LGUs to extend functionality, such as adding custom user fields.<br><br>Built using Vue, Quasar for the frontend, Node.js, Express, and PostgreSQL for the backend.",main_discipline:{name:"Health Technology",icon:"fas fa-heartbeat"},disciplines:[{name:"Health Technology",icon:"fas fa-heartbeat"},{name:"Data Analytics",icon:"fas fa-chart-bar"},{name:"Mobile Notifications",icon:"fas fa-bell"},{name:"Backend Development",icon:"fas fa-server"},{name:"Frontend Development",icon:"fas fa-code"},{name:"Plugin Architecture",icon:"fas fa-plug"}],technologies:[{name:"Vue.js",icon:"fab fa-vuejs"},{name:"Quasar",icon:"fab fa-vuejs"},{name:"Node.js",icon:"fab fa-node-js"},{name:"Express.js",icon:"fas fa-server"},{name:"PostgreSQL",icon:"fas fa-database"},{name:"Push Notifications",icon:"fas fa-bell"}]},{name:"Dysglopia Marketplace - NFT Marketplace",description:"A demo marketplace for the NFT game 'Dysglopia'.<br><br>The marketplace allows users to filter NFTs by attributes such as type, eye shape, and rating. Built using Quasar (Vue), Vue, and Tailwind for a sleek, modern design.",main_discipline:{name:"Frontend Development",icon:"fas fa-code"},disciplines:[{name:"Frontend Development",icon:"fas fa-code"},{name:"UI/UX Design",icon:"fas fa-paint-brush"},{name:"Blockchain Integration",icon:"fas fa-lock"}],technologies:[{name:"Quasar",icon:"fab fa-vuejs"},{name:"Vue.js",icon:"fab fa-vuejs"},{name:"Tailwind CSS",icon:"fab fa-css3-alt"}],images:["/dysglopia/1.png","/dysglopia/2.png"]},{name:"Receipts - Group Expenses Tracker",images:["/receipts/1.png","/receipts/2.png","/receipts/3.png","/receipts/receipts.mp4"],description:"A homebrew group expenses tracker that allows friends to list how much each person spent and how much they owe or are owed.<br><br>Users can add receipts, and view a summary of how much money they gain or lose, taking into account money to pay or receive from others. Built using Vue, Quasar, and Firebase for the realtime updates.",main_discipline:{name:"Full Stack Development",icon:"fas fa-code"},disciplines:[{name:"Realtime Updates",icon:"fas fa-sync"},{name:"Firebase",icon:"fas fa-database"},{name:"Frontend Development",icon:"fas fa-code"}],technologies:[{name:"Vue.js",icon:"fab fa-vuejs"},{name:"Quasar",icon:"fab fa-vuejs"},{name:"Firebase Firestore",icon:"fas fa-database"}]},{name:"Dysglopia The Game",description:"An accessible real-time battle game featuring dynamic and fast-paced combat with you and an enemy's 'gloops.'.<br><br>Players compete to defeat all of their opponent\u2019s gloops in reflex-driven, high-octane gameplay. Built using Unity and C#.",main_discipline:{name:"Game Development",icon:"fas fa-gamepad"},disciplines:[{name:"Game Development",icon:"fas fa-gamepad"},{name:"Real-time Battle Systems",icon:"fas fa-bolt"},{name:"Reflex-based Gameplay",icon:"fas fa-stopwatch"}],technologies:[{name:"Unity",icon:"fas fa-cubes"},{name:"C#",icon:"fas fa-code"}],images:["/dysglopiagame/1.png","/dysglopiagame/2.png","/dysglopiagame/gameplay.mp4"]},{name:"Bilibenta - E-commerce Platform",description:"A mock e-commerce platform designed for farmers to deliver products directly to buyers. Focused on UI/UX design with a seamless experience for browsing and purchasing items such as rice, wheat, and meat.<br><br>Implemented using Quasar (Vue), Vue, Tailwind, and TanStack Query.",main_discipline:{name:"UI/UX Design",icon:"fas fa-paint-brush"},disciplines:[{name:"UI/UX Design",icon:"fas fa-paint-brush"},{name:"Frontend Development",icon:"fas fa-code"},{name:"E-commerce",icon:"fas fa-shopping-cart"}],technologies:[{name:"Quasar",icon:"fab fa-vuejs"},{name:"Vue.js",icon:"fab fa-vuejs"},{name:"Tailwind CSS",icon:"fab fa-css3-alt"},{name:"TanStack Query",icon:"fas fa-database"}],images:["/bilibenta/1.png","/bilibenta/bilibenta.mp4"]},{name:"Endeavor - Alternative Moodle Frontend",description:"Developed as a solution to address the limitations of a school's Moodle LMS during the pandemic.<br><br>Includes a unified reminders system, searchable databases, an improved grade display, and theming support. Built using Vue and Electron.",main_discipline:{name:"Educational Technology",icon:"fas fa-graduation-cap"},disciplines:[{name:"Educational Technology",icon:"fas fa-graduation-cap"},{name:"Frontend Development",icon:"fas fa-code"},{name:"UI/UX Design",icon:"fas fa-paint-brush"},{name:"Electron App Development",icon:"fas fa-desktop"}],technologies:[{name:"Vue.js",icon:"fab fa-vuejs"},{name:"Electron",icon:"fas fa-desktop"}],images:["/endeavor/1.png","/endeavor/endeavor.mp4"]}],Vi=new AudioContext;(async()=>{try{console.log("Starting AudioContext..."),await Vi.resume(),console.log("AudioContext resumed successfully")}catch(n){console.error("Could not resume AudioContext: ",n)}})();const UT=()=>{const n=Vi.createGain();n.connect(Vi.destination);const e=ye(!1);n.gain.value=.6;const t=()=>{e.value=!0,n.gain.setValueAtTime(.6,Vi.currentTime),n.gain.linearRampToValueAtTime(0,Vi.currentTime+.75),vi.set("muted",!0)},i=()=>{e.value=!1,n.gain.setValueAtTime(0,Vi.currentTime),n.gain.linearRampToValueAtTime(.6,Vi.currentTime+.75),vi.set("muted",!1)},r=()=>{e.value=!0,n.gain.setValueAtTime(0,Vi.currentTime),vi.set("muted",!0)},a=()=>{e.value=!1,n.gain.setValueAtTime(.6,Vi.currentTime),vi.set("muted",!1)};return vi.getItem("muted")&&r(),{gainNode:n,mute:t,unmute:i,muteImmediate:r,unmuteImmediate:a,muted:e,context:Vi}};class vs{stiffness;damping;mass;position;velocity;target;constructor(e=100,t=5,i=1){this.stiffness=e,this.damping=t,this.mass=i,this.position=0,this.velocity=0,this.target=0}update(e){const t=-this.stiffness*(this.position-this.target),i=-this.damping*this.velocity,r=(t+i)/this.mass;this.velocity+=r*e,this.position+=this.velocity*e}setTarget(e){this.target=e}reset(e=0,t=0){this.position=e,this.velocity=t}}class _s{stiffness;damping;mass;position;velocity;target;constructor(e=10,t=5,i=1){this.stiffness=e,this.damping=t,this.mass=i,this.position={r:0,g:0,b:0},this.velocity={r:0,g:0,b:0},this.target={r:0,g:0,b:0}}update(e){const t={r:-this.stiffness*(this.position.r-this.target.r),g:-this.stiffness*(this.position.g-this.target.g),b:-this.stiffness*(this.position.b-this.target.b)},i={r:-this.damping*this.velocity.r,g:-this.damping*this.velocity.g,b:-this.damping*this.velocity.b},r={r:(t.r+i.r)/this.mass,g:(t.g+i.g)/this.mass,b:(t.b+i.b)/this.mass};this.velocity.r+=r.r*e,this.velocity.g+=r.g*e,this.velocity.b+=r.b*e,this.position.r+=this.velocity.r*e,this.position.g+=this.velocity.g*e,this.position.b+=this.velocity.b*e}setTarget(e){this.target=e}reset(e={r:0,g:0,b:0},t={r:0,g:0,b:0}){this.position=e,this.velocity=t}}const OT=Dr({__name:"IndexPage",setup(n,{expose:e}){e();const t=ph.length,i=ph.slice(0,Math.ceil(t/2)),r=ph.slice(Math.ceil(t/2)),a=ye(!1),s=ye(100),o=UT(),l=ye(!1);gi(()=>{vi.has("showStatsForNerds")&&(l.value=!0)}),Rt(l,q=>{q?vi.set("showStatsForNerds",!0):vi.remove("showStatsForNerds")});const c=gv(o.context,o.gainNode),u=_v(o.context,o.gainNode),d=vv(u,o,c,{showStatsForNerds:l});let h=[];const p=ye(null);gi(()=>{const q=av(p);new MutationObserver(()=>{d.termBusy.value&&(q.y.value=999)}).observe(p.value,{attributes:!0,childList:!0,subtree:!0})}),gi(async()=>{for(;;){await new Promise(ae=>setTimeout(ae,2e3));const q=["sudo su","digital generalist","who am i?","yarn install","chmod 777 *","rm -rf /","use the buttons!"];h.length===q.length&&(h=[]);let W;for(;W=q[Math.floor(Math.random()*q.length)],!!h.includes(W););h.push(W),!d.termBusy.value&&await d.temporarilyChangeText(q[Math.floor(Math.random()*q.length)])}});const g=ye(0),v=ye(1),m=ye(1),f=ye([{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0}]),_=new _s,y=new _s,x=new _s,A=new _s,E=new _s,S=new vs(25,10,1),R=new vs(25,10,1),w=new vs(50,20,5),M=new vs(100,20,1),I=new vs(10,10,1);let N=1;setInterval(()=>{g.value=c.realtime.oneFourthBeatIndexInPattern,_.setTarget(c.realtime.colors[0]),y.setTarget(c.realtime.colors[1]),x.setTarget(c.realtime.colors[2]),A.setTarget(c.realtime.colors[3]),E.setTarget(c.realtime.colors[4]),S.setTarget(c.realtime.speedMult),o.muted.value?R.setTarget(.5):R.setTarget(c.realtime.noiseStrength),c.hasBeatAtIndex(c.realtime.oneFourthBeatIndexInPattern)&&!o.muted.value?(w.reset(.9),I.setTarget(1.17),M.setTarget(1.17)):(w.setTarget(0),o.muted.value?(I.setTarget(.85),M.setTarget(.85)):(I.setTarget(1),M.setTarget(1))),_.update(1/30),y.update(1/30),x.update(1/30),A.update(1/30),E.update(1/30),S.update(1/30),R.update(1/30),w.update(1/30),M.update(1/30),I.update(1/30),f.value=[_.position,y.position,x.position,A.position,E.position],o.muted.value?N=I.position:N=M.position,v.value=(.5+Math.pow(w.position,5))*S.position,m.value=(1+w.position,5*.25*R.position)},1/30*1e3);function F(){window.open("https://www.youtube.com/@filmicvisuals")}function B(){window.open("https://github.com/fractaal/")}function H(){window.open("https://soundcloud.com/filmic_seventh")}const G={numProjects:t,projectDataColumn1:i,projectDataColumn2:r,hideEverything:a,blinkerOpacity:s,volume:o,showStatsForNerds:l,music:c,term:u,termAnims:d,get textUsed(){return h},set textUsed(q){h=q},termScroll:p,currentBeatNumber:g,wavesSpeed:v,noiseStrength:m,actualColors:f,color1Spring:_,color2Spring:y,color3Spring:x,color4Spring:A,color5Spring:E,speedMultSpring:S,noiseStrengthSpring:R,beatSpring:w,brightnessSpring:M,slowBrightnessSpring:I,get brightness(){return N},set brightness(q){N=q},openYouTube:F,openGitHub:B,openSoundCloud:H,ProjectItem:D0,FancyWaves:PT,ColorDisplay:DT};return Object.defineProperty(G,"__isScriptSetup",{enumerable:!1,value:!0}),G}}),FT={class:"tw-flex-1 tw-fixed tw-p-8 tw-z-50"},BT={class:"tw-flex tw-gap-8 tw-px-8 tw-justify-between"},zT={class:"tw-absolute -tw-z-20"},kT={key:0,class:"lg:tw-w-4/6 tw-mx-auto tw-flex tw-items-center tw-justify-center"},VT={class:"tw-flex tw-flex-col xl:tw-grid tw-grid-cols-12"},GT={class:"xl:-tw-mt-8 tw-mt-8 tw-col-span-5 tw-flex-shrink tw-min-w-min tw-flex-grow-0 tw-mx-4 tw-bg-black/50 tw-backdrop-blur-2xl tw-rounded-xl tw-ring-white/20 tw-ring-[2px] tw-p-8 tw-pt-12 tw-font-mono tw-text-lg tw-relative tw-transition-all tw-duration-500 tw-ease-out-expo tw-min-h-[500px] tw-max-h-[500px] tw-flex tw-flex-col"},HT={class:"tw-flex tw-flex-col tw-overflow-y-auto",ref:"termScroll"},WT={key:0,class:"tw-my-4 tw-relative"},jT={class:"tw-font-semibold"},XT={key:1,class:"tw-relative"},qT={key:0,style:{"text-shadow":"0 0 50px rgba(0,0,0,0) !important"},class:"tw-absolute tw-ml-2"},YT={class:"tw-left-0 tw-right-0 tw-bottom-0 tw-flex tw-flex-wrap tw-gap-2 tw-max-h-fit"},ZT={key:1,class:"lg:tw-w-4/6 tw-mx-auto tw-ring-1 tw-ring-white/20 tw-mt-12 tw-font-mono tw-p-4 tw-rounded-xl tw-bg-black/80 tw-flex tw-flex-col"},JT={class:"tw-flex"},KT={class:"-tw-mt-2"},$T={class:"tw-flex tw-gap-1"},QT={class:"tw-flex tw-flex-col lg:tw-flex-row tw-justify-start tw-gap-8"},eA={class:"tw-flex-col"},tA={class:"tw-flex-col"},iA={class:"tw-flex tw-gap-1"},rA={class:"tw-flex-col"},nA={class:"tw-h-96 tw-mx-2 md:tw-mx-auto"},aA={class:"tw-w-full tw-grid md:tw-grid-cols-2"},sA={class:"tw-flex tw-flex-col xs:tw-flex-row tw-items-center tw-justify-center"},oA={class:"tw-flex tw-justify-center tw-my-4"},lA={href:"mailto:ben.jude.dev@gmail.com"},cA={class:"tw-flex tw-flex-col xs:tw-flex-row lg:tw-gap-8 tw-gap-4 tw-mt-4 tw-mx-auto tw-w-fit"},uA={class:"lg:tw-h-40 lg:tw-w-40 tw-h-28 tw-w-28 tw-rounded-3xl tw-bg-[#02020f] tw-p-4 tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-transparent tw-duration-300"},hA={class:"lg:tw-h-40 lg:tw-w-40 tw-h-28 tw-w-28 tw-rounded-3xl tw-bg-[#02020f] tw-p-4 tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-transparent tw-duration-300"},dA={class:"lg:tw-h-40 lg:tw-w-40 tw-h-28 tw-w-28 tw-rounded-3xl tw-bg-[#02020f] tw-p-4 tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-transparent tw-duration-300"},pA={key:0,class:"tw-flex tw-justify-center tw-items-center"},fA={key:1,class:"stay-for-moment-then-slide-right tw-flex tw-justify-center tw-items-center"};function mA(n,e,t,i,r,a){return ke(),wn(Dg,{class:""},{default:Dt(()=>[X("div",FT,[et(ur,{onClick:e[0]||(e[0]=s=>i.volume.muted.value?i.volume.unmute():i.volume.mute()),class:"tw-p-4 rounded-full",unelevated:""},{default:Dt(()=>[et(Nt,{name:i.volume.muted.value?"fa-solid fa-volume-mute":"fa-solid fa-volume-up"},null,8,["name"])]),_:1}),et(ur,{onClick:e[1]||(e[1]=s=>i.hideEverything=!i.hideEverything),class:"tw-p-4 rounded-full",unelevated:""},{default:Dt(()=>[et(Nt,{name:i.hideEverything?"fa-solid fa-eye-slash":"fa-solid fa-eye"},null,8,["name"])]),_:1})]),X("div",BT,[e[3]||(e[3]=X("div",{class:"tw-flex-1"},null,-1)),X("div",{class:ui(["tw-mt-4 tw-relative tw-flex tw-flex-col tw-flex-1 tw-text-center",i.hideEverything?"faint-after-show":""])},e[2]||(e[2]=[X("div",{class:"tw-font-black tw-text-md tw-ml-[3px] -tw-mb-2"}," Hey! My name's ",-1),X("div",{class:"tw-font-black tw-text-6xl tw-z-20",style:{"text-shadow":"0 0 50px rgba(0, 0, 0, 1)"}}," Ben Jude ",-1)]),2),e[4]||(e[4]=X("div",{class:"tw-flex-1"},null,-1))]),X("div",zT,[(ke(),wn(Ng,null,{default:Dt(()=>[et(i.FancyWaves,{colors:i.actualColors,speed:i.wavesSpeed,"noise-strength":i.noiseStrength,brightness:i.brightness},null,8,["colors","speed","noise-strength","brightness"])]),_:1}))]),i.hideEverything?(ke(),Ye("section",kT,e[5]||(e[5]=[X("div",{class:"tw-font-mono tw-text-2xl fade-after-show-delayed"}," Enjoy the show. ",-1)]))):hr("",!0),X("section",{class:ui(["lg:tw-w-4/6 tw-mx-auto",i.hideEverything?"faint-after-show":"restore-after-show"])},[X("div",VT,[e[15]||(e[15]=X("div",{class:"tw-flex-1 tw-col-span-7 tw-shrink-0 -tw-mt-8 tw-relative tw-h-[500px] tw-overflow-hidden lg:tw-rounded-3xl tw-w-full tw-mx-auto tw-shadow-2xl tw-shadow-black"},[X("div",{class:"tw-absolute tw-top-0 tw-left-0 tw-p-4 tw-flex tw-gap-2"},[X("div",{class:"tw-h-4 tw-w-4 tw-rounded-full tw-bg-red-400 tw-shadow-md tw-shadow-red-500/50"}),X("div",{class:"tw-h-4 tw-w-4 tw-rounded-full tw-bg-orange-400 tw-shadow-md tw-shadow-orange-500/50"}),X("div",{class:"tw-h-4 tw-w-4 tw-rounded-full tw-bg-green-400 tw-shadow-md tw-shadow-green-500/50"})]),X("video",{autoplay:"",loop:"",muted:"",src:"/vfx.mp4",style:{width:"100%",height:"100%"},class:"tw-object-cover"})],-1)),X("div",GT,[e[12]||(e[12]=X("div",{class:"tw-absolute tw-top-0 tw-bottom-0 tw-left-0 tw-right-0 tw-rounded-xl tw-overflow-hidden tw-opacity-30 tw-pointer-events-none"},[X("img",{src:"/frosted_glass_noise.png",style:{width:"100%",height:"100%"},class:"tw-object-cover tw-pointer-events-none -tw-z-10",alt:""})],-1)),e[13]||(e[13]=X("div",{class:"tw-absolute tw-top-0 tw-left-0 tw-p-4 tw-flex tw-gap-2"},[X("div",{class:"tw-h-4 tw-w-4 tw-rounded-full tw-bg-red-400 tw-shadow-md tw-shadow-red-500/50"}),X("div",{class:"tw-h-4 tw-w-4 tw-rounded-full tw-bg-orange-400 tw-shadow-md tw-shadow-orange-500/50"}),X("div",{class:"tw-h-4 tw-w-4 tw-rounded-full tw-bg-green-400 tw-shadow-md tw-shadow-green-500/50"})],-1)),X("div",HT,[(ke(!0),Ye(Ri,null,ji(i.term.lines.value,(s,o)=>(ke(),Ye("div",{key:s.content},[s.type==="prompt"?(ke(),Ye("div",WT,[e[6]||(e[6]=X("span",{class:"tw-font-semibold tw-opacity-75"},"benjude@sys: $ ",-1)),X("span",jT,ft(s.content),1),o===i.term.lines.value.length-1?(ke(),Ye("span",{key:0,style:ca({opacity:`${i.blinkerOpacity}%`,"text-shadow":"0 0 50px rgba(0,0,0,0) !important"}),class:"tw-absolute tw-ml-2"}," \u2588 ",4)):hr("",!0)])):(ke(),Ye("div",XT,[X("span",null,ft(s.content),1),o===i.term.lines.value.length-1?(ke(),Ye("span",qT," \u2588 ")):hr("",!0)]))]))),128))],512),e[14]||(e[14]=X("div",{class:"tw-flex-1 tw-min-h-4"},null,-1)),X("div",YT,[et(ur,{flat:"","no-caps":"",class:"tw-bg-white/5",onClick:i.termAnims.whoAreYouCommand,loading:i.termAnims.termBusy.value},{default:Dt(()=>e[7]||(e[7]=[Qt("Who are you?")])),_:1},8,["onClick","loading"]),et(ur,{flat:"","no-caps":"",class:"tw-bg-white/5",onClick:i.termAnims.clearCommand,loading:i.termAnims.termBusy.value},{default:Dt(()=>e[8]||(e[8]=[Qt("Clear terminal")])),_:1},8,["onClick","loading"]),et(ur,{flat:"","no-caps":"",class:"tw-bg-white/5",onClick:i.termAnims.toggleMusicTerm,loading:i.termAnims.termBusy.value},{default:Dt(()=>e[9]||(e[9]=[Qt("Toggle music")])),_:1},8,["onClick","loading"]),et(ur,{flat:"","no-caps":"",class:"tw-bg-white/5 tw-min-w-6",onClick:i.termAnims.rmRf,loading:i.termAnims.termBusy.value},{default:Dt(()=>e[10]||(e[10]=[Qt("Delete everything")])),_:1},8,["onClick","loading"]),et(ur,{flat:"","no-caps":"",class:"tw-bg-white/5 tw-min-w-6",onClick:i.termAnims.toggleStatsForNerds,loading:i.termAnims.termBusy.value},{default:Dt(()=>e[11]||(e[11]=[Qt("Show stats for nerds")])),_:1},8,["onClick","loading"])])])])],2),i.showStatsForNerds?(ke(),Ye("section",ZT,[X("span",JT,[et(Nt,{name:"fas fa-glasses",size:"md",class:"tw-mr-4"}),e[16]||(e[16]=X("h1",{class:"tw-text-2xl tw-font-medium"},"STATS FOR NERDS",-1))]),e[21]||(e[21]=X("h2",{class:"tw-text-md tw-tracking-wider -tw-mt-4"},"MUSIC VISUALIZATION",-1)),X("span",KT,[et(Nt,{name:"fas fa-warning"}),e[17]||(e[17]=Qt(" Keeping this open may cause performance issues."))]),e[22]||(e[22]=X("div",{class:"tw-mt-4"},null,-1)),e[23]||(e[23]=X("div",null,"Pattern Display",-1)),X("div",$T,[(ke(!0),Ye(Ri,null,ji(i.music.beatMap.value,(s,o)=>(ke(),Ye("div",{key:o,class:ui(["tw-relative tw-rounded-sm tw-h-8 tw-w-4",i.currentBeatNumber===o?i.music.beatMap.value[i.currentBeatNumber]?"tw-bg-purple-400":"tw-bg-purple-700":i.music.beatMap.value[o]?"tw-bg-white/25":"tw-bg-white/5"])},[X("div",{class:ui(["tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-rounded-sm",i.currentBeatNumber===o?i.music.beatMap.value[i.currentBeatNumber]?"tw-bg-purple-400 tw-animate-ping":"tw-bg-purple-700":i.music.beatMap.value[o]?"tw-bg-white/25":"tw-bg-white/5"])},null,2)],2))),128))]),e[24]||(e[24]=X("span",{class:"tw-min-h-8"},null,-1)),X("div",QT,[X("div",eA,[e[18]||(e[18]=X("b",null,"--- Beat ---",-1)),X("div",null,"Beat Index: "+ft(i.music.realtime.beatIndex),1),X("div",null,"1/4th Beat Index: "+ft(i.music.realtime.oneFourthBeatIndex),1),X("div",null," 1/4th Beat Index In Pattern: "+ft(i.music.realtime.oneFourthBeatIndexInPattern),1),X("div",null," Pattern Index: "+ft(i.music.realtime.patternIndex+1)+" / "+ft(i.music.realtime.numPatterns),1)]),X("div",tA,[e[19]||(e[19]=X("b",null,"--- Colors ---",-1)),X("div",iA,[(ke(!0),Ye(Ri,null,ji(i.music.realtime.colors,s=>(ke(),Ye("div",{key:s.r+s.g+s.b},[et(i.ColorDisplay,{color:s},null,8,["color"])]))),128))])]),X("div",rA,[e[20]||(e[20]=X("b",null,"--- Springs ---",-1)),X("div",null," Wave Speed Multiplier: "+ft(i.music.realtime.speedMult)+" - Display "+ft(i.speedMultSpring.position),1),X("div",null," Noise Strength: "+ft(i.music.realtime.noiseStrength)+" - Display "+ft(i.noiseStrengthSpring.position),1),X("div",null,"Beat Spring: "+ft(i.beatSpring.position),1),X("div",null,"Brightness Spring: "+ft(i.brightnessSpring.position),1),X("div",null,"Slow Brightness Spring: "+ft(i.slowBrightnessSpring.position),1)])])])):hr("",!0),X("section",{class:ui(["lg:tw-w-4/6 tw-mx-auto",i.hideEverything?"faint-after-show":"restore-after-show"])},[X("div",nA,[e[32]||(e[32]=X("div",{class:"tw-flex tw-items-center tw-gap-4"},null,-1)),e[33]||(e[33]=X("div",{class:"lg:tw-ml-0 tw-ml-4 tw-relative tw-font-mono tw-mx-auto tw-mt-8 tw-font-semibold tw-text-4xl tw-w-full"},[Qt(" > PROJECTS "),X("div",{class:"tw-h-[2px] tw-w-[2500px] tw-absolute -tw-left-[2510px] tw-top-[45%] tw-opacity-75 tw-bg-gradient-to-r tw-to-transparent tw-from-white"})],-1)),X("div",aA,[X("div",null,[(ke(!0),Ye(Ri,null,ji(i.projectDataColumn1,s=>(ke(),wn(i.ProjectItem,{key:s.name,project:s},null,8,["project"]))),128))]),X("div",null,[(ke(!0),Ye(Ri,null,ji(i.projectDataColumn2,s=>(ke(),wn(i.ProjectItem,{key:s.name,project:s},null,8,["project"]))),128))])]),e[34]||(e[34]=X("div",{class:"tw-flex tw-items-center tw-gap-2 tw-mt-8 tw-mx-auto tw-w-fit"},[X("div",{class:"tw-bg-gradient-to-r tw-from-transparent tw-via-fuchsia-500 tw-to-white tw-h-[1.5px] tw-rounded-full tw-w-24"}),X("div",{class:"tw-font-mono"},"FIND ME AT"),X("div",{class:"tw-bg-gradient-to-l tw-from-transparent tw-via-fuchsia-500 tw-to-white tw-h-[1.5px] tw-rounded-full tw-w-24"})],-1)),X("div",sA,[X("div",oA,[X("a",lA,[et(Nt,{name:"fa-solid fa-envelope",class:"tw-text-2xl tw-mr-2"}),e[25]||(e[25]=Qt(" ben.jude.dev@gmail.com "))])])]),X("div",cA,[X("div",{onClick:i.openYouTube,class:"tw-bg-gradient-to-tr tw-from-amber-600/25 tw-via-red-500 tw-to-fuchsia-500 tw-p-[1.5px] tw-rounded-3xl tw-shadow-fuchsia-700/25 hover:tw-shadow-fuchsia-700/75 tw-shadow-2xl tw-w-fit hover:tw-scale-110 hover:tw-cursor-pointer tw-transition-all tw-duration-300"},[X("div",uA,[et(Nt,{name:"fa-brands fa-youtube",class:"lg:tw-text-6xl tw-text-2xl"}),e[26]||(e[26]=X("div",{class:"lg:tw-text-xl tw-font-semibold"},"Filmic",-1)),e[27]||(e[27]=X("div",{class:"tw-text-xs tw-tracking-tighter tw-text-center"}," YouTube | VFX ",-1))])]),X("div",{onClick:i.openGitHub,class:"tw-bg-gradient-to-tr tw-to-teal-600/25 tw-via-emerald-500 tw-from-teal-500 tw-p-[1.5px] tw-rounded-3xl tw-shadow-teal-500/25 hover:tw-shadow-teal-700/75 tw-shadow-2xl tw-w-fit hover:tw-scale-110 hover:tw-cursor-pointer tw-transition-all tw-duration-300"},[X("div",hA,[et(Nt,{name:"fa-brands fa-github",class:"lg:tw-text-6xl tw-text-2xl"}),e[28]||(e[28]=X("div",{class:"lg:tw-text-xl tw-font-semibold"},"Fractal",-1)),e[29]||(e[29]=X("div",{class:"tw-text-xs tw-tracking-tighter tw-text-center"}," GitHub | Dev ",-1))])]),X("div",{onClick:i.openSoundCloud,class:"tw-bg-gradient-to-tl tw-from-fuchsia-600/25 tw-via-red-500 tw-to-amber-500 tw-p-[1.5px] tw-rounded-3xl tw-shadow-fuchsia-700/25 hover:tw-shadow-fuchsia-700/75 tw-shadow-2xl tw-w-fit hover:tw-scale-110 hover:tw-cursor-pointer tw-transition-all tw-duration-300"},[X("div",dA,[et(Nt,{name:"fa-brands fa-soundcloud",class:"lg:tw-text-6xl tw-text-2xl"}),e[30]||(e[30]=X("div",{class:"lg:tw-text-xl tw-font-semibold"},"Seventh",-1)),e[31]||(e[31]=X("div",{class:"tw-text-xs tw-tracking-tighter tw-text-center"}," SoundCloud | Music ",-1))])])]),e[35]||(e[35]=X("div",{class:"tw-h-32"},null,-1))])],2),et(Vg,{position:"bottom-right",offset:[50,50],class:"tw-text-lg"},{default:Dt(()=>[i.music.fetching.value?(ke(),Ye("div",pA,[et(gg,{size:"40px",class:"tw-mr-4"}),e[36]||(e[36]=Qt(" Loading some music... "))])):(ke(),Ye("div",fA,[et(Nt,{name:"fas fa-check",size:"40px",class:"tw-mr-4 tw-flex tw-items-center tw-justify-center"}),e[37]||(e[37]=Qt(" Loading music done! "))]))]),_:1})]),_:1})}const gA=la(OT,[["render",mA],["__file","IndexPage.vue"]]);export{gA as default};
