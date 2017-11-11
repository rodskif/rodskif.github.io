//---------- vertical slider -----------------------
//(function($) {
    $(function() {
        $('.jcarousel')
            .jcarousel({
                vertical: true
            });

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
//})(jQuery);

//--------------- photo gallery -------------
var currentSrc;
$(".jcarousel li").on("click", "a", function () {
    // S(".current").remoteClass("current");
    // $(this).addClass("current");
    $(".current").removeClass("current");
    $(this).addClass("current");
   // $(this).addClass("current").siblings().removeClass("current")
    $(".photo").attr("src", $(this).prop("href"));
    currentSrc = $(this).prop("href");
   return false;
});
$(".jcarousel li").on("mouseenter", "a", function () {
  $(".current").removeClass("current");
  $(this).addClass("current");
  $(".photo-hover").attr("src", $(this).prop("href"));
   return false;
});
$(".jcarousel li").on("mouseleave", "a", function () {
  // $(".current").removeClass("current");
  $(this).removeClass("current");
  $(".photo img").attr("src", currentSrc);
   return false;
});