var rServiceInfoLayout=function(x){"use strict";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */var Ja;function Qa(e,t,n){return(t=er(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function en(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?en(Object(n),!0).forEach(function(a){Qa(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):en(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function tr(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function er(e){var t=tr(e,"string");return typeof t=="symbol"?t:t+""}const nn=()=>{};let Jt={},an={},rn=null,on={mark:nn,measure:nn};try{typeof window<"u"&&(Jt=window),typeof document<"u"&&(an=document),typeof MutationObserver<"u"&&(rn=MutationObserver),typeof performance<"u"&&(on=performance)}catch{}const{userAgent:sn=""}=Jt.navigator||{},D=Jt,y=an,ln=rn,Ot=on;D.document;const N=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",cn=~sn.indexOf("MSIE")||~sn.indexOf("Trident/");var nr=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ar=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,fn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},rr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},un=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],w="classic",Lt="duotone",ir="sharp",or="sharp-duotone",dn=[w,Lt,ir,or],sr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},lr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},cr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),fr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ur=["fak","fa-kit","fakd","fa-kit-duotone"],hn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},dr=["kit"],hr={kit:{"fa-kit":"fak"}},mr=["fak","fakd"],pr={kit:{fak:"fa-kit"}},mn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Tt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],vr=["fak","fa-kit","fakd","fa-kit-duotone"],br={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},yr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},xr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Qt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},_r=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],te=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...gr,..._r],Ar=["solid","regular","light","thin","duotone","brands"],pn=[1,2,3,4,5,6,7,8,9,10],wr=pn.concat([11,12,13,14,15,16,17,18,19,20]),$r=[...Object.keys(xr),...Ar,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Tt.GROUP,Tt.SWAP_OPACITY,Tt.PRIMARY,Tt.SECONDARY].concat(pn.map(e=>"".concat(e,"x"))).concat(wr.map(e=>"w-".concat(e))),Sr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const z="___FONT_AWESOME___",ee=16,gn="fa",vn="svg-inline--fa",B="data-fa-i2svg",ne="data-fa-pseudo-element",Er="data-fa-pseudo-element-pending",ae="data-prefix",re="data-icon",bn="fontawesome-i2svg",kr="async",Pr=["HTML","HEAD","STYLE","SCRIPT"],yn=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})();function ht(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[w]}})}const xn=c({},fn);xn[w]=c(c(c(c({},{"fa-duotone":"duotone"}),fn[w]),hn.kit),hn["kit-duotone"]);const Cr=ht(xn),ie=c({},fr);ie[w]=c(c(c(c({},{duotone:"fad"}),ie[w]),mn.kit),mn["kit-duotone"]);const _n=ht(ie),oe=c({},Qt);oe[w]=c(c({},oe[w]),pr.kit);const se=ht(oe),le=c({},yr);le[w]=c(c({},le[w]),hr.kit),ht(le);const Or=nr,An="fa-layers-text",Lr=ar,Tr=c({},sr);ht(Tr);const Mr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ce=rr,Nr=[...dr,...$r],mt=D.FontAwesomeConfig||{};function zr(e){var t=y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ir(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=Ir(zr(n));r!=null&&(mt[a]=r)});const wn={styleDefault:"solid",familyDefault:w,cssPrefix:gn,replacementClass:vn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};mt.familyPrefix&&(mt.cssPrefix=mt.familyPrefix);const nt=c(c({},wn),mt);nt.autoReplaceSvg||(nt.observeMutations=!1);const h={};Object.keys(wn).forEach(e=>{Object.defineProperty(h,e,{enumerable:!0,set:function(t){nt[e]=t,pt.forEach(n=>n(h))},get:function(){return nt[e]}})}),Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(e){nt.cssPrefix=e,pt.forEach(t=>t(h))},get:function(){return nt.cssPrefix}}),D.FontAwesomeConfig=h;const pt=[];function Fr(e){return pt.push(e),()=>{pt.splice(pt.indexOf(e),1)}}const R=ee,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Dr(e){if(!e||!N)return;const t=y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=y.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(t,a),e}const Rr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gt(){let e=12,t="";for(;e-- >0;)t+=Rr[Math.random()*62|0];return t}function at(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function fe(e){return e.classList?at(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function $n(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jr(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat($n(e[n]),'" '),"").trim()}function Mt(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function ue(e){return e.size!==L.size||e.x!==L.x||e.y!==L.y||e.rotate!==L.rotate||e.flipX||e.flipY}function Ur(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:f}}function Hr(e){let{transform:t,width:n=ee,height:a=ee,startCentered:r=!1}=e,i="";return r&&cn?i+="translate(".concat(t.x/R-n/2,"em, ").concat(t.y/R-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(t.x/R,"em), calc(-50% + ").concat(t.y/R,"em)) "):i+="translate(".concat(t.x/R,"em, ").concat(t.y/R,"em) "),i+="scale(".concat(t.size/R*(t.flipX?-1:1),", ").concat(t.size/R*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var Yr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Sn(){const e=gn,t=vn,n=h.cssPrefix,a=h.replacementClass;let r=Yr;if(n!==e||a!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let En=!1;function de(){h.autoAddCss&&!En&&(Dr(Sn()),En=!0)}var Wr={mixout(){return{dom:{css:Sn,insertCss:de}}},hooks(){return{beforeDOMElementCreation(){de()},beforeI2svg(){de()}}}};const I=D||{};I[z]||(I[z]={}),I[z].styles||(I[z].styles={}),I[z].hooks||(I[z].hooks={}),I[z].shims||(I[z].shims=[]);var T=I[z];const kn=[],Pn=function(){y.removeEventListener("DOMContentLoaded",Pn),Nt=1,kn.map(e=>e())};let Nt=!1;N&&(Nt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Nt||y.addEventListener("DOMContentLoaded",Pn));function Br(e){N&&(Nt?setTimeout(e,0):kn.push(e))}function vt(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?$n(e):"<".concat(t," ").concat(jr(n),">").concat(a.map(vt).join(""),"</").concat(t,">")}function Cn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var he=function(t,n,a,r){var i=Object.keys(t),o=i.length,s=n,l,f,d;for(a===void 0?(l=1,d=t[i[0]]):(l=0,d=a);l<o;l++)f=i[l],d=s(d,t[f],f,t);return d};function Gr(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function me(e){const t=Gr(e);return t.length===1?t[0].toString(16):null}function Vr(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function On(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function pe(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=On(t);typeof T.hooks.addPack=="function"&&!a?T.hooks.addPack(e,On(t)):T.styles[e]=c(c({},T.styles[e]||{}),r),e==="fas"&&pe("fa",t)}const{styles:bt,shims:Xr}=T,Ln=Object.keys(se),qr=Ln.reduce((e,t)=>(e[t]=Object.keys(se[t]),e),{});let ge=null,Tn={},Mn={},Nn={},zn={},In={};function Kr(e){return~Nr.indexOf(e)}function Zr(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Kr(r)?r:null}const Fn=()=>{const e=a=>he(bt,(r,i,o)=>(r[o]=he(i,a,{}),r),{});Tn=e((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),Mn=e((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),In=e((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const t="far"in bt||h.autoFetchSvg,n=he(Xr,(a,r)=>{const i=r[0];let o=r[1];const s=r[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});Nn=n.names,zn=n.unicodes,ge=zt(h.styleDefault,{family:h.familyDefault})};Fr(e=>{ge=zt(e.styleDefault,{family:h.familyDefault})}),Fn();function ve(e,t){return(Tn[e]||{})[t]}function Jr(e,t){return(Mn[e]||{})[t]}function G(e,t){return(In[e]||{})[t]}function Dn(e){return Nn[e]||{prefix:null,iconName:null}}function Qr(e){const t=zn[e],n=ve("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function j(){return ge}const Rn=()=>({prefix:null,iconName:null,rest:[]});function ti(e){let t=w;const n=Ln.reduce((a,r)=>(a[r]="".concat(h.cssPrefix,"-").concat(r),a),{});return dn.forEach(a=>{(e.includes(n[a])||e.some(r=>qr[a].includes(r)))&&(t=a)}),t}function zt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=w}=t,a=Cr[n][e];if(n===Lt&&!e)return"fad";const r=_n[n][e]||_n[n][a],i=e in T.styles?e:null;return r||i||null}function ei(e){let t=[],n=null;return e.forEach(a=>{const r=Zr(h.cssPrefix,a);r?n=r:a&&t.push(a)}),{iconName:n,rest:t}}function jn(e){return e.sort().filter((t,n,a)=>a.indexOf(t)===n)}function It(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const r=te.concat(vr),i=jn(e.filter(u=>r.includes(u))),o=jn(e.filter(u=>!te.includes(u))),s=i.filter(u=>(a=u,!un.includes(u))),[l=null]=s,f=ti(i),d=c(c({},ei(o)),{},{prefix:zt(l,{family:f})});return c(c(c({},d),ii({values:e,family:f,styles:bt,config:h,canonical:d,givenPrefix:a})),ni(n,a,d))}function ni(e,t,n){let{prefix:a,iconName:r}=n;if(e||!a||!r)return{prefix:a,iconName:r};const i=t==="fa"?Dn(r):{},o=G(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!bt.far&&bt.fas&&!h.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const ai=dn.filter(e=>e!==w||e!==Lt),ri=Object.keys(Qt).filter(e=>e!==w).map(e=>Object.keys(Qt[e])).flat();function ii(e){const{values:t,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=e,s=n===Lt,l=t.includes("fa-duotone")||t.includes("fad"),f=o.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(l||f||d)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&ai.includes(n)&&(Object.keys(i).find(m=>ri.includes(m))||o.autoFetchSvg)){const m=cr.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=G(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=j()||"fas"),a}class oi{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=c(c({},this.definitions[i]||{}),r[i]),pe(i,r[i]);const o=se[w][i];o&&pe(o,r[i]),Fn()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:s}=a[r],l=s[2];t[i]||(t[i]={}),l.length>0&&l.forEach(f=>{typeof f=="string"&&(t[i][f]=s)}),t[i][o]=s}),t}}let Un=[],rt={};const it={},si=Object.keys(it);function li(e,t){let{mixoutsTo:n}=t;return Un=e,rt={},Object.keys(it).forEach(a=>{si.indexOf(a)===-1&&delete it[a]}),Un.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{rt[o]||(rt[o]=[]),rt[o].push(i[o])})}a.provides&&a.provides(it)}),n}function be(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(rt[e]||[]).forEach(o=>{t=o.apply(null,[t,...a])}),t}function V(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(rt[e]||[]).forEach(i=>{i.apply(null,n)})}function U(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return it[e]?it[e].apply(null,t):void 0}function ye(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||j();if(t)return t=G(n,t)||t,Cn(Hn.definitions,n,t)||Cn(T.styles,n,t)}const Hn=new oi,S={noAuto:()=>{h.autoReplaceSvg=!1,h.observeMutations=!1,V("noAuto")},config:h,dom:{i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return N?(V("beforeI2svg",e),U("pseudoElements2svg",e),U("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,Br(()=>{ci({autoReplaceSvgRoot:t}),V("watch",e)})}},parse:{icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:G(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=zt(e[0]);return{prefix:n,iconName:G(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(h.cssPrefix,"-"))>-1||e.match(Or))){const t=It(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||j(),iconName:G(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=j();return{prefix:t,iconName:G(t,e)||e}}}},library:Hn,findIconDefinition:ye,toHtml:vt},ci=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=y}=e;(Object.keys(T.styles).length>0||h.autoFetchSvg)&&N&&h.autoReplaceSvg&&S.dom.i2svg({node:t})};function Ft(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>vt(n))}}),Object.defineProperty(e,"node",{get:function(){if(!N)return;const n=y.createElement("div");return n.innerHTML=e.html,n.children}}),e}function fi(e){let{children:t,main:n,mask:a,attributes:r,styles:i,transform:o}=e;if(ue(o)&&n.found&&!a.found){const{width:s,height:l}=n,f={x:s/l/2,y:.5};r.style=Mt(c(c({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function ui(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(h.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:a}]}]}function xe(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:l,titleId:f,extra:d,watchable:u=!1}=e,{width:m,height:p}=n.found?n:t,b=mr.includes(a),A=[h.replacementClass,r?"".concat(h.cssPrefix,"-").concat(r):""].filter(dt=>d.classes.indexOf(dt)===-1).filter(dt=>dt!==""||!!dt).concat(d.classes).join(" ");let $={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:A,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(p)})};const k=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/p*16*.0625,"em")}:{};u&&($.attributes[B]=""),s&&($.children.push({tag:"title",attributes:{id:$.attributes["aria-labelledby"]||"title-".concat(f||gt())},children:[s]}),delete $.attributes.title);const E=c(c({},$),{},{prefix:a,iconName:r,main:t,mask:n,maskId:l,transform:i,symbol:o,styles:c(c({},k),d.styles)}),{children:O,attributes:ut}=n.found&&t.found?U("generateAbstractMask",E)||{children:[],attributes:{}}:U("generateAbstractIcon",E)||{children:[],attributes:{}};return E.children=O,E.attributes=ut,o?ui(E):fi(E)}function Yn(e){const{content:t,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=e,l=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(l[B]="");const f=c({},o.styles);ue(r)&&(f.transform=Hr({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const d=Mt(f);d.length>0&&(l.style=d);const u=[];return u.push({tag:"span",attributes:l,children:[t]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}function di(e){const{content:t,title:n,extra:a}=e,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Mt(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:_e}=T;function Ae(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(ce.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(ce.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(ce.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const hi={found:!1,width:512,height:512};function mi(e,t){!yn&&!h.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function we(e,t){let n=t;return t==="fa"&&h.styleDefault!==null&&(t=j()),new Promise((a,r)=>{if(n==="fa"){const i=Dn(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&_e[t]&&_e[t][e]){const i=_e[t][e];return a(Ae(i))}mi(e,t),a(c(c({},hi),{},{icon:h.showMissingIcons&&e?U("missingIconAbstract")||{}:{}}))})}const Wn=()=>{},$e=h.measurePerformance&&Ot&&Ot.mark&&Ot.measure?Ot:{mark:Wn,measure:Wn},yt='FA "6.7.2"',pi=e=>($e.mark("".concat(yt," ").concat(e," begins")),()=>Bn(e)),Bn=e=>{$e.mark("".concat(yt," ").concat(e," ends")),$e.measure("".concat(yt," ").concat(e),"".concat(yt," ").concat(e," begins"),"".concat(yt," ").concat(e," ends"))};var Se={begin:pi,end:Bn};const Dt=()=>{};function Gn(e){return typeof(e.getAttribute?e.getAttribute(B):null)=="string"}function gi(e){const t=e.getAttribute?e.getAttribute(ae):null,n=e.getAttribute?e.getAttribute(re):null;return t&&n}function vi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(h.replacementClass)}function bi(){return h.autoReplaceSvg===!0?Rt.replace:Rt[h.autoReplaceSvg]||Rt.replace}function yi(e){return y.createElementNS("http://www.w3.org/2000/svg",e)}function xi(e){return y.createElement(e)}function Vn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?yi:xi}=t;if(typeof e=="string")return y.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){a.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){a.appendChild(Vn(i,{ceFn:n}))}),a}function _i(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Rt={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Vn(n),t)}),t.getAttribute(B)===null&&h.keepOriginalSource){let n=y.createComment(_i(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~fe(t).indexOf(h.replacementClass))return Rt.replace(e);const a=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===h.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>vt(i)).join(`
`);t.setAttribute(B,""),t.innerHTML=r}};function Xn(e){e()}function qn(e,t){const n=typeof t=="function"?t:Dt;if(e.length===0)n();else{let a=Xn;h.mutateApproach===kr&&(a=D.requestAnimationFrame||Xn),a(()=>{const r=bi(),i=Se.begin("mutate");e.map(r),i(),n()})}}let Ee=!1;function Kn(){Ee=!0}function ke(){Ee=!1}let jt=null;function Zn(e){if(!ln||!h.observeMutations)return;const{treeCallback:t=Dt,nodeCallback:n=Dt,pseudoElementsCallback:a=Dt,observeMutationsRoot:r=y}=e;jt=new ln(i=>{if(Ee)return;const o=j();at(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Gn(s.addedNodes[0])&&(h.searchPseudoElements&&a(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&h.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&Gn(s.target)&&~Mr.indexOf(s.attributeName))if(s.attributeName==="class"&&gi(s.target)){const{prefix:l,iconName:f}=It(fe(s.target));s.target.setAttribute(ae,l||o),f&&s.target.setAttribute(re,f)}else vi(s.target)&&n(s.target)})}),N&&jt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ai(){jt&&jt.disconnect()}function wi(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function $i(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=It(fe(e));return r.prefix||(r.prefix=j()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Jr(r.prefix,e.innerText)||ve(r.prefix,me(e.innerText))),!r.iconName&&h.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Si(e){const t=at(e.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return h.autoA11y&&(n?t["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(a||gt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ei(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=$i(e),i=Si(e),o=be("parseNodeAttributes",{},e);let s=t.styleParser?wi(e):[];return c({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i}},o)}const{styles:ki}=T;function Qn(e){const t=h.autoReplaceSvg==="nest"?Jn(e,{styleParser:!1}):Jn(e);return~t.extra.classes.indexOf(An)?U("generateLayersText",e,t):U("generateSvgReplacementMutation",e,t)}function Pi(){return[...ur,...te]}function ta(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!N)return Promise.resolve();const n=y.documentElement.classList,a=d=>n.add("".concat(bn,"-").concat(d)),r=d=>n.remove("".concat(bn,"-").concat(d)),i=h.autoFetchSvg?Pi():un.concat(Object.keys(ki));i.includes("fa")||i.push("fa");const o=[".".concat(An,":not([").concat(B,"])")].concat(i.map(d=>".".concat(d,":not([").concat(B,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=at(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const l=Se.begin("onTree"),f=s.reduce((d,u)=>{try{const m=Qn(u);m&&d.push(m)}catch(m){yn||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,u)=>{Promise.all(f).then(m=>{qn(m,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),d()})}).catch(m=>{l(),u(m)})})}function Ci(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qn(e).then(n=>{n&&qn([n],t)})}function Oi(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:ye(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:ye(r||{})),e(a,c(c({},n),{},{mask:r}))}}const Li=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=L,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:l=[],attributes:f={},styles:d={}}=t;if(!e)return;const{prefix:u,iconName:m,icon:p}=e;return Ft(c({type:"icon"},e),()=>(V("beforeDOMElementCreation",{iconDefinition:e,params:t}),h.autoA11y&&(o?f["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(s||gt()):(f["aria-hidden"]="true",f.focusable="false")),xe({icons:{main:Ae(p),mask:r?Ae(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:m,transform:c(c({},L),n),symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:f,styles:d,classes:l}})))};var Ti={mixout(){return{icon:Oi(Li)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=ta,e.nodeCallback=Ci,e}}},provides(e){e.i2svg=function(t){const{node:n=y,callback:a=()=>{}}=t;return ta(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:l,mask:f,maskId:d,extra:u}=n;return new Promise((m,p)=>{Promise.all([we(a,o),f.iconName?we(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(b=>{let[A,$]=b;m([t,xe({icons:{main:A,mask:$},prefix:o,iconName:a,transform:s,symbol:l,maskId:d,title:r,titleId:i,extra:u,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:i,styles:o}=t;const s=Mt(o);s.length>0&&(a.style=s);let l;return ue(i)&&(l=U("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:a}}}},Mi={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Ft({type:"layer"},()=>{V("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Ni={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=t;return Ft({type:"counter",content:e},()=>(V("beforeDOMElementCreation",{content:e,params:t}),di({content:e.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(h.cssPrefix,"-layers-counter"),...a]}})))}}}},zi={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=L,title:a=null,classes:r=[],attributes:i={},styles:o={}}=t;return Ft({type:"text",content:e},()=>(V("beforeDOMElementCreation",{content:e,params:t}),Yn({content:e,transform:c(c({},L),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(h.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:i}=n;let o=null,s=null;if(cn){const l=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();o=f.width/l,s=f.height/l}return h.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,Yn({content:t.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}};const Ii=new RegExp('"',"ug"),ea=[1105920,1112319],na=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),lr),Sr),br),Pe=Object.keys(na).reduce((e,t)=>(e[t.toLowerCase()]=na[t],e),{}),Fi=Object.keys(Pe).reduce((e,t)=>{const n=Pe[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Di(e){const t=e.replace(Ii,""),n=Vr(t,0),a=n>=ea[0]&&n<=ea[1],r=t.length===2?t[0]===t[1]:!1;return{value:me(r?t[0]:t),isSecondary:a||r}}function Ri(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(Pe[n]||{})[r]||Fi[n]}function aa(e,t){const n="".concat(Er).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const o=at(e.children).filter(m=>m.getAttribute(ne)===t)[0],s=D.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),f=l.match(Lr),d=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!f)return e.removeChild(o),a();if(f&&u!=="none"&&u!==""){const m=s.getPropertyValue("content");let p=Ri(l,d);const{value:b,isSecondary:A}=Di(m),$=f[0].startsWith("FontAwesome");let k=ve(p,b),E=k;if($){const O=Qr(b);O.iconName&&O.prefix&&(k=O.iconName,p=O.prefix)}if(k&&!A&&(!o||o.getAttribute(ae)!==p||o.getAttribute(re)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);const O=Ei(),{extra:ut}=O;ut.attributes[ne]=t,we(k,p).then(dt=>{const vl=xe(c(c({},O),{},{icons:{main:dt,mask:Rn()},prefix:p,iconName:E,extra:ut,watchable:!0})),tn=y.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(tn,e.firstChild):e.appendChild(tn),tn.outerHTML=vl.map(bl=>vt(bl)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function ji(e){return Promise.all([aa(e,"::before"),aa(e,"::after")])}function Ui(e){return e.parentNode!==document.head&&!~Pr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ne)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ra(e){if(N)return new Promise((t,n)=>{const a=at(e.querySelectorAll("*")).filter(Ui).map(ji),r=Se.begin("searchPseudoElements");Kn(),Promise.all(a).then(()=>{r(),ke(),t()}).catch(()=>{r(),ke(),n()})})}var Hi={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=ra,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=y}=t;h.searchPseudoElements&&ra(n)}}};let ia=!1;var Yi={mixout(){return{dom:{unwatch(){Kn(),ia=!0}}}},hooks(){return{bootstrap(){Zn(be("mutationObserverCallbacks",{}))},noAuto(){Ai()},watch(e){const{observeMutationsRoot:t}=e;ia?ke():Zn(be("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const oa=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var Wi={mixout(){return{parse:{transform:e=>oa(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=oa(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:i}=t;const o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(s," ").concat(l," ").concat(f)},u={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:d,path:u};return{tag:"g",attributes:c({},m.outer),children:[{tag:"g",attributes:c({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),m.path)}]}]}}}};const Ce={x:0,y:0,width:"100%",height:"100%"};function sa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Bi(e){return e.tag==="g"?e.children:[e]}var Gi={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?It(n.split(" ").map(r=>r.trim())):Rn();return a.prefix||(a.prefix=j()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=t;const{width:l,icon:f}=r,{width:d,icon:u}=i,m=Ur({transform:s,containerWidth:d,iconWidth:l}),p={tag:"rect",attributes:c(c({},Ce),{},{fill:"white"})},b=f.children?{children:f.children.map(sa)}:{},A={tag:"g",attributes:c({},m.inner),children:[sa(c({tag:f.tag,attributes:c(c({},f.attributes),m.path)},b))]},$={tag:"g",attributes:c({},m.outer),children:[A]},k="mask-".concat(o||gt()),E="clip-".concat(o||gt()),O={tag:"mask",attributes:c(c({},Ce),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,$]},ut={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Bi(u)},O]};return n.push(ut,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(k,")")},Ce)}),{children:n,attributes:a}}}},Vi={provides(e){let t=!1;D.matchMedia&&(t=D.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=c(c({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:c(c({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Xi={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},qi=[Wr,Ti,Mi,Ni,zi,Hi,Yi,Wi,Gi,Vi,Xi];li(qi,{mixoutsTo:S}),S.noAuto,S.config;const la=S.library;S.dom,S.parse,S.findIconDefinition,S.toHtml;const Ki=S.icon;S.layer,S.text,S.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ca={prefix:"far",iconName:"star",icon:[576,512,[11088,61446],"f005","M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const fa={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Oe={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=(e,...t)=>({strTag:!0,strings:e,values:t}),Zi=e=>typeof e!="string"&&"strTag"in e,ua=(e,t,n)=>{let a=e[0];for(let r=1;r<e.length;r++)a+=t[n?n[r-1]:r-1],a+=e[r];return a};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const da=e=>Zi(e)?ua(e.strings,e.values):e;let _=da,ha=!1;function Ji(e){if(ha)throw new Error("lit-localize can only be configured once");_=e,ha=!0}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Qi{constructor(t){this.__litLocalizeEventHandler=n=>{n.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(Le,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Le,this.__litLocalizeEventHandler)}}const ma=e=>e.addController(new Qi(e));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const to=()=>(e,t)=>(e.addInitializer(ma),e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pa{constructor(){this.settled=!1,this.promise=new Promise((t,n)=>{this._resolve=t,this._reject=n})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const F=[];for(let e=0;e<256;e++)F[e]=(e>>4&15).toString(16)+(e&15).toString(16);function eo(e){let t=0,n=8997,a=0,r=33826,i=0,o=40164,s=0,l=52210;for(let f=0;f<e.length;f++)n^=e.charCodeAt(f),t=n*435,a=r*435,i=o*435,s=l*435,i+=n<<8,s+=r<<8,a+=t>>>16,n=t&65535,i+=a>>>16,r=a&65535,l=s+(i>>>16)&65535,o=i&65535;return F[l>>8]+F[l&255]+F[o>>8]+F[o&255]+F[r>>8]+F[r&255]+F[n>>8]+F[n&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const no="",ao="h",ro="s";function io(e,t){return(t?ao:ro)+eo(typeof e=="string"?e:e.join(no))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ga=new WeakMap,va=new Map;function oo(e,t,n){if(e){const a=(n==null?void 0:n.id)??so(t),r=e[a];if(r){if(typeof r=="string")return r;if("strTag"in r)return ua(r.strings,t.values,r.values);{let i=ga.get(r);return i===void 0&&(i=r.values,ga.set(r,i)),{...r,values:i.map(o=>t.values[o])}}}}return da(t)}function so(e){const t=typeof e=="string"?e:e.strings;let n=va.get(t);return n===void 0&&(n=io(t,typeof e!="string"&&!("strTag"in e)),va.set(t,n)),n}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Te(e){window.dispatchEvent(new CustomEvent(Le,{detail:e}))}let Ut="",Me,ba,Ht,Ne,ya,X=new pa;X.resolve();let Yt=0;const lo=e=>(Ji((t,n)=>oo(ya,t,n)),Ut=ba=e.sourceLocale,Ht=new Set(e.targetLocales),Ht.add(e.sourceLocale),Ne=e.loadLocale,{getLocale:co,setLocale:fo}),co=()=>Ut,fo=e=>{if(e===(Me??Ut))return X.promise;if(!Ht||!Ne)throw new Error("Internal error");if(!Ht.has(e))throw new Error("Invalid locale code");Yt++;const t=Yt;return Me=e,X.settled&&(X=new pa),Te({status:"loading",loadingLocale:e}),(e===ba?Promise.resolve({templates:void 0}):Ne(e)).then(a=>{Yt===t&&(Ut=e,Me=void 0,ya=a.templates,Te({status:"ready",readyLocale:e}),X.resolve())},a=>{Yt===t&&(Te({status:"error",errorLocale:e,errorMessage:a.toString()}),X.reject(a))}),X.promise};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=globalThis,ze=Wt.ShadowRoot&&(Wt.ShadyCSS===void 0||Wt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ie=Symbol(),xa=new WeakMap;let _a=class{constructor(t,n,a){if(this._$cssResult$=!0,a!==Ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(ze&&t===void 0){const a=n!==void 0&&n.length===1;a&&(t=xa.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&xa.set(n,t))}return t}toString(){return this.cssText}};const Aa=e=>new _a(typeof e=="string"?e:e+"",void 0,Ie),uo=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((a,r,i)=>a+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new _a(n,e,Ie)},ho=(e,t)=>{if(ze)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const a=document.createElement("style"),r=Wt.litNonce;r!==void 0&&a.setAttribute("nonce",r),a.textContent=n.cssText,e.appendChild(a)}},wa=ze?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const a of t.cssRules)n+=a.cssText;return Aa(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mo,defineProperty:po,getOwnPropertyDescriptor:go,getOwnPropertyNames:vo,getOwnPropertySymbols:bo,getPrototypeOf:yo}=Object,H=globalThis,$a=H.trustedTypes,xo=$a?$a.emptyScript:"",Fe=H.reactiveElementPolyfillSupport,xt=(e,t)=>e,Bt={toAttribute(e,t){switch(t){case Boolean:e=e?xo:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},De=(e,t)=>!mo(e,t),Sa={attribute:!0,type:String,converter:Bt,reflect:!1,useDefault:!1,hasChanged:De};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),H.litPropertyMetadata??(H.litPropertyMetadata=new WeakMap);let ot=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Sa){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const a=Symbol(),r=this.getPropertyDescriptor(t,a,n);r!==void 0&&po(this.prototype,t,r)}}static getPropertyDescriptor(t,n,a){const{get:r,set:i}=go(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:r,set(o){const s=r==null?void 0:r.call(this);i==null||i.call(this,o),this.requestUpdate(t,s,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Sa}static _$Ei(){if(this.hasOwnProperty(xt("elementProperties")))return;const t=yo(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(xt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xt("properties"))){const n=this.properties,a=[...vo(n),...bo(n)];for(const r of a)this.createProperty(r,n[r])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[a,r]of n)this.elementProperties.set(a,r)}this._$Eh=new Map;for(const[n,a]of this.elementProperties){const r=this._$Eu(n,a);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const r of a)n.unshift(wa(r))}else t!==void 0&&n.push(wa(t));return n}static _$Eu(t,n){const a=n.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const a of n.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ho(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var a;return(a=n.hostConnected)==null?void 0:a.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var a;return(a=n.hostDisconnected)==null?void 0:a.call(n)})}attributeChangedCallback(t,n,a){this._$AK(t,a)}_$ET(t,n){var i;const a=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,a);if(r!==void 0&&a.reflect===!0){const o=(((i=a.converter)==null?void 0:i.toAttribute)!==void 0?a.converter:Bt).toAttribute(n,a.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,n){var i,o;const a=this.constructor,r=a._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const s=a.getPropertyOptions(r),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:Bt;this._$Em=r,this[r]=l.fromAttribute(n,s.type)??((o=this._$Ej)==null?void 0:o.get(r))??null,this._$Em=null}}requestUpdate(t,n,a){var r;if(t!==void 0){const i=this.constructor,o=this[t];if(a??(a=i.getPropertyOptions(t)),!((a.hasChanged??De)(o,n)||a.useDefault&&a.reflect&&o===((r=this._$Ej)==null?void 0:r.get(t))&&!this.hasAttribute(i._$Eu(t,a))))return;this.C(t,n,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:a,reflect:r,wrapped:i},o){a&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??n??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(n=void 0),this._$AL.set(t,n)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r){const{wrapped:s}=o,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(a=this._$EO)==null||a.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(a=>{var r;return(r=a.hostUpdated)==null?void 0:r.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};ot.elementStyles=[],ot.shadowRootOptions={mode:"open"},ot[xt("elementProperties")]=new Map,ot[xt("finalized")]=new Map,Fe==null||Fe({ReactiveElement:ot}),(H.reactiveElementVersions??(H.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=globalThis,Gt=_t.trustedTypes,Ea=Gt?Gt.createPolicy("lit-html",{createHTML:e=>e}):void 0,ka="$lit$",Y=`lit$${Math.random().toFixed(9).slice(2)}$`,Pa="?"+Y,_o=`<${Pa}>`,q=document,At=()=>q.createComment(""),wt=e=>e===null||typeof e!="object"&&typeof e!="function",Re=Array.isArray,Ao=e=>Re(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",je=`[ 	
\f\r]`,$t=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ca=/-->/g,Oa=/>/g,K=RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),La=/'/g,Ta=/"/g,Ma=/^(?:script|style|textarea|title)$/i,Na=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),P=Na(1),wo=Na(2),W=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),za=new WeakMap,Z=q.createTreeWalker(q,129);function Ia(e,t){if(!Re(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ea!==void 0?Ea.createHTML(t):t}const $o=(e,t)=>{const n=e.length-1,a=[];let r,i=t===2?"<svg>":t===3?"<math>":"",o=$t;for(let s=0;s<n;s++){const l=e[s];let f,d,u=-1,m=0;for(;m<l.length&&(o.lastIndex=m,d=o.exec(l),d!==null);)m=o.lastIndex,o===$t?d[1]==="!--"?o=Ca:d[1]!==void 0?o=Oa:d[2]!==void 0?(Ma.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=K):d[3]!==void 0&&(o=K):o===K?d[0]===">"?(o=r??$t,u=-1):d[1]===void 0?u=-2:(u=o.lastIndex-d[2].length,f=d[1],o=d[3]===void 0?K:d[3]==='"'?Ta:La):o===Ta||o===La?o=K:o===Ca||o===Oa?o=$t:(o=K,r=void 0);const p=o===K&&e[s+1].startsWith("/>")?" ":"";i+=o===$t?l+_o:u>=0?(a.push(f),l.slice(0,u)+ka+l.slice(u)+Y+p):l+Y+(u===-2?s:p)}return[Ia(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]};class St{constructor({strings:t,_$litType$:n},a){let r;this.parts=[];let i=0,o=0;const s=t.length-1,l=this.parts,[f,d]=$o(t,n);if(this.el=St.createElement(f,a),Z.currentNode=this.el.content,n===2||n===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=Z.nextNode())!==null&&l.length<s;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(ka)){const m=d[o++],p=r.getAttribute(u).split(Y),b=/([.?@])?(.*)/.exec(m);l.push({type:1,index:i,name:b[2],strings:p,ctor:b[1]==="."?Eo:b[1]==="?"?ko:b[1]==="@"?Po:Vt}),r.removeAttribute(u)}else u.startsWith(Y)&&(l.push({type:6,index:i}),r.removeAttribute(u));if(Ma.test(r.tagName)){const u=r.textContent.split(Y),m=u.length-1;if(m>0){r.textContent=Gt?Gt.emptyScript:"";for(let p=0;p<m;p++)r.append(u[p],At()),Z.nextNode(),l.push({type:2,index:++i});r.append(u[m],At())}}}else if(r.nodeType===8)if(r.data===Pa)l.push({type:2,index:i});else{let u=-1;for(;(u=r.data.indexOf(Y,u+1))!==-1;)l.push({type:7,index:i}),u+=Y.length-1}i++}}static createElement(t,n){const a=q.createElement("template");return a.innerHTML=t,a}}function st(e,t,n=e,a){var o,s;if(t===W)return t;let r=a!==void 0?(o=n._$Co)==null?void 0:o[a]:n._$Cl;const i=wt(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),i===void 0?r=void 0:(r=new i(e),r._$AT(e,n,a)),a!==void 0?(n._$Co??(n._$Co=[]))[a]=r:n._$Cl=r),r!==void 0&&(t=st(e,r._$AS(e,t.values),r,a)),t}let So=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:a}=this._$AD,r=((t==null?void 0:t.creationScope)??q).importNode(n,!0);Z.currentNode=r;let i=Z.nextNode(),o=0,s=0,l=a[0];for(;l!==void 0;){if(o===l.index){let f;l.type===2?f=new lt(i,i.nextSibling,this,t):l.type===1?f=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(f=new Co(i,this,t)),this._$AV.push(f),l=a[++s]}o!==(l==null?void 0:l.index)&&(i=Z.nextNode(),o++)}return Z.currentNode=q,r}p(t){let n=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,n),n+=a.strings.length-2):a._$AI(t[n])),n++}};class lt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,a,r){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=a,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=st(this,t,n),wt(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==W&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ao(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&wt(this._$AH)?this._$AA.nextSibling.data=t:this.T(q.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:a}=t,r=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=St.createElement(Ia(a.h,a.h[0]),this.options)),a);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(n);else{const o=new So(r,this),s=o.u(this.options);o.p(n),this.T(s),this._$AH=o}}_$AC(t){let n=za.get(t.strings);return n===void 0&&za.set(t.strings,n=new St(t)),n}k(t){Re(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let a,r=0;for(const i of t)r===n.length?n.push(a=new lt(this.O(At()),this.O(At()),this,this.options)):a=n[r],a._$AI(i),r++;r<n.length&&(this._$AR(a&&a._$AB.nextSibling,r),n.length=r)}_$AR(t=this._$AA.nextSibling,n){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,n);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class Vt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,a,r,i){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=n,this._$AM=r,this.options=i,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=v}_$AI(t,n=this,a,r){const i=this.strings;let o=!1;if(i===void 0)t=st(this,t,n,0),o=!wt(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const s=t;let l,f;for(t=i[0],l=0;l<i.length-1;l++)f=st(this,s[a+l],n,l),f===W&&(f=this._$AH[l]),o||(o=!wt(f)||f!==this._$AH[l]),f===v?t=v:t!==v&&(t+=(f??"")+i[l+1]),this._$AH[l]=f}o&&!r&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Eo extends Vt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}class ko extends Vt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}}class Po extends Vt{constructor(t,n,a,r,i){super(t,n,a,r,i),this.type=5}_$AI(t,n=this){if((t=st(this,t,n,0)??v)===W)return;const a=this._$AH,r=t===v&&a!==v||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,i=t!==v&&(a===v||r);r&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class Co{constructor(t,n,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){st(this,t)}}const Oo={I:lt},Ue=_t.litHtmlPolyfillSupport;Ue==null||Ue(St,lt),(_t.litHtmlVersions??(_t.litHtmlVersions=[])).push("3.3.0");const Lo=(e,t,n)=>{const a=(n==null?void 0:n.renderBefore)??t;let r=a._$litPart$;if(r===void 0){const i=(n==null?void 0:n.renderBefore)??null;a._$litPart$=r=new lt(t.insertBefore(At(),i),i,void 0,n??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis;let Et=class extends ot{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lo(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return W}};Et._$litElement$=!0,Et.finalized=!0,(Ja=J.litElementHydrateSupport)==null||Ja.call(J,{LitElement:Et});const He=J.litElementPolyfillSupport;He==null||He({LitElement:Et}),(J.litElementVersions??(J.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const To=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mo={attribute:!0,type:String,converter:Bt,reflect:!1,hasChanged:De},No=(e=Mo,t,n)=>{const{kind:a,metadata:r}=n;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),a==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),a==="accessor"){const{name:o}=n;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(o,l,e)},init(s){return s!==void 0&&this.C(o,void 0,e,s),s}}}if(a==="setter"){const{name:o}=n;return function(s){const l=this[o];t.call(this,s),this.requestUpdate(o,l,e)}}throw Error("Unsupported decorator location: "+a)};function M(e){return(t,n)=>typeof n=="object"?No(e,t,n):((a,r,i)=>{const o=r.hasOwnProperty(i);return r.constructor.createProperty(i,a),o?Object.getOwnPropertyDescriptor(r,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fa={CHILD:2},Ye=e=>(...t)=>({_$litDirective$:e,values:t});let We=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,a){this._$Ct=t,this._$AM=n,this._$Ci=a}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:zo}=Oo,Da=()=>document.createComment(""),kt=(e,t,n)=>{var i;const a=e._$AA.parentNode,r=t===void 0?e._$AB:t._$AA;if(n===void 0){const o=a.insertBefore(Da(),r),s=a.insertBefore(Da(),r);n=new zo(o,s,e,e.options)}else{const o=n._$AB.nextSibling,s=n._$AM,l=s!==e;if(l){let f;(i=n._$AQ)==null||i.call(n,e),n._$AM=e,n._$AP!==void 0&&(f=e._$AU)!==s._$AU&&n._$AP(f)}if(o!==r||l){let f=n._$AA;for(;f!==o;){const d=f.nextSibling;a.insertBefore(f,r),f=d}}}return n},Q=(e,t,n=e)=>(e._$AI(t,n),e),Io={},Ra=(e,t=Io)=>e._$AH=t,Fo=e=>e._$AH,Be=e=>{var a;(a=e._$AP)==null||a.call(e,!1,!0);let t=e._$AA;const n=e._$AB.nextSibling;for(;t!==n;){const r=t.nextSibling;t.remove(),t=r}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Do=Ye(class extends We{constructor(){super(...arguments),this.key=v}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(Ra(e),this.key=t),n}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ja=(e,t,n)=>{const a=new Map;for(let r=t;r<=n;r++)a.set(e[r],r);return a},Ro=Ye(class extends We{constructor(e){if(super(e),e.type!==Fa.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let a;n===void 0?n=t:t!==void 0&&(a=t);const r=[],i=[];let o=0;for(const s of e)r[o]=a?a(s,o):o,i[o]=n(s,o),o++;return{values:i,keys:r}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,a]){const r=Fo(e),{values:i,keys:o}=this.dt(t,n,a);if(!Array.isArray(r))return this.ut=o,i;const s=this.ut??(this.ut=[]),l=[];let f,d,u=0,m=r.length-1,p=0,b=i.length-1;for(;u<=m&&p<=b;)if(r[u]===null)u++;else if(r[m]===null)m--;else if(s[u]===o[p])l[p]=Q(r[u],i[p]),u++,p++;else if(s[m]===o[b])l[b]=Q(r[m],i[b]),m--,b--;else if(s[u]===o[b])l[b]=Q(r[u],i[b]),kt(e,l[b+1],r[u]),u++,b--;else if(s[m]===o[p])l[p]=Q(r[m],i[p]),kt(e,r[u],r[m]),m--,p++;else if(f===void 0&&(f=ja(o,p,b),d=ja(s,u,m)),f.has(s[u]))if(f.has(s[m])){const A=d.get(o[p]),$=A!==void 0?r[A]:null;if($===null){const k=kt(e,r[u]);Q(k,i[p]),l[p]=k}else l[p]=Q($,i[p]),kt(e,r[u],$),r[A]=null;p++}else Be(r[m]),m--;else Be(r[u]),u++;for(;p<=b;){const A=kt(e,l[b+1]);Q(A,i[p]),l[p++]=A}for(;u<=m;){const A=r[u++];A!==null&&Be(A)}return this.ut=o,Ra(e,l),W}}),jo="r-";function Uo(e){return`${jo}${e}`}const Ho="service-info-layout";var Yo=typeof global=="object"&&global&&global.Object===Object&&global,Wo=typeof self=="object"&&self&&self.Object===Object&&self,Ge=Yo||Wo||Function("return this")(),ct=Ge.Symbol,Ua=Object.prototype,Bo=Ua.hasOwnProperty,Go=Ua.toString,Pt=ct?ct.toStringTag:void 0;function Vo(e){var t=Bo.call(e,Pt),n=e[Pt];try{e[Pt]=void 0;var a=!0}catch{}var r=Go.call(e);return a&&(t?e[Pt]=n:delete e[Pt]),r}var Xo=Object.prototype,qo=Xo.toString;function Ko(e){return qo.call(e)}var Zo="[object Null]",Jo="[object Undefined]",Ha=ct?ct.toStringTag:void 0;function Ya(e){return e==null?e===void 0?Jo:Zo:Ha&&Ha in Object(e)?Vo(e):Ko(e)}function Qo(e){return e!=null&&typeof e=="object"}var ts="[object Symbol]";function Ve(e){return typeof e=="symbol"||Qo(e)&&Ya(e)==ts}function es(e,t){for(var n=-1,a=e==null?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r}var Xe=Array.isArray,Wa=ct?ct.prototype:void 0,Ba=Wa?Wa.toString:void 0;function Ga(e){if(typeof e=="string")return e;if(Xe(e))return es(e,Ga)+"";if(Ve(e))return Ba?Ba.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function Va(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ns="[object AsyncFunction]",as="[object Function]",rs="[object GeneratorFunction]",is="[object Proxy]";function os(e){if(!Va(e))return!1;var t=Ya(e);return t==as||t==rs||t==ns||t==is}var qe=Ge["__core-js_shared__"],Xa=function(){var e=/[^.]+$/.exec(qe&&qe.keys&&qe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function ss(e){return!!Xa&&Xa in e}var ls=Function.prototype,cs=ls.toString;function fs(e){if(e!=null){try{return cs.call(e)}catch{}try{return e+""}catch{}}return""}var us=/[\\^$.*+?()[\]{}|]/g,ds=/^\[object .+?Constructor\]$/,hs=Function.prototype,ms=Object.prototype,ps=hs.toString,gs=ms.hasOwnProperty,vs=RegExp("^"+ps.call(gs).replace(us,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function bs(e){if(!Va(e)||ss(e))return!1;var t=os(e)?vs:ds;return t.test(fs(e))}function ys(e,t){return e==null?void 0:e[t]}function qa(e,t){var n=ys(e,t);return bs(n)?n:void 0}function xs(e,t){return e===t||e!==e&&t!==t}var _s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,As=/^\w*$/;function ws(e,t){if(Xe(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||Ve(e)?!0:As.test(e)||!_s.test(e)||t!=null&&e in Object(t)}var Ct=qa(Object,"create");function $s(){this.__data__=Ct?Ct(null):{},this.size=0}function Ss(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Es="__lodash_hash_undefined__",ks=Object.prototype,Ps=ks.hasOwnProperty;function Cs(e){var t=this.__data__;if(Ct){var n=t[e];return n===Es?void 0:n}return Ps.call(t,e)?t[e]:void 0}var Os=Object.prototype,Ls=Os.hasOwnProperty;function Ts(e){var t=this.__data__;return Ct?t[e]!==void 0:Ls.call(t,e)}var Ms="__lodash_hash_undefined__";function Ns(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ct&&t===void 0?Ms:t,this}function tt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}tt.prototype.clear=$s,tt.prototype.delete=Ss,tt.prototype.get=Cs,tt.prototype.has=Ts,tt.prototype.set=Ns;function zs(){this.__data__=[],this.size=0}function Xt(e,t){for(var n=e.length;n--;)if(xs(e[n][0],t))return n;return-1}var Is=Array.prototype,Fs=Is.splice;function Ds(e){var t=this.__data__,n=Xt(t,e);if(n<0)return!1;var a=t.length-1;return n==a?t.pop():Fs.call(t,n,1),--this.size,!0}function Rs(e){var t=this.__data__,n=Xt(t,e);return n<0?void 0:t[n][1]}function js(e){return Xt(this.__data__,e)>-1}function Us(e,t){var n=this.__data__,a=Xt(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this}function ft(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}ft.prototype.clear=zs,ft.prototype.delete=Ds,ft.prototype.get=Rs,ft.prototype.has=js,ft.prototype.set=Us;var Hs=qa(Ge,"Map");function Ys(){this.size=0,this.__data__={hash:new tt,map:new(Hs||ft),string:new tt}}function Ws(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function qt(e,t){var n=e.__data__;return Ws(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Bs(e){var t=qt(this,e).delete(e);return this.size-=t?1:0,t}function Gs(e){return qt(this,e).get(e)}function Vs(e){return qt(this,e).has(e)}function Xs(e,t){var n=qt(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this}function et(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}et.prototype.clear=Ys,et.prototype.delete=Bs,et.prototype.get=Gs,et.prototype.has=Vs,et.prototype.set=Xs;var qs="Expected a function";function Ke(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(qs);var n=function(){var a=arguments,r=t?t.apply(this,a):a[0],i=n.cache;if(i.has(r))return i.get(r);var o=e.apply(this,a);return n.cache=i.set(r,o)||i,o};return n.cache=new(Ke.Cache||et),n}Ke.Cache=et;var Ks=500;function Zs(e){var t=Ke(e,function(a){return n.size===Ks&&n.clear(),a}),n=t.cache;return t}var Js=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qs=/\\(\\)?/g,tl=Zs(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Js,function(n,a,r,i){t.push(r?i.replace(Qs,"$1"):a||n)}),t});function el(e){return e==null?"":Ga(e)}function nl(e,t){return Xe(e)?e:ws(e,t)?[e]:tl(el(e))}function al(e){if(typeof e=="string"||Ve(e))return e;var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function rl(e,t){t=nl(t,e);for(var n=0,a=t.length;e!=null&&n<a;)e=e[al(t[n++])];return n&&n==a?e:void 0}function il(e,t,n){var a=e==null?void 0:rl(e,t);return a===void 0?n:a}const Ze="fr",ol=["en"],sl=["en","fr"],Qe=class Qe{static setLocale(t){this.locale=t}static setReference(t){this.reference=t}static getBrowserLocales(t={}){const a={...{languageCodeOnly:!0,defaultLanguage:Ze},...t},r=navigator.languages===void 0?[navigator.language]:navigator.languages;return r?r.map(i=>{const o=i.trim();return a.languageCodeOnly?o.split(/-|_/)[0]:o}):[a.defaultLanguage]}static getPageLang(t={}){const a={...{languageCodeOnly:!0,availableLanguages:sl,defaultLanguage:Ze},...t},r=document.documentElement.lang;let i=[];if(r)i=a.languageCodeOnly?[r.split(/-|_/)[0]]:[r];else{const s={languageCodeOnly:a.languageCodeOnly,defaultLanguage:a.defaultLanguage};i=this.getBrowserLocales(s)}return i.find(s=>a.availableLanguages.includes(s))||a.defaultLanguage}static localTranslation(t,n){var i;const a=(i=this.reference)==null?void 0:i.find(o=>o.locales.includes(this.locale)),r=a==null?void 0:a.messages;return r?il(r,t,n):n}};Qe.locale="en";let Kt=Qe;const ll=':root,:host{--fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";--fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";--fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";--fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";--fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";--fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";--fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";--fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";--fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";--fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";--fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";--fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone"}svg.svg-inline--fa:not(:root),svg.svg-inline--fa:not(:host){overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display, inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0em}.svg-inline--fa.fa-sm{vertical-align:-.07143em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin, .3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin, .3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width, 2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width, 1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{transform-origin:center center}.fa-layers-text{left:50%;top:50%;transform:translate(-50%,-50%);transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color, #ff253a);border-radius:var(--fa-counter-border-radius, 1em);box-sizing:border-box;color:var(--fa-inverse, #fff);line-height:var(--fa-counter-line-height, 1);max-width:var(--fa-counter-max-width, 5em);min-width:var(--fa-counter-min-width, 1.5em);overflow:hidden;padding:var(--fa-counter-padding, .25em .5em);right:var(--fa-right, 0);text-overflow:ellipsis;top:var(--fa-top, 0);transform:scale(var(--fa-counter-scale, .25));transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom, 0);right:var(--fa-right, 0);top:auto;transform:scale(var(--fa-layers-scale, .25));transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom, 0);left:var(--fa-left, 0);right:auto;top:auto;transform:scale(var(--fa-layers-scale, .25));transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top, 0);right:var(--fa-right, 0);transform:scale(var(--fa-layers-scale, .25));transform-origin:top right}.fa-layers-top-left{left:var(--fa-left, 0);right:auto;top:var(--fa-top, 0);transform:scale(var(--fa-layers-scale, .25));transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin, 2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(-1 * var(--fa-li-width, 2em));position:absolute;text-align:center;width:var(--fa-li-width, 2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color, #eee);border-radius:var(--fa-border-radius, .1em);border-style:var(--fa-border-style, solid);border-width:var(--fa-border-width, .08em);padding:var(--fa-border-padding, .2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin, .3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin, .3em)}.fa-beat{animation-name:fa-beat;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, ease-in-out)}.fa-bounce{animation-name:fa-bounce;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, cubic-bezier(.28, .84, .42, 1))}.fa-fade{animation-name:fa-fade;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, cubic-bezier(.4, 0, .6, 1))}.fa-beat-fade{animation-name:fa-beat-fade;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, cubic-bezier(.4, 0, .6, 1))}.fa-flip{animation-name:fa-flip;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, ease-in-out)}.fa-shake{animation-name:fa-shake;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, linear)}.fa-spin{animation-name:fa-spin;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 2s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, linear)}.fa-spin-reverse{--fa-animation-direction: reverse}.fa-pulse,.fa-spin-pulse{animation-name:fa-spin;animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, steps(8))}@media (prefers-reduced-motion: reduce){.fa-beat,.fa-bounce,.fa-fade,.fa-beat-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{animation-delay:-1ms;animation-duration:1ms;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@keyframes fa-beat{0%,90%{transform:scale(1)}45%{transform:scale(var(--fa-beat-scale, 1.25))}}@keyframes fa-bounce{0%{transform:scale(1) translateY(0)}10%{transform:scale(var(--fa-bounce-start-scale-x, 1.1),var(--fa-bounce-start-scale-y, .9)) translateY(0)}30%{transform:scale(var(--fa-bounce-jump-scale-x, .9),var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -.5em))}50%{transform:scale(var(--fa-bounce-land-scale-x, 1.05),var(--fa-bounce-land-scale-y, .95)) translateY(0)}57%{transform:scale(1) translateY(var(--fa-bounce-rebound, -.125em))}64%{transform:scale(1) translateY(0)}to{transform:scale(1) translateY(0)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity, .4)}}@keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity, .4);transform:scale(1)}50%{opacity:1;transform:scale(var(--fa-beat-fade-scale, 1.125))}}@keyframes fa-flip{50%{transform:rotate3d(var(--fa-flip-x, 0),var(--fa-flip-y, 1),var(--fa-flip-z, 0),var(--fa-flip-angle, -180deg))}}@keyframes fa-shake{0%{transform:rotate(-15deg)}4%{transform:rotate(15deg)}8%,24%{transform:rotate(-18deg)}12%,28%{transform:rotate(18deg)}16%{transform:rotate(-22deg)}20%{transform:rotate(22deg)}32%{transform:rotate(-12deg)}36%{transform:rotate(12deg)}40%,to{transform:rotate(0)}}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.fa-rotate-90{transform:rotate(90deg)}.fa-rotate-180{transform:rotate(180deg)}.fa-rotate-270{transform:rotate(270deg)}.fa-flip-horizontal{transform:scaleX(-1)}.fa-flip-vertical{transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1)}.fa-rotate-by{transform:rotate(var(--fa-rotate-angle, 0))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index, auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse, #fff)}.sr-only,.fa-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.sr-only-focusable:not(:focus),.fa-sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color, currentColor);opacity:var(--fa-primary-opacity, 1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color, currentColor);opacity:var(--fa-secondary-opacity, .4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity, .4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity, 1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}html{-webkit-text-size-adjust:100%;box-sizing:border-box;-moz-tab-size:4;tab-size:4;word-break:normal}*,:after,:before{background-repeat:no-repeat;box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}*{margin:0;padding:0}hr{color:inherit;height:0;overflow:visible}details,main{display:block}summary{display:list-item}small{font-size:80%}[hidden]{display:none}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}a{background-color:transparent}a:active,a:hover{outline-width:0}code,kbd,pre,samp{font-family:monospace,monospace}pre{font-size:1em}b,strong{font-weight:bolder}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-color:inherit;text-indent:0}iframe{border-style:none}input{border-radius:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{overflow:auto;resize:vertical}button,input,optgroup,select,textarea{font:inherit}optgroup{font-weight:700}button{overflow:visible}button,select{text-transform:none}[role=button],[type=button],[type=reset],[type=submit],button{cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button:-moz-focusring{outline:1px dotted ButtonText}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}button,input,select,textarea{background-color:transparent;border-style:none}a:focus,button:focus,input:focus,select:focus,textarea:focus{outline-width:0}select{-moz-appearance:none;-webkit-appearance:none}select::-ms-expand{display:none}select::-ms-value{color:currentColor}legend{border:0;color:inherit;display:table;max-width:100%;white-space:normal}::-webkit-file-upload-button{-webkit-appearance:button;color:inherit;font:inherit}[disabled]{cursor:default}img{border-style:none}progress{vertical-align:baseline}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled=true]{cursor:default}h6,.h6,h5,.h5,h4,.h4,h3,.h3,h2,.h2,h1,.h1{font-family:Sora,"sans-serif";color:var(--recia-body);margin-bottom:var(--recia-font-size-base)}h1,.h1{font-size:var(--recia-font-size-h1);font-weight:700}h2,.h2{font-size:var(--recia-font-size-h2);font-weight:700}h3,.h3{font-size:var(--recia-font-size-h3);font-weight:600}h4,.h4{font-size:var(--recia-font-size-h4);font-weight:600}h5,.h5{font-size:var(--recia-font-size-h5)}h6,.h6{font-size:var(--recia-font-size-h6)}.tag,.btn,.btn-tertiary,.btn-secondary,.btn-primary{color:inherit;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;column-gap:8px;text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;user-select:none;border-radius:50px}.btn,.btn-tertiary,.btn-secondary,.btn-primary{padding:12px 24px;font-family:Sora,"sans-serif";font-weight:600;font-size:var(--recia-font-size-md)}.btn-primary{background-color:var(--recia-btn-primary-bg);color:var(--recia-btn-primary)}.btn-primary:active{background-color:var(--recia-btn-primary-pressed)!important}.btn-primary:hover,.btn-primary:focus-visible{background-color:var(--recia-primary)}.btn-primary:focus-visible{outline:4px solid rgba(from var(--recia-primary) r g b/.3)}.btn-primary:disabled,.btn-primary.disabled{opacity:.33;pointer-events:none}.btn-primary.circle{border-radius:50%;width:44px;height:44px;padding:12px}.btn-primary.small{padding:8px 16px;font-size:var(--recia-font-size-sm)}.btn-primary.small.circle{border-radius:50%;width:34px;height:34px;padding:8px}.btn-secondary{background-color:var(--recia-btn-secondary-bg);color:var(--recia-btn-secondary)}.btn-secondary:active{background-color:var(--recia-btn-secondary-pressed)!important;color:var(--recia-primary)!important}.btn-secondary:hover,.btn-secondary:focus-visible{background-color:var(--recia-btn-secondary-hover);color:var(--recia-primary)}.btn-secondary:focus-visible{outline:4px solid var(--recia-primary)}.btn-secondary:disabled,.btn-secondary.disabled{opacity:.33;pointer-events:none}.btn-secondary.circle{border-radius:50%;width:44px;height:44px;padding:12px}.btn-secondary.small{padding:8px 16px;font-size:var(--recia-font-size-sm)}.btn-secondary.small.circle{border-radius:50%;width:34px;height:34px;padding:8px}.btn-tertiary{padding:8px 16px;font-family:DM Sans,"sans-serif";font-weight:600;font-size:var(--recia-font-size-sm);color:var(--recia-btn-secondary)}.btn-tertiary:hover,.btn-tertiary:focus-visible{background-color:var(--recia-body-bg);color:var(--recia-primary);text-decoration:underline}.btn-tertiary:focus-visible{outline:4px solid var(--recia-primary)}.btn-tertiary:disabled,.btn-tertiary.disabled{opacity:.5;pointer-events:none}.btn-tertiary.circle{border-radius:50%;width:34px;height:34px;padding:8px}.tag{padding:8px 16px;font-family:DM Sans,"sans-serif";font-weight:500;font-size:var(--recia-font-size-sm)}.tag.active{background-color:var(--recia-basic-black);color:#fff}.tag.active:hover{background-color:var(--recia-primary)}.tag.active:focus-visible{background-color:var(--recia-primary);color:var(--recia-white);outline:3px solid rgba(from var(--recia-primary) r g b/.3)}.tag:not(.active):hover{background-color:var(--recia-btn-secondary-hover);color:var(--recia-primary)}.tag:not(.active):focus-visible{background-color:var(--recia-btn-secondary-hover);color:var(--recia-primary);outline:3px solid var(--recia-primary)}.tag:disabled,.tag.disabled{opacity:.33;pointer-events:none}.tag.circle{border-radius:50%;width:34px;height:34px;padding:8px}.tag.small{padding:4px 12px}.tag.small.circle{width:26px;height:26px;padding:4px}.service-info>.content>section>ul>li>a:hover,.service-info>.content>section>ul>li>a:focus-visible{color:var(--recia-system-blue)}.service-info>.content>section>ul>li>a:focus-visible{outline:2px dotted var(--recia-system-blue);padding:4px 8px;margin:-4px -8px;border-radius:50px}.service-info>.content>section>p>a{color:inherit}.service-info>.content>section>p>a:hover,.service-info>.content>section>p>a:focus-visible{outline:none;color:var(--recia-system-blue)}.service-info>.content>section>p>a:focus-visible{font-weight:700;text-decoration:underline 2px}*{box-sizing:border-box}.grow-1{flex-grow:1}.service-info>header>.heading{display:flex;column-gap:6px;margin-bottom:16px}.service-info>header>.heading>.heading-logo{flex:0 0 auto;height:100px;width:100px;opacity:.2}.service-info>header>.heading>.heading-logo>image{width:100%;height:100%}.service-info>header>.heading>.heading-text>h1{margin:0}.service-info>header>.heading>.heading-text>.origin{display:block;font-style:italic;font-size:var(--recia-font-size-sm);line-height:150%}.service-info>header>.heading>.heading-text>.category{margin-top:9px;display:inline-flex;font-size:var(--recia-font-size-xs);font-weight:500;padding:4px 10px;border-radius:13px;background-color:var(--recia-stroke)}.service-info>header>.heading>.heading-text>.category.documentation{background-color:var(--recia-documentation);color:var(--recia-documentation-text)}.service-info>header>.heading>.heading-text>.category.collaboratif{background-color:var(--recia-collaboratif);color:var(--recia-collaboratif-text)}.service-info>header>.heading>.heading-text>.category.apprentissage{background-color:var(--recia-apprentissage);color:var(--recia-apprentissage-text)}.service-info>header>.heading>.heading-text>.category.vie-scolaire{background-color:var(--recia-vie-scolaire);color:var(--recia-vie-scolaire-text)}.service-info>header>.heading>.heading-text>.category.orientation{background-color:var(--recia-orientation);color:var(--recia-orientation-text)}.service-info>header>.heading>.heading-text>.category.parametres{background-color:var(--recia-parametres);color:var(--recia-parametres-text)}.service-info>header>.heading>.heading-text>.category.communication{background-color:var(--recia-communication);color:var(--recia-communication-text)}.service-info>header>a,.service-info>header>button{width:100%}.service-info>.content{display:flex;flex-direction:column;gap:24px 58px;padding:24px 0}.service-info>.content>section>p{line-height:150%}.service-info>.content>section>ul{padding-left:0;list-style:none}.service-info>.content>section>ul>li>a{color:var(--recia-system-blue);line-height:250%}.service-info>.content>section>.video{display:flex;align-items:center;border-radius:4px;overflow:hidden}.service-info>.content>section>.video>*{aspect-ratio:16/9;width:100%;height:auto}.service-info>.content>section.tutorials>a,.service-info>.content>section.tutorials>button{margin-top:16px;font-size:unset}.service-info>footer{display:flex;flex-direction:column;gap:16px}.service-info>footer>a,.service-info>footer>button{width:100%}.service-info>footer>a.launch>svg,.service-info>footer>button.launch>svg{display:none}@media (width >= 768px){.service-info>header{display:flex;align-items:center;justify-content:space-between;padding-right:24px}.service-info>header>.heading{margin:0}.service-info>header>a,.service-info>header>button{width:unset}.service-info>.content{flex-direction:row;flex-wrap:wrap;padding:24px}.service-info>.content>section.description{flex:1 0 100%}.service-info>.content>section.description>h2{display:none}.service-info>.content>section.first-step,.service-info>.content>section.tutorials{flex:1 0 45%}.service-info>.content>section>ul>li>a{font-weight:700}.service-info>footer{flex-direction:row;justify-content:space-between;padding-top:32px}.service-info>footer>a,.service-info>footer>button{width:unset}.service-info>footer>a.launch>svg,.service-info>footer>button.launch>svg{display:unset}}';function Zt(e){return wo`${Ki(e).node[0]}`}const cl=(e,t,n)=>{const a=e[t];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((r,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==n?". Note that variables only represent file names one level deep.":""))))})},{setLocale:fl}=lo({sourceLocale:Ze,targetLocales:ol,loadLocale:e=>cl(Object.assign({"../generated/locales/en.ts":()=>Promise.resolve().then(()=>gl)}),`../generated/locales/${e}.ts`,4)});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Je extends We{constructor(t){if(super(t),this.it=v,t.type!==Fa.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===v||t==null)return this._t=void 0,this.it=t;if(t===W)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Je.directiveName="unsafeHTML",Je.resultType=1;const ul=Ye(Je);var dl=Object.defineProperty,hl=Object.getOwnPropertyDescriptor,C=(e,t,n,a)=>{for(var r=a>1?void 0:a?hl(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(r=(a?o(t,n,r):o(r))||r);return a&&r&&dl(t,n,r),r};const ml=Uo(Ho);var Ka=(e=>(e.native="native",e.external="external",e))(Ka||{}),Za=(e=>(e.documentation="documentation",e.collaboratif="collaboratif",e.apprentissage="apprentissage",e.vieScolaire="vie-scolaire",e.orientation="orientation",e.parametres="parametres",e.communication="communication",e))(Za||{});x.ReciaServiceMoreLayout=class extends Et{constructor(){super(),this.name="",this.isFavorite=!1,this.description="",this.video="",this.tutorials=[],la.add(fa,Oe),la.add(ca);const t=Kt.getPageLang();fl(t),Kt.setLocale(t),ma(this)}static i18nOrigin(){return{native:_(g`Sercice natif`),external:_(g`Service externe`)}}static i18nCategory(){return{documentation:_(g`Documentation`),collaboratif:_(g`Collaboratif`),apprentissage:_(g`Apprentissage`),"vie-scolaire":_(g`Vie scolaire`),orientation:_(g`Orientation`),parametres:_(g`Paramètres`),communication:_(g`Communication`)}}toggleFavorite(){this.isFavorite=!this.isFavorite,this.dispatchEvent(new CustomEvent("toggle-favorite",{detail:{favorite:this.isFavorite}}))}videoTemplate(){return this.video?P`
        <section class="first-step">
          <h2 class="h3">${_(g`Premiers pas avec le service`)}</h2>
          <div class="video">
            <iframe
              src="${this.video}"
              width="640"
              height="360"
              allowfullscreen
            >
            </iframe>
          </div>
        </section>
        `:v}tutorialsTemplate(){return this.tutorials.length>0?P`
        <section class="tutorials">
          <h2 class="h3">${_(g`Tutoriels disponibles (${this.tutorials.length})`)}</h2>
          <ul>
            ${Ro(this.tutorials,t=>t,t=>P`
                  <li>
                    <a
                      href="${t.href}"
                      target="${t.target??v}"
                      rel="${t.rel??v}"
                    >
                      ${t.name}
                    </a>
                  </li>
                `)}
          </ul>
          ${this.tutorialsLink?P`
                <a
                  href="${this.tutorialsLink.href}"
                  class="btn-secondary small"
                >
                  Voir tous les tutoriels
                  ${Zt(Oe)}
                </a>
              `:v}
        </section>
        `:v}render(){return P`
      <div class="service-info">
        <header>
          <div class="heading">
            ${this.iconUrl?P`
                    <svg class="heading-logo" aria-hidden="true">
                      <use href="${this.iconUrl}"></use>
                    </svg>
                  `:v}
            <div class="heading-text">
              <h1>${this.name}</h1>
              ${this.origin&&Object.values(Ka).includes(this.origin)?P`
                      <span class="origin">
                        ${x.ReciaServiceMoreLayout.i18nOrigin()[this.origin]}
                      </span>
                    `:v}
              ${this.category&&Object.values(Za).includes(this.category)?P`
                      <span class="category ${this.category}">${x.ReciaServiceMoreLayout.i18nCategory()[this.category]}</span>
                    `:v}
            </div>
          </div>
          <button
            class="btn-secondary"
            @click="${()=>this.toggleFavorite()}"
          >
            ${Do(this.isFavorite,this.isFavorite?P`
                    ${Zt(fa)}
                    ${_(g`Retirer des favoris`)}
                    `:P`
                    ${Zt(ca)}
                    ${_(g`Ajouter aux favoris`)}
                    `)}
          </button>
        </header>
        <div class="content">
          <section class="description">
            <h2 class="h3">${_(g`Description`)}</h2>
            <p>${ul(this.description)}</p>
          </section>
          ${this.videoTemplate()}
          ${this.tutorialsTemplate()}
        </div>
        <footer>
          <button
            class="btn-secondary close"
            @click="${()=>this.dispatchEvent(new CustomEvent("close"))}"
          >
            ${_(g`Fermer`)}
          </button>
          ${this.launchLink?P`
                <a href="${this.launchLink.href}"
                  target="${this.launchLink.target??v}"
                  rel="${this.launchLink.rel??v}"
                  class="btn-primary launch"
                >
                  ${_(g`Lancer le service`)}
                  ${Zt(Oe)}
                </a>
              `:v}
        </footer>
      </div>
    `}},x.ReciaServiceMoreLayout.styles=uo`${Aa(ll)}`,C([M({type:String,attribute:"icon-url"})],x.ReciaServiceMoreLayout.prototype,"iconUrl",2),C([M({type:String})],x.ReciaServiceMoreLayout.prototype,"name",2),C([M({type:String})],x.ReciaServiceMoreLayout.prototype,"origin",2),C([M({type:String})],x.ReciaServiceMoreLayout.prototype,"category",2),C([M({type:Boolean,attribute:"favorite",reflect:!0})],x.ReciaServiceMoreLayout.prototype,"isFavorite",2),C([M({type:String})],x.ReciaServiceMoreLayout.prototype,"description",2),C([M({type:String})],x.ReciaServiceMoreLayout.prototype,"video",2),C([M({type:Array})],x.ReciaServiceMoreLayout.prototype,"tutorials",2),C([M({type:Object,attribute:"tutorials-link"})],x.ReciaServiceMoreLayout.prototype,"tutorialsLink",2),C([M({type:Object,attribute:"launch-link"})],x.ReciaServiceMoreLayout.prototype,"launchLink",2),x.ReciaServiceMoreLayout=C([to(),To(ml)],x.ReciaServiceMoreLayout);const pl={s47ebf3a8fb3b10c1:g`Orientation`,s47eeeccf4ffc41c3:g`Communication`,s4812aa6f72fa88df:g`Available tutorials (${0})`,s4a214cbd6c588dd3:g`Learning`,s63d894b1ddb06289:g`Description`,s74cb3d66f6a668e1:g`Documentation`,s8e501f157694decd:g`Native service`,s91fb0e685cae0940:g`Remove from favorites`,s9f48ad36dc7d460f:g`Add to favorites`,sc0c87afaac2a5993:g`School life`,scd3518ecedad7590:g`Parameters`,sde5d5a164cc22567:g`Collaborative`,sf0da99a184bafb7e:g`Close`,sfaa072ad346ce9d6:g`Launch service`,sfb9d2d8c7ef581a9:g`External service`,sfde5e3a793d980c1:g`First steps with the service`},gl=Object.freeze(Object.defineProperty({__proto__:null,templates:pl},Symbol.toStringTag,{value:"Module"}));return Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}),x}({});
//# sourceMappingURL=r-service-info-layout.js.map
