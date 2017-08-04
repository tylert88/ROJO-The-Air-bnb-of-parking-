(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();



  }); // end of document ready
})(jQuery); // end of jQuery name space
$(document).ready(function(){
var options = [
      {selector: '#first_col', offset: 300, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
      {selector: '#second_col', offset: 300, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
      {selector: '#third_col', offset: 300, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
    ];
    Materialize.scrollFire(options);
});
