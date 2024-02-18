/*!
 * jquery.fancytree.themeroller.js
 *
 * Enable jQuery UI ThemeRoller styles.
 * (Extension module for jquery.fancytree.js: https://github.com/mar10/fancytree/)
 *
 * @see http://jqueryui.com/themeroller/
 *
 * Copyright (c) 2008-2018, Martin Wendt (http://wwWendt.de)
 *
 * Released under the MIT license
 * https://github.com/mar10/fancytree/wiki/LicenseInfo
 *
 * @version @VERSION
 * @date @DATE
 */
!function(factory){"function"==typeof define&&define.amd?define(["jquery","./jquery.fancytree"],factory):"object"==typeof module&&module.exports?(require("./jquery.fancytree"),module.exports=factory(require("jquery"))):factory(jQuery)}((function($){"use strict";return $.ui.fancytree.registerExtension({name:"themeroller",version:"@VERSION",options:{activeClass:"ui-state-active",addClass:"ui-corner-all",focusClass:"ui-state-focus",hoverClass:"ui-state-hover",selectedClass:"ui-state-highlight"},treeInit:function(ctx){var $el=ctx.widget.element,opts=ctx.options.themeroller;this._superApply(arguments),"TABLE"===$el[0].nodeName?($el.addClass("ui-widget ui-corner-all"),$el.find(">thead tr").addClass("ui-widget-header"),$el.find(">tbody").addClass("ui-widget-conent")):$el.addClass("ui-widget ui-widget-content ui-corner-all"),$el.delegate(".fancytree-node","mouseenter mouseleave",(function(event){var node=$.ui.fancytree.getNode(event.target),flag="mouseenter"===event.type;$(node.tr?node.tr:node.span).toggleClass(opts.hoverClass+" "+opts.addClass,flag)}))},treeDestroy:function(ctx){this._superApply(arguments),ctx.widget.element.removeClass("ui-widget ui-widget-content ui-corner-all")},nodeRenderStatus:function(ctx){var classes={},node=ctx.node,$el=$(node.tr?node.tr:node.span),opts=ctx.options.themeroller;this._super(ctx),classes[opts.activeClass]=!1,classes[opts.focusClass]=!1,classes[opts.selectedClass]=!1,node.isActive()&&(classes[opts.activeClass]=!0),node.hasFocus()&&(classes[opts.focusClass]=!0),node.isSelected()&&!node.isActive()&&(classes[opts.selectedClass]=!0),$el.toggleClass(opts.activeClass,classes[opts.activeClass]),$el.toggleClass(opts.focusClass,classes[opts.focusClass]),$el.toggleClass(opts.selectedClass,classes[opts.selectedClass]),$el.addClass(opts.addClass)}}),$.ui.fancytree}));