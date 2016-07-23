
$(".first").hover(function(){
	$(".first>.second").css("display","block");
},function(){
	$(".first>.second").css("display","none");
})

$(".b").hover(function(){
	$(".b>.erji").css("display","block");
},function(){
	$(".b>.erji").css("display","none");
})

$(".c").hover(function(){
	$(".c>.erji").css("display","block");
},function(){
	$(".c>.erji").css("display","none");
})
//shoucang
$(".shoucang").hover(function(){
	$(".shoucangxiala").css("display","block");
},function(){
	$(".shoucangxiala").css("display","none");
})
//banner
$(".bimg").fadeOut(0).eq(0).fadeIn(0);
$(".btn").css("background","#211616").eq(0).css("background","#e5004f");
var num=0 
function move(){
	num++;
	if(num>=$(".bimg").length){
		num=0;
	}
	$(".bimg").fadeOut(200).eq(num).fadeIn(300)
	$(".btn").css("background","#211616").eq(num).css("background","#e5004f");
	$(".banner").css("background","url(./images/"+num+".jpg)");
	$(".banner").css("backgroundPosition"," -285px 0");
}
var t=setInterval(move,5000);0
$(".banner").hover(function(){
	$(".bannerleft").css("display","block");
	$(".bannerright").css("display","block");
	clearInterval(t);
},function(){
	$(".bannerleft").css("display","none");
	$(".bannerright").css("display","none");
	t=setInterval(move,5000);
})
$(".btn").mouseover(function(){	
	$(this).each(function(index,obj){
		$(".bimg").stop(true,true);
		var index=$(this).index();
		$(".btn").css("background","#211616").eq(index).css("background","#e5004f");
		$(".bimg").fadeOut(200).eq(index).fadeIn(300);
		$(".banner").css("background","url(./images/"+index+".jpg)");
		$(".banner").css("backgroundPosition"," -285px 0");
		num=index;
	})
})
$(".bannerleft").click(function(){
	move();
})
$(".bannerright").click(function(){
	num--;
	if(num<0){
		num=$(".bimg").length-1;
	}
	$(".bimg").fadeOut(200).eq(num).fadeIn(300)
	$(".btn").css("background","#211616").eq(num).css("background","#e5004f");
	$(".banner").css("background","url(./images/"+num+".jpg)");
	$(".banner").css("backgroundPosition"," -285px 0");
})

//zhezhao的移入移出事件不会写

//侧导航选项卡//隐藏三角
$(".cedaohangcon").each(function(index,obj){
	$(".cedaohangcon").hover(function(){
		var index=$(this).index();
		$(".cela").css("display","none").eq(index).css("display","block");
		$(".sanjiao").css("display","block").eq(index).css("display","none");
},function(){
		var index=$(this).index();
		$(".cela").eq(index).css("display","none");
		$(".sanjiao").eq(index).css("display","block");
})
})
$(".x1").hover(function(){
	$(".ximg1").attr("src","images/images/header-010_09.png");
},function(){
	$(".ximg1").attr("src","images/images/header-02_06.png");
})
$(".x2").hover(function(){
	$(".ximg2").attr("src","images/images/header-010_11.png");
},function(){
	$(".ximg2").attr("src","images/images/header-02_08.png");
})
$(".x3").hover(function(){
	$(".ximg3").attr("src","images/images/header-010_13.png");
},function(){
	$(".ximg3").attr("src","images/images/header-02_10.png");
})
$(".x4").hover(function(){
	$(".ximg4").attr("src","images/images/header-010_15.png");
},function(){
	$(".ximg4").attr("src","images/images/header-02_13.png");
})
$(".x5").hover(function(){
	$(".ximg5").attr("src","images/images/header-010_17.png");
},function(){
	$(".ximg5").attr("src","images/images/header-02_15.png");
})
$(".x6").hover(function(){
	$(".ximg6").attr("src","images/images/header-010_19.png");
},function(){
	$(".ximg6").attr("src","images/images/header-02_17.png");
})
$(".x7").hover(function(){
	$(".ximg7").attr("src","images/images/header-010_23.png");
},function(){
	$(".ximg7").attr("src","images/images/header-02_21.png");
})
$(".x8").hover(function(){
	$(".ximg8").attr("src","images/images/header-010_21.png");
},function(){
	$(".ximg8").attr("src","images/images/header-02_19.png");
})
$(".x9").hover(function(){
	$(".ximg9").attr("src","images/images/header-010_25.png");
},function(){
	$(".ximg9").attr("src","images/images/header-02_23.png");
})
$(".x10").hover(function(){
	$(".ximg10").attr("src","images/images/header-010_27.png");
},function(){
	$(".ximg10").attr("src","images/images/header-02_25.png");
})


