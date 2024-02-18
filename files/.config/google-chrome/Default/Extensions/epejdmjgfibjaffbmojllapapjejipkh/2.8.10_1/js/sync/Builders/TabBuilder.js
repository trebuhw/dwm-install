function TabBuilder(provider,account,context){this.mProvider=provider,this.mAccount=account,this.mContext=context,this.mTabId=0,this.mFolderMap=new Hash,this.mContentUri=null,this.mAuthorityUri=null,this.mTabUri=null,this.tabsColumns=[],this.ACCOUNT_SELECTION=`${SamsungSCloudSyncService.mBrowserConstants.TABS.ACCOUNT_TYPE} == '${SamsungSCloudSyncService.mSyncConstants.ACCOUNT_TYPE}' AND ${SamsungSCloudSyncService.mBrowserConstants.TABS.ACCOUNT_NAME} == '${SamsungSCloudSyncService.mSyncConstants.ACCOUNT_NAME}'`,this.SBROWSERTAB_COLUMNS=[SamsungSCloudSyncService.mBrowserConstants.TABS.TAB_ID,SamsungSCloudSyncService.mBrowserConstants.TABS.TAB_INDEX,SamsungSCloudSyncService.mBrowserConstants.TABS.TAB_URL,SamsungSCloudSyncService.mBrowserConstants.TABS.TAB_TITLE,SamsungSCloudSyncService.mBrowserConstants.TABS.TAB_FAV_ICON,SamsungSCloudSyncService.mBrowserConstants.TABS.TAB_ACTIVATE,SamsungSCloudSyncService.mBrowserConstants.TABS.IS_INCOGNITO,SamsungSCloudSyncService.mBrowserConstants.TABS.DATE_CREATED,SamsungSCloudSyncService.mBrowserConstants.TABS.DATE_MODIFIED,SamsungSCloudSyncService.mBrowserConstants.TABS.ACCOUNT_NAME,SamsungSCloudSyncService.mBrowserConstants.TABS.ACCOUNT_TYPE,SamsungSCloudSyncService.mBrowserConstants.TABS.DEVICE_NAME,SamsungSCloudSyncService.mBrowserConstants.TABS.DEVICE_ID,SamsungSCloudSyncService.mBrowserConstants.TABS.DEVICE_TYPE,SamsungSCloudSyncService.mBrowserConstants.TABS.TAB_USAGE],this.mTabUri=SamsungSCloudSyncService.mBrowserConstants.BROWSER_TAB_URI,SamsungSCloudSyncService.TabBuilderGlobal=this,this.parse=function(cursor,rowId,key){let sBrowserTabString=null;if(null==cursor)return null;try{const values={};cursor.TAB_ID&&(values.TAB_ID=cursor.TAB_ID.toString()),cursor.TAB_URL&&(values.TAB_URL=cursor.TAB_URL.toString()),cursor.TAB_TITLE&&(values.TAB_TITLE=cursor.TAB_TITLE.toString()),cursor.TAB_FAV_ICON&&(values.TAB_FAV_ICON=cursor.TAB_FAV_ICON.toString()),cursor.ACCOUNT_NAME&&(values.ACCOUNT_NAME=cursor.ACCOUNT_NAME.toString()),cursor.ACCOUNT_TYPE&&(values.ACCOUNT_TYPE=cursor.ACCOUNT_TYPE.toString()),cursor.DEVICE_NAME&&(values.DEVICE_NAME=cursor.DEVICE_NAME.toString()),cursor.DEVICE_ID&&(values.DEVICE_ID=cursor.DEVICE_ID.toString()),cursor.DEVICE_TYPE&&(values.DEVICE_TYPE=cursor.DEVICE_TYPE.toString()),cursor.TAB_USAGE&&(values.TAB_USAGE=cursor.TAB_USAGE.toString()),cursor.TAB_INDEX&&(values.TAB_INDEX=cursor.TAB_INDEX.toString()),cursor.TAB_ACTIVATE&&(values.TAB_ACTIVATE=cursor.TAB_ACTIVATE.toString()),cursor.IS_INCOGNITO&&(values.IS_INCOGNITO=cursor.IS_INCOGNITO.toString()),cursor.DATE_CREATED&&(values.DATE_CREATED=cursor.DATE_CREATED.toString()),cursor.DATE_MODIFIED&&(values.DATE_MODIFIED=cursor.DATE_MODIFIED.toString()),sBrowserTabString=JSON.stringify(values)}catch(e){SamsungSCloudSyncService.SyncLogs.log(`parse: Exception in parsing${e}`)}return sBrowserTabString},this.update=function(jsonString,timeStamp,rowId,Key,callback){try{sBrowserTabValues=JSON.parse(jsonString);let favIcon=sBrowserTabValues.TAB_FAV_ICON;if(null!=favIcon&&"undefined"!=favIcon){let buffer;buffer=btoa(favIcon),sBrowserTabValues.TAB_FAV_ICON=buffer}sBrowserTabValues.SYNC2=timeStamp}catch(e){return SamsungSCloudSyncService.SyncLogs.log(`update: Unable to Parse;${e}`),!1}try{this.mProvider.Update(this.mTabUri,sBrowserTabValues,{equals:[{key:SamsungSCloudSyncService.mBrowserConstants.TABS._ID,value:rowId}]},null,callback)}catch(e){return SamsungSCloudSyncService.SyncLogs.log(`update: RemoteException${e}`),!1}return!0},this.insert=function(jsonString,syncKey,timeStamp,cb=null){var sBrowserTabValues=null;try{var buffer,favIcon=(sBrowserTabValues=JSON.parse(jsonString)).TAB_FAV_ICON;if(null!=favIcon)buffer=btoa(favIcon),sBrowserTabValues.TAB_FAV_ICON=buffer;sBrowserTabValues.SYNC1=syncKey,sBrowserTabValues.SYNC2=timeStamp}catch(e){return SamsungSCloudSyncService.SyncLogs.log(`insert: Unable to Parse;${e}`),!1}try{this.mProvider.Insert(this.mTabUri,sBrowserTabValues,this.doInsertCallback)}catch(e){return SamsungSCloudSyncService.SyncLogs.log(`insert: RemoteException${e}`),!1}return!0},this.Delete=function(uri,rowId,selection,syncKey){try{this.mProvider.Delete(uri,selection,null)}catch(e){SamsungSCloudSyncService.SyncLogs.log(`Delete: Exception${e}`)}},this.getBatchSize=function(){return 250},this.cleanup=function(){this.SBROWSERTAB_COLUMNS=null,this.mProvider=null,this.mAccount=null,this.mContext=null,this.mTabId=null,this.mTabUri=null},this.doInsertCallback=function(rowsAffected){rowsAffected>0&&SamsungSCloudSyncService.NEW_TAB_URL_ID&&chrome.runtime.sendMessage({SYNC:"RESULT_UPDATED"})}}SamsungSCloudSyncService.TabBuilderGlobal=null;