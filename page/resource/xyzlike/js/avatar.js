function initAvatar(){var i=document.getElementById("avatar"),c=document.getElementById("image"),f=document.getElementById("input"),d=$(".alert"),g=$("#modal"),a,h="";f.addEventListener("change",function(b){var b=b.target.files,a=function(b){f.value="";c.src=b;d.hide();g.modal("show")},e;if(b&&b.length>0)if(b=b[0],h=b.name,URL)a(URL.createObjectURL(b));else if(FileReader)e=new FileReader,e.onload=function(){a(e.result)},e.readAsDataURL(b)});g.on("shown.bs.modal",function(){a=new Cropper(c,{aspectRatio:1,
viewMode:1,cropBoxResizable:!1,dragMode:"none"})}).on("hidden.bs.modal",function(){a.destroy();a=null});document.getElementById("zoomPlus").addEventListener("click",function(){a.zoom(0.1)});document.getElementById("zoomMinus").addEventListener("click",function(){a.zoom(-0.1)});document.getElementById("crop").addEventListener("click",function(){var b;a&&(b=a.getCroppedCanvas({width:200,height:200}),d.removeClass("alert-success alert-warning"),b.toBlob(function(b){var a=new FormData;a.append("siteType",
"xyzlike-avatar");a.append("operation","upload");var c=(new Date).getTime();a.append("stamp",c);a.append("files[]",b,h);$.ajax("avatar",{method:"POST",data:a,processData:!1,contentType:!1,complete:function(a){(a=a.responseJSON)?a.commit?i.src=a.url:d.show().addClass("alert-warning").text("\u4e0a\u4f20\u5931\u8d25\u3002"):d.show().addClass("alert-warning").text("\u4e0a\u4f20\u5931\u8d25\u3002")}})}))})};