$.widget("custom.autocompleteplus", {
    options: {
        field: "",
        source: "",
        minLength: 2
    },
    _create: function() {

        this.element.hide();

        if (this.options.value) {
            this.element.val(this.options.value);
        } else {
            this.options.value = this.element.val();
        }

        this._createAutocomplete();

    },

    _createAutocomplete: function() {
        this.options.setDefaultValue = false;
        this.options.oldWidgetName = "";
        this.options.oldWidgetValue = this.options.value;
        this.options.defaultValue = this.options.value;

        var url = this.options.source;
        var minLength = this.options.minLength;

        var field = this.element;
        $("<div class='form-group has-feedback'></div>").insertAfter(this.element).append(this.element);

        this.autocompleteField = $("<input type='text' class='form-control'/>").addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left" );
        this.autocompleteField.attr("id", this.element.attr("name") + "_autocomplete").attr("name", this.element.attr("name") + "_autocomplete").insertAfter(this.element);
        
        //form-control-feedback
        this.aLink = $("<a><span class='glyphicon glyphicon-share-alt' style='position: absolute;top: 0;right: 0;z-index: 2;display: block;width: 34px;height: 34px;line-height: 34px;text-align: center;'></span></a>").insertAfter(this.autocompleteField);
        
        var me = this;

        this.autocompleteField.autocomplete({
            source: url,
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            minLength: minLength,
            select: function(event, ui) {
                field.val(ui.item.value);
                $(this).val(ui.item.name);
                me.options.oldWidgetName = $(this).val();
                me.options.oldWidgetValue = field.val();
                
                if(me.options.select){
                    me.options.select(event, ui);
                }
                
                return false;
            },
            change: function(event, ui) {
                if (!ui.item) {
                    //$(this).val(event.currentTarget.defaultValue);
                    field.val(me.options.oldWidgetValue);
                    $(this).val(me.options.oldWidgetName);
                }
            },
            create: function(event, ui) {
                if (me.options.defaultValue) {
                    var autoCompleteWidget = $(this).autocomplete("instance");
                    autoCompleteWidget.search('{"value":"' + me.options.defaultValue + '"}');
                    autoCompleteWidget.close();
                    me.options.setDefaultValue = true;
                }
            },
            response: function(event, ui) {
                if (me.options.setDefaultValue && ui.content[0]) {
                    $(this).val(ui.content[0].name);
                    me.options.oldWidgetName = $(this).val();
                    
                    me.element.val(ui.content[0].value);
                    setDefaultValue = false;
                }
                
                if(me.options.response){
                  me.options.response(event, ui);
                }
            }
    
        }).addClass("form-control").autocomplete("instance")._renderItem = function(ul, item) {
            var identifier = item.identifier ? "(" + item.identifier + ")" : "";
            var doc = item.doc ? item.doc : "";
            
            return $("<li>").append("<a>" + item.name + identifier + "<br>" + doc + "</a>").appendTo(ul);
        };
    },

    _destroy: function() {
        this.autocompleteField.remove();
        this.element.show();
    },
    
    setVal: function(value){
        var autoCompleteWidget = $(this.autocompleteField).autocomplete("instance");
        if(value){
          autoCompleteWidget.search('{"value":"' + value + '"}');
          autoCompleteWidget.close();
          this.options.setDefaultValue = true;
        }else {
          autoCompleteWidget.element.val("");
          this.element.val("");
        }
    },
    
    getAutocomplete: function(){
        return $(this.autocompleteField).autocomplete("instance");
    },
    
    disable: function(){
        //$(this.autocompleteField).autocomplete("instance").disable();
        $(this.aLink).find("span").addClass("form-control-feedback");
        $(this.autocompleteField).attr("readonly", true);
    },
      
    enable: function(){
        //$(this.autocompleteField).autocomplete("instance").enable();
        $(this.aLink).find("span").removeClass("form-control-feedback");
        $(this.autocompleteField).attr("readonly", false);
    }

});