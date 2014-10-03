/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    
    $('.box-list > dl > dd:eq(0)').css({'background':'#F4F4F4','border-bottom':'1px #ebebeb solid','color':'#666'});   
    $('.box-list > dl > dd:eq(1)').css({'border-top':'1px #fff solid'});
    
    

    
    $(window).resize(function(){
        
            widthWindow = $(window).outerWidth();
            //alert(widthWindow);

            if(widthWindow < 1280){
                $('.nav-cat-center > .nav-right > ul > li').width(100);
                $('.nav-cat-center > .nav-right').width(900);
                $('.nav-cat-center > .nav-left').css({'margin-right':'5px'});

            }else{
                $('.nav-cat-center > .nav-right > ul > li').width(130);
                $('.nav-cat-center > .nav-right').removeAttr('style');
                $('.nav-cat-center > .nav-left').css({'margin-right':'15px'});
            }        
    });
    
    
    /*CHAMADAS DE FUNÇÃO*/
    animeMenu();
    animaCarrinho();
    
    
});

function animeMenu(){
    /*MENU A DIREITA*/
    $('.nav-right > ul > li').mouseover(function(){

        if($('.content-nav', this).length){
            $('.bg-nav').stop().fadeIn();
            mnIndex = $(this).index();
            console.log(mnIndex);
            if(mnIndex >= 2 && mnIndex <= 3){
                $('.content-nav', this).css({'left':'-205px'});
            }else if(mnIndex > 3 && mnIndex <= 5){
                $('.content-nav', this).css({'left':'-485px'});
            }else if(mnIndex == 6){
                $('.content-nav', this).css({'left':'-600px'});
            }else if(mnIndex == 7){
                $('.content-nav', this).css({'left':'-730px'});
            }else if(mnIndex == 8){
                $('.content-nav', this).css({'left':'-860px'});
            }
            
          $('.content-nav', this).stop().fadeIn();
        }

    });  
    
    $('.nav-right > ul > li').mouseout(function(){

                $('.content-nav', this).stop().fadeOut();
                $('.bg-nav').stop().fadeOut();
    });
    /*MENU A ESQUERDA*/
    $('.nav-left').mouseover(function(){

        $('.content-nav', this).stop().fadeIn();
         $('.bg-nav').stop().fadeIn();
    });  
    
    $('.nav-left').mouseout(function(){

                $('.content-nav', this).stop().fadeOut();
                $('.bg-nav').stop().fadeOut();
    });    
    
}

function animaCarrinho(){
    $('.wrap-car').mouseover(function(){
        $('ul',this).stop().fadeIn();
         $('.bg-nav2').stop().fadeIn();
    });  
    
    $('.wrap-car').mouseout(function(){
            $('ul',this).stop().fadeOut();
            $('.bg-nav2').stop().fadeOut();
    });     
}


