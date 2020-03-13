function autocompleteField(obj) {
    var paramSetting = {
        field: "",
        source: "",
        
    };

    var paramSetting = $.extend(paramSetting, obj);
    
    var field = $( "#" + paramSetting.field);
    field.hide();
    var autocompleteField = field.clone(false);
   
    field.after(autocompleteField);
    autocompleteField.show();
    autocompleteField.attr("id", paramSetting.field + "_autocomplete");
    autocompleteField.attr("name", paramSetting.field + "_autocomplete");
    
    var url = paramSetting.source;
    var defaultValue = paramSetting.value;
    
    if(defaultValue){
      field.val(defaultValue);
    } else {
        defaultValue = field.val();
    }
    
    var setDefaultValue = false;
    var oldWidgetName = "";
    var oldWidgetValue = defaultValue;
    
    autocompleteField.autocomplete({
         source: url,
         minLength: 2, 
         select : function(event, ui){
            field.val(ui.item.ti_uuid);
            $(this).val(ui.item.ti_name);
            oldWidgetName = $(this).val();
            oldWidgetValue = field.val();
            return false;
         },
        change: function (event, ui) {
            if (!ui.item) {
                 $(this).val(event.currentTarget.defaultValue);
                 field.val(oldWidgetValue);
                 $(this).val(oldWidgetName);
             }
        },
        create: function( event, ui ) {
            if(defaultValue){
               var autoCompleteWidget = $(this).autocomplete("instance");
               autoCompleteWidget.search('{"value":"' + defaultValue + '"}');
               autoCompleteWidget.close();
               setDefaultValue = true;
            }
        },
        response: function( event, ui ) {
            if(setDefaultValue){
               $(this).val(ui.content[0].ti_name);
               oldWidgetName = $(this).val();
               setDefaultValue = false;
            }
        }
    }).addClass( "form-control").autocomplete( "instance" )._renderItem = function( ul, item ) {
        return $( "<li>" )
        .append( "<a>" + item.ti_name + "(" + item.ti_identifier + ")<br>" + item.ti_documentation + "</a>" )
        .appendTo( ul );
    };
}


function openInnerSouthIframe(url, height){
    top.sizePane("south", height ? height : 400);
    top.$("#inner_south_iframe")[0].src = url;
}

function closeInnerSouthIframe(){
    top.hidePanel();
}