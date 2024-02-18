(()=>{"use strict";const e={loginText:["تسجيل الدخول","ছাইন ইন","Daxil ol","Уваход","Влизане","সাইন-ইন","সাইন ইন","ཐོ་འཇུག","Prijavi se","Iniciar la sessió","Přihlásit","Log ind","Anmelden","Σύνδεση","Sign in","Log in","Iniciar sesión","Iniciar sesión","Logi sisse","Hasi saioa","ورود به سیستم","Kirjaudu sisään","Se connecter","Se connecter","Sínigh isteach","Iniciar sesión","સાઇન ઇન કરો","साइन इन करें","Prijavi se","Bejelentkezés","Մտնել","Masuk","Skrá inn","Accedi","היכנס","サインイン","შესვლა","Жүйеге кіру","ចុះឈ្មោះចូល","ಸೈನ್ ಇನ್","로그인","Кирүү","ລົງຊື່ເຂົ້າໃຊ້","Prisijungti","Pierakstīties","Најави се","സൈൻ ഇൻ ചെയ്യുക","Нэвтэр","साइन इन करा","Log masuk","ဝင်ရောက်ရန်","ဝင္ေရာက္ရန္","Logg på","साइन इन गर्नुहोस्","साइन इन गर्नुहोस्","Inloggen","ସାଇନ୍ ଇନ୍","ਸਾਈਨ ਇਨ ਕਰੋ","Zaloguj","Zaloguj","Entrar","Iniciar sessão","Conectare","Войти","පිවිසෙන්න","පිවිසෙන්න","Prihlásiť sa","Prijava","Hyr me sign-in","Prijavi se","Logga in","உள்நுழையவும்","సైన్ ఇన్ చేయి","Ворид шудан","เข้าสู่ระบบ","Hasaba gir","Mag-sign in","Oturum aç","ھېسابقا كىرىش","Увійти","سائن ان کریں","Kirish","Đăng nhập","登录","登入","登入"],UsernameFieldNames:["username","user name","email","email address","e-mail","e-mail address","userid","user id","customer id","login id","user-name","user-id","screen-name"],PasswordFieldIgnoreList:["onetimepassword","captcha","findanything","forgot"],LoginButtonName:["log in","sign in","login","go","submit","continue","next"],CancelButtonNames:["cancel","close","back"]};let t,n,i,o=[],a=!1,l=[],r=[],s=[],d=null,c=!1,u=!1,m=!1,f=null,p=!1,g="";function h(e){return new Promise(((t,n)=>setTimeout(t,e)))}function E(e){if(chrome&&chrome.runtime&&chrome.runtime.sendMessage)try{chrome.runtime.sendMessage(e)}catch(e){}}function y(){E({cmd:"PASSWORD_ENABLE_STATUS"}),chrome.storage.local.get(["PASS_APP_STATUS","isLoggedOut","AUTOFILL_PASSWORD_ENABLED","SAVE_PASSWORD_ENABLED"],(e=>{u="SECURED"==e.PASS_APP_STATUS&&"1"==e.isLoggedOut&&"0"!=e.AUTOFILL_PASSWORD_ENABLED,m="SECURED"==e.PASS_APP_STATUS&&"1"==e.isLoggedOut&&"0"!=e.SAVE_PASSWORD_ENABLED,u||(V(),r=[],s=[]),m||a||z()}))}function S(){document.getElementById("si-verify-cert")&&document.getElementById("si-verify-cert").remove()}function w(){return window.self!==window.top}function v(e,t){let n=e[t];return"string"==typeof n?n:(n=e.getAttribute(t),"string"==typeof n?T(n):null)}function L(e){return"string"==typeof e?e.toLowerCase():`${e}`.toLowerCase()}function b(e){let t=[];try{t=document.querySelectorAll(e)}catch(e){}return Array.prototype.slice.call(t)}function T(e){let t="";return e&&(t=e.replace(/^\\s+|\\s+$|\\r?\\n.*$/gm,""),t=t.length>0?t.trim():""),t}function A(e){if(e){const t=["select","option","input","form","textarea","button","table","iframe","body","head","script"],n=e?(e.tagName||"").toLowerCase():"";return t.indexOf(n)>=0}return!0}function _(e){let t=e;e=(e=e.ownerDocument)?e.defaultView:{};for(var n;t&&t!==document;){if(!(n=e.getComputedStyle?e.getComputedStyle(t,null):t.style))return!0;if("none"===n.display||"hidden"==n.visibility)return!1;t=t.parentNode}return t===document}function C(e,t){let n="";3===t.nodeType?n=t.nodeValue:1===t.nodeType&&(n=t.textContent||t.innerText),(n=T(n))&&e.push(n)}function N(e,t,n){let i;for(n||(n=0);e&&e.previousSibling;){if(A(e=e.previousSibling))return;C(t,e)}if(e&&0===t.length){for(i=null;!i;){if(!(e=e.parentElement||e.parentNode))return;for(i=e.previousSibling;i&&!A(i)&&i.lastChild;)i=i.lastChild}A(i)||(C(t,i),0===t.length&&N(i,t,n+1))}}function I(e){if(e){const t=e.className.split(" ").filter((e=>!!e)).join(".");return`${e.tagName.toLowerCase()}${e.id?"#"+e.id:""}${t?"."+t:""}${e.name?"[name="+e.name+"]":""}`}return""}function O(e,t){e.value=t,e.click(),e.focus(),e.dispatchEvent(x(e,"keydown")),e.dispatchEvent(x(e,"keypress")),e.dispatchEvent(x(e,"keyup")),e.value!==t&&(e.value=t)}function P(e,t){e.value=t,e.dispatchEvent(x(e,"keydown")),e.dispatchEvent(x(e,"keypress")),e.dispatchEvent(x(e,"keyup"));const n=e.ownerDocument.createEvent("HTMLEvents"),i=e.ownerDocument.createEvent("HTMLEvents");i.initEvent("input",!0,!0),e.dispatchEvent(i),n.initEvent("change",!0,!0),e.dispatchEvent(n),e.blur(),e.value!==t&&(e.value=t)}function x(e,t){let n;return"KeyboardEvent"in window?n=new window.KeyboardEvent(t,{bubbles:!0,cancelable:!1}):(n=e.ownerDocument.createEvent("Events"),n.initEvent(t,!0,!1),n.charCode=0,n.keyCode=0,n.which=0,n.srcElement=e,n.target=e),n}function R(){return document,{inputs:function(e){let t=[];try{t=b(`input${["hidden","submit","reset","button","image","file","radio","checkbox","date","datetime-local","month","range","time","url","week"].map((e=>':not([type="'+e+'"])')).join("")}`)}catch(e){}return t.length<=100?t:t.slice(0,100)}().map(((e,t)=>{const n={},i=`si_input_${t}`;e.dataset.siid=i,n.siid=i,n.index=t,n.visible=_(e),n.viewable=function(e){const t=e.ownerDocument.documentElement,n=e.getBoundingClientRect(),i=t.scrollWidth,o=t.scrollHeight,a=n.left-t.clientLeft,l=n.top-t.clientTop;let r;if(!_(e)||!e.offsetParent||e.clientWidth<10||e.clientHeight<10)return!1;const s=e.getClientRects();if(0===s.length)return!1;for(let e=0;e<s.length;e++)if(r=s[e],r.left>i||r.right<0)return!1;if(a<0||a>i||l<0||l>o)return!1;const d=a+(n.right>window.innerWidth?(window.innerWidth-a)/2:n.width/2),c=l+(n.bottom>window.innerHeight?(window.innerHeight-l)/2:n.height/2);for(var u=e.ownerDocument.elementFromPoint(d,c);u&&u!==e&&u!==document;){if(u.tagName&&"string"==typeof u.tagName&&"label"===u.tagName.toLowerCase()&&e.labels&&e.labels.length>0)return Array.prototype.slice.call(e.labels).indexOf(u)>=0;u=u.parentNode}return u===e}(e),n.id=v(e,"id"),n.name=v(e,"name"),n.class=v(e,"class"),n.title=v(e,"title"),n.tagName=e.tagName.toLowerCase(),n.labelTag=function(e){let t,n=[];if(e.labels&&e.labels.length&&e.labels.length>0)n=Array.prototype.slice.call(e.labels);else{if(e.id&&(n=n.concat(b(`label[for=${JSON.stringify(e.id)}]`))),e.name){t=b(`label[for=${JSON.stringify(e.name)}]`);for(let e=0;e<t.length;e++)-1===n.indexOf(t[e])&&n.push(t[e])}for(var i=e;i&&i!=document;i=i.parentNode)"label"===L(i.tagName)&&-1===n.indexOf(i)&&n.push(i)}return 0===n.length&&(i=e.parentNode).tagName&&"dd"===i.tagName.toLowerCase()&&null!==i.previousElementSibling&&i.previousElementSibling.tagName&&"dt"===i.previousElementSibling.tagName.toLowerCase()&&n.push(i.previousElementSibling),n.length<0?null:T(n.map((e=>(e.textContent||e.innerText).replace(/^\\s+/,"").replace(/\\s+$/,"").replace(/\\s{2,}/," "))).join(""))}(e),n.labelData=v(e,"data-label"),n.labelAria=v(e,"data-aria"),n.labelTop=function(e){let t;for(e=e.parentElement||e.parentNode;e&&"td"!=L(e.tagName);)e=e.parentElement||e.parentNode;return e?(t=e.parentElement||e.parentNode,"tr"!=t.tagName.toLowerCase()?null:(t=t.previousElementSibling,!t||"tr"!=`${t.tagName}`.toLowerCase()||t.cells&&e.cellIndex>=t.cells.length?null:T((e=t.cells[e.cellIndex]).textContent||e.innerText))):null}(e);let o=[];for(let t=e;t&&t.nextSibling&&(t=t.nextSibling,!A(t));)C(o,t);n.labelRight=T(o.join("")),o=[],N(e,o),o=o.reverse().join(""),n.labelLeft=T(o),n.placeholder=v(e,"placeholder"),n.rel=v(e,"rel"),n.type=L(v(e,"type")),n.value=v(e,"value"),n.disabled=e.disabled,n.readonly=e.readOnly,n.top=e.offsetTop,n.left=e.offsetLeft;const a=getComputedStyle(e);return n.width=e.clientWidth-parseFloat(a.paddingLeft)-parseFloat(a.paddingRight),n.height=e.clientHeight-parseFloat(a.paddingTop)-parseFloat(a.paddingBottom),n})),scanTime:Date.now()}}function D(e,t){const n=["id","name","label-tag","label-aria","placeholder"];for(let i=0;i<t.length;i++)t[i].indexOf("=")>-1&&n.forEach((n=>{if(U(e,n,t[i],n))return i})),n.forEach((n=>{if(B(e,n,t[i]))return i}));return-1}function U(e,t,n,i,o="="){if(0===n.indexOf(i+o)){const i=n.indexOf(o),a=n.substring(i+1);return null!=a&&B(e,t,a)}return!1}function B(e,t,n){let i=e[t];if(!(o=i)||""===o)return!1;var o;if(i=i.trim().replace(/(?:\r\n|\r|\n)/g,""),n.startsWith("regex="))try{const e=n.split("=",2);if(2===e.length)return new RegExp(e[1],"i").test(i)}catch(e){}else if(n.startsWith("csv=")){const e=n.split("=",2);if(2===e.length){const t=e[1].split(",");for(let e=0;e<t.length;e++){const n=t[e];if(null!=n&&n.trim().toLowerCase()===i.toLowerCase())return!0}return!1}}return i.toLowerCase()===n}function k(t,n,i,o,a){const l=[];return t.inputs.forEach((t=>{const r="password"===t.type,s=t=>{if(null==t)return!1;const n=t.toLowerCase().replace(/[\s_\-]/g,"");return!(n.indexOf("password")<0||e.PasswordFieldIgnoreList.some((e=>n.indexOf(e)>-1)))};t.disabled||!i&&t.readonly||!(r||"text"===t.type&&(s(t.id)||s(t.name)||s(t.placeholder)))||!n&&!t.viewable||o&&null!=t.value&&""!==t.value.trim()||!a&&"new-password"===t.autoCompleteType||l.push(t)})),l}function F(t,n,i,o,a){let l=null;for(let r=0;r<t.inputs.length;r++){const s=t.inputs[r];if(s.index>=n.index)break;if(!s.disabled&&(o||!s.readonly)&&(a||s.form===n.form)&&(i||s.viewable)&&("text"===s.type||"email"===s.type||"tel"===s.type)&&s.width>=n.width/2&&s.width<=2*n.width&&s.height>=n.height/2&&s.height<=2*n.height&&(l=s,D(s,e.UsernameFieldNames)>-1))break}return l}function W(e){e.target.classList.contains("disabled")?(function(e){document.getElementById("si-toast")&&document.getElementById("si-toast").remove();const t=document.createElement("div");t.id="si-toast",document.body.appendChild(t);const n=document.createElement("div");n.className="si-toast-content",n.innerHTML=e,t.appendChild(n),n.classList.add("show"),setTimeout((()=>{n.classList.add("hide"),setTimeout((()=>{t.removeChild(n)}),500)}),3e3)}(chrome.i18n.getMessage("DREAM_BR_BODY_COULDNT_GET_USER_ID_AND_PASSWORD_FROM_SAMSUNG_PASS")),c=!1,$()):j(e)}function $(e){e&&document.getElementById(e)?document.getElementById(e).remove():document.querySelectorAll(".si-ext-auto-fill-btn").forEach((e=>e.remove()))}function H(e){const t=document.getElementById("div-si-ext-auto-fill-btn");t&&i&&(t.style.left=i.offsetWidth+i.getBoundingClientRect().left-24-10+"px",t.style.top=`${i.getBoundingClientRect().top+(i.offsetHeight-24)/2}px`)}function M(e){if(d&&(d.removeEventListener("scroll",H),d=null),c)return;$();const t=e?e.value:"";if(s=r.filter((e=>e.username.indexOf(t)>=0)),!u||0==r.length||0==s.length||0==o.length||p)return;if(!e||!_(e))return;i=e;const n=e.value,a="1"==e.dataset.siPw;let l=!0;n&&(a||0==r.filter((e=>e.username.indexOf(n)>=0)).length)&&(l=!1);const m=document.getElementById("div-si-ext-auto-fill-btn");if(m&&m.parentElement!=e.parentElement&&m.remove(),l){let t,n,i,o=!1;document.getElementById("div-si-ext-auto-fill-btn")?(i=document.getElementById("div-si-ext-auto-fill-btn"),o=!0):(i=document.createElement("div"),t=document.createElement("img"),t.src=chrome.runtime.getURL("assets/img/internet_pc_ic_samsungpass.svg"),t.id="si-ext-auto-fill-btn-icon",t.className="si-ext-auto-fill-btn-icon",t.dataset.index=0),i.id="div-si-ext-auto-fill-btn",i.className="si-ext-auto-fill-btn",i.style.zIndex=(parseInt(getComputedStyle(e).zIndex)||0)+1;const a=function(e){let t=e;const n=["relative","absolute","fixed","sticky"];for(;;){if(n.indexOf(getComputedStyle(t).position)>=0)return t;if(!t.parentElement)break;t=t.parentElement}return null}(e.parentElement);if(a){const t=(f=e,g=a.getBoundingClientRect(),h=f.getBoundingClientRect(),(E={}).top=h.top-g.top,E.left=h.left-g.left,E);i.style.left=e.offsetWidth+t.left-24-10+"px",i.style.top=`${t.top+(e.offsetHeight-24)/2}px`}else i.style.left=e.offsetWidth+e.getBoundingClientRect().left-24-10+"px",i.style.top=`${e.getBoundingClientRect().top+(e.offsetHeight-24)/2}px`,d=function(e,t){var n=getComputedStyle(e),i="absolute"===n.position,o=/(auto|scroll)/;if("fixed"===n.position)return document.body;for(var a=e;a=a.parentElement;)if(n=getComputedStyle(a),(!i||"static"!==n.position)&&o.test(n.overflow+n.overflowY+n.overflowX))return a;return document.body}(e),d!==document.body&&d.addEventListener("scroll",H);o||(i.addEventListener("click",W),n=i.attachShadow({mode:"closed"}),n.appendChild(t),e.parentElement.appendChild(i))}var f,g,h,E}async function j(e,i){if(await new Promise((async e=>{if(document.getElementById("si-auto-fill"))return e();let t,n;n=document.createElement("div"),n.id="si-auto-fill",n.dataset.index=0,t=n.attachShadow({mode:"closed"});const i=document.createElement("iframe");K(i);let o=100;for(;!g&&o>0;)await h(100),o--;g||(g=location.origin+"/"),i.src=chrome.runtime.getURL("password-autofill.html?originUrl="+g),t.appendChild(i),document.body.appendChild(n),setTimeout(e,50)})),!n&&!t)return;if(!i){if(!u||!e.isTrusted||0==r.length||0==o.length)return;if(e.preventDefault(),"click"==e.type&&1==r.length)return void G(r[0])}const a=n?n.value.toLowerCase():"";s=i?r:r.filter((e=>e.username.toLowerCase().indexOf(a)>=0));let l=i?r:r.filter((e=>e.username.toLowerCase().indexOf(a)>=0));if(l.length){let i=0,o=0;l.forEach((e=>{8*e.username.length>i&&(i=8*e.username.length);let t=e.hostUrl.replace("www.","").replace("http://","").replace("https://",""),n=g.replace("www.","").replace("http://","").replace("https://","");t.length&&"/"!==t[t.length-1]&&(t+="/"),n.length&&"/"!==n[n.length-1]&&(n+="/"),t!=n&&7*t.length>o&&(o=7*t.length)}));let r,s=(i>o?i:o)+100;s=s<300?s:300,t&&n?r=_(n)?_(t)&&t&&(e.currentTarget==t||"focusin"==e.type&&e.target==t)?t:n:t:t?r=t:n&&(r=n);const d=r.getBoundingClientRect();let c=document.getElementById("si-auto-fill");const u=60+(52*l.length<120?52*l.length:120);c.style.height=u+"px",c.style.width=s+"px";let m=d.left+r.offsetWidth+10,f=d.top;for(m+s>window.innerWidth&&(m=d.left-s),m<0&&(m=r.offsetWidth>s+50?d.left+r.offsetWidth-s:0);f+u>window.innerHeight;)f-=10;f+=window.scrollY,c.style.top=f+"px",c.style.left=m+"px",document.removeEventListener("click",q),c.style.display="block",setTimeout((()=>{E({cmd:"SEND_CREDENTIAL_TO_AUTOFILL",data:l,filter:a}),document.addEventListener("click",q)}),10)}else V()}function V(e){document.getElementById("si-auto-fill")&&(document.getElementById("si-auto-fill").style.display="none"),document.removeEventListener("click",q)}function q(e){let n=e.target;for(;;){if(!n.parentElement){V();break}if("si-auto-fill"==n.id||n==t)return;n=n.parentElement}}function G(e){if(o.length>=1){p=!0;const t=document.getElementById("si-auto-fill")?document.getElementById("si-auto-fill").dataset.index:0;if(o[t].username&&o[t].username.visible)try{O(document.querySelector(`[data-siid=${o[t].username.siid}]`),e.username),P(document.querySelector(`[data-siid=${o[t].username.siid}]`),e.username)}catch(e){console.log(e)}if(o[t].password&&o[t].password.visible)try{O(document.querySelector(`[data-siid=${o[t].password.siid}]`),e.password),P(document.querySelector(`[data-siid=${o[t].password.siid}]`),e.password)}catch(e){console.log(e)}}setTimeout((()=>{V(),p=!1}),100)}function K(e){e.style.width="100%",e.style.height="100%",e.style.margin="0",e.style.border="0",e.style["min-height"]="initial"}function Y(e){if(n&&document.body.contains(n)||t&&document.body.contains(t))return void z();let i,o,a,l=!1;document.getElementById("si-password-notification")?(l=!0,i=document.getElementById("si-password-notification"),o=i.querySelector("iframe")):(i=document.createElement("div"),i.id="si-password-notification",i.className="si-slide-in-right",o=document.createElement("iframe"),K(o),o.src=chrome.runtime.getURL("password-notification.html?pass-update="+(e?"true":"false")),a=i.attachShadow({mode:"closed"})),l||(a.appendChild(o),document.body.appendChild(i))}function z(){document.getElementById("si-password-notification")&&document.getElementById("si-password-notification").remove()}function J(e){M(e.currentTarget),j(e),E({cmd:"UPDATE_CREDENTIAL",data:{username:e.target.value,hostLoginUrl:location.href}})}function Z(e){e.currentTarget.value?($(),V()):(M(e.currentTarget),j(e)),E({cmd:"UPDATE_CREDENTIAL",data:{password:e.target.value,hostLoginUrl:location.href}})}function X(i){const a=R();if(o=function(t){const n=[];let i=k(t,!1,!1,!1,!1);if(0===i.length&&(i=k(t,!0,!1,!1,!1)),i.length>=1&&i.forEach((e=>{let i=F(t,e,!1,!1,!0);null==i&&(i=F(t,e,!0,!0,!0)),i?n.push({password:e,username:i}):e.visible&&n.push({password:e})})),0==n.length){let i=function(t){let n=null;for(let o=0;o<t.inputs.length;o++){const a=t.inputs[o];if(!a.disabled&&!a.readonly&&a.viewable&&a.visible&&("email"===a.type||(i=a,"https://account.samsung.com"==location.origin&&"text"==i.type&&"iptLgnPlnID"==i.id))&&(n=a,D(a,e.UsernameFieldNames)>-1))break}var i;return n}(t);i&&n.push({password:null,username:i})}return n}(a),0==o.length)(!n&&!t||n&&t&&!document.body.contains(n)&&!document.body.contains(t))&&E({cmd:"FIND_CONTENT_CREDENTIAL",data:null,input:a.inputs.map((e=>({id:e.id,name:e.name,class:e.class,title:e.title,value:e.value,type:e.type})))}),V(),$();else if(1==o.length){z();const e={hostLoginUrl:location.href,websiteName:document.title},l=o[0];l.username&&l.username.siid&&(n=document.querySelector(`[data-siid=${l.username.siid}]`),n&&(n.removeEventListener("input",J),n.addEventListener("input",J),n.dataset.siPw="0",e.username=n.value,e.usernameFieldName=I(n))),l.password&&l.password.siid&&(t=document.querySelector(`[data-siid=${l.password.siid}]`),t&&(t.removeEventListener("input",Z),t.addEventListener("input",Z),t.dataset.siPw="1",e.password=t.value,e.passwordFieldName=I(t))),t&&(document.activeElement!=t&&(!i||i.relatedTarget!=t&&i.target!=t)||""!=t.value?n&&M(n):(M(t),i&&"focusin"==i.type&&j(i))),E({cmd:"FIND_CONTENT_CREDENTIAL",data:e,input:a.inputs.map((e=>({id:e.id,name:e.name,class:e.class,title:e.title,value:e.value,type:e.type})))})}}document.addEventListener("focusin",(e=>{f&&clearTimeout(f),p||(f=setTimeout((()=>{X(e)}),500))})),document.addEventListener("focusout",(e=>{"complete"==document.readyState&&setTimeout((()=>{X()}),100)})),window.addEventListener("load",(e=>{chrome.runtime.sendMessage({cmd:"GET_HOST_URL"},(e=>{g=e.hostUrl})),setTimeout((()=>{X(e)}),500)})),window.addEventListener("load",(()=>{y(),chrome.storage.local.onChanged.addListener((e=>{e.PASS_APP_STATUS&&("NOT_INSTALLED"==e.PASS_APP_STATUS.newValue||"NOT_INSTALLED_FULL"==e.PASS_APP_STATUS.newValue?(c=!0,document.querySelectorAll(".si-ext-auto-fill-btn").forEach((e=>e.classList.add("disabled")))):"SECURED"==e.PASS_APP_STATUS.newValue&&(c=!1,document.querySelectorAll(".si-ext-auto-fill-btn").forEach((e=>e.classList.remove("disabled"))))),Object.keys(e).every((e=>{["PASS_APP_STATUS","isLoggedOut","AUTOFILL_PASSWORD_ENABLED","SAVE_PASSWORD_ENABLED"].indexOf(e)>=0&&y()}))}))})),window.addEventListener("resize",(e=>{V(),M(n)})),chrome.runtime.onMessage.addListener(((e,i,o)=>{const{cmd:d,from:c,data:u}=e;switch(d){case"OPEN_SAVE_PASSWORD_NOTIFICATION":if(w())return;Y(!1);break;case"OPEN_UPDATE_PASSWORD_NOTIFICATION":if(w())return;Y(!0);break;case"CLOSE_SAVE_PASSWORD_NOTIFICATION":case"CLOSE_PROMOTION_NOTIFICATION":if(w())return;z();break;case"FILL_CREDENTIAL":G(u);break;case"CLOSE_AUTOFILL":V();break;case"GET_CREDENTIAL_FROM_AUTOFILL_BACKGROUND":E({cmd:"SEND_CREDENTIAL_TO_AUTOFILL",data:s});break;case"GET_CREDENTIALS":l=u||[],r=l.filter((e=>!!e.username&&!!e.password)),t&&document.activeElement==t?M(t):n&&M(n);break;case"VERIFY_SERVER_CERT":if(w())return;!function(){let e,t;S(),t=document.createElement("div"),t.id="si-verify-cert",t.style.display="none",e=t.attachShadow({mode:"closed"});const n=document.createElement("iframe");n.src=chrome.runtime.getURL("password-verify.html?time="+Date.now()),e.appendChild(n),document.body.appendChild(t)}();break;case"VERIFY_SERVER_CERT_SUCCESS_CLEAR":S();break;case"SHOW_PROMOTE_NOTIFICATION":if(w())return;a=!0,chrome.storage.local.get(["PASS_APP_STATUS"]).then((e=>{let t=!1,n="";if("NOT_INSTALLED"==e.PASS_APP_STATUS&&(t=!0,n="password-notification.html?promote-install=true"),"NOT_ACTIVE"==e.PASS_APP_STATUS&&(t=!0,n="password-notification.html?promote-active=true"),t){let e,t,i,o=!1;document.getElementById("si-password-notification")?(o=!0,e=document.getElementById("si-password-notification"),t=e.querySelector("iframe")):(e=document.createElement("div"),e.id="si-password-notification",e.className="si-slide-in-right",t=document.createElement("iframe"),K(t),i=e.attachShadow({mode:"closed"})),t.src=chrome.runtime.getURL(n),o||(i.appendChild(t),document.body.appendChild(e))}}))}}))})();