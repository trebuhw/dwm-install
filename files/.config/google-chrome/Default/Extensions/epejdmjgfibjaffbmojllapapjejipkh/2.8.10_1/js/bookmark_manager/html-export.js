const NETSCAPE_BOOKMARK_HEADER="\n    <!DOCTYPE NETSCAPE-Bookmark-file-1>\n    \x3c!--This is an automatically generated file.\n    It will be read and overwritten.\n    Do Not Edit! --\x3e\n    <Title>Bookmarks</Title>\n    <H1>Bookmarks</H1>\n";function generateBookmarkFile(rootBookmark={}){const nodeFile=parseNode(rootBookmark);return`\n    ${NETSCAPE_BOOKMARK_HEADER}\n    <DL><p>\n    ${nodeFile}\n    </DL><p>\n  `}function parseNode(bookmark){if(bookmark.isFolder){if(bookmark.children){const children=bookmark.children.map(parseNode).join("\n");return buildDD(Object.assign({},bookmark,{children:children}))}return buildDD(bookmark)}return buildDT(bookmark)}function buildDT({url:url,title:title,created:created=Date.now(),icon:icon}){return`<DT><A HREF="${url}" ADD_DATE="${created}" ICON="${icon}">${title}</A>`}function buildDD({title:title="Untitle",created:created=Date.now(),children:children=""}){return`\n    <DT><H3 ADD_DATE="${created}" LAST_MODIFIED="1510560320">${title}</H3>\n    <DL><p>\n      ${children}\n    </DL><p>\n  `}const isNullLike=value=>!value||"undefined"===value,getTreeFromDB=async()=>{const result=await DB.Query.bookmarks({selection:"*",where:{equals:[{key:"IS_DELETED",value:"0"}]},sortOrder:"POSITION ASC"});return unflatten(Array.from(result))};function unflatten(bookmarkList){const tree=[],bookmarkHash={};for(let bookmark of bookmarkList)bookmarkHash[bookmark.SYNC4]=bookmark,bookmarkHash[bookmark.SYNC4].children=[];for(let id in bookmarkHash){const bookmark=bookmarkHash[id];bookmark.SYNC3&&bookmarkHash[bookmark.SYNC3]?bookmarkHash[bookmark.SYNC3].children&&bookmarkHash[bookmark.SYNC3].children.push(sanitizeBookmark(bookmark)):tree.push(sanitizeBookmark(bookmark))}return{id:"ROOT_FOLDER_ID",title:"Imported",isFolder:!0,isRoot:!0,children:tree}}function sanitizeBookmark(bookmark){return{id:bookmark.SYNC4,title:bookmark.TITLE,url:bookmark.URL,parentId:bookmark.SYNC3,isFolder:!!bookmark.FOLDER,created:bookmark.CREATED,children:bookmark.children}}function download(filename,text){var pom=document.createElement("a");pom.href="data:text/plain;charset=utf-8,"+encodeURIComponent(text),pom.target="_blank",pom.mimeType="attachment/html",pom.download=filename,document.body.appendChild(pom),pom.click()}function exportHTMLBookmarks(){getTreeFromDB().then(generateBookmarkFile).then((bookmarkHtmlString=>{const date=new Date;download(`bookmarks-${date.getDate()}-${date.getMonth()}.html`,bookmarkHtmlString)}))}