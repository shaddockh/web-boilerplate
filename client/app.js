(function ($) {
  window.$ = $;
  $(document).ready(function () {
    var mainApplication = require('./scripts/main');
    mainApplication.run();
  });
})(require('jquery/dist/jquery')(window));
