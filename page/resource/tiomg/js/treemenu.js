$.widget( "custom.treemenu", {
      options: {
         url: 'query_tree_menu',
         type: "POST",
         data: null,
         header: null
      },
      
      _create: function() {
        this._queryMenuJSON();
 
        this.element.hide();
      },
 
      _queryMenuJSON: function() {
        var me = this;
        $.ajax({
          type: this.options.type,
          url: this.options.url,
          data: this.options.data,
          success: function(response){
             me.treemenu = me._buildMenu(response);
          },
          error: function(){
            var menu = $( "<div>" ).text("菜单初始化失败。").insertAfter( this.element );
          },
          dataType: 'json'
        });
      },
      
      _buildMenu: function(response){
          this._buildUl(response);
      },
      
      _buildUl: function(obj){
        
        var menu = $( "<ul>" )
          .addClass( "sidebar-menu" )
          .insertAfter( this.element );
        
        if(this.options.header){
            menu.append($('<li class="header"></li>').text(this.options.header));
        }
        
        for(var i=0;i<obj.length;i++){
          var li = this._buildLi(obj[i]);
          menu.append(li);
        }
        
        return menu;
      },
      
      _buildLi: function (item){
          var url = item['ti_uri'];
          /**
          var params = this._urlParam(url);
          var picon = params["icon"];
          params["icon"] = picon ? picon : 'fa fa-link';
          picon = params["icon"];**/
          
          var param = JSON.parse(item['ti_param']);
          var picon = param["icon"];
          picon = picon ? picon : 'fa fa-link';
          
          var name = item['name'];
          
          var li = $("<li>");
          var span = $("<span>").text(name);
          var a = $("<a>").attr('href', url); //<i class="fa fa-book"></i>
          var icon = $("<i>").addClass(picon);
          
          li.append(a.append(icon).append(span));
          
          if(item["isParent"] == 'true'){
            li.addClass("treeview");
            a.append("<span class='pull-right-container'><i class='fa fa-angle-left pull-right'></i></span>"); 
            
            var ul = $("<ul class='treeview-menu'>");
            for(var i=0;i<item.children.length;i++){
              ul.append(this._buildLi(item["children"][i]));
            }
            li.append(ul);
          }
          
          return li;
      },
 
      _destroy: function() {
        this.element.show();
        this.treemenu.remove();
      },
      
      _urlParam: function(url) { 
if(url) { 
url=url.substr(url.indexOf("?")+1); //字符串截取，比我之前的split()方法效率高 
} 
var result = {}, //创建一个对象，用于存name，和value 
queryString =url || location.search.substring(1), //location.search设置或返回从问号 (?) 开始的 URL（查询部分）。 
re = /([^&=]+)=([^&]*)/g, //正则，具体不会用 
m; 
while (m = re.exec(queryString)) { //exec()正则表达式的匹配，具体不会用 
result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]); //使用 decodeURIComponent() 对编码后的 URI 进行解码 
} 
return result; 
}
    });