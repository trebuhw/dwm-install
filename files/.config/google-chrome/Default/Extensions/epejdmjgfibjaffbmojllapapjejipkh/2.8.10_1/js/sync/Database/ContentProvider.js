function ContentProvider(){this.DBHandler=this.DBHandler||new IndexedDBHandler,this.DBHandler.connect(),this.InputSanitization=function(str){const singleSplit=`${str}`.split("'");let singleSanitize="";for(let i=0;i<singleSplit.length;i++)singleSanitize+=singleSplit[i],i!=singleSplit.length-1&&(singleSanitize+="''");let doubleSanitize="";const doubleSplit=singleSanitize.split('"');for(let j=0;j<doubleSplit.length;j++)doubleSanitize+=doubleSplit[j],j!=doubleSplit.length-1&&(doubleSanitize+="");return doubleSanitize},this.Insert=function(Uri,jsonvalue,insertResultCallBack){const value={};Object.keys(jsonvalue).forEach((key=>{value[key.toUpperCase()]=jsonvalue[key]}));this.DBHandler.add(Uri,value,(function(result){result?result.rowsAffected&&insertResultCallBack&&insertResultCallBack(result.rowsAffected):insertResultCallBack&&insertResultCallBack(result)}))},this.bulkInsert=function(Uri,values,insertResultCallBack){for(let i=0;i<values.length;i++){let INSERT_STRING=`INSERT INTO ${Uri}`,COL_NAME="(",VALUES="VALUES (";const keys=Object.keys(values[i]);for(let j=0;j<keys.length;j++){const currentValue=values[i][keys[j]];VALUES+=null===currentValue?"NULL":`'${this.InputSanitization(currentValue)}'`,COL_NAME+=keys[j],j!=keys.length-1&&(VALUES+=",",COL_NAME+=",")}COL_NAME+=")",VALUES+=")",INSERT_STRING+=`${COL_NAME} ${VALUES}`;const INSERT_CALLBACK=function(result){result&&insertResultCallBack&&insertResultCallBack(result.rowsAffected)};this.DBHandler.add(Uri,values,INSERT_CALLBACK)}},this.Delete=function(Uri,selection,selectionArgs,deleteResultCallBack){this.DBHandler.del(Uri,selection).then((function(result){deleteResultCallBack&&result&&("number"==typeof result.rowsAffected?deleteResultCallBack(result.rowsAffected):deleteResultCallBack(result))}))},this.Query=function(Uri,projection,selection,selectionArgs,sortOrder,queryResultCallBack){if(!queryResultCallBack)return;this.DBHandler.query(Uri,projection,selection,sortOrder).then((function(result){queryResultCallBack&&(result&&result.rows?(SamsungSCloudSyncService.SyncLogs.log("QUERY_STRING response "+result.rows.length),queryResultCallBack(result.rows)):(SamsungSCloudSyncService.SyncLogs.log("QUERY_STRING response "+result),queryResultCallBack(result)))}))},this.Update=function(Uri,values,selection,selectionArgs,updateResultCallBack){const keys=Object.keys(values),VALUES={};keys.forEach((key=>{VALUES[key.toUpperCase()]=values[key]}));this.DBHandler.update(Uri,VALUES,selection).then((function(result){updateResultCallBack&&(result&&result.rows,updateResultCallBack(result,values))}))},this.normalCallback=function(res,values){SamsungSCloudSyncService.ContentProviderGlobal.batchResult.push(res),SamsungSCloudSyncService.ContentProviderGlobal.batchResultValues.push(values)},this.finalCallback=function(res,values){SamsungSCloudSyncService.ContentProviderGlobal.batchResult.push(res),SamsungSCloudSyncService.ContentProviderGlobal.batchResultValues.push(values),null!=SamsungSCloudSyncService.ContentProviderGlobal.batchCallBack&&SamsungSCloudSyncService.ContentProviderGlobal.batchCount==SamsungSCloudSyncService.ContentProviderGlobal.batchResult.length&&SamsungSCloudSyncService.ContentProviderGlobal.batchCallBack(SamsungSCloudSyncService.ContentProviderGlobal.batchResult,SamsungSCloudSyncService.ContentProviderGlobal.batchResultValues)},this.applyBatch=function(operations,batchCallBack){this.batchCount=operations.length,this.batchResult=[],this.batchResultValues=[],this.batchCallBack=batchCallBack,operations.forEach(((ops,i)=>{const callBack=this.finalCallback;null!=ops.operation.match(/INSERT/g)?this.Insert(ops.uri,ops.values,callBack):null!=ops.operation.match(/DELETE/g)?this.Delete(ops.uri,ops.selection,ops.selectionArgs,callBack):null!=ops.operation.match(/UPDATE/g)?this.Update(ops.uri,ops.values,ops.selection,ops.selectionArgs,callBack):null!=ops.operation.match(/QUERY/g)&&this.Query(ops.uri,ops.values,ops.selection,ops.selectionArgs,ops.sortOrder,callBack)}))},this.UpdateMultiple=function(Uri,items,selection,selectionArgs,updateResultCallBack){this.DBHandler.UpdateMultiple(Uri,items,selection).then((function(result){updateResultCallBack&&(result&&result.rows,updateResultCallBack(result))}))},this.getMaxValueByKey=function(Uri,key,callback){this.DBHandler.getMaxValueByKey(Uri,key).then(callback)},this.getMax=function(Uri,key,selection,callBack){this.DBHandler.getMax(Uri,key,selection).then(callBack)},this.clear=function(Uri){this.DBHandler.clear(Uri),storageLocalApi.removeItem("LAST_SYNCED")},SamsungSCloudSyncService.ContentProviderGlobal=this}