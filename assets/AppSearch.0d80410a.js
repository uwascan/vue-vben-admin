import{r as e,cl as a,cm as t,a0 as s,a1 as n,aU as o,e as r,bR as l,cn as i,bS as c,u as d,bu as p,b5 as u,N as f,co as h,bI as m,x as v,aC as C,d as b,aJ as x,aK as g,h as S,o as _,i as w,j as y,l as k,bw as $,K as E,bA as A,b2 as I,a3 as j,b8 as M,aL as N,aM as R,k as T,b4 as O,bN as D,b1 as U,m as K}from"./index.12192f00.js";/* empty css              */import{I as L}from"./index.1bbbabab.js";import{b as W,u as z,d as F}from"./useHeaderSetting.80bca2f2.js";import{u as H}from"./useScrollTo.0f57f985.js";import{C as P}from"./clickOutside.2a6abb69.js";import{S as B}from"./SearchOutlined.940caa2d.js";import"./vendor.3b1829c7.js";import"./EyeOutlined.8664505d.js";import"./animation.b2b1e4b8.js";import"./domUtils.75e9c3bf.js";import"./_stringToArray.2d6cff8f.js";const J=["keydown"],q={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},G={esc:"Escape",tab:"Tab",enter:"Enter",space:" ",up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete"]},Q={ctrl:e=>e.ctrlKey,shift:e=>e.shiftKey,alt:e=>e.altKey,meta:e=>e.metaKey};function V(e,a){if(!e.key)return!1;if(i(a))return e.keyCode===a;const t=a.split(".");let s=0;for(const n of t){const a=Q[n],t=G[n],o=q[n];(a&&a(e)||(t&&c(t)?t.includes(e.key):t===e.key)||(o&&c(o)?o.includes(e.keyCode):o===e.keyCode)||e.key.toUpperCase()===n.toUpperCase())&&s++}return s===t.length}function X(e,a=t,d={}){const{events:p=J,target:u}=d;let f;function h(t){if(function(e){return o(e)?e:l(e)||i(e)?a=>V(a,e):c(e)?a=>e.some((e=>V(a,e))):e?()=>!0:()=>!1}(e)(t))return a(t)}s((()=>{if(f=function(e,a){if(!e)return a;let t;t=o(e)?e():r(e);return t}(u,window),f)for(const e of p)f.addEventListener(e,h)})),n((()=>{if(f)for(const e of p)f.removeEventListener(e,h)}))}var Y,Z;function ee(a,t,s){const n=e([]),o=e(""),l=e(-1);let i=[];const{t:c}=d(),b=C(),[x]=p((function(e){null==e||e.stopPropagation();const a=e.target.value;if(o.value=a.trim(),!a)return void(n.value=[]);const t=function(e){const a=["",...[...e].map((e=>{return["$","(",")","*","+",".","[","]","?","\\","^","{","}","|"].includes(a=e)?`\\${a}`:a;var a})),""].join(".*");return new RegExp(a)}(r(o)),s=m(i,(e=>t.test(e.name)));n.value=g(s,t),l.value=0}),200);function g(e,a,t){const s=[];return e.forEach((e=>{const{name:n,path:o,icon:r,children:l}=e;a.test(n)&&!(null==l?void 0:l.length)&&s.push({name:(null==t?void 0:t.name)?`${t.name} > ${n}`:n,path:o,icon:r}),Array.isArray(l)&&l.length&&s.push(...g(l,a,e))})),s}function S(){const e=r(a);if(!e||!Array.isArray(e)||0===e.length||!r(t))return;const s=e[r(l)];if(!s)return;const n=r(t);if(!n)return;const o=s.offsetTop+s.offsetHeight,i=n.offsetHeight,{start:c}=H({el:n,duration:100,to:o-i});c()}async function _(){if(!n.value.length)return;const e=r(n),a=r(l);if(0===e.length||a<0)return;const t=e[a];w(),await v(),b(t.path)}function w(){n.value=[],s("close")}return u((async()=>{const e=await W();i=f(e),h(i,(e=>{e.name=c(e.name)}))})),X(["enter","up","down","esc"],(e=>{switch(e.keyCode){case 38:n.value.length&&(l.value--,l.value<0&&(l.value=n.value.length-1),S());break;case 40:n.value.length&&(l.value++,l.value>n.value.length-1&&(l.value=0),S());break;case 13:_();break;case 27:w()}})),{handleSearch:x,searchResult:n,keyword:o,activeIndex:l,handleMouseenter:function(e){const a=e.target.dataset.index;l.value=Number(a)},handleEnter:_}}(Z=Y||(Y={}))[Z.UP=38]="UP",Z[Z.DOWN=40]="DOWN",Z[Z.ENTER=13]="ENTER",Z[Z.ESC=27]="ESC";var ae=b({name:"AppSearchFooter",components:{Icon:x},setup(){const{prefixCls:e}=g("app-search-footer"),{t:a}=d();return{prefixCls:e,t:a}}});const te=$("data-v-249fdf6f")(((e,a,t,s,n,o)=>{const r=S("Icon");return _(),w("div",{class:`${e.prefixCls}`},[y("span",{class:`${e.prefixCls}__item`},[y(r,{icon:"ant-design:enter-outlined"})],2),y("span",null,k(e.t("component.app.toSearch")),1),y("span",{class:`${e.prefixCls}__item`},[y(r,{icon:"bi:arrow-up"})],2),y("span",{class:`${e.prefixCls}__item`},[y(r,{icon:"bi:arrow-down"})],2),y("span",null,k(e.t("component.app.toNavigate")),1),y("span",{class:`${e.prefixCls}__item`},[y(r,{icon:"mdi:keyboard-esc"})],2),y("span",null,k(e.t("common.closeText")),1)],2)}));ae.render=te,ae.__scopeId="data-v-249fdf6f";var se=b({name:"AppSearchModal",components:{Icon:x,SearchOutlined:B,AppSearchFooter:ae,[L.name]:L},directives:{clickOutside:P},props:{visible:Boolean},emits:["close"],setup(t,{emit:s}){const n=e(null),{prefixCls:o}=g("app-search-modal"),{t:l}=d(),[i,c]=function(){const t=e([]);return a((()=>{t.value=[]})),[t,e=>a=>{t.value[e]=a}]}(),{getIsMobile:p}=z(),{handleSearch:u,searchResult:f,keyword:h,activeIndex:m,handleEnter:v,handleMouseenter:C}=ee(i,n,s),b=E((()=>!h||0===r(f).length)),x=E((()=>[o,{[`${o}--mobile`]:r(p)}]));return{t:l,prefixCls:o,getClass:x,handleSearch:u,searchResult:f,activeIndex:m,getIsNotData:b,handleEnter:v,setRefs:c,scrollWrap:n,handleMouseenter:C,handleClose:()=>{f.value=[],s("close")}}}});const ne=$("data-v-172ee6fe"),oe=ne(((e,a,t,s,n,o)=>{const r=S("SearchOutlined"),l=S("a-input"),i=S("Icon"),c=S("AppSearchFooter"),d=A("click-outside");return _(),w(D,{to:"body"},[y(O,{name:"zoom-fade",mode:"out-in"},{default:ne((()=>[e.visible?(_(),w("div",{key:0,class:e.getClass,onClick:a[4]||(a[4]=I((()=>{}),["stop"]))},[j(y("div",{class:`${e.prefixCls}-content`},[y("div",{class:`${e.prefixCls}-input__wrapper`},[y(l,{class:`${e.prefixCls}-input`,placeholder:e.t("common.searchText"),"allow-clear":"",onChange:e.handleSearch},{prefix:ne((()=>[y(r)])),_:1},8,["class","placeholder","onChange"]),y("span",{class:`${e.prefixCls}-cancel`,onClick:a[1]||(a[1]=(...a)=>e.handleClose&&e.handleClose(...a))},k(e.t("common.cancelText")),3)],2),j(y("div",{class:`${e.prefixCls}-not-data`},k(e.t("component.app.searchNotData")),3),[[M,e.getIsNotData]]),j(y("ul",{class:`${e.prefixCls}-list`,ref:"scrollWrap"},[(_(!0),w(N,null,R(e.searchResult,((t,s)=>(_(),w("li",{ref:e.setRefs(s),key:t.path,"data-index":s,onMouseenter:a[2]||(a[2]=(...a)=>e.handleMouseenter&&e.handleMouseenter(...a)),onClick:a[3]||(a[3]=(...a)=>e.handleEnter&&e.handleEnter(...a)),class:[`${e.prefixCls}-list__item`,{[`${e.prefixCls}-list__item--active`]:e.activeIndex===s}]},[y("div",{class:`${e.prefixCls}-list__item-icon`},[y(i,{icon:t.icon||"mdi:form-select",size:20},null,8,["icon"])],2),y("div",{class:`${e.prefixCls}-list__item-text`},k(t.name),3),y("div",{class:`${e.prefixCls}-list__item-enter`},[y(i,{icon:"ant-design:enter-outlined",size:20})],2)],42,["data-index"])))),128))],2),[[M,!e.getIsNotData]]),y(c)],2),[[d,e.handleClose]])],2)):T("",!0)])),_:1})])}));se.render=oe,se.__scopeId="data-v-172ee6fe";var re=b({name:"AppSearch",components:{AppSearchModal:se,Tooltip:U,SearchOutlined:B},setup(){const a=e(!1),{prefixCls:t}=g("app-search"),{getShowSearch:s}=F(),{t:n}=d();return{t:n,prefixCls:t,showModal:a,getShowSearch:s,handleClose:()=>{a.value=!1},handleSearch:function(){a.value=!0}}}});const le=$("data-v-261daa90"),ie=le(((e,a,t,s,n,o)=>{const r=S("SearchOutlined"),l=S("Tooltip"),i=S("AppSearchModal");return e.getShowSearch?(_(),w("div",{key:0,class:e.prefixCls,onClick:a[1]||(a[1]=I(((...a)=>e.handleSearch&&e.handleSearch(...a)),["stop"]))},[y(l,null,{title:le((()=>[K(k(e.t("common.searchText")),1)])),default:le((()=>[y(r)])),_:1}),y(i,{onClose:e.handleClose,visible:e.showModal},null,8,["onClose","visible"])],2)):T("",!0)}));re.render=ie,re.__scopeId="data-v-261daa90";export default re;
