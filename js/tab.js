$(function(){
	index = 0;
	$("#tab1>div ul li").click(function(){
        index = $(this).index();
        console.log(index);
        $(this).addClass('current').siblings().removeClass("current");
        $('#tab1 section').eq(index).addClass('show_tab_item').siblings().removeClass("show_tab_item");
    });
    $("#tab2>div ul li").click(function(){
        index = $(this).index();
        console.log(index);
        $(this).addClass('current').siblings().removeClass("current");
        $('#tab2 section').eq(index).addClass('show_tab_item').siblings().removeClass("show_tab_item");
	});
});
