$(function () {
    $("#comment").next().hide();
    $("#comment").focus(function(){
        $(this).attr("rows",3);
        $(this).next().show();

    })
    $("#comment").blur(function(){
        $(this).attr("rows",1);
        $(this).next().hide();
    })
})