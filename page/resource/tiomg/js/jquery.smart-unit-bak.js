/**123
   [
    {
        "unit": "packing_case",
        "quantity": "3",
        "conversion_quantity": 1,
        "unit_name": "箱",
        "quantity_show": "3箱"
    },
    {
        "unit": "inner_pack",
        "quantity": "8",
        "conversion_quantity": 1,
        "unit_name": "提",
        "quantity_show": "8提"
    },
    {
        "unit": "basic_unit",
        "quantity": "8",
        "conversion_quantity": 1,
        "unit_name": "瓶",
        "quantity_show": "8瓶"
    }
]
  
 **/


$.widget( "custom.smartunit", {
    // Default options.
  options: {
        //colums: [{name:"库位", width:3}, {name:"数量", width:6},  {name:"描述", width:3}],
    units: [
    {
        "unit": "packing_case",
        "quantity": "3",
        "conversion_quantity": 1,
        "unit_name": "箱",
        "quantity_show": "3箱"
    },
    {
        "unit": "inner_pack",
        "quantity": "8",
        "conversion_quantity": 1,
        "unit_name": "提",
        "quantity_show": "8提"
    },
    {
        "unit": "basic_unit",
        "quantity": "88",
        "conversion_quantity": 1,
        "unit_name": "瓶",
        "quantity_show": "8瓶"
    }
]
  },
  _create: function() {
    var units = this.option("units");
    if(units){
      //this.destroy();
      
      if(typeof units == "string"){
          units = JSON.parse(units);
          this.option("units", units);
      }
      
      var eid = this.element.attr("id");
      this.option("id", eid);
      
      this.element.attr("id", eid + "_smartunit");
      var input = $("<input type='text' hidden/>").attr("id", eid);
      this.element.append(input);
      
      this.element.data("units", units);
      
      var tr = $("<tr/>");
      for(var i=0; i<units.length; i++){
        var unit = units[i];
        tr.append(this._column(unit, i));
      }
      
      var id = this.element.attr("id") +　"_table";
      this.option({"table_id": id});
      
      var table = $("<table />").attr("id", id).append(tr);
      this.element.append(table);
    }
  },
  
  _column: function(unit, index) {
    var input = $("<input type='text' data-role='smart_unit' class='form-control' maxlength='7'/>");
    input.attr({id: unit.unit + "_" + index, name: unit.unit, style: "width: 100%;padding: 0px 0px!important;border-top-style:none;border-left-style:none;border-right-style:none;"});
    input.val(unit["quantity"]);
    
    this._bindEvent(input);
    
    var td = $("<td style='padding-right: 2px !important; padding-left: 0px !important; padding-top: 0px !important; padding-bottom: 0px !important;'/>");
    
    td.append(input).append(unit.unit_name);
    
    return td;
  },
  
  val: function(value){
      if(console){
          console.log("... ... ... ... ..................")
      }
      
      var tableId = this.option("table_id");
      var inputs = $("#" + tableId + " input");
      if(arguments.length == 0){
          var quantity_json_data = [];
          var units = this.element.data("units");
          for(var i=0; i<inputs.length; i++){
              quantity_json_data[i] = {
                quantity: $(inputs[i]).val(),
                unit: units[i].unit,
                unit_name: units[i].unit_name,
                conversion_quantity: units[i].conversion_quantity,
                quantity_show: $(inputs[i]).val() + units[i].unit
              };
          }
         
         var vJSON = JSON.stringify(quantity_json_data);
         var id = this.option("id");
         $("#" + id).val(vJSON);
         
         return vJSON;
      } else {
        if(typeof value == "string"){
          value = JSON.parse(value);
        }
        this.option("units", value);
        this._create();
      }
  },
  
  _bindEvent: function(input){
      var me = this;
      input.bind("blur",function(e){
        $(me).trigger("smartunit.blur"); 
     });
  },
  
  destroy: function(){
    this.element.empty();
    var id = this.option("id");
    if(id){
      this.element.attr("id", id);
    }
    this.element.removeData("units");
  }
});