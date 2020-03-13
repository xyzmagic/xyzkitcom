
$.widget( "custom.assignTable", {
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
        "quantity": "8",
        "conversion_quantity": 1,
        "unit_name": "瓶",
        "quantity_show": "8瓶"
    }
]
  },
  
  _create: function() {
    
    $('#assignTable').DataTable({
                paging: false,
                searching: false,
                ordering: false,
                info: false,
                footer: false,
                lengthChange: false,
                dom: '<"toolbar">',
                //data: {"data": [{location:"1-1", quantity: 100}, {location:"1-2", quantity: 200}]},
                data: [["1-1", 100], ["1-2", 200]],
//                columns: [
//                  { "data": "location" },
//                  { "data": "quantity" }
//                ],
                columnDefs: [
                  { targets: 0,
                    title: "库位",
                    createdCell: function (td, cellData, rowData, rowIndex, colIndex) {
                      var id = "assign_location_" + rowIndex + "_" + colIndex;
                      var input = $("<input type='text'/>").attr("id", id);
                      $(td).append(input);
                      input.autocompleteplus({source: "wms_autocomplete?object=location", scroll: true});
                    },
                    render: function (data, type, row, meta) {return "";}
                },{ targets: 1,
                    title: "数量",
                    createdCell: function (td, cellData, rowData, rowIndex, colIndex) {
                      var id = "unit_" + rowIndex + "_" + colIndex;
                      var div = $("<div/>").attr("id", id);
                      div.smartUnit({});
                      
                      $(td).append(div);
                    },
                    render: function (data, type, row, meta) {return "";}
                }]
        });
       
  
    
        
        
  },
  
  _columnDefs: function(columnDefs){
    for(var i=0; i < columnDefs.length; i++){
      var def = columnDefs[i];
      var type = def.type;
      
      
    }
    
  },
  
  destroy: function(){
    this.element.empty();
    this.element.removeData("units");
  }
});