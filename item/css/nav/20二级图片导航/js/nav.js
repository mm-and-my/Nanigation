
$(function(){
	var li = $('.nav ul .m');
	li.eq(0).find('a').eq(0).hover(function(){
		$(this).html('HOME');
	},function(){
		$(this).html('首页');
	});

	li.eq(1).find('a').eq(0).hover(function(){
		$(this).html('WEBSITE');
	},function(){
		$(this).html('网站建设');
	});
	
	li.eq(2).find('a').eq(0).hover(function(){
		$(this).html('PRODUCT');
	},function(){
		$(this).html('产品服务');
	});
	
	li.eq(3).find('a').eq(0).hover(function(){
		$(this).html('CASE');
	},function(){
		$(this).html('成功案例');
	});
	
	li.eq(4).find('a').eq(0).hover(function(){
		$(this).html('SOLUTIONS');
	},function(){
		$(this).html('解决方案');
	});
	
	li.eq(5).find('a').eq(0).hover(function(){
		$(this).html('NEWS');
	},function(){
		$(this).html('新闻动态');
	});
	
	li.eq(6).find('a').eq(0).hover(function(){
		$(this).html('ABOUT');
	},function(){
		$(this).html('关于我们');
	});

	li.eq(7).find('a').eq(0).hover(function(){
		$(this).html('CONTACT');
	},function(){
		$(this).html('联系我们');
	});
	
	
	
	//根据网站目录结构对应导航高亮显示（可忽略）
	
	var url = window.location.href.toLowerCase();
	//alert(url);
	if (url.indexOf("/website/case/") > -1) {
		$(".aa4").attr("id", "sel");
	} else if (url.indexOf("/news/") > -1||url.indexOf("/marketing/knowledge/") > -1||url.indexOf("/about/news/") > -1||url.indexOf("/website/newweb/") > -1||url.indexOf("/marketing/seo/") > -1) {
		$(".aa5").attr("id", "sel");
	} else if (url.indexOf("/service/contact") > -1) {
		$(".aa7").attr("id", "sel");
	} else if (url.indexOf("/about/") > -1||url.indexOf("/service/") > -1) {
		$(".aa2").attr("id", "sel");
	} else if (url.indexOf("/mobile/") > -1||url.indexOf("/wangzhanjianshe/") > -1) {
		$(".aa6").attr("id", "sel");
	} else if (url.indexOf("/website/") > -1) {
		$(".aa3").attr("id", "sel");
	} else if (url.indexOf("/solutions/") > -1) {
		$(".aa8").attr("id", "sel");
	} else if (url.indexOf("/index.html") > -1) {
		$(".aa1").attr("id", "sel");
	} else {
		$(".aa1").attr("id", "sel");
	}
	
});