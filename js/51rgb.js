
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

//    $(".login-in").on("click", function () {
//        $(".shade-box").removeClass("hidden");
//    });
//
    
    //登入
    $('.login-in').click(function(){
        $('.registerbox').removeClass('hidden');
    });
    $('.icon-guanbi,.shade-box').click(function(){
        $('.registerbox').addClass('hidden');
    });
    $('.login-up').click(function(){
         $('.registerbox,.signup-box').removeClass('hidden');
         $('.signin-box').addClass('hidden');
        
    });
    $('.sign-up').click(function(){
        $('.signup-box').removeClass('hidden');
        $('.signin-box,.phone-signup').addClass('hidden');
    });
    $('.sign-in').click(function(){
         $('.signin-box,').removeClass('hidden');
         $('.signup-box,.phone-signup').addClass('hidden');
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
});
