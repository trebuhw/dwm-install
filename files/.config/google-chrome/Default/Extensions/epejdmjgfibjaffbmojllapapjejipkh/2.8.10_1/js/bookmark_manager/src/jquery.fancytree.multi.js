/*!
 * jquery.fancytree.multi.js
 *
 * Allow multiple selection of nodes  by mouse or keyboard.
 * (Extension module for jquery.fancytree.js: https://github.com/mar10/fancytree/)
 *
 * Copyright (c) 2008-2018, Martin Wendt (http://wwWendt.de)
 *
 * Released under the MIT license
 * https://github.com/mar10/fancytree/wiki/LicenseInfo
 *
 * @version @VERSION
 * @date @DATE
 */
!function(factory){"function"==typeof define&&define.amd?define(["jquery","./jquery.fancytree"],factory):"object"==typeof module&&module.exports?(require("./jquery.fancytree"),module.exports=factory(require("jquery"))):factory(jQuery)}((function($){"use strict";return $.ui.fancytree.registerExtension({name:"multi",version:"@VERSION",options:{allowNoSelect:!1,mode:"sameParent"},treeInit:function(ctx){this._superApply(arguments),this.$container.addClass("fancytree-ext-multi"),1===ctx.options.selectMode&&$.error("Fancytree ext-multi: selectMode: 1 (single) is not compatible.")},nodeClick:function(ctx){var tree=ctx.tree,node=ctx.node,activeNode=tree.getActiveNode()||tree.getFirstChild(),isCbClick="checkbox"===ctx.targetType,isExpanderClick="expander"===ctx.targetType,eventStr=$.ui.fancytree.eventToString(ctx.originalEvent);switch(eventStr){case"click":if(isExpanderClick)break;isCbClick||(tree.selectAll(!1),node.setSelected());break;case"shift+click":tree.visitRows((function(n){if(n.setSelected(),n===node)return!1}),{start:activeNode,reverse:activeNode.isBelowOf(node)});break;case"ctrl+click":case"meta+click":return void node.toggleSelected()}return this._superApply(arguments)},nodeKeydown:function(ctx){var tree=ctx.tree,node=ctx.node,eventStr=$.ui.fancytree.eventToString(ctx.originalEvent);switch(eventStr){case"up":case"down":tree.selectAll(!1),node.navigate(event.which,!0),tree.getActiveNode().setSelected();break;case"shift+up":case"shift+down":node.navigate(event.which,!0),tree.getActiveNode().setSelected()}return this._superApply(arguments)}}),$.ui.fancytree}));