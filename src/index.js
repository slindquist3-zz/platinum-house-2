(function(){
//always load home section first

  $(document).ready(function() {


    if ( $(window).width() > 600 ) {

      //if the url has a class name in the title, hide other sections and show that section, otherwise, just do regular

      if (window.location.href.includes("#london-diaries")) {

        $('#classes').hide();
        $('#london-diaries').show();
        $('#home-span').removeClass('link-active')
        $('#london-diaries-span').addClass('link-active')
        $('#home').hide();
        $('#amex-logo').show();

      } else if (window.location.href.includes("#classes")) {

        $('#home-span').removeClass('link-active')
        $('#classes-span').addClass('link-active')
        $('#classes').show();
        $('#london-diaries').hide();
        $('#home').hide();
        $('#amex-logo').show();

      } else {

        $('#classes').hide();
        $('#london-diaries').hide();
        $('#home').show();
        $('#amex-logo').hide();

      }


      // navigation logic
      $('#nav-link-home').on('click', function() {
        $('#classes').hide();
        $('#london-diaries').hide();
        $('#home').show();
        $('#amex-logo').hide();

      });
      $('#nav-link-classes').on('click', function() {
        $('#home').hide();
        $('#london-diaries').hide();
        $('#classes').show();
        $('#amex-logo').show();

      });
      $('#nav-link-london-diaries').on('click', function() {
        $('#home').hide();
        $('#classes').hide();
        $('#london-diaries').show();
        $('#amex-logo').show();

      });

    }

    $(window).on('resize', function() {

      if ( $(window).width() <= 600 ) {
        $('#home').show();
        $('#classes').show();
        $('#london-diaries').show();
      } else {

        var links = $('.nav-link-text');

        $.each(links, function(index, link) {

          var id = $(link).attr('data-name');

          if ($(link).hasClass('link-active')) {

            $(id).show();

          } else {

            $(id).hide();

          }

        });

      }

    });

  });

  $('.nav-link').on('click', function() {

    $('.nav-link-text').removeClass('link-active');

    $(this).find($('.nav-link-text')).addClass('link-active');

  });

})();
