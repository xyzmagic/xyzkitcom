/***
  expected: 主动行div的id
  actual: 被动行div的id

var metadata = [
{ordering_position:5, unit:"pallet", unit_name:"栈板", conversion:10000},
{ordering_position:3, unit:"packing_box", unit_name:"盒", conversion:100},
{ordering_position:4, unit:"packing_case", unit_name:"箱", conversion:1000},
{ordering_position:2, unit:"inner_pack", unit_name:"内包装", conversion:10},
{ordering_position:6, unit:"other", unit_name:"其它", conversion:100000},
{ordering_position:1, unit:"basic_unit", unit_name:"基本单位", conversion:1}
];

var options = {
  expected_quantity: {column:"expected_quantity", value: [{unit:"basic_unit", quantity:5},{unit:"packing_case", quantity:100}]},
  actual_quantity: {column:"actual_quantity", value: [{unit:"basic_unit", quantity:5},{unit:"packing_case", quantity:100}]},
  metadata: metadata
}

**/

$.widget("custom.multilevelPackage", {
    // Default options.
  options : {
    leftColumn: "ma_expected_quantity",
    rightColumn: "ma_actual_quantity",
    leftColumnName: "预计数量",
    rightColumnName: "实收数量",
    numberRegx: /^[0-9]*[1-9][0-9]*$/,
    floatRegx: /^(?!0+(\.0+)?$)\d+(\.\d+)?$/
  },
  
  _create : function() {
    this.element.empty();
    
    var leftColumn = this.option("leftColumn");
    var rightColumn = this.option("rightColumn");
    
    var leftColumnHidden = $("<input type='hidden'/>");
    leftColumnHidden.attr({id: leftColumn, name: leftColumn});
    this.element.append(leftColumnHidden);
    
    var rightColumnHidden = $("<input type='hidden'/>");
    rightColumnHidden.attr({id: rightColumn, name: rightColumn});
    this.element.append(rightColumnHidden);
    
    this._createMultilevelUnit();
    
    var leftQuantity = this.option(leftColumn);
    var rightQuantity = this.option(rightColumn);
    var quantityJSON = {};
    quantityJSON[leftColumn] = leftQuantity;
    quantityJSON[rightColumn] = rightQuantity;
    this.val(quantityJSON);
  },
  
  _createMultilevelUnit : function() {
    var metadata = this.option("metadata");
    if(!metadata){
      return;
    }
    
    metadata = metadata.sort(function(a, b){
      return a.ordering_position < b.ordering_position;
    });
    
    this.option("metadata", metadata);
    
    var leftColumn = this.option("leftColumn");
    var rightColumn = this.option("rightColumn");
    var left_tr = $("<tr/>");
    var right_tr = $("<tr/>");
  
    var element;
    for(var x in metadata){
      element = this._createUnit(metadata[x], leftColumn);
      if(element){
        left_tr.append(element);
      }
    
      element = this._createUnit(metadata[x], rightColumn);
      if(element){
        right_tr.append(element);
      }
    }
  
    var leftColumnName = this.option("leftColumnName");
    var rightColumnName = this.option("rightColumnName");
    this.element.append($("<div class='col-sm-6 col-md-6 col-xs-6' />")
    .append("<label>" + leftColumnName + "</label>").append($("<table/>").append(left_tr)));
  
    this.element.append($("<div class='col-sm-6 col-md-6 col-xs-6' />")
    .append("<label>" + rightColumnName + "</label>").append($("<table/>").append(right_tr)));
  },
  
  _createUnit : function(item, row_identifier) {
    var unitName = item.unit_name;
    var unitCode = item.unit;
    var id = unitCode + "_" + row_identifier;
    
    var leftColumn = this.option("leftColumn");
    var rightColumn = this.option("rightColumn");
    
    var element;
    if(unitName && unitCode){
      var input = $("<input type='input' class='form-control' maxlength='7' />");
      input.data("metadata", item);
      input.attr({id: id, name: unitCode, style: "width: 100%;padding: 6px 1px;border-top-style:none;border-left-style:none;border-right-style:none;"});
    
      if(leftColumn == row_identifier){
        input.attr('data-side', leftColumn);
        this._bindLeftEvent(input);
      } else if(rightColumn == row_identifier){
        input.attr('data-side', rightColumn);
        this._bindRightEvent(input);
      }
    
      var td = $("<td style='padding-right: 2px !important; padding-left: 0px !important;'/>");
    
    
      element = td.append(input).append(unitName);
    
      //this.options.widget[id] = input;
    }
    return element;
  },
  
  _bindLeftEvent: function(unitElement){
    var element = unitElement;
    if(!element){
        return;
    }
    
    var leftColumn = this.option("leftColumn");
    var rightColumn = this.option("rightColumn");
    
    var me =  this;
    var numberRegx = me.option("numberRegx");
    var floatRegx = me.option("floatRegx");
    
    element.blur(function(){
      var name = $(this).attr("name");
      var value = $(this).val();

      var correct = false;
      if(name == "basic_unit"){
        correct = numberRegx.test(value) || floatRegx.test(value);
      }else {
        correct = numberRegx.test(value);
      }

      var rightUnitElement = $("#" + name + "_" + rightColumn);
      if(correct){
        if(rightUnitElement){
          rightUnitElement.val(value);
        }
      }else {
        $(this).val("");
        if(rightUnitElement){
          rightUnitElement.val("");
        }
      }
      
      var leftColumnHidden = $("#" + leftColumn);
      if(leftColumnHidden){
        var jsonEQ = JSON.stringify(me._tirggerValue(leftColumn));
        leftColumnHidden.val(jsonEQ);
      }
      
      var rightColumnHidden = $("#" + rightColumn);
      if(rightColumnHidden){
        var jsonAQ = JSON.stringify(me._tirggerValue(rightColumn));
        rightColumnHidden.val(jsonAQ);
      }
      
    });
  },
  
  _bindRightEvent: function(unitElement){
    var element = unitElement;
    if(!element){
      return;
    }
    
    var me =  this;
    var rightColumn = this.option("rightColumn");
    var numberRegx = me.option("numberRegx");
    var floatRegx = me.option("floatRegx");
    
    element.blur(function(){
      var name = $(this).attr("name");
       var value = $(this).val();

      var correct = false;
      if(name == "basic_unit"){
        correct = numberRegx.test(value) || floatRegx.test(value);
      }else {
        correct = numberRegx.test(value);
      }

      if(!correct){
        $(this).val("");
      }
      
      var rightColumnHidden = $("#" + rightColumn);
      if(rightColumnHidden){
        var jsonAQ = JSON.stringify(me._tirggerValue(rightColumn));
        rightColumnHidden.val(jsonAQ);
      }
      
    });
  
  },
  
  _tirggerValue: function(flag){
    var arr = [];
    var elementId = this.element.attr("id");
    var inputs = $("#" + elementId + " input[data-side='" + flag + "']");
    for(var x=0; x < inputs.length; x++){
      var input = inputs[x];
      var name = input.name;
      var value = $(input).val();
      var metadata = $(input).data("metadata");
    
      if(value && name){
        arr.push({unit: name, quantity: value, conversion_quantity: metadata.ma_conversion, 
          unit_name: metadata.unit_name, quantity_show: value + metadata.unit_name});
      }
    }
    
    return arr;
  },
  
  val: function(left_right_quantity){
    if(arguments.length == 0){
      var leftColumn = this.option("leftColumn");
      var rightColumn = this.option("rightColumn");
      var leftColumnHidden = $("#" + leftColumn);
      var rightColumnHidden = $("#" + rightColumn);
      
      var value = {};
      value[leftColumn] = leftColumnHidden.val();
      value[rightColumn] = rightColumnHidden.val();
      
      return value;
    }else {
      this._setVal(left_right_quantity);
    }
  },
  
  _setVal: function(left_right_quantity){
    var leftColumn = this.option("leftColumn");
    var rightColumn = this.option("rightColumn");
    
    if(typeof left_right_quantity == "string"){
        left_right_quantity = JSON.parse(left_right_quantity);
    }
    var leftQuantity = left_right_quantity[leftColumn];
    var rightQuantity = left_right_quantity[rightColumn];
    
    if(typeof leftQuantity == "string"){
      leftQuantity = JSON.parse(leftQuantity);
    }
      
    if(typeof rightQuantity == "string"){
      rightQuantity = JSON.parse(rightQuantity);
    }
    
    this._setValForAllUnit(leftQuantity, leftColumn);
    this._setValForAllUnit(rightQuantity, rightColumn);
    
    this._tirggerValue(leftColumn);
    this._tirggerValue(rightColumn);
  },
  
  _setValForAllUnit: function(multiUnitQuantity, leftOrRightColumn){
    if(multiUnitQuantity){
      for(var x in multiUnitQuantity){
        var unitQuantity = multiUnitQuantity[x];
        var unitCode = unitQuantity["unit"];
        var quantity = unitQuantity["quantity"];
        if(unitCode){
          var input = $("#" + unitCode + "_" + leftOrRightColumn);
          if(input){
            input.val(quantity);
          }
        }
      
      }
    }
  },
  
  _setVal2: function(quantity_josn){
    var metadata = this.options.metadata;
    var column = quantity_josn.column;
    var valueJSON = quantity_josn.value;
    if(valueJSON){
      var value = JSON.parse(valueJSON);
      var widget = this.options.widget;
  
      var w;
      if(column && value){
        for(var x in value){
          var item = value[x];
          var id = item.unit + "_" + column;
          w = widget[id];
          if(w) {
            w.val(item.quantity);
          }
        }
      }
    
      //避免初始化值得时候，rightColumn为空的情况
      if(w){
        w.trigger('blur');
      }
    }
  }
    
    
    
    
    
    
    
    
    
    
});