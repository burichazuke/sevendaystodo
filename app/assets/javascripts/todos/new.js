$(document).on('turbolinks:load', function(){
  var reg = location.href.match(/\/todos\/new/)
  if(reg !== null) {
    $(window).load(function(){
      var query = location.search;
      var value = query.split('=');
      $('#deadline-form').val(value[1])
    })
  }

  autosize(document.querySelectorAll('textarea'));
})