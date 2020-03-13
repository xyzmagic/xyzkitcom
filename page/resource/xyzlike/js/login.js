
function refreshVi(obj, vct){
  $(obj).attr("src", "vi?vct=" + vct + "&d=" + new Date().getTime());
}

function getLogin(){
  $.ajax({
    type: 'POST',
    url: 'get_login_info',
    dataType: 'json',
    success: function(response){
      if(response){
        login = response.login;
        if(login){
          $("span[name='login_user_nickname']").text(response.ti_nickname);
          
          $("#introduction").val(response.ti_introduction);
          var gender = response.ti_gender;
          $("#genderM").val("aa811adf-1d0b-4d21-9955-2b4a77723bc8");
          $("#genderF").val("96eb6ed8-0634-4135-8b6e-a63424adb5ff");
          $("input[name='gender']").removeAttr("checked");
          $("input[name='gender'][value='" + gender + "']").prop("checked", "checked");
          
          $("#login_success_a").trigger("click");
          
        }else {
          
        }
      }
    },
    error: function(){
      
    }
  });
}

function loginAction(form) {
  
  data = $('#' + form).serialize();
  $.ajax({
    type: 'POST',
    url: 'login',
    data: data,
    success: loginResult,
    error: loginResult,
    dataType: 'json'
  });
}

function loginResult(response) {
  if (response != null && response.login == true) {
    resertForm("loginForm");
    getLogin();
  } else {
    if (response != null && response.message != null) {
      $.bootstrapGrowl(response.message, {type:"info",align:"center",delay:3000,});
    } else {
      $.bootstrapGrowl("登录失败，请重试。",{type:"info",align:"center",delay:3000,});
    }

    $("#login_vi").attr("src", "vi?vct=login_vc&d=" + new Date().getTime());
    $("#vc").focus().val("").blur();
  }
}


function logout(){
  resertForm("loginForm");

  $.ajax({
    type: 'POST',
    url: 'logout?ct=json',
    success: logoutResult,
    error: logoutResult,
    dataType: 'json'
  });

}

function logoutResult(response) {
  if (response != null && response.logout == true) {
    $("#login_a").trigger("click");
  } else {

    if (response != null && response.message != null) {
      $.bootstrapGrowl(response.message, {type:"info",align:"center",delay:3000,});
    } else {
      $.bootstrapGrowl("退出失败，请重试。", {type:"info",align:"center",delay:3000,});
    }
  }
  
  $("#login_vi").attr("src", "vi?vct=login_vc&d=" + new Date().getTime());
}

function editProfileAction(form) {
  data = {};
  var nickname = $("#nickname").val();
  var gender = $("input[name='gender']:checked").val();
  var introduction = $("#introduction").val();
  var editProfileImageVerifyCode = $("#editProfileImageVerifyCode").val();
  
  data.nickname = nickname;
  data.gender = gender;
  data.introduction = introduction;
  data.imageVerifyCode = editProfileImageVerifyCode;
  
  $.ajax({
    type: 'POST',
    url: 'edit_profile',
    data: data,
    success: editProfileResult,
    error: editProfileResult,
    dataType: 'json'
  });
}

function editProfileResult(response) {
  if (response != null && response.commit == true) {
    $.bootstrapGrowl(response.message, {type:"info",align:"center",delay:3000,});
    resertForm("editProfileForm");
    getLogin();
  } else {
    if (response != null && response.message != null) {
      $.bootstrapGrowl(response.message, {type:"info",align:"center",delay:3000,});
    } else {
      $.bootstrapGrowl("更新个人资料失败，请重试。",{type:"info",align:"center",delay:3000,});
    }
  }
  
  $("#editProfile_vi").attr("src", "vi?vct=editProfile_vc&d=" + new Date().getTime());
  $("#editProfileImageVerifyCode").focus().val("").blur();
}

function resertForm(formId){
     $(':input','#' + formId)
     .not(':button, :submit, :reset, :hidden')
     .val('')
     .removeAttr('checked')
     .removeAttr('selected');
}

