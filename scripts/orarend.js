function toggleSchedule(day) {
  var schedule = document.getElementById(day);
  if (schedule.classList.contains('hidden')) {
    schedule.classList.remove('hidden');
  } else {
    schedule.classList.add('hidden');
  }
}