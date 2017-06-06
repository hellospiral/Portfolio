(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(6000)
            .fadeOut(2000, showNextQuote);
    }

    showNextQuote();

})();

$(document).ready(function() {
  $('#getInTouch').click(function() {

    $(window).scrollTo(document.getElementById('contact'), 800);
  });

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

    /* Check the location of each desired element */
    $('.hideme').each( function(){

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > (bottom_of_object * .9) ){

        $(this).animate({'opacity':'1'},800);

      }
    });

    $('.hideMeQuicker').each( function(){

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > (bottom_of_object * .75) ){

        $(this).animate({'opacity':'1'},800);

      }
    });
  });
});
