function initMenuTree(obj) {
    var menuSetting = {
        async: {
            enable: true,
            url: "query_menu",
            autoParam: ["ti_uuid"]
        },
        view: {
            showLine: false,
            showIcon: true,
            selectedMulti: false,
            dblClickExpand: false,
            addDiyDom: addMenuDiyDom,
            expandSpeed: ""
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        callback: {
            beforeDblClick: beforeMenuDblClick,
            beforeExpand: beforeMenuExpand,
            onAsyncSuccess: onMenuAsyncSuccess,
            onAsyncError: onMenuAsyncError,
            onClick: onMenuClick
        }
    };

    var zNodes_menu = [{
        ti_uuid: "18897474-8851-42bc-80e8-fb67b8bc1af2",
        id: "18897474-8851-42bc-80e8-fb67b8bc1af2_menu",
        pId: 0,
        name: "控制台",
        isParent: true
    }];

    //Menu

    function addMenuDiyDom(treeId, treeNode) {
        var spaceWidth = 5;
        var switchObj = $("#" + treeNode.tId + "_switch"),
            icoObj = $("#" + treeNode.tId + "_ico");
        switchObj.remove();
        icoObj.before(switchObj);

        if (treeNode.level > 1) {
            var spaceStr = "<span style='display: inline-block;width:" + (spaceWidth * treeNode.level) + "px'></span>";
            switchObj.before(spaceStr);
        }
    }

    function beforeMenuDblClick(treeId, treeNode) {
        if (treeNode.isParent) {
            if (!treeNode.isAjaxing) {
                ajaxGetMenuNodes(treeNode, "refresh");
                return true;
            } else {
                alert("Menu 正在下载数据中，请稍后展开节点");
                return false;
            }
        }
    }

    function onMenuClick(event, treeId, treeNode, clickFlag) {
        loadMenuIframePage(treeNode.ti_uri, treeNode.ti_uuid);
    }

    function beforeMenuExpand(treeId, treeNode) {
        if (!treeNode.isAjaxing) {
            if (treeNode.isParent && treeNode.children == 0) {
                ajaxGetNodes(treeNode, "refresh");
            }
            return true;
        } else {
            alert("Menu 正在下载数据中，请稍后展开节点。。。");
            return false;
        }
    }

    function loadMenuIframePage(uri, ti_uuid) {
        hidePanel();
        $("#inner_center_iframe").attr('src', uri);
    }

    function onMenuAsyncSuccess(event, treeId, treeNode, msg) {
        if (!msg || msg.length == 0) {
            return;
        }

        var zTree = $.fn.zTree.getZTreeObj("treeDemo");
        treeNode.icon = "";
        zTree.updateNode(treeNode);
        zTree.selectNode(treeNode.children[0]);
    }

    function onMenuAsyncError(event, treeId, treeNode, XMLHttpRequest, textStatus, errorThrown) {
        var zTree = $.fn.zTree.getZTreeObj("zNodesMenu");
        alert("Menu异步获取数据出现异常。");
        treeNode.icon = "";
        zTree.updateNode(treeNode);
    }

    function ajaxGetMenuNodes(treeNode, reloadType) {
        var zTree = $.fn.zTree.getZTreeObj("treeDemo");
        if (reloadType == "refresh") {
            treeNode.icon = "page/resource/ztree/css/zTreeStyle/img/loading.gif";
            zTree.updateNode(treeNode);
        }
        zTree.reAsyncChildNodes(treeNode, reloadType, true);
    }
    
    var zNodesMenuObj = $("#treeDemo");
    $.fn.zTree.init(zNodesMenuObj, menuSetting, zNodes_menu);
    
    zNodesMenuObj.hover(function () {
        if (!zNodesMenuObj.hasClass("showIcon")) {
            zNodesMenuObj.addClass("showIcon");
        }
    }, function () {
        zNodesMenuObj.removeClass("showIcon");
    });
}