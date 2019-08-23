$(document).on('turbolinks:load', function() {
  $('#calendar').fullCalendar({
    events: [
      {
        id: 'a',
        title: 'できたか',
        start: '2019-08-01'
      }
    ]
  })
});

