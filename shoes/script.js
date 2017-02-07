$('.tab').click(function(){
    var id = $(this).attr('data-id') - 1;
    var count = $('.tabs').children('.tab').length;
    var tab_width = $(this).width();
    var slider_width = $('.slide').width();
     
    $('#pointer').stop().animate({'left':(id*tab_width)+'px'});
    $('.slide').stop().animate({'left':-(id*slider_width)+'px'});
});