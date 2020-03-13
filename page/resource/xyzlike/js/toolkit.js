
function initCopyButton(){
  $("[name='copyBtn']").click(function() {
        var copyButton = this;
        var cpId = $(copyButton).attr("id");
        var clipboard = new Clipboard("#" + cpId, {});
        clipboard.on('success', function(e) {
            
          var element = $(e.trigger);
          var tip = element.attr("data-tip");
          if(tip){
            $.bootstrapGrowl("已复制链接。", {type:"info", align:"center", delay:1000});
          }else {
            element.tooltip('show');
            setTimeout(function(e){
              element.tooltip('hide');
            },500);
          }
        });
      
        clipboard.on('error', function(e) {
          $(copyButton).tooltip('hide');
        });
        
        setTimeout(function(e){
          clipboard.destroy();
        },1000);
        
  });

}

    function refreshVi(obj, vct){
      $(obj).attr("src", "vi?vct=" + vct + "&d=" + new Date().getTime());
    }


    function initLoginModal(){
      $.HSCore.components.HSValidation.init('#loginForm', {
        rules: {
          username: "required",
          password: "required",
          vc: {
            required: true,
            minlength: 4,
            maxlength: 4
          }
        },
        submitHandler: function(form) {
          loginFromModal("loginForm");
        }
      });
      
      document.onkeydown = function(){
          if(event.keyCode == "13"){
            submitForm('loginForm');
          }
        }
    }
    
    function loginFromModal(form){
      $("#messageTip").text("");
      var data = $('#'+form).serialize();
      $.ajax({
        type: 'POST',
        url: 'login',
        data: data,
        dataType: 'json',
        complete: function(xhr, ts){
          var response = xhr.responseJSON;
          if(response){
            var logined = response.login;
            if(logined){
              $("[name='loginedBtn']").toggle(true);
              $("[name='loginBtn']").toggle(false);
              Custombox.modal.close();
            }else {
              var message = response.message;
              $("#messageTip").text(message);
            }
          }else {
            $("#messageTip").text("登录失败，请重试。");
          }
          $("#vi").trigger("click");
          $("#vc").val("");
        }
      });
    }


function followToggle(url, param){
  var id = param.id;
  $.ajax({
    type: 'POST',
    url: url,
    data: param,
    dataType: 'json',
    beforeSend: function(XHR){
      var fcBtn = $("span[name='fw-" + id + "']");
      var isDisabled = fcBtn.attr('disabled');
      if(isDisabled){
        $.bootstrapGrowl("请等待，不要重复点击。", {type:"info",align:"center",delay:5000});
        return false;
      }else {
        fcBtn.attr('disabled', true);
        return true;
      }
    },
    complete: function(xhr, ts){
      var fcBtn = $("span[name='fw-" + id + "']");
      
      var response = xhr.responseJSON;
      if(response){
        var commit = response.commit;
        var isFollowed = response.isFollowed;
        var message = response.message;
        var follows = response.follows;
        if(commit){
          
          if(isFollowed){
            fcBtn.find("i[class='fa fa-star']").toggle(true);
            fcBtn.find("i[class='far fa-star']").toggle(false);
          }else {
            fcBtn.find("i[class='fa fa-star']").toggle(false);
            fcBtn.find("i[class='far fa-star']").toggle(true);
          }
          fcBtn.find("span[name='follows']").text(follows + " ");
          
          var tip = param["tip"];
          if(tip){
            var tipMessage = isFollowed ? "已关注/收藏。" : "已取消关注/收藏。";
            $.bootstrapGrowl(tipMessage, {type:"info",align:"center",delay:3000});
          }
        }else {
              
          var message = response.message;
          message = message ? message : "失败稍后请重试。";
          $.bootstrapGrowl(message, {type:"info",align:"center",delay:3000});
        }
      }else{
        $.bootstrapGrowl("失败稍后请重试。", {type:"info",align:"center",delay:5000});
      }
          
      fcBtn.attr('disabled', false);
          
    }
  });
}

function voteToggle(url, param){
  var answerId = param.answerId;
  $.ajax({
    type: 'POST',
    url: url,
    data: param,
    dataType: 'json',
    complete: function(xhr, ts){
      var likeBtn = $("#like-" + answerId);
      var dislikeBtn = $("#dislike-" + answerId);
      
      var response = xhr.responseJSON;
      if(response){
        var commit = response.commit;
        var vote = response.vote;
        var message = response.message;
        var likes = response.likes;
        var dislikes = response.dislikes;
        if(commit){
          
          if(vote == 1){
            likeBtn.find("i[name='thumbs-up']").toggle(true);
            likeBtn.find("i[name='thumbs-up-o']").toggle(false);
            dislikeBtn.find("i[name='thumbs-down']").toggle(false);
            dislikeBtn.find("i[name='thumbs-down-o']").toggle(true);
          }else if(vote == -1){
            likeBtn.find("i[name='thumbs-up']").toggle(false);
            likeBtn.find("i[name='thumbs-up-o']").toggle(true);
            dislikeBtn.find("i[name='thumbs-down']").toggle(true);
            dislikeBtn.find("i[name='thumbs-down-o']").toggle(false);
          }else if(vote == 0){
            likeBtn.find("i[name='thumbs-up']").toggle(false);
            likeBtn.find("i[name='thumbs-up-o']").toggle(true);
            dislikeBtn.find("i[name='thumbs-down']").toggle(false);
            dislikeBtn.find("i[name='thumbs-down-o']").toggle(true);
          }
          
          likeBtn.find("span[name='likes']").text(likes + " ");
          dislikeBtn.find("span[name='dislikes']").text(dislikes + " ");
          
        }else {
              
          var message = response.message;
          message = message ? message : "失败稍后请重试。";
          $.bootstrapGrowl(message, {type:"info",align:"center",delay:3000});
        }
      }else{
        $.bootstrapGrowl("失败稍后请重试。", {type:"info",align:"center",delay:5000});
      }
          
          
    }
  });
}

function toggleBox(id, scrollTarget){
  $("#allBox_" + id).toggle();
  $("#partBox_" + id).toggle();
  $("#hideBtn_" + id).toggle();
      
  var target = $("#" + scrollTarget);
  if(target){
    $("html,body").finish().animate({"scrollTop":target.offset().top-100}, 400);
  }
}