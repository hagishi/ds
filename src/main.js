
(function($) {

  var $window = $(window);
  var scenes  = [];
  var signage;

  var setUp = () => {
    options.forEach((value, index) => {
      var klass = new Klass(...value.data);
      scenes.push(klass);
    });
  };

  var init = () => {
    setUp();
    signage = new Signage(scenes);
  }();

  $window.on('load', (e) => {
    signage->start();
  });

})(jQuery)

var signage = new Signage();
