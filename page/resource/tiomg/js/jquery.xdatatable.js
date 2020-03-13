$.widget("custom.xdatatable", {
    // Default options.
    options : {
        // colums: [{name:"库位", width:3}, {name:"数量", width:6}, {name:"描述",
        // width:3}],
        /**
        units : [ {
            "unit" : "packing_case",
            "quantity" : "3",
            "conversion_quantity" : 1,
            "unit_name" : "箱",
            "quantity_show" : "3箱"
        }, {
            "unit" : "inner_pack",
            "quantity" : "8",
            "conversion_quantity" : 1,
            "unit_name" : "提",
            "quantity_show" : "8提"
        }, {
            "unit" : "basic_unit",
            "quantity" : "8",
            "conversion_quantity" : 1,
            "unit_name" : "瓶",
            "quantity_show" : "8瓶"
        } ],  **/
        param: {contractid: 333},
        columnDefs : [ {
            title : "起始时间",
            type : "date",
            name : "startdate",
            defaultValue: ""
        }, {
            title : "结束时间",
            type : "date",
            name : "enddate",
            defaultValue: ""
        }, {
            title : "金额",
            type : "input",
            name : "amount",
            defaultValue: ""
        } , {
            title : "状态",
            type : "combobox",
            name : "status",
            source : "dict",
            identifier: '1',
            defaultValue: "17"
        }]
        
//        ,
//        data : [ {id: 1, startdate: "2017-03-06", enddate: "2017-06-06", amount: 103, status: 2},
//            {id: 2, startdate: "2017-03-06", enddate: "2017-06-06", amount: 103, status: 3},
//            {id: 3, startdate: "2017-03-06", enddate: "2017-06-06", amount: 103, status: 4}
//         ]
    },

    _create : function() {
        var me = this;
        me._initColumnDefs(this.option("columnDefs"));
        
        var columns = me.option("columns_DataTable");
        var columnDefs = me.option("columnDefs_DataTable");
        var data = me.option("data");
        
        var id = this.element.attr("id");

        $('#' + id).DataTable({
            paging : false,
            searching : false,
            ordering : false,
            info : false,
            footer : false,
            lengthChange : false,
            dom : '<"toolbar">',
            data : data,
        
            columns: columns,
            columnDefs : columnDefs
        });
        
        this._toolBar();
        
        $('#' + id + ' tbody').on( 'dblclick', 'tr', function () {
            $(this).toggleClass('selected');
            
            var table = $(this).parents("table");
            var rowIndex = table.find("tr").index(this) - 1;
            
        } );

       //查询数据
        me.query();
    },

    _initColumnDefs : function(defs) {
        var me = this;
        var columns = [];
        var columnDefs = [];
        
        for (var i = 0; i < defs.length; i++) {
            var def = defs[i];

            columnDefs[i] = {
                targets : i,
                title : def.title,
                createdCell : function(td, cellData, rowData, rowIndex,
                        colIndex) {
                    var f = me._renderWidget(td, cellData, rowData, rowIndex,
                            colIndex);
                    f(td, cellData, rowData, rowIndex,
                            colIndex);
                },
                render : function(data, type, row, meta) {
                    return "";
                }
            };
            
            columns[i] = { "data": def.name};
        }
        
        me.option("columnDefs_DataTable", columnDefs);
        me.option("columns_DataTable", columns);
    },

    _renderWidget : function(td, cellData, rowData, rowIndex, colIndex) {
        var me = this;

        var def = me.option("columnDefs")[colIndex];
        var elementId = me.element.attr("id");
        var type = def.type;
        var name = def.name;
        var f = function(td, cellData, rowData, rowIndex, colIndex) {
        };
        if (type == "autocomplete") {
            f = function(td, cellData, rowData, rowIndex,
                    colIndex) {
                var id = elementId + "_" + name + "_" + rowIndex + "_"
                        + colIndex;
                var input = $("<input type='text' class='form-control'/>")
                        .attr("id", id).attr("name", id);
                $(td).append(input);
                
                input.autocompleteplus({
                    source : def.source,
                    scroll : true,
                    value: rowData[colIndex],
                    response: function(){
                      me._updateTableData(rowIndex);
                    },
                    select: function(){
                      me._updateTableData(rowIndex);
                    }
                });
                
                $(input).data("custom-autocompleteplus").val(cellData);
            };
        } else if (type == "combobox") {
            f = function(td, cellData, rowData, rowIndex,
                    colIndex) {
                var id = elementId + "_" + name + "_" + rowIndex + "_"
                + colIndex;
                var select = $("<select/>").attr("id", id);
                $(td).append(select);
                
                $(select).combobox({
                    source: def.source, 
                    data: {identifier: def.identifier},
                    response: function(){
                      $(select).data("custom-combobox").val(cellData);
                      
                      me._updateTableData(rowIndex);
                    },
                    
                    select: function( event, ui ) {
                        me._updateTableData(rowIndex);
                    }
                });
                
                
            };
        } else if (type == "date") {
            f = function(td, cellData, rowData, rowIndex,
                    colIndex) {
                var id = elementId + "_" + name + "_" + rowIndex + "_"
                + colIndex;
                var input = $("<input type='text' class='form-control'/>").attr(
                        "id", id);
                $(td).append(input);
                
                $(input).datepicker({
                    format: 'yyyy-mm-dd',
                    clearBtn: true,
                    language: "zh-CN",
                    autoclose: true
                }).on("hide", function(e) {
                    me._updateTableData(rowIndex);
                });

                $(input).data("datepicker").update(cellData);
            };
        } else if (type == "dateTime") {
            f = function(td, cellData, rowData, rowIndex,
                    colIndex) {
                var id = elementId + "_" + name + "_" + rowIndex + "_"
                + colIndex;
                var input = $("<input type='text' class='form-control'/>").attr(
                        "id", id);
                $(td).append(input);
                
                $(input).datepicker({
                    format: 'h24-Mi-ss',
                    clearBtn: true,
                    language: "zh-CN",
                    autoclose: true
                }).on("hide", function(e) {
                    me._updateTableData(rowIndex);
                });
                
                $(input).data("datepicker").update(cellData);
            };
        } else if (type == "smartunit") {
           f = function(td, cellData, rowData, rowIndex,
                    colIndex) {
                var id = elementId + "_" + name + "_" + rowIndex + "_"
                + colIndex;
                var input = $("<input type='text' class='form-control'/>").attr(
                        "id", id);
                     
                $(td).append(input);
                input.smartunit({units: cellData});
                
                $($(input).data("custom-smartunit")).bind("smartunit.blur", function(e){
                  me._updateTableData(rowIndex);
                });
                
               $(input).val(JSON.stringify(cellData));
            };
        } else {
            f = function(td, cellData, rowData, rowIndex,
                    colIndex) {
                var id = elementId + "_" + name + "_" + rowIndex + "_"
                + colIndex;
                var input = $("<input type='text' class='form-control'/>").attr(
                        "id", id);
                
                input.on("blur", function(){
                    me._updateTableData(rowIndex);
                });
                
                $(td).append(input);
                input.val(cellData);
            };
        }
        
        return f;
    },

    addRow : function(row) {
      var me = this;
      var dataTable = me.element.DataTable();
      var columnDefs = me.option("columnDefs");
      var length = columnDefs.length;
      var rowData = {lineNO: Date.parse(new Date())};
      var data = dataTable.data()[0]
      for (var x in columnDefs){
        var colDef = columnDefs[x];
        var defaultValue = row && row[colDef.name] ? row[colDef.name] : "" ;
        var format = colDef["format"]
        //smartunit
        if(format == "extend" && data){
          defaultValue = data[colDef.name]
          if(typeof defaultValue == "string"){
            defaultValue = JSON.parse(defaultValue)
          }
        }
        
        defaultValue = defaultValue ? defaultValue :  colDef.defaultValue;
        defaultValue = defaultValue ? defaultValue :  "";
        rowData[colDef.name] = defaultValue;
      }
          
      dataTable.row.add(rowData).draw( false );
    },

    updateRow : function(row) {
        /** TODO
      var dataTable = this.element;
      var updateRow = dataTable.rows(function(idx, data, node) {
            return data.id == id ? true : false;
      });

        if (updateRow[0].length > 0) {
            var nRow = dataTable.row(updateRow);
            if (nRow) {
                nRow.data(row);
            }
        }**/
    },
    
    deleteRow: function() {
      var me = this;
      var dataTable = me.element.DataTable();
      var seletedRows = dataTable.row('.selected');
      if(seletedRows.length > 0){
        me._deleteRowNotInDatabase();
        me._deleteRowInDatabase();
      }
    },
    
    _deleteRowInDatabase: function(){
        var me = this;
        var deleteOption = me.option("deleteAjaxOption");
          var delOption = {};
          $.extend(delOption, deleteOption);
          
          var rowIds = new Array();
          var dataTable = me.element.DataTable();
          var rows = dataTable.rows(function (idx, data, node) {
            var selected = data.ti_uuid && $(node).hasClass("selected");
            if(selected){
              rowIds.push(data);
            }
            return selected ? true : false;
          });
          
          if(rowIds.length > 0){
            delOption["data"] = JSON.stringify(rowIds);
          
            delOption.success = function(response){
              var successFunction = deleteOption.success;
              if(successFunction){
                  var success = deleteOption.success(response);
                  
                  if(success == true){
                        rows.remove().draw(false);
                  }
              }
              
            }
          
            $.ajax(delOption);
          }  
    },
    
    _deleteRowNotInDatabase: function(){
      var me = this;
        var dataTable = me.element.DataTable();
        var rows = dataTable.rows(function (idx, data, node) {
          return (!data.ti_uuid && $(node).hasClass("selected")) ? true : false;
        });
        
        rows.remove().draw(false);
    },
    
    save : function() {
      var me = this;
      var saveAjaxOption = me.option("saveAjaxOption");
      var saveOption = {};
      $.extend(saveOption, saveAjaxOption);
      
      var param = {};
      if(saveAjaxOption.param){
        param = saveAjaxOption.param();
      }
      
      var rowIds = new Array();
      var dataTable = me.element.DataTable();
      var datas = dataTable.data();
      var dataArray = [];
      for(var x=0; x < datas.length; x++){
        var rowData = datas[x];
        $.extend(rowData, param);
        dataArray.push(rowData);
        
      }
      saveOption["data"] = JSON.stringify(dataArray);
      
      saveOption.success = function(response){
          var successFunction = saveAjaxOption.success;
          if(successFunction){
            var success = saveAjaxOption.success(response);
            
            if(success == true){
              dataTable.clear();
              dataTable.rows.add(response["record"]).draw();
            }
          }
          
      }
      
      $.ajax(saveOption);
    },
    
    query: function(param){
      var me = this;
      var queryAjaxOption = me.option("queryAjaxOption");
      
      //meger ajax param
      var data = queryAjaxOption["data"];
      $.extend(data, param);
      queryAjaxOption["data"] = data;
      
      var queryOption = {};
      $.extend(queryOption, queryAjaxOption);
      
      queryOption.success = function(response){
          var successFunction = queryAjaxOption.success;
          if(successFunction){
            var success = queryAjaxOption.success(response);
            var dataTable = me.element.DataTable();
            if(success == true){
              dataTable.clear();
              /**
              for(var x in response){
                  if(x % 2 == 0){
                      
                      response[x]["uuu"] = {
                                units: [
                                {
                                    "unit": "packing_case",
                                    "quantity": "3",
                                    "conversion_quantity": 1,
                                    "unit_name": "箱",
                                    "quantity_show": "3箱"
                                },
                                {
                                    "unit": "basic_unit",
                                    "quantity": "8",
                                    "conversion_quantity": 1,
                                    "unit_name": "瓶",
                                    "quantity_show": "8瓶"
                                }]
                              }
                  }else {
                      response[x]["uuu"] = {};
                  }
              }  **/
              
              dataTable.rows.add(response).draw();
            }
          }
      }
      
      
      $.ajax(queryOption);
    },
    
    _toolBar: function(){
        var me = this;
        var deleteBtn = $("<li><a style='padding-bottom: 0px !important;'><i class='fa fa-minus'></i></a></li>");
        var addBtn = $("<li><a style='padding-bottom: 0px !important;'><i class='fa fa-plus'></i></a></li>");
        var saveBtn = $("<li><a style='padding-bottom: 0px !important;'><i class='fa fa-save'></i></a></li>");
        var refreshBtn = $("<li><a style='padding-bottom: 0px !important;'><i class='fa fa-refresh'></i></a></li>");
        var ul = $("<ul class='nav nav-pills' style='font-size: 18px;'>").append(deleteBtn).append(addBtn).append(saveBtn).append(refreshBtn);
        var bar = $("<div class='toolbar' />").append(ul);
        
        var elementId = me.element.attr("id");
        $("#" + elementId +"_wrapper div.toolbar").append(bar);
        
        var me = this;
        deleteBtn.on("click", function(){
          
          me.deleteRow();
        });
        
        addBtn.on("click", function(){
          me.addRow();
        });
        
        refreshBtn.on("click", function(){
          me.query();
        });
        
        saveBtn.on("click", function(){
          me.save();
        });
    },
    
    _updateTableData: function(rowIndex){
        var me = this;
        var dataTable = me.element.DataTable();
        var columnDefs = me.option("columnDefs");
        
        for(var x in columnDefs){
          var columnIndex = x;
          var columnDef = columnDefs[columnIndex];
          var name = columnDef.name;
          var widgetId = me.element.attr("id") + "_" + name + "_" + rowIndex + "_" + columnIndex;
          
          var widget = $("#" + widgetId);
            
            if(widget){
              dataTable.data()[rowIndex][name] = widget.val();
            }
        }
    },
    
    getDataTable: function(){
      var id = this.element.attr("id");
      return $('#' + id).DataTable();
    },
    
    destroy : function() {
      var dataTable = this.getDataTable();
      dataTable.destroy();
      //this.element.removeAttr( "xdatatable" );
      this.element.empty();
      
      // call the base destroy function  
      $.Widget.prototype.destroy.call(this);  
    }
});