(function($){
    $.fn.sld = function(params, params2){

        return this.each(function(){

            $(window).on('scroll', function(e){
                
                let top = $(params);

                let top2 = $(params2);

                let scroll = $(this).scrollTop();

            top.each(function(){

                let item = $(this).offset().top;

                if(scroll > item - 300){
                    
                    $(this).animate({
                        marginRight:'0',
                    });

                }

            });

            top2.each(function(){

                let item = $(this).offset().top;

                if(scroll > item - 300){

                    $(this).animate({
                        marginLeft:'0'
                    });

                }

            });

        });  
    });
}
})(jQuery);
