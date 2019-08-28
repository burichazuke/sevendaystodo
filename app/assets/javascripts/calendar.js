$(document).on('turbolinks:load', function() {
  if ($('#calendar').length) {
    function eventCalendar() {
        return $('#calendar').fullCalendar({
        });
    };
    function clearCalendar() {
        $('#calendar').html('');
    };

    $(document).on('turbolinks:load', function () {
        eventCalendar();
    });
    $(document).on('turbolinks:before-cache', clearCalendar);

    $('#calendar').fullCalendar({
      events: '/todos.json',
      dayClick: function () {
        var date = $(this).data()
        window.location.href = "/todos/new?name=" + date.date;
      },
    });
  }
});

