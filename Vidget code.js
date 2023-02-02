var menuBtn = $('.messenger-btn'),
      menu    = $('.messenger-links');
  menuBtn.on('click', function() {
      if ( menu.hasClass('show') ) {
          menu.removeClass('show');
      } else {
          menu.addClass('show');
      }
  });
  $(document).mouseup(function (e){ 
    var div = $('.messenger'); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      $('.messenger-links').removeClass('show');
    }
  });