//动态添加框框
var biantop=$('<div></div>');
biantop.addClass("activetop");
var bianleft=$('<div></div>');
bianleft.addClass("activeleft");
var bianright=$('<div></div>');
bianright.addClass("activeright");
var bianbottom=$('<div></div>');
bianbottom.addClass("activebottom");
$(".father").append(biantop);
$(".father").append(bianbottom);
$(".father").append(bianleft);
$(".father").append(bianright);
// $(".activetop").attr("background","red");***????????????????????????????
// $(".activeleft").attr("background","red");为什么样式设置不成功
//边框的动画
$(".father").hover(function(){
	var h=$(this).outerHeight();
	var w=$(this).outerWidth();	
	$(".activetop").stop(true,true);
	$(".activeleft").stop(true,true);
	$(".activeright").stop(true,true);
	$(".activebottom").stop(true,true);	
	$(".activetop",$(this)).animate({width:w});
	$(".activeleft",$(this)).animate({height:h});
	$(".activeright",$(this)).animate({height:h});
	$(".activebottom",$(this)).animate({width:w});
},function(){
	$(".activetop").stop(true,true);
	$(".activeleft").stop(true,true);
	$(".activeright").stop(true,true);
	$(".activebottom").stop(true,true);
	$(".activetop",$(this)).animate({width:0});
	$(".activeleft",$(this)).animate({height:0});
	$(".activeright",$(this)).animate({height:0});
	$(".activebottom",$(this)).animate({width:0});
})

//选项卡
$(".conbox").css("display","none").eq(0).css("display","block");
$(".titlebox").hover(function(){
	var index=$(this).index();
	$(".conbox").stop(true,true);
	$(".conbox").css("display","none").eq(index).css("display","block");
	$(".jianx").eq(index).css("display","block");
},function(){
	var index=$(this).index();
	$(".conbox").stop(true,true);
	$(".conbox").eq(index).css("display","block");
	$(".jianx").eq(index).css("display","none");
})

//同款部分
$(".remen").eq(0).css("display","block");
$(".zhuanguititle").each(function(index,obj){
	$(this).hover(function(){
		var index=$(this).index();
		$(".jian").eq(index).css("display","block");
		$(".zhuanguititle").eq(index).css("border-bottom","3px solid #e5004f");
		$(".remen").css("display","none").eq(index).css("display","block");
	},function(){
		var index=$(this).index();
		$(".jian").eq(index).css("display","none");
		$(".zhuanguititle").eq(index).css("border-bottom","none");
		$(".remen").eq(index).css("display","block");
	})
	
})

//种类点击更换
$(".slidel").hover(function(){
	$(this).css("backgroundPosition","-14px center");
},function(){
	$(this).css("backgroundPosition","0 center");
})
$(".slider").hover(function(){
	$(this).css("backgroundPosition","-42px center");
},function(){
	$(this).css("backgroundPosition","-28px center");
})


// $(".slidel").click(function(){

// 	var index=$(this).index(".slidel");
// 	$(".left").css({"left":0}).eq(index).animate({"left":-160},function(){
// 		$(".left").eq(index).css({"left":0});
// 			$(".slideimg:first",$(".left").eq(index)).insertAfter(".slideimg:last",$(".left").eq(index));
			
// 	})
// })


