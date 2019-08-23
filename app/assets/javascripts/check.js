$(document).on('turbolinks:load', function(){
  $(document).on('click','.check-box', function(){
    var target = $(this)
    var id = $(target).data()
    var url = `todos/${id.id}`
    $.ajax({
      url: url,
      type: "PATCH",
      data: {id, todo: {status: 1}},
      dataType: 'json'
    })
    .done(function(){
      $(target).removeClass('fa-square-o check-box')
      $(target).addClass('fa-check-square-o checked-box')
    })
    .fail(function(){
      console.log("失敗")
    })
  })

  $(document).on('click','.checked-box', function(){
    var target = $(this)
    var id = $(target).data()
    var url = `todos/${id.id}`
    $.ajax({
      url: url,
      type: "PATCH",
      data: {id, todo: {status: 0}},
      dataType: 'json'
    })
    .done(function(){
      $(target).removeClass('fa-check-square-o checked-box')
      $(target).addClass('fa-square-o check-box')
    })
    .fail(function(){
      console.log("失敗")
    })
  })
});