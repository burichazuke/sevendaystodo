$(document).on('turbolinks:load', function(){

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
    })
    .fail(function(){
      console.log("失敗");
    })
  })
});