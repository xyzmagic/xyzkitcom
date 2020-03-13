/**
 "http://localhost:8080/tiomg/related_pages","a34fa7b9-c87d-4e92-b527-140b5313f08a"
 var columns = [
 {id: "num", name: "#", field: "index", width: 50},
 {id: "target", name: "Target Name", field: "target_name", width: 250, cssClass: "cell-story",sortable: true},
 {id: "target_identifier", name: "Identifier", field: "identifier",formatter: targetFormatter, width: 250, cssClass: "cell-story",sortable: true},
 {id: "target_note", name: "Note", field: "note", width: 150, cssClass: "cell-story",sortable: true}
 ];
 
 OR
 var columns = [
 {id: "io_uuid", name: "UUID", field: "io_uuid", width: 250},
 {id: "io_source_record", name: "Source Record", field: "io_source_record", width: 250, cssClass: "cell-story",sortable: true},
 {id: "io_source_name", name: "Source Name", field: "io_source_name", width: 250, cssClass: "cell-story",sortable: true},
 {id: "io_target_record", name: "Target Record", field: "io_target_record", width: 250, cssClass: "cell-story",sortable: true},
 {id: "io_target_name", name: "Target Name", field: "io_target_name", width: 250, cssClass: "cell-story",sortable: true},
 ];
 
 {
 selector: "the id of div",   ------ required
 columns: columns,  ------ required
 url: "http://localhost:8080/tiomg/related_pages", ------ required
 options: form_data ------ required,
 options: options ------ required
 }
 **/

function initiateSlickGrid(obj) {
  var options = {
    enableCellNavigation: true,
    showHeaderRow: true,
    headerRowHeight: 30,
    explicitInitialization: true
  };

  var _url = obj.url;
  var _columns = obj.columns;
  var _selector = obj.selector;
  var _options = obj.options ? obj.options : options;
  var _form_data = obj.form_data;
  //whether add the checkbox selector plug
  var _checkbox_selector = Boolean(obj.checkbox_selector);


  var dataView;
  var grid;

  var columnFilters = {};


  var loader = new Slick.Data.RemoteModel(_url, _form_data, null);

  var checkboxSelector;
  if (_checkbox_selector) {
    checkboxSelector = new Slick.CheckboxSelectColumn({
      cssClass: "slick-cell-checkboxsel"
    });
    _columns.splice(0,0,checkboxSelector.getColumnDefinition());
  }

  dataView = new Slick.Data.DataView();
  grid = new Slick.Grid("#" + _selector, dataView, _columns, _options);
  
  if (_checkbox_selector) {
    grid.setSelectionModel(new Slick.RowSelectionModel({selectActiveRow: false}));
    grid.registerPlugin(checkboxSelector);
  }
  

  grid.onViewportChanged.subscribe(function (e, args) {
    loader.ensureData();
  });

  loader.onDataLoaded.subscribe(function (e, args) {
    loader.ensureData();
  });


  //loading ...
  var loadingIndicator = null;
  loader.startDataLoading.subscribe(function () {
    if (!loadingIndicator) {
      loadingIndicator = $("<span class='loading-indicator'><label>loading ...</label></span>").appendTo(document.body);
      var $g = $("#" + _selector);

      loadingIndicator.css("position", "absolute").css("top", $g.position().top + $g.height() / 2 - loadingIndicator.height() / 2).css("left", $g.position().left + $g.width() / 2 - loadingIndicator.width() / 2);
    }

    loadingIndicator.show();
  });

  loader.endDataLoading.subscribe(function (e, args) {
    loadingIndicator.fadeOut();
    dataView.setItems(loader.data);
  });


  ////////////////////////////////////////////////////////////////
  //implement a simple filter


  function filter(item) {
    for (var columnId in columnFilters) {
      if (columnId !== undefined && columnFilters[columnId] !== "") {
        var c = grid.getColumns()[grid.getColumnIndex(columnId)];
        var regExp = new RegExp(columnFilters[columnId], "i");
        if (!regExp.test(item[c.field])) {
          return false;
        }
      }
    }
    return true;
  }

  dataView.onRowCountChanged.subscribe(function (e, args) {
    grid.updateRowCount();
    grid.render();
  });

  dataView.onRowsChanged.subscribe(function (e, args) {
    grid.invalidateRows(args.rows);
    grid.render();
  });

  $(grid.getHeaderRow()).delegate(":input", "change keyup", function (e) {
    var columnId = $(this).data("columnId");
    if (columnId != null) {
      columnFilters[columnId] = $.trim($(this).val());
      dataView.refresh();
    }
  });

  grid.onHeaderRowCellRendered.subscribe(function (e, args) {
    $(args.node).empty();
    $("<input type='text' class='header-search-input'/>").data("columnId", args.column.id).val(columnFilters[args.column.id]).appendTo(args.node);
  });

  grid.init();

  dataView.beginUpdate();
  dataView.setItems(loader.data);
  dataView.setFilter(filter);
  dataView.endUpdate();

  // load the first page
  grid.onViewportChanged.notify();
  grid.dataView = dataView;
  return grid;
}