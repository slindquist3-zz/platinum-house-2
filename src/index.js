(function(){
//always load home section first
  $(document).ready(function() {
    $('#section-classes').hide();
    $('#section-london-diaries').hide();
    $('#section-home').show();
  })

  //navigation logic
  $('#nav-link-home').on('click', function() {
    $('#section-classes').hide();
    $('#section-london-diaries').hide();
    $('#section-home').show();
  });
  $('#nav-link-classes').on('click', function() {
    $('#section-home').hide();
    $('#section-london-diaries').hide();
    $('#section-classes').show();
  });
  $('#nav-link-london-diaries').on('click', function() {
    $('#section-home').hide();
    $('#section-classes').hide();
    $('#section-london-diaries').show();

  });

  $('.nav-link').on('click', function() {

    $('.nav-link-text').removeClass('link-active');

    $(this).find($('.nav-link-text')).addClass('link-active');

  });

})();
