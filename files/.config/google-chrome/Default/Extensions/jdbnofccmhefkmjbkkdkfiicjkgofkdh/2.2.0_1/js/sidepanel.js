/*! (c) Philipp Koenig under MS-RSL */
(()=>{"use strict";if(window.jsu)return!1;const e=[],t=document,s=new WeakMap,n=new WeakMap,i=Symbol(),r={delay:(e=0)=>new Promise((t=>{setTimeout(t,e)})),ua:()=>{let e="Other",t="Other";try{e=navigator.userAgentData.platform}catch(e){}try{let e=navigator.userAgentData.brands.filter((e=>!/^[^a-z]*NOT[^a-z]/i.test(e.brand)));e=e.filter((t=>"CHROMIUM"!==t.brand.toUpperCase()||1===e.length)),e.length>0&&(t=e[0].brand+" "+(e[0].version||""))}catch(e){}return{os:e.trim(),browser:t.trim()}},xhr:(t,s={})=>new Promise(((n,i)=>{const r=new XMLHttpRequest,a=e.push({url:t,xhr:r})-1;s.mimeType&&r.overrideMimeType(s.mimeType),r.open(s.method||"GET",t,!0),["load","error","timeout","abort"].forEach((t=>{r.addEventListener(t,(()=>{e[a]=null,"load"===t&&r.status<400?n(r):i(r)}))}));let o=null;s.data&&(o=new FormData,Object.entries(s.data).forEach((([e,t])=>{"object"==typeof t&&(t=JSON.stringify(t)),o.append(e,t)}))),s.files&&(null===o&&(o=new FormData),s.files.forEach((e=>{e.files.forEach((t=>{o.append(e.name+"[]",t)}))}))),s.header&&Object.entries(s.header).forEach((([e,t])=>{r.setRequestHeader(e,t)})),Object.entries(s).forEach((([e,t])=>{"method"!==e&&"data"!==e&&"header"!==e&&(r[e]=t)})),r.send(o)})),cancelXhr:(t=null)=>{e.forEach((e=>{e&&e.xhr&&e.xhr.readyState&&e.xhr.abort&&(null===t||e.url===t)&&(e.xhr.abort(),e=null)}))}};class a{constructor(e,s=!0){let n=e;if("string"==typeof e&&(!1===s||e.indexOf("<")>-1)){const s=t.createElement("div");s.innerHTML=e,n=s.childNodes}this._fillNodeList(n)}static _isDefined(e){return null!=e}static _forEach(e,t,s=!1){const n=e.length;if(s){for(let i=n-1;i>=0;i--)if(a._isDefined(e[i].forEach))a._forEach(e[i],t,s);else if(!1===t(e[i],i))break}else for(let i=0;i<n;i++)if(a._isDefined(e[i].forEach))a._forEach(e[i],t,s);else if(!1===t(e[i],i))break}_fillNodeList(e){if(a._isDefined(e))if(e instanceof a)this[i]=e.get();else if("string"==typeof e)this[i]=t.querySelectorAll(e);else if(e instanceof Node||e instanceof HTMLDocument||e instanceof Window)this[i]=[e];else if(e instanceof NodeList||e instanceof HTMLCollection)this[i]=e;else{if("object"!=typeof e)throw new DOMException("invalid parameter for jsu");this[i]=[],a._isDefined(e.forEach)||(e=[e]),e.forEach((e=>{if(null!==e){const t=e=>{-1===this[i].indexOf(e)&&this[i].push(e)};e instanceof a?e.forEach(t):Array.isArray(e)||e instanceof NodeList||e instanceof HTMLCollection||/^\[object (HTMLCollection|NodeList|Object)\]$/.test(e.toString())?a._forEach(e,t):this[i].push(e)}}))}else this[i]=[];this.forEach(((e,t)=>{this[t]=e}))}forEach(e,t=!1){return a._forEach(this[i],e,t),this}css(e,t){let s=!1;const n=a._isDefined(e),r=a._isDefined(t),o=[];return this.forEach((i=>{n&&r&&"string"==typeof e?(i.style[e]=t,s=!0):n&&("string"==typeof e?o.push(window.getComputedStyle(i)[e]):"object"==typeof e&&(s=!0,Object.keys(e).forEach((t=>{"string"==typeof t&&(i.style[t]=e[t])}))))})),s?this:this[i].length>1?o:o[0]}attr(e,t){let s=!1;const n=a._isDefined(e),r=a._isDefined(t),o=[];return this.forEach((i=>{const l=(e,t)=>{s=!0,a._isDefined(i[e])?i[e]=t:i.setAttribute(e,t)};var c;n&&r&&"string"==typeof e?l(e,t):n&&("string"==typeof e?o.push((c=e,a._isDefined(i[c])?i[c]:i.getAttribute(c))):"object"==typeof e&&Object.keys(e).forEach((t=>{"string"==typeof t&&l(t,e[t])})))})),s?this:this[i].length>1?o:o[0]}removeAttr(e){return this.forEach((t=>{t.removeAttribute(e)})),this}static _addEventListener(e,t){let n=s.get(e);a._isDefined(n)||(n={},s.set(e,n)),n[t.event]||(n[t.event]=[]),n[t.event].push({fn:t.fn,name:t.name||t.event+"_"+ +new Date+Math.random().toString(36).substring(2,14),opts:t.opts,wantsUntrusted:t.wantsUntrusted}),e.addEventListener(t.event,t.fn,t.opts,t.wantsUntrusted)}static _cloneEventListener(e,t){const n=s.get(e);a._isDefined(n)&&Object.keys(n).forEach((e=>{n[e].forEach((s=>{a._addEventListener(t,{event:e,fn:s.fn,opts:s.opts,wantsUntrusted:s.wantsUntrusted})}))})),t.children&&a._forEach(t.children,((t,s)=>{a._cloneEventListener(e.children[s],t)}))}static _addData(e,t,s){let i=n.get(e);a._isDefined(i)||(i={},n.set(e,i)),i[t]=s}static _cloneData(e,t){const s=n.get(e);a._isDefined(s)&&Object.keys(s).forEach((e=>{a._addData(t,e,s[e])})),t.children&&a._forEach(t.children,((t,s)=>{a._cloneData(e.children[s],t)}))}static _cloneElement(e){const t=[];return e.forEach((e=>{const s=e.cloneNode(!0);a._cloneEventListener(e,s),a._cloneData(e,s),t.push(s)})),new a(t)}clone(){return a._cloneElement(this)}data(e,t){let s=!1;const r=a._isDefined(e),o=a._isDefined(t),l=[];return this.forEach((i=>{const c=n.get(i),d=a._isDefined(c);r&&o?(s=!0,a._addData(i,e,t)):r?"string"==typeof e?l.push(d?c[e]:void 0):"object"==typeof e&&(s=!0,Object.keys(e).forEach((t=>{"string"==typeof t&&a._addData(i,t,e[t])}))):l.push(d?c:{})})),s?this:this[i].length>1?l:l[0]}removeData(e){const t=!a._isDefined(e);return this.forEach((s=>{const i=n.get(s);a._isDefined(i)&&(t?n.delete(s):a._isDefined(i[e])&&delete i[e])})),this}on(e,t,s,n,i){const r=(e,t)=>{Object.keys(t).forEach((s=>{try{Object.defineProperty(e,s,{value:t[s]})}catch(e){}}))};let o=s;"function"==typeof s?o=n:i=n,void 0===o&&(o=null),void 0===i&&(i=null);const l="string"==typeof t;return this.forEach((n=>{e.split(/\s+/g).forEach((e=>{const c=e.split(/\./);a._addEventListener(n,{event:c[0],name:c[1],fn:e=>{if(r(e,{type:c[0]}),l){const i={preventDefault:()=>{e.preventDefault()},stopPropagation:()=>{e.stopPropagation()}};a._forEach(n.querySelectorAll(":scope "+t),(t=>{let a=e.target;for(;a&&a!==n;){if(a===t){const t=c[0].startsWith("key")?new KeyboardEvent(c[0],e):new MouseEvent(c[0],e);r(t,{preventDefault:i.preventDefault,stopPropagation:i.stopPropagation,currentTarget:a,target:e.target}),s(t)}a=a.parentNode}}))}else"function"==typeof t&&t(e)},opts:o,wantsUntrusted:i})}))}),!0),this}off(e){return this.forEach((t=>{const n=s.get(t);if(a._isDefined(n)){e.split(/\s+/g).forEach((e=>{const s=e.split(/\./);"*"===s[0]?Object.entries(n).forEach((([e,i])=>{a._forEach(i,((i,r)=>{void 0!==s[1]&&s[1]!==i.name||(t.removeEventListener(e,i.fn),n[e].splice(r,1))}),!0)})):n[s[0]]&&a._forEach(n[s[0]],((e,i)=>{void 0!==s[1]&&s[1]!==e.name||(t.removeEventListener(s[0],e.fn),n[s[0]].splice(i,1))}),!0)}))}})),this}trigger(e,t){return e.split(/\s+/g).forEach((e=>{const s=e.split(/\./),n=new CustomEvent(s[0],t);this.forEach((e=>{e.dispatchEvent(n)}))})),this}addClass(e){return"object"!=typeof e&&(e=[e]),this.forEach((t=>{e.forEach((e=>{t.classList.contains(e)||t.classList.add(e)}))})),this}removeClass(e){return"object"!=typeof e&&(e=[e]),this.forEach((t=>{e.forEach((e=>{t.classList.contains(e)&&t.classList.remove(e)}))})),this}toggleClass(e){return this.forEach((t=>{t.classList.toggle(e)})),this}hasClass(e){const t=[];return this.forEach((s=>{t.push(s.classList.contains(e))})),this[i].length>1?t:t[0]}_realDimension(e,t=!1){const s=[];let n="width",r=["left","right"];return"h"===e&&(n="height",r=["top","bottom"]),this.forEach((e=>{const i=e.getBoundingClientRect(),a=window.getComputedStyle(e);let o=parseFloat((i[n]+"").replace(/,/g,"."));t&&r.forEach((e=>{const t=a.getPropertyValue("margin-"+e);o+=parseFloat((t+"").replace(/,/g,"."))})),s.push(o)})),this[i].length>1?s:s[0]}realWidth(e=!1){return this._realDimension("w",e)}realHeight(e=!1){return this._realDimension("h",e)}find(e){const t=[];return this.forEach((s=>{s instanceof HTMLIFrameElement?t.push(s.contentDocument.querySelectorAll(":scope "+e)):t.push(s.querySelectorAll(":scope "+e))})),new a(t)}children(e){const t=[];return e||(e="*"),this.forEach((s=>{t.push(s.querySelectorAll(":scope > "+e))})),new a(t)}_htmlText(e,t){const s=a._isDefined(e);let n=s?this:"";return this.forEach((i=>{s?i[t]=e:n+=i[t]})),n}html(e){return this._htmlText(e,"innerHTML")}text(e){return this._htmlText(e,"innerText")}remove(){this.forEach((e=>{e&&e.parentElement&&(s.delete(e),n.delete(e),e.parentElement.removeChild(e))}))}_moveElement(e,t,s=!0){if(Array.isArray(e))e.forEach((e=>{this._moveElement(e,t,s)}));else{"string"==typeof e&&e.indexOf("<")>-1&&(s=!1);const n=new a(e,s);this.forEach((e=>{a._cloneElement(n).forEach((s=>{switch(t){case"append":e.appendChild(s);break;case"prepend":e.insertBefore(s,e.firstChild);break;case"before":e.parentNode.insertBefore(s,e);break;case"after":e.parentNode.insertBefore(s,e.nextSibling)}}))})),n.remove()}return this}_moveElementTo(e,t){const s=[];return new a(e).forEach((e=>{a._cloneElement(this).forEach((n=>{switch(t){case"append":e.appendChild(n);break;case"prepend":e.insertBefore(n,e.firstChild);break;case"before":e.parentNode.insertBefore(n,e);break;case"after":e.parentNode.insertBefore(n,e.nextSibling)}s.push(n)}))})),this.remove(),new a(s)}append(e,t){return this._moveElement(e,"append",t)}appendTo(e){return this._moveElementTo(e,"append")}prepend(e,t=!0){return this._moveElement(e,"prepend",t)}prependTo(e){return this._moveElementTo(e,"prepend")}before(e,t=!0){return this._moveElement(e,"before",t)}insertBefore(e){return this._moveElementTo(e,"before")}after(e,t=!0){return this._moveElement(e,"after",t)}insertAfter(e){return this._moveElementTo(e,"after")}_nextPrev(e,t){const s=a._isDefined(e),n=[];return this.forEach((i=>{const r="prev"===t?i.previousElementSibling:i.nextElementSibling;a._isDefined(r)&&(!s||a._isDefined(r.matches)&&r.matches(e))&&n.push(r)})),new a(n)}next(e){return this._nextPrev(e,"next")}prev(e){return this._nextPrev(e,"prev")}_siblings(e,t="siblings"){const s=a._isDefined(e),n=[];return this.forEach((i=>{let r=null;const o=[];for("siblings"===t&&i.parentNode.firstElementChild?(r=i.parentNode.firstElementChild,t="next"):"previous"!==t&&"next"!==t||(r=i[t+"ElementSibling"]);r&&r.matches;)r===i||s&&!r.matches(e)||o.push(r),r=r[t+"ElementSibling"];n.push(new a(o))})),this[i].length>1?new a(n):n[0]}siblings(e){return this._siblings(e)}nextAll(e){return this._siblings(e,"next")}prevAll(e){return this._siblings(e,"previous")}parent(e){const t=a._isDefined(e),s=[];return this.forEach((n=>{let i=n.parentNode;!t||a._isDefined(i.matches)&&i.matches(e)||(i=null),s.push(new a(i))})),this[i].length>1?new a(s):s[0]}parents(e){const t=a._isDefined(e),s=[];return this.forEach((n=>{const i=[];let r=n.parentNode;for(;r&&r.matches&&r!==this;)t&&!r.matches(e)||i.push(r),r=r.parentNode;s.push(new a(i))})),this[i].length>1?new a(s):s[0]}document(){const e=[];return this.forEach((t=>{e.push(new a(t.ownerDocument))})),this[i].length>1?new a(e):e[0]}eq(e){return e<0&&(e=this[i].length+e),new a(this[i][e])}get(e){return a._isDefined(e)?(e<0&&(e=this[i].length+e),this[i][e]):this[i]}length(){return this[i].length}}(()=>{const e=e=>new a(e);Object.entries(r).forEach((([t,s])=>{e[t]=s})),window.jsu=e})()})(),(e=>{"use strict";e.api=chrome,e.opts={ids:{page:{iframe:"redeviation-bs-sidebar",overlay:"redeviation-bs-overlay",newtab:"redeviation-bs-newtab",indicator:"redeviation-bs-indicator"},sidebar:{sidebar:"sidebar",infoBox:"infoBox",bookmarkBox:{all:"bookmarkBox",search:"bookmarkBoxSearch"}},overlay:{urlCheckResult:"results"}},classes:{active:"active",visible:"visible",hidden:"hidden",disabled:"disabled",success:"success",selected:"selected",premium:"premium",error:"error",info:"info",add:"add",cancel:"cancel",close:"close",hover:"hover",loading:"loading",building:"building",initLoading:"initLoading",page:{dark:"dark",visible:"redeviation-bs-visible",hideMask:"redeviation-bs-hideMask",hover:"redeviation-bs-hover",noscroll:"redeviation-bs-noscroll",hasLeftsideBack:"redeviation-bs-has-lsb",style:"redeviation-bs-style",fullHeight:"redeviation-bs-fullHeight",noAnimations:"noAnimations",highContrast:"highContrast"},sidebar:{extLoaded:"loaded",selectionMode:"selectionMode",openedOnce:"openedOnce",sidepanel:"sidepanel",permanent:"permanent",cached:"cached",mark:"mark",hideRoot:"hideRoot",dirAnimated:"animated",dirOpened:"opened",dirArrow:"has-arrow",bookmarkDir:"dir",dirIcon:"icon",separator:"separator",bookmarkLink:"link",bookmarkLabel:"label",entryPinned:"pinned",menu:"menu",sort:"sort",fixed:"fixed",lockPinned:"lockPinned",lastHover:"lastHover",copied:"copied",filterBox:"filter",search:"search",searchBox:"searchBox",searchClose:"searchClose",searchVisible:"searchVisible",breadcrumb:"breadcrumb",removeSelected:"removeSelected",openSelected:"openSelected",removeMask:"removeMask",removed:"removed",restored:"restored"},tooltip:{wrapper:"tooltip"},contextmenu:{wrapper:"contextmenu",top:"top",list:"list",icons:"icons",right:"right",separator:"separator"},drag:{trigger:"drag",helper:"dragHelper",isDragged:"isDragged",cancel:"dragCancel",dragHover:"dragHover",snap:"snap",dragInitial:"dragInitial"},scrollBox:{wrapper:"scrollBox",hideScrollbar:"hideScrollbar",scrolled:"scrolled"},checkbox:{box:"checkbox",clicked:"clicked",focus:"focus"},overlay:{modal:"modal",preview:"preview",previewUrl:"previewUrl",action:"action",progressBar:"progressBar",buttonWrapper:"buttons",checkUrlProgressLabel:"progressLabel",urlCheckLoading:"urlCheckLoading",urlCheckCategories:"categories",urlCheckAction:"urlCheckAction",urlCheckHide:"urlCheckHide",urlCheckResults:"urlCheckResults"},newtab:{customBackground:"customBackground",smallContent:"small",suggestions:"suggestions",edit:"edit",link:"link",editLinkTooltip:"editLinkTooltip",permanentSidebar:"permanentSidebar",listening:"listening",remove:"remove",infoBar:"infoBar",upload:"upload",save:"save"},onboarding:{slide:"slide",skip:"skip",close:"close",settings:"settings",toggleArea:"toggleArea",appearance:"appearance",finished:"finished",highlightIcon:"highlightIcon",hideOpenTypeIcon:"hideOpenType",video:"video",large:"large",small:"small"},settings:{tabs:{content:"tab"},color:{field:"color",mask:"colorMask"},radio:{wrapper:"radioWrapper"},translation:{select:"languageSelect",category:"category",thanks:"thanks",edit:"edit",progress:"progress",mark:"mark",requiredInfo:"requiredInfo",amountInfo:"amountInfo",empty:"empty",back:"back",goto:"goto"},toggleArea:{fullHeight:"fullHeight",dragged:"dragged",dragging:"dragging"},appearance:{preview:{fullHeight:"redeviation-bs-fullHeight"}},support:{onlySuggestions:"onlySuggestions",answer:"answer",noHeight:"noHeight",absolute:"absolute"},hideable:"hideable",inactive:"inactive",revert:"revert",highlight:"highlight",lazyloaded:"lazyloaded",sub:"sub",desc:"desc",box:"box",dialog:"dialog",boxWrapper:"boxWrapper",contentBox:"contentBox",incomplete:"incomplete",suggestion:"suggestion"}},attr:{uid:"data-redeviation-bs-uid",src:"data-src",position:"data-pos",type:"data-type",name:"data-name",value:"data-value",theme:"data-theme",sort:"data-sort",direction:"data-direction",style:"data-style",id:"data-id",i18n:"data-i18n",i18nReplaces:"data-i18nReplaces",onboarding:{openType:"data-openType",surface:"data-surface"},settings:{appearance:"data-appearance",success:"data-successtext",hideOnFalse:"data-hideOnFalse",save:"data-save",restore:"data-restore",range:{min:"data-min",max:"data-max",step:"data-step",unit:"data-unit",infinity:"data-infinity"},color:{alpha:"data-alpha",suggestions:"data-suggestions"},field:{placeholder:"data-placeholder"},translation:{releaseStatus:"data-status",language:"data-lang"}}},events:{loaded:"redeviation-bs-loaded",elementsCreated:"redeviation-bs-created",openSidebar:"redeviation-bs-sidebar-open",sidebarOpened:"redeviation-bs-sidebar-opened",overlayClosed:"redeviation-bs-overlay-closed",systemColorChanged:"redeviation-bs-system-color-changed",checkboxChanged:"redeviation-bs-checkbox-changed",scrollBoxLastPart:"redeviation-bs-scrollbox-lastpart",premiumPurchased:"redeviation-bs-premiumPurchased",showFeedbackForm:"redeviation-bs-feedback",lsbLoaded:"redeviation-lsb-loaded",pageChanged:"redeviation-bs-pageChanged"},website:{info:{landing:"https://extensions.redeviation.com/",privacyPolicy:"https://extensions.redeviation.com/privacy/bs",changelog:"https://extensions.redeviation.com/changelog/bs",uninstall:"https://extensions.redeviation.com/uninstall/bs"},premium:{checkout:"https://extensions.redeviation.com/premium/bs/checkout",checkLicenseKey:"https://extensions.redeviation.com/ajax/premium/bs/check"},feedback:{form:"https://extensions.redeviation.com/ajax/feedback",suggestions:"https://extensions.redeviation.com/ajax/feedback/suggestions"},translation:{info:"https://extensions.redeviation.com/ajax/translation/bs/info",langvars:"https://extensions.redeviation.com/ajax/translation/bs/langvars",submit:"https://extensions.redeviation.com/ajax/translation/bs/submit"},api:{checkStatus:"https://extensions.redeviation.com/ajax/status/bs",evaluate:"https://extensions.redeviation.com/api/evaluate/log"}},urlAliases:{Edge:{"chrome://newtab/":"edge://newtab/","chrome://bookmarks":"edge://favorites","chrome://extensions/shortcuts":"edge://extensions/shortcuts","chrome://settings/syncSetup":"edge://settings/profiles/sync","https://extensions.redeviation.com/img/illustration/video_sidepanel.mp4":"https://extensions.redeviation.com/img/illustration/edge/video_sidepanel.mp4","https://extensions.redeviation.com/img/illustration/video_overlay.mp4":"https://extensions.redeviation.com/img/illustration/edge/video_overlay.mp4"},Opera:{"chrome://newtab/":"chrome://startpageshared/","chrome://bookmarks":"opera://bookmarks","chrome://extensions/shortcuts":"opera://settings/keyboardShortcuts"}},leftsideBackSelector:"div#redeviation-lsb-indicator.redeviation-lsb-visible",manifest:e.api.runtime.getManifest(),demoMode:!1},e.isDev="Dev"===e.opts.manifest.version_name||!("update_url"in e.opts.manifest),e.copyrightDate=2016,e.browserName="Chrome",/EDG\//i.test(navigator.userAgent)?e.browserName="Edge":/OPERA|OPR\//i.test(navigator.userAgent)?e.browserName="Opera":/FIREFOX\//i.test(navigator.userAgent)&&(e.api=browser,e.browserName="Firefox"),e.cl=e.opts.classes,e.attr=e.opts.attr;(new function(){this.run=async()=>{t()};const t=()=>new Promise((t=>{e("["+e.attr.type+"='script_sidebar']").remove(),e.opts.manifest.content_scripts[0].css.forEach((t=>{e("<link />").attr({href:e.api.runtime.getURL(t),type:"text/css",rel:"stylesheet",[e.attr.type]:"script_sidebar"}).appendTo("head")}));const s=(n=0)=>{let i=e.opts.manifest.content_scripts[0].js[n];if(void 0!==i){const t=document.createElement("script");document.head.appendChild(t),t.onload=()=>s(n+1),i.includes("://")||(i="/"+i),t.src=i,e(t).attr(e.attr.type,"script_sidebar")}else t()};s()}))}).run()})(jsu);