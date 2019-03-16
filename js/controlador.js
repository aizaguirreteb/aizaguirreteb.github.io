$.controlador = {}

    


$.controlador.panel_activo="";

/*
* Method that changes the active panel
*/
$.controlador.activarPanel = function(panel_nuevo) {
    $($.controlador.panel_activo).hide();
    $(panel_nuevo).show();
    $.controlador.panel_activo=panel_nuevo;
}


/*
* Method that initiates the top bar with its content and selects the active panel on click
*/
$.controlador.init = function (panel_inicial)  {
   
    $('[id^="menu_"]').each(function()  {
        var $this = $(this);
        var menu_id = $this.attr('id');
        var panel_id = menu_id.replace('menu_', 'panel_');

        $("#" + menu_id).click(function () {
            $.controlador.activarPanel("#" + panel_id);
        });
        console.log("id_menu::" + menu_id + "  id_panel::" + panel_id);
    });
    
    
    $(".panel").hide();
    
    $.controlador.activarPanel("#"+panel_inicial);
}

/*
* Method that initiates the offCanvas Menu with its content and selects the active panel on click
*/
$.controlador.initCanvas = function (panel_inicial)  {
   
    $('[id^="canvas_"]').each(function()  {
        var $this = $(this);
        var canvas_id = $this.attr('id');
        var panel_id = canvas_id.replace('canvas_', 'panel_');

        $("#" + canvas_id).click(function () {
            $.controlador.activarPanel("#" + panel_id);
        });
        console.log("id_canvas::" + canvas_id + "  id_panel::" + panel_id);
    });
    
    $(".panel").hide();
    
    $.controlador.activarPanel("#"+panel_inicial);
}