function marktime() {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  var hour = today.getHours();
  if (hour < 10) hour = "0" + hour;
  var minutes = today.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;
  var seconds = today.getSeconds();
  if (seconds < 10) seconds = "0" + minutes;

  document.getElementById("clock").innerHTML =
    day +
    "/" +
    month +
    "/" +
    year +
    " | " +
    hour +
    ":" +
    minutes +
    ":" +
    seconds;

  setTimeout("marktime()", 1000);
}
