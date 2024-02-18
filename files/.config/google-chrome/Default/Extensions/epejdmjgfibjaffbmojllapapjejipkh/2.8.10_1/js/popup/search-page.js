var resultsTree={searchResultTree:null,chromeResultTree:null,openTabsResultTree:null,edgeResultTree:null},searchTxt="";function searchResultTreeInit(data,searchInput=""){for(tree in searchTxt=searchInput,resultsTree)null==resultsTree[tree]&&($(`#${tree}`).fancytree({extensions:["themeroller","multi"],source:data[tree].children,toggleEffect:!1,multi:{mode:"sameParent"},tooltip:function(event,data){return data.node.title},renderNode:function(event,data){let node=data.node;var $span=$(node.span),$li=$(node.li);if($li&&(!$li.find("span.checkBox")||0===$li.find("span.checkBox").length)){const checkBox=document.createElement("span");checkBox.className="checkBox",$li[0].prepend(checkBox)}if(1==node.folder)return void formatHighlight($span,node.title,searchTxt,"> span.fancytree-title");var href=node.data.url,faviconURL=`${h("a",{href:href}).origin}/favicon.ico`;const initial=url2title(faviconURL).substr(0,1).toUpperCase();var iconSpan=$span.find("> span.fancytree-icon")[0];iconSpan.style.backgroundColor="#BABABA";var text=document.createElement("span");text.className="thumbnail",iconSpan.appendChild(text),$span.find("> span.fancytree-icon").find("> span.thumbnail")[0].innerHTML=initial,iconSpan.appendChild(h("img",{class:"bookmark_entry_image",style:"display: none;",load(e){iconSpan.style.backgroundColor="",iconSpan.querySelector("span").style.display="none",this.style.display="block"},src:faviconURL}));var titleContainer=document.createElement("div");titleContainer.className="fancytree-title-container",formatHighlight($span,node.title,searchTxt,"> span.fancytree-title"),titleContainer.appendChild($span.find("> span.fancytree-title")[0]);var nodeUrl=document.createElement("span");nodeUrl.className="fancytree-url fancytree-title",nodeUrl.title=node.data.url,nodeUrl.innerHTML=node.data.url,titleContainer.appendChild(nodeUrl),formatHighlight($(titleContainer),node.data.url,searchTxt,"> span.fancytree-url"),$span[0].appendChild(titleContainer)},dblclick:function(e,data){return MenuContentView.onDblClickSearchResult(data),!1},click:function(e,data){if(MenuContentView.onEditSearchResults)e.ctrlKey||e.shiftKey?e.ctrlKey&&data.node.setActive(!data.node.selected):(data.node.setSelected(!data.node.selected),data.node.setFocus(!1),data.node.setActive(data.node.selected),e.preventDefault());else{if(e.ctrlKey||e.shiftKey)return!1;MenuContentView.onDblClickSearchResult(data)}},select:function(event,data){selectedNodes=[],Object.keys(resultsTree).forEach((tree=>{selectedNodes=selectedNodes.concat(resultsTree[tree].getSelectedNodes())})),MenuContentView.onEditSearchResults&&storageLocalApi.getItem(SYNC_STATUS)!=SYNC_STARTED&&MenuContentView.onChangeSelectedSearchItems()}}),resultsTree[tree]=$(`#${tree}`).fancytree("getTree")),resultsTree[tree].clear(),data[tree].children&&(resultsTree[tree].reload(data[tree].children),resultsTree[tree].visit((function(node){node.setExpanded(!1)})))}function loadSearchContextItems($trigger){var node=MenuContentView.onEditSearchResults?selectedNodes[0]:$.ui.fancytree.getNode($trigger);return selectedNodes.length>1?multiBookmarkContext():singleBookmarkContext(node)}function singleBookmarkContext(node){var items;if(1!=node.folder){var disable=!1;storageLocalApi.getItem(SYNC_STATUS)==SYNC_STARTED&&(disable=!0),items={open:{name:OPEN,icon:"open",callback:function(itemKey,opt,e){var url=(MenuContentView.onEditSearchResults?selectedNodes[0]:$.ui.fancytree.getNode(opt.$trigger)).data.url;openUrl([url],"OPEN")}},openInNewTab:{name:CONTEXT_OPEN_NEW_TAB,icon:"open",callback:function(itemKey,opt,e){var url=(MenuContentView.onEditSearchResults?selectedNodes[0]:$.ui.fancytree.getNode(opt.$trigger)).data.url;openUrl([url],"OPEN_NEW_TAB")}},openInNewWindow:{name:CONTEXT_OPEN_NEW_WINDOW,icon:"open",callback:function(itemKey,opt,e){var url=(MenuContentView.onEditSearchResults?selectedNodes[0]:$.ui.fancytree.getNode(opt.$trigger)).data.url;openUrl([url],"OPEN_NEW_WINDOW")}},openInSecretWindow:{name:CONTEXT_OPEN_IN_INCOGNITO_WINDOW,icon:"open",callback:function(itemKey,opt,e){var url=(MenuContentView.onEditSearchResults?selectedNodes[0]:$.ui.fancytree.getNode(opt.$trigger)).data.url;openUrl([url],"OPEN_NEW_SECRET_WINDOW")}},sep1:"--"};let bottomItems={edit:{name:CONTEXT_EDIT,icon:"icon",disabled:disable,callback:function(key,opt){var node=MenuContentView.onEditSearchResults?selectedNodes[0]:$.ui.fancytree.getNode(opt.$trigger);dialogEditBookmark(node)}},copy:{name:CONTEXT_COPY,icon:"icon",disabled:disable,callback:function(itemKey,opt,e){selectedNodes=[node],copySelectedNodes()}}},deleteItem={};MenuContentView.onEditSearchResults||(deleteItem.delete={name:CONTEXT_DELETE,icon:"icon",disabled:disable,callback:function(itemKey,opt,e){deleteSearchResult($.ui.fancytree.getNode(opt.$trigger))}}),items=Object.assign({},items,deleteItem,bottomItems)}else{var openAllBookmarksDisable,onSyncing=!1;storageLocalApi.getItem(SYNC_STATUS)==SYNC_STARTED&&(onSyncing=!0),openAllBookmarksDisable=onSyncing||disabledItem(node),items={openInNewTab:{name:CONTEXT_OPEN_NEW_TAB,icon:"open",disabled:openAllBookmarksDisable,callback:function(itemKey,opt,e){var urls=getAllChildrenURL(opt);openUrl([urls],"OPEN_ALL_BOOKMARKS")}},openInNewWindow:{name:CONTEXT_OPEN_NEW_WINDOW,icon:"open",disabled:openAllBookmarksDisable,callback:function(itemKey,opt,e){var urls=getAllChildrenURL(opt);openUrl([urls],"OPEN_ALL_NEW_WINDOW")}},openAllInSecretWindow:{name:CONTEXT_OPEN_IN_INCOGNITO_WINDOW,icon:"open",disabled:openAllBookmarksDisable,callback:function(itemKey,opt,e){var urls=getAllChildrenURL(opt);openUrl([urls],"OPEN_ALL_NEW_SECRET_WINDOW")}},sep1:"--"};let bottomItems={edit:{name:CONTEXT_EDIT,icon:"icon",disabled:onSyncing,callback:function(key,opt){var node=MenuContentView.onEditSearchResults?selectedNodes[0]:$.ui.fancytree.getNode(opt.$trigger);dialogEditBookmark(node)}}},deleteItem={};MenuContentView.onEditSearchResults||(deleteItem.delete={name:CONTEXT_DELETE,icon:"icon",disabled:disable,callback:function(itemKey,opt,e){deleteSearchResult($.ui.fancytree.getNode(opt.$trigger))}}),items=Object.assign({},items,deleteItem,bottomItems)}return items}function multiBookmarkContext(){var openAllBookmarksDisable,onSyncing=!1,urls=getAllURLSelected();if(storageLocalApi.getItem(SYNC_STATUS)==SYNC_STARTED&&(onSyncing=!0),openAllBookmarksDisable=onSyncing||!urls.length,hasSelectedFolder())items={openInNewTab:{name:CONTEXT_OPEN_NEW_TAB,icon:"open",disabled:openAllBookmarksDisable,callback:function(itemKey,opt,e){openUrl([urls],"OPEN_ALL_BOOKMARKS")}},openInNewWindow:{name:CONTEXT_OPEN_NEW_WINDOW,icon:"open",disabled:openAllBookmarksDisable,callback:function(itemKey,opt,e){openUrl([urls],"OPEN_ALL_NEW_WINDOW")}},openAllInSecretWindow:{name:CONTEXT_OPEN_IN_INCOGNITO_WINDOW,icon:"open",disabled:openAllBookmarksDisable,callback:function(itemKey,opt,e){openUrl([urls],"OPEN_ALL_NEW_SECRET_WINDOW")}}},items=Object.assign({},items);else{items={openInNewTab:{name:CONTEXT_OPEN_NEW_TAB,icon:"open",disabled:onSyncing,callback:function(itemKey,opt,e){openUrl([urls],"OPEN_ALL_BOOKMARKS")}},openInNewWindow:{name:CONTEXT_OPEN_NEW_WINDOW,icon:"open",disabled:onSyncing,callback:function(itemKey,opt,e){openUrl([urls],"OPEN_ALL_NEW_WINDOW")}},openAllInSecretWindow:{name:CONTEXT_OPEN_IN_INCOGNITO_WINDOW,icon:"open",disabled:onSyncing,callback:function(itemKey,opt,e){openUrl([urls],"OPEN_ALL_NEW_SECRET_WINDOW")}},sep1:"--"};let bottomItems={copy:{name:CONTEXT_COPY,icon:"icon",disabled:onSyncing,callback:function(itemKey,opt,e){copySelectedNodes()}}};items=Object.assign({},items,bottomItems)}return items}function deleteSearchItems(){storageLocalApi.getItem(SYNC_STATUS)!=SYNC_STARTED&&selectedNodes&&selectedNodes.length&&(1===selectedNodes.length?deleteSearchResult(selectedNodes[0]):deleteMultiSearchResult(selectedNodes[0]),clearSelectedNodes())}function deleteSearchResult(node){var id=node.data.id,title=node.title,parentId=getParentId(node),url=node.data.url;"bookmark"===node.type?node.remove():resultsTree.openTabsResultTree.getNodeByKey(node.key).remove(),showNotice(ONE_ITEM_DELETED,MenuContentView.texts.UNDO,"search"),closeEditMode(),deleteTimeout=setTimeout((function(){removeNotice(),getNodeById(id).remove(),MenuContentView.searchResultsEnabled&&MenuContentView.triggerSearch(),"bookmark"===node.type?removeBookmark_fancytree({id:id,title:title,isFolder:!!node.folder,parent:parentId,url:url}):removeTab_fancytree({id:id,title:title,isFolder:!1,parent:parentId,url:url}),updateSourcePosition(node.data.parent.children);if(!getNodeById(originNode.data.id)){const parentId=getParentId(originNode);originNode=getNodeById(parentId)||getNodeById(0),viewNode(originNode)}}),3e3)}function deleteMultiSearchResult(node){var deleteNodes=$.extend([],selectedNodes);for(let node of selectedNodes)"bookmark"===node.type?node.remove():resultsTree.openTabsResultTree.getNodeByKey(node.key).remove();showNotice(`${1==selectedNodes.length?ONE_ITEM_DELETED:getTextForCount("DREAM_CLOUD_TPOP_PD_ITEMS_DELETED",selectedNodes.length)}`,MenuContentView.texts.UNDO,"search"),closeEditMode(),deleteTimeout=setTimeout((function(){removeNotice();for(let node of deleteNodes){const _node=getNodeById(node.data.id);_node&&_node.remove()}if("bookmark"===node.type){removeSelectedBookmarks_fancytree(deleteNodes);if(!getNodeById(originNode.data.id)){const parentId=getParentId(originNode);originNode=getNodeById(parentId)||getNodeById(0),viewNode(originNode)}}else removeSelectedTabs_fancytree(deleteNodes);MenuContentView.searchResultsEnabled&&MenuContentView.triggerSearch()}),3e3)}function undoBookmarkSearch(){MenuContentView.searchResultsEnabled&&MenuContentView.triggerSearch()}function formatHighlight(node,content,searchTxt,htmlElement){if(content&&!(content.toLowerCase().indexOf(searchTxt.toLowerCase())<0)){var searchSpan=document.createElement("span");searchSpan.className="search-highlight",searchSpan.innerHTML=content.substring(content.toLowerCase().indexOf(searchTxt.toLowerCase()),content.toLowerCase().indexOf(searchTxt.toLowerCase())+searchTxt.length);var txtBeforeSearch=document.createElement("span");txtBeforeSearch.innerHTML=content.substring(0,content.toLowerCase().indexOf(searchTxt.toLowerCase()));var txtAfterSearch=document.createElement("span");txtAfterSearch.innerHTML=content.substring(content.toLowerCase().indexOf(searchTxt.toLowerCase())+searchTxt.length),node.find(htmlElement)[0].innerHTML="",node.find(htmlElement)[0].appendChild(txtBeforeSearch),node.find(htmlElement)[0].appendChild(searchSpan),node.find(htmlElement)[0].appendChild(txtAfterSearch)}}$.contextMenu({selector:".searchTree span.fancytree-title, .searchTree img.bookmark_entry_image, .searchTree span.thumbnail, .searchTree span.fancytree-node",build:function($trigger,e){return!(MenuContentView.onEditSearchResults||!MenuContentView.searchResultsEnabled)&&{callback:function(key,options){},items:loadSearchContextItems($trigger)}}}),$.contextMenu({selector:"#moreMenuEditSearch",trigger:"left",build:function($trigger,e){return!!MenuContentView.searchResultsEnabled&&{callback:function(key,options){},items:loadSearchContextItems($trigger)}}});