(function(){
//always load home section first

  $(document).ready(function() {

    if ( $(window).width() > 600 ) {

      $('#classes').hide();
      $('#london-diaries').hide();
      $('#home').show();
      $('#amex-logo').hide();

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
      }

    });

  });

  $('.nav-link').on('click', function() {

    $('.nav-link-text').removeClass('link-active');

    $(this).find($('.nav-link-text')).addClass('link-active');

  });


})();
