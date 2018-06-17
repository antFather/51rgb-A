
$(function () {

    //banner
    $(".banner-box").slide({
        titCell: ".banner-hd ul li",
        mainCell: ".banner-bd",
        autoPlay: 'true',
        depayTime: 2500,
        effect: 'leftLoop',
        easing: 'easeInBack',
        trigger: 'click'
    });

    
    //登入界面
    $('.login-in').click(function(){
         $('.registerbox').removeClass('hidden');
         $('.sign-in').css('color','#188eee');
         $('.sign-up').css('color','#333');
    });
    $('.icon-guanbi,.shade-box').click(function(){
        $('.registerbox').addClass('hidden');
    });
    $('.login-up').click(function(){
         $('.registerbox,.signup-box').removeClass('hidden');
         $('.signin-box').addClass('hidden');
         $('.sign-up').css('color','#188eee');
         $('.sign-in').css('color','#333');
        
    });
    $('.sign-up').click(function(){
         $('.signup-box').removeClass('hidden');
         $('.signin-box,.phone-signup').addClass('hidden');
         $('.sign-up').css('color','#188eee');
         $('.sign-in').css('color','#333');
    });
    $('.sign-in').click(function(){
         $('.signin-box,').removeClass('hidden');
         $('.signup-box,.phone-signup').addClass('hidden');
         $('.sign-in').css('color','#188eee');
         $('.sign-up').css('color','#333');
    });
    $('.phone-signup-button').click(function(){
         $('.phone-signup').removeClass('hidden');
         $('.signup-box,.signin-box').addClass('hidden');
         $('.inputbutton a').html('注 册')

    });
     $('.usersign,.phone-sign').click(function(){
         $('.phone-signup').removeClass('hidden');
         $('.signup-box,.signin-box').addClass('hidden');
         $('.inputbutton a').html('登 录')     
    });
    
    //返回顶部按钮
    $(window).scroll(function(){
        var x=$(window).scrollTop();
        if(x>=1200){
            $('.backtop').removeClass('hidden');
        }else{
            $('.backtop').addClass('hidden');
        }
        
    })
    
    //客服按钮
    $('.qq').click(function(){
       var v=$('.qqbox').width();
       if(v==50){
           $('.qq').css('background-position','0 0'); 
           $('.qqbox').animate({width:'220px'},50);
           $('.kefu').animate({right:'0'},50);
        }else{
           $('.qq').css('background-position','-50px 0'); 
           $('.qqbox').css('width','50px');
           $('.kefu').css('right','-170px');
      }
        
    })
    
    
    
    
    
    
    
});







