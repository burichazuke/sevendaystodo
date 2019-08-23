$(document).on('turbolinks:load', function() {
  $('#calendar').fullCalendar({
    events: '/todos.json',
    dayClick: function () {
      var date = $(this).data()
      window.location.href = "/todos/new?name=" + date.date;
    },
  })
});

