import{o as d,f as k,g as e,B as S,C as A,v as h,d as M,i as z,a as B,D as y,x as v,E as P,h as t,_ as H,G as D,H as I,c as b,b as R,I as N,J as W,K as j,L as E,M as L,N as q,O as F,P as O,Q as U,m as u,t as Z,n as x,R as $,S as V,p as G,T as J,U as w,V as K,F as Q,w as X,W as Y,X as ee,q as T,Y as te,Z as se,$ as oe,a0 as ne,k as le,a1 as ae,a2 as ie,a3 as re,a4 as ce}from"./index-64bb7ba3.js";import{N as ue}from"./NoteDisplay-4116342b.js";import de from"./DrawingControls-e16f3917.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pe=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),me=[pe];function ve(n,a){return d(),k("svg",_e,me)}const he={name:"carbon-renew",render:ve},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function Se(n,a){return d(),k("svg",fe,we)}const ye={name:"carbon-time",render:Se},ke="/vreme/assets/logo-title-horizontal-96c3c915.png";function Ce(){const n=S(Date.now()),a=A({interval:1e3}),_=h(()=>{const s=(a.value-n.value)/1e3,l=Math.floor(s%60).toString().padStart(2,"0");return`${Math.floor(s/60).toString().padStart(2,"0")}:${l}`});function p(){n.value=a.value}return{timer:_,resetTimer:p}}const be=M({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(n){const a=n;z(B);const _=h(()=>{var s,l,o;return(o=(l=(s=y.value)==null?void 0:s.meta)==null?void 0:l.slide)==null?void 0:o.note}),p=h(()=>{var s,l,o;return(o=(l=(s=y.value)==null?void 0:s.meta)==null?void 0:l.slide)==null?void 0:o.noteHTML});return(s,l)=>(d(),v(ue,{class:P(a.class),note:t(_),"note-html":t(p)},null,8,["class","note","note-html"]))}}),Ne=H(be,[["__file","/home/aleks/Namizje/test/WeatherApp/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=n=>(ae("data-v-574fd206"),n=n(),ie(),n),$e={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Te={class:"grid-section top flex"},Me=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),ze=f(()=>e("div",{class:"flex-auto"},null,-1)),Be={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Pe=f(()=>e("div",{class:"context"}," current ",-1)),He=f(()=>e("div",{class:"context"}," next ",-1)),Ae={class:"grid-section note overflow-auto"},De={class:"grid-section bottom"},Ie={class:"progress-bar"},Re=M({__name:"Presenter",setup(n){z(B);const a=S();D(),I(a);const _=b.titleTemplate.replace("%s",b.title||"Slidev");R({title:`Presenter - ${_}`});const{timer:p,resetTimer:s}=Ce(),l=S([]),o=h(()=>N.value<W.value?{route:y.value,clicks:N.value+1}:j.value?{route:E.value,clicks:0}:null);return L(()=>{const C=a.value.querySelector("#slide-content"),r=q(F()),g=O();U(()=>{if(!g.value||Y.value||!ee.value)return;const c=C.getBoundingClientRect(),i=(r.x-c.left)/c.width*100,m=(r.y-c.top)/c.height*100;if(!(i<0||i>100||m<0||m>100))return{x:i,y:m}},c=>{X.cursor=c})}),(C,r)=>{const g=ye,c=he;return d(),k(Q,null,[e("div",$e,[e("div",Ve,[e("div",Te,[Me,ze,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...i)=>t(s)&&t(s)(...i))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Be,Z(t(p)),1)]),e("div",{ref_key:"main",ref:a,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(t(T))},[u(V,{key:"main",class:"h-full w-full"},{default:$(()=>[u(te,{context:"presenter"})]),_:1}),Pe],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(t(T))},[t(o)?(d(),v(V,{key:"next",class:"h-full w-full"},{default:$(()=>{var i;return[u(t(oe),{is:(i=t(o).route)==null?void 0:i.component,"clicks-elements":l.value,"onUpdate:clicksElements":r[1]||(r[1]=m=>l.value=m),clicks:t(o).clicks,"clicks-disabled":!1,class:P(t(se)(t(o).route)),route:t(o).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):G("v-if",!0),He],4),e("div",Ae,[(d(),v(Ne,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",De,[u(re,{persist:!0})]),(d(),v(de,{key:0}))]),e("div",Ie,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(t(ne)-1)/(t(le)-1)*100}%`})},null,4)])]),u(ce),u(K,{modelValue:t(w),"onUpdate:modelValue":r[2]||(r[2]=i=>J(w)?w.value=i:null)},null,8,["modelValue"])],64)}}});const Le=H(Re,[["__scopeId","data-v-574fd206"],["__file","/home/aleks/Namizje/test/WeatherApp/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Le as default};
