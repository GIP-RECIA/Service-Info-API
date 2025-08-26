var rServiceInfoLayout=function(x){"use strict";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Va={prefix:"far",iconName:"star",icon:[576,512,[11088,61446],"f005","M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Xa={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Qe={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=(t,...e)=>({strTag:!0,strings:t,values:e}),qa=t=>typeof t!="string"&&"strTag"in t,tn=(t,e,n)=>{let a=t[0];for(let i=1;i<t.length;i++)a+=e[n?n[i-1]:i-1],a+=t[i];return a};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const en=t=>qa(t)?tn(t.strings,t.values):t;let w=en,nn=!1;function Ka(t){if(nn)throw new Error("lit-localize can only be configured once");w=t,nn=!0}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Za{constructor(e){this.__litLocalizeEventHandler=n=>{n.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(Jt,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Jt,this.__litLocalizeEventHandler)}}const an=t=>t.addController(new Za(t));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ja=()=>(t,e)=>(t.addInitializer(an),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rn{constructor(){this.settled=!1,this.promise=new Promise((e,n)=>{this._resolve=e,this._reject=n})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const z=[];for(let t=0;t<256;t++)z[t]=(t>>4&15).toString(16)+(t&15).toString(16);function Qa(t){let e=0,n=8997,a=0,i=33826,r=0,o=40164,s=0,c=52210;for(let f=0;f<t.length;f++)n^=t.charCodeAt(f),e=n*435,a=i*435,r=o*435,s=c*435,r+=n<<8,s+=i<<8,a+=e>>>16,n=e&65535,r+=a>>>16,i=a&65535,c=s+(r>>>16)&65535,o=r&65535;return z[c>>8]+z[c&255]+z[o>>8]+z[o&255]+z[i>>8]+z[i&255]+z[n>>8]+z[n&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ti="",ei="h",ni="s";function ai(t,e){return(e?ei:ni)+Qa(typeof t=="string"?t:t.join(ti))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const on=new WeakMap,sn=new Map;function ii(t,e,n){if(t){const a=n?.id??ri(e),i=t[a];if(i){if(typeof i=="string")return i;if("strTag"in i)return tn(i.strings,e.values,i.values);{let r=on.get(i);return r===void 0&&(r=i.values,on.set(i,r)),{...i,values:r.map(o=>e.values[o])}}}}return en(e)}function ri(t){const e=typeof t=="string"?t:t.strings;let n=sn.get(e);return n===void 0&&(n=ai(e,typeof t!="string"&&!("strTag"in t)),sn.set(e,n)),n}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qt(t){window.dispatchEvent(new CustomEvent(Jt,{detail:t}))}let Ct="",te,cn,Pt,ee,ln,B=new rn;B.resolve();let Ot=0;const oi=t=>(Ka((e,n)=>ii(ln,e,n)),Ct=cn=t.sourceLocale,Pt=new Set(t.targetLocales),Pt.add(t.sourceLocale),ee=t.loadLocale,{getLocale:si,setLocale:ci}),si=()=>Ct,ci=t=>{if(t===(te??Ct))return B.promise;if(!Pt||!ee)throw new Error("Internal error");if(!Pt.has(t))throw new Error("Invalid locale code");Ot++;const e=Ot;return te=t,B.settled&&(B=new rn),Qt({status:"loading",loadingLocale:t}),(t===cn?Promise.resolve({templates:void 0}):ee(t)).then(a=>{Ot===e&&(Ct=t,te=void 0,ln=a.templates,Qt({status:"ready",readyLocale:t}),B.resolve())},a=>{Ot===e&&(Qt({status:"error",errorLocale:t,errorMessage:a.toString()}),B.reject(a))}),B.promise};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=globalThis,ne=Tt.ShadowRoot&&(Tt.ShadyCSS===void 0||Tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ae=Symbol(),fn=new WeakMap;let un=class{constructor(e,n,a){if(this._$cssResult$=!0,a!==ae)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(ne&&e===void 0){const a=n!==void 0&&n.length===1;a&&(e=fn.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&fn.set(n,e))}return e}toString(){return this.cssText}};const dn=t=>new un(typeof t=="string"?t:t+"",void 0,ae),li=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((a,i,r)=>a+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new un(n,t,ae)},fi=(t,e)=>{if(ne)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const a=document.createElement("style"),i=Tt.litNonce;i!==void 0&&a.setAttribute("nonce",i),a.textContent=n.cssText,t.appendChild(a)}},hn=ne?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const a of e.cssRules)n+=a.cssText;return dn(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ui,defineProperty:di,getOwnPropertyDescriptor:hi,getOwnPropertyNames:pi,getOwnPropertySymbols:mi,getPrototypeOf:gi}=Object,Lt=globalThis,pn=Lt.trustedTypes,bi=pn?pn.emptyScript:"",vi=Lt.reactiveElementPolyfillSupport,dt=(t,e)=>t,It={toAttribute(t,e){switch(e){case Boolean:t=t?bi:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},ie=(t,e)=>!ui(t,e),mn={attribute:!0,type:String,converter:It,reflect:!1,useDefault:!1,hasChanged:ie};Symbol.metadata??=Symbol("metadata"),Lt.litPropertyMetadata??=new WeakMap;let et=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=mn){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(e,a,n);i!==void 0&&di(this.prototype,e,i)}}static getPropertyDescriptor(e,n,a){const{get:i,set:r}=hi(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get:i,set(o){const s=i?.call(this);r?.call(this,o),this.requestUpdate(e,s,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??mn}static _$Ei(){if(this.hasOwnProperty(dt("elementProperties")))return;const e=gi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(dt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(dt("properties"))){const n=this.properties,a=[...pi(n),...mi(n)];for(const i of a)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[a,i]of n)this.elementProperties.set(a,i)}this._$Eh=new Map;for(const[n,a]of this.elementProperties){const i=this._$Eu(n,a);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const i of a)n.unshift(hn(i))}else e!==void 0&&n.push(hn(e));return n}static _$Eu(e,n){const a=n.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const a of n.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,a){this._$AK(e,a)}_$ET(e,n){const a=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,a);if(i!==void 0&&a.reflect===!0){const r=(a.converter?.toAttribute!==void 0?a.converter:It).toAttribute(n,a.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,n){const a=this.constructor,i=a._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const r=a.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:It;this._$Em=i,this[i]=o.fromAttribute(n,r.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(e,n,a){if(e!==void 0){const i=this.constructor,r=this[e];if(a??=i.getPropertyOptions(e),!((a.hasChanged??ie)(r,n)||a.useDefault&&a.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,a))))return;this.C(e,n,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:a,reflect:i,wrapped:r},o){a&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??n??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||a||(n=void 0),this._$AL.set(e,n)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[i,r]of a){const{wrapped:o}=r,s=this[i];o!==!0||this._$AL.has(i)||s===void 0||this.C(i,void 0,r,s)}}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(a=>a.hostUpdate?.()),this.update(n)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};et.elementStyles=[],et.shadowRootOptions={mode:"open"},et[dt("elementProperties")]=new Map,et[dt("finalized")]=new Map,vi?.({ReactiveElement:et}),(Lt.reactiveElementVersions??=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=globalThis,zt=re.trustedTypes,gn=zt?zt.createPolicy("lit-html",{createHTML:t=>t}):void 0,bn="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,vn="?"+R,yi=`<${vn}>`,G=document,ht=()=>G.createComment(""),pt=t=>t===null||typeof t!="object"&&typeof t!="function",oe=Array.isArray,xi=t=>oe(t)||typeof t?.[Symbol.iterator]=="function",se=`[ 	
\f\r]`,mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yn=/-->/g,xn=/>/g,V=RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wn=/'/g,An=/"/g,_n=/^(?:script|style|textarea|title)$/i,Sn=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),C=Sn(1),wi=Sn(2),D=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),$n=new WeakMap,X=G.createTreeWalker(G,129);function kn(t,e){if(!oe(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return gn!==void 0?gn.createHTML(e):e}const Ai=(t,e)=>{const n=t.length-1,a=[];let i,r=e===2?"<svg>":e===3?"<math>":"",o=mt;for(let s=0;s<n;s++){const c=t[s];let f,h,d=-1,m=0;for(;m<c.length&&(o.lastIndex=m,h=o.exec(c),h!==null);)m=o.lastIndex,o===mt?h[1]==="!--"?o=yn:h[1]!==void 0?o=xn:h[2]!==void 0?(_n.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=V):h[3]!==void 0&&(o=V):o===V?h[0]===">"?(o=i??mt,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,f=h[1],o=h[3]===void 0?V:h[3]==='"'?An:wn):o===An||o===wn?o=V:o===yn||o===xn?o=mt:(o=V,i=void 0);const g=o===V&&t[s+1].startsWith("/>")?" ":"";r+=o===mt?c+yi:d>=0?(a.push(f),c.slice(0,d)+bn+c.slice(d)+R+g):c+R+(d===-2?s:g)}return[kn(t,r+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),a]};class gt{constructor({strings:e,_$litType$:n},a){let i;this.parts=[];let r=0,o=0;const s=e.length-1,c=this.parts,[f,h]=Ai(e,n);if(this.el=gt.createElement(f,a),X.currentNode=this.el.content,n===2||n===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=X.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(bn)){const m=h[o++],g=i.getAttribute(d).split(R),v=/([.?@])?(.*)/.exec(m);c.push({type:1,index:r,name:v[2],strings:g,ctor:v[1]==="."?Si:v[1]==="?"?$i:v[1]==="@"?ki:Nt}),i.removeAttribute(d)}else d.startsWith(R)&&(c.push({type:6,index:r}),i.removeAttribute(d));if(_n.test(i.tagName)){const d=i.textContent.split(R),m=d.length-1;if(m>0){i.textContent=zt?zt.emptyScript:"";for(let g=0;g<m;g++)i.append(d[g],ht()),X.nextNode(),c.push({type:2,index:++r});i.append(d[m],ht())}}}else if(i.nodeType===8)if(i.data===vn)c.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf(R,d+1))!==-1;)c.push({type:7,index:r}),d+=R.length-1}r++}}static createElement(e,n){const a=G.createElement("template");return a.innerHTML=e,a}}function nt(t,e,n=t,a){if(e===D)return e;let i=a!==void 0?n._$Co?.[a]:n._$Cl;const r=pt(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(t),i._$AT(t,n,a)),a!==void 0?(n._$Co??=[])[a]=i:n._$Cl=i),i!==void 0&&(e=nt(t,i._$AS(t,e.values),i,a)),e}let _i=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:a}=this._$AD,i=(e?.creationScope??G).importNode(n,!0);X.currentNode=i;let r=X.nextNode(),o=0,s=0,c=a[0];for(;c!==void 0;){if(o===c.index){let f;c.type===2?f=new at(r,r.nextSibling,this,e):c.type===1?f=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(f=new Ei(r,this,e)),this._$AV.push(f),c=a[++s]}o!==c?.index&&(r=X.nextNode(),o++)}return X.currentNode=G,i}p(e){let n=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,n),n+=a.strings.length-2):a._$AI(e[n])),n++}};class at{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,a,i){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=a,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=nt(this,e,n),pt(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):xi(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&pt(this._$AH)?this._$AA.nextSibling.data=e:this.T(G.createTextNode(e)),this._$AH=e}$(e){const{values:n,_$litType$:a}=e,i=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=gt.createElement(kn(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(n);else{const r=new _i(i,this),o=r.u(this.options);r.p(n),this.T(o),this._$AH=r}}_$AC(e){let n=$n.get(e.strings);return n===void 0&&$n.set(e.strings,n=new gt(e)),n}k(e){oe(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let a,i=0;for(const r of e)i===n.length?n.push(a=new at(this.O(ht()),this.O(ht()),this,this.options)):a=n[i],a._$AI(r),i++;i<n.length&&(this._$AR(a&&a._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e&&e!==this._$AB;){const a=e.nextSibling;e.remove(),e=a}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,a,i,r){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=r,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=b}_$AI(e,n=this,a,i){const r=this.strings;let o=!1;if(r===void 0)e=nt(this,e,n,0),o=!pt(e)||e!==this._$AH&&e!==D,o&&(this._$AH=e);else{const s=e;let c,f;for(e=r[0],c=0;c<r.length-1;c++)f=nt(this,s[a+c],n,c),f===D&&(f=this._$AH[c]),o||=!pt(f)||f!==this._$AH[c],f===b?e=b:e!==b&&(e+=(f??"")+r[c+1]),this._$AH[c]=f}o&&!i&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Si extends Nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}class $i extends Nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}}let ki=class extends Nt{constructor(e,n,a,i,r){super(e,n,a,i,r),this.type=5}_$AI(e,n=this){if((e=nt(this,e,n,0)??b)===D)return;const a=this._$AH,i=e===b&&a!==b||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,r=e!==b&&(a===b||i);i&&this.element.removeEventListener(this.name,this,a),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};class Ei{constructor(e,n,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){nt(this,e)}}const Ci={I:at},Pi=re.litHtmlPolyfillSupport;Pi?.(gt,at),(re.litHtmlVersions??=[]).push("3.3.0");const Oi=(t,e,n)=>{const a=n?.renderBefore??e;let i=a._$litPart$;if(i===void 0){const r=n?.renderBefore??null;a._$litPart$=i=new at(e.insertBefore(ht(),r),r,void 0,n??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=globalThis;let bt=class extends et{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oi(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};bt._$litElement$=!0,bt.finalized=!0,ce.litElementHydrateSupport?.({LitElement:bt});const Ti=ce.litElementPolyfillSupport;Ti?.({LitElement:bt}),(ce.litElementVersions??=[]).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Li={attribute:!0,type:String,converter:It,reflect:!1,hasChanged:ie},Ii=(t=Li,e,n)=>{const{kind:a,metadata:i}=n;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),a==="setter"&&((t=Object.create(t)).wrapped=!0),r.set(n.name,t),a==="accessor"){const{name:o}=n;return{set(s){const c=e.get.call(this);e.set.call(this,s),this.requestUpdate(o,c,t)},init(s){return s!==void 0&&this.C(o,void 0,t,s),s}}}if(a==="setter"){const{name:o}=n;return function(s){const c=this[o];e.call(this,s),this.requestUpdate(o,c,t)}}throw Error("Unsupported decorator location: "+a)};function P(t){return(e,n)=>typeof n=="object"?Ii(t,e,n):((a,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,a),o?Object.getOwnPropertyDescriptor(i,r):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const En={CHILD:2},le=t=>(...e)=>({_$litDirective$:t,values:e});let fe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,a){this._$Ct=e,this._$AM=n,this._$Ci=a}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:zi}=Ci,Cn=()=>document.createComment(""),vt=(t,e,n)=>{const a=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(n===void 0){const r=a.insertBefore(Cn(),i),o=a.insertBefore(Cn(),i);n=new zi(r,o,t,t.options)}else{const r=n._$AB.nextSibling,o=n._$AM,s=o!==t;if(s){let c;n._$AQ?.(t),n._$AM=t,n._$AP!==void 0&&(c=t._$AU)!==o._$AU&&n._$AP(c)}if(r!==i||s){let c=n._$AA;for(;c!==r;){const f=c.nextSibling;a.insertBefore(c,i),c=f}}}return n},q=(t,e,n=t)=>(t._$AI(e,n),t),Ni={},Pn=(t,e=Ni)=>t._$AH=e,Mi=t=>t._$AH,ue=t=>{t._$AP?.(!1,!0);let e=t._$AA;const n=t._$AB.nextSibling;for(;e!==n;){const a=e.nextSibling;e.remove(),e=a}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fi=le(class extends fe{constructor(){super(...arguments),this.key=b}render(t,e){return this.key=t,e}update(t,[e,n]){return e!==this.key&&(Pn(t),this.key=e),n}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const On=(t,e,n)=>{const a=new Map;for(let i=e;i<=n;i++)a.set(t[i],i);return a},Ri=le(class extends fe{constructor(t){if(super(t),t.type!==En.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let a;n===void 0?n=e:e!==void 0&&(a=e);const i=[],r=[];let o=0;for(const s of t)i[o]=a?a(s,o):o,r[o]=n(s,o),o++;return{values:r,keys:i}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,a]){const i=Mi(t),{values:r,keys:o}=this.dt(e,n,a);if(!Array.isArray(i))return this.ut=o,r;const s=this.ut??=[],c=[];let f,h,d=0,m=i.length-1,g=0,v=r.length-1;for(;d<=m&&g<=v;)if(i[d]===null)d++;else if(i[m]===null)m--;else if(s[d]===o[g])c[g]=q(i[d],r[g]),d++,g++;else if(s[m]===o[v])c[v]=q(i[m],r[v]),m--,v--;else if(s[d]===o[v])c[v]=q(i[d],r[v]),vt(t,c[v+1],i[d]),d++,v--;else if(s[m]===o[g])c[g]=q(i[m],r[g]),vt(t,i[d],i[m]),m--,g++;else if(f===void 0&&(f=On(o,g,v),h=On(s,d,m)),f.has(s[d]))if(f.has(s[m])){const A=h.get(o[g]),S=A!==void 0?i[A]:null;if(S===null){const O=vt(t,i[d]);q(O,r[g]),c[g]=O}else c[g]=q(S,r[g]),vt(t,i[d],S),i[A]=null;g++}else ue(i[m]),m--;else ue(i[d]),d++;for(;g<=v;){const A=vt(t,c[v+1]);q(A,r[g]),c[g++]=A}for(;d<=m;){const A=i[d++];A!==null&&ue(A)}return this.ut=o,Pn(t,c),D}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class de extends fe{constructor(e){if(super(e),this.it=b,e.type!==En.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===b||e==null)return this._t=void 0,this.it=e;if(e===D)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}de.directiveName="unsafeHTML",de.resultType=1;const Di=le(de),ji="r-";function Ui(t){return`${ji}${t}`}var Hi=typeof global=="object"&&global&&global.Object===Object&&global,Yi=typeof self=="object"&&self&&self.Object===Object&&self,he=Hi||Yi||Function("return this")(),it=he.Symbol,Tn=Object.prototype,Wi=Tn.hasOwnProperty,Bi=Tn.toString,yt=it?it.toStringTag:void 0;function Gi(t){var e=Wi.call(t,yt),n=t[yt];try{t[yt]=void 0;var a=!0}catch{}var i=Bi.call(t);return a&&(e?t[yt]=n:delete t[yt]),i}var Vi=Object.prototype,Xi=Vi.toString;function qi(t){return Xi.call(t)}var Ki="[object Null]",Zi="[object Undefined]",Ln=it?it.toStringTag:void 0;function In(t){return t==null?t===void 0?Zi:Ki:Ln&&Ln in Object(t)?Gi(t):qi(t)}function Ji(t){return t!=null&&typeof t=="object"}var Qi="[object Symbol]";function pe(t){return typeof t=="symbol"||Ji(t)&&In(t)==Qi}function tr(t,e){for(var n=-1,a=t==null?0:t.length,i=Array(a);++n<a;)i[n]=e(t[n],n,t);return i}var me=Array.isArray,zn=it?it.prototype:void 0,Nn=zn?zn.toString:void 0;function Mn(t){if(typeof t=="string")return t;if(me(t))return tr(t,Mn)+"";if(pe(t))return Nn?Nn.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Fn(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var er="[object AsyncFunction]",nr="[object Function]",ar="[object GeneratorFunction]",ir="[object Proxy]";function rr(t){if(!Fn(t))return!1;var e=In(t);return e==nr||e==ar||e==er||e==ir}var ge=he["__core-js_shared__"],Rn=function(){var t=/[^.]+$/.exec(ge&&ge.keys&&ge.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function or(t){return!!Rn&&Rn in t}var sr=Function.prototype,cr=sr.toString;function lr(t){if(t!=null){try{return cr.call(t)}catch{}try{return t+""}catch{}}return""}var fr=/[\\^$.*+?()[\]{}|]/g,ur=/^\[object .+?Constructor\]$/,dr=Function.prototype,hr=Object.prototype,pr=dr.toString,mr=hr.hasOwnProperty,gr=RegExp("^"+pr.call(mr).replace(fr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function br(t){if(!Fn(t)||or(t))return!1;var e=rr(t)?gr:ur;return e.test(lr(t))}function vr(t,e){return t?.[e]}function Dn(t,e){var n=vr(t,e);return br(n)?n:void 0}function yr(t,e){return t===e||t!==t&&e!==e}var xr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wr=/^\w*$/;function Ar(t,e){if(me(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||pe(t)?!0:wr.test(t)||!xr.test(t)||e!=null&&t in Object(e)}var xt=Dn(Object,"create");function _r(){this.__data__=xt?xt(null):{},this.size=0}function Sr(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var $r="__lodash_hash_undefined__",kr=Object.prototype,Er=kr.hasOwnProperty;function Cr(t){var e=this.__data__;if(xt){var n=e[t];return n===$r?void 0:n}return Er.call(e,t)?e[t]:void 0}var Pr=Object.prototype,Or=Pr.hasOwnProperty;function Tr(t){var e=this.__data__;return xt?e[t]!==void 0:Or.call(e,t)}var Lr="__lodash_hash_undefined__";function Ir(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=xt&&e===void 0?Lr:e,this}function K(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}K.prototype.clear=_r,K.prototype.delete=Sr,K.prototype.get=Cr,K.prototype.has=Tr,K.prototype.set=Ir;function zr(){this.__data__=[],this.size=0}function Mt(t,e){for(var n=t.length;n--;)if(yr(t[n][0],e))return n;return-1}var Nr=Array.prototype,Mr=Nr.splice;function Fr(t){var e=this.__data__,n=Mt(e,t);if(n<0)return!1;var a=e.length-1;return n==a?e.pop():Mr.call(e,n,1),--this.size,!0}function Rr(t){var e=this.__data__,n=Mt(e,t);return n<0?void 0:e[n][1]}function Dr(t){return Mt(this.__data__,t)>-1}function jr(t,e){var n=this.__data__,a=Mt(n,t);return a<0?(++this.size,n.push([t,e])):n[a][1]=e,this}function rt(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}rt.prototype.clear=zr,rt.prototype.delete=Fr,rt.prototype.get=Rr,rt.prototype.has=Dr,rt.prototype.set=jr;var Ur=Dn(he,"Map");function Hr(){this.size=0,this.__data__={hash:new K,map:new(Ur||rt),string:new K}}function Yr(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Ft(t,e){var n=t.__data__;return Yr(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Wr(t){var e=Ft(this,t).delete(t);return this.size-=e?1:0,e}function Br(t){return Ft(this,t).get(t)}function Gr(t){return Ft(this,t).has(t)}function Vr(t,e){var n=Ft(this,t),a=n.size;return n.set(t,e),this.size+=n.size==a?0:1,this}function Z(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}Z.prototype.clear=Hr,Z.prototype.delete=Wr,Z.prototype.get=Br,Z.prototype.has=Gr,Z.prototype.set=Vr;var Xr="Expected a function";function be(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Xr);var n=function(){var a=arguments,i=e?e.apply(this,a):a[0],r=n.cache;if(r.has(i))return r.get(i);var o=t.apply(this,a);return n.cache=r.set(i,o)||r,o};return n.cache=new(be.Cache||Z),n}be.Cache=Z;var qr=500;function Kr(t){var e=be(t,function(a){return n.size===qr&&n.clear(),a}),n=e.cache;return e}var Zr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jr=/\\(\\)?/g,Qr=Kr(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Zr,function(n,a,i,r){e.push(i?r.replace(Jr,"$1"):a||n)}),e});function to(t){return t==null?"":Mn(t)}function eo(t,e){return me(t)?t:Ar(t,e)?[t]:Qr(to(t))}function no(t){if(typeof t=="string"||pe(t))return t;var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function ao(t,e){e=eo(e,t);for(var n=0,a=e.length;t!=null&&n<a;)t=t[no(e[n++])];return n&&n==a?t:void 0}function io(t,e,n){var a=t==null?void 0:ao(t,e);return a===void 0?n:a}const ve="fr",ro=["en"],oo=["en","fr"],Ze=class Ze{static setLocale(e){this.locale=e}static setReference(e){this.reference=e}static getBrowserLocales(e={}){const a={...{languageCodeOnly:!0,defaultLanguage:ve},...e},i=navigator.languages===void 0?[navigator.language]:navigator.languages;return i?i.map(r=>{const o=r.trim();return a.languageCodeOnly?o.split(/-|_/)[0]:o}):[a.defaultLanguage]}static getPageLang(e={}){const a={...{languageCodeOnly:!0,availableLanguages:oo,defaultLanguage:ve},...e},i=document.documentElement.lang;let r=[];if(i)r=a.languageCodeOnly?[i.split(/-|_/)[0]]:[i];else{const s={languageCodeOnly:a.languageCodeOnly,defaultLanguage:a.defaultLanguage};r=this.getBrowserLocales(s)}return r.find(s=>a.availableLanguages.includes(s))||a.defaultLanguage}static localTranslation(e,n){const i=this.reference?.find(r=>r.locales.includes(this.locale))?.messages;return i?io(i,e,n):n}};Ze.locale="en";let Rt=Ze;var j=(t=>(t.administrationSupport="administrationSupport",t.communicationCollaboration="communicationCollaboration",t.documentsRessources="documentsRessources",t.apprentissageSuivi="apprentissageSuivi",t.citoyensTerritoriaux="citoyensTerritoriaux",t.rhGestion="rhGestion",t))(j||{}),Dt=(t=>(t.native="native",t.external="external",t))(Dt||{});const so={[j.administrationSupport]:w(u`Administration & Support`),[j.communicationCollaboration]:w(u`Communication & Collaboration`),[j.documentsRessources]:w(u`Documents & Ressources numériques`),[j.apprentissageSuivi]:w(u`Apprentissage & Suivi`),[j.citoyensTerritoriaux]:w(u`Services Citoyens & Territoriaux`),[j.rhGestion]:w(u`Services RH & Gestion`)};function co(t){return so[t]}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function lo(t,e,n){return(e=uo(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function jn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jn(Object(n),!0).forEach(function(a){lo(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function fo(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function uo(t){var e=fo(t,"string");return typeof e=="symbol"?e:e+""}const Un=()=>{};let ye={},Hn={},Yn=null,Wn={mark:Un,measure:Un};try{typeof window<"u"&&(ye=window),typeof document<"u"&&(Hn=document),typeof MutationObserver<"u"&&(Yn=MutationObserver),typeof performance<"u"&&(Wn=performance)}catch{}const{userAgent:Bn=""}=ye.navigator||{},U=ye,y=Hn,Gn=Yn,jt=Wn;U.document;const N=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Vn=~Bn.indexOf("MSIE")||~Bn.indexOf("Trident/");var ho=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,po=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Xn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},mo={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},qn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],_="classic",Ut="duotone",go="sharp",bo="sharp-duotone",Kn=[_,Ut,go,bo],vo={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},yo={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},xo=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),wo={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Ao=["fak","fa-kit","fakd","fa-kit-duotone"],Zn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},_o=["kit"],So={kit:{"fa-kit":"fak"}},$o=["fak","fakd"],ko={kit:{fak:"fa-kit"}},Jn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ht={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Eo=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Co=["fak","fa-kit","fakd","fa-kit-duotone"],Po={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Oo={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},To={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},xe={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Lo=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],we=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Eo,...Lo],Io=["solid","regular","light","thin","duotone","brands"],Qn=[1,2,3,4,5,6,7,8,9,10],zo=Qn.concat([11,12,13,14,15,16,17,18,19,20]),No=[...Object.keys(To),...Io,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ht.GROUP,Ht.SWAP_OPACITY,Ht.PRIMARY,Ht.SECONDARY].concat(Qn.map(t=>"".concat(t,"x"))).concat(zo.map(t=>"w-".concat(t))),Mo={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const M="___FONT_AWESOME___",Ae=16,ta="fa",ea="svg-inline--fa",J="data-fa-i2svg",_e="data-fa-pseudo-element",Fo="data-fa-pseudo-element-pending",Se="data-prefix",$e="data-icon",na="fontawesome-i2svg",Ro="async",Do=["HTML","HEAD","STYLE","SCRIPT"],aa=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})();function wt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[_]}})}const ia=l({},Xn);ia[_]=l(l(l(l({},{"fa-duotone":"duotone"}),Xn[_]),Zn.kit),Zn["kit-duotone"]);const jo=wt(ia),ke=l({},wo);ke[_]=l(l(l(l({},{duotone:"fad"}),ke[_]),Jn.kit),Jn["kit-duotone"]);const ra=wt(ke),Ee=l({},xe);Ee[_]=l(l({},Ee[_]),ko.kit);const Ce=wt(Ee),Pe=l({},Oo);Pe[_]=l(l({},Pe[_]),So.kit),wt(Pe);const Uo=ho,oa="fa-layers-text",Ho=po,Yo=l({},vo);wt(Yo);const Wo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Oe=mo,Bo=[..._o,...No],At=U.FontAwesomeConfig||{};function Go(t){var e=y.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Vo(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const i=Vo(Go(n));i!=null&&(At[a]=i)});const sa={styleDefault:"solid",familyDefault:_,cssPrefix:ta,replacementClass:ea,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};At.familyPrefix&&(At.cssPrefix=At.familyPrefix);const ot=l(l({},sa),At);ot.autoReplaceSvg||(ot.observeMutations=!1);const p={};Object.keys(sa).forEach(t=>{Object.defineProperty(p,t,{enumerable:!0,set:function(e){ot[t]=e,_t.forEach(n=>n(p))},get:function(){return ot[t]}})}),Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){ot.cssPrefix=t,_t.forEach(e=>e(p))},get:function(){return ot.cssPrefix}}),U.FontAwesomeConfig=p;const _t=[];function Xo(t){return _t.push(t),()=>{_t.splice(_t.indexOf(t),1)}}const H=Ae,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qo(t){if(!t||!N)return;const e=y.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=y.head.childNodes;let a=null;for(let i=n.length-1;i>-1;i--){const r=n[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=r)}return y.head.insertBefore(e,a),t}const Ko="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function St(){let t=12,e="";for(;t-- >0;)e+=Ko[Math.random()*62|0];return e}function st(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Te(t){return t.classList?st(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function ca(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zo(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(ca(t[n]),'" '),"").trim()}function Yt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Le(t){return t.size!==L.size||t.x!==L.x||t.y!==L.y||t.rotate!==L.rotate||t.flipX||t.flipY}function Jo(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(r," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:i,inner:c,path:f}}function Qo(t){let{transform:e,width:n=Ae,height:a=Ae,startCentered:i=!1}=t,r="";return i&&Vn?r+="translate(".concat(e.x/H-n/2,"em, ").concat(e.y/H-a/2,"em) "):i?r+="translate(calc(-50% + ".concat(e.x/H,"em), calc(-50% + ").concat(e.y/H,"em)) "):r+="translate(".concat(e.x/H,"em, ").concat(e.y/H,"em) "),r+="scale(".concat(e.size/H*(e.flipX?-1:1),", ").concat(e.size/H*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var ts=`:root, :host {
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
}`;function la(){const t=ta,e=ea,n=p.cssPrefix,a=p.replacementClass;let i=ts;if(n!==t||a!==e){const r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return i}let fa=!1;function Ie(){p.autoAddCss&&!fa&&(qo(la()),fa=!0)}var es={mixout(){return{dom:{css:la,insertCss:Ie}}},hooks(){return{beforeDOMElementCreation(){Ie()},beforeI2svg(){Ie()}}}};const F=U||{};F[M]||(F[M]={}),F[M].styles||(F[M].styles={}),F[M].hooks||(F[M].hooks={}),F[M].shims||(F[M].shims=[]);var I=F[M];const ua=[],da=function(){y.removeEventListener("DOMContentLoaded",da),Wt=1,ua.map(t=>t())};let Wt=!1;N&&(Wt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Wt||y.addEventListener("DOMContentLoaded",da));function ns(t){N&&(Wt?setTimeout(t,0):ua.push(t))}function $t(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?ca(t):"<".concat(e," ").concat(Zo(n),">").concat(a.map($t).join(""),"</").concat(e,">")}function ha(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ze=function(e,n,a,i){var r=Object.keys(e),o=r.length,s=n,c,f,h;for(a===void 0?(c=1,h=e[r[0]]):(c=0,h=a);c<o;c++)f=r[c],h=s(h,e[f],f,e);return h};function as(t){const e=[];let n=0;const a=t.length;for(;n<a;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<a){const r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ne(t){const e=as(t);return e.length===1?e[0].toString(16):null}function is(t,e){const n=t.length;let a=t.charCodeAt(e),i;return a>=55296&&a<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(a-55296)*1024+i-56320+65536:a}function pa(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Me(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,i=pa(e);typeof I.hooks.addPack=="function"&&!a?I.hooks.addPack(t,pa(e)):I.styles[t]=l(l({},I.styles[t]||{}),i),t==="fas"&&Me("fa",e)}const{styles:kt,shims:rs}=I,ma=Object.keys(Ce),os=ma.reduce((t,e)=>(t[e]=Object.keys(Ce[e]),t),{});let Fe=null,ga={},ba={},va={},ya={},xa={};function ss(t){return~Bo.indexOf(t)}function cs(t,e){const n=e.split("-"),a=n[0],i=n.slice(1).join("-");return a===t&&i!==""&&!ss(i)?i:null}const wa=()=>{const t=a=>ze(kt,(i,r,o)=>(i[o]=ze(r,a,{}),i),{});ga=t((a,i,r)=>(i[3]&&(a[i[3]]=r),i[2]&&i[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=r}),a)),ba=t((a,i,r)=>(a[r]=r,i[2]&&i[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=r}),a)),xa=t((a,i,r)=>{const o=i[2];return a[r]=r,o.forEach(s=>{a[s]=r}),a});const e="far"in kt||p.autoFetchSvg,n=ze(rs,(a,i)=>{const r=i[0];let o=i[1];const s=i[2];return o==="far"&&!e&&(o="fas"),typeof r=="string"&&(a.names[r]={prefix:o,iconName:s}),typeof r=="number"&&(a.unicodes[r.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});va=n.names,ya=n.unicodes,Fe=Bt(p.styleDefault,{family:p.familyDefault})};Xo(t=>{Fe=Bt(t.styleDefault,{family:p.familyDefault})}),wa();function Re(t,e){return(ga[t]||{})[e]}function ls(t,e){return(ba[t]||{})[e]}function Q(t,e){return(xa[t]||{})[e]}function Aa(t){return va[t]||{prefix:null,iconName:null}}function fs(t){const e=ya[t],n=Re("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Y(){return Fe}const _a=()=>({prefix:null,iconName:null,rest:[]});function us(t){let e=_;const n=ma.reduce((a,i)=>(a[i]="".concat(p.cssPrefix,"-").concat(i),a),{});return Kn.forEach(a=>{(t.includes(n[a])||t.some(i=>os[a].includes(i)))&&(e=a)}),e}function Bt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=_}=e,a=jo[n][t];if(n===Ut&&!t)return"fad";const i=ra[n][t]||ra[n][a],r=t in I.styles?t:null;return i||r||null}function ds(t){let e=[],n=null;return t.forEach(a=>{const i=cs(p.cssPrefix,a);i?n=i:a&&e.push(a)}),{iconName:n,rest:e}}function Sa(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function Gt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const i=we.concat(Co),r=Sa(t.filter(d=>i.includes(d))),o=Sa(t.filter(d=>!we.includes(d))),s=r.filter(d=>(a=d,!qn.includes(d))),[c=null]=s,f=us(r),h=l(l({},ds(o)),{},{prefix:Bt(c,{family:f})});return l(l(l({},h),gs({values:t,family:f,styles:kt,config:p,canonical:h,givenPrefix:a})),hs(n,a,h))}function hs(t,e,n){let{prefix:a,iconName:i}=n;if(t||!a||!i)return{prefix:a,iconName:i};const r=e==="fa"?Aa(i):{},o=Q(a,i);return i=r.iconName||o||i,a=r.prefix||a,a==="far"&&!kt.far&&kt.fas&&!p.autoFetchSvg&&(a="fas"),{prefix:a,iconName:i}}const ps=Kn.filter(t=>t!==_||t!==Ut),ms=Object.keys(xe).filter(t=>t!==_).map(t=>Object.keys(xe[t])).flat();function gs(t){const{values:e,family:n,canonical:a,givenPrefix:i="",styles:r={},config:o={}}=t,s=n===Ut,c=e.includes("fa-duotone")||e.includes("fad"),f=o.familyDefault==="duotone",h=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(c||f||h)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&ps.includes(n)&&(Object.keys(r).find(m=>ms.includes(m))||o.autoFetchSvg)){const m=xo.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=Q(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||i==="fa")&&(a.prefix=Y()||"fas"),a}class bs{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]=l(l({},this.definitions[r]||{}),i[r]),Me(r,i[r]);const o=Ce[_][r];o&&Me(o,i[r]),wa()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(i=>{const{prefix:r,iconName:o,icon:s}=a[i],c=s[2];e[r]||(e[r]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(e[r][f]=s)}),e[r][o]=s}),e}}let $a=[],ct={};const lt={},vs=Object.keys(lt);function ys(t,e){let{mixoutsTo:n}=e;return $a=t,ct={},Object.keys(lt).forEach(a=>{vs.indexOf(a)===-1&&delete lt[a]}),$a.forEach(a=>{const i=a.mixout?a.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(n[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(o=>{n[r]||(n[r]={}),n[r][o]=i[r][o]})}),a.hooks){const r=a.hooks();Object.keys(r).forEach(o=>{ct[o]||(ct[o]=[]),ct[o].push(r[o])})}a.provides&&a.provides(lt)}),n}function De(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];return(ct[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function tt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(ct[t]||[]).forEach(r=>{r.apply(null,n)})}function W(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return lt[t]?lt[t].apply(null,e):void 0}function je(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Y();if(e)return e=Q(n,e)||e,ha(ka.definitions,n,e)||ha(I.styles,n,e)}const ka=new bs,$={noAuto:()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,tt("noAuto")},config:p,dom:{i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return N?(tt("beforeI2svg",t),W("pseudoElements2svg",t),W("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,ns(()=>{xs({autoReplaceSvgRoot:e}),tt("watch",t)})}},parse:{icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Q(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Bt(t[0]);return{prefix:n,iconName:Q(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(Uo))){const e=Gt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Y(),iconName:Q(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Y();return{prefix:e,iconName:Q(e,t)||t}}}},library:ka,findIconDefinition:je,toHtml:$t},xs=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=y}=t;(Object.keys(I.styles).length>0||p.autoFetchSvg)&&N&&p.autoReplaceSvg&&$.dom.i2svg({node:e})};function Vt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>$t(n))}}),Object.defineProperty(t,"node",{get:function(){if(!N)return;const n=y.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ws(t){let{children:e,main:n,mask:a,attributes:i,styles:r,transform:o}=t;if(Le(o)&&n.found&&!a.found){const{width:s,height:c}=n,f={x:s/c/2,y:.5};i.style=Yt(l(l({},r),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function As(t){let{prefix:e,iconName:n,children:a,attributes:i,symbol:r}=t;const o=r===!0?"".concat(e,"-").concat(p.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},i),{},{id:o}),children:a}]}]}function Ue(t){const{icons:{main:e,mask:n},prefix:a,iconName:i,transform:r,symbol:o,title:s,maskId:c,titleId:f,extra:h,watchable:d=!1}=t,{width:m,height:g}=n.found?n:e,v=$o.includes(a),A=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(ut=>h.classes.indexOf(ut)===-1).filter(ut=>ut!==""||!!ut).concat(h.classes).join(" ");let S={children:[],attributes:l(l({},h.attributes),{},{"data-prefix":a,"data-icon":i,class:A,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)})};const O=v&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};d&&(S.attributes[J]=""),s&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(f||St())},children:[s]}),delete S.attributes.title);const E=l(l({},S),{},{prefix:a,iconName:i,main:e,mask:n,maskId:c,transform:r,symbol:o,styles:l(l({},O),h.styles)}),{children:T,attributes:ft}=n.found&&e.found?W("generateAbstractMask",E)||{children:[],attributes:{}}:W("generateAbstractIcon",E)||{children:[],attributes:{}};return E.children=T,E.attributes=ft,o?As(E):ws(E)}function Ea(t){const{content:e,width:n,height:a,transform:i,title:r,extra:o,watchable:s=!1}=t,c=l(l(l({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});s&&(c[J]="");const f=l({},o.styles);Le(i)&&(f.transform=Qo({transform:i,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const h=Yt(f);h.length>0&&(c.style=h);const d=[];return d.push({tag:"span",attributes:c,children:[e]}),r&&d.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),d}function _s(t){const{content:e,title:n,extra:a}=t,i=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),r=Yt(a.styles);r.length>0&&(i.style=r);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:He}=I;function Ye(t){const e=t[0],n=t[1],[a]=t.slice(4);let i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Oe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Oe.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Oe.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:i}}const Ss={found:!1,width:512,height:512};function $s(t,e){!aa&&!p.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function We(t,e){let n=e;return e==="fa"&&p.styleDefault!==null&&(e=Y()),new Promise((a,i)=>{if(n==="fa"){const r=Aa(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&He[e]&&He[e][t]){const r=He[e][t];return a(Ye(r))}$s(t,e),a(l(l({},Ss),{},{icon:p.showMissingIcons&&t?W("missingIconAbstract")||{}:{}}))})}const Ca=()=>{},Be=p.measurePerformance&&jt&&jt.mark&&jt.measure?jt:{mark:Ca,measure:Ca},Et='FA "6.7.2"',ks=t=>(Be.mark("".concat(Et," ").concat(t," begins")),()=>Pa(t)),Pa=t=>{Be.mark("".concat(Et," ").concat(t," ends")),Be.measure("".concat(Et," ").concat(t),"".concat(Et," ").concat(t," begins"),"".concat(Et," ").concat(t," ends"))};var Ge={begin:ks,end:Pa};const Xt=()=>{};function Oa(t){return typeof(t.getAttribute?t.getAttribute(J):null)=="string"}function Es(t){const e=t.getAttribute?t.getAttribute(Se):null,n=t.getAttribute?t.getAttribute($e):null;return e&&n}function Cs(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(p.replacementClass)}function Ps(){return p.autoReplaceSvg===!0?qt.replace:qt[p.autoReplaceSvg]||qt.replace}function Os(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function Ts(t){return y.createElement(t)}function Ta(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Os:Ts}=e;if(typeof t=="string")return y.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){a.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){a.appendChild(Ta(r,{ceFn:n}))}),a}function Ls(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const qt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Ta(n),e)}),e.getAttribute(J)===null&&p.keepOriginalSource){let n=y.createComment(Ls(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Te(e).indexOf(p.replacementClass))return qt.replace(t);const a=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const r=n[0].attributes.class.split(" ").reduce((o,s)=>(s===p.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}const i=n.map(r=>$t(r)).join(`
`);e.setAttribute(J,""),e.innerHTML=i}};function La(t){t()}function Ia(t,e){const n=typeof e=="function"?e:Xt;if(t.length===0)n();else{let a=La;p.mutateApproach===Ro&&(a=U.requestAnimationFrame||La),a(()=>{const i=Ps(),r=Ge.begin("mutate");t.map(i),r(),n()})}}let Ve=!1;function za(){Ve=!0}function Xe(){Ve=!1}let Kt=null;function Na(t){if(!Gn||!p.observeMutations)return;const{treeCallback:e=Xt,nodeCallback:n=Xt,pseudoElementsCallback:a=Xt,observeMutationsRoot:i=y}=t;Kt=new Gn(r=>{if(Ve)return;const o=Y();st(r).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Oa(s.addedNodes[0])&&(p.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&p.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&Oa(s.target)&&~Wo.indexOf(s.attributeName))if(s.attributeName==="class"&&Es(s.target)){const{prefix:c,iconName:f}=Gt(Te(s.target));s.target.setAttribute(Se,c||o),f&&s.target.setAttribute($e,f)}else Cs(s.target)&&n(s.target)})}),N&&Kt.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Is(){Kt&&Kt.disconnect()}function zs(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,i)=>{const r=i.split(":"),o=r[0],s=r.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Ns(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let i=Gt(Te(t));return i.prefix||(i.prefix=Y()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&a.length>0&&(i.iconName=ls(i.prefix,t.innerText)||Re(i.prefix,Ne(t.innerText))),!i.iconName&&p.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Ms(t){const e=st(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return p.autoA11y&&(n?e["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(a||St()):(e["aria-hidden"]="true",e.focusable="false")),e}function Fs(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ma(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:i}=Ns(t),r=Ms(t),o=De("parseNodeAttributes",{},t);let s=e.styleParser?zs(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:r}},o)}const{styles:Rs}=I;function Fa(t){const e=p.autoReplaceSvg==="nest"?Ma(t,{styleParser:!1}):Ma(t);return~e.extra.classes.indexOf(oa)?W("generateLayersText",t,e):W("generateSvgReplacementMutation",t,e)}function Ds(){return[...Ao,...we]}function Ra(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!N)return Promise.resolve();const n=y.documentElement.classList,a=h=>n.add("".concat(na,"-").concat(h)),i=h=>n.remove("".concat(na,"-").concat(h)),r=p.autoFetchSvg?Ds():qn.concat(Object.keys(Rs));r.includes("fa")||r.push("fa");const o=[".".concat(oa,":not([").concat(J,"])")].concat(r.map(h=>".".concat(h,":not([").concat(J,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=st(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),i("complete");else return Promise.resolve();const c=Ge.begin("onTree"),f=s.reduce((h,d)=>{try{const m=Fa(d);m&&h.push(m)}catch(m){aa||m.name==="MissingIcon"&&console.error(m)}return h},[]);return new Promise((h,d)=>{Promise.all(f).then(m=>{Ia(m,()=>{a("active"),a("complete"),i("pending"),typeof e=="function"&&e(),c(),h()})}).catch(m=>{c(),d(m)})})}function js(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Fa(t).then(n=>{n&&Ia([n],e)})}function Us(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:je(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:je(i||{})),t(a,l(l({},n),{},{mask:i}))}}const Hs=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=L,symbol:a=!1,mask:i=null,maskId:r=null,title:o=null,titleId:s=null,classes:c=[],attributes:f={},styles:h={}}=e;if(!t)return;const{prefix:d,iconName:m,icon:g}=t;return Vt(l({type:"icon"},t),()=>(tt("beforeDOMElementCreation",{iconDefinition:t,params:e}),p.autoA11y&&(o?f["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(s||St()):(f["aria-hidden"]="true",f.focusable="false")),Ue({icons:{main:Ye(g),mask:i?Ye(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:m,transform:l(l({},L),n),symbol:a,title:o,maskId:r,titleId:s,extra:{attributes:f,styles:h,classes:c}})))};var Ys={mixout(){return{icon:Us(Hs)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ra,t.nodeCallback=js,t}}},provides(t){t.i2svg=function(e){const{node:n=y,callback:a=()=>{}}=e;return Ra(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:i,titleId:r,prefix:o,transform:s,symbol:c,mask:f,maskId:h,extra:d}=n;return new Promise((m,g)=>{Promise.all([We(a,o),f.iconName?We(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[A,S]=v;m([e,Ue({icons:{main:A,mask:S},prefix:o,iconName:a,transform:s,symbol:c,maskId:h,title:i,titleId:r,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:i,transform:r,styles:o}=e;const s=Yt(o);s.length>0&&(a.style=s);let c;return Le(r)&&(c=W("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),n.push(c||i.icon),{children:n,attributes:a}}}},Ws={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Vt({type:"layer"},()=>{tt("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(i=>{Array.isArray(i)?i.map(r=>{a=a.concat(r.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Bs={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:i={},styles:r={}}=e;return Vt({type:"counter",content:t},()=>(tt("beforeDOMElementCreation",{content:t,params:e}),_s({content:t.toString(),title:n,extra:{attributes:i,styles:r,classes:["".concat(p.cssPrefix,"-layers-counter"),...a]}})))}}}},Gs={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=L,title:a=null,classes:i=[],attributes:r={},styles:o={}}=e;return Vt({type:"text",content:t},()=>(tt("beforeDOMElementCreation",{content:t,params:e}),Ea({content:t,transform:l(l({},L),n),title:a,extra:{attributes:r,styles:o,classes:["".concat(p.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:i,extra:r}=n;let o=null,s=null;if(Vn){const c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/c,s=f.height/c}return p.autoA11y&&!a&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,Ea({content:e.innerHTML,width:o,height:s,transform:i,title:a,extra:r,watchable:!0})])}}};const Vs=new RegExp('"',"ug"),Da=[1105920,1112319],ja=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),yo),Mo),Po),qe=Object.keys(ja).reduce((t,e)=>(t[e.toLowerCase()]=ja[e],t),{}),Xs=Object.keys(qe).reduce((t,e)=>{const n=qe[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function qs(t){const e=t.replace(Vs,""),n=is(e,0),a=n>=Da[0]&&n<=Da[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ne(i?e[0]:e),isSecondary:a||i}}function Ks(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),i=isNaN(a)?"normal":a;return(qe[n]||{})[i]||Xs[n]}function Ua(t,e){const n="".concat(Fo).concat(e.replace(":","-"));return new Promise((a,i)=>{if(t.getAttribute(n)!==null)return a();const o=st(t.children).filter(m=>m.getAttribute(_e)===e)[0],s=U.getComputedStyle(t,e),c=s.getPropertyValue("font-family"),f=c.match(Ho),h=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&d!=="none"&&d!==""){const m=s.getPropertyValue("content");let g=Ks(c,h);const{value:v,isSecondary:A}=qs(m),S=f[0].startsWith("FontAwesome");let O=Re(g,v),E=O;if(S){const T=fs(v);T.iconName&&T.prefix&&(O=T.iconName,g=T.prefix)}if(O&&!A&&(!o||o.getAttribute(Se)!==g||o.getAttribute($e)!==E)){t.setAttribute(n,E),o&&t.removeChild(o);const T=Fs(),{extra:ft}=T;ft.attributes[_e]=e,We(O,g).then(ut=>{const mc=Ue(l(l({},T),{},{icons:{main:ut,mask:_a()},prefix:g,iconName:E,extra:ft,watchable:!0})),Je=y.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Je,t.firstChild):t.appendChild(Je),Je.outerHTML=mc.map(gc=>$t(gc)).join(`
`),t.removeAttribute(n),a()}).catch(i)}else a()}else a()})}function Zs(t){return Promise.all([Ua(t,"::before"),Ua(t,"::after")])}function Js(t){return t.parentNode!==document.head&&!~Do.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(_e)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ha(t){if(N)return new Promise((e,n)=>{const a=st(t.querySelectorAll("*")).filter(Js).map(Zs),i=Ge.begin("searchPseudoElements");za(),Promise.all(a).then(()=>{i(),Xe(),e()}).catch(()=>{i(),Xe(),n()})})}var Qs={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ha,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=y}=e;p.searchPseudoElements&&Ha(n)}}};let Ya=!1;var tc={mixout(){return{dom:{unwatch(){za(),Ya=!0}}}},hooks(){return{bootstrap(){Na(De("mutationObserverCallbacks",{}))},noAuto(){Is()},watch(t){const{observeMutationsRoot:e}=t;Ya?Xe():Na(De("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Wa=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const i=a.toLowerCase().split("-"),r=i[0];let o=i.slice(1).join("-");if(r&&o==="h")return n.flipX=!0,n;if(r&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var ec={mixout(){return{parse:{transform:t=>Wa(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Wa(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:i,iconWidth:r}=e;const o={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),h={transform:"".concat(s," ").concat(c," ").concat(f)},d={transform:"translate(".concat(r/2*-1," -256)")},m={outer:o,inner:h,path:d};return{tag:"g",attributes:l({},m.outer),children:[{tag:"g",attributes:l({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),m.path)}]}]}}}};const Ke={x:0,y:0,width:"100%",height:"100%"};function Ba(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function nc(t){return t.tag==="g"?t.children:[t]}var ac={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?Gt(n.split(" ").map(i=>i.trim())):_a();return a.prefix||(a.prefix=Y()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:i,mask:r,maskId:o,transform:s}=e;const{width:c,icon:f}=i,{width:h,icon:d}=r,m=Jo({transform:s,containerWidth:h,iconWidth:c}),g={tag:"rect",attributes:l(l({},Ke),{},{fill:"white"})},v=f.children?{children:f.children.map(Ba)}:{},A={tag:"g",attributes:l({},m.inner),children:[Ba(l({tag:f.tag,attributes:l(l({},f.attributes),m.path)},v))]},S={tag:"g",attributes:l({},m.outer),children:[A]},O="mask-".concat(o||St()),E="clip-".concat(o||St()),T={tag:"mask",attributes:l(l({},Ke),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,S]},ft={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:nc(d)},T]};return n.push(ft,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(O,")")},Ke)}),{children:n,attributes:a}}}},ic={provides(t){let e=!1;U.matchMedia&&(e=U.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const r=l(l({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:l(l({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},rc={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},oc=[es,Ys,Ws,Bs,Gs,Qs,tc,ec,ac,ic,rc];ys(oc,{mixoutsTo:$}),$.noAuto,$.config,$.library,$.dom,$.parse,$.findIconDefinition,$.toHtml;const sc=$.icon;$.layer,$.text,$.counter;function Zt(t){return wi`${sc(t).node[0]}`}const cc=(t,e,n)=>{const a=t[e];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((i,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==n?". Note that variables only represent file names one level deep.":""))))})},{setLocale:lc}=oi({sourceLocale:ve,targetLocales:ro,loadLocale:t=>cc(Object.assign({"../generated/locales/en.ts":()=>Promise.resolve().then(()=>pc)}),`../generated/locales/${t}.ts`,4)}),fc=`:root,:host{--fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";--fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";--fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";--fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";--fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";--fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";--fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";--fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";--fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";--fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";--fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";--fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone"}svg.svg-inline--fa:not(:root),svg.svg-inline--fa:not(:host){overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display, inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0em}.svg-inline--fa.fa-sm{vertical-align:-.07143em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin, .3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin, .3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width, 2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width, 1.25em)}.fa-layers svg.svg-inline--fa{inset:0;margin:auto;position:absolute}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{transform-origin:center center}.fa-layers-text{left:50%;top:50%;transform:translate(-50%,-50%);transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color, #ff253a);border-radius:var(--fa-counter-border-radius, 1em);box-sizing:border-box;color:var(--fa-inverse, #fff);line-height:var(--fa-counter-line-height, 1);max-width:var(--fa-counter-max-width, 5em);min-width:var(--fa-counter-min-width, 1.5em);overflow:hidden;padding:var(--fa-counter-padding, .25em .5em);right:var(--fa-right, 0);text-overflow:ellipsis;top:var(--fa-top, 0);transform:scale(var(--fa-counter-scale, .25));transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom, 0);right:var(--fa-right, 0);top:auto;transform:scale(var(--fa-layers-scale, .25));transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom, 0);left:var(--fa-left, 0);right:auto;top:auto;transform:scale(var(--fa-layers-scale, .25));transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top, 0);right:var(--fa-right, 0);transform:scale(var(--fa-layers-scale, .25));transform-origin:top right}.fa-layers-top-left{left:var(--fa-left, 0);right:auto;top:var(--fa-top, 0);transform:scale(var(--fa-layers-scale, .25));transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin, 2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(-1 * var(--fa-li-width, 2em));position:absolute;text-align:center;width:var(--fa-li-width, 2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color, #eee);border-radius:var(--fa-border-radius, .1em);border-style:var(--fa-border-style, solid);border-width:var(--fa-border-width, .08em);padding:var(--fa-border-padding, .2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin, .3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin, .3em)}.fa-beat{animation-name:fa-beat;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, ease-in-out)}.fa-bounce{animation-name:fa-bounce;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, cubic-bezier(.28, .84, .42, 1))}.fa-fade{animation-name:fa-fade;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, cubic-bezier(.4, 0, .6, 1))}.fa-beat-fade{animation-name:fa-beat-fade;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, cubic-bezier(.4, 0, .6, 1))}.fa-flip{animation-name:fa-flip;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, ease-in-out)}.fa-shake{animation-name:fa-shake;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, linear)}.fa-spin{animation-name:fa-spin;animation-delay:var(--fa-animation-delay, 0s);animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 2s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, linear)}.fa-spin-reverse{--fa-animation-direction: reverse}.fa-pulse,.fa-spin-pulse{animation-name:fa-spin;animation-direction:var(--fa-animation-direction, normal);animation-duration:var(--fa-animation-duration, 1s);animation-iteration-count:var(--fa-animation-iteration-count, infinite);animation-timing-function:var(--fa-animation-timing, steps(8))}@media (prefers-reduced-motion: reduce){.fa-beat,.fa-bounce,.fa-fade,.fa-beat-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{animation-delay:-1ms;animation-duration:1ms;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@keyframes fa-beat{0%,90%{transform:scale(1)}45%{transform:scale(var(--fa-beat-scale, 1.25))}}@keyframes fa-bounce{0%{transform:scale(1) translateY(0)}10%{transform:scale(var(--fa-bounce-start-scale-x, 1.1),var(--fa-bounce-start-scale-y, .9)) translateY(0)}30%{transform:scale(var(--fa-bounce-jump-scale-x, .9),var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -.5em))}50%{transform:scale(var(--fa-bounce-land-scale-x, 1.05),var(--fa-bounce-land-scale-y, .95)) translateY(0)}57%{transform:scale(1) translateY(var(--fa-bounce-rebound, -.125em))}64%{transform:scale(1) translateY(0)}to{transform:scale(1) translateY(0)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity, .4)}}@keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity, .4);transform:scale(1)}50%{opacity:1;transform:scale(var(--fa-beat-fade-scale, 1.125))}}@keyframes fa-flip{50%{transform:rotate3d(var(--fa-flip-x, 0),var(--fa-flip-y, 1),var(--fa-flip-z, 0),var(--fa-flip-angle, -180deg))}}@keyframes fa-shake{0%{transform:rotate(-15deg)}4%{transform:rotate(15deg)}8%,24%{transform:rotate(-18deg)}12%,28%{transform:rotate(18deg)}16%{transform:rotate(-22deg)}20%{transform:rotate(22deg)}32%{transform:rotate(-12deg)}36%{transform:rotate(12deg)}40%,to{transform:rotate(0)}}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.fa-rotate-90{transform:rotate(90deg)}.fa-rotate-180{transform:rotate(180deg)}.fa-rotate-270{transform:rotate(270deg)}.fa-flip-horizontal{transform:scaleX(-1)}.fa-flip-vertical{transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1)}.fa-rotate-by{transform:rotate(var(--fa-rotate-angle, 0))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{inset:0;margin:auto;position:absolute;z-index:var(--fa-stack-z-index, auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse, #fff)}.sr-only,.fa-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.sr-only-focusable:not(:focus),.fa-sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color, currentColor);opacity:var(--fa-primary-opacity, 1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color, currentColor);opacity:var(--fa-secondary-opacity, .4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity, .4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity, 1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}html{-webkit-text-size-adjust:100%;box-sizing:border-box;-moz-tab-size:4;tab-size:4;word-break:normal}*,:after,:before{background-repeat:no-repeat;box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}*{margin:0;padding:0}hr{color:inherit;height:0;overflow:visible}details,main{display:block}summary{display:list-item}small{font-size:80%}[hidden]{display:none}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}a{background-color:transparent}a:active,a:hover{outline-width:0}code,kbd,pre,samp{font-family:monospace,monospace}pre{font-size:1em}b,strong{font-weight:bolder}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-color:inherit;text-indent:0}iframe{border-style:none}input{border-radius:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{overflow:auto;resize:vertical}button,input,optgroup,select,textarea{font:inherit}optgroup{font-weight:700}button{overflow:visible}button,select{text-transform:none}[role=button],[type=button],[type=reset],[type=submit],button{cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button:-moz-focusring{outline:1px dotted ButtonText}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}button,input,select,textarea{background-color:transparent;border-style:none}a:focus,button:focus,input:focus,select:focus,textarea:focus{outline-width:0}select{-moz-appearance:none;-webkit-appearance:none}select::-ms-expand{display:none}select::-ms-value{color:currentColor}legend{border:0;color:inherit;display:table;max-width:100%;white-space:normal}::-webkit-file-upload-button{-webkit-appearance:button;color:inherit;font:inherit}[disabled]{cursor:default}img{border-style:none}progress{vertical-align:baseline}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled=true]{cursor:default}/*!
 * Copyright (C) 2025 GIP-RECIA, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */h6,.h6,h5,.h5,h4,.h4,h3,.h3,h2,.h2,h1,.h1{font-family:Sora,"sans-serif";color:var(--recia-body);margin-bottom:var(--recia-font-size-base)}h1,.h1{font-size:var(--recia-font-size-h1);font-weight:700}h2,.h2{font-size:var(--recia-font-size-h2);font-weight:700}h3,.h3{font-size:var(--recia-font-size-h3);font-weight:600}h4,.h4{font-size:var(--recia-font-size-h4);font-weight:600}h5,.h5{font-size:var(--recia-font-size-h5)}h6,.h6{font-size:var(--recia-font-size-h6)}*{box-sizing:border-box}.grow-1{flex-grow:1}.container-fluid,.container{width:100%;padding-right:16px;padding-left:16px;margin-right:auto;margin-left:auto}@media screen and (width >= 576px){.container{max-width:540px}}@media screen and (width >= 768px){.container{max-width:720px}}@media screen and (width >= 992px){.container{max-width:960px}}@media screen and (width >= 1200px){.container{max-width:1140px}}@media screen and (width >= 1400px){.container{max-width:1320px}}.btn-secondary,.btn-secondary-toggle,.btn-primary{color:inherit;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;column-gap:8px;text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;user-select:none;border-radius:50px;padding:12px 24px;font-family:Sora,"sans-serif";font-weight:600;font-size:var(--recia-font-size-md)}.btn-primary{background-color:var(--recia-btn-primary-bg);color:var(--recia-btn-primary)}.btn-primary:active{background-color:var(--recia-btn-primary-pressed)!important}.btn-primary:hover,.btn-primary:focus-visible{background-color:var(--recia-primary)}.btn-primary:focus-visible{outline:4px solid rgba(from var(--recia-primary) r g b/.3)}.btn-primary:disabled,.btn-primary.disabled{opacity:.33;pointer-events:none}.btn-primary.circle{border-radius:50%;width:44px;height:44px;padding:12px}.btn-primary.small{padding:8px 16px;font-size:var(--recia-font-size-sm)}.btn-primary.small.circle{border-radius:50%;width:34px;height:34px;padding:8px}.btn-secondary,.btn-secondary-toggle{background-color:var(--recia-btn-secondary-bg);color:var(--recia-btn-secondary)}.btn-secondary:active,.btn-secondary-toggle:active{background-color:var(--recia-btn-secondary-pressed)!important;color:var(--recia-primary)!important}.btn-secondary:hover,.btn-secondary-toggle:hover,.btn-secondary:focus-visible,.btn-secondary-toggle:focus-visible{background-color:var(--recia-btn-secondary-hover);color:var(--recia-primary)}.btn-secondary:focus-visible,.btn-secondary-toggle:focus-visible{outline:4px solid var(--recia-primary)}.btn-secondary:disabled,.btn-secondary-toggle:disabled,.btn-secondary.disabled,.disabled.btn-secondary-toggle{opacity:.33;pointer-events:none}.btn-secondary.circle,.circle.btn-secondary-toggle{border-radius:50%;width:44px;height:44px;padding:12px}.btn-secondary.small,.small.btn-secondary-toggle{padding:8px 16px;font-size:var(--recia-font-size-sm)}.btn-secondary.small.circle,.small.circle.btn-secondary-toggle{border-radius:50%;width:34px;height:34px;padding:8px}.btn-secondary-toggle{background-color:unset;color:var(--recia-btn-secondary)}.btn-secondary-toggle.active{background-color:var(--recia-primary);color:var(--recia-body-inverted);box-shadow:var(--recia-shadow-hover) rgba(from var(--recia-primary) r g b/.2)}.btn-secondary-toggle.active:active{background-color:var(--recia-btn-primary-pressed)!important;color:var(--recia-btn-primary)!important}.btn-secondary-toggle.active:focus-visible{outline:4px solid rgba(from var(--recia-primary) r g b/.3)}.btn-tertiary{color:inherit;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;column-gap:8px;text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;user-select:none;border-radius:50px;padding:8px 16px;font-family:DM Sans,"sans-serif";font-weight:600;font-size:var(--recia-font-size-sm);color:var(--recia-btn-secondary)}.btn-tertiary:hover,.btn-tertiary:focus-visible{background-color:var(--recia-body-bg);color:var(--recia-primary);text-decoration:underline}.btn-tertiary:focus-visible{outline:4px solid var(--recia-primary)}.btn-tertiary:disabled,.btn-tertiary.disabled{opacity:.5;pointer-events:none}.btn-tertiary.circle{border-radius:50%;width:34px;height:34px;padding:8px}.badge{padding:3px 10px;border-radius:27px;background-color:var(--recia-primary);color:var(--recia-body-inverted);font-family:DM Sans,"sans-serif";font-size:var(--recia-font-size-xs);font-weight:700}.badge.lg{padding:2.5px 14px;font-size:var(--recia-font-size-md)}select{position:relative;appearance:base-select;display:inline-flex;column-gap:16px;background-color:rgba(from #000 r g b/.05);border-radius:50px;padding:8px 16px}select:hover,select:focus-visible{background-color:rgba(from #000 r g b/.1)}select:hover::picker-icon,select:focus-visible::picker-icon{opacity:1}select:focus-visible{outline:2px solid var(--recia-primary)}select::picker-icon{place-content:center;content:"";font-family:var(--fa-style-family-classic, "Font Awesome 6 Free");font-weight:900;opacity:.33;transition:rotate .2s ease-in-out}select:open::picker-icon{opacity:1;rotate:180deg}select::picker(select){appearance:base-select;border:none;background-color:var(--recia-body-bg);border-radius:8px;box-shadow:var(--recia-shadow-strong) rgba(from #000 r g b/.1)}select>button>selectedcontent{display:inline-flex;align-items:center;column-gap:8px}select>option{display:flex;align-items:center;column-gap:8px;text-wrap:nowrap;font-size:var(--recia-font-size-sm);padding:14px 12px}select>option::checkmark{display:none}select>option>svg{opacity:.3}select>option:checked{font-weight:500;background-color:var(--recia-btn-secondary-hover)}select>option:checked>svg{opacity:1}select>option:hover,select>option:focus-visible{font-weight:500;background-color:var(--recia-hover);outline:none}select>option:hover>svg,select>option:focus-visible>svg{opacity:1}button.tag{color:inherit;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;column-gap:8px;text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;user-select:none;border-radius:50px;padding:8px 16px;font-family:DM Sans,"sans-serif";font-weight:500;font-size:var(--recia-font-size-sm)}input[type=radio].tag,input[type=checkbox].tag{position:absolute;opacity:0}input[type=radio].tag~label,input[type=checkbox].tag~label{color:inherit;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;column-gap:8px;text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;user-select:none;border-radius:50px;padding:8px 16px;font-family:DM Sans,"sans-serif";font-weight:500;font-size:var(--recia-font-size-sm);height:100%}input[type=radio].tag:hover~label,input[type=radio].tag:focus-visible~label,input[type=checkbox].tag:hover~label,input[type=checkbox].tag:focus-visible~label{background-color:rgba(from var(--recia-primary) r g b/.05);color:var(--recia-primary)}input[type=radio].tag:focus-visible~label,input[type=checkbox].tag:focus-visible~label{outline:3px solid var(--recia-primary)}input[type=radio].tag:checked~label,input[type=checkbox].tag:checked~label{background-color:var(--recia-btn-primary-bg);color:var(--recia-btn-primary);box-shadow:var(--recia-shadow-low-elevation) rgba(from #000 r g b/.2)}input[type=radio].tag:checked:hover~label,input[type=radio].tag:checked:focus-visible~label,input[type=checkbox].tag:checked:hover~label,input[type=checkbox].tag:checked:focus-visible~label{background-color:var(--recia-primary)}input[type=radio].tag:checked:focus-visible~label,input[type=checkbox].tag:checked:focus-visible~label{outline:3px solid rgba(from var(--recia-primary) r g b/.3)}input[type=radio].tag:disabled~label,input[type=radio].tag.disabled~label,input[type=checkbox].tag:disabled~label,input[type=checkbox].tag.disabled~label{opacity:.33;pointer-events:none}input[type=radio].tag.circle~label,input[type=checkbox].tag.circle~label{border-radius:50%;width:34px;height:34px;padding:8px}input[type=radio].tag.small~label,input[type=checkbox].tag.small~label{padding:4px 12px}input[type=radio].tag.small.circle~label,input[type=checkbox].tag.small.circle~label{width:26px;height:26px;padding:4px}@media (hover: none) or (pointer: coarse){input[type=radio].tag:not(:checked)~label,input[type=checkbox].tag:not(:checked)~label{background-color:rgba(from var(--recia-primary) r g b/.05);color:var(--recia-primary)}}:not(button).tag-category{color:inherit;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;column-gap:8px;text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;user-select:none;border-radius:50px;cursor:inherit;padding:4px 10px;font-family:DM Sans,"sans-serif";font-weight:500;font-size:var(--recia-font-size-xs);background-color:var(--recia-stroke)}.notification-dot{position:absolute;top:0;right:0;height:14px;width:14px;border-radius:50%;background-color:var(--recia-primary)}:not(button).tag-category,:not(button).tag,button.tag{color:inherit;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;column-gap:8px;text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;user-select:none;border-radius:50px}button.tag{padding:8px 16px;font-family:DM Sans,"sans-serif";font-weight:500;font-size:var(--recia-font-size-sm)}button.tag:not(.active):hover,button.tag:not(.active):focus-visible{background-color:rgba(from var(--recia-primary) r g b/.05);color:var(--recia-primary)}button.tag:not(.active):focus-visible{outline:3px solid var(--recia-primary)}button.tag.active{background-color:var(--recia-btn-primary-bg);color:var(--recia-btn-primary);box-shadow:var(--recia-shadow-low-elevation) rgba(from #000 r g b/.2)}button.tag.active:hover,button.tag.active:focus-visible{background-color:var(--recia-primary)}button.tag.active:focus-visible{outline:3px solid rgba(from var(--recia-primary) r g b/.3)}button.tag:disabled,button.tag.disabled{opacity:.33;pointer-events:none}button.tag.circle{border-radius:50%;width:34px;height:34px;padding:8px}button.tag.small{padding:4px 12px}button.tag.small.circle{width:26px;height:26px;padding:4px}@media (hover: none) or (pointer: coarse){button.tag:not(.active){background-color:rgba(from var(--recia-primary) r g b/.05);color:var(--recia-primary)}}:not(button).tag{cursor:inherit;padding:8px 16px;font-family:DM Sans,"sans-serif";font-weight:500;font-size:var(--recia-font-size-sm);background-color:var(--recia-btn-primary-bg);color:var(--recia-btn-primary);box-shadow:var(--recia-shadow-low-elevation) rgba(from #000 r g b/.2)}:not(button).tag.disabled{opacity:.33}:not(button).tag.circle{border-radius:50%;width:34px;height:34px;padding:8px}:not(button).tag.small{padding:4px 12px}:not(button).tag.small.circle{width:26px;height:26px;padding:4px}:not(button).tag-category{cursor:inherit;padding:4px 10px;font-family:DM Sans,"sans-serif";font-weight:500;font-size:var(--recia-font-size-xs);background-color:var(--recia-stroke)}:not(button).tag-category.default{background-color:var(--recia-default);color:var(--recia-default-text)}:not(button).tag-category.administrationSupport{background-color:var(--recia-administrationSupport);color:var(--recia-administrationSupport-text)}:not(button).tag-category.rhGestion{background-color:var(--recia-rhGestion);color:var(--recia-rhGestion-text)}:not(button).tag-category.communicationCollaboration{background-color:var(--recia-communicationCollaboration);color:var(--recia-communicationCollaboration-text)}:not(button).tag-category.apprentissageSuivi{background-color:var(--recia-apprentissageSuivi);color:var(--recia-apprentissageSuivi-text)}:not(button).tag-category.citoyensTerritoriaux{background-color:var(--recia-citoyensTerritoriaux);color:var(--recia-citoyensTerritoriaux-text)}:not(button).tag-category.documentsRessources{background-color:var(--recia-documentsRessources);color:var(--recia-documentsRessources-text)}:not(button).tag-category.disabled{opacity:.33}:not(button).tag-category.circle{border-radius:50%;width:34px;height:34px;padding:8px}:not(button).tag-category.small{padding:4px 12px}:not(button).tag-category.small.circle{width:26px;height:26px;padding:4px}.service-info>header>.heading{display:flex;column-gap:6px;margin-bottom:16px}.service-info>header>.heading>.heading-logo{flex:0 0 auto;height:100px;width:100px;opacity:.2}.service-info>header>.heading>.heading-logo>image{width:100%;height:100%}.service-info>header>.heading>.heading-text>h1{margin:0}.service-info>header>.heading>.heading-text>.origin{display:block;font-style:italic;font-size:var(--recia-font-size-sm);line-height:150%}.service-info>header>.heading>.heading-text>.tag-category{margin-top:9px}.service-info>header>a,.service-info>header>button{width:100%}.service-info>.content{display:flex;flex-direction:column;gap:24px 58px;padding:24px 0}.service-info>.content>section.first-step>.video{display:flex;align-items:center;border-radius:4px;overflow:hidden}.service-info>.content>section.first-step>.video>*{aspect-ratio:16/9;width:100%;height:auto}.service-info>.content>section.description>div{line-height:150%}.service-info>.content>section.description>div a{color:inherit}.service-info>.content>section.description>div a:hover,.service-info>.content>section.description>div a:focus-visible{outline:none;color:var(--recia-system-blue)}.service-info>.content>section.description>div a:focus-visible{font-weight:700;text-decoration:underline 2px}.service-info>.content>section.description>div h1:not(:last-child),.service-info>.content>section.description>div h2:not(:last-child),.service-info>.content>section.description>div h3:not(:last-child),.service-info>.content>section.description>div p:not(:last-child),.service-info>.content>section.description>div blockquote:not(:last-child),.service-info>.content>section.description>div .media:not(:last-child),.service-info>.content>section.description>div ul:not(:last-child),.service-info>.content>section.description>div ol:not(:last-child){margin-bottom:1em}.service-info>.content>section.description>div h1:not(:first-child),.service-info>.content>section.description>div h2:not(:first-child),.service-info>.content>section.description>div h3:not(:first-child){margin-top:1em}.service-info>.content>section.description>div ul,.service-info>.content>section.description>div ol{margin-left:2em}.service-info>.content>section.description>div ul>li:not(:last-child),.service-info>.content>section.description>div ol>li:not(:last-child){margin-bottom:.5em}.service-info>.content>section.description>div img{max-width:100%}.service-info>.content>section.description>div figure.media iframe{max-width:100%}.service-info>.content>section.ressources>ul{padding-left:0;list-style:none}.service-info>.content>section.ressources>ul>li>a{color:var(--recia-system-blue);line-height:250%}.service-info>.content>section.ressources>ul>li>a:hover,.service-info>.content>section.ressources>ul>li>a:focus-visible{color:var(--recia-system-blue)}.service-info>.content>section.ressources>ul>li>a:focus-visible{outline:2px dotted var(--recia-system-blue);padding:4px 8px;margin:-4px -8px;border-radius:50px}.service-info>.content>section.ressources>a,.service-info>.content>section.ressources>button{margin-top:16px;font-size:unset}.service-info>footer{display:flex;flex-direction:column;gap:16px}.service-info>footer>a,.service-info>footer>button{width:100%}.service-info>footer>a.launch>svg,.service-info>footer>button.launch>svg{display:none}@media (width >= 768px){.service-info>header{display:flex;align-items:center;justify-content:space-between;padding-right:24px}.service-info>header>.heading{margin:0}.service-info>header>a,.service-info>header>button{width:unset}.service-info>.content{flex-direction:row;flex-wrap:wrap;padding:24px}.service-info>.content>section.description{flex:1 0 100%}.service-info>.content>section.description>h2{border:0!important;clip:rect(1px,1px,1px,1px)!important;-webkit-clip-path:inset(50%)!important;clip-path:inset(50%)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;width:1px!important;white-space:nowrap!important}.service-info>.content>section.first-step,.service-info>.content>section.ressources{flex:1 0 45%}.service-info>.content>section>ul>li>a{font-weight:700}.service-info>footer{flex-direction:row;justify-content:space-between;padding-top:32px}.service-info>footer>a,.service-info>footer>button{width:unset}.service-info>footer>a.launch>svg,.service-info>footer>button.launch>svg{display:unset}}`;var uc=Object.defineProperty,dc=Object.getOwnPropertyDescriptor,k=(t,e,n,a)=>{for(var i=a>1?void 0:a?dc(e,n):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(i=(a?o(e,n,i):o(i))||i);return a&&i&&uc(e,n,i),i};x.ReciaServiceInfoLayout=class extends bt{constructor(){super(),this.canTogglefavorite=!1,this.isFavorite=!1;const e=Rt.getPageLang();lc(e),Rt.setLocale(e),an(this)}shouldUpdate(e){return e.has("ressources")&&(!Array.isArray(this.ressources)||this.ressources.length===0)&&(this.ressources=[]),!0}static i18nOrigin(){return{[Dt.native]:w(u`Sercice natif`),[Dt.external]:w(u`Service externe`)}}toggleFavorite(e){this.isFavorite=!this.isFavorite,this.dispatchEvent(new CustomEvent("toggle-favorite",{detail:{favorite:this.isFavorite}}))}handleLinkClick(e){document.dispatchEvent(new CustomEvent("service-info-event",{detail:{event:e,fname:this.fname},bubbles:!0,composed:!0}))}videoTemplate(){return this.video?C`
          <section class="first-step">
            <h2 class="h3">${w(u`Premiers pas avec le service`)}</h2>
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
        `:b}ressourcesTemplate(){return this.ressources&&this.ressources.length>0?C`
        <section class="ressources">
          <h2 class="h3">${w(u`Ressources disponibles`)}</h2>
          <ul>
            ${Ri(this.ressources,e=>e,e=>C`
                  <li>
                    <a
                      href="${e.href}"
                      target="${e.target??b}"
                      rel="${e.rel??b}"
                    >
                      ${e.name}
                    </a>
                  </li>
                `)}
          </ul>
          ${this.ressourcesLink?C`
                  <a
                    href="${this.ressourcesLink.href}"
                    class="btn-secondary small"
                  >
                    ${w(u`Voir toutes les ressources`)}
                    ${Zt(Qe)}
                  </a>
                `:b}
        </section>
        `:b}render(){return C`
      <div class="service-info">
        <header>
          <div class="heading">
            ${this.iconUrl?C`
                    <svg class="heading-logo" aria-hidden="true">
                      <use href="${this.iconUrl}#icone"></use>
                    </svg>
                  `:b}
            <div class="heading-text">
              <h1>${this.name}</h1>
              ${this.origin&&Object.values(Dt).includes(this.origin)?C`
                      <span class="origin">
                        ${x.ReciaServiceInfoLayout.i18nOrigin()[this.origin]}
                      </span>
                    `:b}
              ${this.category&&Object.values(j).includes(this.category)?C`
                      <span class="tag-category ${this.category}">
                        ${co(this.category)}
                      </span>
                    `:b}
            </div>
          </div>
          ${this.canTogglefavorite?C`
                  <button
                    class="btn-secondary"
                    @click="${this.toggleFavorite}"
                  >
                    ${Fi(this.isFavorite,this.isFavorite?C`
                              ${Zt(Xa)}
                              ${w(u`Retirer des favoris`)}
                            `:C`
                              ${Zt(Va)}
                              ${w(u`Ajouter aux favoris`)}
                            `)}
                  </button>
                `:b}
        </header>
        <div class="content">
          <section class="description">
            <h2 class="h3">${w(u`Description`)}</h2>
            <div>${Di(this.description)}</div>
          </section>
          ${this.videoTemplate()}
          ${this.ressourcesTemplate()}
        </div>
        <footer>
          <button
            class="btn-secondary close"
            @click="${()=>this.dispatchEvent(new CustomEvent("close"))}"
          >
            ${w(u`Fermer`)}
          </button>
          ${this.launchLink?C`
                  <a
                    href="${this.launchLink.href}"
                    target="${this.launchLink.target??b}"
                    rel="${this.launchLink.rel??b}"
                    class="btn-primary launch"
                    @click="${this.handleLinkClick}"
                  >
                    ${w(u`Lancer le service`)}
                    ${Zt(Qe)}
                  </a>
                `:b}
        </footer>
      </div>
    `}},x.ReciaServiceInfoLayout.styles=li`${dn(fc)}`,k([P({type:String})],x.ReciaServiceInfoLayout.prototype,"fname",2),k([P({type:String,attribute:"icon-url"})],x.ReciaServiceInfoLayout.prototype,"iconUrl",2),k([P({type:String})],x.ReciaServiceInfoLayout.prototype,"name",2),k([P({type:String})],x.ReciaServiceInfoLayout.prototype,"origin",2),k([P({type:String})],x.ReciaServiceInfoLayout.prototype,"category",2),k([P({type:Boolean,attribute:"favorite-toggle"})],x.ReciaServiceInfoLayout.prototype,"canTogglefavorite",2),k([P({type:Boolean,attribute:"favorite",reflect:!0})],x.ReciaServiceInfoLayout.prototype,"isFavorite",2),k([P({type:String})],x.ReciaServiceInfoLayout.prototype,"description",2),k([P({type:String})],x.ReciaServiceInfoLayout.prototype,"video",2),k([P({type:Array})],x.ReciaServiceInfoLayout.prototype,"ressources",2),k([P({type:Object,attribute:"ressources-link"})],x.ReciaServiceInfoLayout.prototype,"ressourcesLink",2),k([P({type:Object,attribute:"launch-link"})],x.ReciaServiceInfoLayout.prototype,"launchLink",2),x.ReciaServiceInfoLayout=k([Ja()],x.ReciaServiceInfoLayout);const Ga=Ui("service-info-layout");customElements.get(Ga)||customElements.define(Ga,x.ReciaServiceInfoLayout);const hc={s053c80dfb273b703:u`Photo of the institution`,s0879a675a2208eb0:u`My account menu`,s130d574b67f1fd9b:u`Favorites`,s1744bdfd2aae7edc:u`Médiacentre`,s1c703460a5da79b1:u`Rorder to the left`,s26883f1a61fd0699:u`See all resources`,s358106e7a82ecfb0:u`Search`,s3aeb7a7330a293db:u`Clear search`,s49283da0ddbeccc2:u`Favorites menu`,s49e765aed0087b0e:u`Email`,s4ac64bd974adacb4:u`Back to home`,s4c45c541dc69732e:u`Start tutorial`,s5261563ad59a1fae:u`Manage`,s5be3c6d61cd9182f:u`Notifications`,s5ee26933a140671a:u`Cancel`,s602431f0eda0656c:u`Web site`,s62c4468340ffb130:u`Close menu`,s63d894b1ddb06289:u`Description`,s6d8c02aee480af7a:u`Menu`,s7b37041836cc3169:u`You have`,s7d6fe3c46c5ad168:u`Search for a service`,s8c72b686e1d78170:u`All services`,s8e501f157694decd:u`Native service`,s91fb0e685cae0940:u`Remove from favorites`,s97f93435ca295cf5:u`Institution`,s9d6fd95b48299f31:u`Notification drawer`,s9f48ad36dc7d460f:u`Add to favorites`,sa284edf05520f63f:u`Your favorites`,sadcdec056ba54dd9:u`Navigation drawer`,saeef3be08ad38e0f:u`No favorite service`,sb1ae6414f46b7471:u`My profile`,sba76902f0ee13f8d:u`In order for the change of institution to take effect, you must log out.

Do you agree to log out now?`,sbddc966a2760f55c:u`Change institution`,sbf71c25c7ca379d8:u`Institution info`,sc3a31f700d8e22a1:u`Logout`,sc9760fd20a454f56:u`Learn more`,sc9cc5c66b847c2fc:u`Phone number`,sd933c55b5ba171d6:u`Search ENT`,sdb9a884ccc06edf6:u`Delete favorite`,sdd2fffdf86bf5b6e:u`Address`,se1e9c7a19e8dd236:u`new`,se430513274f9b495:u`Save`,se627415befeda34d:u`Home`,se831b27916e38e5f:u`Rorder to the right`,se9bc00ac86dcb50b:u`Available resources`,sf0da99a184bafb7e:u`Close`,sf52ce9bda73f60a6:u`An error occurred while retrieving services.
Try refreshing the page.`,sf55d634dcc743595:u`Services`,sfaa072ad346ce9d6:u`Launch service`,sfb9d2d8c7ef581a9:u`External service`,sfd12a1f85c45fce6:u`No results`,sfde5e3a793d980c1:u`First steps with the service`,sf52f40951786e21e:u`Administration &amp; Support`,sf450bb4fc19737e8:u`Communication &amp; Collaboration`,sd46d46064b6bfd0b:u`Documents &amp; Ressources numériques`,s93417adf0c36d59b:u`Apprentissage &amp; Suivi`,s6a11501a42b1fd83:u`Services Citoyens &amp; Territoriaux`,sa70929987fb9a6d4:u`Services RH &amp; Gestion`},pc=Object.freeze(Object.defineProperty({__proto__:null,templates:hc},Symbol.toStringTag,{value:"Module"}));return Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}),x}({});
//# sourceMappingURL=r-service-info-layout.js.map