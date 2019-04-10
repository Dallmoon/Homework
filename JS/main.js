var icon_down_open = $('.icon-down-open')


/*메인 nav 오픈 */
$(document).ready(function() {
    $('.menu_item_sub').hide();

    $(".menu_1").hover(
        function () {
            $('.menu_item_1_sub').stop().slideDown(300);
        },
         function () {
          $('.menu_item_1_sub').stop().slideUp(300);
        } 
      );
      $(".menu_2").hover(
        function () {
            $('.menu_item_2_sub').stop().slideDown(300);
        },
         function () {
          $('.menu_item_2_sub').stop().slideUp(300);
        } 
      );
      $(".menu_3").hover(
        function () {
            $('.menu_item_3_sub').stop().slideDown(300);
        },
         function () {
          $('.menu_item_3_sub').stop().slideUp(300);
        } 
      );
      $(".menu_4").hover(
        function () {
            $('.menu_item_4_sub').stop().slideDown(300);
        },
         function () {
          $('.menu_item_4_sub').stop().slideUp(300);
        } 
      );
});
$('.menu_1').focusin(function(){
    $('.menu_item_1_sub').show();
})
$('.menu_item_1_sub>li:last-child').focusout(function(){
    $('.menu_item_1_sub').hide();
})
$('.menu_2').focusin(function(){
    $('.menu_item_2_sub').show();
})
$('.menu_item_2_sub>li:last-child').focusout(function(){
    $('.menu_item_2_sub').hide();
})
$('.menu_3').focusin(function(){
    $('.menu_item_3_sub').show();
})
$('.menu_item_3_sub>li:last-child').focusout(function(){
    $('.menu_item_3_sub').hide();
})
$('.menu_4').focusin(function(){
    $('.menu_item_4_sub').show();
})
$('.menu_item_4_sub>li:last-child').focusout(function(){
    $('.menu_item_4_sub').hide();
})

  

/*언어 선택 창*/ 
icon_down_open.on('click focusin',function(){
    $('.language_select').removeClass("language_select_active")
    $('.language_select').addClass('language_select_active')
});
$('.language_select li').on('click' ,function(){
    $('.language_select').removeClass("language_select_active")    
});


$('.language_select li:last-child').on('focusout' ,function(){
    $('.language_select').removeClass("language_select_active")    
});


