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

new MultilevelPackage(options);
  
**/

function MultilevelPackage(option){
  this.options = {
    id: "multilevelPackage",
    name_space: "ma",
    eq: "expected_quantity",
    eq_name: "预计数量",
    aq: "actual_quantity",
    aq_name: "实收数量",
    widget: {}
  };
  
  this.options = $.extend(this.options, option);

  this.numberRegx = /^[0-9]*[1-9][0-9]*$/;
  this.floatRegx = /^(?!0+(\.0+)?$)\d+(\.\d+)?$/;
  
  this.options.colNameEQ = this.options.name_space + "_" + this.options.eq;
  this.options.colNameAQ = this.options.name_space + "_" + this.options.aq;
  
  this.init();
}

MultilevelPackage.prototype.init = function() {
  var metadata = this.options.metadata;
  var mpElement = $("#" + this.options.id);
  if(mpElement){
    mpElement.children().remove();
    
    var hiEQ = $("<input type='hidden'/>");
    hiEQ.attr({id: this.options.colNameEQ, name: this.options.colNameEQ});
    mpElement.append(hiEQ);
    
    var hiAQ = $("<input type='hidden'/>");
    hiAQ.attr({id: this.options.colNameAQ, name: this.options.colNameAQ});
    mpElement.append(hiAQ);
    
  }
  
  /**
  if(expected){
    expected.children().remove();
    var hiEQ = $("<input type='hidden'/>");
    hiEQ.attr({id: this.options.colNameEQ, name: this.options.colNameEQ});
    expected.append(hiEQ);
  }
  
  if(actual){
    actual.children().remove();
    var hiAQ = $("<input type='hidden'/>");
    hiAQ.attr({id: this.options.colNameAQ, name: this.options.colNameAQ});
    expected.append(hiAQ);
  }  **/
  
  if(metadata){
    this.widget();
    
    var expected_quantity = this.options.expected_quantity;
    var actual_quantity = this.options.actual_quantity;
    if(expected_quantity){
      this.setVal(expected_quantity);
    }

    if(actual_quantity){
      this.setVal(actual_quantity);
    }
  }
};

MultilevelPackage.prototype.widget = function() {
  var option = this.options;
  var metadata = option.metadata;
  metadata = metadata.sort(function(a, b){
    return a.ordering_position < b.ordering_position;
  });
  option.metadata = metadata;
  
  var mpElement = $("#" + this.options.id);
  //var actual = $("#" + option.actual);
  
  var ex_tr = $("<tr/>");
  var ac_tr = $("<tr/>");
  
  
  var element;
  for(var x in metadata){
    element = this.element(metadata[x], option.eq);
    if(element){
      ex_tr.append(element);
    }
    
    element = this.element(metadata[x], option.aq);
    if(element){
      ac_tr.append(element);
    }
  }
  
  
  mpElement.append($("<div class='col-sm-6 col-md-6 col-xs-6' />").append("<label>" + option.eq_name + "</label>").append($("<table/>").append(ex_tr)));
  
  mpElement.append($("<div class='col-sm-6 col-md-6 col-xs-6' />").append("<label>" + option.aq_name + "</label>").append($("<table/>").append(ac_tr)));

};

MultilevelPackage.prototype.element = function(item, row_identifier) {
  var name = item.unit_name;
  var group = item.unit;
  var id = group + "_" + row_identifier;
  var element;
  if(name && group){
    var input = $("<input type='input' class='form-control' maxlength='7' />");
    input.data("metadata", item);
    input.attr({id: id, name: group, style: "width: 100%;padding: 6px 1px;border-top-style:none;border-left-style:none;border-right-style:none;"});
    
    if(this.options.eq == row_identifier){
      input.attr('fg', this.options.eq);
      this.bindEQ(input);
    } else if(this.options.aq == row_identifier){
      input.attr('fg', this.options.aq);
      this.bindAQ(input);
    }
    
    var td = $("<td style='padding-right: 2px !important; padding-left: 0px !important;'/>");
    
    
    element = td.append(input).append(name);
    
    this.options.widget[id] = input;
  }
  return element;
};

MultilevelPackage.prototype.setVal = function(quantity_josn) {
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
    
    //避免初始化值得时候，ma_actual_quantity为空的情况
    if(w){
      w.trigger('blur');
    }
    
  }
};

MultilevelPackage.prototype.bindEQ = function(element) {
  if(element){
    var me =  this;
    element.blur(function(){
      var name = $(this).attr("name");
       var value = $(this).val();

      var correct = false;
      if(name == "basic_unit"){
        correct = me.numberRegx.test(value) || me.floatRegx.test(value);
      }else {
        correct = me.numberRegx.test(value);
      }

      var actualElement = $("#" + name + "_" + me.options.aq);
      if(correct){
        if(actualElement){
          actualElement.val(value);
        }
      }else {
        $(this).val("");
        if(actualElement){
          actualElement.val("");
        }
      }
      
      var hiEQ = $("#" + me.options.colNameEQ);
      if(hiEQ){
        var jsonEQ = JSON.stringify(me.val(me.options.eq));
        hiEQ.val(jsonEQ);
      }
      
      var hiAQ = $("#" + me.options.colNameAQ);
      if(hiAQ){
        var jsonAQ = JSON.stringify(me.val(me.options.aq));
        hiAQ.val(jsonAQ);
      }
      
    });
  }
};

MultilevelPackage.prototype.bindAQ = function(element) {
  if(element){
    var me =  this;
    element.blur(function(){
      var name = $(this).attr("name");
       var value = $(this).val();

      var correct = false;
      if(name == "basic_unit"){
        correct = me.numberRegx.test(value) || me.floatRegx.test(value);
      }else {
        correct = me.numberRegx.test(value);
      }

      if(!correct){
        $(this).val("");
      }
      
      var hiAQ = $("#" + me.options.colNameAQ);
      if(hiAQ){
        var jsonAQ = JSON.stringify(me.val(me.options.aq));
        hiAQ.val(jsonAQ+" ");
      }
      
    });
  }
};

MultilevelPackage.prototype.val = function(flag) {
  var arr = [];
  var inputs = $("#" + this.options.id + " input[fg='" + flag + "']");
  for(var x=0; x < inputs.length; x++){
    var input = inputs[x];
    var name = input.name;
    var value = $(input).val();
    var metadata = $(input).data("metadata");
    if(value && name){
      arr.push({unit: name, quantity: value, conversion_quantity:1, 
        unit_name: metadata.unit_name, quantity_show: value + metadata.unit_name});
    }
  }
  return arr;
};