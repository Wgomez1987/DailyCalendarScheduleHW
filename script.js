var localeSettings = {};
dayjs.locale(localeSettings);

$(function () {


  function hourlyColor() {
    $('.time-block').each(function () {
      var currentHour = dayjs().hour();
      console.log(currentHour)
      var blockHour = parseInt(this.id);
      if (blockHour < currentHour) {
        $(this).addClass('past')
      } else if (blockHour === currentHour) {
        $(this).removeClass('past')
        $(this).addClass('present')
      } else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
      }

    });
  }


  $('.saveBtn').on('click', function () {
    var key = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
  });



  $('.time-block').each(function () {
    var key = $(this).attr('id');
    var value = localStorage.getItem(key);
    $(this).children('.description').val(value);
  });

  function updateTime() {
    var dateElement = $('#date');
    var timeElement = $('#time');
    var currentDate = dayjs().format('dddd, MMMM D, YYYY');
    var currentTime = dayjs().format('hh:mm:ss A');
    dateElement.text(currentDate);
    timeElement.text(currentTime);
  }
  hourlyColor();


  setInterval(updateTime, 1000);
});