$(".slidel").each(function(index,obj){
	$(obj).click(function(){
		var index=$(this).index(".slidel");
		
		$(".left").eq(index).animate({"left":-160},function(){
			$(".left").eq(index).stop(true,false);
			var fa=$(".left").eq(index);
			$(".slideimg",$(fa)).eq(0).appendTo($(fa));
			$(".left").eq(index).css({"left":0});
			var img=$(".slideimg:first",$(fa));
			console.log(img)
		})
	})
})
$(".slider").each(function(index,obj){
	$(obj).click(function(){
		var index=$(this).index(".slider");
		
		$(".left").eq(index).animate({"left":160},function(){
			$(".left").eq(index).stop(true,false);
			var fa=$(".left").eq(index);
			$(".slideimg",$(fa)).eq(-1).prependTo($(fa));
			$(".left").eq(index).css({"left":0});
			var img=$(".slideimg:last",$(fa));
			console.log(img)
		})
	})
})


// $(".slider").click(function(){

// 	var index=$(this).index(".slider");
// 	$(".left").css({"left":0}).eq(index).animate({"left":160},function(){
// 		$(".left").eq(index).css({"left":0});
// 			$(".slideimg:last",$(".left").eq(index)).insertBefore(".slideimg:first",$(".left").eq(index));
			
// 	})
// })


//小banner部分
$(".floorimg-right").click(function(){
	$(".img1",$(this).parent()).animate({"left":-390});
	$(".img2",$(this).parent()).animate({"left":0});
	$(".fbtn:first",$(this).parent()).css({"background":""});
	$(".fbtn:last",$(this).parent()).css({"background":"#e5004f"});
})
$(".floorimg-left").click(function(){
	$(".img1",$(this).parent()).animate({"left":0});
	$(".img2",$(this).parent()).animate({"left":390});
	$(".fbtn:first",$(this).parent()).css({"background":"#e5004f"});
	$(".fbtn:last",$(this).parent()).css({"background":""});
})

$(".floorimg").hover(function(){
	$(".floorimg-left",$(this)).stop(true,true);
	$(".floorimg-right",$(this)).stop(true,true);;
	$(".floorimg-left",$(this)).animate({
		"width":30
	},100);
	$(".floorimg-right",$(this)).animate({
		"width":30
	},100);
},function(){
	$(".floorimg-left",$(this)).stop(true,true);
	$(".floorimg-right",$(this)).stop(true,true);
	$(".floorimg-left",$(this)).animate({
		"width":0
	},100);
	$(".floorimg-right",$(this)).animate({
		"width":0
	},100);
})



$(".fbtn").each(function(index,obj){
	var index=$(this).index();
	if(index==0){
		$(this).click(function(){
			$('img1,img2').stop(true,true);
			$(".img1",$(this).parent().parent()).animate({"left":0});
			$(".img2",$(this).parent().parent()).animate({"left":390});
			$(".fbtn:first",$(this).parent().parent()).css({"background":"#e5004f"});
			$(".fbtn:last",$(this).parent().parent()).css({"background":""});
})
	}else if(index==1){
		$(this).click(function(){
			$('img1,img2').stop(true,true);
			$(".img1",$(this).parent().parent()).animate({"left":-390});
			$(".img2",$(this).parent().parent()).animate({"left":0});
			$(".fbtn:first",$(this).parent().parent()).css({"background":""});
			$(".fbtn:last",$(this).parent().parent()).css({"background":"#e5004f"});
	})
	}
	
})	

//楼层跳转

$(window).scroll(function(){
	var tops=$(window).scrollTop();
	if(tops>750){
		$(".navbtnbox").show(100);
	}else{
		$(".navbtnbox").hide(100);
	}


	$(".navbtn").click(function(){
	var index=$(this).index();
	$(".navbtn").removeClass("aaa").eq(index).addClass("aaa");
	$(window).scrollTop(function(){
		var tops=$(".zhonglei").eq(index).position().top+20;
		var obj={sg:0};
		$(obj).animate({sg:tops},{
			speed:1000,
			step:function(){
				$(window).scrollTop(obj.sg)
			}
		})

	})
	
})
	
})
$(".f10").click(function(){
		$(".topnav,html").animate({"scrollTop":"1"},500)
	})