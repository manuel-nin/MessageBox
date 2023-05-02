/*
---------------------------------------------
Developer: Manuel Nin
Website: https://manuelnin.com
Github: https://github.com/manuel-nin
License: Free to use on any personal or commercial project
Requires: jQuery
---------------------------------------------
*/

$(document).ready(function(){
    /* Set the path to load the resources */ 
    var full_path = $("script[src$='messagebox.js']").attr("src");
    var path = full_path.substring(0, full_path.lastIndexOf("messagebox.js"));
    $("head").append('<link rel="preload" href="' + path + 'messagebox/fonts/nunito_sans.woff" as="font" type="font/woff" crossorigin="anonymous">');
    $("head").append('<link rel="preload" href="' + path + 'messagebox/images/info.png" as="image">');
    $("head").append('<link rel="preload" href="' + path + 'messagebox/images/success.png" as="image">');
    $("head").append('<link rel="preload" href="' + path + 'messagebox/images/error.png" as="image">');
    $("head").append('<link rel="preload" href="' + path + 'messagebox/images/close.png" as="image">');
    $("head").append('<link href="' + path + 'messagebox/css/styles.css" rel="stylesheet" type="text/css" media="all"/>');
});

function MessageBox(text, type, close_redirect, buttons, button1_description, button1_redirect, button2_description, button2_redirect){
    /* Generate the message_box and assign an unique id */
    var id = "msgbox_" + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + new Date().getMilliseconds();
    var message_box = "<div id='{id}' class='message_box'><div class='shadow'></div><div class='wrapper'><div class='header'><div class='close'></div></div><div class='icon'></div><div class='content'></div><div class='button1'></div><div class='button2'></div></div></div>";
    var message_box = message_box.replace(/{id}/g, id);
    $("body").append(message_box);

    /* Default attributes */
    var string = "CloseMessageBox('{id}');";
    var string = string.replace(/{id}/g, id);
    $("#"+ id +" > .wrapper > .header > .close").attr("onclick", string);

    var string = "CloseMessageBox('{id}');";
    var string = string.replace(/{id}/g, id);
    $("#"+ id +" > .wrapper > .button1").attr("onclick", string);

    var string = "CloseMessageBox('{id}');";
    var string = string.replace(/{id}/g, id);
    $("#"+ id +" > .wrapper > .button2").attr("onclick", string);

    /* Conditionals */
    if(text){
        $("#"+ id +" > .wrapper > .content").text(text);
    }
    if(type){
        $("#"+ id +" > .wrapper > .icon").addClass(type);
        $("#"+ id +" > .wrapper > .icon").css("display", "table");
    }
    if(close_redirect){
        var string = "window.location.href = '{url}';";
        var string = string.replace(/{url}/g, close_redirect);
        $("#"+ id +" > .wrapper > .header > .close").attr("onclick", string);
    }
    if(buttons){
        if(buttons == 1){
            $("#"+ id +" > .wrapper > .button1").css("display", "inline-table");
        }
        if(buttons == 2){
            $("#"+ id +" > .wrapper > .button1").css("display", "inline-table");
            $("#"+ id +" > .wrapper > .button1").css("margin-right", "6px");
            $("#"+ id +" > .wrapper > .button2").css("display", "inline-table");
        }
    }
    if(button1_description){
        $("#"+ id +" > .wrapper > .button1").html(button1_description);
    }
    if(button1_redirect){
        var string = "window.location.href = '{url}';";
        var string = string.replace(/{url}/g, button1_redirect);
        $("#"+ id +" > .wrapper > .button1").attr("onclick", string);
    }
    if(button2_description){
        $("#"+ id +" > .wrapper > .button2").html(button2_description);
    }
    if(button2_redirect){
        var string = "window.location.href = '{url}';";
        var string = string.replace(/{url}/g, button2_redirect);
        $("#"+ id +" > .wrapper > .button2").attr("onclick", string);
    }
    /* Display the message_box */
    $("#"+ id).css("display", "table");
}

function CloseMessageBox(id){
    $("#" + id).remove();
}