var countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("cd").innerHTML = days + "n " + hours + "ó "
  + minutes + "p " + seconds + "mp ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("cd").innerHTML = "LEJÁRT DÁTUM";
  }
}, 1000);
