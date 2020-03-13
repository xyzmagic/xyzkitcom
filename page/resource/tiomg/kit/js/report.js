
    function initReportModal(){
      $("span[data-report='true']").click(function() {
        try {
          Custombox.modal.close("reportBox");
        }catch(err){}
        
        var modal = new Custombox.modal({
          content: {
            id:"reportBox",
            target: '#reportBoxModal',
            effect: 'fadein',
            fullscreen: true,
            onOpen: function(){
            
              //targetId, type, url, reason
              var reportBtn = $(event.currentTarget);
              var targetId = reportBtn.attr("data-report-target");
              var url = reportBtn.attr("data-report-url");

              $("#reportBoxModal").find("input[name='targetId']").val(targetId);
              $("#reportBoxModal").find("input[name='url']").val(url);
              $("#reportVi").trigger("click");
              
              var reportBtnTmp = $("#report-" + targetId);
              var reason = reportBtnTmp.data('report-reason');
              $("#reportBoxModal").find("textarea[name='reason']").val(reason);
              
            },
            onClose: function(){
              var targetId = $("#reportBoxModal").find("input[name='targetId']").val();
              var reason = $("#reportBoxModal").find("textarea[name='reason']").val();
              var reportBtn = $("#report-" + targetId);
              reportBtn.data('report-reason', reason);
            }
          }
        }).open();
      });
    }


//targetId, type, url, reason
function submitReport(btn){
  var targetId = $("#reportBoxModal input[name='targetId']").val();
  var url = $("#reportBoxModal input[name='url']").val();
  var reason = $("#reportBoxModal textarea[name='reason']").val();
  var verifyCode = $("#reportVerifyCode").val();
  
  var data = {};
  data.target = targetId;
  data.url = url;
  data.verifyCode = verifyCode;
  data.reason = reason;
  data.type = 0;
  
  var tip = $("#reportBoxModal span[name='tip']")
  
  if(!verifyCode && verifyCode.length == 4){
    tip.text("请输入4位验证码。");
    return;
  }
  
  if(!reason){
    tip.text("举报原因不能为空。");
    return;
  }
  
  var submitBtn = $(btn);
  $("#reportLoading").toggle(true);
  submitBtn.attr("disable", "true");
  tip.text("");
  
  $.ajax({
    type: 'POST',
    url: 'report',
    dataType: 'json',
    data: data,
    complete: function(xhr, ts){
    
      $("#reportLoading").toggle(false);
      submitBtn.removeAttr("disable");
      $("#reportVi").trigger("click");
      $("#reportVerifyCode").val("");
  
      var response = xhr.responseJSON;
      
      if(response){
        var commit = response.commit;
        var message = response.message;
        if(commit){
          tip.text(message);
        }else {
          tip.text(message);
        }
        
      }else {
        tip.text("服务器错误，稍后再试。");
      }

    }
  });
}