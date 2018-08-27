(function(){
//always load home section first
  // $(document).ready(function() {
  //   $('#section-classes').hide();
  //   $('#section-london-daries').hide();
  //   $('#section-home').show();
  // })

  //navigation logic
  $('#nav-link-home').on('click', function() {
    $('#section-classes').hide();
    $('#section-london-daries').hide();
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





})();
