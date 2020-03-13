$.widget( "custom.combobox", {
      options: {
         source: null,
         type: "POST",
         data: null
      },
      _create: function() {
        this.wrapper = $( "<span>" )
          .addClass( "custom-combobox" )
          .insertAfter( this.element );
        this.input = $( "<input class='form-control'>" );
        
        this.element.hide();
        this._initOption();
        this._createAutocomplete();
        this._createShowAllButton();
        
      },
 
      _createAutocomplete: function() {
        var selected = this.element.children( ":selected" );
        var value = selected.val() ? selected.text() : "";
        
        this.input.appendTo( this.wrapper )
          .val( value )
          .attr( "title", "" )
          .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left" )
          .autocomplete({
            delay: 0,
            minLength: 0,
            source: $.proxy( this, "_source" )
          })
          .tooltip({
            tooltipClass: "ui-state-highlight"
          });
 
        this._on( this.input, {
          autocompleteselect: function( event, ui ) {
            ui.item.option.selected = true;
            this._trigger( "select", event, {
              item: ui.item.option
            });
          },
 
          autocompletechange: "_removeIfInvalid"
        });
      },
 
      _createShowAllButton: function() {
        var input = this.input,
          wasOpen = false;
          
        var div = $("<div class='form-group has-feedback'></div>").insertAfter(this.input).append(this.input);
        //form-control-feedback
        var aLink = $( "<a><span class='glyphicon glyphicon-search' aria-hidden='true' style='position: absolute;top: 0;right: 0;z-index: 2;display: block;width: 34px;height: 34px;line-height: 34px;text-align: center;'></span></a>" )
          .attr( "tabIndex", -1 )
          //.attr( "title", "Show All Items" )
          .tooltip()
          //.appendTo( this.wrapper )
          .appendTo( div )
          .button({
            icons: {
              primary: "ui-icon-triangle-1-s"
            },
            text: false
          })
          .removeClass( "ui-corner-all" )
          .addClass( "custom-combobox-toggle ui-corner-right" )
          .mousedown(function() {
            wasOpen = input.autocomplete( "widget" ).is( ":visible" );
          })
          .click(function() {
            input.focus();
 
            // Close if already visible
            if ( wasOpen ) {
              return;
            }
 
            // Pass empty string as value to search for, displaying all results
            input.autocomplete( "search", "" );
          });
          
          this.aLink = aLink;
      },
 
      _source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
        response( this.element.children( "option" ).map(function() {
          var text = $( this ).text();
          if ( this.value && ( !request.term || matcher.test(text) ) )
            return {
              label: text,
              value: text,
              option: this
            };
        }) );
      },
 
      _removeIfInvalid: function( event, ui ) {
        // Selected an item, nothing to do
        if ( ui.item ) {
          return;
        }
 
        // Search for a match (case-insensitive)
        var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children( "option" ).each(function() {
          if ( $( this ).text().toLowerCase() === valueLowerCase ) {
            this.selected = valid = true;
            return false;
          }
        });
 
        // Found a match, nothing to do
        if ( valid ) {
          return;
        }
 
        // Remove invalid value
        this.input
          .val( "" )
          .attr( "title", value + " didn't match any item" );
          //.tooltip( "open" );
        //this.element.val( "" );
        this._delay(function() {
          //this.input.tooltip( "close" ).attr( "title", "" );
          this.input.attr( "title", "" );
        }, 2500 );
        this.input.autocomplete( "instance" ).term = "";
        
        var selected = this.element.children( ":selected" );
        if(selected){
          this.input.val(selected.text());
        }
      },
 
      _destroy: function() {
        this.wrapper.remove();
        this.element.show();
        this.element.find("option:first").attr('selected','selected');
      },
      
      _initOption: function(){
          var me = this;
         
         if(typeof this.options.source === "string"){
           me.source(me, me.element, me._buildOption);
         }else {
           //me.source = me.options.source;
           me.options.source(me, me.element, me._buildOption);
         }
      },
      
      source: function(widget, element, buildOption){
        var me = widget;
        $.ajax({ url: this.options.source, dataType: "json", type:this.options.type,
          data: this.options.data,
          //context: this.element,
          context: me,
          success: function(data, textStatus){
            buildOption(data, widget, element);
          }});
      },
      
      _buildOption: function(data, widget, element){
        var me = widget;
        var _this = element;
        $.each(data,function(key,val){
                 if(data[key].value && _this.find("option[value='"+data[key].value+"']").length<1){
                     _this.append($("<option>").attr("value", data[key].value).text(data[key].name));
                     
                     var firstOption = _this.find("option:first").val();
                     if(firstOption) {
                        _this.prepend($("<option>").attr("value", "").text(""));
                     }
                 }else if(data[key].value && _this.find("option[value='"+data[key].value+"']").length>=1){
                      _this.find("option[value='"+data[key].value+"']").text(data[key].name);
                      
                      var selected = _this.children( ":selected" );
                      if(selected.val() == data[key].value){
                          me.input.val(data[key].name);
                      }
                      
                 }
            });
        
        if(me.options.response){
          me.options.response();
        }
      },
     
     val : function(value){
        if(arguments.length == 0){
          return this.element.val();
        }else {
          var option = this.element.find("option[value='" + value + "']");
          if(option){
            this.element.val(value);
            this.input.val(option.text());
          }
        }
      },
      
      setVal: function(value){
          var option = this.element.find("option[value='" + value + "']");
          if(option){
              option.attr('selected','selected');
              this.input.val(option.text());
          }
          
          if(console){
              console.log("The method setVal() is deprecated, please instead of val(). The element id is '" + this.element.attr("id") + "'.");
          }
      },
      
      reload: function(){
        this.element.empty();
        this.input.val("");
        this._initOption();
      },
      
      getAutocomplete: function(){
        return $(this.input).autocomplete("instance");
      },
      
      disable: function(){
          //pointer-events: none;
        //$(this.input).autocomplete("instance").disable();
        $(this.aLink).find("span").addClass("form-control-feedback");
        $(this.input).attr("readonly", true);
      },
      
      enable: function(){
        //$(this.input).autocomplete("instance").enable();
        $(this.aLink).find("span").removeClass("form-control-feedback");
        $(this.input).attr("readonly", false);
      },
      
      clear: function(){
        this.element.empty();
      }
    });