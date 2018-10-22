$(function(){
    // 绑定Scroll进行顶部合法展示
    var top=0;
    var p=0;
    $(window).scroll(function(){
        top=$("html,body").scrollTop();
        if(top>p){
            $(".head").slideUp(400);
        }else {
            $(".head").slideDown(100);
        }
        p=top;
    })
})