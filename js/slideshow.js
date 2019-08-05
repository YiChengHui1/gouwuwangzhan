var index=0;
$(function(){
	$(".focus .img-wrap a:first").show();
	$(".btn").click(function(){
		index=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".focus .img-wrap a").eq(index).fadeIn().siblings().fadeOut();
	});
	$(".focus .right").click(tabRight);
	$(".focus .left").click(tabLeft);
	setInterval("tabRight()",5000);
});
tabRight=function(){
	index++;
	if(index>7)index=0;
	$(".focus .btn").eq(index).addClass("active").siblings().removeClass("active");
	$(".focus .img-wrap a").eq(index).fadeIn().siblings().fadeOut();
}
tabLeft=function(){
	index--;
	if(index<0)index=7;
	$(".focus .btn").eq(index).addClass("active").siblings().removeClass("active");
	$(".focus .img-wrap a").eq(index).fadeIn().siblings().fadeOut();
}

