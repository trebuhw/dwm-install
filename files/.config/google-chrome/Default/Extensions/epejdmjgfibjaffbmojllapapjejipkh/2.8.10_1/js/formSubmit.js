window.addEventListener("load",(()=>{const form=document.forms[0];form.serviceID.value=APP_ID;const locale=(()=>{const[languageCode,countryCode]=(window.navigator.userLanguage||window.navigator.language||navigator.language).split("-");return{languageCode:languageCode,countryCode:countryCode}})();["languageCode"].map((code=>form.querySelector(`input[name="${code}"]`))).forEach(($el=>$el&&($el.value=locale[$el.name]))),form.submit()}));