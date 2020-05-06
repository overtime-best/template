/*global $, window*/



$(function () {
    
    'use strict';
    
    //Adjust Header Height 
    $('.header').height($(window).height());
    
    // Center Header Content 
    
    //Toggle Navegation Bar 
    
    $('.menu').click(function () {
        $('.menu-items').slideToggle(1000);
        
        if (!$('.menu .show').hasClass('toggleC')) {
            
            $('.show').toggleClass('toggleC');
            $('.hide').toggleClass('toggleC');
            
            $('.menu span:first-of-type').css({

                transform: 'rotate(50deg) translate(0, 10px)'
            });
            $('.menu span:nth-of-type(2)').css({

                visibility: 'hidden'
            });
            $('.menu span:last-of-type').css({

                transform: 'rotate(-40deg) translate(1px, -10px)'
            });
        } else {
            $('.show').toggleClass('toggleC');
            $('.hide').toggleClass('toggleC');
            
            $('.menu span:first-of-type').css({
            
                transform: 'rotate(0deg)'
            });
            $('.menu span:nth-of-type(2)').css({
            
                visibility: 'visible'
            });
            $('.menu span:last-of-type').css({
            
                transform: 'rotate(0)'
            });
            
        }
        

    });
    
    
    //Adjust Scroll To Elements 
    
    $('.menu-items li a').click(function () {
        
        $('body, html').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
        $('.menu span:first-of-type').css({
            
            transform: 'rotate(0deg)'
        });
        $('.menu span:nth-of-type(2)').css({
            
            visibility: 'visible'
        });
        $('.menu span:last-of-type').css({
            
            transform: 'rotate(0)'
        });
        
 
    });
    
    
    //Made Fixed Navegation 
    
    $(window).scroll(function () {
        
        if ($(window).scrollTop() > $('.about').offset().top) {
            
            $('.links').addClass('fixed-links');
            
        } else {
            
            $('.links').removeClass('fixed-links');
        }
    });
    
    // Adjust Center Intro Padding 
    
    $('.intro').css({
        paddingTop: ($('.header').height() - $('.intro').height()) / 2
    });
});