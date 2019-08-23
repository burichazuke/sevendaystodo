$(document).on('turbolinks:load', function(){
  var html = `<img class="complete" src="/assets/nenga_hanko_1566540704707-c70421dd37f8d2349bdffddb19ec899a0fd50d0d31636b1e5463a720b01f0a53.png">`

  $(document).on('click','.check-box', function(){
    var target = $(this)
    var parent = $(this).parent().parent()
    var brother = $(parent).prev()
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
      $(brother).append(html)
    })
    .fail(function(){
      console.log("失敗")
    })
  })

  $(document).on('click','.checked-box', function(){
    var target = $(this)
    var parent = $(this).parent().parent()
    var brother = $(parent).prev()
    var child = $(brother).children().last()
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
      $(child).remove()
    })
    .fail(function(){
      console.log("失敗")
    })
  })
});