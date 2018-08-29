(function(){
//always load home section first
  $(document).ready(function() {

    if ( $(window).width() > 600 ) {

      $('#section-classes').hide();
      $('#section-london-diaries').hide();
      $('#section-home').show();

      $('#amex-logo').hide();

      // navigation logic
      $('#nav-link-home').on('click', function() {
        $('#section-classes').hide();
        $('#section-london-diaries').hide();
        $('#section-home').show();
        $('#amex-logo').hide();

      });
      $('#nav-link-classes').on('click', function() {
        $('#section-home').hide();
        $('#section-london-diaries').hide();
        $('#section-classes').show();
        $('#amex-logo').show();

      });
      $('#nav-link-london-diaries').on('click', function() {
        $('#section-home').hide();
        $('#section-classes').hide();
        $('#section-london-diaries').show();
        $('#amex-logo').show();


      });

    }

    $(window).on('resize', function() {

      if ( $(window).width() <= 600 ) {
        $('#section-home').show();
        $('#section-classes').show();
        $('#section-london-diaries').show();
      }
      // else {
      //
      //   var links = $('.nav-link-text');
      //
      //   //check nav elements
      //   //then control sections
      //
      //   $.each(links, function(i, el) {
      //
      //     var section;
      //
      //     if ($(el).hasClass('link-active')) {
      //       console.log("this one!");
      //
      //       section = "#" + $(el).attr('data-name');
      //
      //     }
      //
      //   })
      //
      //   $.each($('section'), function(index, el) {
      //
      //     if ($(el).attr('id') === section) {
      //       $(el).show();
      //     } else {
      //       $(el).hide();
      //     }
      //
      //   })
      //
      //
      // }

    });

  });





  $('.nav-link').on('click', function() {

    $('.nav-link-text').removeClass('link-active');

    $(this).find($('.nav-link-text')).addClass('link-active');

  });


})();
