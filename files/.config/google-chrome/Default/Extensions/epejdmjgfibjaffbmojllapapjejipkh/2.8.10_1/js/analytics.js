const possibleActions=["CONTEXT_MENU-OPEN","CONTEXT_MENU-OPEN_NEW_TAB","CONTEXT_MENU-OPEN_NEW_WINDOW","CONTEXT_MENU-EDIT","CONTEXT_MENU-DELETE","CONTEXT_MENU-CREATE_FOLDER","CONTEXT_MENU-OPEN_ALL","CONTEXT_DELETE_ALL","CONTEXT_DELETE_TAB","BOOKMARK_SELECT","MORE_MENU-LOGOUT","MORE_MENU-IMPORT","MORE_MENU-CONTACT_US","IMPORT_MODAL-ADD","IMPORT_MODAL-REPLACE","IMPORT_MODAL-CANCEL","ADD_MODAL-CREATE_FOLDER","ADD_MODAL-CANCEL","EDIT_MODAL-CREATE_FOLDER","EDIT_MODAL-CANCEL","FLOATING_ICON-ADD","IMPORT_BUTTON","SYNC_BUTTON"];var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-106798300-1"]),_gaq.push(["_trackPageview"]),function(){const googleAnalytics=document.createElement("script");googleAnalytics.type="text/javascript",googleAnalytics.async=!0,googleAnalytics.src="https://ssl.google-analytics.com/ga.js";const scriptTag=document.getElementsByTagName("script")[0];scriptTag.parentNode.insertBefore(googleAnalytics,scriptTag)}(),document.addEventListener("analytics",(({detail:{action:action,event:event}})=>{possibleActions.indexOf(action)>-1&&(SamsungSCloudSyncService.SyncLogs.log(`Analytics Event: ${action}`),_gaq.push(["_trackEvent",action,"clicked",chrome.runtime.getManifest().version]))}));