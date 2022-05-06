(function ($) {
    $(function () {
        
        
        $(".about-us-scroll").click(function () {
            $("html, body").animate({scrollTop: $(".about-us-scroll-jq").offset().top}, 1000);
        });
        
        $(".artists-scroll").click(function () {
            $("html, body").animate({scrollTop: $(".artists-scroll-jq").offset().top}, 1500);
        });
        
        $(".our-work-scroll").click(function () {
            $("html, body").animate({scrollTop: $(".our-work-scroll-jq").offset().top}, 2000);
        });
        
        $(".contact-scroll").click(function () {
            $("html, body").animate({scrollTop: $(".contact-scroll-jq").offset().top}, 2500);
        });
        
        
        /* Mobile navigation */
       $(".mobile-nav-icon").click(function(){
           
//          $(".nav-background").slideToggle();
//          $("nav").fadeToggle();
           $("nav ul").fadeToggle();  
       });
        
        /* Change hamburger to cross vice versa */

        
        $(".jq--image-hamburger").click(function(){
  
           if($(".jq--image-hamburger").attr("src") == "img/hamburgerMenu.png")
           {
               $($(".jq--image-hamburger").attr("src","img/crossMenu.png"));
           } 
           else 
           {
               $($(".jq--image-hamburger").attr("src","img/hamburgerMenu.png"));
           }  
       });


            
    });
})(jQuery);

