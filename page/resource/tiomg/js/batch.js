function Batch(option){
  var goods_uuid = option.goods_uuid;
  this.initConfig(option);
  
  var bme = this.getBatchMetadataElement();
  if(goods_uuid){
    
    var metadata = bme.data(goods_uuid);
    
    if(bme && metadata){
      this.init();
    } else {
      this.ajax();
    }
  }
  
}

Batch.prototype.ajax = function(){
  var me = this;
  var url = this.options.batch_metadata_url;
  var goods_uuid = this.options.goods_uuid;
  $.ajax({
    type: 'POST',
    url: url,
    data: {ti_uuid: goods_uuid},
    dataType: 'json',
    context: me,
    success: function(response){
      if(response && response.batch_metadata_uuid){
        //this.ins(response.batch_metadata);
        //缓存批次元数据
        var bme = this.getBatchMetadataElement();
        bme.data(goods_uuid, response);
        bme.val(response.batch_metadata_uuid);
        this.init();
      }
    },
    error: function(response){
      $.bootstrapGrowl("获取产品批次元数据失败。", {
        type: 'danger', align: 'center', delay: 10000, 
      });
    }
//    ,
//    complete: function(xhr, ts){
//      this.val();
//    }
  });
}

Batch.prototype.initConfig = function (option){
  this.options = {
    batch_metadata_url: "query_batch_metadata_by_goods",
    batch_url: "query_batch_by_sheet_line",
    
    column: 4,
    row: 0,
    row_prefix: "batch_line_",
    widgets: new Array()
  };
  $.extend(true, this.options, option);  
  
//  var batch_metadata_url = option.batch_metadata_url;
//  if(!batch_metadata_url) {
//    option.batch_metadata_url = "query_batch_metadata_by_goods";
//  }
//  
//  var batch_url = option.batch_url;
//  if(!batch_url) {
//    option.batch_url = "query_batch_by_sheet-line";
//  }
  /**
  this.goods_uuid = goods_uuid;
  
  this.column = 4;//每行4个元素
  this.row = 0;//记录有多少行
  this.row_prefix = "batch_line_";

  this.widgets = new Array(); **/
}

Batch.prototype.element = function(metadata) {
  var label = $("<label/>").attr("for", metadata.id).text(metadata.name);
  var input = $("<input type='input' class='form-control'/>");
  
  if("combox" == metadata.format){
    input = $("<select type='input' class='form-control'></select>");
  }
  
  input.attr({id: metadata.id, name: metadata.id});
  var element = $("<div class='form-group'/>").append(label).append(input);
  element = $("<div class='col-xs-6 col-sm-3 col-md-3'/>").append(element);
  
  return element;
}

Batch.prototype.init = function() {
  this.destroy();
  
  var batchMetadata = this.getBatchMetadata().batch_metadata;
  var length = batchMetadata.length;
  
  var j = 0;
  for(var i=0; i < length; i++){
    var row = $("#" + this.options.row_prefix + j);
    
    this.row = j;
	
	if((i+1)%4 == 0){
	  j++; 
	}
	
    if(row){
	  //html
	  row.append(this.element(batchMetadata[i]));
	  //build widget
	  this.widget(batchMetadata[i]);
	}

  }
  
  //设置批次值
  this.val();
}

Batch.prototype.widget = function(metadata) {
  
  
  var widget;
  var format = metadata.format;
  
  if(format == "date"){
    widget = this.date(metadata);
  }else if(format == "datetime"){
    widget = this.datetime(metadata);
  }else if(format == "number"){
    widget = this.number(metadata);
  }else if(format == "string"){
    widget = this.string(metadata);
  }else if(format == "combox"){
    widget = this.combox(metadata);
  }else if(format == "autocompleteplus"){
    widget = this.autocompleteplus(metadata);
  }
  
  if(widget){
    var widgets = this.options.widgets;
    widgets.push({id: metadata.id, format: format, widget: widget});
  }
}


Batch.prototype.destroy = function() {
   this.options.widgets = new Array();
   var batchMetadata = this.getBatchMetadata().batch_metadata;
   if(batchMetadata){
     for(var i=0; i < batchMetadata.length; i++){
       var row = $("#" + this.options.row_prefix + i);
       if(row){
         row.empty();
	   }
     }
   }
}

