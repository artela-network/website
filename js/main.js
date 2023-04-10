if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
  handleFontSize();
} else {
  if (document.addEventListener) {
    document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
  } else if (document.attachEvent) {
    document.attachEvent("WeixinJSBridgeReady", handleFontSize);
    document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
  }
}

function handleFontSize() {
  // 设置网页字体为默认大小
  WeixinJSBridge.invoke('setFontSizeCallback', {
    'fontSize': 0
  });
  // 重写设置网页字体大小的事件
  WeixinJSBridge.on('menu:setfont', function() {
    WeixinJSBridge.invoke('setFontSizeCallback', {
      'fontSize': 0
    });
  });
}

jQuery(document).ready(function($) {
  $('.im-menu').on('click',function() {
    $('.indexModH5Menu').css('display','block');
  });
  $('.im-close').on('click',function() {
    $('.indexModH5Menu').css('display','none');
  });

  $(window).scroll(function() {
    var t = $(window).scrollTop();
    if(t > 200){
      $('.indexModH5 .im-hd').addClass('on');
    }else{
      $('.indexModH5 .im-hd').removeClass('on');
    }
  });
});
