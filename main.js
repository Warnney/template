


define(function (require, exports, module) {
    "use strict";
    var commandNamecss      = "newCSS";
    var commandNamehtml     = "newHTML";
    var Menus               = brackets.getModule("command/Menus"),
        CommandManager      = brackets.getModule("command/CommandManager"),
        EditorManager       = brackets.getModule("editor/EditorManager");
    
    var template
    /*
     * Implementation
     */
    function loadcss() {
        template = require('text!css-template.css');
      EditorManager.getCurrentFullEditor()._codeMirror.setValue(template);
    }
    function loadhtml() {
        template = require('text!html-template.html');
      EditorManager.getCurrentFullEditor()._codeMirror.setValue(template);
    }
    /*
     * Command
     */
CommandManager.register("Novo CSS", commandNamecss, loadcss);
CommandManager.register("Novo HTML", commandNamehtml, loadhtml);
    /*
     * Custom menu
     */
var menu = Menus.addMenu("Template", "edgedocks.custom.menu" );  
    menu.addMenuItem(commandNamehtml);
    menu.addMenuItem(commandNamecss)
});