Batch.prototype.disable = function() {
  var widgets = this.options.widgets;
  
  for (var x in widgets){
    var w = widgets[x];
    if(w.format == "string" || w.format == "number" ){
      w.widget.attr("disabled", true);
    }else if(w.format == "combox" || w.format == "autocompleteplus"){
      w.widget.disable();
    }else if(w.format == "date" || w.format == "datetime"){
      w.widget.element.attr("disabled", true);
    }
  }
}

Batch.prototype.enable = function() {
  var widgets = this.options.widgets;
  
  for (var x in widgets){
    var w = widgets[x];
    if(w.format == "string" || w.format == "number" ){
      w.widget.attr("disabled", false);
    }else if(w.format == "combox" || w.format == "autocompleteplus"){
      w.widget.enable();
    }else if(w.format == "date" || w.format == "datetime"){
      w.widget.element.attr("disabled", false);
    }
  }
}

Batch.prototype.getBatchMetadataElement = function() {
  return $("#batch_metadata_element");
}

Batch.prototype.getBatchMetadata = function() {
  return this.getBatchMetadataElement().data(this.options.goods_uuid);
}


Batch.prototype.date = function(metadata) {
  var date = $("#" + metadata.id);
  if(date){
      date.datepicker({
        format: "yyyy-mm-dd",
        clearBtn: true,
        autoclose: true,
        todayHighlight: true,
        disableTouchKeyboard: true
      });
      date = $("#" + metadata.id).data("datepicker");
  }
  
  return date;
}

Batch.prototype.datetime = function(metadata) {
  var datetime = $("#" + metadata.id);
  if(datetime){
	  datetime.datepicker({
        format: "yyyy-mm-dd HH:mm:ss",
        clearBtn: true,
        autoclose: true,
        todayHighlight: true,
        disableTouchKeyboard: true
      });
     datetime = $("#" + metadata.id).data("datepicker");
  }
  
  return datetime;
}

Batch.prototype.number = function(metadata) {
  var number = $("#" + metadata.id);
  
  return number;
}

Batch.prototype.string = function(metadata) {
  var string = $("#" + metadata.id);
  
  return string;
}

Batch.prototype.combox = function(metadata) {
  var combox = $("#" + metadata.id);
  
  if(combox){
	  combox.combobox({source: metadata.config.source, data: {identifier: metadata.config.identifier}});
      combox = $("#" + metadata.id).data("custom-combobox");
  }
  
  return combox;
}

Batch.prototype.autocompleteplus = function(metadata) {
  var autocompleteplus = $("#" + metadata.id);
  
  if(autocompleteplus){
	  autocompleteplus.autocompleteplus({source: metadata.config.source, value: metadata.config.value});
      autocompleteplus = $("#" + metadata.id).data("custom-autocompleteplus");
  }
  
  return autocompleteplus;
}

Batch.prototype.val = function() {
  var sheet_line_uuid = this.options.sheet_line_uuid;
  if(!sheet_line_uuid){
      return;
  }
  
  var batch_url = this.options.batch_url;
  
  var me = this;
  $.ajax({
    type: 'POST',
    url: batch_url,
    data: {sheet_line_uuid: sheet_line_uuid},
    dataType: 'json',
    context: me,
    success: function(response){
      if(response) {
        var widgets = this.options.widgets;
        for (var x in widgets){
          var widgetObj = widgets[x];
          var widget_id = widgetObj.id;
          if(response[widget_id]){
           
            var format = widgetObj.format;
            if(format == "combox" || format == "autocompleteplus") {
               widgetObj.widget.val(response[widget_id]);
            } else if(format == "date" || format == "datetime"){
              widgetObj.widget.update(response[widget_id]);
            } else {
              widgetObj.widget.val(response[widget_id]);
            }
            
          }
        }
      }
    },
    error: function(response){
      $.bootstrapGrowl("获取产品批次信息失败。", {
        type: 'danger', align: 'center', delay: 10000, 
      });
    }
  });
}