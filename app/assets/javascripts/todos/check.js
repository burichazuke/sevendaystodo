$(document).on('turbolinks:load', function(){
  var compLength = gon.comp_length
  var length = gon.length;
  $(document).on('click','.check-box', function(){
    var target = $(this);
    var grandparent = $(target).parent().parent().prev();
    var id = $(target).data();
    var image = $(grandparent).children().last();
    $.ajax({
      url: `/todos/${id.id}`,
      type: "PATCH",
      data: {id, todo: {status: 1}},
      dataType: 'json'
    })
    .done(function(){
      $(target).removeClass('fa-square-o check-box');
      $(target).addClass('fa-check-square-o checked-box');
      $(image).fadeIn();

      // 達成率カウントアップ
      compLength ++;
      var result = Math.round(compLength / length * 100);
      var percent = $('#percent span').text(); 
      $({count: percent}).animate({count: result}, {
        duration: 1000,
        easing: 'swing',
        progress: function() { 
          $('#percent span').text(Math.ceil(this.count)); 
        }
      });
    })
    .fail(function(){
      console.log("失敗")
    })
  })

  $(document).on('click','.checked-box', function(){
    var target = $(this);
    var grandparent = $(target).parent().parent().prev();
    var image = $(grandparent).children().last();
    var id = $(target).data();
    $.ajax({
      url: `/todos/${id.id}`,
      type: "PATCH",
      data: {id, todo: {status: 0}},
      dataType: 'json'
    })
    .done(function(){
      $(target).removeClass('fa-check-square-o checked-box');
      $(target).addClass('fa-square-o check-box');
      $(image).hide();

      // 達成率カウントダウン
      compLength --;
      var result = Math.round(compLength / length * 100);
      var percent = $('#percent span').text(); 
      $({count: percent}).animate({count: result}, {
        duration: 1000,
        easing: 'swing',
        progress: function() { 
          $('#percent span').text(Math.ceil(this.count)); 
        }
      });
    })
    .fail(function(){
      console.log("失敗");
    })
  })
});