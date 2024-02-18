const BrowserUtil={tabsQuery:async options=>new Promise((resolve=>{chrome.tabs.query(options,(tabs=>{resolve(tabs)}))})),tabsQueryFirst:async options=>{const tabs=await BrowserUtil.tabsQuery(options);return tabs.length>0?tabs[0]:null},getTabFromCurrentWindow:async()=>await BrowserUtil.tabsQueryFirst({active:!0,currentWindow:!0}),getActiveTabs:async()=>await BrowserUtil.tabsQuery({active:!0}),tabSendMessage:async(tab,obj,options=null)=>{if(tab&&tab.id)return new Promise((resolve=>{chrome.tabs.sendMessage(tab.id,obj,options,(()=>{chrome.runtime.lastError,resolve()}))}))},isSupportPassword:()=>!0,isWin11Up:async()=>new Promise(((resolve,reject)=>{navigator.userAgentData.getHighEntropyValues(["platformVersion"]).then((ua=>{if("Windows"===navigator.userAgentData.platform){const majorPlatformVersion=parseInt(ua.platformVersion.split(".")[0]);if(majorPlatformVersion>=13)return console.log("Windows 11 or later"),void resolve(!0);majorPlatformVersion>0?console.log("Windows 10"):console.log("Before Windows 10")}else console.log("Not running on Windows");resolve(!1)}))}))};